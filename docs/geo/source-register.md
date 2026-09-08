# PassGrid source register

This register maps time-sensitive public claims to the official source that supports them. It is an editorial control document, not a substitute for the source links shown on public pages.

Verified date for this review: **2026-07-16**

Subsequent targeted reviews are dated per source below; they do not imply a fresh review of unrelated claims.

## Source records

| Source ID | Publisher | Supported claim | Official URL | Verified | Used by | Review trigger |
|---|---|---|---|---|---|---|
| `PMI-PMP-CERT` | Project Management Institute | Current PMP eligibility routes, training requirement, exam length, exam time, and available delivery routes | https://www.pmi.org/certifications/project-management-pmp | 2026-07-16 | `guides/pmp-vs-capm.html`, `guides/pmp-online-vs-test-center.html` | Recheck every 30 days and whenever PMI changes the certification page or application requirements. |
| `PMI-CAPM-CERT` | Project Management Institute | Current CAPM eligibility, project-management education requirement, exam length, and domain outline entry point | https://www.pmi.org/certifications/certified-associate-capm/ | 2026-07-16 | `guides/pmp-vs-capm.html` | Recheck every 60 days and whenever PMI changes the certification page or application requirements. |
| `PMI-PMP-2026-UPDATE` | Project Management Institute | The refreshed PMP exam launched on July 9, 2026 and changed domain emphasis and content focus | https://www.pmi.org/certifications/project-management-pmp/new-exam | 2026-07-16 | `guides/pmp-2026-exam-version.html` | Recheck when PMI changes the exam-update page or announces another exam refresh. |
| `PMI-PMP-2026-ECO` | Project Management Institute | July 2026 PMP exam domains, tasks, question count, timing, breaks, and question formats | https://www.pmi.org/-/media/pmi/documents/public/pdf/microsites/announcements/pmp-examination-content-outline-2026.pdf | 2026-07-16 | `guides/pmp-2026-exam-version.html` | Recheck when the PDF revision parameter, title, publication date, or linked ECO changes. |
| `PEARSON-PMI-SCHEDULING` | Pearson VUE | PMI scheduling entry point, seat availability, test-center availability, online proctoring route, and support entry points | https://www.pearsonvue.com/us/en/pmi.html | 2026-09-08 | `guides/pmp-online-vs-test-center.html` | Recheck immediately before publishing operational details and every 30 days. Do not copy temporary maintenance notices or assume every exam is available at every center. |
| `PMI-PMP-DELIVERY` | Project Management Institute | Online and test-center delivery options; current recommendation for test-center delivery | https://www.pmi.org/certifications/project-management-pmp | 2026-09-08 | `guides/pmp-online-vs-test-center.html` | Recheck when PMI changes its delivery recommendation. This targeted review does not update eligibility claims elsewhere. |
| `PEARSON-PMI-ONVUE` | Pearson VUE | PMI-specific equipment, room, check-in, conduct, and technical-recovery instructions | https://www.pearsonvue.com/us/en/pmi/onvue.html | 2026-09-08 | `guides/pmp-online-vs-test-center.html` | Recheck every 30 days and on any operational-policy change. Documentation advice is editorial; never promise refunds or unrestricted device switching. |
| `PMI-ADVANCED-PILOT` | Project Management Institute | Published pilot label and path; no confirmed APL acronym or dashboard-entry interpretation | https://www.pmi.org/whats-next | 2026-09-08 | `guides/pmi-advanced-certification-pmp-impact.html` | Recheck on official naming, application, fee, or access announcements. Community screenshots do not establish enrollment or a link to this pilot. |

## Claim-handling rules

1. Attribute eligibility, exam structure, scheduling, identification, delivery, and proctoring claims to PMI or Pearson VUE.
2. Put a visible `Last reviewed` date next to every time-sensitive decision guide.
3. State exactly what each source supports; a generic source list is not enough.
4. Separate official rules from PassGrid study advice and decision frameworks.
5. If two official pages conflict, use the more specific and more recently updated source, note the conflict internally, and avoid publishing the disputed claim until it is resolved.
6. Update the page's visible review date, JSON-LD `dateModified`, SEO map `lastmod`, and sitemap together after a material review.
7. Review trigger events take priority over the routine review interval.
