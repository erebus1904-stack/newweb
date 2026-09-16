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

const trainingPath = "guides/pmp-35-hour-training-rules-2026.html";
const prepcastPath = "guides/pm-prepcast-closing-2026.html";
const trainingUrl = `https://starrycesium.com/${trainingPath}`;
const prepcastUrl = `https://starrycesium.com/${prepcastPath}`;

const training = read(trainingPath);
const prepcast = read(prepcastPath);
const examVersion = read("guides/pmp-2026-exam-version.html");
const examExperience = read("guides/pmp-2026-exam-experience.html");
const pduGuide = read("guides/udemy-60-pmp-pdus-renewal.html");
const blog = read("blog.html");
const pmpHub = read("programs/pmp.html");
const capmHub = read("programs/capm.html");
const seoMap = read("_private/seo-page-map.mjs");
const sitemap = read("sitemap.xml");
const longGuideCheck = read("_private/verify-long-guide-content.mjs");

requireMatch(training, /<title>PMP 35-Hour Training Rules Change December 1, 2026 \| PassGrid<\/title>/, "Training guide title is missing.");
requireMatch(training, /<h1>PMP 35-Hour Training Rules Change December 1, 2026: What Still Qualifies\?<\/h1>/, "Training guide H1 is missing.");
requireMatch(training, new RegExp(`<link rel="canonical" href="${trainingUrl.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}"`), "Training guide canonical is missing.");
requireMatch(training, /Starting (?:on )?(?:December 1|1 December), 2026/i, "Training guide does not state the effective date.");
requireMatch(training, /live[^.]{0,180}(?:instructor-led|class)[^.]{0,220}Authorized Training Partner/i, "Training guide does not explain the live-class restriction.");
requireMatch(training, /self-paced[^.]{0,180}(?:any organization|no change)/i, "Training guide does not preserve self-paced eligibility.");
requireMatch(training, /China Registered Education Provider \(REP\)/, "Training guide omits the China REP route.");
requireMatch(training, /eligible[^.]{0,120}(?:accredited higher education|higher education program)/i, "Training guide omits eligible higher-education programs.");
requireMatch(training, /active CAPM[^.]{0,180}(?:fulfills|satisfies)[^.]{0,100}training/i, "Training guide omits the active CAPM route.");
requireMatch(training, /completed before[^.]{0,180}(?:remain|remains)[^.]{0,80}eligible/i, "Training guide does not protect pre-change completed training.");
requireMatch(training, /Udemy[^.]{0,220}(?:self-paced|on-demand)[^.]{0,180}(?:may|can)[^.]{0,100}(?:qualify|eligible|count)/i, "Training guide does not answer the Udemy intent conservatively.");
requireMatch(training, /https:\/\/www\.pmi\.org\/certifications\/project-management-pmp/, "Training guide does not cite the current PMI certification page.");
requireMatch(training, /href="https:\/\/www\.pmi\.org\/certifications\/project-management-pmp\/new-exam"/, "Training guide does not link the corroborating New Exam notice.");
requireMatch(training, /https:\/\/www\.pmi\.org\/blog\/why-train-for-the-pmp-with-a-pmi-authorized-training-partner/, "Training guide does not cite PMI's transition guidance.");
requireMatch(training, /"@type": "Article"/, "Training guide Article schema is missing.");
requireMatch(training, /"@type": "BreadcrumbList"/, "Training guide BreadcrumbList schema is missing.");
requireMatch(training, /"datePublished": "2026-09-01"/, "Training guide publication date is missing.");
requireMatch(training, /"dateModified": "2026-09-15"/, "Training guide modification date is stale.");
requireMatch(training, /Last reviewed: <time datetime="2026-09-15">September 15, 2026<\/time>/, "Training guide visible review date is stale.");
requireNoMatch(training, /"@type": "FAQPage"/, "Training guide should not use FAQPage schema.");
const hoursSection = training.match(/<section\b[^>]*id="contact-hours-vs-pdus"[^>]*>([\s\S]*?)<\/section>/)?.[1] || "";
const hoursText = hoursSection.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ");
requireMatch(hoursSection, /<table\b/, "Training guide needs an application-hours and renewal-PDUs comparison table.");
requireMatch(hoursText, /active CAPM[^.]{0,220}(?:does not|not)[^.]{0,100}(?:experience|education-level)/i, "CAPM must not waive other eligibility requirements.");
requireMatch(hoursText, /before[^.]{0,100}(?:certification|credential)[^.]{0,120}(?:not|cannot)[^.]{0,100}(?:PDU|renewal)/i, "Do not reuse pre-certification activity as later renewal PDUs.");
requireMatch(hoursText, /PassGrid fictional example/i, "Label the course purchase example as fictional editorial guidance.");
requireMatch(hoursSection, /href="https:\/\/www\.pmi\.org\/-\/media\/pmi\/documents\/public\/pdf\/certifications\/ccr-certification-requirements-handbook\.pdf"/, "Keep the primary CCR source next to the hours comparison.");
requireMatch(hoursSection, /href="\.\/udemy-60-pmp-pdus-renewal\.html"/, "Connect the comparison to the existing renewal guide.");

