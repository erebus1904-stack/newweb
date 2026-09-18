# PMP Study Sprint and Security Update Plan

**Goal:** Execute the September 14 approved assessment by improving two existing English guides, not publishing duplicate pages.

**Scope:** `guides/pmp-study-plan.html`, `guides/pmp-exam-dumps-security.html`, their validators, `_private/seo-page-map.mjs`, generated `sitemap.xml`, and `docs/geo/source-register.md`.

**Evidence:** The previous assessment verified the September 11 PMI-hosted article by Guilherme Ozores Pires. It reports three participants eventually sat and passed; it does not establish three passes within 30 days. The current PMP ECO supports 33/41/26 weights, 180 questions, and 240 minutes. PMI Exam Security explicitly covers in-person and remote proxy testing. No new suspicious account was independently verified.

## Implementation

- [x] Add a failing study-plan validator; extend the existing security validator before modifying public content.
- [x] Upgrade the study plan at its current canonical URL. Add an answer-first block, an attributed author-experience summary, a 30/60/90-day decision table, four weeks of tasks/evidence/adjustment gates, Business Environment coverage, practice links, interruption recovery, and non-predictive readiness guidance. Preserve June 15 publication date; use September 14 review date. Title: `30-Day PMP Study Plan for 2026: Is One Month Enough?`.
- [x] Add a concentrated proxy-testing and account-protection section to the security guide. Preserve its title, canonical URL and August 28 publication date; do not name sellers, reproduce secured questions, or provide operational cheating instructions.
- [x] Update only the two guide dates in the SEO map, regenerate the sitemap, and record the source limits. Reuse existing Article/BreadcrumbList and CSS; no HowTo/FAQPage/ClaimReview additions.
- [x] Run focused tests, the 1000-1600-word guide check, global SEO/schema/indexability/link checks, and scoped diff checks. Request a read-only review while finishing metadata checks.

## Boundaries

- Keep changes local on the current feature branch; no commit, push, merge, or deployment.
- Use only publicly permitted sources. A prior explicit local-file preview policy block must not be bypassed with another browser or server. Report that no screenshot QA was performed.
- The existing full-bank question-quality failure is outside this content task. Do not modify or requalify bank data.
- A longer schedule is an editorial planning option, not a PMI duration requirement or a guarantee of passing.

## Verification Record

- Both focused scripts failed before implementation and passed afterward.
- All 23 executed verification scripts passed. The previously failing full-bank `verify-pmp-question-quality.mjs` was excluded; bank data is unchanged and not requalified by this update.
- The security page initially exceeded 1600 words; repeated existing warnings were condensed without removing protection/reporting steps. The long-guide check now passes for all 32 guides.
- Global checks cover 57 HTML pages. Sitemap remains 56 indexable URLs, with only the two scoped guide modification dates changed.
- Final article lengths are 1258 words for the study plan and 1578 for the security guide.
- Read-only review found no actionable article-content or static HTML issues. It found that the study-plan validator accepted swapped domain weights. Three swap counterexamples failed against the old predicate, then passed after binding each percentage to its domain. All 23 scoped verification scripts passed again after this fix.
- No screenshot verification, commit, push, or deployment was performed.
