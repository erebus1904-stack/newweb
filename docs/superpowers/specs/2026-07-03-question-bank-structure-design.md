# Question Bank Structure Design

**Goal:** Reorganize PassGrid question-bank navigation around two top-level exams, PMP and CAPM, with separate Practice Bank and Exam Bank areas under each exam.

## Approved rules

- The top level has exactly two question banks: PMP and CAPM.
- Each exam bank has two sections: Practice Bank and Exam Bank.
- Current questions are all Practice Bank questions.
- Exam Bank sections exist as empty/not-yet-available areas and must not reuse practice questions.
- Chapter mapping applies only to Practice Bank.
- PMP Practice Bank must be organized by PMBOK/textbook chapter.
- PMP Exam Bank is not chapter-based.
- CAPM Practice Bank can remain organized by CAPM official domains for now.
- CAPM Exam Bank is not chapter-based.

## Implementation scope

- Add explicit bank metadata to the catalog so counts and labels distinguish practice from exam.
- Make PMP question listing use PMBOK chapter targets as the primary practice outline.
- Ensure all PMP practice questions have a valid `chapterId` that belongs to `examConfig.chapterTargets`.
- Add Exam Bank placeholders for PMP and CAPM without linking them to `drill.html`.
- Keep `domain` fields for reporting, statistics, and explanations.
- Keep drill filtering by `chapter=` for PMP practice.
- Keep CAPM practice domain filtering unchanged.

## Acceptance checks

- `practice.html` shows PMP and CAPM as top-level choices with Practice Bank and Exam Bank sections.
- `pmp-questions.html` shows chapter-based PMP practice entries, not People/Process/Business Environment as the main entry list.
- `capm-questions.html` continues showing CAPM practice domains.
- `drill.html?exam=pmp&chapter=...` works for each PMP chapter target.
- No current question is labeled as an exam-bank question.
- Automated checks verify PMP practice chapter coverage.
