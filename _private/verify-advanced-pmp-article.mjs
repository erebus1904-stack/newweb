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

requireMatch(article, /<title>PMI Advanced Certification: Will It Weaken the PMP\? \| PassGrid<\/title>/, "Article title is missing or inaccurate.");
requireMatch(article, /<h1>PMI Advanced Certification: Will It Weaken the PMP\?<\/h1>/, "Article H1 is missing or inaccurate.");
requireMatch(article, new RegExp(`<link rel="canonical" href="${publicUrl.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}"`), "Article canonical is missing.");
requireMatch(article, /Project Professional Advanced Certification/, "Article does not use PMI's confirmed certification name.");
requireMatch(article, /limited-access pilot/i, "Article does not clearly describe limited pilot access.");
requireMatch(article, /not (?:yet )?a broadly available certification/i, "Article does not distinguish the pilot from a public certification.");
requireMatch(article, /My view: the PMP is likely to be affected/i, "Article does not state the requested editorial position.");
requireMatch(article, /What would change this view/i, "Article does not explain what future evidence could change its conclusion.");
requireMatch(article, /Last reviewed:\s*<time datetime="2026-08-04">August 4, 2026<\/time>/, "Visible review date is missing.");
requireMatch(article, /https:\/\/www\.pmi\.org\/zh-cn\/future-50\/sitecore\/content\/pmiheadless\/home\/whats-next/, "Official PMI source is missing.");
requireMatch(article, /https:\/\/www\.reddit\.com\/r\/pmp\/comments\/1oxzv2j\/not_a_fan_of_the_new_pmp_advanced_certification\//, "Reddit discussion source is missing.");
requireMatch(article, /"@type": "Article"/, "Article JSON-LD is missing.");
requireMatch(article, /"@type": "BreadcrumbList"/, "BreadcrumbList JSON-LD is missing.");
requireMatch(article, /"datePublished": "2026-08-04"/, "Article publication date is missing from JSON-LD.");
requireMatch(article, /"dateModified": "2026-08-04"/, "Article modification date is missing from JSON-LD.");
requireMatch(article, /<figure class="article-visual"/, "Article visual is missing.");
requireMatch(article, /<section class="answer-first"/, "Answer-first summary is missing.");
requireMatch(article, /<section class="legal-section source-notes"/, "Source notes are missing.");
requireMatch(article, /<section class="legal-section related-guides"/, "Related study path is missing.");

requireMatch(blog, /\.\/guides\/pmi-advanced-certification-pmp-impact\.html/, "Blog does not link the article.");
requireMatch(pmpHub, /\.\.\/guides\/pmi-advanced-certification-pmp-impact\.html/, "PMP Hub does not link the article.");
requireMatch(seoMap, /guides\/pmi-advanced-certification-pmp-impact\.html", lastmod: "2026-08-04", index: true, schema: \["Article", "BreadcrumbList"\]/, "SEO page map entry is missing.");
requireMatch(sitemap, new RegExp(`<loc>${publicUrl.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}</loc><lastmod>2026-08-04</lastmod>`), "Sitemap entry is missing or stale.");

if (failures.length) {
  failures.forEach((failure) => console.error(`FAIL ${failure}`));
  console.error(`\n${failures.length} Advanced PMP article checks failed.`);
  process.exit(1);
}

console.log("PASS Advanced PMP article uses cautious pilot wording, sources, schema, discovery links, and sitemap coverage.");
