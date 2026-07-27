# Search Intent Pages Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Refresh one CAPM scheduling page and one PMP change-control page around observed Search Console intent without creating new URLs.

**Architecture:** Add one focused Node verifier that treats the two HTML files and their discovery links as a stable SEO contract. Update the existing static pages in place, preserve canonicals, update page-map dates, and regenerate the existing sitemap.

**Tech Stack:** Static HTML, JSON-LD, Node.js ESM verification scripts.

## Global Constraints

- Keep both existing URLs and canonicals unchanged.
- Keep each long guide between 1000 and 1600 visible words.
- Use only current PMI and Pearson VUE primary sources for scheduling facts.
- Do not add FAQPage or QAPage schema.
- Do not modify `docs/seo/passgrid-15-day-promotion-plan.md`.

---

### Task 1: Add The Search-Intent Contract

**Files:**
- Create: `_private/verify-search-intent-pages.mjs`

**Interfaces:**
- Consumes: static HTML files and `seo-page-map.mjs`
- Produces: a zero-exit verifier when both page contracts are satisfied

- [ ] **Step 1: Write the failing verifier**

The verifier must require:

```js
const capmRequirements = [
  "How to Schedule the CAPM Exam",
  "Schedule your CAPM exam in five steps",
  "Check Pearson VUE seat availability before booking",
  "https://www.pmi.org/certifications/certified-associate-capm/",
  "https://www.pearsonvue.com/us/en/pmi.html"
];

const pmpRequirements = [
  "Change-control decision table",
  "Five PMP change-control scenarios",
  "Requested baseline change",
  "Agile backlog request",
  "Emergency change"
];
```

It must also require `pmp-questions.html` to link to `./guides/pmp-change-control.html`, both Article nodes to use `dateModified: 2026-07-27`, both page-map entries to use `lastmod: 2026-07-27`, and both canonicals to remain unchanged.

- [ ] **Step 2: Run the verifier and confirm red**

Run:

```powershell
node _private\verify-search-intent-pages.mjs
```

Expected: failures for missing CAPM scheduling content, PMP decision content, the PMP question-page link, and stale dates.

- [ ] **Step 3: Commit the failing contract**

```powershell
git add _private/verify-search-intent-pages.mjs
git commit -m "test: define search intent page contract"
```

### Task 2: Refresh The CAPM Scheduling Page

**Files:**
- Modify: `guides/capm-online-vs-test-center.html`
- Modify: `_private/seo-page-map.mjs`

**Interfaces:**
- Consumes: current PMI CAPM and Pearson VUE PMI scheduling pages
- Produces: an indexable scheduling guide that retains the existing canonical

- [ ] **Step 1: Update metadata and Article dates**

Use:

```html
<title>How to Schedule the CAPM Exam: Pearson VUE Locations and Online Testing | PassGrid</title>
<h1>How to Schedule the CAPM Exam: Pearson VUE Locations and Online Testing</h1>
```

Set Article `headline` and social titles to the same intent, set `dateModified` to `2026-07-27`, and update the page-map `lastmod`.

- [ ] **Step 2: Replace repeated delivery prose with scheduling content**

Add these static sections:

```html
<h2>Schedule your CAPM exam in five steps</h2>
<h2>Check Pearson VUE seat availability before booking</h2>
<h2>Choose online testing or a test center</h2>
<h2>Confirm the current policy before you change an appointment</h2>
```

The steps must cover application acceptance, payment, PMI account entry, Pearson VUE delivery choice, and confirmation. Preserve the useful environment, ID, device, and interruption guidance while removing repeated comparison paragraphs.

- [ ] **Step 3: Add primary-source links**

Add visible links to:

```text
https://www.pmi.org/certifications/certified-associate-capm/
https://www.pearsonvue.com/us/en/pmi.html
```

Describe 150 questions, 180 minutes, test-center or secure online delivery, and scheduling after payment. Refer candidates to the official pages for time-sensitive cancellation, rescheduling, ID, and availability policies.

- [ ] **Step 4: Run focused and long-guide checks**

Run:

```powershell
node _private\verify-search-intent-pages.mjs
node _private\verify-long-guide-content.mjs
node _private\verify-structured-data.mjs
```

Expected: the focused verifier still reports only PMP failures; long-guide and structured-data checks pass.

### Task 3: Deepen PMP Change-Control Coverage And Discovery

**Files:**
- Modify: `guides/pmp-change-control.html`
- Modify: `pmp-questions.html`
- Modify: `_private/seo-page-map.mjs`
- Modify: `sitemap.xml`

**Interfaces:**
- Consumes: the focused verifier from Task 1
- Produces: richer PMP decision content, a contextual question-page link, and current discovery dates

- [ ] **Step 1: Add the decision table**

Add a static table under:

```html
<h2>Change-control decision table</h2>
```

Rows must cover requested baseline change, active issue, defect repair, scope creep, agile backlog request, and emergency change. Each row must identify the clue, next action, and decision owner.

- [ ] **Step 2: Add five scenario examples**

Add:

```html
<h2>Five PMP change-control scenarios</h2>
```

Cover a customer baseline request, regulatory emergency, mid-sprint request, discovered defect, and unauthorized completed work. Each example must name the next responsible action without presenting a multiple-choice answer set.

- [ ] **Step 3: Add the contextual question-page link and dates**

Add this link to the PMP practice-bank explanation:

```html
<a href="./guides/pmp-change-control.html">review the PMP change-control decision sequence</a>
```

Set the Article `dateModified` and page-map `lastmod` to `2026-07-27`.

- [ ] **Step 4: Regenerate sitemap and verify green**

Run:

```powershell
node _private\build-sitemap.mjs
node _private\verify-search-intent-pages.mjs
node _private\verify-indexable-pages.mjs
node _private\verify-long-guide-content.mjs
node _private\verify-site-seo-basics.mjs
node _private\verify-structured-data.mjs
node _private\verify-question-bank-seo.mjs
git diff --check
```

Expected: every command exits zero and sitemap URL count remains 46.

- [ ] **Step 5: Commit the implementation**

```powershell
git add guides/capm-online-vs-test-center.html guides/pmp-change-control.html pmp-questions.html _private/seo-page-map.mjs _private/verify-search-intent-pages.mjs sitemap.xml
git commit -m "seo: align CAPM scheduling and PMP change pages"
```
