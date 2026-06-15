import { readFileSync } from "node:fs";
import vm from "node:vm";

const code = readFileSync("data.js", "utf8");
const context = {};
vm.runInNewContext(`${code}; this.examCatalog = examCatalog;`, context);

const pmp = context.examCatalog.find((exam) => exam.id === "pmp");
if (!pmp) {
  console.error("FAIL PMP exam data is missing.");
  process.exit(1);
}

const questionsToCheck = pmp.questions;
const bannedChoicePatterns = [
  /ignore the constraint/i,
  /select the most extreme/i,
  /delay the decision until unrelated/i,
  /choose the option only because/i,
  /use the same action for every situation/i,
];

const requiredMeta = ["domain", "topic", "approach", "difficulty", "decisionRule"];
const failures = [];
const explanations = new Map();

function wordCount(value) {
  return String(value || "").split(/\s+/).filter(Boolean).length;
}

questionsToCheck.forEach((question, index) => {
  const number = index + 1;

  for (const field of requiredMeta) {
    if (!question[field]) {
      failures.push(`PMP#${number} missing ${field}.`);
    }
  }

  if (wordCount(question.text) < 18) {
    failures.push(`PMP#${number} scenario is too short.`);
  }

  if (!Array.isArray(question.choices) || question.choices.length !== 4) {
    failures.push(`PMP#${number} must have four choices.`);
  } else {
    question.choices.forEach((choice, choiceIndex) => {
      if (wordCount(choice) < 4) {
        failures.push(`PMP#${number} choice ${choiceIndex + 1} is too thin.`);
      }
      if (bannedChoicePatterns.some((pattern) => pattern.test(choice))) {
        failures.push(`PMP#${number} choice ${choiceIndex + 1} uses placeholder wording.`);
      }
    });
  }

  if (wordCount(question.explanation) < 28) {
    failures.push(`PMP#${number} explanation is too short.`);
  }

  const normalizedExplanation = String(question.explanation || "").replace(/\s+/g, " ").trim().toLowerCase();
  if (explanations.has(normalizedExplanation)) {
    failures.push(`PMP#${number} duplicates explanation from PMP#${explanations.get(normalizedExplanation)}.`);
  } else {
    explanations.set(normalizedExplanation, number);
  }
});

if (failures.length) {
  failures.slice(0, 40).forEach((failure) => console.error(`FAIL ${failure}`));
  if (failures.length > 40) console.error(`FAIL ${failures.length - 40} additional PMP quality failures.`);
  process.exit(1);
}

console.log(`PASS all ${questionsToCheck.length} PMP questions meet the focused quality bar.`);
