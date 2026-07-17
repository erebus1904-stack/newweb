# PMP 2026 Question Refresh Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace PMP practice questions 840–1069 with 230 original scenario questions, rebalance the complete 1,069-question bank to 33.02% People / 40.97% Process / 26.01% Business Environment, and produce a verified July 2026 ECO coverage report.

**Architecture:** Store individually authored replacement questions in three domain-focused private modules and combine them through one deterministic index. A focused contract validates content before a synchronization script replaces only the intended `data.js` question range and PMP target-count metadata; separate verification and reporting scripts prove source/deployed parity, quality, distribution, and regression safety.

**Tech Stack:** Node.js ES modules, static JavaScript data, built-in `node:assert`, `node:fs`, and `node:vm`; no new runtime or package dependency.

## Global Constraints

- Replace the legacy block completely; do not pad short stems, choices, or explanations mechanically.
- Preserve PMP practice questions 1–839 unchanged.
- Keep the PMP practice-bank total at exactly 1,069 questions.
- The final domain totals are exactly People 353, Process 438, and Business Environment 278.
- The replacement block contains exactly People 76, Process 94, and Business Environment 60.
- Each replacement question has four meaningful choices, a valid answer index, an 18-word-or-longer stem, and a 28-word-or-longer explanation.
- Each domain contains Predictive, Agile, and Hybrid questions and Easy, Medium, and Hard questions.
- The replacement block contains at least 12 distinct topics; no topic exceeds 15% of 230 questions.
- Do not introduce a production dependency or change the static-site runtime.
- Do not change CAPM content, PMP exam-bank questions, Phase 1 GEO pages, or unrelated project files.
- Treat the topic taxonomy as PassGrid's educational mapping based on the July 2026 ECO, not an official PMI endorsement of individual questions.

## File structure

- Create `_private/pmp-2026-refresh/contract.mjs`: all immutable counts, allocation matrices, normalization helpers, and source/deployed quality validation.
- Create `_private/pmp-2026-refresh/people.mjs`: 76 literal People-domain question objects.
- Create `_private/pmp-2026-refresh/process.mjs`: 94 literal Process-domain question objects.
- Create `_private/pmp-2026-refresh/business-environment.mjs`: 60 literal Business Environment question objects.
- Create `_private/pmp-2026-refresh/index.mjs`: imports the three domain modules and exports the deterministic 230-question deployment order.
- Create `_private/pmp-2026-refresh/data-js-segment.mjs`: string-aware array scanning and targeted replacement helpers for `data.js`.
- Create `_private/test-pmp-2026-refresh-contract.mjs`: executable unit tests for contract rejection and allocation logic.
- Create `_private/test-pmp-2026-data-segment.mjs`: executable unit tests proving targeted replacement preserves surrounding bytes.
- Create `_private/verify-pmp-2026-refresh.mjs`: focused acceptance verifier for authored source, deployed data, metadata, and coverage artifacts.
- Create `_private/sync-pmp-2026-refresh.mjs`: validates and embeds the approved source set into `data.js`.
- Create `_private/build-pmp-2026-coverage.mjs`: generates deterministic JSON and Markdown coverage reports.
- Create `_private/reports/pmp-2026-eco-coverage.json`: machine-readable internal coverage result.
- Create `_private/reports/pmp-2026-eco-coverage.md`: reviewer-readable internal coverage matrix.
- Modify `data.js:21980-26589`: replace practice questions 840–1069 and update PMP `domainTargets` / `chapterTargets` counts only.
- Modify `_private/verify-project-bank-scale.mjs`: replace stale 839-question expectations with the refreshed 1,069-question contract.
- Regenerate `reports/question-bank-report.json` and `reports/question-bank-report.md` through the existing validator.
- Modify `docs/superpowers/specs/2026-07-16-pmp-2026-question-refresh-design.md`: document the necessary target-count metadata exception discovered during plan review.

---

### Task 1: Executable refresh contract

**Files:**
- Create: `_private/test-pmp-2026-refresh-contract.mjs`
- Create: `_private/pmp-2026-refresh/contract.mjs`

**Interfaces:**
- Produces: `REFRESH_START`, `REFRESH_COUNT`, `FINAL_DOMAIN_TARGETS`, `REFRESH_DOMAIN_TARGETS`, `REFRESH_CHAPTER_TARGETS`, `FINAL_CHAPTER_TARGETS`, `DOMAIN_CONTENT_TARGETS`, `normalizeText(value)`, `wordCount(value)`, `countBy(items, key)`, `validateDomainSource(questions, domain)`, and `validateRefreshSet(questions)`.
- Consumes: no project data; the contract is deterministic and side-effect free.

