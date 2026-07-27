import { readFileSync } from "node:fs";
import { seoPages } from "./seo-page-map.mjs";

const failures = [];

const pageContracts = [
  {
    path: "guides/capm-online-vs-test-center.html",
    canonical: "https://starrycesium.com/guides/capm-online-vs-test-center.html",
    requiredText: [
      "How to Schedule the CAPM Exam",
      "Schedule your CAPM exam in five steps",
      "Check Pearson VUE seat availability before booking",
      "Choose online testing or a test center",
      "Confirm the current policy before you change an appointment"
    ],
    requiredLinks: [
      "https://www.pmi.org/certifications/certified-associate-capm/",
      "https://www.pearsonvue.com/us/en/pmi.html"
    ]
  },
  {
    path: "guides/pmp-change-control.html",
    canonical: "https://starrycesium.com/guides/pmp-change-control.html",
    requiredText: [
      "Change-control decision table",
      "Five PMP change-control scenarios",
      "Requested baseline change",
      "Agile backlog request",
      "Emergency change"
    ],
    requiredLinks: []
  }
];

function articleNode(html) {
  const scripts = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/gi)];
  for (const [, jsonText] of scripts) {
    const parsed = JSON.parse(jsonText.trim());
    const nodes = Array.isArray(parsed["@graph"]) ? parsed["@graph"] : [parsed];
    const article = nodes.find((node) => node?.["@type"] === "Article");
    if (article) return article;
  }
  return null;
}

for (const contract of pageContracts) {
  const html = readFileSync(contract.path, "utf8");

  if (!html.includes(`<link rel="canonical" href="${contract.canonical}" />`)) {
    failures.push(`${contract.path}: canonical changed from ${contract.canonical}`);
  }

  for (const text of contract.requiredText) {
    if (!html.includes(text)) failures.push(`${contract.path}: missing visible intent "${text}"`);
  }

  for (const link of contract.requiredLinks) {
    if (!html.includes(`href="${link}"`)) failures.push(`${contract.path}: missing official link ${link}`);
  }

  const article = articleNode(html);
  if (!article) {
    failures.push(`${contract.path}: missing Article JSON-LD`);
  } else if (article.dateModified !== "2026-07-27") {
    failures.push(`${contract.path}: Article dateModified should be 2026-07-27`);
  }

  const pageMapEntry = seoPages.find((page) => page.path === contract.path);
  if (!pageMapEntry) {
    failures.push(`${contract.path}: missing from seo-page-map.mjs`);
  } else if (pageMapEntry.lastmod !== "2026-07-27") {
    failures.push(`${contract.path}: page-map lastmod should be 2026-07-27`);
  }
}

const pmpQuestions = readFileSync("pmp-questions.html", "utf8");
if (!pmpQuestions.includes('href="./guides/pmp-change-control.html"')) {
  failures.push("pmp-questions.html: missing contextual link to the PMP change-control guide");
}

if (failures.length) {
  failures.forEach((failure) => console.error(`FAIL ${failure}`));
  process.exit(1);
}

console.log("PASS CAPM scheduling and PMP change-control search intent pages.");
