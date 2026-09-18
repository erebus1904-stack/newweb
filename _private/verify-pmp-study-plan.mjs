import { readFileSync } from "node:fs";
import { publicUrl, seoPages } from "./seo-page-map.mjs";

const path = "guides/pmp-study-plan.html";
const html = readFileSync(path, "utf8");
const body = html.split("<body")[1] || "";
const text = body.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ");
const failures = [];
const check = (condition, message) => { if (!condition) failures.push(message); };
const title = "30-Day PMP Study Plan for 2026: Is One Month Enough?";
const page = seoPages.find((entry) => entry.path === path);
const sources = [
  "https://www.pmi.org/es-es/disciplined-agile/sitecore/content/pmiheadless/home/blog/blog-posts/2026/09/09/14/19/pmp-study-plan-30-day-sprint-lessons",
  "https://www.pmi.org/-/media/pmi/documents/public/pdf/certifications/new-pmp-examination-content-outline-2026.pdf",
];
let nodes = [];
try {
  nodes = [...html.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)]
    .flatMap((match) => { const value = JSON.parse(match[1]); return value["@graph"] || [value]; });
} catch (error) {
  failures.push(`Invalid JSON-LD: ${error.message}`);
}
const article = nodes.find((node) => node["@type"] === "Article");
check(html.includes(`<title>${title} | PassGrid</title>`) && body.includes(`<h1>${title}</h1>`), "Use the approved title and H1.");
check(article?.headline === title, "Article headline must match the H1.");
check(html.includes(`<link rel="canonical" href="${publicUrl(path)}"`), "Preserve the study-plan canonical.");
check(/<section class="answer-first"/.test(body), "Add an answer-first block.");
check(/Guilherme Ozores Pires/.test(text) && /author[^.]{0,100}experience/i.test(text), "Attribute the PMI-hosted experience to its author.");
check(/does not establish[^.]{0,140}within 30 days/i.test(text), "Do not claim the three participants passed within the sprint.");
check(/not a PMI[^.]{0,80}(?:prescription|requirement|duration)/i.test(text), "Distinguish suggested schedules from official requirements.");
for (const duration of ["30 days", "60 days", "90 days"]) check(text.includes(duration), `Missing ${duration} planning option.`);
const hasCurrentDomainWeights = (value) => [
  /\bPeople\s+(?:is\s+)?33%/i,
  /\bProcess\s+(?:is\s+)?41%/i,
  /\bBusiness Environment\s+(?:is\s+)?26%/i,
].every((pattern) => pattern.test(value));
check(hasCurrentDomainWeights(text), "Match People 33%, Process 41%, and Business Environment 26% to their domains.");
check(hasCurrentDomainWeights("People is 33%, Process 41%, and Business Environment 26%."), "Domain-weight validator must accept the current mapping.");
for (const swapped of [
  "People is 33%, Process 26%, and Business Environment 41%.",
  "People is 41%, Process 33%, and Business Environment 26%.",
  "People is 26%, Process 41%, and Business Environment 33%.",
]) check(!hasCurrentDomainWeights(swapped), `Domain-weight validator must reject swapped weights: ${swapped}`);
for (const id of ["week-1", "week-2", "week-3", "week-4", "recovery-plan"]) check(body.includes(`id="${id}"`), `Missing milestone section ${id}.`);
check(/Business Environment[^.]{0,260}(?:governance|compliance|value)/i.test(text), "Give Business Environment explicit task coverage.");
check((text.match(/Checkpoint:/g) || []).length === 4, "Give each of the four weeks a checkpoint.");
check(/180 questions[^.]{0,80}240 minutes/i.test(text), "Include current full-length practice totals.");
check(/first week[^.]{0,130}(?:Study Hall|practice)/i.test(text), "Explain early practice rather than waiting until all learning is complete.");
check(/(?:No|not)[^.]{0,80}Study Hall[^.]{0,120}(?:guarantee|predict|passing)/i.test(text), "Do not use Study Hall percentages as a pass guarantee.");
check(/work|illness/i.test(text) && /recovery-plan/.test(body), "Include interruption recovery.");
for (const href of ["../programs/pmp.html", "../pmp-questions.html", "../pmp-mock-exam.html", "./pmp-2026-exam-experience.html", "./pmp-exam-breaks-40-70-70.html", "./pmp-application-without-project-manager-title.html"]) {
  check(body.includes(`href="${href}"`), `Missing learning route ${href}.`);
}
for (const url of sources) {
  check(body.includes(`href="${url}"`), `Missing visible source ${url}.`);
  check(article?.citation?.includes(url), `Missing structured citation ${url}.`);
}
check(/class="legal-section source-notes"/.test(body) && /Update log/.test(text), "Add source notes and update log.");
check(nodes.some((node) => node["@type"] === "BreadcrumbList"), "Keep BreadcrumbList.");
check(!nodes.some((node) => ["HowTo", "FAQPage", "ClaimReview"].includes(node["@type"])), "Do not add unsupported growth-oriented schema.");
check(article?.datePublished === "2026-06-15", "Keep the original publication date.");
check(page?.lastmod >= "2026-09-14" && article?.dateModified === page?.lastmod, "Synchronize the reviewed date with the SEO map.");
check(body.includes(`Last reviewed: <time datetime="${page?.lastmod}">`), "Visible review date must match metadata.");
check(readFileSync("sitemap.xml", "utf8").includes(`<loc>${publicUrl(path)}</loc><lastmod>${page?.lastmod}</lastmod>`), "Synchronize the sitemap date.");
if (failures.length) {
  failures.forEach((failure) => console.error(`FAIL ${failure}`));
  process.exit(1);
}
console.log("PASS PMP study plan has attributed evidence, current scope, four milestones, recovery guidance, study routes, and synchronized metadata.");
