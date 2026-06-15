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

function checkExam(id, expectedQuestionCount, expectedMockCount, expectedDomainCounts, expectedMockCounts) {
  const exam = getExam(id);
  expect(Boolean(exam), `${id} exam exists`);
  if (!exam) return;

  expect(exam.questionCount === expectedQuestionCount, `${id} questionCount is ${expectedQuestionCount}`);
  expect(exam.questions.length === expectedQuestionCount, `${id} has ${expectedQuestionCount} practice questions`);
  expect(exam.examConfig?.practiceQuestionCount === expectedQuestionCount, `${id} practiceQuestionCount config is ${expectedQuestionCount}`);
  expect(exam.examConfig?.examQuestionCount === expectedMockCount, `${id} examQuestionCount config is ${expectedMockCount}`);
  expect(Array.isArray(exam.examConfig?.domainTargets), `${id} has domain target config`);

  const counts = countByDomain(exam);
  for (const [domain, count] of Object.entries(expectedDomainCounts)) {
    expect(counts[domain] === count, `${id} practice bank has ${count} ${domain} questions`);
  }
  for (const [domain, count] of Object.entries(expectedMockCounts)) {
    const target = exam.examConfig?.domainTargets?.find((item) => item.domain === domain);
    expect(target?.mockCount === count, `${id} mock target has ${count} ${domain} questions`);
  }
  checkQuestionQuality(exam);
}

checkExam(
  "pmp",
  250,
  180,
  {
    People: 105,
    Process: 125,
    "Business Environment": 20,
  },
  {
    People: 76,
    Process: 90,
    "Business Environment": 14,
  }
);

checkExam(
  "capm",
  200,
  150,
  {
    "Project Management Fundamentals and Core Concepts": 72,
    "Predictive, Plan-Based Methodologies": 34,
    "Agile Frameworks and Methodologies": 40,
    "Business Analysis Frameworks": 54,
  },
  {
    "Project Management Fundamentals and Core Concepts": 54,
    "Predictive, Plan-Based Methodologies": 26,
    "Agile Frameworks and Methodologies": 30,
    "Business Analysis Frameworks": 40,
  }
);

const script = readFileSync("script.js", "utf8");
const home = readFileSync("index.html", "utf8");
const capmPage = readFileSync("programs/capm.html", "utf8");
expect(/visibleExamCatalog = examCatalog\.filter\(\(exam\) => \["pmp", "capm"\]\.includes\(exam\.id\)\)/.test(script), "front end exposes PMP and CAPM");
expect(/buildExamQuestionIndexes/.test(script), "front end builds blueprint-based mock exam indexes");
expect(/examConfig\??\.domainTargets/.test(script), "front end reads domain target config");
expect(/URLSearchParams\(window\.location\.search\)/.test(script), "front end can deep-link into a selected question bank");
expect(/Practice/.test(home) && /Mock Exam/.test(home), "home separates Practice and Mock Exam labels");
expect(/index\.html\?exam=capm#practice-workspace/.test(capmPage), "CAPM page links directly to CAPM practice bank");

if (failures.length) {
  failures.slice(0, 80).forEach((failure) => console.error(`FAIL ${failure}`));
  if (failures.length > 80) console.error(`FAIL ${failures.length - 80} additional failures.`);
  process.exit(1);
}

console.log("PASS PMP and CAPM bank scale, mock exam targets, and mode separation checks.");