requireMatch(prepcast, /<title>PM PrepCast Is Closing December 4, 2026 \| PassGrid<\/title>/, "PrepCast guide title is missing.");
requireMatch(prepcast, /<h1>PM PrepCast Is Closing December 4, 2026: What PMP and CAPM Students Should Save<\/h1>/, "PrepCast guide H1 is missing.");
requireMatch(prepcast, new RegExp(`<link rel="canonical" href="${prepcastUrl.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}"`), "PrepCast guide canonical is missing.");
requireMatch(prepcast, /October 31[^.]{0,100}(?:last day|sales|purchase)/i, "PrepCast guide omits the sales deadline.");
requireMatch(prepcast, /November 30[^.]{0,180}(?:complete|assessment|certificate)/i, "PrepCast guide omits the recommended completion deadline.");
requireMatch(prepcast, /December 4[^.]{0,180}(?:access|systems|accounts|shut)/i, "PrepCast guide omits the shutdown date.");
requireMatch(prepcast, /certificate[^.]{0,180}(?:remain|stays)[^.]{0,80}valid/i, "PrepCast guide does not explain certificate validity.");
requireMatch(prepcast, /save[^.]{0,180}(?:receipt|score|exam history|progress)/i, "PrepCast guide lacks a records checklist.");
requireMatch(prepcast, /purchases?[^.]{0,180}(?:September 1|1 September)[^.]{0,160}(?:final|non-refundable)/i, "PrepCast guide omits the current refund warning.");
requireMatch(prepcast, /course lessons[^.]{0,180}(?:working|not confirmed|details)/i, "PrepCast guide does not label post-closure lesson access as unresolved.");
requireMatch(prepcast, /https:\/\/www\.project-management-prepcast\.com\/pm-prepcast-closing-faq/, "PrepCast guide does not cite the official FAQ.");
requireMatch(prepcast, /"@type": "Article"/, "PrepCast guide Article schema is missing.");
requireMatch(prepcast, /"@type": "BreadcrumbList"/, "PrepCast guide BreadcrumbList schema is missing.");
requireMatch(prepcast, /"datePublished": "2026-09-01"/, "PrepCast guide publication date is missing.");
requireNoMatch(prepcast, /"@type": "(?:FAQPage|Product|Offer)"/, "PrepCast guide uses unsupported FAQPage, Product, or Offer schema.");

requireNoMatch(examVersion, /PMI has not announced the specific start date/i, "Existing PMP material guide still contains the outdated date warning.");
requireMatch(examVersion, /\.\/pmp-35-hour-training-rules-2026\.html/, "Existing PMP material guide does not link the detailed training rule guide.");
const dateSplit = examVersion.match(/<section\b[^>]*id="july-vs-december"[^>]*>([\s\S]*?)<\/section>/)?.[1] || "";
const dateSplitText = dateSplit.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ");
requireMatch(dateSplit, /<h2[^>]*>Did the PMP exam change in July or December 2026\?<\/h2>/, "PMP material guide needs a direct July-versus-December question.");
requireMatch(dateSplitText, /July 2026[^.]{0,180}(?:exam|ECO)[^.]{0,180}December 1, 2026/i, "PMP material guide must put the two dates in one direct answer.");
requireMatch(dateSplitText, /December 1, 2026[^.]{0,180}(?:live|instructor-led)[^.]{0,180}(?:does not|not)[^.]{0,100}(?:exam|exam format)/i, "December must be limited to the live-training rule, not the exam update.");
requireMatch(dateSplit, /href="https:\/\/www\.pmi\.org\/certifications\/project-management-pmp\/new-exam"/, "Date comparison must cite the official PMI new-exam page beside the answer.");
requireMatch(dateSplit, /href="\.\/pmp-35-hour-training-rules-2026\.html"/, "Date comparison must route detailed training questions to the existing guide.");
requireMatch(examVersion, /"dateModified": "2026-09-16"/, "Existing PMP material guide modification date is stale.");
requireMatch(examVersion, /Last reviewed: <time datetime="2026-09-16">September 16, 2026<\/time>/, "Existing PMP material guide visible review date is stale.");
requireNoMatch(examVersion, /"@type": "FAQPage"/, "PMP material guide should not add FAQPage schema for this update.");

