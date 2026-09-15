# Training and AI Sharing GEO Update Implementation Plan

> **For agentic workers:** Use executing-plans for this approved, scoped content update. Track each step below.

**Goal:** Strengthen two existing guides and make GEO an explicit part of every assessment of user-supplied daily monitoring.

**Architecture:** Keep the current static HTML routes, titles, Article/BreadcrumbList, and visual styles. Add locally understandable answers with nearby primary-source links and original decision examples; preserve existing search intent. Store daily decision and weekly citation-observation procedures in internal Markdown, not a new public landing page.

**Tech Stack:** Static HTML, existing CSS, Node.js verification scripts, generated XML sitemap, Markdown editorial records.

**Spec:** The September 15 approved assessment in this task: clarify application education versus renewal PDUs, distinguish original/licensed practice from confidential exam content, and record GEO citation value, update decisions, and measurable evidence alongside SEO. No new article or scheduled autonomous monitoring was requested.

## Global Constraints

- Preserve original publication dates and existing URLs; only two public modification dates become September 15.
- No invented reviewer, PMI approval, passing threshold, copyright clearance, AI citation result, or traffic measurement.
- Do not imply active CAPM waives experience requirements or that application training can later be reused as PMP renewal PDUs.
- Do not reproduce protected questions or imply word substitution supplies permission. Do not label an unverified screenshot as exam leakage.
- No additional schema types, dependencies, CSS, analytics tracking, or public pages. No commit, push, or deployment.
- Respect the prior local-file browser preview policy block. Do not use another browser, protocol, or server to bypass it.

## Task 1: Scoped Regression Checks

**Files:** `_private/verify-training-prepcast-updates.mjs`, `_private/verify-2026-exam-ai-guides.mjs`, `_private/verify-retake-security-guides.mjs`, `_private/verify-geo-source-pages.mjs`.

- [x] Require a contact-hours comparison section, CAPM eligibility boundary, renewal timing, original purchase example, and adjacent CCR link. Require the AI sharing table, distinct license/security sources, no-permission-from-rewording boundary, and an answer-dispute workflow. Check current dates without changing unrelated date expectations.
- [x] Require the daily SEO/GEO protocol, fixed unbranded questions, empty observation template, and weekly-review link. Run the four scripts against the existing content and observe the expected failures.

## Task 2: Public Guides

**Files:** `guides/pmp-35-hour-training-rules-2026.html`, `guides/ai-pmp-capm-study-without-cheating.html`.

- [x] In the training guide, add `contact-hours-vs-pdus` with a three-route comparison, direct answer, CCR source, and a clearly fictional purchase-check example. Link the existing renewal guide. Keep December 1 live/self-paced rules and existing audit/provider guidance.
- [x] In the AI guide, add `sharing-practice-questions` with original, licensed practice, and confidential exam rows. Add a concept-only original example and `ai-answer-disagreement` that resolves evidence rather than choosing a model by confidence. Keep privacy, proctored-exam, and non-predictive-score warnings.
- [x] Update relevant descriptions, visible authorship/review notes, Article citations, and narrow update logs. Condense repetition if needed to keep each guide within the existing 1000-1600-word limit.

## Task 3: Editorial Process and Metadata

**Files:** `docs/geo/daily-seo-geo-review.md` (new), `docs/seo/search-console-weekly-review.md`, `docs/geo/source-register.md`, `_private/seo-page-map.mjs`, `sitemap.xml`.

- [x] Document Chinese daily-report sections: evidence delta, SEO decision, GEO citation value, exact existing target, action/hold rationale, and verification. Specify user-supplied monitoring as the trigger, not an automation.
- [x] Include fixed English, unbranded discovery prompts and a blank observation table capturing UTC date, platform/mode, region/session, exact cited URL, quote accuracy, saved evidence, and follow-up. Separate URL-fed checks from discovery and failed retrieval from a valid non-citation. Do not record fabricated baseline results.
- [x] Add the targeted source review, link the protocol from the existing weekly checklist, change only the two map dates, then run `node _private/build-sitemap.mjs`.

## Task 4: Verification

- [x] Run all scoped checks and `node _private/verify-long-guide-content.mjs`.
- [x] Run all `verify-*.mjs` except the previously failing, unrelated `verify-pmp-question-quality.mjs`; do not claim the question bank is newly quality-approved.
- [x] Review diffs, validate new HTML table/section structure, verify only two sitemap dates changed, and run `git diff --check`. Record results and preview limitations below.

## Verification Record

- All four updated verification scripts failed against the old content, then passed after implementation.
- All 23 executed verification scripts passed; the pre-existing unrelated question-quality script was not run. The long-guide check covers 32 guides; global SEO covers 57 HTML files.
- Sitemap still contains 56 indexable URLs. Only the two targeted modification dates changed in the map and XML.
- No GEO observations or traffic results have been collected for this update. The baseline remains unmeasured.
- The training guide has 1476 visible words; the AI guide has 1417, measured with the long-guide validator's counting rules.
- Read-only review found no consequential factual error or behavioral regression in the scoped guides and protocol. Python's standard HTMLParser confirmed balanced tags, unique IDs, and resolved aria-labelledby references in both edited HTML files. Existing table wrappers retain horizontal overflow behavior; no CSS changes were made.
- `git diff --check` passed. No screenshot preview, commit, push, or deployment has been performed. Prior local-file preview restrictions were not bypassed.
