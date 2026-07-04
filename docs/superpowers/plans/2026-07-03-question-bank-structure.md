# Question Bank Structure Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the approved PMP/CAPM → Practice Bank/Exam Bank → practice outline structure without treating current practice questions as exam questions.

**Architecture:** Keep the static site architecture. Use `data.js` as the source of truth for bank metadata and question fields, `script.js` for rendering bank cards/outlines, and existing HTML pages for static fallback. Add targeted validation in `_private` so the structure does not regress.

**Tech Stack:** Static HTML, vanilla JavaScript, CSS, Node-based validation scripts.

---

### Task 1: Add bank metadata and validation

**Files:**
- Modify: `data.js`
- Create: `_private/verify-question-bank-structure.mjs`

- [ ] Add `bankConfig` metadata to each exam catalog item:
  - PMP: `practiceQuestionCount: 839`, `examQuestionCount: 0`, `practiceOutlineType: "chapters"`, `examAvailable: false`.
  - CAPM: `practiceQuestionCount: 1000`, `examQuestionCount: 0`, `practiceOutlineType: "domains"`, `examAvailable: false`.
- [ ] Ensure each current question has `bankType: "practice"` or derive it in validation when absent. Do not create any `bankType: "exam"` records.
- [ ] Write `_private/verify-question-bank-structure.mjs` to assert:
  - only `pmp` and `capm` are visible exams;
  - each exam has `bankConfig.practiceQuestionCount === questions.length`;
  - `bankConfig.examQuestionCount === 0`;
  - no question has `bankType === "exam"`;
  - every PMP question has a valid `chapterId` from `examConfig.chapterTargets`;
  - every PMP chapter target has at least one question.
- [ ] Run `node _private\verify-question-bank-structure.mjs` and expect PASS.

### Task 2: Render the top-level PMP/CAPM bank cards with Practice and Exam sections

**Files:**
- Modify: `script.js`
- Modify static fallback in `practice.html`

- [ ] Update `renderCatalog()` so each exam card displays:
  - exam title (`PMP Question Bank`, `CAPM Question Bank`);
  - a Practice Bank block with current count and a link to `pmp-questions.html` or `capm-questions.html`;
  - an Exam Bank block marked `Not available yet` with `0 exam questions` and no drill link.
- [ ] Keep the whole card clickable only through the Practice Bank link, or make the Practice Bank block the primary link.
- [ ] Update the static fallback cards in `practice.html` to match this structure.

### Task 3: Make PMP practice outline chapter-first

**Files:**
- Modify: `script.js`
- Modify static fallback in `pmp-questions.html`

- [ ] Update `renderDomainOutline(exam)` to choose outline source by `exam.examConfig.practiceOutlineType` or `exam.bankConfig.practiceOutlineType`:
  - PMP renders `chapterTargets`.
  - CAPM renders `domainTargets`.
- [ ] For chapter cards, link to `drill.html?exam=pmp&chapter=<chapterId>`.
- [ ] Show the chapter title, chapter note, and actual question count per chapter.
- [ ] Keep CAPM domain rendering unchanged.
- [ ] Update `pmp-questions.html` fallback to chapter cards.

### Task 4: Keep drill behavior practice-only and chapter-aware

**Files:**
- Modify: `script.js`
- Modify: `drill.html` text if needed

- [ ] Ensure `getActiveQuestions()` excludes non-practice questions if future exam records are added.
- [ ] Keep `chapter=` filtering active for PMP practice.
- [ ] Keep `domain=` filtering active for CAPM practice and backward-compatible PMP links.
- [ ] Update breadcrumb text to show `Practice Bank` when `chapter=` or `domain=` is used.

### Task 5: Verification

**Files:**
- Existing validation scripts

- [ ] Run `node --check script.js`.
- [ ] Run `node --check nav.js`.
- [ ] Run `node _private\verify-question-bank-structure.mjs`.
- [ ] Run `node _private\validate-question-bank.mjs`.
- [ ] Run `node _private\verify-project-bank-scale.mjs`.
- [ ] Run `node _private\verify-site-seo-basics.mjs`.
- [ ] Run `node _private\verify-pmp-focus.mjs`.
