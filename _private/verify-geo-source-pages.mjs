import { existsSync, readFileSync } from "node:fs";

const failures = [];

function readRequired(file) {
  if (!existsSync(file)) {
    failures.push(`${file} is missing`);
    return "";
  }
  return readFileSync(file, "utf8");
}

function requirePattern(content, pattern, message) {
  if (!pattern.test(content)) failures.push(message);
}

const sourceRegister = readRequired("docs/geo/source-register.md");
const seoMap = readRequired("_private/seo-page-map.mjs");
const sitemap = readRequired("sitemap.xml");
const blog = readRequired("blog.html");
const pmpHub = readRequired("programs/pmp.html");
const capmHub = readRequired("programs/capm.html");

for (const sourceId of [
  "PMI-PMP-CERT",
  "PMI-CAPM-CERT",
  "PMI-PMP-2026-UPDATE",
  "PMI-PMP-2026-ECO",
  "PEARSON-PMI-SCHEDULING"
]) {
  requirePattern(sourceRegister, new RegExp(`\\b${sourceId}\\b`), `source register missing ${sourceId}`);
}

requirePattern(sourceRegister, /2026-07-16/, "source register missing verification date 2026-07-16");
requirePattern(sourceRegister, /review trigger/i, "source register missing review-trigger policy");

const pages = [
  {
    file: "guides/pmp-vs-capm.html",
    checks: [
      [/PMP vs CAPM decision table/i, "missing PMP vs CAPM decision table"],
      [/If you are still unsure/i, "missing conservative route for uncertain readers"],
      [/href="\.\.\/programs\/pmp\.html"/, "missing PMP hub route"],
      [/href="\.\.\/programs\/capm\.html"/, "missing CAPM hub route"]
    ]
  },
  {
    file: "guides/pmp-2026-exam-version.html",
    reviewDate: "2026-09-01",
    reviewLabel: "September 1, 2026",
    checks: [
      [/on or after July 9, 2026/i, "missing post-launch exam-date answer"],
      [/People[^<]*33%/i, "missing July 2026 People weighting"],
      [/Process[^<]*41%/i, "missing July 2026 Process weighting"],
      [/Business Environment[^<]*26%/i, "missing July 2026 Business Environment weighting"],
      [/post-launch format observations/i, "missing route to post-launch format observations"],
      [/official ECO as the final scope authority/i, "missing official-scope boundary"],
      [/What older materials still teach well/i, "missing older-materials boundary"],
      [/PassGrid coverage/i, "missing PassGrid coverage statement"]
    ]
  },
  {
    file: "guides/pmp-online-vs-test-center.html",
    checks: [
      [/Online exam may fit/i, "missing online-fit decision"],
      [/test center may fit/i, "missing test-center-fit decision"],
      [/Pearson VUE/i, "missing Pearson VUE attribution"],
      [/system test/i, "missing official system-test check"]
    ]
  }
];

for (const page of pages) {
  const html = readRequired(page.file);
  if (!html) continue;
  const reviewDate = page.reviewDate ?? "2026-07-16";
  const reviewLabel = page.reviewLabel ?? "July 16, 2026";

  const commonChecks = [
    [/<section class="answer-first"/, "missing answer-first block"],
    [new RegExp(`Last reviewed:\\s*<time datetime="${reviewDate}">${reviewLabel}<\\/time>`, "i"), "missing visible last-reviewed date"],
    [/<section class="legal-section source-notes"/, "missing sources and verification section"],
    [/Sources and verification/i, "missing sources heading"],
    [/href="https:\/\/www\.pmi\.org\//i, "missing official PMI source link"],
    [/"@type": "Article"/, "missing Article JSON-LD"],
    [/"@type": "BreadcrumbList"/, "missing BreadcrumbList JSON-LD"],
    [new RegExp(`"dateModified": "${reviewDate}"`), "missing current dateModified"],
    [/class="legal-section related-guides"/, "missing related guides section"]
  ];

  for (const [pattern, label] of [...commonChecks, ...page.checks]) {
    requirePattern(html, pattern, `${page.file} ${label}`);
  }

  const publicUrl = `https://starrycesium.com/${page.file}`;
  requirePattern(seoMap, new RegExp(page.file.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")), `${page.file} missing from SEO page map`);
  requirePattern(sitemap, new RegExp(publicUrl.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")), `${page.file} missing from sitemap`);
}

const discoveryChecks = [
  [blog, /href="\.\/guides\/pmp-vs-capm\.html"/, "blog missing PMP vs CAPM guide"],
  [blog, /href="\.\/guides\/pmp-online-vs-test-center\.html"/, "blog missing PMP online vs test center guide"],
  [pmpHub, /href="\.\.\/guides\/pmp-vs-capm\.html"/, "PMP hub missing PMP vs CAPM guide"],
  [pmpHub, /href="\.\.\/guides\/pmp-online-vs-test-center\.html"/, "PMP hub missing online vs test center guide"],
  [capmHub, /href="\.\.\/guides\/pmp-vs-capm\.html"/, "CAPM hub missing PMP vs CAPM guide"]
];

for (const [content, pattern, message] of discoveryChecks) {
  requirePattern(content, pattern, message);
}

if (failures.length) {
  failures.forEach((failure) => console.error(`FAIL ${failure}`));
  process.exit(1);
}

console.log("PASS GEO source register, three decision guides, discovery links, structured data, and sitemap coverage.");
