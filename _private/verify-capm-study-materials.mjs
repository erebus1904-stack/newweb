import { readFileSync } from "node:fs";
import { publicUrl, seoPages } from "./seo-page-map.mjs";

const path = "guides/capm-study-materials-plan.html";
const html = readFileSync(path, "utf8");
const body = html.split("<body")[1] || "";
const text = body.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ");
const failures = [];
const check = (condition, message) => { if (!condition) failures.push(message); };
const page = seoPages.find((entry) => entry.path === path);
let nodes = [];
try {
  nodes = [...html.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)]
    .flatMap((match) => { const value = JSON.parse(match[1]); return value["@graph"] || [value]; });
} catch (error) {
  failures.push(`Invalid JSON-LD: ${error.message}`);
}
const article = nodes.find((node) => node["@type"] === "Article");
const officialSources = [
  "https://www.pmi.org/-/media/pmi/documents/public/pdf/certifications/capm-exam-content-outline-english.pdf",
  "https://www.pmi.org/-/media/pmi/documents/public/pdf/certifications/capm-references.pd",
  "https://www.pmi.org/certifications/certified-associate-capm/",
];

check(html.includes(`<link rel="canonical" href="${publicUrl(path)}"`), "Keep the existing canonical URL.");
check(html.includes("<title>How to Choose CAPM Study Materials | PassGrid</title>"), "Keep the established title.");
check(/<section class="answer-first"/.test(body), "Add a visible answer-first section.");
check(/Do you need PMBOK 8 for the CAPM exam\?/i.test(text), "Add the focused PMBOK 8 question.");
check(/not found[^.]{0,160}(?:PMI requirement|mandatory)/i.test(text), "State the limit of the PMBOK 8 requirement evidence.");
check(/Seventh Edition[^.]{0,200}reference/i.test(text), "Identify PMBOK Seventh Edition as a reference, not the entire syllabus.");
check(/not require[^.]{0,100}every book/i.test(text), "Explain that reading every listed book is not required.");
check(/does not mean[^.]{0,150}must buy[^.]{0,100}Seventh Edition/i.test(text), "Do not replace a supposed Eighth Edition mandate with a Seventh Edition purchase mandate.");
check(/ECO, reference books, and education hours/i.test(text), "Distinguish scope, references, and education.");
for (const weight of ["36%", "17%", "20%", "27%"]) {
  check(text.includes(weight), `Missing current CAPM domain weight ${weight}.`);
}
check(/AI book-list verification checklist/i.test(text), "Add the AI book-list checklist.");
check(/recommendation, not evidence of a PMI requirement/i.test(text), "Distinguish an AI recommendation from an official requirement.");
check(!/Keep PMBOK as the tie-breaker/i.test(text), "Remove the blanket PMBOK tie-breaker rule.");
check(/March 2023[^.]{0,140}(?:revision|not)/i.test(text), "Do not present the older reference-list revision as a new policy announcement.");
check(/class="legal-section source-notes"/.test(body) && /Update log/.test(text), "Add source notes and an update log.");
for (const url of officialSources) {
  check(body.includes(`href="${url}"`), `Missing visible official source: ${url}`);
  check(article?.citation?.includes(url), `Missing Article citation: ${url}`);
}
for (const href of ["../programs/capm.html", "../capm-questions.html", "./ai-pmp-capm-study-without-cheating.html"]) {
  check(body.includes(`href="${href}"`), `Missing study route: ${href}`);
}
check(nodes.some((node) => node["@type"] === "BreadcrumbList"), "Keep BreadcrumbList.");
check(!nodes.some((node) => ["FAQPage", "ClaimReview"].includes(node["@type"])), "Do not add FAQPage or ClaimReview for this update.");
check(article?.datePublished === "2026-06-22", "Preserve the original publication date.");
check(article?.dateModified === page?.lastmod, "Article and SEO map modification dates must agree.");
check(page?.lastmod >= "2026-09-11", "Review date must include this material update.");
check(body.includes(`Last reviewed: <time datetime="${page?.lastmod}">`), "Visible review date must agree with the SEO map.");
check(readFileSync("sitemap.xml", "utf8").includes(`<loc>${publicUrl(path)}</loc><lastmod>${page?.lastmod}</lastmod>`), "Sitemap date must agree with the SEO map.");

if (failures.length) {
  failures.forEach((failure) => console.error(`FAIL ${failure}`));
  process.exit(1);
}
console.log("PASS CAPM materials preserve edition boundaries, source evidence, AI checks, study routes, and metadata.");
