export const REFRESH_START = 839;
export const REFRESH_COUNT = 230;

export const REFRESH_DOMAIN_TARGETS = Object.freeze({
  People: 76,
  Process: 94,
  "Business Environment": 60,
});

export const FINAL_DOMAIN_TARGETS = Object.freeze({
  People: 353,
  Process: 438,
  "Business Environment": 278,
});

export const REFRESH_CHAPTER_TARGETS = Object.freeze({
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

export const FINAL_CHAPTER_TARGETS = Object.freeze({
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

function freezeContentTarget(target) {
  for (const allocation of Object.values(target)) Object.freeze(allocation);
  return Object.freeze(target);
}

export const DOMAIN_CONTENT_TARGETS = Object.freeze({
  People: freezeContentTarget({
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
  }),
  Process: freezeContentTarget({
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
  }),
  "Business Environment": freezeContentTarget({
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
  }),
});

export const BANNED_REFRESH_PATTERNS = Object.freeze([
  /PMBOK\s*2008/i,
  /version\s*4/i,
  /correct answer\s*:/i,
  /answer is\s+[A-D]\b/i,
  /Delphi technology/i,
  /Ompleted work/i,
  /practice item\s*\d+/i,
  /domain pattern\s*\d+/i,
  /initial review|timed drill|case analysis|readiness check|weak-area review/i,
]);

const SCHEMA_FIELDS = Object.freeze([
  "tag",
  "domain",
  "topic",
  "approach",
  "difficulty",
  "decisionRule",
  "text",
  "choices",
  "correct",
  "explanation",
  "chapterId",
]);
const TEXT_SCHEMA_FIELDS = new Set(SCHEMA_FIELDS.filter((field) => !["choices", "correct"].includes(field)));
const ALLOWED_DOMAINS = new Set(Object.keys(REFRESH_DOMAIN_TARGETS));
const ALLOWED_APPROACHES = new Set(["Predictive", "Agile", "Hybrid"]);
const ALLOWED_DIFFICULTIES = new Set(["Easy", "Medium", "Hard"]);
const ALLOWED_CHAPTERS = new Set(Object.keys(REFRESH_CHAPTER_TARGETS));
const PRESERVED_TEMPLATE_TERMS = new Set(
  [
    ...ALLOWED_APPROACHES,
    ...ALLOWED_DIFFICULTIES,
    ...Object.keys(REFRESH_DOMAIN_TARGETS),
    ...Object.values(DOMAIN_CONTENT_TARGETS).flatMap(({ topics }) => Object.keys(topics)),
    "Scrum Kanban Lean Waterfall SAFe DevOps PMBOK PMP PMI",
  ]
    .flatMap((value) => value.toLowerCase().match(/[a-z0-9]+/g) ?? []),
);
const ALWAYS_CONTEXT_LABEL_TYPES = new Set(["scenario", "case", "context"]);
const CJK_PATTERN = /[\p{Script=Han}\p{Script=Hiragana}\p{Script=Katakana}\p{Script=Hangul}\p{Script=Bopomofo}]/u;
const ANSWER_KEY_PATTERNS = Object.freeze([
  /\banswer\s+key\b/i,
  /\b(?:correct|preferred)\s+(?:answer|option|choice)\b/i,
  /\b(?:answer|option|choice|response)\s+(?:is\s+)?[A-D]\b/i,
  /\b[A-D]\s+is\s+(?:the\s+)?(?:correct|preferred)\b/i,
]);

export function normalizeText(value) {
  return String(value ?? "")
    .normalize("NFKC")
    .toLowerCase()
    .replace(/[’']/g, "")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

export function wordCount(value) {
  return String(value ?? "").match(/[\p{L}\p{N}]+(?:['’\-][\p{L}\p{N}]+)*/gu)?.length ?? 0;
}

export function countBy(items, key) {
  const counts = {};
  for (const item of items ?? []) {
    const value = typeof key === "function" ? key(item) : item?.[key];
    const countKey = String(value);
    counts[countKey] = (counts[countKey] ?? 0) + 1;
  }
  return counts;
}

function questionText(question) {
  if (!question || typeof question !== "object") return "";
  return Object.values(question)
    .flatMap((value) => (Array.isArray(value) ? value : [value]))
    .filter((value) => typeof value === "string")
    .join("\n");
}

function validateQuestion(question, expectedDomain, index) {
  const failures = [];
  const label = `question ${index + 1}:`;

  if (!question || typeof question !== "object" || Array.isArray(question)) {
    return [`${label} expected an object record.`];
  }

  for (const field of SCHEMA_FIELDS) {
    const value = question[field];
    if (!Object.hasOwn(question, field) || value === null || value === undefined) {
      failures.push(`${label} missing required field ${field}.`);
    } else if (TEXT_SCHEMA_FIELDS.has(field) && (typeof value !== "string" || value.trim() === "")) {
      failures.push(`${label} ${field} must be a non-empty string.`);
    }
  }

  if (expectedDomain !== undefined && question.domain !== expectedDomain) {
    failures.push(`${label} expected domain ${expectedDomain}, received ${String(question.domain)}.`);
  }
  if (!ALLOWED_DOMAINS.has(question.domain)) {
    failures.push(`${label} domain must be People, Process, or Business Environment.`);
  }
  if (!ALLOWED_APPROACHES.has(question.approach)) {
    failures.push(`${label} approach must be Predictive, Agile, or Hybrid.`);
  }
  if (!ALLOWED_DIFFICULTIES.has(question.difficulty)) {
    failures.push(`${label} difficulty must be Easy, Medium, or Hard.`);
  }
  if (!ALLOWED_CHAPTERS.has(question.chapterId)) {
    failures.push(`${label} chapterId is not an allowed PMP chapter.`);
  }

  if (!Array.isArray(question.choices) || question.choices.length !== 4) {
    failures.push(`${label} choices must contain exactly four choices.`);
  } else {
    const normalizedChoices = question.choices.map(normalizeText);
    if (new Set(normalizedChoices).size !== 4) {
      failures.push(`${label} choices must contain four distinct choices.`);
    }
    question.choices.forEach((choice, choiceIndex) => {
      if (typeof choice !== "string" || choice.trim() === "") {
        failures.push(`${label} choice ${choiceIndex + 1} must be a non-empty string.`);
      } else if (wordCount(choice) < 4) {
        failures.push(`${label} choice ${choiceIndex + 1} must contain at least 4 words.`);
      }
    });
  }

  if (!Number.isInteger(question.correct) || question.correct < 0 || question.correct > 3) {
    failures.push(`${label} correct must be an integer from 0 through 3.`);
  }
  if (wordCount(question.text) < 18) {
    failures.push(`${label} text must contain at least 18 words.`);
  }
  if (wordCount(question.explanation) < 28) {
    failures.push(`${label} explanation must contain at least 28 words.`);
  }

  const combinedText = questionText(question);
  if (BANNED_REFRESH_PATTERNS.some((pattern) => pattern.test(combinedText))) {
    failures.push(`${label} contains banned legacy wording.`);
  }
  if (ANSWER_KEY_PATTERNS.some((pattern) => pattern.test(combinedText))) {
    failures.push(`${label} contains answer-key leakage.`);
  }
  if (CJK_PATTERN.test(combinedText.normalize("NFKC"))) {
    failures.push(`${label} contains CJK text.`);
  }

  return failures;
}

function validateExactAllocation(questions, property, targets, label, failures) {
  const actual = countBy(questions, property);
  for (const [value, expected] of Object.entries(targets)) {
    const received = actual[value] ?? 0;
    if (received !== expected) {
      failures.push(`${label} ${value} expected ${expected}, received ${received}.`);
    }
  }
  for (const [value, received] of Object.entries(actual)) {
    if (!Object.hasOwn(targets, value) && received > 0) {
      failures.push(`${label} ${value} is unexpected (received ${received}).`);
    }
  }
}

function validateDomainAllocations(questions, domain, failures) {
  const targets = DOMAIN_CONTENT_TARGETS[domain];
  if (!targets) return;
  validateExactAllocation(questions, "approach", targets.approaches, `${domain} approach`, failures);
  validateExactAllocation(questions, "difficulty", targets.difficulties, `${domain} difficulty`, failures);
  validateExactAllocation(questions, "correct", targets.correctIndexes, `${domain} correct index`, failures);
  validateExactAllocation(questions, "chapterId", targets.chapters, `${domain} chapter`, failures);
  validateExactAllocation(questions, "topic", targets.topics, `${domain} topic`, failures);
}

export function validateDomainSource(questions, domain) {
  const failures = [];
  const records = Array.isArray(questions) ? questions : [];
  if (!Array.isArray(questions)) failures.push(`${domain} source must be an array.`);

  const expectedCount = REFRESH_DOMAIN_TARGETS[domain];
  if (expectedCount === undefined) {
    failures.push(`unknown refresh domain ${String(domain)}.`);
  } else if (records.length !== expectedCount) {
    failures.push(`${domain} expected ${expectedCount} questions, received ${records.length}.`);
  }

  records.forEach((question, index) => failures.push(...validateQuestion(question, domain, index)));
  validateDomainAllocations(records, domain, failures);
  return failures;
}

function templateFingerprint(value) {
  const generalized = String(value ?? "")
    .normalize("NFKC")
    .replace(
      /\b(project|program|initiative|product|release|scenario|case|context)\s+((?:(?:named|labelled|labeled)\s+)?)([\p{L}\p{N}_-]+)/giu,
      (match, contextType, qualifier, entity) => {
        if (PRESERVED_TEMPLATE_TERMS.has(entity.toLowerCase())) return match;
        const alwaysLabel = ALWAYS_CONTEXT_LABEL_TYPES.has(contextType.toLowerCase());
        const looksLikeEntity = qualifier !== "" || /[A-Z\d_-]/.test(entity);
        return alwaysLabel || looksLikeEntity ? `${contextType} context` : match;
      },
    )
    .replace(/\b\d+(?:[.,]\d+)?\b/g, " number ")
    .replace(/\b\p{Lu}\p{Ll}+(?:\s+\p{Lu}\p{Ll}+)*\b/gu, (name) =>
      name
        .split(/\s+/)
        .map((part) => (PRESERVED_TEMPLATE_TERMS.has(part.toLowerCase()) ? part : "name"))
        .join(" ")
        .replace(/\bname(?:\s+name)+\b/g, "name"),
    );
  return normalizeText(generalized);
}

function validateDuplicates(records, property, description, failures) {
  const seenNormalized = new Map();
  const seenFingerprints = new Map();

  records.forEach((question, index) => {
    const normalized = normalizeText(question?.[property]);
    if (!normalized) return;

    if (seenNormalized.has(normalized)) {
      failures.push(
        `question ${index + 1}: duplicate normalized ${description} with question ${seenNormalized.get(normalized) + 1}.`,
      );
    } else {
      seenNormalized.set(normalized, index);
    }

    const fingerprint = templateFingerprint(question[property]);
    const prior = seenFingerprints.get(fingerprint);
    if (prior && prior.normalized !== normalized) {
      failures.push(
        `question ${index + 1}: duplicate template fingerprint for ${description} with question ${prior.index + 1}.`,
      );
    } else if (!prior) {
      seenFingerprints.set(fingerprint, { index, normalized });
    }
  });
}

export function validateRefreshSet(questions) {
  const failures = [];
  const records = Array.isArray(questions) ? questions : [];
  if (!Array.isArray(questions)) failures.push("refresh set must be an array.");
  if (records.length !== REFRESH_COUNT) {
    failures.push(`refresh set expected ${REFRESH_COUNT} questions, received ${records.length}.`);
  }

  records.forEach((question, index) => failures.push(...validateQuestion(question, undefined, index)));
  validateExactAllocation(records, "domain", REFRESH_DOMAIN_TARGETS, "refresh domain", failures);
  validateExactAllocation(records, "chapterId", REFRESH_CHAPTER_TARGETS, "refresh chapter", failures);

  for (const domain of Object.keys(REFRESH_DOMAIN_TARGETS)) {
    validateDomainAllocations(
      records.filter((question) => question?.domain === domain),
      domain,
      failures,
    );
  }

  validateDuplicates(records, "text", "stem", failures);
  validateDuplicates(records, "explanation", "explanation", failures);
  return failures;
}