- [ ] **Step 1: Write the failing contract test**

  Create `_private/test-pmp-2026-refresh-contract.mjs` with `node:assert/strict`. Assert all exact totals, assert that a valid four-choice fixture passes record-level checks, and assert that short text, short choices, duplicate stems, duplicate explanations, banned legacy wording, missing approaches/difficulties, incorrect answer distributions, and wrong domain/chapter allocations are rejected.

  ```js
  import assert from "node:assert/strict";
  import {
    REFRESH_COUNT,
    REFRESH_DOMAIN_TARGETS,
    REFRESH_CHAPTER_TARGETS,
    FINAL_DOMAIN_TARGETS,
    FINAL_CHAPTER_TARGETS,
    validateDomainSource,
    validateRefreshSet,
  } from "./pmp-2026-refresh/contract.mjs";

  assert.equal(REFRESH_COUNT, 230);
  assert.deepEqual(REFRESH_DOMAIN_TARGETS, {
    People: 76,
    Process: 94,
    "Business Environment": 60,
  });
  assert.equal(Object.values(REFRESH_CHAPTER_TARGETS).reduce((a, b) => a + b, 0), 230);
  assert.equal(Object.values(FINAL_DOMAIN_TARGETS).reduce((a, b) => a + b, 0), 1069);
  assert.equal(Object.values(FINAL_CHAPTER_TARGETS).reduce((a, b) => a + b, 0), 1069);

  const failures = validateDomainSource([], "People");
  assert(failures.some((message) => message.includes("expected 76")));
  assert(validateRefreshSet([]).some((message) => message.includes("expected 230")));
  console.log("PASS PMP 2026 refresh contract tests.");
  ```

- [ ] **Step 2: Run the test and confirm RED**

  Run: `node _private/test-pmp-2026-refresh-contract.mjs`

  Expected: exit `1` with `ERR_MODULE_NOT_FOUND` for `_private/pmp-2026-refresh/contract.mjs`.

- [ ] **Step 3: Implement the immutable allocation contract**

  Create `_private/pmp-2026-refresh/contract.mjs` with these exact allocations:

  ```js
  export const REFRESH_START = 839;
  export const REFRESH_COUNT = 230;

  export const REFRESH_DOMAIN_TARGETS = Object.freeze({
    People: 76,
    Process: 94,
    "Business Environment": 60,
  });

  export const FINAL_DOMAIN_TARGETS = Object.freeze({
    People: 353,
    Process: 438,
    "Business Environment": 278,
  });

  export const REFRESH_CHAPTER_TARGETS = Object.freeze({
    "pmbok-ch01-introduction": 5,
    "pmbok-ch02-project-environment": 40,
    "pmbok-ch03-project-manager-role": 20,
    "pmbok-ch04-integration-management": 25,
    "pmbok-ch05-scope-management": 15,
    "pmbok-ch06-schedule-management": 15,
    "pmbok-ch07-cost-management": 12,
    "pmbok-ch08-quality-management": 12,
    "pmbok-ch09-resource-management": 22,
    "pmbok-ch10-communications-management": 12,
    "pmbok-ch11-risk-management": 20,
    "pmbok-ch12-procurement-management": 12,
    "pmbok-ch13-stakeholder-management": 20,
  });

  export const FINAL_CHAPTER_TARGETS = Object.freeze({
    "pmbok-ch01-introduction": 65,
    "pmbok-ch02-project-environment": 84,
    "pmbok-ch03-project-manager-role": 50,
    "pmbok-ch04-integration-management": 142,
    "pmbok-ch05-scope-management": 96,
    "pmbok-ch06-schedule-management": 85,
    "pmbok-ch07-cost-management": 62,
    "pmbok-ch08-quality-management": 73,
    "pmbok-ch09-resource-management": 104,
    "pmbok-ch10-communications-management": 73,
    "pmbok-ch11-risk-management": 81,
    "pmbok-ch12-procurement-management": 72,
    "pmbok-ch13-stakeholder-management": 82,
  });
  ```

  Add `DOMAIN_CONTENT_TARGETS` with the following exact per-domain allocations:

  | Domain | Approaches | Difficulties | Correct indexes | Chapter counts |
  |---|---|---|---|---|
  | People | Predictive 20, Agile 28, Hybrid 28 | Easy 20, Medium 36, Hard 20 | A/B/C/D: 19 each | ch03 18, ch04 8, ch09 20, ch10 12, ch13 18 |
  | Process | Predictive 32, Agile 30, Hybrid 32 | Easy 24, Medium 44, Hard 26 | A 24, B 24, C 23, D 23 | ch01 5, ch04 17, ch05 15, ch06 15, ch07 12, ch08 12, ch11 10, ch12 8 |
  | Business Environment | Predictive 18, Agile 18, Hybrid 24 | Easy 16, Medium 28, Hard 16 | A/B/C/D: 15 each | ch02 40, ch03 2, ch09 2, ch11 10, ch12 4, ch13 2 |

  Add exact topic allocations:

  - People: Team leadership 10; Conflict management 9; Team performance 9; Emotional intelligence 8; Stakeholder engagement 10; Communication 9; Coaching and mentoring 8; Virtual and cross-cultural collaboration 7; Negotiation and decision making 6.
  - Process: Integration and change control 10; Scope and requirements 8; Schedule 8; Cost 7; Quality 8; Risk and uncertainty 10; Procurement 7; Planning and adaptation 8; Delivery and acceptance 9; Measurement and forecasting 7; Agile flow and backlog 7; Issue and knowledge management 5.
  - Business Environment: Benefits and value realization 10; Compliance 9; Organizational change 8; Governance 8; Sustainability and social impact 7; External environment and market change 7; Strategic alignment 6; AI and data governance 5.

  Implement validators using exact property names from `data.js`. `validateRefreshSet()` must reject duplicate normalized stems/explanations, template fingerprints that normalize only names/numbers/context labels, answer-key leakage, CJK text, and these legacy patterns:

  ```js
  export const BANNED_REFRESH_PATTERNS = [
    /PMBOK\s*2008/i,
    /version\s*4/i,
    /correct answer\s*:/i,
    /answer is\s+[A-D]\b/i,
    /Delphi technology/i,
    /Ompleted work/i,
    /practice item\s*\d+/i,
    /domain pattern\s*\d+/i,
    /initial review|timed drill|case analysis|readiness check|weak-area review/i,
  ];
  ```

  For each question require the 11 schema fields, exactly four distinct choices, `correct` in `0..3`, stem `>=18` words, every choice `>=4` words, explanation `>=28` words, an allowed approach/difficulty/chapter, and the exact domain requested by `validateDomainSource()`.

