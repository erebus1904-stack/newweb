import { existsSync, readFileSync, readdirSync } from "node:fs";
import path from "node:path";
import { publicUrl, seoPages } from "./seo-page-map.mjs";

const sitemap = readFileSync("sitemap.xml", "utf8");
const failures = [];
const publicHtmlDirectories = [".", "guides", "programs", "prompts"];
const mappedPaths = new Set(seoPages.map((page) => page.path));

const publicHtmlPaths = publicHtmlDirectories.flatMap((directory) =>
  readdirSync(directory, { withFileTypes: true })
    .filter((entry) => entry.isFile() && entry.name.endsWith(".html"))
    .map((entry) => path.posix.join(directory === "." ? "" : directory, entry.name))
);

for (const pagePath of publicHtmlPaths) {
  const html = readFileSync(pagePath, "utf8");
  if (!mappedPaths.has(pagePath)) {
    failures.push(`${pagePath} is a public HTML page missing from seo-page-map.mjs`);
  }
  if (/href=["'](?:\.\.\/|\.\/)?index\.html(?:[?#][^"']*)?["']/i.test(html)) {
    failures.push(`${pagePath} links to index.html instead of the canonical homepage /`);
  }
}

for (const page of seoPages) {
  if (!existsSync(page.path)) {
    failures.push(`${page.path} is listed in seo-page-map.mjs but does not exist`);
    continue;
  }
  const html = readFileSync(page.path, "utf8");
  const url = publicUrl(page.path);
  const inSitemap = sitemap.includes(`<loc>${url}</loc>`);
  const robotsIndex = /<meta name="robots" content="index, follow" \/>/.test(html);
  const robotsNoindex = /<meta name="robots" content="noindex, follow" \/>/.test(html);

  if (page.index && !inSitemap) failures.push(`${page.path} should be in sitemap.xml`);
  if (!page.index && inSitemap) failures.push(`${page.path} should not be in sitemap.xml`);
  if (page.index && !robotsIndex) failures.push(`${page.path} should declare index, follow`);
  if (!page.index && !robotsNoindex) failures.push(`${page.path} should declare noindex, follow`);
}

if (failures.length) {
  failures.forEach((failure) => console.error(`FAIL ${failure}`));
  process.exit(1);
}

console.log("PASS sitemap and robots rules match seo-page-map.mjs.");
