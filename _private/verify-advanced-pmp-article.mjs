import { existsSync, readFileSync } from "node:fs";

const articlePath = "guides/pmi-advanced-certification-pmp-impact.html";
const publicUrl = `https://starrycesium.com/${articlePath}`;
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

const article = read(articlePath);
const blog = read("blog.html");
const pmpHub = read("programs/pmp.html");
const seoMap = read("_private/seo-page-map.mjs");
const sitemap = read("sitemap.xml");

requireMatch(article, /<title>Is Advanced PMP Now APL\? PMI Launch and PMP Impact \| PassGrid<\/title>/, "Article title is missing or inaccurate.");
requireMatch(article, /<h1>Is &quot;Advanced PMP&quot; Now APL\? PMI's Launch and PMP Impact<\/h1>/, "Article H1 is missing or inaccurate.");
requireMatch(article, new RegExp(`<link rel="canonical" href="${publicUrl.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}"`), "Article canonical is missing.");
requireMatch(article, /Advanced Project Leader \(APL\)/, "Official credential name is missing.");
requireMatch(article, /October 22, 2026/, "Launch date is missing.");
requireMatch(article, /PMI-accredited organization/, "Current eligibility route is missing.");
requireMatch(article, /PMP, PgMP or PfMP/, "Qualifying prior credentials are missing.");
requireMatch(article, /Officially confirmed/, "Article does not label officially confirmed facts.");
requireMatch(article, /Community debate/, "Article does not separate community opinion from facts.");
requireMatch(article, /My view: the PMP is likely to be affected/i, "Article does not state the requested editorial position.");
requireMatch(article, /What would change this view/i, "Article does not explain what future evidence could change its conclusion.");
requireMatch(article, /Last reviewed:\s*<time datetime="2026-10-26">October 26, 2026<\/time>/, "Visible review date is missing.");
requireMatch(article, /https:\/\/www\.pmi\.org\/certifications\/advanced-project-leader-apl/, "Official APL source is missing.");
requireMatch(article, /https:\/\/www\.pmi\.org\/about\/press-media\/2026\/project-management-institute-helps-a-growing-profession-deliver-greater-value/, "Launch source is missing.");
if (/has not publicly launched APL|No public APL listing found|"@type": "ClaimReview"/.test(article)) failures.push("Outdated launch claim or unsupported schema remains.");
requireMatch(article, /https:\/\/www\.pmi\.org\/certifications/, "Official PMI certification catalog source is missing.");
requireMatch(article, /https:\/\/www\.reddit\.com\/r\/pmp\/comments\/1oxzv2j\/not_a_fan_of_the_new_pmp_advanced_certification\//, "Reddit discussion source is missing.");
requireMatch(article, /https:\/\/www\.reddit\.com\/r\/pmp\/comments\/1tf67xi\/pmis_new_advanced_pmp_cert_is_coming_is_this_the\//, "August 2026 market-saturation discussion source is missing.");
requireMatch(article, /https:\/\/www\.reddit\.com\/r\/pmp\/comments\/1w82gjk\/advanced_pmp_certification_upcoming_new_exam\//, "September 2026 discussion source is missing.");
requireMatch(article, /"@type": "Article"/, "Article JSON-LD is missing.");
requireMatch(article, /"@type": "BreadcrumbList"/, "BreadcrumbList JSON-LD is missing.");
requireMatch(article, /"datePublished": "2026-08-04"/, "Article publication date is missing from JSON-LD.");
requireMatch(article, /"dateModified": "2026-10-26"/, "Article modification date is missing from JSON-LD.");
requireMatch(article, /Frequently asked questions/, "Visible FAQ section is missing.");
requireMatch(article, /Update log/, "Visible update log is missing.");
if (/"@type": "FAQPage"/.test(article)) failures.push("Article must not use FAQPage structured data.");
requireMatch(article, /<figure class="article-visual"/, "Article visual is missing.");
requireMatch(article, /<section class="answer-first"/, "Answer-first summary is missing.");
requireMatch(article, /<section class="legal-section source-notes"/, "Source notes are missing.");
requireMatch(article, /<section class="legal-section related-guides"/, "Related study path is missing.");

requireMatch(blog, /\.\/guides\/pmi-advanced-certification-pmp-impact\.html/, "Blog does not link the article.");
requireMatch(pmpHub, /\.\.\/guides\/pmi-advanced-certification-pmp-impact\.html/, "PMP Hub does not link the article.");
requireMatch(seoMap, /guides\/pmi-advanced-certification-pmp-impact\.html", lastmod: "2026-10-26", index: true, schema: \["Article", "BreadcrumbList"\]/, "SEO page map entry is missing.");
requireMatch(sitemap, new RegExp(`<loc>${publicUrl.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}</loc><lastmod>2026-10-26</lastmod>`), "Sitemap entry is missing or stale.");

if (failures.length) {
  failures.forEach((failure) => console.error(`FAIL ${failure}`));
  console.error(`\n${failures.length} Advanced PMP article checks failed.`);
  process.exit(1);
}

console.log("PASS Advanced PMP article reflects APL launch, sources, schema, discovery links, and sitemap coverage.");
