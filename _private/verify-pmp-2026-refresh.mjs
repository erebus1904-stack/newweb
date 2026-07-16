import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import vm from "node:vm";

import {
  FINAL_CHAPTER_TARGETS,
  FINAL_DOMAIN_TARGETS,
  REFRESH_COUNT,
  REFRESH_START,
  countBy,
  validateRefreshSet,
} from "./pmp-2026-refresh/contract.mjs";
import { refreshQuestions } from "./pmp-2026-refresh/index.mjs";

const EXPECTED_EXAM_COUNT = 180;
const EXPECTED_PRACTICE_COUNT = REFRESH_START + REFRESH_COUNT;
const REPORT_ENDORSEMENT =
  "This is PassGrid's educational mapping, not PMI endorsement of individual questions.";
const MAX_DETAILED_FAILURES = 60;
const privateDirectory = dirname(fileURLToPath(import.meta.url));
const dataPath = resolve(privateDirectory, "..", "data.js");

function loadExamCatalog() {
  const source = readFileSync(dataPath, "utf8");
  const catalog = vm.runInNewContext(`${source}\n;examCatalog;`, Object.create(null), {
    filename: dataPath,
  });
  return JSON.parse(JSON.stringify(catalog));
}

function addValueFailure(failures, label, actual, expected) {
  if (actual !== expected) {
    failures.push(`${label} expected ${expected}, received ${String(actual)}.`);
  }
}

function metadataCounts(rows, key) {
  const counts = {};
  for (const row of Array.isArray(rows) ? rows : []) {
    counts[String(row?.[key])] = row?.practiceCount;
  }
  return counts;
}

function addAllocationFailures(failures, label, actual, expected) {
  for (const [name, expectedCount] of Object.entries(expected)) {
    const actualCount = actual[name] ?? 0;
    if (actualCount !== expectedCount) {
      failures.push(`${label} ${name} expected ${expectedCount}, received ${actualCount}.`);
    }
  }

  for (const [name, actualCount] of Object.entries(actual)) {
    if (!Object.hasOwn(expected, name)) {
      failures.push(`${label} ${name} is unexpected (received ${String(actualCount)}).`);
    }
  }
}

function reportCounts(rows) {
  const counts = {};
  for (const row of Array.isArray(rows) ? rows : []) {
    counts[String(row?.name)] = row?.count;
  }
  return counts;
}

function percentage(count, total) {
  return total === 0 ? 0 : Number(((count / total) * 100).toFixed(2));
}

function verifyReports(failures, practiceQuestions, refreshedQuestions) {
  if (!process.argv.includes("--require-report")) return;

  const jsonPath = resolve(privateDirectory, "reports", "pmp-2026-eco-coverage.json");
  const markdownPath = resolve(privateDirectory, "reports", "pmp-2026-eco-coverage.md");
  const hasJson = existsSync(jsonPath);
  const hasMarkdown = existsSync(markdownPath);

  if (!hasJson) {
    failures.push(
      "required coverage report is missing: _private/reports/pmp-2026-eco-coverage.json.",
    );
  }
  if (!hasMarkdown) {
    failures.push(
      "required coverage report is missing: _private/reports/pmp-2026-eco-coverage.md.",
    );
  }

  if (!Array.isArray(practiceQuestions) || !Array.isArray(refreshedQuestions)) return;

  const expectedDomains = countBy(practiceQuestions, "domain");
  const expectedRefreshedDomains = countBy(refreshedQuestions, "domain");

  if (hasJson) {
    try {
      const report = JSON.parse(readFileSync(jsonPath, "utf8"));
      addValueFailure(
        failures,
        "coverage report totalPracticeQuestions",
        report.totalPracticeQuestions,
        practiceQuestions.length,
      );
      addValueFailure(
        failures,
        "coverage report refreshedQuestions",
        report.refreshedQuestions,
        refreshedQuestions.length,
      );
      addValueFailure(
        failures,
        "coverage report endorsement",
        report.endorsement,
        REPORT_ENDORSEMENT,
      );
      addAllocationFailures(
        failures,
        "coverage report domain",
        reportCounts(report.domains),
        expectedDomains,
      );
      addAllocationFailures(
        failures,
        "coverage report refreshed domain",
        reportCounts(report.refreshedDomains),
        expectedRefreshedDomains,
      );
      if (!Array.isArray(report.gaps) || report.gaps.length !== 0) {
        failures.push("coverage report gaps must be an empty array.");
      }
    } catch (error) {
      failures.push(
        `coverage JSON report could not be read: ${String(error?.message ?? error)}.`,
      );
    }
  }

  if (hasMarkdown) {
    const markdown = readFileSync(markdownPath, "utf8");
    for (const [name, count] of Object.entries(expectedDomains)) {
      const row = `| ${name} | ${count} | ${percentage(count, practiceQuestions.length).toFixed(2)}% |`;
      if (!markdown.includes(row)) {
        failures.push(`coverage Markdown report is missing final domain row: ${row}`);
      }
    }
    if (!markdown.includes(REPORT_ENDORSEMENT)) {
      failures.push("coverage Markdown report is missing the non-endorsement note.");
    }
  }
}

