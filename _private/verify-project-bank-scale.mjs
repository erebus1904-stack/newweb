import { readFileSync } from "node:fs";
import vm from "node:vm";
import { FINAL_CHAPTER_TARGETS, FINAL_DOMAIN_TARGETS } from "./pmp-2026-refresh/contract.mjs";

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

function getPracticeQuestions(exam) {
  return exam.questions.filter((question) => question.bankType !== "exam");
}

function getExamQuestions(exam) {
  return exam.questions.filter((question) => question.bankType === "exam");
}

function countByDomain(questions) {
  return questions.reduce((counts, question) => {
    counts[question.domain] = (counts[question.domain] || 0) + 1;
    return counts;
  }, {});
}

function contentLength(value) {
  const text = String(value || "").trim();
  const cjkChars = (text.match(/[\u3400-\u9fff]/g) || []).length;
  if (cjkChars > 8) return cjkChars;
  return text.split(/\s+/).filter(Boolean).length;
}

function containsCjk(value) {
  return /[\u3400-\u9fff]/.test(String(value || ""));
}

function checkQuestionQuality(exam, questions) {
  const explanations = new Set();
  const bannedContentPatterns = [
    /This item is unique to/i,
    /domain pattern \d+/i,
    /The team has documented/i,
    /practice item \d+/i,
    /needs a CAPM-level decision/i,
    /project context as irrelevant/i,
  ];
  questions.forEach((question, index) => {
    const number = index + 1;
    const isChapterWorkbookQuestion = question.sourceSet === "pmp-chapter-practice";
    const searchable = [question.tag, question.text, question.explanation, ...(question.choices || [])].join(" ");
    if (exam.id === "pmp") {
      expect(!containsCjk(searchable), `${exam.id}#${number} contains non-English CJK text`);
    }
    for (const field of ["domain", "topic", "approach", "difficulty", "decisionRule"]) {
      expect(Boolean(question[field]), `${exam.id}#${number} missing ${field}`);
    }
    if (!isChapterWorkbookQuestion) {
      expect(contentLength(question.text) >= 18, `${exam.id}#${number} scenario is too short`);
    }
    for (const pattern of bannedContentPatterns) {
      expect(!pattern.test(String(question.text || "")), `${exam.id}#${number} scenario uses template wording: ${pattern}`);
      expect(!pattern.test(String(question.explanation || "")), `${exam.id}#${number} explanation uses template wording: ${pattern}`);
    }
    expect(Array.isArray(question.choices) && question.choices.length === 4, `${exam.id}#${number} must have four choices`);
    if (Array.isArray(question.choices) && !isChapterWorkbookQuestion) {
      expect(question.choices.every((choice) => contentLength(choice) >= 2), `${exam.id}#${number} has thin choices`);
    }
    expect(Number.isInteger(question.correct) && question.correct >= 0 && question.correct <= 3, `${exam.id}#${number} has invalid correct index`);
    if (!isChapterWorkbookQuestion) {
      expect(contentLength(question.explanation) >= 18, `${exam.id}#${number} explanation is too short`);
    }
    const normalized = String(question.explanation || "").replace(/\s+/g, " ").trim().toLowerCase();
    if (!isChapterWorkbookQuestion) {
      expect(!explanations.has(normalized), `${exam.id}#${number} duplicates an explanation`);
      explanations.add(normalized);
    }
  });
}

