import { readFileSync, existsSync } from "node:fs";
import vm from "node:vm";

const read = (path) => readFileSync(path, "utf8");
const fail = (message) => ({ ok: false, message });
const pass = (message) => ({ ok: true, message });

const checks = [];
const expect = (condition, message) => checks.push(condition ? pass(message) : fail(message));

const code = read("data.js");
const context = {};
vm.runInNewContext(`${code}; this.examCatalog = examCatalog;`, context);
const pmp = context.examCatalog.find((exam) => exam.id === "pmp");

expect(Boolean(pmp), "PMP exam exists in data.js");
if (pmp) {
  const practiceQuestions = pmp.questions.filter((question) => question.bankType !== "exam");
  const examQuestions = pmp.questions.filter((question) => question.bankType === "exam");

  expect(practiceQuestions.length === pmp.bankConfig?.practiceQuestionCount, "PMP practice question count matches bankConfig");
  expect(examQuestions.length === pmp.bankConfig?.examQuestionCount, "PMP mock exam question count matches bankConfig");

  practiceQuestions.forEach((question, index) => {
    const number = index + 1;
    expect(Boolean(question.domain), `pmp#${number} has domain metadata`);
    expect(Boolean(question.topic), `pmp#${number} has topic metadata`);
    expect(Boolean(question.approach), `pmp#${number} has approach metadata`);
    expect(Boolean(question.difficulty), `pmp#${number} has difficulty metadata`);
    expect(Boolean(question.decisionRule), `pmp#${number} has decision rule`);
    expect(question.text.split(/\s+/).length >= 18, `pmp#${number} is a scenario question`);
    expect(Array.isArray(question.choices) && question.choices.length === 4, `pmp#${number} has four choices`);
    expect(question.choices.every((choice) => choice.split(/\s+/).length >= 4), `pmp#${number} choices are not placeholder short answers`);
    expect(question.explanation.split(/\s+/).length >= 28, `pmp#${number} explanation is substantive`);
    expect(!/initial review|timed drill|case analysis|readiness check|weak-area review/i.test(question.text), `pmp#${number} has no generated drill label`);
  });
}

expect(existsSync("programs/capm.html"), "CAPM program page exists");

const home = read("index.html");
const pmpCenter = read("programs/pmp.html");
const about = read("about.html");
const privacy = read("privacy.html");
const terms = read("terms.html");
const sitemap = read("sitemap.xml");

expect(home.includes("./programs/capm.html"), "home links to CAPM entry page");
expect(home.includes("CAPM") && home.includes("PMP"), "home presents CAPM and PMP pathways");
expect(pmpCenter.includes("./capm.html") || pmpCenter.includes("capm.html"), "PMP center links to CAPM comparison path");
expect(about.includes("CAPM") && about.includes("PMP"), "about page names both CAPM and PMP");
expect(privacy.includes("project management exam practice"), "privacy policy matches project management site direction");
expect(terms.includes("project management exam practice"), "terms match project management site direction");
expect(sitemap.includes("https://starrycesium.com/programs/capm.html"), "sitemap includes CAPM program page");

const oldBroadCopy = /overseas credential|overseas license|medical and nursing|NCLEX|USMLE|AICPA|CFA Institute|FINRA|NCEES|AWS|Google Cloud|real estate licensing/i;
expect(!oldBroadCopy.test(`${about}\n${privacy}\n${terms}`), "legal pages do not retain broad old exam positioning");

const failures = checks.filter((result) => !result.ok);
if (failures.length) {
  for (const result of failures) {
    console.error(`FAIL ${result.message}`);
  }
  console.error(`\n${failures.length} phase checks failed.`);
  process.exit(1);
}

console.log(`PASS ${checks.length} PMP/CAPM phase checks.`);
