# PMP AI Prompts SEO Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a PMP-first AI prompts SEO section to PassGrid without turning the site into a broad prompt library.

**Architecture:** Keep the site as static HTML, reuse the existing PassGrid header, guide-card layout, prompt copy controls, JSON-LD style, and `_private/seo-page-map.mjs` as the source of truth for indexable pages. Build the prompt section in phases so the first release ships only the hub, PMP study prompts, and PMP mistake-review prompts, with later pages added after the MVP passes SEO and link validation.

**Tech Stack:** Static HTML, shared `styles.css`, shared `nav.js`, Node-based validation scripts in `_private`, generated `sitemap.xml`.

---

## Current Project Findings

- The project is English-first and already positioned around PMP/CAPM practice, matching the SEO document's language recommendation.
- `programs/pmp.html` already contains seven copyable PMP learning prompts using `.learning-prompt-block`, `.learning-prompt-text`, `.copy-prompt-button`, and `data-copy-prompt`.
- Prompt copy behavior currently exists inline in `programs/pmp.html`; new prompt pages should move this behavior to `nav.js` so copy controls are shared.
- `_private/seo-page-map.mjs` is the source of truth for sitemap generation and structured-data expectations.
- `_private/build-sitemap.mjs` generates `sitemap.xml`; therefore `sitemap.xml` should be regenerated, not manually maintained as a separate source of truth.
- `_private/verify-site-seo-basics.mjs`, `_private/verify-indexable-pages.mjs`, and `_private/verify-structured-data.mjs` already cover core SEO regressions and should be extended rather than bypassed.
- `blog.html`, `programs/pmp.html`, `pmp-questions.html`, and `pmp-mock-exam.html` are the first internal-link surfaces for the prompt MVP.

## File Structure

### Create

- `pmp-ai-prompts.html`  
  Prompt section hub. Summarizes the six prompt categories, links to prompt child pages, explains the PMP-first study loop, and includes CollectionPage, ItemList, and BreadcrumbList JSON-LD.

- `prompts/pmp-study-prompts.html`  
  P0 child page for PMP study planning and chapter learning prompts. Includes copyable prompt cards, examples, common mistakes, next-step links, and LearningResource, Article, and BreadcrumbList JSON-LD.

- `prompts/pmp-mistake-review-prompts.html`  
  P0 child page for missed-question review and weak-area repair prompts. Includes copyable prompt cards, example review inputs, common mistakes, next-step links, and LearningResource, Article, and BreadcrumbList JSON-LD.

- `_private/verify-prompt-seo.mjs`  
  Focused prompt-section validator. Checks JSON-LD, prompt cards, copyable prompt text, internal links to PMP hub, practice pages, guides, sitemap inclusion, and minimum visible content.

### Modify

- `index.html`  
  Update homepage copy and email CTA from generic study materials to "free PMP study pack and AI prompt pack"; add a link to `pmp-ai-prompts.html`.

- `programs/pmp.html`  
  Link from the PMP hub to the prompt hub and P0 prompt pages. Remove duplicate inline prompt-copy script after shared behavior is moved to `nav.js`.

- `blog.html`  
  Add the prompt hub and P0 prompt pages as visible cards or a dedicated "PMP AI prompts" section.

- `pmp-questions.html`  
  Add static explanation for using mistake-review prompts after domain or chapter misses.

- `pmp-mock-exam.html`  
  Add a static review step linking to mistake-review prompts and exam operations prompts once phase 2 exists.

- `styles.css`  
  Add prompt-page styles that reuse existing visual language: prompt category navigation, prompt cards, variable lists, expected-output blocks, and next-step panels.

- `nav.js`  
  Add shared `data-copy-prompt` handling for any page using `.learning-prompt-block` or `.prompt-card`.

- `_private/seo-page-map.mjs`  
  Add prompt pages with the required schema arrays and current `lastmod`.

- `_private/verify-structured-data.mjs`  
  No structural rewrite required; it should pass once `seo-page-map.mjs` includes the schema requirements and pages include valid JSON-LD.

- `_private/verify-site-seo-basics.mjs`  
  Keep existing checks. Only adjust if prompt pages require a prompt-specific exception, which should be avoided.

