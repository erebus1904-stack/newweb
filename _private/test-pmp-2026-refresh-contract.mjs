import assert from "node:assert/strict";
import {
  REFRESH_START,
  REFRESH_COUNT,
  FINAL_DOMAIN_TARGETS,
  REFRESH_DOMAIN_TARGETS,
  REFRESH_CHAPTER_TARGETS,
  FINAL_CHAPTER_TARGETS,
  DOMAIN_CONTENT_TARGETS,
  normalizeText,
  wordCount,
  countBy,
  validateDomainSource,
  validateRefreshSet,
} from "./pmp-2026-refresh/contract.mjs";

assert.equal(REFRESH_START, 839);
assert.equal(REFRESH_COUNT, 230);
assert.deepEqual(REFRESH_DOMAIN_TARGETS, {
  People: 76,
  Process: 94,
  "Business Environment": 60,
});
assert.deepEqual(FINAL_DOMAIN_TARGETS, {
  People: 353,
  Process: 438,
  "Business Environment": 278,
});
assert.deepEqual(REFRESH_CHAPTER_TARGETS, {
  "pmbok-ch01-introduction": 5,
  "pmbok-ch02-project-environment": 40,
  "pmbok-ch03-project-manager-role": 20,
  "pmbok-ch04-integration-management": 25,
  "pmbok-ch05-scope-management": 15,
  "pmbok-ch06-schedule-management": 15,
  "pmbok-ch07-cost-management": 12,
  "pmbok-ch08-quality-management": 12,
  "pmbok-ch09-resource-management": 22,
  "pmbok-ch10-communications-management": 12,
  "pmbok-ch11-risk-management": 20,
  "pmbok-ch12-procurement-management": 12,
  "pmbok-ch13-stakeholder-management": 20,
});
assert.deepEqual(FINAL_CHAPTER_TARGETS, {
  "pmbok-ch01-introduction": 65,
  "pmbok-ch02-project-environment": 84,
  "pmbok-ch03-project-manager-role": 50,
  "pmbok-ch04-integration-management": 142,
  "pmbok-ch05-scope-management": 96,
  "pmbok-ch06-schedule-management": 85,
  "pmbok-ch07-cost-management": 62,
  "pmbok-ch08-quality-management": 73,
  "pmbok-ch09-resource-management": 104,
  "pmbok-ch10-communications-management": 73,
  "pmbok-ch11-risk-management": 81,
  "pmbok-ch12-procurement-management": 72,
  "pmbok-ch13-stakeholder-management": 82,
});
assert.deepEqual(DOMAIN_CONTENT_TARGETS, {
  People: {
    approaches: { Predictive: 20, Agile: 28, Hybrid: 28 },
    difficulties: { Easy: 20, Medium: 36, Hard: 20 },
    correctIndexes: { 0: 19, 1: 19, 2: 19, 3: 19 },
    chapters: {
      "pmbok-ch03-project-manager-role": 18,
      "pmbok-ch04-integration-management": 8,
      "pmbok-ch09-resource-management": 20,
      "pmbok-ch10-communications-management": 12,
      "pmbok-ch13-stakeholder-management": 18,
    },
    topics: {
      "Team leadership": 10,
      "Conflict management": 9,
      "Team performance": 9,
      "Emotional intelligence": 8,
      "Stakeholder engagement": 10,
      Communication: 9,
      "Coaching and mentoring": 8,
      "Virtual and cross-cultural collaboration": 7,
      "Negotiation and decision making": 6,
    },
  },
  Process: {
    approaches: { Predictive: 32, Agile: 30, Hybrid: 32 },
    difficulties: { Easy: 24, Medium: 44, Hard: 26 },
    correctIndexes: { 0: 24, 1: 24, 2: 23, 3: 23 },
    chapters: {
      "pmbok-ch01-introduction": 5,
      "pmbok-ch04-integration-management": 17,
      "pmbok-ch05-scope-management": 15,
      "pmbok-ch06-schedule-management": 15,
      "pmbok-ch07-cost-management": 12,
      "pmbok-ch08-quality-management": 12,
      "pmbok-ch11-risk-management": 10,
      "pmbok-ch12-procurement-management": 8,
    },
    topics: {
      "Integration and change control": 10,
      "Scope and requirements": 8,
      Schedule: 8,
      Cost: 7,
      Quality: 8,
      "Risk and uncertainty": 10,
      Procurement: 7,
      "Planning and adaptation": 8,
      "Delivery and acceptance": 9,
      "Measurement and forecasting": 7,
      "Agile flow and backlog": 7,
      "Issue and knowledge management": 5,
    },
  },
  "Business Environment": {
    approaches: { Predictive: 18, Agile: 18, Hybrid: 24 },
    difficulties: { Easy: 16, Medium: 28, Hard: 16 },
    correctIndexes: { 0: 15, 1: 15, 2: 15, 3: 15 },
    chapters: {
      "pmbok-ch02-project-environment": 40,
      "pmbok-ch03-project-manager-role": 2,
      "pmbok-ch09-resource-management": 2,
      "pmbok-ch11-risk-management": 10,
      "pmbok-ch12-procurement-management": 4,
      "pmbok-ch13-stakeholder-management": 2,
    },
    topics: {
      "Benefits and value realization": 10,
      Compliance: 9,
      "Organizational change": 8,
      Governance: 8,
      "Sustainability and social impact": 7,
      "External environment and market change": 7,
      "Strategic alignment": 6,
      "AI and data governance": 5,
    },
  },
});

