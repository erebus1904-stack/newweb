import fs from "node:fs";
import path from "node:path";

const checks = [
  {
    file: "pmp-questions.html",
    requiredText: [
      "PMP practice bank organization",
      "question-bank mix",
      "not a live PMI weighting statement"
    ],
    requiredLinks: [
      "./programs/pmp-chapter-practice.html",
      "./pmp-mock-exam.html",
      "./prompts/pmp-mistake-review-prompts.html",
      "./prompts/pmp-study-prompts.html",
      "./guides/pmp-2026-exam-version.html"
    ],
    schemaTypes: ["LearningResource", "BreadcrumbList", "ItemList"]
  },
  {
    file: "capm-questions.html",
    requiredText: [
      "CAPM practice bank organization",
      "150-question CAPM exam",
      "180 minutes"
    ],
    requiredLinks: [
      "./guides/capm-domain-study-plan.html",
      "./guides/capm-mistake-review-method.html",
      "./guides/capm-exam-timing-strategy.html",
      "./guides/capm-to-pmp-study-bridge.html",
      "./pmp-questions.html"
    ],
    schemaTypes: ["LearningResource", "BreadcrumbList", "ItemList"]
  },
  {
    file: "pmp-mock-exam.html",
    requiredText: [
      "240-minute limit",
      "04:00:00",
      "PT4H",
      "first 80 minutes",
      "first 160 minutes",
      "Pacing checkpoints"
    ],
    requiredLinks: [
      "./pmp-questions.html",
      "./programs/pmp-chapter-practice.html",
      "./prompts/pmp-mistake-review-prompts.html",
      "./prompts/pmp-exam-operations-prompts.html",
      "./guides/pmp-2026-exam-version.html"
    ],
    schemaTypes: ["LearningResource", "BreadcrumbList"]
  },
  {
    file: path.join("programs", "pmp-chapter-practice.html"),
    requiredText: [
      "PMP chapter practice organization",
      "chapter-first workflow",
      "mistake-review prompts"
    ],
    requiredLinks: [
      "../pmp-questions.html",
      "../pmp-mock-exam.html",
      "../prompts/pmp-study-prompts.html",
      "../prompts/pmp-mistake-review-prompts.html",
      "../guides/pmp-study-plan.html"
    ],
    schemaTypes: ["LearningResource", "BreadcrumbList", "ItemList"]
  }
];

const failures = [];

function visibleWordCount(html) {
  const visibleText = html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&[a-z0-9#]+;/gi, " ")
    .replace(/\s+/g, " ")
    .trim();
  return visibleText ? visibleText.split(" ").length : 0;
}

function schemaTypes(html) {
  const scripts = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/gi)];
  const types = new Set();
  for (const [, jsonText] of scripts) {
    try {
      const parsed = JSON.parse(jsonText.trim());
      const nodes = Array.isArray(parsed["@graph"]) ? parsed["@graph"] : [parsed];
      for (const node of nodes) {
        if (node && typeof node === "object" && node["@type"]) {
          types.add(node["@type"]);
        }
      }
    } catch (error) {
      failures.push(`Invalid JSON-LD: ${error.message}`);
    }
  }
  return types;
}

for (const check of checks) {
  const html = fs.readFileSync(check.file, "utf8");
  const words = visibleWordCount(html);
  if (words < 500) {
    failures.push(`${check.file}: visible static content is too thin (${words} words).`);
  }

  for (const text of check.requiredText) {
    if (!html.includes(text)) {
      failures.push(`${check.file}: missing required text "${text}".`);
    }
  }

  for (const link of check.requiredLinks) {
    if (!html.includes(`href="${link}"`)) {
      failures.push(`${check.file}: missing required link ${link}.`);
    }
  }

  const types = schemaTypes(html);
  for (const type of check.schemaTypes) {
    if (!types.has(type)) {
      failures.push(`${check.file}: missing ${type} JSON-LD.`);
    }
  }
}

const mockScript = fs.readFileSync("mock-exam.js", "utf8");
if (!mockScript.includes("const DURATION_SECONDS = 240 * 60;")) {
  failures.push("mock-exam.js: PMP mock duration should be 240 minutes.");
}

if (failures.length) {
  console.error(failures.join("\n"));
  process.exit(1);
}

console.log("Question bank SEO verified: static explanations, prompt links, guide links, schema, and PMP mock timing are present.");
