# Search Intent Page Refresh Design

## Goal

Improve two existing pages that already align with Search Console signals without creating new URLs or changing canonical paths.

## Chosen Approach

Retarget the existing CAPM delivery-choice guide to cover the broader scheduling intent, and deepen the existing PMP change-control guide with decision-oriented examples. This avoids intent cannibalization and keeps the work attributable to two pages.

Alternatives considered:

- Create a new CAPM scheduling page: rejected because it would overlap heavily with the existing online-versus-test-center guide.
- Change only titles and descriptions: rejected because the current ranking problem is content and intent coverage, not established top-ten CTR.
- Rewrite the CAPM and PMP hubs: deferred because their current data is too sparse for a broad hub redesign.

## CAPM Page

File: `guides/capm-online-vs-test-center.html`

- Keep the URL and canonical unchanged.
- Change the title and H1 to lead with CAPM exam scheduling while retaining Pearson VUE, test-center locations, and online testing.
- Add a static scheduling sequence: application acceptance, fee payment, PMI account scheduling entry, Pearson VUE delivery choice, appointment confirmation.
- Explain how to use Pearson VUE Seat Availability to compare locations before booking.
- Retain the delivery-choice comparison and exam-day risk guidance, removing repeated paragraphs where needed.
- Link directly to the current PMI CAPM certification page and Pearson VUE PMI program page.
- State only stable, sourced facts: 150 questions, 180 minutes, test-center or secure online delivery, and scheduling after payment.
- Mark time-sensitive policies as details candidates must confirm on the official sites.

## PMP Page

File: `guides/pmp-change-control.html`

- Keep the URL, canonical, title, and H1 unchanged.
- Add a decision table distinguishing a requested baseline change, an active issue, defect repair, scope creep, an agile backlog request, and an emergency change.
- Add five short scenario examples focused on the next responsible action and decision authority.
- Add a contextual link from `pmp-questions.html` to the guide using descriptive anchor text.

## Metadata And Discovery

- Update Article `dateModified` values and `seo-page-map.mjs` lastmod values to `2026-07-27`.
- Update CAPM Open Graph and Twitter titles/descriptions to match the new intent.
- Do not add FAQPage or QAPage schema.
- Rebuild `sitemap.xml`; the URL count must remain unchanged.

## Verification

- Add a focused verifier for required titles, headings, official links, decision content, internal link, schema dates, and unchanged canonicals.
- Run the focused verifier red before implementation and green after implementation.
- Run indexability, structured data, long-guide word count, site SEO basics, and link checks.
- Preserve the existing unrelated edit to `docs/seo/passgrid-15-day-promotion-plan.md`.
