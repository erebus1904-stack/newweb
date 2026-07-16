import assert from "node:assert/strict";
import { readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import vm from "node:vm";

import {
  FINAL_CHAPTER_TARGETS,
  FINAL_DOMAIN_TARGETS,
  REFRESH_COUNT,
  REFRESH_START,
  countBy,
  validateRefreshSet,
} from "./pmp-2026-refresh/contract.mjs";
import {
  locateArrayElements,
  replaceElementRange,
  serializeElements,
  updatePmpTargetCounts,
} from "./pmp-2026-refresh/data-js-segment.mjs";
import { refreshQuestions } from "./pmp-2026-refresh/index.mjs";

const EXPECTED_EXAM_COUNT = 180;
const EXPECTED_PRACTICE_COUNT = REFRESH_START + REFRESH_COUNT;
const EXPECTED_QUESTION_COUNT = EXPECTED_PRACTICE_COUNT + EXPECTED_EXAM_COUNT;
const ELEMENT_INDENT = "      ";
const privateDirectory = dirname(fileURLToPath(import.meta.url));
const dataPath = resolve(privateDirectory, "..", "data.js");

function fail(message) {
  throw new Error(message);
}

function assertDeepEqual(actual, expected, label) {
  try {
    assert.deepStrictEqual(actual, expected);
  } catch {
    fail(`${label} changed unexpectedly.`);
  }
}

function detectLineEnding(source) {
  const crlfCount = source.match(/\r\n/g)?.length ?? 0;
  const bareLfCount = source.match(/(?<!\r)\n/g)?.length ?? 0;
  const bareCrCount = source.match(/\r(?!\n)/g)?.length ?? 0;
  if (bareCrCount > 0 || (crlfCount > 0 && bareLfCount > 0)) {
    fail("data.js has mixed or unsupported line endings.");
  }
  if (crlfCount > 0) return "\r\n";
  if (bareLfCount > 0) return "\n";
  fail("data.js does not contain a detectable LF or CRLF line ending.");
}

function evaluateCatalog(source, label) {
  let catalog;
  try {
    catalog = vm.runInNewContext(`${source}\n;examCatalog;`, Object.create(null), {
      filename: `${label}-data.js`,
      timeout: 10_000,
    });
  } catch (error) {
    fail(`${label} data.js evaluation failed: ${String(error?.message ?? error)}`);
  }
  if (!Array.isArray(catalog)) fail(`${label} examCatalog must be an array.`);
  return JSON.parse(JSON.stringify(catalog));
}

function uniqueExam(catalog, id, label) {
  const matches = catalog.filter((exam) => exam?.id === id);
  if (matches.length !== 1) {
    fail(`${label} catalog must contain exactly one ${id} exam; found ${matches.length}.`);
  }
  return matches[0];
}

function locatePmpQuestions(source) {
  const declaration = source.match(/\bconst\s+examCatalog\s*=\s*\[/);
  if (!declaration || declaration.index === undefined) {
    fail("data.js must contain a const examCatalog array declaration.");
  }
  const catalogStart = source.indexOf("[", declaration.index);
  const catalogSpans = locateArrayElements(source, catalogStart);
  const pmpSpans = catalogSpans.filter((span) => {
    try {
      return JSON.parse(source.slice(span.start, span.end))?.id === "pmp";
    } catch {
      fail("A top-level examCatalog element is not valid JSON.");
    }
  });
  if (pmpSpans.length !== 1) {
    fail(`data.js must contain exactly one top-level PMP object; found ${pmpSpans.length}.`);
  }

  const pmpSpan = pmpSpans[0];
  const pmpText = source.slice(pmpSpan.start, pmpSpan.end);
  const idMarker = pmpText.match(/"id"\s*:\s*"pmp"/);
  if (!idMarker || idMarker.index === undefined) fail("PMP id marker is missing.");
  const questionsMarker = pmpText
    .slice(idMarker.index + idMarker[0].length)
    .match(/"questions"\s*:\s*\[/);
  if (!questionsMarker || questionsMarker.index === undefined) {
    fail('PMP must contain a "questions" array after its id.');
  }
  const markerStart =
    pmpSpan.start + idMarker.index + idMarker[0].length + questionsMarker.index;
  const arrayStart = source.indexOf("[", markerStart);
  const spans = locateArrayElements(source, arrayStart);
  if (spans.length < EXPECTED_QUESTION_COUNT) {
    fail(
      `PMP questions must contain at least ${EXPECTED_QUESTION_COUNT} elements; found ${spans.length}.`,
    );
  }
  if (REFRESH_START + REFRESH_COUNT > spans.length) {
    fail("PMP refresh range extends beyond the located question elements.");
  }
  const locatedRecords = spans.map((span, rawIndex) => {
    try {
      return { rawIndex, span, question: JSON.parse(source.slice(span.start, span.end)) };
    } catch (error) {
      fail(
        `PMP question element ${rawIndex + 1} is not valid JSON: ${String(error?.message ?? error)}`,
      );
    }
  });
  const practiceRecords = locatedRecords.filter(({ question }) => question?.bankType !== "exam");
  const examRecords = locatedRecords.filter(({ question }) => question?.bankType === "exam");
  if (practiceRecords.length < EXPECTED_PRACTICE_COUNT) {
    fail(
      `PMP must contain at least ${EXPECTED_PRACTICE_COUNT} practice elements; found ${practiceRecords.length}.`,
    );
  }
  if (examRecords.length !== EXPECTED_EXAM_COUNT) {
    fail(`PMP must contain ${EXPECTED_EXAM_COUNT} exam elements; found ${examRecords.length}.`);
  }
  const targetRecords = practiceRecords.slice(REFRESH_START, REFRESH_START + REFRESH_COUNT);
  const firstRawIndex = targetRecords[0]?.rawIndex;
  const targetIsContiguous = targetRecords.every(
    ({ rawIndex }, index) => rawIndex === firstRawIndex + index,
  );
  if (!targetIsContiguous) {
    fail("PMP practice refresh elements must form one contiguous byte range.");
  }
  return {
    spans,
    practiceSpans: practiceRecords.map(({ span }) => span),
    examSpans: examRecords.map(({ span }) => span),
    arrayStart,
  };
}

function validateAuthoredSource() {
  const failures = validateRefreshSet(refreshQuestions);
  if (failures.length > 0) {
    fail(`Authored PMP refresh source contract failed:\n${failures.join("\n")}`);
  }
}

function withoutApprovedPmpChanges(pmp) {
  const clone = JSON.parse(JSON.stringify(pmp));
  delete clone.questions;
  for (const row of clone.examConfig?.domainTargets ?? []) delete row.practiceCount;
  for (const row of clone.examConfig?.chapterTargets ?? []) delete row.practiceCount;
  return clone;
}

function targetMetadata(rows, key) {
  const output = {};
  for (const row of Array.isArray(rows) ? rows : []) {
    if (Object.hasOwn(output, row?.[key])) {
      fail(`Duplicate target metadata row for ${String(row?.[key])}.`);
    }
    output[String(row?.[key])] = row?.practiceCount;
  }
  return output;
}

function assertCandidateTargets(pmp) {
  if (!Array.isArray(pmp.questions)) fail("Candidate PMP questions must be an array.");
  const practiceQuestions = pmp.questions.filter((question) => question?.bankType !== "exam");
  const examQuestions = pmp.questions.filter((question) => question?.bankType === "exam");

  assert.equal(
    practiceQuestions.length,
    EXPECTED_PRACTICE_COUNT,
    "Candidate PMP practice-question count is incorrect.",
  );
  assert.equal(
    examQuestions.length,
    EXPECTED_EXAM_COUNT,
    "Candidate PMP exam-bank count is incorrect.",
  );
  assert.equal(pmp.questionCount, EXPECTED_PRACTICE_COUNT, "PMP questionCount changed.");
  assert.equal(
    pmp.examConfig?.practiceQuestionCount,
    EXPECTED_PRACTICE_COUNT,
    "PMP examConfig practiceQuestionCount changed.",
  );
  assert.equal(
    pmp.bankConfig?.practiceQuestionCount,
    EXPECTED_PRACTICE_COUNT,
    "PMP bankConfig practiceQuestionCount changed.",
  );
  assert.equal(
    pmp.bankConfig?.examQuestionCount,
    EXPECTED_EXAM_COUNT,
    "PMP bankConfig examQuestionCount changed.",
  );

  assertDeepEqual(
    practiceQuestions.slice(REFRESH_START, REFRESH_START + REFRESH_COUNT),
    refreshQuestions,
    "Candidate PMP refresh slice/source parity",
  );
  assertDeepEqual(
    countBy(practiceQuestions, "domain"),
    FINAL_DOMAIN_TARGETS,
    "Candidate PMP domain allocation",
  );
  assertDeepEqual(
    countBy(practiceQuestions, "chapterId"),
    FINAL_CHAPTER_TARGETS,
    "Candidate PMP chapter allocation",
  );
  assertDeepEqual(
    targetMetadata(pmp.examConfig?.domainTargets, "domain"),
    FINAL_DOMAIN_TARGETS,
    "Candidate PMP domain metadata",
  );
  assertDeepEqual(
    targetMetadata(pmp.examConfig?.chapterTargets, "chapterId"),
    FINAL_CHAPTER_TARGETS,
    "Candidate PMP chapter metadata",
  );

  const deployedFailures = validateRefreshSet(
    practiceQuestions.slice(REFRESH_START, REFRESH_START + REFRESH_COUNT),
  );
  if (deployedFailures.length > 0) {
    fail(`Candidate deployed refresh contract failed:\n${deployedFailures.join("\n")}`);
  }
}

function assertPreservedCatalog(originalCatalog, candidateCatalog) {
  assert.equal(
    candidateCatalog.length,
    originalCatalog.length,
    "examCatalog top-level length changed.",
  );
  const originalPmp = uniqueExam(originalCatalog, "pmp", "Original");
  const candidatePmp = uniqueExam(candidateCatalog, "pmp", "Candidate");
  const originalCapm = uniqueExam(originalCatalog, "capm", "Original");
  const candidateCapm = uniqueExam(candidateCatalog, "capm", "Candidate");

  if (!Array.isArray(originalPmp.questions) || originalPmp.questions.length < EXPECTED_QUESTION_COUNT) {
    fail(`Original PMP questions must contain at least ${EXPECTED_QUESTION_COUNT} records.`);
  }
  if (!Array.isArray(candidatePmp.questions)) fail("Candidate PMP questions must be an array.");
  assert.equal(
    candidatePmp.questions.length,
    originalPmp.questions.length,
    "PMP question-array length changed.",
  );
  const originalPracticeQuestions = originalPmp.questions.filter(
    (question) => question?.bankType !== "exam",
  );
  const candidatePracticeQuestions = candidatePmp.questions.filter(
    (question) => question?.bankType !== "exam",
  );
  const originalExamQuestions = originalPmp.questions.filter(
    (question) => question?.bankType === "exam",
  );
  const candidateExamQuestions = candidatePmp.questions.filter(
    (question) => question?.bankType === "exam",
  );
  assert.equal(
    originalExamQuestions.length,
    EXPECTED_EXAM_COUNT,
    "Original PMP exam-bank count is incorrect.",
  );
  assert.equal(
    originalPracticeQuestions.length,
    EXPECTED_PRACTICE_COUNT,
    "Original PMP practice-question count is incorrect.",
  );
  assertDeepEqual(
    candidatePracticeQuestions.slice(0, REFRESH_START),
    originalPracticeQuestions.slice(0, REFRESH_START),
    "PMP practice questions 1-839",
  );
  assertDeepEqual(
    candidatePracticeQuestions.slice(REFRESH_START + REFRESH_COUNT),
    originalPracticeQuestions.slice(REFRESH_START + REFRESH_COUNT),
    "PMP practice records after the refresh range",
  );
  assertDeepEqual(candidateExamQuestions, originalExamQuestions, "All 180 PMP exam-bank records");
  assertDeepEqual(candidateCapm, originalCapm, "Complete CAPM exam object");

  const originalNonPmp = originalCatalog.filter((exam) => exam?.id !== "pmp");
  const candidateNonPmp = candidateCatalog.filter((exam) => exam?.id !== "pmp");
  assertDeepEqual(candidateNonPmp, originalNonPmp, "Non-PMP catalog objects");
  assertDeepEqual(
    withoutApprovedPmpChanges(candidatePmp),
    withoutApprovedPmpChanges(originalPmp),
    "Non-target PMP metadata",
  );
  assertCandidateTargets(candidatePmp);
}

function buildCandidate(source) {
  if (typeof source !== "string") fail("data.js source must be a string.");
  validateAuthoredSource();
  const eol = detectLineEnding(source);
  const { spans, practiceSpans, examSpans } = locatePmpQuestions(source);
  const originalCatalog = evaluateCatalog(source, "original");
  const originalPmp = uniqueExam(originalCatalog, "pmp", "Original");
  assert.equal(
    spans.length,
    originalPmp.questions.length,
    "Scanner/evaluated PMP question counts differ.",
  );
  assert.equal(
    practiceSpans.length,
    originalPmp.questions.filter((question) => question?.bankType !== "exam").length,
    "Scanner/evaluated PMP practice counts differ.",
  );
  assert.equal(
    examSpans.length,
    originalPmp.questions.filter((question) => question?.bankType === "exam").length,
    "Scanner/evaluated PMP exam counts differ.",
  );

  const targetSpan = practiceSpans[REFRESH_START];
  const lineStart = source.lastIndexOf(eol, targetSpan.start - 1) + eol.length;
  const existingIndent = source.slice(lineStart, targetSpan.start);
  if (existingIndent !== ELEMENT_INDENT) {
    fail(
      `PMP refresh start must use ${ELEMENT_INDENT.length} spaces of indentation; found ${JSON.stringify(existingIndent)}.`,
    );
  }
  const serialized = serializeElements(refreshQuestions, eol);
  if (!serialized.startsWith(ELEMENT_INDENT)) {
    fail("Serialized refresh questions are missing the expected element indentation.");
  }
  const replacedQuestions = replaceElementRange(
    source,
    practiceSpans,
    REFRESH_START,
    REFRESH_COUNT,
    serialized.slice(ELEMENT_INDENT.length),
  );
  const candidate = updatePmpTargetCounts(replacedQuestions);
  const candidateCatalog = evaluateCatalog(candidate, "candidate");
  assertPreservedCatalog(originalCatalog, candidateCatalog);
  return candidate;
}

export function buildSynchronizedData(source) {
  const candidate = buildCandidate(source);
  const secondCandidate = buildCandidate(candidate);
  if (secondCandidate !== candidate) {
    fail("PMP data synchronization is not byte-for-byte idempotent.");
  }
  return candidate;
}

function main() {
  const source = readFileSync(dataPath, "utf8");
  const candidate = buildSynchronizedData(source);
  if (candidate !== source) writeFileSync(dataPath, candidate, "utf8");
  console.log(`PASS synchronized ${REFRESH_COUNT} PMP refresh questions.`);
}

const invokedPath = process.argv[1] ? pathToFileURL(resolve(process.argv[1])).href : "";
if (invokedPath === import.meta.url) {
  try {
    main();
  } catch (error) {
    console.error(`FAIL PMP data synchronization: ${String(error?.message ?? error)}`);
    process.exitCode = 1;
  }
}
