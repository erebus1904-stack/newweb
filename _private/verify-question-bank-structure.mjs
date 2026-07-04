import fs from "node:fs";
import vm from "node:vm";

const code = fs.readFileSync("data.js", "utf8");
const sandbox = {};
vm.runInNewContext(`${code}\nthis.examCatalog = examCatalog;`, sandbox);

const exams = sandbox.examCatalog;
const failures = [];
const visibleIds = exams.map((exam) => exam.id).sort();

if (visibleIds.join(",") !== "capm,pmp") {
  failures.push(`Visible exams should be capm,pmp only. Found: ${visibleIds.join(",")}`);
}

for (const exam of exams) {
  const bankConfig = exam.bankConfig || {};
  const practiceQuestions = exam.questions.filter((question) => question.bankType !== "exam");
  const examQuestions = exam.questions.filter((question) => question.bankType === "exam");

  if (bankConfig.practiceQuestionCount !== practiceQuestions.length) {
    failures.push(`${exam.id}: bankConfig.practiceQuestionCount is ${bankConfig.practiceQuestionCount}, but practice question count is ${practiceQuestions.length}.`);
  }

  if ((bankConfig.examQuestionCount || 0) !== examQuestions.length) {
    failures.push(`${exam.id}: bankConfig.examQuestionCount is ${bankConfig.examQuestionCount || 0}, but exam question count is ${examQuestions.length}.`);
  }

  if (exam.id === "pmp") {
    if (examQuestions.length !== 180) {
      failures.push("pmp: exam bank should contain the 180 imported PMP Mock Test 3 questions.");
    }
    const invalidExamQuestion = examQuestions.find((question) => question.sourceSet !== "pmp-mock-test-3" || question.mockExamId !== "pmp-mock-test-3");
    if (invalidExamQuestion) {
      failures.push("pmp: exam bank contains a question without the PMP Mock Test 3 source markers.");
    }
  } else if (examQuestions.length > 0) {
    failures.push(`${exam.id}: exam bank should remain empty until a separate exam-only set is created.`);
  }

  if (exam.id === "pmp") {
    const chapterTargets = exam.examConfig?.chapterTargets || [];
    const validChapterIds = new Set(chapterTargets.map((chapter) => chapter.chapterId));
    const chapterCounts = new Map(chapterTargets.map((chapter) => [chapter.chapterId, 0]));

    for (const [index, question] of practiceQuestions.entries()) {
      if (!question.chapterId) {
        failures.push(`pmp question ${index + 1}: missing chapterId.`);
        continue;
      }
      if (!validChapterIds.has(question.chapterId)) {
        failures.push(`pmp question ${index + 1}: invalid chapterId "${question.chapterId}".`);
        continue;
      }
      chapterCounts.set(question.chapterId, chapterCounts.get(question.chapterId) + 1);
    }

    for (const [chapterId, count] of chapterCounts.entries()) {
      if (count === 0) {
        failures.push(`pmp: chapter "${chapterId}" has no practice questions.`);
      }
    }

    if (bankConfig.practiceOutlineType !== "chapters") {
      failures.push("pmp: practiceOutlineType should be chapters.");
    }
  }

  if (exam.id === "capm" && bankConfig.practiceOutlineType !== "domains") {
    failures.push("capm: practiceOutlineType should be domains.");
  }
}

if (failures.length) {
  console.error(failures.join("\n"));
  process.exit(1);
}

console.log("Question bank structure verified: PMP practice bank, PMP exam bank, and CAPM practice bank are separated.");
