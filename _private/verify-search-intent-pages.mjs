import { readFileSync } from "node:fs";
import { seoPages } from "./seo-page-map.mjs";

const failures = [];

const pageContracts = [
  {
    path: "guides/capm-online-vs-test-center.html",
    canonical: "https://starrycesium.com/guides/capm-online-vs-test-center.html",
    lastmod: "2026-08-03",
    requiredText: [
      "How to Schedule the CAPM Exam",
      "Schedule your CAPM exam in five steps",
      "Find CAPM exam locations and check Pearson VUE seat availability",
      "CAPM exam locations are selected through Pearson VUE after you enter the scheduling process from your PMI account.",
      "Choose online testing or a test center",
      "Confirm the current policy before you change an appointment",
      "Reviewed: August 3, 2026",
      "Published by PassGrid Editorial Team",
      "Sources:",
      "PMI CAPM certification page",
      "Pearson VUE PMI testing page"
    ],
    requiredLinks: [
      "https://www.pmi.org/certifications/certified-associate-capm/",
      "https://www.pearsonvue.com/us/en/pmi.html"
    ]
  },
  {
    path: "guides/pmp-change-control.html",
    canonical: "https://starrycesium.com/guides/pmp-change-control.html",
    lastmod: "2026-07-27",
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

function hasAnchorWithText(html, href, text) {
  const anchors = html.matchAll(/<a\b([^>]*)>([\s\S]*?)<\/a>/gi);
  for (const [, attributes, content] of anchors) {
    const hrefMatch = attributes.match(/\bhref=(['"])(.*?)\1/i);
    const visibleText = content.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
    if (hrefMatch?.[2] === href && visibleText.includes(text)) return true;
  }
  return false;
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
  } else if (article.dateModified !== contract.lastmod) {
    failures.push(`${contract.path}: Article dateModified should be ${contract.lastmod}`);
  }

  const pageMapEntry = seoPages.find((page) => page.path === contract.path);
  if (!pageMapEntry) {
    failures.push(`${contract.path}: missing from seo-page-map.mjs`);
  } else if (pageMapEntry.lastmod !== contract.lastmod) {
    failures.push(`${contract.path}: page-map lastmod should be ${contract.lastmod}`);
  }
}

const capmScheduling = readFileSync("guides/capm-online-vs-test-center.html", "utf8");
const scheduleSectionIndex = capmScheduling.indexOf("Schedule your CAPM exam in five steps");
const deliveryVisualIndex = capmScheduling.indexOf('<figure class="article-visual"');
if (scheduleSectionIndex === -1 || deliveryVisualIndex === -1 || scheduleSectionIndex > deliveryVisualIndex) {
  failures.push("guides/capm-online-vs-test-center.html: scheduling steps should appear before the delivery comparison");
}

const capmLinkContracts = [
  {
    path: "blog.html",
    href: './guides/capm-online-vs-test-center.html',
    text: "How to schedule the CAPM exam"
  },
  {
    path: "programs/capm.html",
    href: '../guides/capm-online-vs-test-center.html',
    text: "Find Pearson VUE CAPM locations or choose online testing"
  },
  {
    path: "guides/capm-exam-timing-strategy.html",
    href: '../guides/capm-online-vs-test-center.html',
    text: "Find a Pearson VUE CAPM exam location or choose online testing"
  },
  {
    path: "capm-questions.html",
    href: './guides/capm-online-vs-test-center.html',
    text: "schedule the CAPM exam"
  }
];

for (const contract of capmLinkContracts) {
  const html = readFileSync(contract.path, "utf8");
  if (!hasAnchorWithText(html, contract.href, contract.text)) {
    failures.push(`${contract.path}: missing CAPM scheduling link with anchor text "${contract.text}"`);
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
