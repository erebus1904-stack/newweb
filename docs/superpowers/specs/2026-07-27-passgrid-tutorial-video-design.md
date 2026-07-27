# PassGrid Website Tutorial Video Design

**Date:** 2026-07-27

**Goal:** Produce an English, 16:9 website tutorial video that demonstrates PassGrid's free PMP practice workflow and its copyable AI study prompts.

## Audience

- PMP candidates looking for free practice questions.
- Learners who want a more structured way to review missed questions.
- People who already use an AI assistant and need useful prompts for study planning and mistake review.

## Deliverable

- One 1920x1080 HyperFrames project.
- Target duration: 55-65 seconds.
- English narration with synchronized English captions.
- Real website capture as the primary visual source.
- A Studio preview is delivered before any final MP4 render.

## Creative Approach

Use a hybrid product-tutorial format:

1. Record the real PassGrid interface and interactions.
2. Add restrained cursor emphasis, local zooms, blue outlines, labels, and transitions.
3. Recreate only the external AI-tool step in a neutral, unbranded interface.
4. Keep the video instructional. Avoid stock footage, generic productivity imagery, fabricated analytics, and unsupported claims.

## Visual Identity

- Canvas: white and soft off-white surfaces.
- Primary text: `#081636`.
- Primary accent: `#1f3b82`.
- Secondary accent: `#3157bd`.
- Soft accent surface: `#edf3ff`.
- Font: Inter, with Segoe UI as fallback.
- Motion: calm, deliberate, and product-focused.
- Corners, spacing, and controls should visually match the live PassGrid interface.
- Do not introduce gradients, decorative blobs, or unrelated illustration styles.

## Storyboard

### Beat 1: Start Free

**Timing:** 0-5 seconds

Show the PassGrid home page and brand. Move quickly to the free-practice entry point.

On-screen message:

> Free PMP and CAPM practice

Purpose: Establish the product and remove the registration concern immediately.

### Beat 2: Choose a Practice Path

**Timing:** 5-18 seconds

Open the PMP practice page. Show the 1,069-question practice-bank count, then select a domain or chapter and enter a practice session.

On-screen messages:

> 1,069 PMP scenario questions

> No account required

Purpose: Demonstrate that the practice bank is free, substantial, and directly usable.

### Beat 3: Answer and Review

**Timing:** 18-30 seconds

Answer one real PassGrid question. Show the immediate explanation, then highlight the local progress and missed-question review behavior.

On-screen messages:

> Review the explanation immediately

> Progress and missed questions stay in your browser

Purpose: Show the complete learning loop rather than only the number of questions.

### Beat 4: Open AI Prompts

**Timing:** 30-42 seconds

Navigate to the PMP AI prompts hub and open the mistake-review prompts page. Highlight the prompt categories and the first mistake-classification prompt.

On-screen message:

> Prompts built around real study problems

Purpose: Position the prompts as a study layer connected to practice, not as a generic prompt directory.

### Beat 5: Copy and Use

**Timing:** 42-52 seconds

Click the real `Copy prompt` button. Transition to a neutral AI-tool interface and paste the prompt. Show a short representative response structure with cause labels, missed signals, and next-practice targets.

On-screen messages:

> Copy

> Paste into the AI tool you already use

Purpose: Make the handoff from PassGrid to an external AI tool explicit.

### Beat 6: Close the Loop

**Timing:** 52-60 seconds

Show practice and AI prompts side by side, then finish with the PassGrid name and URL.

On-screen messages:

> Practice free. Review smarter.

> starrycesium.com

Purpose: End with one clear study workflow and one clear destination.

## Narration

> Start practicing for the PMP exam without creating an account. Choose a domain, answer scenario questions, and review the explanation immediately. PassGrid keeps your progress and missed questions in your browser, so you can return to weak areas later. When you need deeper analysis, open the AI prompt library, choose a study or mistake-review prompt, copy it, and paste it into the AI tool you already use. Free practice questions and structured AI prompts, in one study workflow.

The final recording may adjust pauses and contractions for natural delivery, but it must preserve these claims and this sequence.

## Audio

- Use a clear, neutral English voice.
- Generate word-level timing for captions from the final narration audio.
- Use subtle interface click and copy-confirmation sounds.
- Do not add third-party music unless its license is verified and recorded.
- Narration remains intelligible at normal playback volume.

## Interaction Capture

- Use the live PassGrid site when it matches the verified local content.
- Capture the actual navigation, question selection, answer, explanation, prompt page, and copy action.
- Do not expose browser bookmarks, account details, analytics, notifications, or unrelated tabs.
- Use a sample question owned by PassGrid.
- The external AI interface must be neutral and must not imitate a named product closely enough to imply endorsement.

## Error Handling

- If the live site differs from the verified local content, stop capture and reconcile the difference before building the scene.
- If the selected practice question wraps poorly at 1920x1080, choose another owned question rather than hiding the text.
- If TTS timing pushes the video outside 55-65 seconds, adjust narration pacing or remove redundant words without removing a workflow step.
- If a live interaction is unreliable, use a deterministic captured state from the same page and clearly preserve the real UI.

## Validation

- Run HyperFrames lint, validate, inspect, and animation-map checks.
- Review hero frames and transitions at desktop resolution.
- Confirm captions do not cover questions, answers, buttons, or prompt text.
- Confirm every multi-scene transition is intentional and no scene appears fully formed.
- Confirm the PassGrid URL remains clearly visible for at least three seconds.
- Confirm the practice and AI-prompt workflows are understandable without audio.
- Deliver the Studio project URL for review before rendering MP4.

## Acceptance Criteria

- Resolution is 1920x1080.
- Duration is between 55 and 65 seconds.
- Narration and captions are English.
- The video visibly demonstrates free practice, answering a question, reviewing an explanation, opening AI prompts, copying a prompt, and pasting it into a neutral AI tool.
- Claims match the current product: 1,069 PMP practice questions, no account required for practice, local browser progress, and copyable AI prompts.
- No unrelated private information appears.
- HyperFrames lint and validation complete with zero errors.