function verify() {
  const failures = validateRefreshSet(refreshQuestions).map(
    (failure) => `authored source: ${failure}`,
  );

  let examCatalog;
  try {
    examCatalog = loadExamCatalog();
  } catch (error) {
    failures.push(`data.js could not be loaded: ${String(error?.message ?? error)}`);
    verifyReports(failures);
    return failures;
  }

  if (!Array.isArray(examCatalog)) {
    failures.push(`data.js examCatalog must be an array, received ${String(examCatalog)}.`);
    verifyReports(failures);
    return failures;
  }

  const pmp = examCatalog.find((exam) => exam?.id === "pmp");
  if (!pmp) {
    failures.push("data.js does not contain the PMP catalog entry.");
    verifyReports(failures);
    return failures;
  }

  const allQuestions = Array.isArray(pmp.questions) ? pmp.questions : [];
  if (!Array.isArray(pmp.questions)) failures.push("PMP questions must be an array.");

  const practiceQuestions = allQuestions.filter((question) => question?.bankType !== "exam");
  const examQuestions = allQuestions.filter((question) => question?.bankType === "exam");
  const deployedSlice = practiceQuestions.slice(REFRESH_START, REFRESH_START + REFRESH_COUNT);

  addValueFailure(
    failures,
    "PMP practice-question count",
    practiceQuestions.length,
    EXPECTED_PRACTICE_COUNT,
  );
  addValueFailure(failures, "PMP exam-bank count", examQuestions.length, EXPECTED_EXAM_COUNT);
  addValueFailure(failures, "PMP catalog questionCount", pmp.questionCount, EXPECTED_PRACTICE_COUNT);
  addValueFailure(
    failures,
    "PMP examConfig practiceQuestionCount",
    pmp.examConfig?.practiceQuestionCount,
    EXPECTED_PRACTICE_COUNT,
  );
  addValueFailure(
    failures,
    "PMP bankConfig practiceQuestionCount",
    pmp.bankConfig?.practiceQuestionCount,
    EXPECTED_PRACTICE_COUNT,
  );
  addValueFailure(
    failures,
    "PMP bankConfig examQuestionCount",
    pmp.bankConfig?.examQuestionCount,
    EXPECTED_EXAM_COUNT,
  );

  try {
    assert.deepStrictEqual(deployedSlice, refreshQuestions);
  } catch {
    failures.push(
      `deployed/source mismatch: PMP practice questions ${REFRESH_START + 1}-${
        REFRESH_START + REFRESH_COUNT
      } differ from the authored refresh source.`,
    );
  }

  addAllocationFailures(
    failures,
    "complete-bank domain",
    countBy(practiceQuestions, "domain"),
    FINAL_DOMAIN_TARGETS,
  );
  addValueFailure(
    failures,
    "examConfig domainTargets length",
    pmp.examConfig?.domainTargets?.length,
    Object.keys(FINAL_DOMAIN_TARGETS).length,
  );
  addAllocationFailures(
    failures,
    "examConfig domain metadata",
    metadataCounts(pmp.examConfig?.domainTargets, "domain"),
    FINAL_DOMAIN_TARGETS,
  );
  addValueFailure(
    failures,
    "examConfig chapterTargets length",
    pmp.examConfig?.chapterTargets?.length,
    Object.keys(FINAL_CHAPTER_TARGETS).length,
  );
  addAllocationFailures(
    failures,
    "examConfig chapter metadata",
    metadataCounts(pmp.examConfig?.chapterTargets, "chapterId"),
    FINAL_CHAPTER_TARGETS,
  );
  verifyReports(failures, practiceQuestions, deployedSlice);

  failures.push(
    ...validateRefreshSet(deployedSlice).map(
      (failure) => `deployed refresh slice: ${failure}`,
    ),
  );
  return failures;
}

const failures = verify();
if (failures.length === 0) {
  console.log("PASS PMP 2026 authored source, deployed refresh, metadata, and coverage reports agree.");
} else {
  console.error("FAIL PMP 2026 refresh verification.");
  failures
    .slice(0, MAX_DETAILED_FAILURES)
    .forEach((failure, index) => console.error(`${index + 1}. ${failure}`));
  console.error(`Total failures: ${failures.length}.`);
  process.exitCode = 1;
}
