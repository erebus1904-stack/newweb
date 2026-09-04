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

const examPath = "guides/pmp-2026-exam-experience.html";
const aiPath = "guides/ai-pmp-capm-study-without-cheating.html";
const examUrl = `https://starrycesium.com/${examPath}`;
const aiUrl = `https://starrycesium.com/${aiPath}`;

const exam = read(examPath);
const ai = read(aiPath);
const materialGuide = read("guides/pmp-2026-exam-version.html");
const capmMaterialGuide = read("guides/capm-study-materials-plan.html");
const blog = read("blog.html");
const pmpHub = read("programs/pmp.html");
const capmHub = read("programs/capm.html");
const seoMap = read("_private/seo-page-map.mjs");
const sitemap = read("sitemap.xml");
const longGuideCheck = read("_private/verify-long-guide-content.mjs");

requireMatch(exam, /<title>New PMP Exam Experience 2026: Case Studies and Timing \| PassGrid<\/title>/, "PMP exam experience title is missing.");
requireMatch(exam, /<h1>New PMP Exam Experience 2026: Case Studies, AI, Study Hall, and Time Management<\/h1>/, "PMP exam experience H1 is missing.");
requireMatch(exam, new RegExp(`<link rel="canonical" href="${examUrl.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}"`), "PMP exam experience canonical is missing.");
requireMatch(exam, /180 questions/i, "PMP exam experience does not state the official question count.");
requireMatch(exam, /240 minutes/i, "PMP exam experience does not state the official duration.");
requireMatch(exam, /case-study questions/i, "PMP exam experience does not cover official case-study questions.");
requireMatch(exam, /graphs and charts/i, "PMP exam experience does not cover graphs and charts.");
requireMatch(exam, /AI, sustainability, stakeholder engagement, outcomes, and value/i, "PMP exam experience does not cover the official current emphasis.");
requireMatch(exam, /first scheduled break follows the case-study section/i, "PMP exam experience does not explain the first break.");
requireMatch(exam, /second break occurs roughly midway/i, "PMP exam experience does not explain the second break.");
requireMatch(exam, /candidate reports? (?:are|is) not representative/i, "PMP exam experience does not limit candidate-report claims.");
requireMatch(exam, /no official (?:Study Hall )?(?:passing|safe )?score threshold/i, "PMP exam experience does not reject an unofficial Study Hall cutoff.");
requireMatch(exam, /<h2>Is PMI Study Hall aligned with the new 2026 PMP exam\?<\/h2>/, "PMP exam experience is missing the current Study Hall alignment question.");
requireMatch(exam, /Essentials[^.]{0,220}(?:before 8 July 2026|before July 9, 2026)/i, "PMP exam experience does not identify the legacy Essentials product wording.");
requireMatch(exam, /Study Hall Plus[^.]{0,220}(?:aligned with|aligned to)[^.]{0,100}(?:2026|Exam Content Outline|ECO)/i, "PMP exam experience does not identify the new-exam Plus product wording.");
requireMatch(exam, /September 4[^.]{0,220}(?:community|candidate|user)[^.]{0,120}(?:report|reported|notice|prompt)/i, "PMP exam experience does not label the September 4 claim as community evidence.");
requireMatch(exam, /(?:PMI has not|There is no public)[^.]{0,220}(?:September 4|reset|update scope)/i, "PMP exam experience does not state what PMI has not publicly confirmed.");
requireMatch(exam, /"@type": "Article"/, "PMP exam experience Article schema is missing.");
requireMatch(exam, /"@type": "BreadcrumbList"/, "PMP exam experience BreadcrumbList schema is missing.");
requireMatch(exam, /"datePublished": "2026-08-09"/, "PMP exam experience publication date is missing.");
requireMatch(exam, /"dateModified": "2026-09-04"/, "PMP exam experience update date is missing.");
requireMatch(exam, /Last reviewed: <time datetime="2026-09-04">September 4, 2026<\/time>/, "PMP exam experience visible review date is missing.");
if (/"@type": "FAQPage"/.test(exam)) failures.push("PMP exam experience should not use FAQPage schema.");
requireMatch(exam, /<section class="legal-section source-notes"/, "PMP exam experience source notes are missing.");
requireMatch(exam, /<section class="legal-section related-guides"/, "PMP exam experience related links are missing.");

