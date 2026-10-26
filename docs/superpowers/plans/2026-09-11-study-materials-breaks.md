# Study Materials and Exam Breaks Update Plan

> **For agentic workers:** Use superpowers:executing-plans to implement this approved content update in the current task. Track each deliverable below.

**Goal:** Clarify CAPM reference editions and competing PMP break counts without creating duplicate pages.

**Architecture:** Edit the two existing static guides; keep their canonical URLs, titles, publication dates, navigation, and Article/BreadcrumbList types. Update only their modification dates and generated sitemap entries.

**Tech Stack:** Static HTML, existing CSS, Node.js validation scripts.

**Spec:** The September 11 user-approved assessment in this task: CAPM materials first, PMP break comparison second, no new facts hub or ClaimReview/FAQPage expansion.

## Constraints

- English public articles; Chinese task communication.
- Distinguish official scope, optional references, documented education, and editorial advice.
- PMBOK Seventh Edition appears in current CAPM references; that does not require buying it or every listed book. No verified requirement for Eighth Edition.
- PMP 40-70-70 remains a community observation. Do not accuse an unlinked seller or reproduce recalled questions.
- Keep articles within the repository's 1000-1600 visible-word check.
- Do not commit, push, or deploy as part of this update.

## Task 1: CAPM Materials

Files: `guides/capm-study-materials-plan.html`, `_private/verify-capm-study-materials.mjs`.

- [x] Add and run a failing content check for the answer-first block, edition limits, ECO/reference/education distinction, four domain weights, AI checklist, official citations, and aligned metadata.
- [x] Add the PMBOK 8 section, comparison table, AI checklist, source notes, and review log. Condense repeated resource-shopping advice and replace the blanket PMBOK tie-breaker claim. Retain hub, practice, and related-guide links.
- [x] Run `node _private/verify-capm-study-materials.mjs` after metadata synchronization.

## Task 2: PMP Break Comparison

Files: `guides/pmp-exam-breaks-40-70-70.html`, `_private/verify-pmp-breaks-study-hall-update.mjs`.

- [x] Add and run failing checks for the 40-70-70 versus 60-60-60 section and its evidence boundary.
- [x] Add the focused comparison and review-log entry. Preserve the existing source sample and official-versus-reported distinction, without claiming new independent verification of appointments.
- [x] Run `node _private/verify-pmp-breaks-study-hall-update.mjs` after metadata synchronization.

## Task 3: Metadata and Verification

Files: `_private/seo-page-map.mjs`, `sitemap.xml`, `docs/geo/source-register.md`.

- [x] Set the two guide entries to September 11, record source scope, then run `node _private/build-sitemap.mjs`.
- [x] Run the two focused checks, `verify-long-guide-content.mjs`, `verify-site-seo-basics.mjs`, `verify-structured-data.mjs`, `verify-indexable-pages.mjs`, and `verify-geo-source-pages.mjs` from `_private` using Node.
- [x] Review `git diff --check` and the complete scoped diff. Report local changes and any verification limits without claiming deployment.

Browser preview was previously denied by an explicit local-file URL policy. Do not bypass that restriction using another browser, protocol, or server; use static checks and disclose the visual-verification limit.

## Verification Record

- Red phase: CAPM checklist failed on the missing edition/AI/source sections; PMP checklist failed on the missing comparison and new dates.
- Green phase: all 22 executed `verify-*.mjs` scripts passed. The previously failing full-bank `verify-pmp-question-quality.mjs` was excluded; question-bank data was not changed or requalified by this task.
- Article lengths: CAPM 1300 visible words; PMP breaks 1370 visible words.
- Sitemap remains 56 indexable URLs; only the two reviewed guide dates changed. Global SEO checks cover 57 HTML pages.
- Existing responsive table and source-note CSS is reused. No browser screenshot verification or deployment was performed.
- Independent read-only review found no substantive issues and reran five focused/static checks successfully. Working changes remain uncommitted on the existing feature branch.
