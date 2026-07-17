import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import vm from "node:vm";

import {
  FINAL_DOMAIN_TARGETS,
  REFRESH_COUNT,
  REFRESH_DOMAIN_TARGETS,
  REFRESH_START,
  countBy,
} from "./pmp-2026-refresh/contract.mjs";

const ECO_VERSION = "July 2026";
const MAPPING_OWNER = "PassGrid";
const ENDORSEMENT =
  "This is PassGrid's educational mapping, not PMI endorsement of individual questions.";
const REQUIRED_APPROACHES = Object.freeze(["Agile", "Hybrid", "Predictive"]);
const REQUIRED_DIFFICULTIES = Object.freeze(["Easy", "Hard", "Medium"]);
const MINIMUM_TOPIC_COUNT = 12;
const MAX_TOPIC_SHARE = 0.15;
const privateDirectory = dirname(fileURLToPath(import.meta.url));
const dataPath = resolve(privateDirectory, "..", "data.js");
const reportsDirectory = resolve(privateDirectory, "reports");
const jsonPath = resolve(reportsDirectory, "pmp-2026-eco-coverage.json");
const markdownPath = resolve(reportsDirectory, "pmp-2026-eco-coverage.md");

function compareNames(left, right) {
  return left < right ? -1 : left > right ? 1 : 0;
}

function percentage(count, total) {
  return total === 0 ? 0 : Number(((count / total) * 100).toFixed(2));
}

function distribution(questions, property) {
  const total = questions.length;
  return Object.entries(countBy(questions, property))
    .map(([name, count]) => ({ name, count, percentage: percentage(count, total) }))
    .sort((left, right) => compareNames(left.name, right.name));
}

function addExactTargetGaps(gaps, label, actual, expected) {
  for (const [name, expectedCount] of Object.entries(expected)) {
    const actualCount = actual[name] ?? 0;
    if (actualCount !== expectedCount) {
      gaps.push(`${label} ${name}: expected ${expectedCount}, found ${actualCount}.`);
    }
  }

  for (const [name, actualCount] of Object.entries(actual).sort(([left], [right]) =>
    compareNames(left, right),
  )) {
    if (!Object.hasOwn(expected, name)) {
      gaps.push(`${label} ${name}: unexpected domain with ${actualCount} questions.`);
    }
  }
}

function findCoverageGaps(practiceQuestions, refreshedQuestions) {
  const gaps = [];
  addExactTargetGaps(
    gaps,
    "Final domain",
    countBy(practiceQuestions, "domain"),
    FINAL_DOMAIN_TARGETS,
  );
  addExactTargetGaps(
    gaps,
    "Refreshed domain",
    countBy(refreshedQuestions, "domain"),
    REFRESH_DOMAIN_TARGETS,
  );

  for (const domain of Object.keys(FINAL_DOMAIN_TARGETS)) {
    const domainQuestions = practiceQuestions.filter((question) => question?.domain === domain);
    const approachCounts = countBy(domainQuestions, "approach");
    const difficultyCounts = countBy(domainQuestions, "difficulty");

    for (const approach of REQUIRED_APPROACHES) {
      if ((approachCounts[approach] ?? 0) === 0) {
        gaps.push(`${domain}: missing ${approach} approach coverage.`);
      }
    }
    for (const difficulty of REQUIRED_DIFFICULTIES) {
      if ((difficultyCounts[difficulty] ?? 0) === 0) {
        gaps.push(`${domain}: missing ${difficulty} difficulty coverage.`);
      }
    }
  }

  const topicCounts = countBy(refreshedQuestions, "topic");
  const topicNames = Object.keys(topicCounts);
  if (topicNames.length < MINIMUM_TOPIC_COUNT) {
    gaps.push(`Topics: expected at least ${MINIMUM_TOPIC_COUNT}, found ${topicNames.length}.`);
  }
  if (refreshedQuestions.length > 0) {
    for (const topic of topicNames.sort(compareNames)) {
      const count = topicCounts[topic];
      if (count / refreshedQuestions.length > MAX_TOPIC_SHARE) {
        gaps.push(
          `Topic ${topic}: ${percentage(count, refreshedQuestions.length).toFixed(2)}% exceeds the 15.00% limit.`,
        );
      }
    }
  }

  return gaps;
}