- `sitemap.xml`  
  Regenerate with `node _private/build-sitemap.mjs`.

### Later Phase Files

- `prompts/pmp-exam-operations-prompts.html`
- `prompts/pmp-research-prompts.html`
- `prompts/pmp-career-value-prompts.html`
- `prompts/project-manager-ai-prompts.html`
- `capm-questions.html`
- `programs/pmp-chapter-practice.html`
- `_private/verify-structured-data.mjs`
- `docs/seo/search-console-weekly-review.md`

---

## Task 1: Add Shared Prompt Copy Behavior

**Files:**
- Modify: `nav.js`
- Modify: `programs/pmp.html`

- [ ] **Step 1: Add shared copy handling to `nav.js`**

Add this inside the existing IIFE, before the analytics click handler:

```js
  document.querySelectorAll("[data-copy-prompt]").forEach((button) => {
    button.addEventListener("click", async () => {
      const block = button.closest(".learning-prompt-block, .prompt-card");
      const promptText = block?.querySelector(".learning-prompt-text, [data-prompt-text]")?.innerText.trim();
      if (!promptText) return;

      const previousLabel = button.textContent;
      const markCopied = () => {
        button.textContent = "Copied";
        window.setTimeout(() => {
          button.textContent = previousLabel || "Copy prompt";
        }, 1800);
      };

      try {
        await navigator.clipboard.writeText(promptText);
        markCopied();
      } catch {
        const textarea = document.createElement("textarea");
        textarea.value = promptText;
        textarea.setAttribute("readonly", "");
        textarea.style.position = "fixed";
        textarea.style.opacity = "0";
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        textarea.remove();
        markCopied();
      }
    });
  });
```

- [ ] **Step 2: Remove the old inline copy handler from `programs/pmp.html`**

Remove only the inline script block at the bottom that starts with:

```js
document.querySelectorAll("[data-copy-prompt]").forEach((button) => {
```

Keep:

```html
<script src="../nav.js"></script>
```

- [ ] **Step 3: Verify existing PMP prompt copy still has matching selectors**

Confirm `programs/pmp.html` still contains:

```html
<div class="learning-prompt-block">
<p class="learning-prompt-text">
<button class="copy-prompt-button" type="button" data-copy-prompt>Copy prompt</button>
```

- [ ] **Step 4: Run syntax and SEO checks**

Run:

```bash
node --check nav.js
node _private/verify-site-seo-basics.mjs
```

Expected:

```text
PASS ... HTML pages have SEO basics, content depth, sitemap files, and local links.
```

- [ ] **Step 5: Commit**

```bash
git add nav.js programs/pmp.html
git commit -m "refactor: share prompt copy behavior"
```

---

## Task 2: Build Phase 1 Prompt Hub

**Files:**
- Create: `pmp-ai-prompts.html`
- Modify: `index.html`
- Modify: `programs/pmp.html`
- Modify: `blog.html`
- Modify: `_private/seo-page-map.mjs`
- Modify: `sitemap.xml`

- [ ] **Step 1: Create `pmp-ai-prompts.html`**

Use existing page conventions:

```html
<body class="pmp-home prompt-page prompt-hub-page">
```

Set metadata:

```html
<title>PMP AI Prompts for Exam Prep, Mistake Review, and Project Manager Work | PassGrid</title>
<meta name="description" content="Copy PMP AI prompts for study planning, missed-question review, exam-day preparation, official-source research, PMP career decisions, and project manager work." />
<link rel="canonical" href="https://starrycesium.com/pmp-ai-prompts.html" />
```

Use this H1:

```html
<h1 id="prompt-hub-title">PMP AI prompts for exam prep, mistake review, and project manager work.</h1>
```

Include these visible category links:

```html
<a href="./prompts/pmp-study-prompts.html">PMP study prompts</a>
<a href="./prompts/pmp-mistake-review-prompts.html">PMP mistake review prompts</a>
<a href="./prompts/pmp-exam-operations-prompts.html">PMP exam operations prompts</a>
<a href="./prompts/pmp-research-prompts.html">PMP research prompts</a>
<a href="./prompts/pmp-career-value-prompts.html">PMP career value prompts</a>
<a href="./prompts/project-manager-ai-prompts.html">Project manager AI prompts</a>
```