- [ ] **Step 4: Run the contract test and confirm GREEN**

  Run: `node _private/test-pmp-2026-refresh-contract.mjs`

  Expected: `PASS PMP 2026 refresh contract tests.`

- [ ] **Step 5: Commit the contract**

  ```powershell
  git add _private/test-pmp-2026-refresh-contract.mjs _private/pmp-2026-refresh/contract.mjs
  git commit -m "test: define PMP 2026 refresh contract"
  ```

### Task 2: People-domain source set

**Files:**
- Create: `_private/pmp-2026-refresh/people.mjs`

**Interfaces:**
- Consumes: `DOMAIN_CONTENT_TARGETS.People` and `validateDomainSource()` from `contract.mjs`.
- Produces: named export `peopleQuestions`, an array of exactly 76 literal objects.

- [ ] **Step 1: Confirm the People source is absent**

  Run:

  ```powershell
  node --input-type=module -e "import('./_private/pmp-2026-refresh/people.mjs')"
  ```

  Expected: exit `1` with `ERR_MODULE_NOT_FOUND`.

- [ ] **Step 2: Author 76 literal People questions**

  Create `people.mjs`. Do not generate stems, choices, or explanations from templates. Every record must use this literal shape:

  ```js
  export const peopleQuestions = [
    {
      tag: "Team leadership",
      domain: "People",
      topic: "Team leadership",
      approach: "Hybrid",
      difficulty: "Medium",
      decisionRule: "restore shared ownership before imposing a solution.",
      text: "A hybrid product team has stopped raising delivery concerns after a senior architect dismisses two developers during planning. The next milestone is still achievable, but participation is declining. What should the project manager do first?",
      choices: [
        "Facilitate a private fact-finding conversation and then reset team working agreements",
        "Replace the two developers before the next planning session begins",
        "Ask the sponsor to select the technical decisions for future iterations",
        "Continue the current approach until milestone performance begins to decline",
      ],
      correct: 0,
      explanation: "The immediate issue is psychological safety and declining participation, not a proven capability gap. The project manager should understand the behavior, protect respectful collaboration, and help the team restore working agreements. Replacing people, transferring technical ownership to the sponsor, or waiting for measurable failure avoids the leadership problem rather than resolving it.",
      chapterId: "pmbok-ch09-resource-management",
    },
  ];
  ```

  Complete the file using the exact People topic, approach, difficulty, answer-index, and chapter allocations in Task 1. Vary industries, constraints, stakeholder roles, lifecycle stages, and decision verbs; every explanation must address its own distractors.