assert.equal(Object.values(REFRESH_CHAPTER_TARGETS).reduce((a, b) => a + b, 0), 230);
assert.equal(Object.values(FINAL_DOMAIN_TARGETS).reduce((a, b) => a + b, 0), 1069);
assert.equal(Object.values(FINAL_CHAPTER_TARGETS).reduce((a, b) => a + b, 0), 1069);
for (const [domain, target] of Object.entries(REFRESH_DOMAIN_TARGETS)) {
  const contentTarget = DOMAIN_CONTENT_TARGETS[domain];
  for (const allocation of Object.values(contentTarget)) {
    assert.equal(Object.values(allocation).reduce((a, b) => a + b, 0), target);
  }
}
assert(Object.isFrozen(DOMAIN_CONTENT_TARGETS));
assert(Object.values(DOMAIN_CONTENT_TARGETS).every(Object.isFrozen));

assert.equal(normalizeText("  Change—CONTROL!  "), "change control");
assert.equal(wordCount("Inspect the risk-adjusted team's forecast."), 5);
assert.deepEqual(countBy([{ domain: "People" }, { domain: "People" }], "domain"), {
  People: 2,
});

const validQuestion = {
  tag: "Team",
  domain: "People",
  topic: "Team leadership",
  approach: "Agile",
  difficulty: "Medium",
  decisionRule: "Facilitate team ownership before escalating the delivery concern.",
  text: "A self organizing delivery team discovers an unresolved dependency during iteration planning while stakeholders expect a reliable release forecast. What should the project manager do next?",
  choices: [
    "Facilitate a team discussion to assess the dependency and agree on a workable response",
    "Escalate the dependency immediately without allowing the delivery team to examine available options",
    "Remove the affected work silently and preserve the previously announced release forecast",
    "Assign the dependency to one developer and require an undocumented solution before planning ends",
  ],
  correct: 0,
  explanation: "Facilitating a focused discussion lets the team understand the dependency, evaluate its effect, and own a transparent response before escalation. The other actions hide relevant information, bypass collaborative analysis, or force an unsupported commitment that could undermine delivery decisions and stakeholder trust.",
  chapterId: "pmbok-ch03-project-manager-role",
};

function recordFailures(question) {
  return validateDomainSource([question], question.domain).filter((message) =>
    message.includes("question 1:"),
  );
}

assert.deepEqual(recordFailures(validQuestion), []);

const missingField = { ...validQuestion };
delete missingField.decisionRule;
assert(recordFailures(missingField).some((message) => message.includes("decisionRule")));