function checkExam(id, expectedQuestionCount, expectedDomainCounts) {
  const exam = getExam(id);
  expect(Boolean(exam), `${id} exam exists`);
  if (!exam) return;
  const practiceQuestions = getPracticeQuestions(exam);
  const examQuestions = getExamQuestions(exam);

  expect(exam.questionCount === expectedQuestionCount, `${id} questionCount is ${expectedQuestionCount}`);
  expect(practiceQuestions.length === expectedQuestionCount, `${id} has ${expectedQuestionCount} practice questions`);
  expect(exam.examConfig?.practiceQuestionCount === expectedQuestionCount, `${id} practiceQuestionCount config is ${expectedQuestionCount}`);
  expect(exam.bankConfig?.practiceQuestionCount === expectedQuestionCount, `${id} bankConfig practiceQuestionCount is ${expectedQuestionCount}`);
  if (id === "pmp") {
    expect(examQuestions.length === 180, "pmp has 180 imported exam-bank questions");
    expect(exam.bankConfig?.examQuestionCount === 180, "pmp bankConfig examQuestionCount is 180");
  } else {
    expect(examQuestions.length === 0, `${id} has no exam-bank questions`);
  }
  expect(Array.isArray(exam.examConfig?.domainTargets), `${id} has domain target config`);

  const counts = countByDomain(practiceQuestions);
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
  checkQuestionQuality(exam, practiceQuestions);
}

function checkPmpChapterTargets() {
  const pmp = getExam("pmp");
  const chapters = pmp?.examConfig?.chapterTargets || [];
  expect(chapters.length === 13, "PMP has 13 PMBOK chapter practice targets");
  expect(chapters.reduce((sum, chapter) => sum + chapter.practiceCount, 0) === 1069, "PMP chapter practice targets total 1069 questions");
  for (const [chapterId, expectedCount] of Object.entries(FINAL_CHAPTER_TARGETS)) {
    const chapter = chapters.find((item) => item.chapterId === chapterId);
    const actualCount = getPracticeQuestions(pmp).filter((question) => question.chapterId === chapterId).length;
    expect(chapter?.practiceCount === expectedCount, `PMP ${chapterId} practice target is ${expectedCount}`);
    expect(actualCount === expectedCount, `PMP ${chapterId} has ${expectedCount} chapter questions`);
  }
}

checkExam(
  "pmp",
  1069,
  FINAL_DOMAIN_TARGETS,
);
checkPmpChapterTargets();

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
const practicePage = readFileSync("practice.html", "utf8");
const pmpQuestionsPage = readFileSync("pmp-questions.html", "utf8");
const capmQuestionsPage = readFileSync("capm-questions.html", "utf8");
const drillPage = readFileSync("drill.html", "utf8");
const capmPage = readFileSync("programs/capm.html", "utf8");
expect(/visibleExamCatalog = examCatalog\.filter\(\(exam\) => \["pmp", "capm"\]\.includes\(exam\.id\)\)/.test(script), "front end exposes PMP and CAPM");
expect(!/buildExamQuestionIndexes/.test(script), "front end does not retain mock exam index builder");
expect(/URLSearchParams\(window\.location\.search\)/.test(script), "front end can deep-link into a selected question bank");
expect(/get\("chapter"\)/.test(script) && /selectedChapter/.test(script), "front end can deep-link into a selected PMP chapter");
expect(/Practice/.test(home) && !/Mock Exam/i.test(home), "home only presents practice mode");
expect(/id="practice-workspace"/.test(practicePage) && /script\.js/.test(practicePage), "dedicated selection page loads the question bank chooser");
expect(/data-exam="pmp"/.test(pmpQuestionsPage) && /id="domain-outline"/.test(pmpQuestionsPage), "PMP question page shows the chapter outline");
expect(/data-exam="capm"/.test(capmQuestionsPage) && /id="domain-outline"/.test(capmQuestionsPage), "CAPM question page shows the domain outline");
expect(/id="answers"/.test(drillPage) && /id="question-text"/.test(drillPage), "drill page contains the question flow");
expect(/capm-questions\.html/.test(capmPage), "CAPM page links to CAPM question outline");

if (failures.length) {
  failures.slice(0, 80).forEach((failure) => console.error(`FAIL ${failure}`));
  if (failures.length > 80) console.error(`FAIL ${failures.length - 80} additional failures.`);
  process.exit(1);
}

console.log("PASS PMP and CAPM bank scale and practice-only checks.");
