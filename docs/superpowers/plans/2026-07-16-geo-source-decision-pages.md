# GEO Source and Decision Pages Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a verifiable source-and-freshness layer and three answer-first decision guides that make PassGrid easier for learners and generative engines to evaluate and cite.

**Architecture:** Keep the site static and dependency-free. Record official claims in an internal source register, render source/verification notes directly in each time-sensitive HTML page, and enforce the required content, structured data, links, and sitemap entries with a Node verification script.

**Tech Stack:** Static HTML, CSS, JSON-LD, Node.js verification scripts.

## Global Constraints

- Public copy remains English and focused on PMP/CAPM preparation.
- Official requirements are attributed to PMI or Pearson VUE with a visible verification date.
- PassGrid does not decide eligibility, promise exam outcomes, or claim affiliation with PMI.
- The two new guides follow the existing `legal-page` / `guide-article article-page` structure.
- The existing user edit in `docs/seo/passgrid-15-day-promotion-plan.md` is preserved.
- No new runtime dependency or client-side JavaScript is introduced.

---

### Task 1: GEO content contract

**Files:**
- Create: `_private/verify-geo-source-pages.mjs`

**Interfaces:**
- Consumes: three guide HTML files, `docs/geo/source-register.md`, `_private/seo-page-map.mjs`, and `sitemap.xml`.
- Produces: exit code `0` with a PASS summary, or exit code `1` with one failure per missing GEO requirement.

- [x] **Step 1: Write the failing verifier**

  Require the source register, `guides/pmp-vs-capm.html`, `guides/pmp-2026-exam-version.html`, and `guides/pmp-online-vs-test-center.html`. For every guide require an answer-first block, visible last-reviewed date, sources section, official external source, Article and BreadcrumbList JSON-LD, related guide section, SEO map entry, and sitemap URL. Add page-specific checks for the PMP/CAPM comparison, 2026 exam material routing, and online/test-center comparison.

- [x] **Step 2: Run the verifier and confirm RED**

  Run: `node _private/verify-geo-source-pages.mjs`

  Expected: FAIL because the source register and two new guide files do not exist and the existing exam-version guide lacks the required GEO blocks.

- [x] **Step 3: Keep the verifier as the acceptance contract**

  Do not relax assertions to fit implementation. Page copy and metadata must satisfy the stated contract.

### Task 2: Source register and shared presentation

**Files:**
- Create: `docs/geo/source-register.md`
- Modify: `styles.css`
- Modify: `editorial-policy.html`

**Interfaces:**
- Consumes: official PMI certification, exam-update, ECO, and Pearson VUE/OnVUE URLs.
- Produces: a maintained claim-level source register and reusable `.answer-first`, `.verification-note`, `.source-notes`, `.decision-grid`, and `.decision-table` styles.

- [x] **Step 1: Add the source register**

  Record source ID, publisher, supported claim, public URL, verified date `2026-07-16`, affected pages, and review trigger. Mark Pearson VUE operational details as requiring pre-publication verification where no stable official page is available.

- [x] **Step 2: Add shared CSS**

  Style the answer-first summary, verification metadata, source list, comparison table, decision cards, and mobile table overflow within the existing legal-page design system.

- [x] **Step 3: Strengthen editorial policy**

  Add a visible source-and-freshness section explaining claim-level citations, verification dates, official-source precedence, and corrections.

### Task 3: Three decision guides

**Files:**
- Create: `guides/pmp-vs-capm.html`
- Rewrite: `guides/pmp-2026-exam-version.html`
- Create: `guides/pmp-online-vs-test-center.html`

**Interfaces:**
- Consumes: source register entries and existing PMP/CAPM hubs, question banks, mock exam, and related guides.
- Produces: three indexable, answer-first decision resources with visible sources and valid JSON-LD.

- [x] **Step 1: Create PMP vs CAPM**

  Answer the decision directly, compare experience/readiness/foundation/goal signals, provide a conservative route when uncertain, link official PMI certification pages, and route readers to both PassGrid hubs.

- [x] **Step 2: Rewrite the 2026 PMP exam version page**

  Replace pre-launch wording with post-launch guidance for exams on or after July 9, 2026; distinguish what older resources still teach from what must be checked against the July 2026 ECO; state PassGrid coverage limits; set `dateModified` and visible review date to `2026-07-16`.

- [x] **Step 3: Create PMP online vs test center**

  Compare environment control, equipment/network, interruption risk, travel, and support preferences. Keep official rules out of the recommendation logic unless directly sourced; instruct users to run current official checks before scheduling.

- [x] **Step 4: Run GEO verifier and confirm page-level GREEN**

  Run: `node _private/verify-geo-source-pages.mjs`

  Expected: remaining failures are limited to discovery/sitemap integration.

### Task 4: Discovery, structured data, and full verification

**Files:**
- Modify: `blog.html`
- Modify: `programs/pmp.html`
- Modify: `programs/capm.html`
- Modify: `_private/seo-page-map.mjs`
- Modify: `sitemap.xml` through `_private/build-sitemap.mjs`

**Interfaces:**
- Consumes: the three decision-guide URLs.
- Produces: hub/blog internal links, indexable SEO map entries, current lastmod values, and sitemap URLs.

- [x] **Step 1: Add discovery links**

  Add all three decision resources to the blog and the relevant program hubs, preserving existing navigation and unrelated content.

- [x] **Step 2: Register SEO metadata and rebuild sitemap**

  Add both new guides and update the existing guide lastmod to `2026-07-16`, then run `node _private/build-sitemap.mjs`.

- [x] **Step 3: Run focused verification**

  Run: `node _private/verify-geo-source-pages.mjs`

  Expected: PASS for all three decision pages and the source register.

- [x] **Step 4: Run the full project verification suite**

  Run:

  ```powershell
  node _private/verify-site-seo-basics.mjs
  node _private/verify-indexable-pages.mjs
  node _private/verify-structured-data.mjs
  node _private/verify-long-guide-content.mjs
  node _private/verify-pmp-focus.mjs
  node _private/verify-pmp-capm-phase.mjs
  git diff --check
  ```

  Expected: every command exits `0` and reports PASS where applicable.

- [x] **Step 5: Inspect the final diff**

  Confirm no changes were made to `docs/seo/passgrid-15-day-promotion-plan.md` by this implementation, all public copy is English, and no unsupported eligibility or outcome claim was introduced.

## Verification note

All GEO, SEO-basics, indexability, structured-data, long-guide, PMP-focus, AdSense-readiness, browser-layout, and diff checks passed. `_private/verify-pmp-capm-phase.mjs` continues to report pre-existing quality failures for PMP question records beginning around question 840; neither `data.js` nor that verifier was changed by this implementation.