- [ ] **Step 3: Validate the People source independently**

  Run:

  ```powershell
  node --input-type=module -e "import { peopleQuestions } from './_private/pmp-2026-refresh/people.mjs'; import { validateDomainSource } from './_private/pmp-2026-refresh/contract.mjs'; const failures=validateDomainSource(peopleQuestions,'People'); if(failures.length){console.error(failures.join('\n'));process.exit(1)} console.log('PASS 76 People refresh questions.')"
  ```

  Expected: `PASS 76 People refresh questions.`

- [ ] **Step 4: Review deterministic samples**

  Inspect positions 1, 10, 20, 30, 40, 50, 60, 70, and 76. Confirm each correct answer follows from the stem, at least two distractors are plausible, and no explanation could be pasted onto another sampled question without becoming incorrect.

- [ ] **Step 5: Commit the People source**

  ```powershell
  git add _private/pmp-2026-refresh/people.mjs
  git commit -m "content: add People PMP 2026 scenarios"
  ```

### Task 3: Process-domain source set

**Files:**
- Create: `_private/pmp-2026-refresh/process.mjs`

**Interfaces:**
- Consumes: `DOMAIN_CONTENT_TARGETS.Process` and `validateDomainSource()` from `contract.mjs`.
- Produces: named export `processQuestions`, an array of exactly 94 literal objects.

- [ ] **Step 1: Confirm the Process source is absent**

  Run: `node --input-type=module -e "import('./_private/pmp-2026-refresh/process.mjs')"`

  Expected: exit `1` with `ERR_MODULE_NOT_FOUND`.

- [ ] **Step 2: Author 94 literal Process questions**

  Use the same 11-field literal object schema as Task 2, with `domain: "Process"`. Apply the exact Process allocations in Task 1. Cover integration/change, scope/requirements, schedule, cost, quality, risk, procurement, planning/adaptation, delivery/acceptance, measurement/forecasting, agile flow/backlog, and issue/knowledge decisions without referring to obsolete editions as controlling authority.

  Each stem must contain the decision-relevant fact before asking the action. Each explanation must name that fact, justify the correct sequence, and reject the distractors for scenario-specific reasons.

- [ ] **Step 3: Validate the Process source independently**

  Run:

  ```powershell
  node --input-type=module -e "import { processQuestions } from './_private/pmp-2026-refresh/process.mjs'; import { validateDomainSource } from './_private/pmp-2026-refresh/contract.mjs'; const failures=validateDomainSource(processQuestions,'Process'); if(failures.length){console.error(failures.join('\n'));process.exit(1)} console.log('PASS 94 Process refresh questions.')"
  ```

  Expected: `PASS 94 Process refresh questions.`

- [ ] **Step 4: Review deterministic samples**

  Inspect positions 1, 12, 24, 36, 48, 60, 72, 84, and 94 using the same answer-defensibility and explanation-specificity checks as Task 2.

- [ ] **Step 5: Commit the Process source**

  ```powershell
  git add _private/pmp-2026-refresh/process.mjs
  git commit -m "content: add Process PMP 2026 scenarios"
  ```

### Task 4: Business Environment source set

**Files:**
- Create: `_private/pmp-2026-refresh/business-environment.mjs`

**Interfaces:**
- Consumes: `DOMAIN_CONTENT_TARGETS["Business Environment"]` and `validateDomainSource()` from `contract.mjs`.
- Produces: named export `businessEnvironmentQuestions`, an array of exactly 60 literal objects.

- [ ] **Step 1: Confirm the Business Environment source is absent**

  Run: `node --input-type=module -e "import('./_private/pmp-2026-refresh/business-environment.mjs')"`

  Expected: exit `1` with `ERR_MODULE_NOT_FOUND`.

- [ ] **Step 2: Author 60 literal Business Environment questions**

  Use the same 11-field literal object schema as Task 2, with `domain: "Business Environment"`. Apply the exact Business Environment allocations in Task 1. Cover benefits/value, compliance, organizational change, governance, sustainability/social impact, external environment/market change, strategic alignment, and AI/data governance.

  AI-related questions must test accountable governance, validation, privacy, bias, traceability, or human oversight in project work. They must not claim that a named technology or tool is required by PMI.

- [ ] **Step 3: Validate the Business Environment source independently**

  Run:

  ```powershell
  node --input-type=module -e "import { businessEnvironmentQuestions } from './_private/pmp-2026-refresh/business-environment.mjs'; import { validateDomainSource } from './_private/pmp-2026-refresh/contract.mjs'; const failures=validateDomainSource(businessEnvironmentQuestions,'Business Environment'); if(failures.length){console.error(failures.join('\n'));process.exit(1)} console.log('PASS 60 Business Environment refresh questions.')"
  ```

  Expected: `PASS 60 Business Environment refresh questions.`