For links to phase 2/3 pages, either create them in the same implementation batch or omit them until those files exist. Do not ship broken local links because `_private/verify-site-seo-basics.mjs` will fail.

Add JSON-LD containing exactly these schema types:

```json
"@type": "CollectionPage"
"@type": "ItemList"
"@type": "BreadcrumbList"
```

- [ ] **Step 2: Add hub entry to `index.html`**

Change the CTA text from:

```html
Get free PMP study materials.
```

to:

```html
Get the free PMP study pack and AI prompt pack.
```

Add one visible link to:

```html
./pmp-ai-prompts.html
```

Suggested link text:

```html
Explore PMP AI prompts
```

- [ ] **Step 3: Add hub entry to `programs/pmp.html`**

Add one card near the existing prompt/learning sections:

```html
<a class="guide-card" href="../pmp-ai-prompts.html">
  <h3>PMP AI prompts for study and review</h3>
  <p>Use prompts after reading a topic, before chapter practice, and after missed-question review.</p>
</a>
```

- [ ] **Step 4: Add hub entry to `blog.html`**

Add one guide card:

```html
<a class="guide-card" href="./pmp-ai-prompts.html"><h3>PMP AI prompts for exam prep</h3><p>Copy study planning, mistake review, official-source research, and project manager work prompts.</p></a>
```

- [ ] **Step 5: Add the hub to `_private/seo-page-map.mjs`**

Add:

```js
{ path: "pmp-ai-prompts.html", lastmod: "2026-07-05", index: true, schema: ["CollectionPage", "ItemList", "BreadcrumbList"] },
```

- [ ] **Step 6: Regenerate sitemap**

Run:

```bash
node _private/build-sitemap.mjs
```

Expected:

```text
Generated sitemap.xml with 36 indexable URLs.
```

The exact number may be higher if child pages are implemented in the same batch.

- [ ] **Step 7: Run validation**

Run:

```bash
node _private/verify-indexable-pages.mjs
node _private/verify-structured-data.mjs
node _private/verify-site-seo-basics.mjs
```

Expected all PASS.

- [ ] **Step 8: Commit**

```bash
git add pmp-ai-prompts.html index.html programs/pmp.html blog.html _private/seo-page-map.mjs sitemap.xml
git commit -m "feat: add PMP AI prompts hub"
```

---

## Task 3: Build P0 Study Prompt Page

**Files:**
- Create: `prompts/pmp-study-prompts.html`
- Modify: `pmp-ai-prompts.html`
- Modify: `_private/seo-page-map.mjs`
- Modify: `sitemap.xml`

- [ ] **Step 1: Create `prompts/` directory**

Run:

```bash
mkdir prompts
```

Expected: `prompts` exists. If it already exists, continue.

- [ ] **Step 2: Create `prompts/pmp-study-prompts.html`**

Set metadata:

```html
<title>PMP Study Prompts for Exam Prep and Study Planning | PassGrid</title>
<meta name="description" content="Copy PMP study prompts for 30-day plans, chapter review, weak-topic repair, PMBOK topic breakdowns, and final-week exam preparation." />
<link rel="canonical" href="https://starrycesium.com/prompts/pmp-study-prompts.html" />
```

Use this H1:

```html
<h1 id="study-prompts-title">PMP study prompts for exam prep and study planning.</h1>
```

Add at least seven prompt cards with these use cases:

```text
Build a 30-day PMP study plan.
Build a 45-day PMP study plan.
Plan today's PMP study session.
Break down a PMBOK topic into exam logic.
Compare agile, hybrid, and predictive signals.
Plan the final week before the PMP exam.
Repair a weak PMP topic.
```

Each card must include:

