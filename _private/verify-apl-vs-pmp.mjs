import { existsSync, readFileSync } from "node:fs";

const path = "guides/pmi-apl-vs-pmp.html";
const url = `https://starrycesium.com/${path}`;
const failures = [];
const read = (file) => existsSync(file) ? readFileSync(file, "utf8") : "";
const html = read(path);
const blog = read("blog.html");
const hub = read("programs/pmp.html");
const map = read("_private/seo-page-map.mjs");
const sitemap = read("sitemap.xml");
const requireText = (content, text, message) => { if (!content.includes(text)) failures.push(message); };

requireText(html, "PMI APL vs PMP: Eligibility, Exam and Current Limits", "Article title/H1 is missing.");
requireText(html, `<link rel="canonical" href="${url}"`, "Canonical is missing.");
requireText(html, '"datePublished": "2026-10-26"', "Publication date is missing.");
requireText(html, '"dateModified": "2026-10-26"', "Modification date is missing.");
requireText(html, '<time datetime="2026-10-26">October 26, 2026</time>', "Visible review date is missing.");
requireText(html, '"@type": "Article"', "Article JSON-LD is missing.");
requireText(html, '"@type": "BreadcrumbList"', "Breadcrumb JSON-LD is missing.");
requireText(html, "https://www.pmi.org/certifications/advanced-project-leader-apl", "PMI APL source is missing.");
requireText(html, "https://www.pmi.org/about/press-media/2026/project-management-institute-helps-a-growing-profession-deliver-greater-value", "PMI launch source is missing.");
requireText(html, "60 questions", "APL question count is missing.");
requireText(html, "120 minutes", "APL duration is missing.");
requireText(html, "180 questions", "PMP question count is missing.");
requireText(html, "240 minutes", "PMP duration is missing.");
requireText(html, "PgMP", "PgMP eligibility is missing.");
requireText(html, "PfMP", "PfMP eligibility is missing.");
requireText(html, "CAPM", "CAPM eligibility boundary is missing.");
requireText(html, "PMI-accredited organization", "Organization requirement is missing.");
requireText(html, '<section class="answer-first"', "Answer-first summary is missing.");
requireText(html, '<section class="legal-section source-notes"', "Sources are missing.");
requireText(html, '<section class="legal-section related-guides"', "Related links are missing.");
requireText(blog, `./${path}`, "Blog link is missing.");
requireText(hub, `../${path}`, "PMP hub link is missing.");
requireText(map, `path: "${path}", lastmod: "2026-10-26", index: true, schema: ["Article", "BreadcrumbList"]`, "SEO map entry is missing.");
requireText(sitemap, `<loc>${url}</loc><lastmod>2026-10-26</lastmod>`, "Sitemap entry is missing.");

if (failures.length) {
  failures.forEach((failure) => console.error(`FAIL ${failure}`));
  process.exit(1);
}
console.log("PASS APL vs PMP article, sources, discovery links, and sitemap coverage.");
