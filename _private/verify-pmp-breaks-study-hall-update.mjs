import { existsSync, readFileSync } from "node:fs";

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

const guidePath = "guides/pmp-exam-breaks-40-70-70.html";
const guideUrl = `https://starrycesium.com/${guidePath}`;
const guide = read(guidePath);
const examExperience = read("guides/pmp-2026-exam-experience.html");
const onlineVsCenter = read("guides/pmp-online-vs-test-center.html");
const blog = read("blog.html");
const pmpHub = read("programs/pmp.html");
const seoMap = read("_private/seo-page-map.mjs");
const sitemap = read("sitemap.xml");
const longGuideCheck = read("_private/verify-long-guide-content.mjs");

requireMatch(guide, /<title>PMP Exam Breaks 2026: Is It Really 40-70-70\? \| PassGrid<\/title>/, "Break guide title is missing.");
requireMatch(guide, /<h1>PMP Exam Breaks in 2026: Is the New Format Really 40-70-70\?<\/h1>/, "Break guide H1 is missing.");
requireMatch(guide, new RegExp(`<link rel="canonical" href="${guideUrl.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}"`), "Break guide canonical is missing.");
requireMatch(guide, /180 questions[^.]{0,100}240 minutes/i, "Break guide omits the official exam totals.");
requireMatch(guide, /two 10-minute breaks/i, "Break guide omits the official break count and duration.");
requireMatch(guide, /first break[^.]{0,140}after the case-study section/i, "Break guide omits the first official break position.");
requireMatch(guide, /second break[^.]{0,180}(?:approximately|roughly)[^.]{0,80}(?:midway|middle)[^.]{0,100}independent/i, "Break guide omits the second official break position.");
requireMatch(guide, /cannot return[^.]{0,180}previous section/i, "Break guide omits the no-return rule.");
requireMatch(guide, /40-70-70[^.]{0,220}(?:not|does not)[^.]{0,120}(?:official|guaranteed|published)/i, "Break guide does not clearly label 40-70-70 as unconfirmed by PMI.");
requireMatch(guide, /candidate[^.]{0,180}(?:report|observation)[^.]{0,180}40-70-70/i, "Break guide does not label 40-70-70 as candidate-reported evidence.");
requireMatch(guide, /240-minute clock[^.]{0,220}(?:across|total|shared)/i, "Break guide does not explain that the response-time clock is shared across sections.");
requireMatch(guide, /online[^.]{0,220}(?:test center|test-center)[^.]{0,220}(?:appointment|Pearson VUE|instructions)/i, "Break guide omits delivery-specific verification guidance.");
requireMatch(guide, /https:\/\/www\.pmi\.org\/-\/media\/pmi\/documents\/public\/pdf\/certifications\/new-pmp-examination-content-outline-2026\.pdf/, "Break guide does not cite the current PMI ECO.");
requireMatch(guide, /https:\/\/www\.reddit\.com\/r\/pmp\/comments\/1w6gt5b\/2_burning_pmp_exam_questions\//, "Break guide does not cite the current community observation.");
requireMatch(guide, /"@type": "Article"/, "Break guide Article schema is missing.");
requireMatch(guide, /"@type": "BreadcrumbList"/, "Break guide BreadcrumbList schema is missing.");
requireMatch(guide, /"datePublished": "2026-09-04"/, "Break guide publication date is missing.");
requireNoMatch(guide, /"@type": "FAQPage"/, "Break guide should not use FAQPage schema.");

requireMatch(examExperience, /As of September 4, 2026/i, "Exam experience guide has not been reverified for September 4.");
requireMatch(examExperience, /public[^.]{0,180}Study Hall[^.]{0,220}180-question/i, "Exam experience guide omits the current public Study Hall product facts.");
requireMatch(examExperience, /no public[^.]{0,120}(?:September 4|dated)[^.]{0,160}(?:changelog|release note)/i, "Exam experience guide does not distinguish public product facts from the reported September 4 rollout.");
requireMatch(examExperience, /\.\/pmp-exam-breaks-40-70-70\.html/, "Exam experience guide does not link the focused break guide.");
requireMatch(examExperience, /"dateModified": "2026-09-04"/, "Exam experience guide modification date is stale.");
requireMatch(onlineVsCenter, /\.\/pmp-exam-breaks-40-70-70\.html/, "Online-vs-test-center guide does not link the break guide.");
requireMatch(blog, /\.\/guides\/pmp-exam-breaks-40-70-70\.html/, "Blog does not link the break guide.");
requireMatch(pmpHub, /\.\.\/guides\/pmp-exam-breaks-40-70-70\.html/, "PMP Hub does not link the break guide.");
requireMatch(longGuideCheck, /"guides\/pmp-exam-breaks-40-70-70\.html"/, "Long-guide validation does not include the break guide.");
requireMatch(seoMap, /guides\/pmp-exam-breaks-40-70-70\.html", lastmod: "2026-09-04", index: true, schema: \["Article", "BreadcrumbList"\]/, "SEO map is missing the break guide.");
requireMatch(seoMap, /guides\/pmp-2026-exam-experience\.html", lastmod: "2026-09-04", index: true, schema: \["Article", "BreadcrumbList"\]/, "SEO map has a stale exam-experience date.");
requireMatch(sitemap, new RegExp(`<loc>${guideUrl.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}</loc><lastmod>2026-09-04</lastmod>`), "Sitemap is missing the break guide.");
requireMatch(sitemap, /<loc>https:\/\/starrycesium\.com\/guides\/pmp-2026-exam-experience\.html<\/loc><lastmod>2026-09-04<\/lastmod>/, "Sitemap has a stale exam-experience date.");

if (failures.length) {
  failures.forEach((failure) => console.error(`FAIL ${failure}`));
  console.error(`\n${failures.length} PMP break and Study Hall update checks failed.`);
  process.exit(1);
}

console.log("PASS PMP break guide and Study Hall update preserve official boundaries, discovery links, schema, and sitemap coverage.");