```html
<article class="prompt-card">
  <p class="prompt-use-case">Use case: Build a 30-day PMP study plan.</p>
  <div class="learning-prompt-text" data-prompt-text>...</div>
  <button class="copy-prompt-button" type="button" data-copy-prompt>Copy prompt</button>
  <h3>What to paste</h3>
  <ul>...</ul>
  <h3>Expected output</h3>
  <ul>...</ul>
  <h3>Next step</h3>
  <p>Open <a href="../programs/pmp-chapter-practice.html">PMP chapter practice</a> or <a href="../pmp-questions.html">PMP practice questions</a>.</p>
</article>
```

The 30-day prompt text should be:

```text
I am preparing for the PMP exam. Build a 30-day study plan based on my exam date, available study hours, weak topics, and previous mock score. Separate the plan into concept review, scenario practice, mock exam practice, and missed-question review. Show weekly goals, daily tasks, practice targets, and review checkpoints. Keep the plan realistic for a working professional.
```

Add internal links to:

```html
../programs/pmp.html
../pmp-questions.html
../programs/pmp-chapter-practice.html
../guides/pmp-study-plan.html
../pmp-mock-exam.html
```

Add JSON-LD containing:

```json
"@type": "LearningResource"
"@type": "Article"
"@type": "BreadcrumbList"
```

- [ ] **Step 3: Link it from the prompt hub**

Ensure `pmp-ai-prompts.html` includes:

```html
<a href="./prompts/pmp-study-prompts.html">PMP study prompts</a>
```

- [ ] **Step 4: Add page to `_private/seo-page-map.mjs`**

Add:

```js
{ path: "prompts/pmp-study-prompts.html", lastmod: "2026-07-05", index: true, schema: ["LearningResource", "Article", "BreadcrumbList"] },
```

- [ ] **Step 5: Regenerate sitemap and validate**

Run:

```bash
node _private/build-sitemap.mjs
node _private/verify-indexable-pages.mjs
node _private/verify-structured-data.mjs
node _private/verify-site-seo-basics.mjs
```

Expected all PASS.

- [ ] **Step 6: Commit**

```bash
git add prompts/pmp-study-prompts.html pmp-ai-prompts.html _private/seo-page-map.mjs sitemap.xml
git commit -m "feat: add PMP study prompt page"
```

---

## Task 4: Build P0 Mistake Review Prompt Page

**Files:**
- Create: `prompts/pmp-mistake-review-prompts.html`
- Modify: `pmp-ai-prompts.html`
- Modify: `pmp-questions.html`
- Modify: `pmp-mock-exam.html`
- Modify: `_private/seo-page-map.mjs`
- Modify: `sitemap.xml`

- [ ] **Step 1: Create `prompts/pmp-mistake-review-prompts.html`**

Set metadata:

```html
<title>PMP Mistake Review Prompts for Missed Questions | PassGrid</title>
<meta name="description" content="Copy PMP mistake review prompts to classify missed questions, find weak topics, repair decision patterns, and plan focused practice after mock exams." />
<link rel="canonical" href="https://starrycesium.com/prompts/pmp-mistake-review-prompts.html" />
```

Use this H1:

```html
<h1 id="mistake-review-prompts-title">PMP mistake review prompts for missed questions.</h1>
```

Add at least six prompt cards with these use cases:

```text
Classify missed PMP questions by cause.
Find repeated weak topics from a practice set.
Turn a wrong answer into a review checklist.
Review a mock exam by decision pattern.
Separate concept gaps from keyword traps.
Build a seven-day repair plan after a weak score.
```

The first prompt text should be:

```text
I am reviewing missed PMP practice questions. Classify each miss by the likely cause: concept gap, delivery approach confusion, stakeholder or communication issue, change control error, risk versus issue confusion, timing error, or careless reading. For each missed question, explain the decision signal I missed, the correct project manager action pattern, and the next practice topic I should review. Do not just restate the correct answer.
```

Add required internal links:

```html
../programs/pmp.html
../pmp-questions.html
../pmp-mock-exam.html
../guides/pmp-situational-questions.html
../guides/pmp-next-best-action.html
../guides/pmp-change-control.html
../guides/pmp-risk-issues.html
```

Add JSON-LD containing:

```json
"@type": "LearningResource"
"@type": "Article"
"@type": "BreadcrumbList"
```

- [ ] **Step 2: Link it from `pmp-questions.html`**

