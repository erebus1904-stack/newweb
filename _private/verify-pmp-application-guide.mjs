import { existsSync, readFileSync } from "node:fs";
import { publicUrl, seoPages } from "./seo-page-map.mjs";

const path = "guides/pmp-application-without-project-manager-title.html";
const url = publicUrl(path);
const failures = [];
const read = (file) => existsSync(file) ? readFileSync(file, "utf8") : "";
const html = read(path);
const requireMatch = (content, pattern, message) => {
  if (!pattern.test(content)) failures.push(message);
};

requireMatch(html, /<h1>Can You Apply for the PMP Without a Project Manager Job Title\?<\/h1>/, "Application guide H1 is missing.");
requireMatch(html, /<section class="answer-first"/, "Application guide needs a direct answer.");
requireMatch(html, /does not require[^.]{0,100}job title/i, "The job-title distinction is missing.");
requireMatch(html, /no project leadership experience/i, "The no-experience boundary is missing.");
requireMatch(html, /PMI[^.]{0,100}eligibility decision/i, "PMI's eligibility authority is missing.");
requireMatch(html, /routine operations/i, "Project-versus-operations comparison is missing.");
requireMatch(html, /fictional example/i, "Original examples must be labeled as fictional.");
requireMatch(html, /overlapping months[^.]{0,80}once/i, "Overlapping-month counting rule is missing.");
requireMatch(html, /Five months, not seven/i, "The worked timeline example is missing.");
requireMatch(html, /audit instructions/i, "The official audit-instructions boundary is missing.");
requireMatch(html, /Last reviewed: <time datetime="2026-09-10">September 10, 2026<\/time>/, "Visible review date is missing.");
requireMatch(html, /<figure class="article-visual"/, "The timeline visual is missing.");

for (const source of [
  "https://www.pmi.org/blog/pmp-application-experience",
  "https://www.pmi.org/certifications/project-management-pmp",
  "https://www.pmi.org/-/media/pmi/documents/public/pdf/certifications/new-pmp-examination-content-outline-2026.pdf"
]) {
  if (!html.includes(`href="${source}"`)) failures.push(`Missing visible source: ${source}`);
}

for (const route of ["../programs/pmp.html", "../programs/capm.html", "../pmp-questions.html", "./pmp-35-hour-training-rules-2026.html", "./pmp-vs-capm.html", "./pmp-study-plan.html"]) {
  if (!html.includes(`href="${route}"`)) failures.push(`Missing learning-path link: ${route}`);
}

const nodes = [];
for (const match of html.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)) {
  try {
    const data = JSON.parse(match[1]);
    nodes.push(...(data["@graph"] ?? [data]));
  } catch (error) {
    failures.push(`Invalid JSON-LD: ${error.message}`);
  }
}
const article = nodes.find((node) => node["@type"] === "Article");
if (!article || article.url !== url || article.datePublished !== "2026-09-10" || article.dateModified !== "2026-09-10") {
  failures.push("Article identity or publication dates are incorrect.");
}
if (!nodes.some((node) => node["@type"] === "BreadcrumbList")) failures.push("BreadcrumbList is missing.");
if (nodes.some((node) => ["FAQPage", "ClaimReview"].includes(node["@type"]))) failures.push("Do not add FAQPage or ClaimReview to this guide.");
const page = seoPages.find((page) => page.path === path);
if (!page?.index || page.lastmod !== "2026-09-10") failures.push("SEO map is missing the current indexable guide.");
if (!read("sitemap.xml").includes(`<loc>${url}</loc><lastmod>2026-09-10</lastmod>`)) failures.push("Sitemap is missing the guide.");
if (!read("blog.html").includes(`href="./${path}"`)) failures.push("Blog discovery link is missing.");
if (!read("programs/pmp.html").includes(`href="../${path}"`)) failures.push("PMP Hub discovery link is missing.");
if (!read("_private/verify-long-guide-content.mjs").includes(`"${path}"`)) failures.push("Long-guide coverage is missing.");
if (!read("docs/geo/source-register.md").includes("PMI-PMP-APPLICATION-EXPERIENCE")) failures.push("Application source record is missing.");

if (failures.length) {
  failures.forEach((failure) => console.error(`FAIL ${failure}`));
  process.exit(1);
}
console.log("PASS PMP application guide preserves eligibility boundaries, original examples, sources, schema, and discovery links.");
