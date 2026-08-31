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

const retakePath = "guides/pmp-exam-retake-protection.html";
const securityPath = "guides/pmp-exam-dumps-security.html";
const retakeUrl = `https://starrycesium.com/${retakePath}`;
const securityUrl = `https://starrycesium.com/${securityPath}`;

const retake = read(retakePath);
const security = read(securityPath);
const ai = read("guides/ai-pmp-capm-study-without-cheating.html");
const blog = read("blog.html");
const pmpHub = read("programs/pmp.html");
const seoMap = read("_private/seo-page-map.mjs");
const sitemap = read("sitemap.xml");
const longGuideCheck = read("_private/verify-long-guide-content.mjs");

requireMatch(retake, /<title>PMP Exam Retake Protection Is Official: What PMI Confirms \| PassGrid<\/title>/, "Retake guide title is missing or overstates the available terms.");
requireMatch(retake, /<h1>PMP Exam Retake Protection Is Official: What PMI Confirms and What Remains Unclear<\/h1>/, "Retake guide H1 is missing.");
requireMatch(retake, new RegExp(`<link rel="canonical" href="${retakeUrl.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}"`), "Retake guide canonical is missing.");
requireMatch(retake, /product code (?:is )?<strong>CE045<\/strong>|product code CE045/i, "Retake guide does not identify PMI product code CE045.");
requireMatch(retake, /public (?:PMI )?page[^.]{0,180}(?:does not|doesn't)[^.]{0,180}(?:price|eligibility|purchase window|coverage)/i, "Retake guide does not state that public official terms remain incomplete.");
requireMatch(retake, /secondary report|candidate report|support anecdote/i, "Retake guide does not distinguish secondary reports from official policy.");
requireMatch(retake, /Can you add PMP Retake Protection after paying for the exam\?/i, "Retake guide does not answer the after-payment intent.");
requireMatch(retake, /verify[^.]{0,160}(?:checkout|PMI account)/i, "Retake guide does not tell readers where to verify current terms.");
requireMatch(retake, /"@type": "Article"/, "Retake guide Article schema is missing.");
requireMatch(retake, /"@type": "BreadcrumbList"/, "Retake guide BreadcrumbList schema is missing.");
requireMatch(retake, /"datePublished": "2026-08-28"/, "Retake guide publication date is missing.");
requireMatch(retake, /"dateModified": "2026-08-28"/, "Retake guide modification date is missing.");
requireMatch(retake, /<section class="legal-section source-notes"/, "Retake guide source notes are missing.");
requireNoMatch(retake, /"@type": "(?:Product|Offer|FAQPage|ClaimReview)"/, "Retake guide uses an unsupported Product, Offer, FAQPage, or ClaimReview schema.");

requireMatch(security, /<title>Are PMP Exam Dumps Allowed\? PMI Exam Security Rules \| PassGrid<\/title>/, "Exam security guide title is missing.");
requireMatch(security, /<h1>Are PMP Exam Dumps Allowed\? PMI Exam Security Rules and Safe Alternatives<\/h1>/, "Exam security guide H1 is missing.");
requireMatch(security, new RegExp(`<link rel="canonical" href="${securityUrl.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}"`), "Exam security guide canonical is missing.");
requireMatch(security, /No\. PMI prohibits/i, "Exam security guide lacks a direct no answer.");
requireMatch(security, /legitimate practice[^<]{0,300}(?:exam dump|live exam|recalled)/i, "Exam security guide does not distinguish legitimate practice from dumps.");
requireMatch(security, /accidentally (?:open|see|receive|encounter)|accidental exposure/i, "Exam security guide does not explain accidental exposure steps.");
requireMatch(security, /data forensics/i, "Exam security guide does not cover PMI data forensics.");
requireMatch(security, /invalidat|revoke|restriction|legal action/i, "Exam security guide does not explain possible sanctions.");
requireMatch(security, /report[^.]{0,180}(?:PMI|exam security)/i, "Exam security guide does not explain how to report suspected dumps.");
requireMatch(security, /<h2>Can you really get PMP certified in 3 days\?<\/h2>/i, "Exam security guide does not answer the three-day certification claim.");
requireMatch(security, /already (?:eligible|approved)[^.]{0,180}(?:three-day|3-day|three days)/i, "Exam security guide does not distinguish short final review by an eligible candidate.");
requireMatch(security, /(?:100%|guaranteed)[^.]{0,180}(?:proxy|exam dump|confidential|misleading|warning)/i, "Exam security guide does not identify guaranteed three-day marketing risks.");
requireMatch(security, /"@type": "Article"/, "Exam security guide Article schema is missing.");
requireMatch(security, /"@type": "BreadcrumbList"/, "Exam security guide BreadcrumbList schema is missing.");
requireMatch(security, /"datePublished": "2026-08-28"/, "Exam security guide publication date is missing.");
requireMatch(security, /"dateModified": "2026-08-31"/, "Exam security guide update date is missing.");
requireMatch(security, /Last reviewed: <time datetime="2026-08-31">August 31, 2026<\/time>/, "Exam security guide visible review date is missing.");
requireMatch(security, /<section class="legal-section source-notes"/, "Exam security guide source notes are missing.");
requireNoMatch(security, /tiktok\.com|pmp_dumps|"@type": "(?:FAQPage|ClaimReview)"/i, "Exam security guide links to suspicious accounts or uses unsupported FAQPage/ClaimReview schema.");

requireMatch(ai, /<h2>Can ChatGPT or Claude practice scores predict CAPM readiness\?<\/h2>/, "AI guide is missing the CAPM score reliability section.");
requireMatch(ai, /not calibrated by PMI/i, "AI guide does not explain that AI practice scores are not PMI-calibrated.");
requireMatch(ai, /(?:85%|90%)[^.]{0,120}(?:cannot|can't)[^.]{0,100}predict/i, "AI guide does not reject 85-90% as a CAPM result predictor.");
requireMatch(ai, /\.\/pmp-exam-dumps-security\.html/, "AI guide does not link the exam security guide.");
requireMatch(ai, /\.\.\/programs\/capm\.html/, "AI guide does not link the CAPM Hub.");
requireMatch(ai, /"dateModified": "2026-08-28"/, "AI guide modification date was not updated.");

for (const path of [retakePath, securityPath]) {
  requireMatch(blog, new RegExp(`\\./${path.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}`), `Blog does not link ${path}.`);
  requireMatch(pmpHub, new RegExp(`\\.\\./${path.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}`), `PMP Hub does not link ${path}.`);
  requireMatch(longGuideCheck, new RegExp(`"${path.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}"`), `Long-guide validation does not include ${path}.`);
}

requireMatch(seoMap, /guides\/pmp-exam-retake-protection\.html", lastmod: "2026-08-28", index: true, schema: \["Article", "BreadcrumbList"\]/, "SEO map is missing the retake guide.");
requireMatch(seoMap, /guides\/pmp-exam-dumps-security\.html", lastmod: "2026-08-31", index: true, schema: \["Article", "BreadcrumbList"\]/, "SEO map is missing the updated exam security guide.");
requireMatch(seoMap, /guides\/ai-pmp-capm-study-without-cheating\.html", lastmod: "2026-08-28", index: true, schema: \["Article", "BreadcrumbList"\]/, "SEO map does not show the AI guide update.");
requireMatch(sitemap, new RegExp(`<loc>${retakeUrl.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}</loc><lastmod>2026-08-28</lastmod>`), "Sitemap is missing the retake guide.");
requireMatch(sitemap, new RegExp(`<loc>${securityUrl.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}</loc><lastmod>2026-08-31</lastmod>`), "Sitemap is missing the updated exam security guide.");

if (failures.length) {
  failures.forEach((failure) => console.error(`FAIL ${failure}`));
  console.error(`\n${failures.length} retake and exam security guide checks failed.`);
  process.exit(1);
}

console.log("PASS retake and exam security guides preserve evidence boundaries, discovery links, schema, and sitemap coverage.");