- [ ] **Step 4: Review deterministic samples**

  Inspect positions 1, 8, 16, 24, 32, 40, 48, 56, and 60. Confirm regulatory and governance statements are framed as scenario facts, not universal legal advice, and that AI scenarios preserve accountable human decision-making.

- [ ] **Step 5: Commit the Business Environment source**

  ```powershell
  git add _private/pmp-2026-refresh/business-environment.mjs
  git commit -m "content: add Business Environment PMP 2026 scenarios"
  ```

### Task 5: Source aggregation and focused RED verifier

**Files:**
- Create: `_private/pmp-2026-refresh/index.mjs`
- Create: `_private/verify-pmp-2026-refresh.mjs`

**Interfaces:**
- Consumes: all three domain arrays and all contract constants/validators.
- Produces: `refreshQuestions` in round-robin domain order and a verifier that exits `0` only when source, deployed segment, metadata, and coverage reports agree.

- [ ] **Step 1: Implement deterministic aggregation**

  Create `index.mjs` with no content generation:

  ```js
  import { peopleQuestions } from "./people.mjs";
  import { processQuestions } from "./process.mjs";
  import { businessEnvironmentQuestions } from "./business-environment.mjs";

  function interleave(...sets) {
    const output = [];
    const maxLength = Math.max(...sets.map((set) => set.length));
    for (let index = 0; index < maxLength; index += 1) {
      for (const set of sets) {
        if (set[index]) output.push(set[index]);
      }
    }
    return output;
  }

  export const refreshQuestions = interleave(
    peopleQuestions,
    processQuestions,
    businessEnvironmentQuestions,
  );
  ```

- [ ] **Step 2: Verify the complete authored set is GREEN**

  Run:

  ```powershell
  node --input-type=module -e "import { refreshQuestions } from './_private/pmp-2026-refresh/index.mjs'; import { validateRefreshSet } from './_private/pmp-2026-refresh/contract.mjs'; const failures=validateRefreshSet(refreshQuestions); if(failures.length){console.error(failures.join('\n'));process.exit(1)} console.log('PASS complete 230-question authored source.')"
  ```

  Expected: `PASS complete 230-question authored source.`

- [ ] **Step 3: Write the focused deployed-data verifier**

  Create `_private/verify-pmp-2026-refresh.mjs`. It must:

  - Load `data.js` through `vm.runInNewContext`.
  - Select PMP questions where `bankType !== "exam"`.
  - Assert practice count 1,069 and exam-bank count 180.
  - Validate `practiceQuestions.slice(REFRESH_START, REFRESH_START + REFRESH_COUNT)` with `validateRefreshSet()`.
  - Compare that slice to `refreshQuestions` with `assert.deepStrictEqual` semantics.
  - Assert complete-bank domain counts equal `FINAL_DOMAIN_TARGETS`.
  - Assert `examConfig.domainTargets[].practiceCount` and `examConfig.chapterTargets[].practiceCount` equal the contract.
  - Assert `_private/reports/pmp-2026-eco-coverage.json` and `.md` exist only when run with `--require-report`.
  - Print at most 60 detailed failures followed by a total.

- [ ] **Step 4: Run the focused verifier and confirm RED against deployed legacy data**

  Run: `node _private/verify-pmp-2026-refresh.mjs`

  Expected: exit `1`; failures include deployed/source mismatch and old final domain totals `People 298`, `Process 546`, `Business Environment 225`.

- [ ] **Step 5: Commit source aggregation and verifier**

  ```powershell
  git add _private/pmp-2026-refresh/index.mjs _private/verify-pmp-2026-refresh.mjs
  git commit -m "test: verify PMP 2026 deployed refresh"
  ```

### Task 6: Byte-preserving `data.js` synchronization

**Files:**
- Create: `_private/test-pmp-2026-data-segment.mjs`
- Create: `_private/pmp-2026-refresh/data-js-segment.mjs`
- Create: `_private/sync-pmp-2026-refresh.mjs`
- Modify: `data.js:21980-26589`

**Interfaces:**
- Consumes: `refreshQuestions`, refresh/final allocation constants, and the existing `data.js` text.
- Produces: `locateArrayElements(source, arrayStart)`, `replaceElementRange(source, spans, startIndex, count, serializedElements)`, `updatePmpTargetCounts(source)`, `buildSynchronizedData(source)`, and a CLI that writes only after all invariants pass.