export function buildCoverage(practiceQuestions) {
  const questions = Array.isArray(practiceQuestions) ? practiceQuestions : [];
  const refreshedQuestions = questions.slice(REFRESH_START, REFRESH_START + REFRESH_COUNT);

  return {
    ecoVersion: ECO_VERSION,
    mappingOwner: MAPPING_OWNER,
    endorsement: ENDORSEMENT,
    totalPracticeQuestions: questions.length,
    refreshedQuestions: refreshedQuestions.length,
    domains: distribution(questions, "domain"),
    refreshedDomains: distribution(refreshedQuestions, "domain"),
    topics: distribution(questions, "topic"),
    approaches: distribution(questions, "approach"),
    difficulties: distribution(questions, "difficulty"),
    chapters: distribution(questions, "chapterId"),
    gaps: findCoverageGaps(questions, refreshedQuestions),
  };
}

function markdownTable(label, rows) {
  return [
    `## ${label}`,
    "",
    "| Name | Count | Percentage |",
    "| --- | ---: | ---: |",
    ...rows.map(
      ({ name, count, percentage: rowPercentage }) =>
        `| ${name} | ${count} | ${rowPercentage.toFixed(2)}% |`,
    ),
    "",
  ];
}

export function toMarkdown(report) {
  const lines = [
    "# PMP July 2026 ECO coverage report",
    "",
    "## Data basis",
    "",
    `- ECO version: ${report.ecoVersion}`,
    `- Mapping owner: ${report.mappingOwner}`,
    `- Deployed practice questions: ${report.totalPracticeQuestions}`,
    `- Refreshed questions: ${report.refreshedQuestions}`,
    "- Scope: distributions are computed from the currently deployed PMP practice bank; refreshed domains use the deployed refresh slice.",
    "",
    `> ${report.endorsement}`,
    "",
    ...markdownTable("Final practice-bank domains", report.domains),
    ...markdownTable("Refreshed-question domains", report.refreshedDomains),
    ...markdownTable("Topics", report.topics),
    ...markdownTable("Approaches", report.approaches),
    ...markdownTable("Difficulties", report.difficulties),
    ...markdownTable("Chapters", report.chapters),
    "## Coverage gaps",
    "",
    ...(report.gaps.length === 0
      ? ["No coverage gaps detected."]
      : report.gaps.map((gap) => `- ${gap}`)),
    "",
  ];
  return lines.join("\n");
}

function loadPracticeQuestions() {
  const source = readFileSync(dataPath, "utf8");
  const catalog = vm.runInNewContext(`${source}\n;examCatalog;`, Object.create(null), {
    filename: dataPath,
  });
  if (!Array.isArray(catalog)) throw new TypeError("data.js examCatalog must be an array.");

  const pmp = catalog.find((exam) => exam?.id === "pmp");
  if (!pmp || !Array.isArray(pmp.questions)) {
    throw new TypeError("data.js must contain a PMP entry with a questions array.");
  }
  return JSON.parse(
    JSON.stringify(pmp.questions.filter((question) => question?.bankType !== "exam")),
  );
}

function expectedFiles() {
  const report = buildCoverage(loadPracticeQuestions());
  return [
    { path: jsonPath, content: `${JSON.stringify(report, null, 2)}\n` },
    { path: markdownPath, content: toMarkdown(report) },
  ];
}

function checkReports(files) {
  const stale = files.filter(
    ({ path, content }) => !existsSync(path) || readFileSync(path, "utf8") !== content,
  );
  if (stale.length === 0) {
    console.log("PASS coverage reports are current.");
    return;
  }

  for (const { path } of stale) {
    console.error(`FAIL coverage report is missing or stale: ${path}.`);
  }
  process.exitCode = 1;
}

function writeReports(files) {
  mkdirSync(reportsDirectory, { recursive: true });
  for (const { path, content } of files) writeFileSync(path, content, "utf8");
  console.log("PASS coverage reports written.");
}

function main() {
  const files = expectedFiles();
  if (process.argv.includes("--check")) checkReports(files);
  else writeReports(files);
}

if (resolve(process.argv[1] ?? "") === fileURLToPath(import.meta.url)) main();
