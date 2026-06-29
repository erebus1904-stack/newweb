import { readdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";

const siteUrl = "https://starrycesium.com";
const siteName = "PassGrid";
const guidesDir = "guides";
const sitemap = readFileSync("sitemap.xml", "utf8");

function getMatch(content, pattern, label, file) {
  const match = content.match(pattern);
  if (!match) throw new Error(`${file} missing ${label}`);
  return match[1].trim();
}

function escapeAttr(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function stripTags(value) {
  return value.replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();
}

function lastmodFor(relativePath) {
  const escapedPath = relativePath.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const pattern = new RegExp(`<loc>${siteUrl}/${escapedPath}</loc><lastmod>([^<]+)</lastmod>`);
  return getMatch(sitemap, pattern, "sitemap lastmod", relativePath);
}

function guideSchema({ relativePath, title, description, canonical, headline, modifiedDate }) {
  const section = relativePath.includes("/capm-") ? "CAPM" : "PMP";
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${canonical}#article`,
        "headline": headline,
        "description": description,
        "url": canonical,
        "datePublished": modifiedDate,
        "dateModified": modifiedDate,
        "articleSection": section,
        "author": {
          "@type": "Organization",
          "name": siteName,
          "url": `${siteUrl}/`
        },
        "publisher": {
          "@type": "Organization",
          "name": siteName,
          "url": `${siteUrl}/`
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": canonical
        }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": `${siteUrl}/`
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": `${section} Study Hub`,
            "item": `${siteUrl}/programs/${section.toLowerCase()}.html`
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": headline,
            "item": canonical
          }
        ]
      }
    ]
  };
}

function metadataBlock({ title, description, canonical, relativePath, headline }) {
  const modifiedDate = lastmodFor(relativePath);
  const social = [
    `<meta property="og:type" content="article" />`,
    `<meta property="og:site_name" content="${siteName}" />`,
    `<meta property="og:title" content="${escapeAttr(title)}" />`,
    `<meta property="og:description" content="${escapeAttr(description)}" />`,
    `<meta property="og:url" content="${canonical}" />`,
    `<meta name="twitter:card" content="summary" />`,
    `<meta name="twitter:title" content="${escapeAttr(title)}" />`,
    `<meta name="twitter:description" content="${escapeAttr(description)}" />`
  ];
  const schema = JSON.stringify(
    guideSchema({ relativePath, title, description, canonical, headline, modifiedDate }),
    null,
    8
  )
    .split("\n")
    .map((line, index) => (index === 0 ? line : `      ${line}`))
    .join("\n");

  return `    ${social.join("\n    ")}
    <script type="application/ld+json">
      ${schema}
    </script>`;
}

for (const entry of readdirSync(guidesDir, { withFileTypes: true })) {
  if (!entry.isFile() || !entry.name.endsWith(".html")) continue;

  const file = path.join(guidesDir, entry.name);
  const relativePath = file.replace(/\\/g, "/");
  let html = readFileSync(file, "utf8");

  html = html
    .replace(/LicenseAtlas PMP/g, siteName)
    .replace(/<span class="brand-mark" aria-hidden="true"><span>PM<\/span><\/span><strong>PassGrid<\/strong>/g, '<span class="brand-mark" aria-hidden="true"><svg viewBox="0 0 64 64" focusable="false"><rect x="8" y="8" width="48" height="48" rx="13"></rect><path d="M18 22c5-2 10-2 14 1v24c-4-3-9-3-14-1V22Z"></path><path d="M32 23c5-3 10-3 14-1v24c-5-2-10-2-14 1V23Z"></path><path d="M22 30h6M22 37h6M36 30h5"></path><circle cx="48" cy="18" r="7"></circle><path d="M44.5 18.2l2.4 2.4 5-5.4"></path></svg></span><strong>PassGrid</strong>');

  const title = getMatch(html, /<title>([^<]+)<\/title>/i, "title", relativePath);
  const description = getMatch(html, /<meta name="description" content="([^"]+)"/i, "description", relativePath);
  const canonical = getMatch(html, /<link rel="canonical" href="([^"]+)"/i, "canonical", relativePath);
  const headline = stripTags(getMatch(html, /<h1[^>]*>([\s\S]*?)<\/h1>/i, "h1", relativePath));
  const block = metadataBlock({ title, description, canonical, relativePath, headline });

  if (/<meta property="og:type" content="article" \/>/i.test(html)) {
    continue;
  }

  html = html.replace(
    /(\s{4}<link rel="canonical" href="[^"]+" \/>\r?\n)/i,
    `$1${block}\n`
  );

  writeFileSync(file, html);
}