- [ ] **Step 1: Write failing scanner/replacement tests**

  Create `_private/test-pmp-2026-data-segment.mjs` with fixtures containing nested arrays, braces inside strings, escaped quotes, CRLF/LF variants, and objects before/after the target. Assert that replacing elements 2–3 changes only those object bytes and that a second build is identical.

  ```js
  import assert from "node:assert/strict";
  import { locateArrayElements, replaceElementRange } from "./pmp-2026-refresh/data-js-segment.mjs";

  const source = 'const x = [{"text":"keep { [ \\""},{"id":2},{"id":3},{"id":4}];\n';
  const arrayStart = source.indexOf("[");
  const spans = locateArrayElements(source, arrayStart);
  assert.equal(spans.length, 4);
  const replaced = replaceElementRange(source, spans, 1, 2, '{"id":"new"}');
  assert(replaced.startsWith('const x = [{"text":"keep { [ \\""},'));
  assert(replaced.endsWith(',{"id":4}];\n'));
  console.log("PASS PMP data segment tests.");
  ```

- [ ] **Step 2: Run the scanner test and confirm RED**

  Run: `node _private/test-pmp-2026-data-segment.mjs`

  Expected: exit `1` with `ERR_MODULE_NOT_FOUND` for `data-js-segment.mjs`.

- [ ] **Step 3: Implement the string-aware scanner**

  In `data-js-segment.mjs`, scan one character at a time while tracking `inString`, `escaped`, and nested `{[ ]}` depth. `locateArrayElements()` returns `{ start, end }` spans for top-level array elements and throws on unbalanced input. `replaceElementRange()` validates the index/count and splices exactly from the first target span's `start` through the last target span's `end`.

  Add `serializeElements(questions, eol)` that prefixes `JSON.stringify(question, null, 2)` with six spaces per line and joins elements with `,${eol}`. Add `updatePmpTargetCounts()` that edits only `practiceCount` values inside the PMP `domainTargets` and `chapterTargets` sections, using the exact final constants and asserting one replacement per configured target.

- [ ] **Step 4: Run the scanner test and confirm GREEN**

  Run: `node _private/test-pmp-2026-data-segment.mjs`

  Expected: `PASS PMP data segment tests.`

- [ ] **Step 5: Implement pre-write synchronization safeguards**

  Create `_private/sync-pmp-2026-refresh.mjs`. Before `writeFileSync`, it must:

  1. Run `validateRefreshSet(refreshQuestions)` and abort on any failure.
  2. Locate the first `"questions": [` after `"id": "pmp"` and confirm at least 1,249 elements (1,069 practice + 180 exam).
  3. Replace zero-based elements 839–1068.
  4. Update final domain/chapter target counts.
  5. Evaluate both original and candidate catalogs in isolated VM contexts.
  6. Deep-compare PMP questions 1–839, all 180 PMP exam-bank records, the entire CAPM exam object, and all non-target PMP metadata except the approved count fields.
  7. Confirm the candidate passes final domain/chapter totals and source/deployed parity.
  8. Build the candidate a second time and confirm byte-for-byte idempotence.
  9. Write UTF-8 while preserving the file's existing line-ending style.

- [ ] **Step 6: Run synchronization and inspect the focused diff**

  Run:

  ```powershell
  node _private/sync-pmp-2026-refresh.mjs
  git diff --stat -- data.js
  git diff --word-diff=porcelain -- data.js | Select-Object -First 120
  ```

  Expected: the script reports `PASS synchronized 230 PMP refresh questions.` The diff starts near current question 840 and includes only the replacement block plus target count values.

- [ ] **Step 7: Confirm deployed-data GREEN and idempotence**

  Run:

  ```powershell
  node _private/verify-pmp-2026-refresh.mjs
  ```

  Then compare a SHA-256 hash captured immediately before and after a second synchronization run:

  ```powershell
  $before=(Get-FileHash data.js -Algorithm SHA256).Hash
  node _private/sync-pmp-2026-refresh.mjs
  $after=(Get-FileHash data.js -Algorithm SHA256).Hash
  if ($before -ne $after) { throw 'Synchronization is not idempotent.' }
  ```

  Expected: focused verifier prints `PASS PMP 2026 refresh verification.` and both hashes match.

- [ ] **Step 8: Commit synchronization and deployed data**

  ```powershell
  git add _private/test-pmp-2026-data-segment.mjs _private/pmp-2026-refresh/data-js-segment.mjs _private/sync-pmp-2026-refresh.mjs data.js
  git commit -m "feat: replace legacy PMP practice questions"
  ```

### Task 7: Deterministic ECO coverage reports

