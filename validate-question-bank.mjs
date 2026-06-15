import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import vm from "node:vm";

const args = new Set(process.argv.slice(2));
const ciMode = args.has("--ci");
const mojibakePatterns = [/�/, /銆/, /娴/, /鐭/, /鞚/, /茅/, /谩/, /脡/, /锚/];
const answerLabels = ["A", "B", "C", "D"];

function loadExamCatalog() {
  const code = readFileSync("data.js", "utf8");
  const context = {};
  vm.runInNewContext(`${code}; this.examCatalog = examCatalog;`, context);
  if (!Array.isArray(context.examCatalog)) {
    throw new Error("examCatalog is not an array.");
  }
  return context.examCatalog;
}

function normalizeText(value) {
  return String(value || "").replace(/\s+/g, " ").trim().toLowerCase();
}

function hasMojibake(value) {
  return mojibakePatterns.some((pattern) => pattern.test(String(value || "")));
}

function addIssue(list, code, message, meta = {}) {
  list.push({ code, message, ...meta });
}

function scoreExam(errors, warnings) {
  const counts = [...errors, ...warnings].reduce((acc, issue) => {
    acc[issue.code] = (acc[issue.code] || 0) + 1;
    return acc;
  }, {});

  let score = 100;
  if (errors.length) score -= Math.min(50, errors.length * 10);
  score -= Math.min(20, (counts.count_mismatch || 0) * 20);
  score -= Math.min(15, (counts.duplicate_text || 0) * 5);
  score -= Math.min(10, Math.ceil((counts.duplicate_explanation || 0) / 10));
  score -= Math.min(8, (counts.duplicate_choice || 0) * 2);
  score -= Math.min(20, (counts.mojibake || 0) * 10);
  score -= Math.min(5, (counts.short_text || 0) + (counts.short_explanation || 0));
  score -= Math.min(5, (counts.answer_skew || 0) * 5);
  score -= Math.min(5, (counts.tag_concentration || 0) * 5);
  score -= Math.min(5, (counts.low_tag_coverage || 0) * 5);
  return Math.max(0, score);
}

function validateExam(exam) {
  const errors = [];
  const warnings = [];
  const questions = Array.isArray(exam.questions) ? exam.questions : [];
  const textSeen = new Map();
  const explanationSeen = new Map();
  const tagDistribution = {};
  const answerDistribution = { A: 0, B: 0, C: 0, D: 0 };

  if (exam.questionCount !== questions.length) {
    addIssue(errors, "count_mismatch", `${exam.id} declares ${exam.questionCount} questions but contains ${questions.length}.`);
  }

  questions.forEach((question, index) => {
    const location = `${exam.id}#${index + 1}`;
    const required = ["tag", "text", "choices", "correct", "explanation"];
    for (const field of required) {
      if (question[field] === undefined || question[field] === null || question[field] === "") {
        addIssue(errors, "missing_field", `${location} missing ${field}.`, { examId: exam.id, index: index + 1, field });
      }
    }

    if (!Array.isArray(question.choices) || question.choices.length !== 4) {
      addIssue(errors, "bad_choices", `${location} must have exactly 4 choices.`, { examId: exam.id, index: index + 1 });
    }

    if (!Number.isInteger(question.correct) || question.correct < 0 || question.correct > 3) {
      addIssue(errors, "bad_correct", `${location} has invalid correct index.`, { examId: exam.id, index: index + 1 });
    } else {
      answerDistribution[answerLabels[question.correct]] += 1;
    }

    const normalizedText = normalizeText(question.text);
    if (normalizedText.length < 35) {
      addIssue(warnings, "short_text", `${location} question text is short.`, { examId: exam.id, index: index + 1 });
    }
    if (textSeen.has(normalizedText)) {
      addIssue(warnings, "duplicate_text", `${location} duplicates question ${textSeen.get(normalizedText)}.`, { examId: exam.id, index: index + 1 });
    } else {
      textSeen.set(normalizedText, index + 1);
    }

    const normalizedExplanation = normalizeText(question.explanation);
    if (normalizedExplanation.length < 35) {
      addIssue(warnings, "short_explanation", `${location} explanation is short.`, { examId: exam.id, index: index + 1 });
    }
    if (explanationSeen.has(normalizedExplanation)) {
      addIssue(warnings, "duplicate_explanation", `${location} duplicates explanation ${explanationSeen.get(normalizedExplanation)}.`, { examId: exam.id, index: index + 1 });
    } else {
      explanationSeen.set(normalizedExplanation, index + 1);
    }

    const choiceSet = new Set((question.choices || []).map(normalizeText));
    if (Array.isArray(question.choices) && choiceSet.size !== question.choices.length) {
      addIssue(warnings, "duplicate_choice", `${location} has duplicate choices.`, { examId: exam.id, index: index + 1 });
    }

    const searchable = [question.tag, question.text, question.explanation, ...(question.choices || [])].join(" ");
    if (hasMojibake(searchable)) {
      addIssue(warnings, "mojibake", `${location} contains possible mojibake text.`, { examId: exam.id, index: index + 1 });
    }

    tagDistribution[question.tag] = (tagDistribution[question.tag] || 0) + 1;
  });

  const maxAnswerCount = Math.max(...Object.values(answerDistribution));
  if (questions.length && maxAnswerCount / questions.length > 0.4) {
    addIssue(warnings, "answer_skew", `${exam.id} answer distribution is skewed.`, { examId: exam.id, answerDistribution });
  }

  const tagCount = Object.keys(tagDistribution).length;
  if (tagCount < 10) {
    addIssue(warnings, "low_tag_coverage", `${exam.id} has only ${tagCount} tags.`, { examId: exam.id, tagCount });
  }
  const maxTagCount = Math.max(0, ...Object.values(tagDistribution));
  if (questions.length && maxTagCount / questions.length > 0.25) {
    addIssue(warnings, "tag_concentration", `${exam.id} tag distribution is concentrated.`, { examId: exam.id, tagDistribution });
  }

  return {
    id: exam.id,
    questionCount: exam.questionCount,
    actualQuestions: questions.length,
    score: scoreExam(errors, warnings),
    status: errors.length ? "FAIL" : warnings.length ? "PASS_WITH_WARNINGS" : "PASS",
    errors,
    warnings,
    tagDistribution,
    answerDistribution,
  };
}

