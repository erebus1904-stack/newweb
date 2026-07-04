import { readFileSync, writeFileSync } from "node:fs";
import vm from "node:vm";

const dataCode = readFileSync("data.js", "utf8");
const sandbox = {};
vm.runInNewContext(`${dataCode}\nthis.examCatalog = examCatalog;`, sandbox);

const examCatalog = sandbox.examCatalog;
const pmp = examCatalog.find((exam) => exam.id === "pmp");
if (!pmp) {
  throw new Error("PMP exam catalog entry was not found.");
}

const examQuestions = JSON.parse(readFileSync("_private/pmp_mock3_exam_en.json", "utf8"));
if (examQuestions.length !== 180) {
  throw new Error(`Expected 180 PMP mock exam questions, found ${examQuestions.length}.`);
}

const existingPracticeQuestions = pmp.questions.filter((question) => question.bankType !== "exam");
const otherExamQuestions = pmp.questions.filter((question) => question.bankType === "exam" && question.sourceSet !== "pmp-mock-test-3");
pmp.questions = [...existingPracticeQuestions, ...otherExamQuestions, ...examQuestions];

pmp.bankConfig = {
  ...(pmp.bankConfig || {}),
  practiceQuestionCount: existingPracticeQuestions.length,
  examQuestionCount: otherExamQuestions.length + examQuestions.length,
  examAvailable: false,
};

const output = `const examCatalog = ${JSON.stringify(examCatalog, null, 2)};\n`;
writeFileSync("data.js", output, "utf8");
console.log(`Imported ${examQuestions.length} PMP exam-bank questions. Practice bank remains ${existingPracticeQuestions.length}.`);
