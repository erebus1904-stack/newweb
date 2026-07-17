import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import vm from "node:vm";

import { buildCoverage } from "./build-pmp-2026-coverage.mjs";
import { REFRESH_COUNT, REFRESH_START } from "./pmp-2026-refresh/contract.mjs";

const privateDirectory = dirname(fileURLToPath(import.meta.url));
const dataPath = resolve(privateDirectory, "..", "data.js");

function loadPracticeQuestions() {
  const source = readFileSync(dataPath, "utf8");
  const catalog = vm.runInNewContext(`${source}\n;examCatalog;`, Object.create(null), {
    filename: dataPath,
  });
  const pmp = catalog.find((exam) => exam?.id === "pmp");
  return JSON.parse(
    JSON.stringify(pmp.questions.filter((question) => question?.bankType !== "exam")),
  );
}

function replaceRefreshedTopics(questions, topicForOffset) {
  return questions.map((question, index) => {
    if (index < REFRESH_START || index >= REFRESH_START + REFRESH_COUNT) return question;
    return { ...question, topic: topicForOffset(index - REFRESH_START) };
  });
}

const practiceQuestions = loadPracticeQuestions();
assert.equal(practiceQuestions.length, REFRESH_START + REFRESH_COUNT);
assert.deepEqual(buildCoverage(practiceQuestions).gaps, []);

const tenTopicQuestions = replaceRefreshedTopics(
  practiceQuestions,
  (offset) => `Refresh topic ${(offset % 10) + 1}`,
);
const tenTopicGaps = buildCoverage(tenTopicQuestions).gaps;

const concentratedTopicQuestions = replaceRefreshedTopics(practiceQuestions, (offset) => {
  if (offset < 35) return "Concentrated refresh topic";
  return `Distributed refresh topic ${((offset - 35) % 11) + 1}`;
});
const concentratedTopicGaps = buildCoverage(concentratedTopicQuestions).gaps;

const failures = [];
if (!tenTopicGaps.includes("Topics: expected at least 12, found 10.")) {
  failures.push(`10-topic refresh gap was not reported: ${JSON.stringify(tenTopicGaps)}`);
}
if (
  !concentratedTopicGaps.includes(
    "Topic Concentrated refresh topic: 15.22% exceeds the 15.00% limit.",
  )
) {
  failures.push(
    `35-of-230 refresh topic concentration was not reported: ${JSON.stringify(concentratedTopicGaps)}`,
  );
}

assert.deepEqual(failures, []);
console.log("PASS PMP 2026 coverage tests use the refreshed 230-question block for topic gaps.");