requireMatch(examExperience, /cannot predict[^.]{0,180}(?:60%|60 percent)/i, "Exam experience guide does not combine the non-predictive warning with PMI's 60% observation.");
requireMatch(examExperience, /most users[^.]{0,180}(?:60%|60 percent)[^.]{0,140}(?:successful|passed)/i, "Exam experience guide omits PMI's published 60% observation.");
requireMatch(examExperience, /does not identify a July 2026 exam cohort or validate 60%/, "Exam experience guide does not limit the score observation to its documented evidence.");
requireMatch(examExperience, /"dateModified": "2026-09-09"/, "Exam experience guide modification date is stale.");

requireMatch(pduGuide, /\.\/pmp-35-hour-training-rules-2026\.html/, "PDU guide does not link the separate 35-hour application guide.");
requireMatch(pduGuide, /"dateModified": "2026-09-01"/, "PDU guide modification date is stale.");
requireMatch(blog, new RegExp(`\./${trainingPath.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}`), "Blog does not link the training guide.");
requireMatch(blog, new RegExp(`\./${prepcastPath.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}`), "Blog does not link the PrepCast guide.");
requireMatch(pmpHub, new RegExp(`\.\./${trainingPath.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}`), "PMP Hub does not link the training guide.");
requireMatch(pmpHub, new RegExp(`\.\./${prepcastPath.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}`), "PMP Hub does not link the PrepCast guide.");
requireMatch(capmHub, new RegExp(`\.\./${prepcastPath.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}`), "CAPM Hub does not link the PrepCast guide.");

for (const path of [trainingPath, prepcastPath]) {
  requireMatch(longGuideCheck, new RegExp(`"${path.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}"`), `Long-guide validation does not include ${path}.`);
}

requireMatch(seoMap, /guides\/pmp-35-hour-training-rules-2026\.html", lastmod: "2026-09-15", index: true, schema: \["Article", "BreadcrumbList"\]/, "SEO map is missing the training guide.");
requireMatch(seoMap, /guides\/pm-prepcast-closing-2026\.html", lastmod: "2026-09-01", index: true, schema: \["Article", "BreadcrumbList"\]/, "SEO map is missing the PrepCast guide.");
requireMatch(seoMap, /guides\/pmp-2026-exam-version\.html", lastmod: "2026-09-16", index: true, schema: \["Article", "BreadcrumbList"\]/, "SEO map has a stale PMP material-guide date.");
requireMatch(seoMap, /guides\/pmp-2026-exam-experience\.html", lastmod: "2026-09-09", index: true, schema: \["Article", "BreadcrumbList"\]/, "SEO map has a stale PMP experience-guide date.");
requireMatch(seoMap, /guides\/udemy-60-pmp-pdus-renewal\.html", lastmod: "2026-09-01", index: true, schema: \["Article", "BreadcrumbList"\]/, "SEO map has a stale PMP PDU-guide date.");
requireMatch(sitemap, new RegExp(`<loc>${trainingUrl.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}</loc><lastmod>2026-09-15</lastmod>`), "Sitemap is missing the training guide.");
requireMatch(sitemap, /<loc>https:\/\/starrycesium\.com\/guides\/pmp-2026-exam-version\.html<\/loc><lastmod>2026-09-16<\/lastmod>/, "Sitemap has a stale PMP material-guide date.");
requireMatch(sitemap, new RegExp(`<loc>${prepcastUrl.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}</loc><lastmod>2026-09-01</lastmod>`), "Sitemap is missing the PrepCast guide.");

if (failures.length) {
  failures.forEach((failure) => console.error(`FAIL ${failure}`));
  console.error(`\n${failures.length} training and PrepCast update checks failed.`);
  process.exit(1);
}

console.log("PASS PMP training and PrepCast updates preserve dates, evidence boundaries, schema, discovery links, and sitemap coverage.");