Add one visible card or paragraph in the PMP practice map section:

```html
<a class="guide-card" href="./prompts/pmp-mistake-review-prompts.html">
  <h3>Review missed PMP questions with prompts</h3>
  <p>After a domain practice set, use mistake-review prompts to classify misses by concept gaps, delivery approach confusion, and next-best-action patterns.</p>
</a>
```

- [ ] **Step 3: Link it from `pmp-mock-exam.html`**

Add one visible card in the mock exam method section:

```html
<article class="guide-card">
  <h3>Use a prompt after submission</h3>
  <p>After a mock exam, open the <a href="./prompts/pmp-mistake-review-prompts.html">PMP mistake review prompts</a> and summarize misses by decision pattern before starting another full mock.</p>
</article>
```

- [ ] **Step 4: Add page to `_private/seo-page-map.mjs`**

Add:

```js
{ path: "prompts/pmp-mistake-review-prompts.html", lastmod: "2026-07-05", index: true, schema: ["LearningResource", "Article", "BreadcrumbList"] },
```

- [ ] **Step 5: Regenerate sitemap and validate**

Run:

```bash
node _private/build-sitemap.mjs
node _private/verify-indexable-pages.mjs
node _private/verify-structured-data.mjs
node _private/verify-site-seo-basics.mjs
```

Expected all PASS.

- [ ] **Step 6: Commit**

```bash
git add prompts/pmp-mistake-review-prompts.html pmp-ai-prompts.html pmp-questions.html pmp-mock-exam.html _private/seo-page-map.mjs sitemap.xml
git commit -m "feat: add PMP mistake review prompt page"
```

---

## Task 5: Add Prompt Page Styling

**Files:**
- Modify: `styles.css`
- Verify: `pmp-ai-prompts.html`
- Verify: `prompts/pmp-study-prompts.html`
- Verify: `prompts/pmp-mistake-review-prompts.html`

- [ ] **Step 1: Add prompt page CSS**

Add styles near the existing learning prompt styles:

```css
body.prompt-page .prompt-category-nav,
body.prompt-page .prompt-card-grid,
body.prompt-page .prompt-next-steps {
  display: grid;
  gap: 16px;
}

body.prompt-page .prompt-category-nav {
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
}

body.prompt-page .prompt-card {
  border: 1px solid rgba(24, 28, 34, 0.12);
  border-radius: 8px;
  background: #ffffff;
  padding: 20px;
  box-shadow: 0 18px 45px rgba(24, 28, 34, 0.08);
}

body.prompt-page .prompt-use-case {
  margin: 0 0 12px;
  color: #4d5968;
  font-weight: 700;
}

body.prompt-page .prompt-card .learning-prompt-text {
  border-radius: 8px;
  background: #f5f7f9;
  color: #1f2933;
  padding: 16px;
  line-height: 1.65;
}

body.prompt-page .prompt-card h3 {
  margin: 18px 0 8px;
  font-size: 1rem;
}

body.prompt-page .prompt-card ul {
  margin: 0;
  padding-left: 20px;
}
```

- [ ] **Step 2: Check responsive behavior**

Run the local server:

```bash
node _private/server.mjs
```

Open:

```text
http://127.0.0.1:4173/pmp-ai-prompts.html
http://127.0.0.1:4173/prompts/pmp-study-prompts.html
http://127.0.0.1:4173/prompts/pmp-mistake-review-prompts.html
```

Expected:

```text
No broken layout, no text overlap, prompt cards fit on mobile width, copy buttons remain visible.
```

- [ ] **Step 3: Run validation**

Run:

```bash
node _private/verify-site-seo-basics.mjs
```

Expected PASS.

- [ ] **Step 4: Commit**

```bash
git add styles.css
git commit -m "style: add prompt page layouts"
```

---

## Task 6: Add Prompt-Specific SEO Validator

**Files:**
- Create: `_private/verify-prompt-seo.mjs`
- Modify: `package` scripts only if a package file exists later; none exists now.

- [ ] **Step 1: Create `_private/verify-prompt-seo.mjs`**

Use this validator:

