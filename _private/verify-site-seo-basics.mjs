import { existsSync, readdirSync, readFileSync } from "node:fs";
import path from "node:path";

const htmlFiles = [];

function walk(dir) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory() && ![".git", "reports"].includes(entry.name)) {
      walk(fullPath);
    }
    if (entry.isFile() && entry.name.endsWith(".html")) {
      htmlFiles.push(fullPath.replace(/^[.]\\?/, "").replace(/\\/g, "/"));
    }
  }
}

function getMatch(content, pattern) {
  const match = content.match(pattern);
  return match ? match[1].trim() : "";
}

function extractRelatedGuideSection(content) {
  const match = content.match(/<section class="legal-section related-guides" aria-labelledby="related-guides-title">([\s\S]*?)<\/section>/i);
  return match ? match[1] : "";
}

function visibleWordCount(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/g, " ")
    .replace(/<style[\s\S]*?<\/style>/g, " ")
    .replace(/<([a-z0-9-]+)(?=[^>]*\shidden\b)[^>]*>[\s\S]*?<\/\1>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&[a-z0-9#]+;/gi, " ")
    .split(/\s+/)
    .filter((word) => /[A-Za-z0-9]/.test(word)).length;
}

walk(".");

const failures = [];
const titles = new Map();
const descriptions = new Map();
const canonicals = new Map();

for (const file of htmlFiles) {
  const html = readFileSync(file, "utf8");
  const title = getMatch(html, /<title>([^<]+)<\/title>/i);
  const description = getMatch(html, /<meta name="description" content="([^"]+)"/i);
  const canonical = getMatch(html, /<link rel="canonical" href="([^"]+)"/i);
  const words = visibleWordCount(html);

  if (/LicenseAtlas/i.test(html)) failures.push(`${file} contains retired LicenseAtlas brand`);
  if (title.length < 20 || title.length > 90) failures.push(`${file} title length ${title.length}`);
  if (description.length < 70 || description.length > 180) failures.push(`${file} description length ${description.length}`);
  if (words < 300) failures.push(`${file} visible words ${words}`);
  if (!/^https:\/\/starrycesium\.com\//.test(canonical)) failures.push(`${file} canonical is not on starrycesium.com`);

  if (file.startsWith("guides/")) {
    const exam = file.includes("/capm-") ? "capm" : "pmp";
    const relatedSection = extractRelatedGuideSection(html);
    const requiredGuidePatterns = [
      ["Open Graph site name", /<meta property="og:site_name" content="PassGrid" \/>/i],
      ["Open Graph type", /<meta property="og:type" content="article" \/>/i],
      ["Open Graph title", /<meta property="og:title" content="[^"]+" \/>/i],
      ["Open Graph description", /<meta property="og:description" content="[^"]+" \/>/i],
      ["Open Graph url", /<meta property="og:url" content="https:\/\/starrycesium\.com\/guides\/[^"]+\.html" \/>/i],
      ["Twitter card", /<meta name="twitter:card" content="summary" \/>/i],
      ["Twitter title", /<meta name="twitter:title" content="[^"]+" \/>/i],
      ["Twitter description", /<meta name="twitter:description" content="[^"]+" \/>/i],
      ["JSON-LD", /<script type="application\/ld\+json">/i],
      ["Article or LearningResource schema", /"@type": "(Article|LearningResource)"/i],
      ["BreadcrumbList schema", /"@type": "BreadcrumbList"/i]
    ];

    for (const [label, pattern] of requiredGuidePatterns) {
      if (!pattern.test(html)) failures.push(`${file} missing ${label}`);
    }

    if (!relatedSection) {
      failures.push(`${file} missing related guide section`);
    } else {
      const sameClusterLinks = [...relatedSection.matchAll(/href="\.\.\/guides\/([^"]+\.html)"/g)]
        .map((match) => `guides/${match[1]}`)
        .filter((href) => href.startsWith(`guides/${exam}-`));
      const uniqueSameClusterLinks = new Set(sameClusterLinks);

      if (!new RegExp(`href="\\.\\.\\/programs\\/${exam}\\.html"`).test(relatedSection)) {
        failures.push(`${file} related section missing ${exam.toUpperCase()} hub link`);
      }
      if (!new RegExp(`href="\\.\\.\\/index\\.html\\?exam=${exam}#practice-workspace"`).test(relatedSection)) {
        failures.push(`${file} related section missing ${exam.toUpperCase()} practice link`);
      }
      if (uniqueSameClusterLinks.size < 3) {
        failures.push(`${file} related section has ${uniqueSameClusterLinks.size} same-cluster article links`);
      }
      if (uniqueSameClusterLinks.has(file)) {
        failures.push(`${file} related section links to itself`);
      }
    }
  }

  titles.set(title, [...(titles.get(title) || []), file]);
  descriptions.set(description, [...(descriptions.get(description) || []), file]);
  canonicals.set(canonical, [...(canonicals.get(canonical) || []), file]);
}

for (const [title, files] of titles) {
  if (files.length > 1) failures.push(`duplicate title "${title}" in ${files.join(", ")}`);
}
for (const [description, files] of descriptions) {
  if (files.length > 1) failures.push(`duplicate description "${description}" in ${files.join(", ")}`);
}
for (const [canonical, files] of canonicals) {
  if (files.length > 1) failures.push(`duplicate canonical "${canonical}" in ${files.join(", ")}`);
}

const sitemap = readFileSync("sitemap.xml", "utf8");
const sitemapPaths = [...sitemap.matchAll(/<loc>https:\/\/starrycesium\.com\/([^<]*)<\/loc>/g)]
  .map((match) => match[1] || "index.html");

for (const sitemapPath of sitemapPaths) {
  const localPath = sitemapPath === "" ? "index.html" : sitemapPath;
  if (!existsSync(localPath)) failures.push(`sitemap references missing file ${localPath}`);
}

const localLinkFailures = [];
for (const file of htmlFiles) {
  const html = readFileSync(file, "utf8");
  const hrefs = [...html.matchAll(/href="([^"]+)"/g)].map((match) => match[1]);
  for (const href of hrefs) {
    if (/^(https?:|mailto:|#)/.test(href)) continue;
    const cleanHref = href.split("#")[0].split("?")[0];
    if (!cleanHref || cleanHref.startsWith("data:")) continue;
    const target = path.normalize(path.join(path.dirname(file), cleanHref));
    if (!existsSync(target)) localLinkFailures.push(`${file} -> ${href}`);
  }
}
failures.push(...localLinkFailures.map((failure) => `missing local link ${failure}`));

if (failures.length) {
  failures.forEach((failure) => console.error(`FAIL ${failure}`));
  process.exit(1);
}

console.log(`PASS ${htmlFiles.length} HTML pages have SEO basics, content depth, sitemap files, and local links.`);