function buildReport(examCatalog) {
  const exams = examCatalog.map(validateExam);
  const totalQuestions = examCatalog.reduce((sum, exam) => sum + (Array.isArray(exam.questions) ? exam.questions.length : 0), 0);
  const declaredTotalQuestions = examCatalog.reduce((sum, exam) => sum + (Number.isInteger(exam.questionCount) ? exam.questionCount : 0), 0);
  const globalErrors = [];

  if (totalQuestions !== declaredTotalQuestions) {
    addIssue(globalErrors, "total_count_mismatch", `Declared ${declaredTotalQuestions} total questions but found ${totalQuestions}.`);
  }

  const totalErrors = globalErrors.length + exams.reduce((sum, exam) => sum + exam.errors.length, 0);
  const totalWarnings = exams.reduce((sum, exam) => sum + exam.warnings.length, 0);
  const overallScore = Math.round(exams.reduce((sum, exam) => sum + exam.score, 0) / exams.length);
  const status = totalErrors ? "FAIL" : totalWarnings ? "PASS_WITH_WARNINGS" : "PASS";

  return {
    generatedAt: new Date().toISOString(),
    status,
    overallScore,
    declaredTotalQuestions,
    totalExams: examCatalog.length,
    totalQuestions,
    totalErrors,
    totalWarnings,
    globalErrors,
    exams,
  };
}

function toMarkdown(report) {
  const lines = [
    "# Question Bank Quality Report",
    "",
    `Generated: ${report.generatedAt}`,
    `Status: ${report.status}`,
    `Overall score: ${report.overallScore}/100`,
    `Total exams: ${report.totalExams}`,
    `Total questions: ${report.totalQuestions}`,
    `Errors: ${report.totalErrors}`,
    `Warnings: ${report.totalWarnings}`,
    "",
    "## Exam Scores",
    "",
    "| Exam | Score | Status | Questions | Errors | Warnings |",
    "|---|---:|---|---:|---:|---:|",
    ...report.exams.map((exam) => `| ${exam.id} | ${exam.score} | ${exam.status} | ${exam.actualQuestions} | ${exam.errors.length} | ${exam.warnings.length} |`),
    "",
    "## Lowest Scores",
    "",
    ...[...report.exams]
      .sort((a, b) => a.score - b.score)
      .slice(0, 5)
      .map((exam, index) => `${index + 1}. ${exam.id}: ${exam.score}/100`),
    "",
    "## Issues",
    "",
  ];

  for (const issue of report.globalErrors) {
    lines.push(`- [ERROR] ${issue.message}`);
  }
  for (const exam of report.exams) {
    for (const error of exam.errors) lines.push(`- [ERROR] ${error.message}`);
    for (const warning of exam.warnings.slice(0, 20)) lines.push(`- [WARN] ${warning.message}`);
    if (exam.warnings.length > 20) lines.push(`- [WARN] ${exam.id} has ${exam.warnings.length - 20} additional warnings.`);
  }
  if (lines.at(-1) === "") lines.push("No issues found.");
  return `${lines.join("\n")}\n`;
}

function printSummary(report) {
  console.log("Question Bank Quality Report");
  console.log(`Status: ${report.status}`);
  console.log(`Overall score: ${report.overallScore}/100`);
  console.log(`Total exams: ${report.totalExams}`);
  console.log(`Total questions: ${report.totalQuestions}`);
  console.log(`Errors: ${report.totalErrors}`);
  console.log(`Warnings: ${report.totalWarnings}`);
  console.log("");
  for (const exam of report.exams) {
    console.log(`${exam.id}: ${exam.score}/100, ${exam.status}, ${exam.actualQuestions} questions, ${exam.errors.length} errors, ${exam.warnings.length} warnings`);
  }
  console.log("");
  console.log("Reports:");
  console.log("- reports/question-bank-report.json");
  console.log("- reports/question-bank-report.md");
}

const report = buildReport(loadExamCatalog());
mkdirSync("reports", { recursive: true });
writeFileSync("reports/question-bank-report.json", `${JSON.stringify(report, null, 2)}\n`, "utf8");
writeFileSync("reports/question-bank-report.md", toMarkdown(report), "utf8");
printSummary(report);

const ciFailure = report.totalErrors > 0 ||
  report.totalQuestions !== report.declaredTotalQuestions ||
  report.exams.some((exam) => exam.score < 60 || exam.warnings.some((warning) => warning.code === "mojibake" || warning.code === "duplicate_text"));

if (ciMode && ciFailure) {
  process.exit(1);
}
