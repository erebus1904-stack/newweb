import { existsSync, readFileSync } from "node:fs";

const guidePath = "guides/udemy-60-pmp-pdus-renewal.html";
const publicUrl = `https://starrycesium.com/${guidePath}`;
const failures = [];

function read(path) {
  if (!existsSync(path)) {
    failures.push(`${path} is missing.`);
    return "";
  }
  return readFileSync(path, "utf8");
}

function requireMatch(content, pattern, message) {
  if (!pattern.test(content)) failures.push(message);
}

function requireNoMatch(content, pattern, message) {
  if (pattern.test(content)) failures.push(message);
}

const guide = read(guidePath);
const blog = read("blog.html");
const pmpHub = read("programs/pmp.html");
const seoMap = read("_private/seo-page-map.mjs");
const sitemap = read("sitemap.xml");
const longGuideCheck = read("_private/verify-long-guide-content.mjs");

requireMatch(guide, /<title>Can a Udemy Course Count for 60 PMP PDUs\? \| PassGrid<\/title>/, "Guide title is missing or unstable.");
requireMatch(guide, /<h1>Can a \$20 Udemy Course Really Count for 60 PMP PDUs\?<\/h1>/, "Guide H1 is missing.");
requireMatch(guide, new RegExp(`<link rel="canonical" href="${publicUrl.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}"`), "Guide canonical is missing.");
requireMatch(guide, /price and platform do not make the PDUs valid/i, "Answer-first summary does not state the core decision rule.");
requireMatch(guide, /60[^<]{0,80}PDU/i, "Guide does not state the 60-PDU renewal total.");
requireMatch(guide, /35[^<]{0,80}Education/i, "Guide does not state the 35-Education-PDU minimum.");
requireMatch(guide, /Ways of Working[\s\S]{0,220}(?:At least )?8/i, "Ways of Working minimum is missing.");
requireMatch(guide, /Power Skills[\s\S]{0,220}(?:At least )?8/i, "Power Skills minimum is missing.");
requireMatch(guide, /Business Acumen[\s\S]{0,220}(?:At least )?8/i, "Business Acumen minimum is missing.");
requireMatch(guide, /remaining 11 Education PDUs/i, "Flexible Education allocation is missing.");
requireMatch(guide, /Giving Back[\s\S]{0,220}(?:Maximum |Up to )?25/i, "Giving Back maximum is missing.");
requireMatch(guide, /Work as a Practitioner[\s\S]{0,220}(?:Maximum |Up to )?8/i, "Practitioner maximum is missing.");
requireMatch(guide, /35 training hours[^.]{0,180}(?:application|eligibility|apply)/i, "Guide does not distinguish initial PMP training from renewal Education PDUs.");
requireMatch(guide, /third-party provider courses?[^.]{0,180}(?:eligible|count|accepted|qualify)/i, "Third-party course eligibility is not explained.");
requireMatch(guide, /not (?:automatically|automatic approval|pre-approved)/i, "Guide does not reject automatic validity claims.");
requireMatch(guide, /Certification Requirements System \(CCRS\)/, "CCRS is not defined.");
requireMatch(guide, /18 months after[^.]{0,120}(?:CCR cycle|cycle ends)/i, "Audit-document retention period is missing.");
requireMatch(guide, /completion certificate/i, "Completion certificate guidance is missing.");
requireMatch(guide, /course outline|syllabus/i, "Course-content evidence guidance is missing.");
requireMatch(guide, /<section class="answer-first"/, "Answer-first summary is missing.");
requireMatch(guide, /<section class="legal-section source-notes"/, "Official source notes are missing.");
requireMatch(guide, /<section class="legal-section related-guides"/, "Related links are missing.");
requireMatch(guide, /https:\/\/www\.pmi\.org\/-\/media\/pmi\/documents\/public\/pdf\/certifications\/resources\/ccr-certification-requirements-handbook\.pdf/, "Official PMI CCR Handbook is missing.");
requireMatch(guide, /https:\/\/ccrs\.pmi\.org\/info\/earnpdus/, "Official PMI CCRS source is missing.");
requireMatch(guide, /"@type": "Article"/, "Article JSON-LD is missing.");
requireMatch(guide, /"@type": "BreadcrumbList"/, "BreadcrumbList JSON-LD is missing.");
requireMatch(guide, /"datePublished": "2026-08-10"/, "Publication date is missing from JSON-LD.");
requireNoMatch(guide, /"@type": "FAQPage"/, "FAQPage schema should not be used for this guide.");

requireMatch(blog, /\.\/guides\/udemy-60-pmp-pdus-renewal\.html/, "Blog does not link the guide.");
requireMatch(pmpHub, /\.\.\/guides\/udemy-60-pmp-pdus-renewal\.html/, "PMP Hub does not link the guide.");
requireMatch(longGuideCheck, /"guides\/udemy-60-pmp-pdus-renewal\.html"/, "Long-guide validation does not include the guide.");
requireMatch(seoMap, /guides\/udemy-60-pmp-pdus-renewal\.html", lastmod: "2026-08-10", index: true, schema: \["Article", "BreadcrumbList"\]/, "SEO page map entry is missing.");
requireMatch(sitemap, new RegExp(`<loc>${publicUrl.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}</loc><lastmod>2026-08-10</lastmod>`), "Sitemap entry is missing or stale.");

if (failures.length) {
  failures.forEach((failure) => console.error(`FAIL ${failure}`));
  console.error(`\n${failures.length} PMP PDU renewal guide checks failed.`);
  process.exit(1);
}

console.log("PASS PMP PDU renewal guide has accurate CCR rules, evidence boundaries, schema, discovery links, and sitemap coverage.");