**Files:**
- Create: `_private/build-pmp-2026-coverage.mjs`
- Create: `_private/reports/pmp-2026-eco-coverage.json`
- Create: `_private/reports/pmp-2026-eco-coverage.md`
- Modify: `_private/verify-pmp-2026-refresh.mjs`

**Interfaces:**
- Consumes: deployed PMP practice questions and contract targets.
- Produces: deterministic JSON/Markdown reports and `--check` behavior that exits non-zero when files differ from current data.

- [ ] **Step 1: Extend the verifier to require coverage artifacts**

  Add report assertions behind `--require-report`: both files must exist; JSON totals must equal current deployed totals; `gaps` must be an empty array; the Markdown must include the three final domain rows and the non-endorsement note.

- [ ] **Step 2: Run report verification and confirm RED**

  Run: `node _private/verify-pmp-2026-refresh.mjs --require-report`

  Expected: exit `1` because `_private/reports/pmp-2026-eco-coverage.json` and `.md` do not exist.

- [ ] **Step 3: Implement deterministic report generation**

  Create `_private/build-pmp-2026-coverage.mjs` with pure `buildCoverage(practiceQuestions)` and `toMarkdown(report)` functions. The JSON structure must be:

  ```js
  {
    ecoVersion: "July 2026",
    mappingOwner: "PassGrid",
    endorsement: "This is PassGrid's educational mapping, not PMI endorsement of individual questions.",
    totalPracticeQuestions: 1069,
    refreshedQuestions: 230,
    domains: [],
    refreshedDomains: [],
    topics: [],
    approaches: [],
    difficulties: [],
    chapters: [],
    gaps: [],
  }
  ```

  Every distribution row contains `{ name, count, percentage }`, with percentage rounded to two decimals. Do not add a wall-clock timestamp; identical input must generate identical bytes. Default mode writes both files. `--check` compares expected content to existing bytes and exits `1` without writing if either differs.

- [ ] **Step 4: Generate and verify reports**

  Run:

  ```powershell
  node _private/build-pmp-2026-coverage.mjs
  node _private/build-pmp-2026-coverage.mjs --check
  node _private/verify-pmp-2026-refresh.mjs --require-report
  ```

  Expected: report build success, `PASS coverage reports are current.`, and `PASS PMP 2026 refresh verification.`

- [ ] **Step 5: Commit coverage reporting**

  ```powershell
  git add _private/build-pmp-2026-coverage.mjs _private/verify-pmp-2026-refresh.mjs _private/reports/pmp-2026-eco-coverage.json _private/reports/pmp-2026-eco-coverage.md
  git commit -m "docs: add PMP 2026 coverage matrix"
  ```

### Task 8: Existing validator alignment and full regression

**Files:**
- Modify: `_private/verify-project-bank-scale.mjs`
- Regenerate: `reports/question-bank-report.json`
- Regenerate: `reports/question-bank-report.md`

**Interfaces:**
- Consumes: final deployed question data and contract constants.
- Produces: current scale assertions and refreshed project quality reports.

- [ ] **Step 1: Run the stale scale validator and confirm RED**

  Run: `node _private/verify-project-bank-scale.mjs`

  Expected: exit `1` because it still expects PMP count 839 and domain totals 277/344/218.

- [ ] **Step 2: Update scale expectations without weakening quality checks**

  Import `FINAL_DOMAIN_TARGETS` and `FINAL_CHAPTER_TARGETS` from `./pmp-2026-refresh/contract.mjs`. Change the PMP `checkExam()` expected count to `1069`. Change `checkPmpChapterTargets()` to require a 1,069 sum and compare every chapter's configured and actual count with `FINAL_CHAPTER_TARGETS`. Keep CAPM counts, mock-exam checks, metadata checks, content-length checks, duplicate checks, and front-end assertions unchanged.

- [ ] **Step 3: Run all relevant automated verification**

  Run each command separately and stop on the first failure:

  ```powershell
  node _private/test-pmp-2026-refresh-contract.mjs
  node _private/test-pmp-2026-data-segment.mjs
  node _private/test-pmp-2026-coverage.mjs
  node _private/test-pmp-question-quality-cli.mjs
  node _private/build-pmp-2026-coverage.mjs --check
  node _private/verify-pmp-2026-refresh.mjs --require-report
  node _private/verify-pmp-capm-phase.mjs
  node _private/verify-pmp-question-quality.mjs --practice-only
  node _private/verify-question-bank-structure.mjs
  node _private/verify-project-bank-scale.mjs
  node _private/validate-question-bank.mjs --ci
  node _private/verify-question-bank-seo.mjs
  node _private/verify-geo-source-pages.mjs
  git diff --check
  ```

  Expected results:

  - Contract and data-segment tests print PASS.
  - Focused refresh verifier prints PASS with 230 refreshed questions.
  - PMP/CAPM phase verifier passes all question records.
  - The quality CLI regression proves the default still checks the complete PMP bank, while explicit `--practice-only` passes all 1,069 practice questions.
  - Bank structure and 1,069-question scale checks pass.
  - CI validator exits `0` with no duplicate-text or mojibake failure.
  - Question-bank SEO and Phase 1 GEO checks remain PASS.
  - `git diff --check` produces no output.