```js
import { existsSync, readFileSync } from "node:fs";

const promptPages = [
  "pmp-ai-prompts.html",
  "prompts/pmp-study-prompts.html",
  "prompts/pmp-mistake-review-prompts.html",
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
```

- [ ] **Step 2: Run prompt validator**

Run:

```bash
node _private/verify-prompt-seo.mjs
```

Expected:

```text
PASS prompt SEO pages include required schema, links, prompt cards, and sitemap coverage.
```

- [ ] **Step 3: Run full validation set**

Run:

```bash
node _private/verify-prompt-seo.mjs
node _private/verify-indexable-pages.mjs
node _private/verify-structured-data.mjs
node _private/verify-site-seo-basics.mjs
node _private/verify-pmp-focus.mjs
```

Expected all PASS.

- [ ] **Step 4: Commit**

```bash
git add _private/verify-prompt-seo.mjs
git commit -m "test: verify PMP prompt SEO pages"
```

---

## Task 7: Phase 2 Prompt Pages

**Files:**
- Create: `prompts/pmp-exam-operations-prompts.html`
- Create: `prompts/pmp-research-prompts.html`
- Create: `prompts/pmp-career-value-prompts.html`
- Modify: `pmp-ai-prompts.html`
- Modify: `pmp-mock-exam.html`
- Modify: `_private/seo-page-map.mjs`
- Modify: `_private/verify-prompt-seo.mjs`
- Modify: `sitemap.xml`

- [ ] **Step 1: Build `pmp-exam-operations-prompts.html`**

Use cases:

```text
PMP application checklist prompt.
35-hour education record organization prompt.
Pearson VUE online vs test center decision prompt.
Online exam room and device check prompt.
Test center arrival checklist prompt.
Exam-day break strategy prompt.
Retake planning prompt.
```

Required links:

```html
../pmp-mock-exam.html
../guides/pmp-2026-exam-version.html
../prompts/pmp-research-prompts.html
```

- [ ] **Step 2: Build `pmp-research-prompts.html`**

Use cases:

```text
Official-source research prompt.
Exam version verification prompt.
Outdated-material detection prompt.
Training provider comparison prompt.
PMI and Pearson VUE policy check prompt.
Source summary prompt.
```

Include this caution visibly near the top and in the common mistakes section:

```text
PassGrid is independent and is not an official PMI or Pearson VUE source. Verify exam rules, eligibility, scheduling, and policy details with PMI and Pearson VUE before acting.
```

- [ ] **Step 3: Build `pmp-career-value-prompts.html`**

Use cases:

```text
Is PMP worth it for me?
PMP vs CAPM decision prompt.
Project manager career path prompt.
Resume and project experience reflection prompt.
Interview preparation prompt.
Promotion or role-change prompt.
```

Do not include salary guarantees, pass guarantees, or job guarantees.

- [ ] **Step 4: Wire links and schema**

Add all three pages to:

```js
_private/seo-page-map.mjs
_private/verify-prompt-seo.mjs
pmp-ai-prompts.html
pmp-mock-exam.html
```

- [ ] **Step 5: Validate and commit**

Run:

```bash
node _private/build-sitemap.mjs
node _private/verify-prompt-seo.mjs
node _private/verify-indexable-pages.mjs
node _private/verify-structured-data.mjs
node _private/verify-site-seo-basics.mjs
```

Expected all PASS.

Commit:

```bash
git add prompts/pmp-exam-operations-prompts.html prompts/pmp-research-prompts.html prompts/pmp-career-value-prompts.html pmp-ai-prompts.html pmp-mock-exam.html _private/seo-page-map.mjs _private/verify-prompt-seo.mjs sitemap.xml
git commit -m "feat: add PMP operations research and career prompt pages"
```

---

## Task 8: Phase 3 Workplace Project Manager Prompt Page

**Files:**
- Create: `prompts/project-manager-ai-prompts.html`
- Modify: `pmp-ai-prompts.html`
- Modify: `_private/seo-page-map.mjs`
- Modify: `_private/verify-prompt-seo.mjs`
- Modify: `sitemap.xml`

- [ ] **Step 1: Build `project-manager-ai-prompts.html`**

Use cases:

```text
Project charter prompt.
Stakeholder analysis prompt.
Risk register prompt.
Change impact analysis prompt.
Meeting notes prompt.
Executive status update prompt.
Sprint review prompt.
Retrospective prompt.
Lessons learned prompt.
```

Required links:

```html
../guides/pmp-stakeholder-communication.html
../guides/pmp-risk-issues.html
../guides/pmp-change-control.html
../guides/pmp-agile-roles.html
../programs/pmp.html
```

- [ ] **Step 2: Validate and commit**

Run:

```bash
node _private/build-sitemap.mjs
node _private/verify-prompt-seo.mjs
node _private/verify-indexable-pages.mjs
node _private/verify-structured-data.mjs
node _private/verify-site-seo-basics.mjs
```

Expected all PASS.

Commit:

```bash
git add prompts/project-manager-ai-prompts.html pmp-ai-prompts.html _private/seo-page-map.mjs _private/verify-prompt-seo.mjs sitemap.xml
git commit -m "feat: add project manager AI prompt page"
```

---

## Task 9: Phase 4 Question Bank SEO Enhancement

**Files:**
- Modify: `pmp-questions.html`
- Modify: `capm-questions.html`
- Modify: `pmp-mock-exam.html`
- Modify: `programs/pmp-chapter-practice.html`
- Modify: `_private/seo-page-map.mjs` only if schema expectations change.

- [ ] **Step 1: Add static explanatory content to `pmp-questions.html`**

Add sections covering:

```text
How PMP chapter practice differs from mock exam practice.
How to review missed questions.
When to use study prompts versus mistake-review prompts.
```

Required links:

```html
./prompts/pmp-study-prompts.html
./prompts/pmp-mistake-review-prompts.html
./programs/pmp-chapter-practice.html
./pmp-mock-exam.html
```

- [ ] **Step 2: Add static explanatory content to `pmp-mock-exam.html`**

Add sections covering:

```text
When to take a mock exam.
How to pace the exam.
How to review results.
How to use mistake-review prompts before retaking a mock.
```

- [ ] **Step 3: Add PMP prompt links to `programs/pmp-chapter-practice.html`**

Add links to:

```html
../prompts/pmp-study-prompts.html
../prompts/pmp-mistake-review-prompts.html
```

- [ ] **Step 4: Add CAPM bridge language to `capm-questions.html`**

Keep CAPM as a foundation path. Link to PMP prompt pages only as a next-step bridge, not as primary CAPM keyword targeting:

```html
<a href="./prompts/pmp-study-prompts.html">PMP study prompts</a>
```

- [ ] **Step 5: Validate and commit**

Run:

```bash
node _private/verify-prompt-seo.mjs
node _private/verify-indexable-pages.mjs
node _private/verify-structured-data.mjs
node _private/verify-site-seo-basics.mjs
node _private/verify-pmp-focus.mjs
```

Expected all PASS.

Commit:

```bash
git add pmp-questions.html capm-questions.html pmp-mock-exam.html programs/pmp-chapter-practice.html
git commit -m "feat: strengthen practice page prompt SEO links"
```

---

## Task 10: Phase 5 Reporting Process

**Files:**
- Create: `docs/seo/search-console-weekly-review.md`
- Modify: `_private/verify-prompt-seo.mjs`

- [ ] **Step 1: Create the weekly review document**

Create `docs/seo/search-console-weekly-review.md` with this structure:

```markdown
# Search Console Weekly Review

## Review Date

## Prompt Pages Reviewed

- `pmp-ai-prompts.html`
- `prompts/pmp-study-prompts.html`
- `prompts/pmp-mistake-review-prompts.html`
- `prompts/pmp-exam-operations-prompts.html`
- `prompts/pmp-research-prompts.html`
- `prompts/pmp-career-value-prompts.html`
- `prompts/project-manager-ai-prompts.html`

## Decisions

| Signal | Action |
|---|---|
| High impressions, low CTR | Rewrite title and meta description |
| Average position 8-20 | Add content depth and internal links |
| Indexed but no impressions | Check whether the page targets a real query |
| Crawled but not indexed | Check thin content, duplication, and internal links |
| Prompt pages with traffic but low conversion | Improve CTA and prompt pack offer |

## Changes Made This Week

## Next Review Items
```

