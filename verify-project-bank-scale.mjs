import { readFileSync } from "node:fs";
import vm from "node:vm";

const code = readFileSync("data.js", "utf8");
const context = {};
vm.runInNewContext(`${code}; this.examCatalog = examCatalog;`, context);

const failures = [];
const expect = (condition, message) => {
  if (!condition) failures.push(message);
};

function getExam(id) {
  return context.examCatalog.find((exam) => exam.id === id);
}

function countByDomain(exam) {
  return exam.questions.reduce((counts, question) => {
    counts[question.domain] = (counts[question.domain] || 0) + 1;
    return counts;
  }, {});
}

function checkQuestionQuality(exam) {
  const explanations = new Set();
  exam.questions.forEach((question, index) => {
    const number = index + 1;
    for (const field of ["domain", "topic", "approach", "difficulty", "decisionRule"]) {
      expect(Boolean(question[field]), `${exam.id}#${number} missing ${field}`);
    }
    expect(String(question.text || "").split(/\s+/).filter(Boolean).length >= 18, `${exam.id}#${number} scenario is too short`);
    expect(Array.isArray(question.choices) && question.choices.length === 4, `${exam.id}#${number} must have four choices`);
    if (Array.isArray(question.choices)) {
      expect(question.choices.every((choice) => String(choice).split(/\s+/).filter(Boolean).length >= 4), `${exam.id}#${number} has thin choices`);
    }
    expect(Number.isInteger(question.correct) && question.correct >= 0 && question.correct <= 3, `${exam.id}#${number} has invalid correct index`);
    expect(String(question.explanation || "").split(/\s+/).filter(Boolean).length >= 28, `${exam.id}#${number} explanation is too short`);
    const normalized = String(question.explanation || "").replace(/\s+/g, " ").trim().toLowerCase();
    expect(!explanations.has(normalized), `${exam.id}#${number} duplicates an explanation`);
    explanations.add(normalized);
  });
}

function checkExam(id, expectedQuestionCount, expectedDomainCounts) {
  const exam = getExam(id);
  expect(Boolean(exam), `${id} exam exists`);
  if (!exam) return;

  expect(exam.questionCount === expectedQuestionCount, `${id} questionCount is ${expectedQuestionCount}`);
  expect(exam.questions.length === expectedQuestionCount, `${id} has ${expectedQuestionCount} practice questions`);
  expect(exam.examConfig?.practiceQuestionCount === expectedQuestionCount, `${id} practiceQuestionCount config is ${expectedQuestionCount}`);
  expect(Array.isArray(exam.examConfig?.domainTargets), `${id} has domain target config`);

  const counts = countByDomain(exam);
  for (const [domain, count] of Object.entries(expectedDomainCounts)) {
    expect(counts[domain] === count, `${id} practice bank has ${count} ${domain} questions`);
  }
  for (const [domain, count] of Object.entries(expectedDomainCounts)) {
    const target = exam.examConfig?.domainTargets?.find((item) => item.domain === domain);
    expect(target?.practiceCount === count, `${id} practice target has ${count} ${domain} questions`);
    expect(!("mockCount" in (target || {})), `${id} ${domain} target does not retain mockCount`);
  }
  expect(!("examQuestionCount" in exam.examConfig), `${id} config does not retain examQuestionCount`);
  expect(!("examDurationMinutes" in exam.examConfig), `${id} config does not retain examDurationMinutes`);
  expect(!("modeLabels" in exam.examConfig), `${id} config does not retain modeLabels`);
  checkQuestionQuality(exam);
}

checkExam(
  "pmp",
  250,
  {
    People: 105,
    Process: 125,
    "Business Environment": 20,
  }
);

checkExam(
  "capm",
  1000,
  {
    "Project Management Fundamentals and Core Concepts": 360,
    "Predictive, Plan-Based Methodologies": 170,
    "Agile Frameworks and Methodologies": 200,
    "Business Analysis Frameworks": 270,
  }
);

const script = readFileSync("script.js", "utf8");
const home = readFileSync("index.html", "utf8");
const capmPage = readFileSync("programs/capm.html", "utf8");
expect(/visibleExamCatalog = examCatalog\.filter\(\(exam\) => \["pmp", "capm"\]\.includes\(exam\.id\)\)/.test(script), "front end exposes PMP and CAPM");
expect(!/buildExamQuestionIndexes/.test(script), "front end does not retain mock exam index builder");
expect(/URLSearchParams\(window\.location\.search\)/.test(script), "front end can deep-link into a selected question bank");
expect(/Practice/.test(home) && !/Mock Exam/i.test(home), "home only presents practice mode");
expect(/index\.html\?exam=capm#practice-workspace/.test(capmPage), "CAPM page links directly to CAPM practice bank");

if (failures.length) {
  failures.slice(0, 80).forEach((failure) => console.error(`FAIL ${failure}`));
  if (failures.length > 80) console.error(`FAIL ${failures.length - 80} additional failures.`);
  process.exit(1);
}

console.log("PASS PMP and CAPM bank scale and practice-only checks.");