assert(
  recordFailures({ ...validQuestion, text: "What should the project manager do next in this situation?" }).some(
    (message) => message.includes("at least 18 words"),
  ),
);
assert(
  recordFailures({ ...validQuestion, choices: ["Act right now", ...validQuestion.choices.slice(1)] }).some(
    (message) => message.includes("at least 4 words"),
  ),
);
assert(
  recordFailures({ ...validQuestion, choices: [validQuestion.choices[0], validQuestion.choices[0], ...validQuestion.choices.slice(2)] }).some(
    (message) => message.includes("distinct choices"),
  ),
);
assert(
  recordFailures({ ...validQuestion, explanation: "This explanation is too short to establish the reasoning." }).some(
    (message) => message.includes("at least 28 words"),
  ),
);
assert(recordFailures({ ...validQuestion, approach: "Waterfall" }).some((message) => message.includes("approach")));
assert(recordFailures({ ...validQuestion, difficulty: "Expert" }).some((message) => message.includes("difficulty")));
assert(recordFailures({ ...validQuestion, chapterId: "pmbok-ch99-unknown" }).some((message) => message.includes("chapterId")));
assert(
  validateDomainSource([{ ...validQuestion, domain: "Process" }], "People").some((message) =>
    message.includes("expected domain"),
  ),
);

const failures = validateDomainSource([], "People");
assert(failures.some((message) => message.includes("expected 76")));
assert(failures.some((message) => message.includes("approach Predictive expected 20")));
assert(failures.some((message) => message.includes("difficulty Medium expected 36")));
assert(failures.some((message) => message.includes("correct index 3 expected 19")));
assert(failures.some((message) => message.includes("chapter pmbok-ch03-project-manager-role expected 18")));
assert(failures.some((message) => message.includes("topic Team leadership expected 10")));
assert(validateRefreshSet([]).some((message) => message.includes("expected 230")));

const duplicateStem = { ...validQuestion, explanation: `${validQuestion.explanation} Additional context distinguishes this explanation.` };
assert(
  validateRefreshSet([validQuestion, duplicateStem]).some((message) => message.includes("duplicate normalized stem")),
);
const duplicateExplanation = { ...validQuestion, text: `${validQuestion.text} The team also reviews governance constraints.` };
assert(
  validateRefreshSet([validQuestion, duplicateExplanation]).some((message) =>
    message.includes("duplicate normalized explanation"),
  ),
);

const fingerprintOne = {
  ...validQuestion,
  text: "During scenario Atlas, Jordan reviews 12 unresolved dependencies with the delivery team before an important release planning meeting. What should the project manager do next?",
  explanation: `${validQuestion.explanation} This reasoning addresses collaborative dependency analysis.`,
};
const fingerprintTwo = {
  ...validQuestion,
  text: "During scenario Beacon, Taylor reviews 47 unresolved dependencies with the delivery team before an important release planning meeting. What should the project manager do next?",
  explanation: `${validQuestion.explanation} This reasoning addresses transparent dependency ownership.`,
};
assert(
  validateRefreshSet([fingerprintOne, fingerprintTwo]).some((message) =>
    message.includes("duplicate template fingerprint"),
  ),
);

const legacyQuestion = {
  ...validQuestion,
  text: `${validQuestion.text} This is practice item 17 for an initial review.`,
};
assert(recordFailures(legacyQuestion).some((message) => message.includes("banned legacy wording")));

const leakingQuestion = {
  ...validQuestion,
  explanation: `${validQuestion.explanation} The answer key identifies option A as the preferred response.`,
};
assert(recordFailures(leakingQuestion).some((message) => message.includes("answer-key leakage")));

const cjkQuestion = {
  ...validQuestion,
  explanation: `${validQuestion.explanation} 不应包含中文文本。`,
};
assert(recordFailures(cjkQuestion).some((message) => message.includes("CJK text")));

console.log("PASS PMP 2026 refresh contract tests.");