- [ ] **Step 2: Update validator page list**

When all prompt pages exist, update `_private/verify-prompt-seo.mjs` so `promptPages` includes:

```js
"prompts/pmp-exam-operations-prompts.html",
"prompts/pmp-research-prompts.html",
"prompts/pmp-career-value-prompts.html",
"prompts/project-manager-ai-prompts.html",
```

- [ ] **Step 3: Validate and commit**

Run:

```bash
node _private/verify-prompt-seo.mjs
```

Expected PASS.

Commit:

```bash
git add docs/seo/search-console-weekly-review.md _private/verify-prompt-seo.mjs
git commit -m "docs: add prompt SEO review process"
```

---

## Phase Gates

Do not start Phase 2 until Phase 1 satisfies:

- `pmp-ai-prompts.html` exists, is indexable, and is in `sitemap.xml`.
- `prompts/pmp-study-prompts.html` exists, is indexable, and is in `sitemap.xml`.
- `prompts/pmp-mistake-review-prompts.html` exists, is indexable, and is in `sitemap.xml`.
- Prompt pages pass structured-data checks.
- Prompt pages link to PMP hub, PMP practice pages, mock exam or chapter practice, and relevant guides.
- Prompt pages have visible explanatory content, not only prompt templates.
- Homepage and PMP hub describe AI prompts as part of the study loop, not as the whole product.

Do not start Phase 3 until Phase 2 pages include the PMI/Pearson VUE verification caution and career-value caution.

Do not start Phase 4 until all prompt pages pass `_private/verify-prompt-seo.mjs`.

## Risks and Controls

- **Risk: Generic AI prompt drift.**  
  Control: Every prompt page must link back to PMP study, PMP practice, or project manager work. Do not create unrelated prompt categories.

- **Risk: Broken future links from the hub.**  
  Control: Only link to child pages that exist in the current implementation batch.

- **Risk: Schema abuse.**  
  Control: Use CollectionPage and ItemList for the hub; LearningResource, Article, and BreadcrumbList for child pages. Do not use FAQPage unless real FAQ content is present.

- **Risk: Thin prompt pages.**  
  Control: Require use case, prompt text, what to paste, expected output, example input, example output summary, common mistakes, next study step, and internal links.

- **Risk: Official-information overclaiming.**  
  Control: Research and operations pages must state that PassGrid is independent and users must verify rules with PMI and Pearson VUE.

- **Risk: Conversion copy becomes misleading.**  
  Control: The study pack copy can promise included resources, but must not promise PMP passing, salary increases, or job outcomes.

## Final Verification Command Set

Run after each phase:

```bash
node _private/build-sitemap.mjs
node _private/verify-prompt-seo.mjs
node _private/verify-indexable-pages.mjs
node _private/verify-structured-data.mjs
node _private/verify-site-seo-basics.mjs
node _private/verify-pmp-focus.mjs
```

Expected:

```text
All checks PASS.
```

For visual verification, start the local server:

```bash
node _private/server.mjs
```

Then inspect:

```text
http://127.0.0.1:4173/pmp-ai-prompts.html
http://127.0.0.1:4173/prompts/pmp-study-prompts.html
http://127.0.0.1:4173/prompts/pmp-mistake-review-prompts.html
```

Confirm desktop and mobile widths have no overlapping text, broken navigation, or missing copy buttons.

## Self-Review

- **Spec coverage:** The plan maps the document's five SEO parts into phases: prompt MVP, operations/research/career pages, workplace project manager prompts, question bank SEO, and automation/reporting.
- **Do-not-do coverage:** The plan excludes Chinese pages, generic prompt libraries, unrelated prompt categories, copied prompt collections, pass guarantees, salary guarantees, and isolated prompt pages.
- **Type consistency:** Schema types match `_private/seo-page-map.mjs` expectations and `_private/verify-structured-data.mjs` behavior.
- **Validation consistency:** Every new indexable HTML page is added to `_private/seo-page-map.mjs`, regenerated into `sitemap.xml`, and covered by existing or new validators.
