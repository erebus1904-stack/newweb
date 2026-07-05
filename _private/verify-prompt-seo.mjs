import { existsSync, readFileSync } from "node:fs";

const promptPages = [
  "pmp-ai-prompts.html",
  "prompts/pmp-study-prompts.html",
  "prompts/pmp-mistake-review-prompts.html",
  "prompts/pmp-exam-operations-prompts.html",
  "prompts/pmp-research-prompts.html",
  "prompts/pmp-career-value-prompts.html",
];

const sitemap = readFileSync("sitemap.xml", "utf8");
const failures = [];

function visibleWordCount(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/g, " ")
    .replace(/<style[\s\S]*?<\/style>/g, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&[a-z0-9#]+;/gi, " ")
    .split(/\s+/)
    .filter((word) => /[A-Za-z0-9]/.test(word)).length;
}

for (const page of promptPages) {
  if (!existsSync(page)) {
    failures.push(`${page} does not exist`);
    continue;
  }

  const html = readFileSync(page, "utf8");
  const depthPrefix = page.startsWith("prompts/") ? "../" : "./";
  const publicPath = page === "index.html" ? "" : page;

  if (!sitemap.includes(`https://starrycesium.com/${publicPath}`)) failures.push(`${page} missing from sitemap`);
  if (!/<script type="application\/ld\+json">/.test(html)) failures.push(`${page} missing JSON-LD`);
  if (!html.includes(`${depthPrefix}programs/pmp.html`)) failures.push(`${page} missing PMP hub link`);
  if (!html.includes(`${depthPrefix}pmp-questions.html`) && !html.includes(`${depthPrefix}programs/pmp-chapter-practice.html`) && !html.includes(`${depthPrefix}pmp-mock-exam.html`)) {
    failures.push(`${page} missing practice link`);
  }
  if (!html.includes(`${depthPrefix}guides/`)) failures.push(`${page} missing guide link`);
  if (visibleWordCount(html) < 600) failures.push(`${page} visible content is too thin`);

  if (page.startsWith("prompts/")) {
    const promptCards = (html.match(/class="prompt-card"/g) || []).length;
    const copyButtons = (html.match(/data-copy-prompt/g) || []).length;
    const promptTexts = (html.match(/data-prompt-text/g) || []).length;
    if (promptCards < 5) failures.push(`${page} has only ${promptCards} prompt cards`);
    if (copyButtons < promptCards) failures.push(`${page} has fewer copy buttons than prompt cards`);
    if (promptTexts < promptCards) failures.push(`${page} has fewer prompt text blocks than prompt cards`);
    if (!/What to paste/.test(html)) failures.push(`${page} missing What to paste section`);
    if (!/Expected output/.test(html)) failures.push(`${page} missing Expected output section`);
    if (!/Next step/.test(html)) failures.push(`${page} missing Next step section`);
  }
}

if (failures.length) {
  failures.forEach((failure) => console.error(`FAIL ${failure}`));
  process.exit(1);
}

console.log("PASS prompt SEO pages include required schema, links, prompt cards, and sitemap coverage.");
