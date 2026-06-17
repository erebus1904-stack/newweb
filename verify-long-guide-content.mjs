import { existsSync, readFileSync } from "node:fs";

const pmpGuides = [
  "guides/pmp-study-plan.html",
  "guides/pmp-situational-questions.html",
  "guides/pmp-agile-hybrid-predictive.html",
  "guides/pmp-change-control.html",
  "guides/pmp-risk-issues.html",
  "guides/pmp-stakeholder-communication.html",
  "guides/pmp-2026-exam-version.html",
  "guides/pmp-next-best-action.html",
  "guides/pmp-delivery-approaches.html",
  "guides/pmp-agile-roles.html",
  "guides/pmp-process-map.html",
];

const capmGuides = [
  "guides/capm-domain-study-plan.html",
  "guides/capm-exam-timing-strategy.html",
  "guides/capm-core-concepts.html",
  "guides/capm-predictive-project-management.html",
  "guides/capm-agile-scrum-kanban.html",
  "guides/capm-business-analysis-study.html",
];

const allGuides = [...pmpGuides, ...capmGuides];
const failures = [];

function visibleWordCount(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/g, " ")
    .replace(/<style[\s\S]*?<\/style>/g, " ")
    .replace(/<svg[\s\S]*?<\/svg>/g, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&[a-z0-9#]+;/gi, " ")
    .split(/\s+/)
    .filter((word) => /[A-Za-z0-9]/.test(word)).length;
}

for (const path of allGuides) {
  if (!existsSync(path)) {
    failures.push(`${path} is missing.`);
    continue;
  }
  const html = readFileSync(path, "utf8");
  const words = visibleWordCount(html);
  if (words < 1000 || words > 1500) {
    failures.push(`${path} has ${words} visible words, expected 1000-1500.`);
  }
  if (!/<article class="guide-article article-page">/.test(html)) {
    failures.push(`${path} does not use article-page structure.`);
  }
  if (!/<figure class="article-visual"/.test(html)) {
    failures.push(`${path} is missing a simple visual.`);
  }
  if (/lorem ipsum|coming soon|under construction/i.test(html)) {
    failures.push(`${path} contains placeholder wording.`);
  }
}

const home = readFileSync("index.html", "utf8");
const pmp = readFileSync("programs/pmp.html", "utf8");
const capm = readFileSync("programs/capm.html", "utf8");
const sitemap = readFileSync("sitemap.xml", "utf8");

for (const path of pmpGuides) {
  if (!pmp.includes(`../${path}`)) failures.push(`PMP center does not link ${path}.`);
  if (!sitemap.includes(`https://starrycesium.com/${path}`)) failures.push(`sitemap does not include ${path}.`);
}

for (const path of capmGuides) {
  if (!capm.includes(`../${path}`)) failures.push(`CAPM page does not link ${path}.`);
  if (!home.includes(`./${path}`)) failures.push(`home does not link ${path}.`);
  if (!sitemap.includes(`https://starrycesium.com/${path}`)) failures.push(`sitemap does not include ${path}.`);
}

if (failures.length) {
  failures.forEach((failure) => console.error(`FAIL ${failure}`));
  console.error(`\n${failures.length} long guide checks failed.`);
  process.exit(1);
}

console.log(`PASS ${allGuides.length} guide articles are 1000-1500 words with visuals and links.`);