- [ ] **Step 4: Inspect regenerated general quality reports**

  Confirm `reports/question-bank-report.json` declares 2,249 total records (1,069 PMP practice + 180 PMP exam + 1,000 CAPM practice), contains no errors, no duplicate-text warning, and no mojibake warning. Confirm the Markdown summary matches the JSON status and counts.

- [ ] **Step 5: Commit validator and generated report updates**

  ```powershell
  git add _private/verify-project-bank-scale.mjs reports/question-bank-report.json reports/question-bank-report.md
  git commit -m "test: align PMP scale checks with 2026 refresh"
  ```

### Task 9: Final content sampling and scope audit

**Files:**
- Review: `_private/pmp-2026-refresh/people.mjs`
- Review: `_private/pmp-2026-refresh/process.mjs`
- Review: `_private/pmp-2026-refresh/business-environment.mjs`
- Review: `data.js`
- Review: all files changed since the approved design commit `31c2ce9`

**Interfaces:**
- Consumes: completed implementation and fresh verification output.
- Produces: a documented final review result; no new runtime code.

- [ ] **Step 1: Print a 27-cell deterministic review sample**

  Use a Node one-liner that selects the first refreshed question for every domain × approach × difficulty combination and prints its position, stem, choices, correct choice, explanation, and chapter. Confirm all 27 combinations exist.

  ```powershell
  node --input-type=module -e "import { refreshQuestions } from './_private/pmp-2026-refresh/index.mjs'; for(const domain of ['People','Process','Business Environment']) for(const approach of ['Predictive','Agile','Hybrid']) for(const difficulty of ['Easy','Medium','Hard']) { const i=refreshQuestions.findIndex(q=>q.domain===domain&&q.approach===approach&&q.difficulty===difficulty); if(i<0) throw new Error('Missing '+[domain,approach,difficulty].join('/')); const q=refreshQuestions[i]; console.log(JSON.stringify({position:840+i,domain,approach,difficulty,text:q.text,choices:q.choices,correct:q.correct,explanation:q.explanation,chapterId:q.chapterId},null,2)); }"
  ```

- [ ] **Step 2: Review answer defensibility and language**

  For every printed sample, confirm the correct action follows from a stated clue, alternatives are plausible but weaker, the explanation rejects those alternatives, wording is natural English, and no external rule is presented without being part of the scenario. Correct the source record, rerun synchronization, rebuild coverage, and rerun all focused verification for any failed sample.

- [ ] **Step 3: Audit file scope**

  Run:

  ```powershell
  git diff --name-only 31c2ce9..HEAD
  git status --short
  ```

  Expected changed paths are limited to the design amendment, this plan, `_private/pmp-2026-refresh/`, the three new refresh scripts/tests, `data.js`, `_private/verify-project-bank-scale.mjs`, `_private/reports/pmp-2026-eco-coverage.*`, and `reports/question-bank-report.*`. No `guides/`, `programs/`, `styles.css`, `sitemap.xml`, CAPM source file, or unrelated user document appears.

- [ ] **Step 4: Run final verification from a clean command sequence**

  Repeat the Task 8 Step 3 command list after all review corrections, including the coverage unit test, quality CLI regression, deterministic coverage `--check`, and explicit quality `--practice-only` run. Record exact PASS summaries and current `git status --short`. Do not state completion if any required command exits non-zero or the worktree contains an unexplained file.

- [ ] **Step 5: Commit review corrections only if needed**

  If sampling required content corrections, stage only the corrected domain source, synchronized `data.js`, rebuilt coverage outputs, and regenerated general reports:

  ```powershell
  git add _private/pmp-2026-refresh/people.mjs _private/pmp-2026-refresh/process.mjs _private/pmp-2026-refresh/business-environment.mjs data.js _private/reports/pmp-2026-eco-coverage.json _private/reports/pmp-2026-eco-coverage.md reports/question-bank-report.json reports/question-bank-report.md
  git commit -m "fix: refine PMP 2026 review samples"
  ```
