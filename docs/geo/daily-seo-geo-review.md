# Daily SEO and GEO Review

Effective September 15, 2026. Apply this protocol to each assessment of user-supplied daily monitoring for PassGrid. Write the assessment in Chinese; public articles remain in English. GEO is a required assessment section, even when the decision is to make no change.

This is an editorial workflow, not a scheduled automation or a promise to browse unattended. The user provides monitoring; source verification and website decisions follow in the current task. Weekly citation sampling is a separate measurement activity.

## Daily report

1. **Evidence delta:** What is genuinely new? Separate first-party policy, an author's experience, candidate self-reports, and unverified marketing. Record the source's publication date separately from the date checked. Failed platform access means coverage is unknown, not that nothing happened.
2. **SEO decision:** Name the existing target URL and its search intent. Prefer update, hold, or merge over a new page unless the new intent warrants an independently useful article. Do not infer search volume or ranking difficulty from a few social interactions.
3. **GEO citation value:** Identify the exact reader question, a concise standalone answer, conditions that must survive quotation, the adjacent primary source, and the practical value PassGrid adds. Compare expected value against duplication, verification cost, and maintenance risk. Do not invent a numeric GEO score.
4. **Action and priority:** State what changes, where, why now, and what does not change. "No update needed" is valid. Keep PMP central; do not broaden an article to PMP/CAPM simply to collect more keywords.
5. **Measurement:** State what observation would support the decision, the next review date or evidence trigger, and whether actual data is available. A suggested test is not a completed test; missing data stays "not measured".

Suggested per-topic decision table:

| Topic | New evidence and limits | Existing URL | SEO action | GEO answer and added value | Priority / hold reason | Next evidence trigger |
|---|---|---|---|---|---|---|
|  |  |  |  |  |  |  |

## Content requirements

- Put a direct answer under a literal reader question. Roughly 40-60 English words is an optional editing target, not an AI ranking requirement.
- Keep conditions, effective dates, and uncertainty in the answer itself. Avoid an absolute answer followed by a contradictory disclaimer far below it.
- Put the supporting official link beside the claim and explain its scope. A source list at the bottom alone is insufficient.
- Add a useful comparison, checklist, or original worked example. Label fictional examples and PassGrid advice; never imply PMI endorsement or a controlled study.
- Use actual author/editorial identity. Do not invent reviewers, credentials, personal testing, or success rates.
- Preserve the URL, title intent, and publication date. Update visible review date, Article dateModified, SEO map, and sitemap only after a substantive change or documented material review. Date individual source checks where the review is partial.
- Keep existing Article and BreadcrumbList aligned with visible content. Visible FAQ answers can help readers; adding FAQPage, ClaimReview, HowTo, or llms.txt is not a citation guarantee and is not part of this plan.
- For Google AI search eligibility, check indexing, snippet eligibility, crawl access, and internal discovery. Do not remove intentional noindex from query-dependent drill pages. Other AI services have their own access and citation behavior; Google rules are not universal.

## Fixed discovery questions

Version 1, September 15, 2026. These are unbranded English prompts: do not include PassGrid, its domain, or an article URL in a discovery run. Candidate pages identify what to inspect in results; never feed them to the system as part of the discovery question. Keep wording and test conditions consistent; record a version change when they change.

| ID | Exact prompt | Candidate page |
|---|---|---|
| G01 | Are 35 contact hours the same as 35 PDUs for a PMP application? | `guides/pmp-35-hour-training-rules-2026.html` |
| G02 | Can I use a course completed before earning my PMP for PMP renewal PDUs? | `guides/udemy-60-pmp-pdus-renewal.html` |
| G03 | Does an active CAPM replace the PMP training requirement and project experience requirement? | `guides/pmp-35-hour-training-rules-2026.html` |
| G04 | Can I post PMI Study Hall question screenshots online or upload them to an AI tool? | `guides/ai-pmp-capm-study-without-cheating.html` |
| G05 | What should I do when an AI explanation disagrees with a PMI Study Hall answer? | `guides/ai-pmp-capm-study-without-cheating.html` |
| G06 | How should I choose between a 30, 60, or 90-day PMP study plan? | `guides/pmp-study-plan.html` |

## Observation log

Baseline status: **not measured**. No citation or traffic result is implied by the example prompts. Fill a row only after observing the actual answer; retain a privacy-safe result snapshot or evidence link. Do not fabricate missing dates, answers, or zero counts.

| UTC date | Platform / model / search mode | Language / region / session conditions | Prompt ID and version | Outcome | Exact cited URL | Accuracy and missing conditions | Evidence reference | Action / next review |
|---|---|---|---|---|---|---|---|---|
|  |  |  |  |  |  |  |  |  |

Outcome values: `cited`, `mentioned without link`, `not cited`, `no AI answer`, `retrieval failed`. Record every completed preselected question, not only favorable results. Repeated runs remain separate observations with their own dates and settings.

## Measurement limits

- Run a stable weekly sample when requested or when performing the weekly review; use a fresh session without prior site context and record available search mode, locale, and model. Do not mix platform results into one apparently universal score.
- URL-fed summarization checks are not discovery evidence. They can test extraction accuracy but belong in a separately labelled diagnostic record.
- For each platform and question-set version, report exact counts: linked citations divided by completed AI answers. Show the denominator, no-answer outcomes, and retrieval failures separately. A mention without a link is not a linked citation; failed retrieval is not a non-citation.
- A small sample is directional, not a population-wide visibility estimate. Record alternative sources cited to understand missing value, not to reproduce competitors' content. One citation is not stable growth.
- Audit quoted conclusions against the page and its sources. Inaccurate citations are a content/interpretation issue to investigate, not automatically a success. Do not claim wording changes caused a later citation without stronger evidence.
- Google AI-feature traffic is included in Search Console's Web performance data. Total clicks alone do not isolate GEO. Keep query/page SEO metrics alongside, not interchangeable with, citation observations.
- Separately inspect identifiable AI referral sessions and onward visits to practice pages using available analytics. Missing referrers and zero-click answers make referral data incomplete. Do not claim a source conversion without tracking evidence. Keep known self-tests separate; do not discard all users from a country as presumed tests.
- Confirm production availability and indexing before interpreting a local edit as a released experiment. A local file, a commit, a push, and a deployed page are distinct states. No baseline or production check was performed by writing this protocol.

## Sources and integration

- [Google: AI features and your website](https://developers.google.com/search/docs/appearance/ai-features): indexed/snippet eligibility, no special AI schema requirement, and Web performance reporting. Checked September 15, 2026.
- [Google: optimizing for generative AI features](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide): helpful, distinctive content rather than generic rewrites. Checked September 15, 2026.
- [Google documentation updates](https://developers.google.com/search/updates): FAQ rich results no longer appear from May 7, 2026. This does not make visible FAQ content invalid. Checked September 15, 2026.
- [Source register](source-register.md): claim-level evidence and dated targeted reviews.
- [Search Console weekly review](../seo/search-console-weekly-review.md): conventional search metrics, decisions, and actions.
