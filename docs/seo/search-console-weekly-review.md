# Search Console Weekly Review

Use this checklist once per week after the PMP prompt and practice pages have been indexed. The goal is to turn Search Console data into specific page updates, not to collect metrics without action.

## GEO Companion Review

Use the [daily SEO and GEO protocol](../geo/daily-seo-geo-review.md) for every assessment of user-provided monitoring. Include GEO citation value and a reasoned update/hold decision even when there is no new policy. This is not an unattended scheduled task.

During a weekly review, keep fixed-question AI citation observations separate from Search Console and analytics. Record actual cited URLs, accuracy, platform conditions, and evidence in the protocol's observation log. Until measured, leave the baseline as "not measured". Confirm deployment and indexing before judging local content edits. Google AI-feature performance is included in Web results, not a separate GEO total in this checklist.

## Review Date

- Week reviewed:
- Reviewer:
- Search Console property:

## Prompt Pages Reviewed

- `pmp-ai-prompts.html`
- `prompts/pmp-study-prompts.html`
- `prompts/pmp-mistake-review-prompts.html`
- `prompts/pmp-exam-operations-prompts.html`
- `prompts/pmp-research-prompts.html`
- `prompts/pmp-career-value-prompts.html`
- `prompts/project-manager-ai-prompts.html`

## Practice Pages Reviewed

- `pmp-questions.html`
- `capm-questions.html`
- `pmp-mock-exam.html`
- `programs/pmp-chapter-practice.html`
- `practice.html`
- `programs/pmp.html`

## Metrics to Record

| Page | Clicks | Impressions | CTR | Average position | Indexed? | Main queries | Notes |
|---|---:|---:|---:|---:|---|---|---|
| `pmp-ai-prompts.html` |  |  |  |  |  |  |  |
| `prompts/pmp-study-prompts.html` |  |  |  |  |  |  |  |
| `prompts/pmp-mistake-review-prompts.html` |  |  |  |  |  |  |  |
| `prompts/pmp-exam-operations-prompts.html` |  |  |  |  |  |  |  |
| `prompts/pmp-research-prompts.html` |  |  |  |  |  |  |  |
| `prompts/pmp-career-value-prompts.html` |  |  |  |  |  |  |  |
| `prompts/project-manager-ai-prompts.html` |  |  |  |  |  |  |  |

## Decision Rules

| Search Console signal | Action |
|---|---|
| High impressions, low CTR | Rewrite title and meta description. Keep the page topic unchanged. |
| Average position 8-20 | Add content depth, examples, and internal links from related practice or guide pages. |
| Indexed but no impressions | Check whether the page targets a real PMP, CAPM, or project-management query. |
| Crawled but not indexed | Check thin content, duplicate sections, weak internal links, and sitemap inclusion. |
| Prompt pages with traffic but low conversion | Improve the CTA, prompt pack offer, or next-step links to practice pages. |
| Queries are too generic | Tighten the page copy around PMP, CAPM, exam prep, mistake review, or project manager workflows. |
| Queries imply official policy | Verify PMI or Pearson VUE information before changing copy. Add date-specific wording when needed. |

## Weekly Questions

1. Which pages gained impressions this week?
2. Which pages have impressions but weak CTR?
3. Which pages rank in positions 8-20 and need deeper content or links?
4. Which indexed pages have no meaningful impressions?
5. Which prompt pages send users to practice pages or study-pack signup?
6. Which pages need official-source verification before copy changes?

## Action Log

| Date | Page | Issue found | Change planned | Owner | Status |
|---|---|---|---|---|---|
|  |  |  |  |  |  |

## Guardrails

- Do not rewrite pages around unrelated generic AI prompt keywords.
- Do not create Chinese pages unless URL, canonical, hreflang, and translation quality decisions have been made.
- Do not claim PMI affiliation, official endorsement, passing guarantees, score guarantees, salary guarantees, or job guarantees.
- Do not change UI foundations during reporting work.
- Do not modify `styles.css` for reporting-only changes.

## Verification After Updates

Run the relevant checks after any page changes from this review:

```powershell
node _private\verify-prompt-seo.mjs
node _private\verify-question-bank-seo.mjs
node _private\verify-site-seo-basics.mjs
node _private\verify-indexable-pages.mjs
node _private\verify-structured-data.mjs
git diff --check
```
