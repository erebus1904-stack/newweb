# PMP 2026 Question Refresh Design

**Goal:** Replace the 230 low-quality legacy PMP practice questions at positions 840–1069 with original, scenario-based questions aligned to PassGrid's July 2026 ECO coverage model, while preserving the 1,069-question total and the already-deployed GEO pages.

## Approved direction

- Replace the legacy block completely; do not pad short stems, choices, or explanations mechanically.
- Preserve PMP practice questions 1–839 unchanged.
- Keep the PMP practice-bank total at exactly 1,069 questions.
- Rebalance the complete bank to the July 2026 domain weights used by PassGrid:
  - People: 353 questions, 33.02%.
  - Process: 438 questions, 40.97%.
  - Business Environment: 278 questions, 26.01%.
- The replacement block therefore contains exactly 76 People, 94 Process, and 60 Business Environment questions.
- Keep the current static-site runtime and question-object schema. Do not introduce a new production dependency.
- Do not change the Phase 1 GEO source layer or the three deployed decision guides in this phase.

## Scope boundaries

### Included

- PMP practice questions 840–1069.
- A maintainable source file containing the 230 replacement records.
- A deterministic synchronization script that embeds those records into the corresponding `data.js` segment.
- Focused quality and distribution verification for the refreshed segment and the complete PMP practice bank.
- A generated coverage report showing domain, topic, approach, difficulty, count, percentage, and any uncovered required category.
- Compatibility verification for existing PMP/CAPM question-bank pages and validation scripts.

### Excluded

- Questions 1–839, except for read-only counting and compatibility checks.
- CAPM content.
- Exam-bank/mock-exam behavior.
- Changes to navigation, page design, pricing, authentication, or deployment infrastructure.
- Claims that PassGrid is affiliated with PMI or that PassGrid's topic mapping is an official PMI endorsement.

## Content model

Each replacement record uses the existing PMP practice-question fields:

- `tag`
- `domain`
- `topic`
- `approach`
- `difficulty`
- `decisionRule`
- `text`
- `choices`
- `correct`
- `explanation`
- `chapterId`

Every record must be individually reviewable and self-contained. The stem presents a realistic project situation and asks for a defensible next, first, best, or most appropriate action. Choices must be plausible competing actions rather than superficial wording variants. The explanation must identify the decisive clue, justify the correct choice, and explain why the alternatives are weaker.

The content set will cover predictive, agile, and hybrid delivery. Topic coverage will include, where appropriate, team leadership, stakeholder engagement, change, risk, quality, schedule, cost, procurement, value delivery, organizational change, compliance, sustainability, and responsible use or governance of AI-enabled project work. Technology references are scenario context, not unsupported claims about PMI exam content.

## Source-of-truth and synchronization architecture

The 230 authored records will live in a dedicated private source module. `data.js` remains the browser-consumable deployed artifact.

The synchronization script will:

1. Load and validate the replacement source module.
2. Parse the PMP practice-question array boundaries in `data.js` without reformatting unrelated catalog content.
3. Replace only question elements 840–1069.
4. Preserve every byte outside the serialized question elements at positions 840–1069.
5. Write deterministic output so a second run produces no diff.

A verification check will compare the deployed segment with the private source records. Any content drift between them is a failure.

## Quality contract

The refreshed 230-question segment must satisfy all of the following:

- Exactly four non-empty choices per question and a valid zero-based `correct` index.
- Stem length of at least 18 words.
- Each choice contains at least four words.
- Explanation length of at least 28 words.
- Non-empty domain, topic, approach, difficulty, decision rule, tag, and valid chapter mapping.
- No `PMBOK2008`, `PMBOK 2008`, `version 4`, old translation artifacts, malformed option fragments, generated drill labels, answer-key leakage, or placeholder language.
- No duplicate normalized stems.
- No duplicate normalized explanations.
- No repeated stem/explanation template whose only variation is names, numbers, or delivery labels.
- Every domain contains predictive, agile, and hybrid questions, plus easy, medium, and hard questions.
- The replacement set covers at least 12 distinct topics, and no single topic exceeds 15% of the replacement block.
- Public language is clear English and avoids obsolete process wording presented as current universal policy.

Existing project-wide validators remain authoritative. The focused refresh verifier adds stricter checks for the replaced block and exact final-domain counts; it does not weaken existing assertions to make the data pass.

## Coverage and reporting

The generated coverage report will include:

- Total PMP practice questions and refreshed-question count.
- Complete-bank and refreshed-block domain counts and percentages.
- Topic, approach, difficulty, and chapter distributions.
- Required domain targets versus actual counts.
- Explicit gaps when a required domain total is missed, an approach or difficulty is absent from a domain, fewer than 12 topics are represented, or one topic exceeds 15% of the replacement block.
- A note that the taxonomy is PassGrid's educational mapping based on the cited July 2026 ECO source, not an official endorsement of individual questions.

The report is an internal maintenance artifact. It will not be exposed as a public claim unless separately reviewed for GEO publication.

## Failure handling

- The synchronization script must abort before writing when the source count, schema, domain counts, choice shape, or expected legacy boundary is wrong.
- It must abort if questions 1–839 or unrelated catalog sections cannot be proven unchanged.
- Validators return a non-zero exit code and list question positions and failed rules.
- Report generation must not conceal failures; it may write diagnostic output, but verification remains failed until every required check passes.

## Testing strategy

Implementation follows a test-first sequence:

1. Add the focused refresh verifier and run it against the current legacy block to confirm a meaningful failure.
2. Add the replacement source and synchronization logic.
3. Run focused verification until the 230-question quality, synchronization, and distribution contract passes.
4. Run the existing PMP/CAPM phase, question-quality, structure, scale, and SEO validators.
5. Run the question-bank CI validator and `git diff --check`.
6. Inspect the final diff to confirm questions 1–839, CAPM data, GEO pages, and unrelated user changes are untouched.

Passing scripts are necessary but not sufficient. A final sampling review will examine questions across all three domains, delivery approaches, and difficulty levels for scenario realism, answer defensibility, and accidental templating.

## Acceptance criteria

- PMP practice bank contains exactly 1,069 questions.
- Positions 840–1069 match the approved 230-record source set.
- Final domain totals are exactly People 353, Process 438, and Business Environment 278.
- Replacement-block totals are exactly People 76, Process 94, and Business Environment 60.
- All focused and existing relevant validators exit successfully.
- The synchronization script is idempotent.
- The coverage report is generated from current data and reports no required-domain gap.
- No Phase 1 GEO page or unrelated project content changes in this phase.