requireMatch(ai, /<title>AI for PMP and CAPM Study Without Cheating \| PassGrid<\/title>/, "AI study guide title does not distinguish its compliance intent.");
requireMatch(ai, /<h1>How to Use AI for PMP and CAPM Study Without Cheating<\/h1>/, "AI study guide H1 is missing.");
requireMatch(ai, new RegExp(`<link rel="canonical" href="${aiUrl.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}"`), "AI study guide canonical is missing.");
requireMatch(ai, /recalled (?:live )?exam questions/i, "AI study guide does not prohibit recalled exam questions.");
requireMatch(ai, /paid (?:question bank|study material)/i, "AI study guide does not protect paid materials.");
requireMatch(ai, /https:\/\/www\.pmi\.org\/certifications\/certification-resources\/exam-security/, "AI study guide does not cite PMI Exam Security.");
requireMatch(ai, /confidential[^.]{0,120}(?:questions|content|answers)/i, "AI study guide does not explain the confidentiality rule.");
requireMatch(ai, /client data|confidential employer information/i, "AI study guide does not cover private workplace data.");
requireMatch(ai, /Never use an outside AI tool during a proctored exam/i, "AI study guide does not prohibit AI use during the exam.");
requireMatch(ai, /verify[^.]{0,100}official (?:PMI )?sources/i, "AI study guide does not require official-source verification.");
requireMatch(ai, /"@type": "Article"/, "AI study guide Article schema is missing.");
requireMatch(ai, /"@type": "BreadcrumbList"/, "AI study guide BreadcrumbList schema is missing.");
requireMatch(ai, /"datePublished": "2026-08-09"/, "AI study guide publication date is missing.");
requireMatch(ai, /"dateModified": "2026-08-28"/, "AI study guide update date is missing.");
requireMatch(ai, /<section class="legal-section source-notes"/, "AI study guide source notes are missing.");
requireMatch(ai, /<section class="legal-section related-guides"/, "AI study guide related links are missing.");

requireMatch(materialGuide, /<h2>How deeply should you study a 35-hour PMP course\?<\/h2>/, "PMP material guide is missing 35-hour course guidance.");
requireMatch(materialGuide, /Starting (?:on )?December 1, 2026/i, "PMP material guide does not state the confirmed live-training rule date.");
requireMatch(materialGuide, /Authorized Training Partner \(ATP\)/, "PMP material guide does not name eligible live-training providers.");
requireMatch(materialGuide, /self-paced courses? may still come from any organization/i, "PMP material guide does not distinguish self-paced training.");
requireMatch(materialGuide, /\.\/pmp-35-hour-training-rules-2026\.html/, "PMP material guide does not link the detailed training-rule guide.");
requireMatch(materialGuide, /\.\/pmp-2026-exam-experience\.html/, "PMP material guide does not link the new exam experience guide.");
requireMatch(capmMaterialGuide, /<h2>Build a resource-neutral CAPM study stack<\/h2>/, "CAPM material guide is missing the resource-neutral stack.");
requireMatch(capmMaterialGuide, /Choose by function rather than brand/i, "CAPM resource-neutral guidance has no actionable method.");
requireMatch(capmMaterialGuide, /<h2>Audit a CAPM simulator before trusting it<\/h2>/, "CAPM material guide is missing the simulator audit.");
requireMatch(capmMaterialGuide, /active CAPM Examination Content Outline/i, "CAPM simulator audit does not require current ECO evidence.");
requireMatch(capmMaterialGuide, /large question count is not proof of alignment/i, "CAPM simulator audit does not reject question-count marketing as alignment evidence.");

for (const path of [examPath, aiPath]) {
  requireMatch(blog, new RegExp(`\\./${path.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}`), `Blog does not link ${path}.`);
  requireMatch(pmpHub, new RegExp(`\\.\\./${path.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}`), `PMP Hub does not link ${path}.`);
  requireMatch(longGuideCheck, new RegExp(`"${path.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}"`), `Long-guide validation does not include ${path}.`);
}

requireMatch(capmHub, /\.\.\/guides\/ai-pmp-capm-study-without-cheating\.html/, "CAPM Hub does not link the AI study guide.");
requireMatch(seoMap, /guides\/pmp-2026-exam-experience\.html", lastmod: "2026-09-04", index: true, schema: \["Article", "BreadcrumbList"\]/, "SEO map is missing the updated PMP exam experience page.");
requireMatch(seoMap, /guides\/ai-pmp-capm-study-without-cheating\.html", lastmod: "2026-08-28", index: true, schema: \["Article", "BreadcrumbList"\]/, "SEO map is missing the AI study page.");
requireMatch(sitemap, new RegExp(`<loc>${examUrl.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}</loc><lastmod>2026-09-04</lastmod>`), "Sitemap is missing the updated PMP exam experience page.");
requireMatch(sitemap, new RegExp(`<loc>${aiUrl.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}</loc><lastmod>2026-08-28</lastmod>`), "Sitemap is missing the AI study page.");

if (failures.length) {
  failures.forEach((failure) => console.error(`FAIL ${failure}`));
  console.error(`\n${failures.length} PMP 2026 and AI guide checks failed.`);
  process.exit(1);
}

console.log("PASS PMP 2026 experience and AI study guides have content, evidence boundaries, discovery links, schema, and sitemap coverage.");
