import { writeFileSync } from "node:fs";
import { publicUrl, seoPages } from "./seo-page-map.mjs";

const urls = seoPages
  .filter((page) => page.index)
  .map((page) => `  <url><loc>${publicUrl(page.path)}</loc><lastmod>${page.lastmod}</lastmod></url>`);

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join("\n")}\n</urlset>\n`;

writeFileSync("sitemap.xml", sitemap);
console.log(`Generated sitemap.xml with ${urls.length} indexable URLs.`);
