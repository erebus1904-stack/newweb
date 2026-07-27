# PassGrid Website Tutorial Video Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a 1920x1080, 55-65 second English product tutorial that demonstrates PassGrid's free PMP practice workflow and copyable AI study prompts.

**Architecture:** Create a self-contained HyperFrames project under `videos/passgrid-tutorial/`. Real PassGrid pages and interaction states provide the product visuals; six focused HTML compositions, one caption composition, and one transition composition assemble those visuals around a single TTS narration timeline. The external AI step is a neutral local composition so the video does not imply endorsement by another product.

**Tech Stack:** HyperFrames CLI and runtime, HTML/CSS, GSAP, Node.js 22+, FFmpeg/ffprobe, Kokoro TTS, Whisper transcription, real PassGrid website captures.

## Global Constraints

- Resolution: exactly `1920x1080`, 16:9.
- Duration: between 55 and 65 seconds.
- Narration and captions: English.
- Primary visuals: real PassGrid website captures and real interaction states.
- Required claims: `1,069 PMP scenario questions`, `No account required`, local browser progress, and copyable AI prompts.
- Required workflow: open practice, choose a path, answer a question, review the explanation, open AI prompts, copy a prompt, and paste it into a neutral AI interface.
- Brand colors: `#081636`, `#1f3b82`, `#3157bd`, `#edf3ff`, white, and soft off-white.
- Font: Inter with Segoe UI fallback.
- Do not use gradients, decorative blobs, stock footage, fabricated analytics, unsupported claims, third-party branding, or unlicensed music.
- Do not expose bookmarks, accounts, analytics, notifications, or unrelated browser tabs.
- Every scene must animate into place; use transitions between all six beats.
- Captions must not cover questions, answers, buttons, explanations, or prompt text.
- `starrycesium.com` must remain readable for at least three seconds.
- Deliver a HyperFrames Studio preview before rendering any MP4.
- Do not run `hyperframes render` unless the user explicitly requests the final MP4 after reviewing the preview.
- Do not modify `docs/seo/passgrid-15-day-promotion-plan.md`.

---

## File Map

All new production files live under `videos/passgrid-tutorial/`.

- `.gitignore`: ignores HyperFrames caches, snapshots, previews, and rendered outputs.
- `DESIGN.md`: capture-derived visual system, motion rules, and composition constraints.
- `CAPTURE-NOTES.md`: records source URLs, capture states, dates, viewport, and product-claim checks.
- `SCRIPT.md`: readable narration, on-screen copy, pronunciation notes, and claim mapping.
- `STORYBOARD.md`: exact six-beat timing, assets, transitions, audio cues, and caption-safe areas.
- `narration.txt`: TTS input using pronunciation-friendly wording.
- `narration.wav`: final English narration.
- `transcript.json`: word-level timing generated from `narration.wav`.
- `index.html`: root HyperFrames composition containing ordered scene, caption, transition, and audio tracks.
- `capture/home/`: full-page home-page capture output.
- `capture/practice/`: full-page PMP practice capture output.
- `capture/prompts/`: full-page AI prompt capture output.
- `capture/product-states/*.png`: clean 1920x1080 captures of the exact interactive states used in the video.
- `assets/sfx/click.wav`: short synthetic UI click.
- `assets/sfx/copy.wav`: short synthetic copy-confirmation tone.
- `styles/shared.css`: brand tokens, product frame, callouts, cursor, caption safe area, and animation-ready base states.
- `scripts/generate-sfx.mjs`: deterministic PCM WAV generator.
- `scripts/generate-sfx.test.mjs`: validates duration, sample rate, channel count, and non-silent output.
- `compositions/beat-1-start-free.html`: home page and free-practice entry.
- `compositions/beat-2-practice-path.html`: PMP question count and practice-path selection.
- `compositions/beat-3-answer-review.html`: answer, explanation, progress, and missed-question review.
- `compositions/beat-4-ai-prompts.html`: AI prompts hub and mistake-review prompt.
- `compositions/beat-5-copy-use.html`: real copy action followed by a neutral AI interface.
- `compositions/beat-6-close-loop.html`: split workflow summary and final URL.
- `compositions/captions.html`: transcript-driven English caption groups.
- `compositions/transitions.html`: full-frame transition panels at the five scene boundaries.

## Shared Composition Contract

Every sub-composition must:

1. Declare one root element with `data-composition-id`, `data-width="1920"`, and `data-height="1080"`.
2. Import `../styles/shared.css`.
3. Register one paused GSAP timeline in `window.__timelines[compositionId]`.
4. Render at `1920x1080`.
5. Keep product media inside `.product-stage`, bounded to `left: 80px`, `right: 80px`, `top: 64px`, and `bottom: 168px`.
6. Keep captions inside the reserved lower strip from `y=928` to `y=1034`.
7. Build the fully visible hero layout in CSS first, then animate entrances with `gsap.from()`.
8. Avoid tweens on `display`, `visibility`, layout dimensions, and text content. Captions may use `tl.set(..., { visibility: "hidden" })` only for their deterministic hard kill.

The root composition uses these stable IDs:

```html
<div id="beat-1" data-composition-id="beat-1-start-free" data-composition-src="compositions/beat-1-start-free.html" data-start="0" data-duration="5" data-track-index="1"></div>
<div id="beat-2" data-composition-id="beat-2-practice-path" data-composition-src="compositions/beat-2-practice-path.html" data-start="5" data-duration="13" data-track-index="1"></div>
<div id="beat-3" data-composition-id="beat-3-answer-review" data-composition-src="compositions/beat-3-answer-review.html" data-start="18" data-duration="12" data-track-index="1"></div>
<div id="beat-4" data-composition-id="beat-4-ai-prompts" data-composition-src="compositions/beat-4-ai-prompts.html" data-start="30" data-duration="12" data-track-index="1"></div>
<div id="beat-5" data-composition-id="beat-5-copy-use" data-composition-src="compositions/beat-5-copy-use.html" data-start="42" data-duration="10" data-track-index="1"></div>
<div id="beat-6" data-composition-id="beat-6-close-loop" data-composition-src="compositions/beat-6-close-loop.html" data-start="52" data-duration="8" data-track-index="1"></div>
<div id="captions" data-composition-id="captions" data-composition-src="compositions/captions.html" data-start="0" data-duration="60" data-track-index="8"></div>
<div id="transitions" data-composition-id="transitions" data-composition-src="compositions/transitions.html" data-start="0" data-duration="60" data-track-index="7"></div>
```

---

### Task 1: Verify Toolchain and Scaffold the Video Project

**Files:**
- Create: `videos/passgrid-tutorial/`
- Create: `videos/passgrid-tutorial/.gitignore`
- Inspect: generated files under `videos/passgrid-tutorial/`

**Interfaces:**
- Consumes: Node.js 22+, FFmpeg, and the HyperFrames CLI.
- Produces: a runnable HyperFrames project directory for every later task.

- [ ] **Step 1: Verify the required executables**

Run from the repository root:

```powershell
node --version
ffmpeg -version
ffprobe -version
npx hyperframes doctor
```

Expected: Node reports version 22 or newer; FFmpeg and ffprobe return version information; HyperFrames doctor reports no blocking failure.

- [ ] **Step 2: Scaffold the project**

```powershell
npx hyperframes init videos/passgrid-tutorial --non-interactive
```

Expected: `videos/passgrid-tutorial/index.html` and HyperFrames project support files are created.

- [ ] **Step 3: Add generated-output exclusions**

Create `videos/passgrid-tutorial/.gitignore` with exactly:

```gitignore
.hyperframes/
renders/
snapshots/
preview/
*.mp4
```

- [ ] **Step 4: Confirm the scaffold is discoverable**

```powershell
npx hyperframes lint videos/passgrid-tutorial
```

Expected: the generated project is found. Generated-demo warnings are acceptable at this step; parser or missing-project errors are not.

- [ ] **Step 5: Commit the scaffold**

```powershell
git add videos/passgrid-tutorial
git commit -m "chore: scaffold PassGrid tutorial video"
```

---

### Task 2: Capture the Real PassGrid Product States

**Files:**
- Create: `videos/passgrid-tutorial/capture/home/`
- Create: `videos/passgrid-tutorial/capture/practice/`
- Create: `videos/passgrid-tutorial/capture/prompts/`
- Create: `videos/passgrid-tutorial/capture/product-states/home.png`
- Create: `videos/passgrid-tutorial/capture/product-states/practice-index.png`
- Create: `videos/passgrid-tutorial/capture/product-states/practice-question.png`
- Create: `videos/passgrid-tutorial/capture/product-states/practice-explanation.png`
- Create: `videos/passgrid-tutorial/capture/product-states/missed-review.png`
- Create: `videos/passgrid-tutorial/capture/product-states/prompts-hub.png`
- Create: `videos/passgrid-tutorial/capture/product-states/mistake-prompt.png`
- Create: `videos/passgrid-tutorial/capture/product-states/prompt-copied.png`
- Create: `videos/passgrid-tutorial/CAPTURE-NOTES.md`

**Interfaces:**
- Consumes: the live pages at `https://starrycesium.com/`, `/pmp-questions.html`, `/pmp-ai-prompts.html`, and `/prompts/pmp-mistake-review-prompts.html`.
- Produces: clean real-product screenshots at `1920x1080` and a capture audit used by all scene tasks.

- [ ] **Step 1: Generate full-page capture references**

```powershell
npx hyperframes capture https://starrycesium.com/ -o videos/passgrid-tutorial/capture/home
npx hyperframes capture https://starrycesium.com/pmp-questions.html -o videos/passgrid-tutorial/capture/practice
npx hyperframes capture https://starrycesium.com/prompts/pmp-mistake-review-prompts.html -o videos/passgrid-tutorial/capture/prompts
```

Expected: each directory contains a screenshot plus extracted design information.

- [ ] **Step 2: Capture the clean home and practice-index states**

Use the in-app browser or connected Chrome at `1920x1080`:

1. Open `https://starrycesium.com/`, dismiss no UI, and save the viewport as `capture/product-states/home.png`.
2. Open `https://starrycesium.com/pmp-questions.html`, scroll so the `1,069` question count and first practice choices are fully visible, and save `capture/product-states/practice-index.png`.

Expected: no bookmarks bar, account avatar, notification, analytics panel, or unrelated tab appears.

- [ ] **Step 3: Capture a real question and its explanation**

From the PMP practice page:

1. Enter the first available practice path.
2. Choose an owned question whose stem and all answer choices fit cleanly at `1920x1080`.
3. Save the unanswered state as `capture/product-states/practice-question.png`.
4. Select one answer to reveal the real result and explanation.
5. Save the result as `capture/product-states/practice-explanation.png`.
6. Open the page's missed-question or progress view and save it as `capture/product-states/missed-review.png`.

Expected: the captures show the same real question before and after answering, and the explanation text is legible.

- [ ] **Step 4: Capture the prompts and copy states**

1. Open `https://starrycesium.com/pmp-ai-prompts.html` and save a viewport containing the prompt categories as `capture/product-states/prompts-hub.png`.
2. Open `https://starrycesium.com/prompts/pmp-mistake-review-prompts.html`.
3. Position the first mistake-classification prompt and its copy button fully in view; save `capture/product-states/mistake-prompt.png`.
4. Click the actual copy button and immediately save the confirmation state as `capture/product-states/prompt-copied.png`.

Expected: the copied state visibly differs from the pre-copy state.

- [ ] **Step 5: Record the capture audit**

Create `CAPTURE-NOTES.md` with:

```markdown
# Capture Notes

- Capture date: 2026-07-27
- Viewport: 1920x1080
- Home: https://starrycesium.com/
- Practice: https://starrycesium.com/pmp-questions.html
- Prompts hub: https://starrycesium.com/pmp-ai-prompts.html
- Mistake prompts: https://starrycesium.com/prompts/pmp-mistake-review-prompts.html
- Verified practice count: 1,069 PMP scenario questions
- Verified access model: no account required for practice
- Verified storage model: progress and missed questions remain in the local browser
- Verified prompt action: the mistake-review prompt has a working copy control
- Privacy check: captures contain no account, analytics, notification, bookmark, or unrelated-tab data
```

- [ ] **Step 6: Verify capture dimensions**

Use ImageMagick if installed:

```powershell
magick identify videos/passgrid-tutorial/capture/product-states/*.png
```

If ImageMagick is unavailable, inspect the same files through the image viewer and confirm each viewport capture is `1920x1080`.

- [ ] **Step 7: Commit the capture package**

```powershell
git add videos/passgrid-tutorial/capture videos/passgrid-tutorial/CAPTURE-NOTES.md
git commit -m "chore: capture PassGrid tutorial states"
```

---

### Task 3: Lock the Capture-Derived Design and Storyboard

**Files:**
- Create: `videos/passgrid-tutorial/DESIGN.md`
- Create: `videos/passgrid-tutorial/SCRIPT.md`
- Create: `videos/passgrid-tutorial/STORYBOARD.md`
- Create: `videos/passgrid-tutorial/narration.txt`

**Interfaces:**
- Consumes: `CAPTURE-NOTES.md`, the capture outputs, and the approved design specification.
- Produces: exact visual, copy, and timing rules used by every composition.

- [ ] **Step 1: Write `DESIGN.md`**

Keep it under 100 lines and use exactly these six sections:

```markdown
# PassGrid Tutorial Design

## 1. Visual Style
## 2. Color Palette
## 3. Typography
## 4. Composition
## 5. Motion Language
## 6. Image Treatment
```

Record the exact palette, Inter typography, `80px` horizontal stage margin, `64px` top margin, `168px` bottom reserve, 8px-or-smaller radii, and the rule that real captures remain crisp and readable.

- [ ] **Step 2: Write `SCRIPT.md`**

Use this narration and claim mapping:

```markdown
# Script

## Narration

Start practicing for the PMP exam without creating an account. Choose a domain, answer scenario questions, and review the explanation immediately. PassGrid keeps your progress and missed questions in your browser, so you can return to weak areas later. When you need deeper analysis, open the AI prompt library, choose a study or mistake-review prompt, copy it, and paste it into the AI tool you already use. Free practice questions and structured AI prompts, in one study workflow.

## Pronunciation

- Narrate "PMP" as "P M P".
- Narrate "PassGrid" as "Pass Grid".
- Narrate the final URL as "starry cesium dot com".

## On-Screen Copy

- Free PMP and CAPM practice
- 1,069 PMP scenario questions
- No account required
- Review the explanation immediately
- Progress and missed questions stay in your browser
- Prompts built around real study problems
- Copy
- Paste into the AI tool you already use
- Practice free. Review smarter.
- starrycesium.com
```

- [ ] **Step 3: Write the TTS input**

Create `narration.txt` with:

```text
Start practicing for the P M P exam without creating an account.

Choose a domain, answer scenario questions, and review the explanation immediately.

Pass Grid keeps your progress and missed questions in your browser, so you can return to weak areas later.

When you need deeper analysis, open the A I prompt library, choose a study or mistake-review prompt, copy it, and paste it into the A I tool you already use.

Free practice questions and structured A I prompts, in one study workflow.
```

- [ ] **Step 4: Write `STORYBOARD.md`**

Define six beats with these planning windows:

| Beat | Planning window | Required visual | Transition out |
|---|---:|---|---|
| 1 | 0.0-5.0s | Home and free-practice entry | Navy panel wipe |
| 2 | 5.0-18.0s | 1,069 count and practice path | Soft-blue panel wipe |
| 3 | 18.0-30.0s | Answer, explanation, local review | Navy panel wipe |
| 4 | 30.0-42.0s | Prompts hub and mistake prompt | Soft-blue panel wipe |
| 5 | 42.0-52.0s | Copy action and neutral AI paste | Navy panel wipe |
| 6 | 52.0-60.0s | Practice plus prompts, brand, URL | Fade to white at end |

Also record:

- Product media safe area: `x=80..1840`, `y=64..912`.
- Caption safe area: `x=180..1740`, `y=928..1034`.
- CTA URL hold: `56.5..60.0s`.
- Audio cues: click at path selection and answer selection; copy tone at the real copy action.
- No music track.
- Final timings are reconciled to `transcript.json` while preserving 55-65 seconds.

- [ ] **Step 5: Verify document consistency**

```powershell
Select-String -Path videos/passgrid-tutorial/DESIGN.md,videos/passgrid-tutorial/SCRIPT.md,videos/passgrid-tutorial/STORYBOARD.md -Pattern '1,069','No account required','starrycesium.com'
(Get-Content videos/passgrid-tutorial/DESIGN.md).Count
```

Expected: required claims are found, and `DESIGN.md` has no more than 100 lines.

- [ ] **Step 6: Commit the creative source documents**

```powershell
git add videos/passgrid-tutorial/DESIGN.md videos/passgrid-tutorial/SCRIPT.md videos/passgrid-tutorial/STORYBOARD.md videos/passgrid-tutorial/narration.txt
git commit -m "docs: define PassGrid tutorial storyboard"
```

---

### Task 4: Generate Narration and Word-Level Timing

**Files:**
- Create: `videos/passgrid-tutorial/audio/audition-af-nova.wav`
- Create: `videos/passgrid-tutorial/audio/audition-bf-emma.wav`
- Create: `videos/passgrid-tutorial/audio/audition-am-adam.wav`
- Create: `videos/passgrid-tutorial/narration.wav`
- Create: `videos/passgrid-tutorial/transcript.json`
- Modify: `videos/passgrid-tutorial/STORYBOARD.md`

**Interfaces:**
- Consumes: `narration.txt`.
- Produces: one final narration file and Whisper word timestamps that drive captions and scene alignment.

- [ ] **Step 1: Generate three short voice auditions**

Run inside `videos/passgrid-tutorial/`:

```powershell
npx hyperframes tts "Start practicing for the P M P exam without creating an account." --voice af_nova --output audio/audition-af-nova.wav
npx hyperframes tts "Start practicing for the P M P exam without creating an account." --voice bf_emma --output audio/audition-bf-emma.wav
npx hyperframes tts "Start practicing for the P M P exam without creating an account." --voice am_adam --output audio/audition-am-adam.wav
```

Expected: three intelligible English WAV files with no clipped first or last word.

- [ ] **Step 2: Select the production voice**

Listen to all three files. Use `bf_emma` unless it contains a pronunciation defect, clipping, or unstable volume. Record the audition result in `STORYBOARD.md`; if `bf_emma` fails one of those objective checks, use `af_nova` and record the failed criterion.

- [ ] **Step 3: Generate the full narration**

Primary command:

```powershell
npx hyperframes tts narration.txt --voice bf_emma --speed 0.82 --output narration.wav
```

Fallback only if the documented `bf_emma` defect occurred:

```powershell
npx hyperframes tts narration.txt --voice af_nova --speed 0.82 --output narration.wav
```

- [ ] **Step 4: Measure the narration**

```powershell
ffprobe -v error -show_entries format=duration -of default=noprint_wrappers=1:nokey=1 narration.wav
```

Expected: narration is intelligible and leaves enough room for a 55-65 second visual timeline. If the WAV exceeds 60 seconds, regenerate at `--speed 0.9`. If it is shorter than 38 seconds, regenerate at `--speed 0.74`.

- [ ] **Step 5: Generate word-level timing**

```powershell
npx hyperframes transcribe narration.wav --model small.en --language en
```

Expected: `transcript.json` contains English words with start and end times.

- [ ] **Step 6: Reconcile the storyboard**

Update each beat boundary in `STORYBOARD.md` to the nearest sentence or clause boundary from `transcript.json`. Keep the total timeline between 55 and 65 seconds by adding visual holds before the first sentence, between workflow sections, and after the final sentence. Preserve at least `3.0` seconds for the final URL.

- [ ] **Step 7: Validate audio and transcript**

```powershell
ffprobe -v error -show_entries stream=codec_name,sample_rate,channels -show_entries format=duration -of json narration.wav
Select-String -Path transcript.json -Pattern 'practicing','questions','prompts','workflow'
```

Expected: WAV metadata is readable and the transcript contains all four key words.

- [ ] **Step 8: Commit the narration package**

```powershell
git add videos/passgrid-tutorial/audio videos/passgrid-tutorial/narration.wav videos/passgrid-tutorial/transcript.json videos/passgrid-tutorial/STORYBOARD.md
git commit -m "feat: add tutorial narration and timing"
```

---

### Task 5: Build and Test the Synthetic Interface Sounds

**Files:**
- Create: `videos/passgrid-tutorial/scripts/generate-sfx.test.mjs`
- Create: `videos/passgrid-tutorial/scripts/generate-sfx.mjs`
- Create: `videos/passgrid-tutorial/assets/sfx/click.wav`
- Create: `videos/passgrid-tutorial/assets/sfx/copy.wav`

**Interfaces:**
- Produces: `writeMonoWav(filePath, samples, sampleRate)`, `makeClick(sampleRate)`, and `makeCopyTone(sampleRate)`.
- Later tasks consume the two generated WAV paths without changing their gain.

- [ ] **Step 1: Write the failing test**

Create `scripts/generate-sfx.test.mjs`:

```js
import assert from "node:assert/strict";
import test from "node:test";
import { makeClick, makeCopyTone } from "./generate-sfx.mjs";

test("click is short, mono, finite, and non-silent", () => {
  const samples = makeClick(48_000);
  assert.ok(samples.length >= 1_440 && samples.length <= 4_800);
  assert.ok(samples.every(Number.isFinite));
  assert.ok(Math.max(...samples.map(Math.abs)) > 0.08);
});

test("copy tone is longer than click and remains below clipping", () => {
  const click = makeClick(48_000);
  const copy = makeCopyTone(48_000);
  assert.ok(copy.length > click.length);
  assert.ok(Math.max(...copy.map(Math.abs)) <= 0.8);
});
```

- [ ] **Step 2: Run the test and verify failure**

```powershell
node --test scripts/generate-sfx.test.mjs
```

Expected: FAIL because `generate-sfx.mjs` does not exist.

- [ ] **Step 3: Implement the deterministic generator**

Create `scripts/generate-sfx.mjs` with:

```js
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

export function makeClick(sampleRate) {
  const length = Math.round(sampleRate * 0.055);
  return Array.from({ length }, (_, index) => {
    const time = index / sampleRate;
    const envelope = Math.exp(-time * 72);
    return Math.sin(2 * Math.PI * 1250 * time) * envelope * 0.36;
  });
}

export function makeCopyTone(sampleRate) {
  const length = Math.round(sampleRate * 0.18);
  return Array.from({ length }, (_, index) => {
    const time = index / sampleRate;
    const envelope = Math.sin(Math.PI * index / (length - 1)) ** 2;
    const first = Math.sin(2 * Math.PI * 660 * time);
    const second = Math.sin(2 * Math.PI * 880 * time);
    return (first * 0.22 + second * 0.16) * envelope;
  });
}

export function writeMonoWav(filePath, samples, sampleRate = 48_000) {
  const dataSize = samples.length * 2;
  const buffer = Buffer.alloc(44 + dataSize);
  buffer.write("RIFF", 0);
  buffer.writeUInt32LE(36 + dataSize, 4);
  buffer.write("WAVEfmt ", 8);
  buffer.writeUInt32LE(16, 16);
  buffer.writeUInt16LE(1, 20);
  buffer.writeUInt16LE(1, 22);
  buffer.writeUInt32LE(sampleRate, 24);
  buffer.writeUInt32LE(sampleRate * 2, 28);
  buffer.writeUInt16LE(2, 32);
  buffer.writeUInt16LE(16, 34);
  buffer.write("data", 36);
  buffer.writeUInt32LE(dataSize, 40);
  samples.forEach((sample, index) => {
    const clamped = Math.max(-1, Math.min(1, sample));
    buffer.writeInt16LE(Math.round(clamped * 32767), 44 + index * 2);
  });
  mkdirSync(dirname(filePath), { recursive: true });
  writeFileSync(filePath, buffer);
}

const currentFile = fileURLToPath(import.meta.url);
if (process.argv[1] && resolve(process.argv[1]) === resolve(currentFile)) {
  const output = resolve(dirname(currentFile), "../assets/sfx");
  writeMonoWav(resolve(output, "click.wav"), makeClick(48_000));
  writeMonoWav(resolve(output, "copy.wav"), makeCopyTone(48_000));
}
```

- [ ] **Step 4: Run the tests and generate the files**

```powershell
node --test scripts/generate-sfx.test.mjs
node scripts/generate-sfx.mjs
ffprobe -v error -show_entries format=duration -of csv=p=0 assets/sfx/click.wav
ffprobe -v error -show_entries format=duration -of csv=p=0 assets/sfx/copy.wav
```

Expected: both tests PASS; durations are approximately `0.055` and `0.180` seconds.

- [ ] **Step 5: Commit the sound assets**

```powershell
git add videos/passgrid-tutorial/scripts videos/passgrid-tutorial/assets/sfx
git commit -m "feat: add tutorial interface sounds"
```

---

### Task 6: Create the Shared Visual System and Root Timeline

**Files:**
- Create: `videos/passgrid-tutorial/styles/shared.css`
- Replace: `videos/passgrid-tutorial/index.html`
- Create: `videos/passgrid-tutorial/compositions/transitions.html`

**Interfaces:**
- Produces: CSS classes `.product-stage`, `.browser-frame`, `.callout`, `.cursor`, `.caption-safe`, `.cta-url`, and `.neutral-ai`.
- Produces: the root track order and stable composition IDs defined above.
- Consumes: final beat boundaries from `STORYBOARD.md`.

- [ ] **Step 1: Define the shared CSS contract**

Create `styles/shared.css` with:

```css
:root {
  --ink: #081636;
  --primary: #1f3b82;
  --accent: #3157bd;
  --soft: #edf3ff;
  --surface: #ffffff;
  --canvas: #f7f9fd;
  --line: #e8edf6;
  --muted: #6b7280;
}

* { box-sizing: border-box; }
html, body {
  width: 1920px;
  height: 1080px;
  margin: 0;
  overflow: hidden;
  background: var(--canvas);
  color: var(--ink);
  font-family: Inter, "Segoe UI", sans-serif;
  letter-spacing: 0;
}
.frame { position: relative; width: 1920px; height: 1080px; overflow: hidden; }
.product-stage { position: absolute; inset: 64px 80px 168px; overflow: hidden; }
.browser-frame {
  position: absolute;
  inset: 0;
  overflow: hidden;
  border: 1px solid var(--line);
  border-radius: 8px;
  background: var(--surface);
  box-shadow: 0 22px 60px rgba(8, 22, 54, 0.14);
}
.browser-frame img { width: 100%; height: 100%; object-fit: cover; object-position: top; }
.callout {
  position: absolute;
  padding: 14px 20px;
  border: 2px solid var(--accent);
  border-radius: 8px;
  background: var(--surface);
  color: var(--ink);
  font-size: 30px;
  font-weight: 700;
  line-height: 1.2;
}
.cursor { position: absolute; width: 28px; height: 36px; color: var(--ink); }
.caption-safe {
  position: absolute;
  left: 180px;
  right: 180px;
  top: 928px;
  height: 106px;
  display: grid;
  place-items: center;
  font-size: 48px;
  font-weight: 650;
  line-height: 1.22;
  text-align: center;
}
.cta-url { font-size: 58px; font-weight: 800; color: var(--primary); }
.neutral-ai { background: var(--surface); border: 1px solid var(--line); border-radius: 8px; }
```

- [ ] **Step 2: Replace the generated root composition**

Create `index.html` with this root structure. The final integration task may move audio cues and scene boundaries to the reconciled values recorded in `STORYBOARD.md`, but the root duration remains 60 seconds unless the narration check proves a change is required.

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>PassGrid Tutorial</title>
  <link rel="stylesheet" href="styles/shared.css">
</head>
<body>
  <div data-composition-id="passgrid-tutorial" data-width="1920" data-height="1080">
    <div id="beat-1" data-composition-id="beat-1-start-free" data-composition-src="compositions/beat-1-start-free.html" data-start="0" data-duration="5" data-track-index="1"></div>
    <div id="beat-2" data-composition-id="beat-2-practice-path" data-composition-src="compositions/beat-2-practice-path.html" data-start="5" data-duration="13" data-track-index="1"></div>
    <div id="beat-3" data-composition-id="beat-3-answer-review" data-composition-src="compositions/beat-3-answer-review.html" data-start="18" data-duration="12" data-track-index="1"></div>
    <div id="beat-4" data-composition-id="beat-4-ai-prompts" data-composition-src="compositions/beat-4-ai-prompts.html" data-start="30" data-duration="12" data-track-index="1"></div>
    <div id="beat-5" data-composition-id="beat-5-copy-use" data-composition-src="compositions/beat-5-copy-use.html" data-start="42" data-duration="10" data-track-index="1"></div>
    <div id="beat-6" data-composition-id="beat-6-close-loop" data-composition-src="compositions/beat-6-close-loop.html" data-start="52" data-duration="8" data-track-index="1"></div>
    <div id="transitions" data-composition-id="transitions" data-composition-src="compositions/transitions.html" data-start="0" data-duration="60" data-track-index="7"></div>
    <div id="captions" data-composition-id="captions" data-composition-src="compositions/captions.html" data-start="0" data-duration="60" data-track-index="8"></div>
    <audio id="narration" data-start="0.7" data-duration="auto" data-track-index="20" src="narration.wav" data-volume="1"></audio>
    <audio id="path-click" data-start="15.2" data-duration="auto" data-track-index="21" src="assets/sfx/click.wav" data-volume="0.32"></audio>
    <audio id="answer-click" data-start="21.4" data-duration="auto" data-track-index="22" src="assets/sfx/click.wav" data-volume="0.32"></audio>
    <audio id="copy-tone" data-start="44.4" data-duration="auto" data-track-index="23" src="assets/sfx/copy.wav" data-volume="0.26"></audio>
  </div>
  <script src="https://cdn.jsdelivr.net/npm/gsap@3.14.2/dist/gsap.min.js"></script>
  <script>
    window.__timelines = window.__timelines || {};
    window.__timelines["passgrid-tutorial"] = gsap.timeline({ paused: true });
  </script>
</body>
</html>
```

- [ ] **Step 3: Build the five boundary transitions**

Create `compositions/transitions.html`. At each boundary, animate a full-frame panel:

```js
gsap.fromTo(
  panel,
  { x: 1920 },
  { x: -1920, duration: 0.52, ease: "power2.inOut" }
);
```

Alternate `#1f3b82` and `#edf3ff`. Start each panel `0.26` seconds before its scene boundary so the midpoint covers the hard scene switch.

- [ ] **Step 4: Run structural lint**

```powershell
npx hyperframes lint .
```

Expected: zero parser, missing-composition, and invalid-track errors. Missing beat files are not acceptable; create minimal valid beat shells before running this command, each with only the shared contract root and no finished visual content.

- [ ] **Step 5: Commit the shared foundation**

```powershell
git add videos/passgrid-tutorial/index.html videos/passgrid-tutorial/styles videos/passgrid-tutorial/compositions/transitions.html videos/passgrid-tutorial/compositions/beat-*.html
git commit -m "feat: add tutorial timeline foundation"
```

---

### Task 7: Implement Beat 1, Start Free

**Files:**
- Modify: `videos/passgrid-tutorial/compositions/beat-1-start-free.html`
- Consume: `videos/passgrid-tutorial/capture/product-states/home.png`

**Interfaces:**
- Composition ID: `beat-1-start-free`.
- Produces: the opening brand view and a cursor move toward the free-practice entry.

- [ ] **Step 1: Build the scene**

Render:

- The real home capture inside `.browser-frame`.
- The message `Free PMP and CAPM practice`.
- A restrained blue outline around the free-practice entry.
- A cursor that enters from the lower right and settles on that entry.

Use `gsap.from()` so the browser frame starts at `opacity: 0`, `scale: 0.985`, and the message starts at `opacity: 0`, `y: 24`, then lands at the CSS hero layout.

- [ ] **Step 2: Verify the opening frame and hero frame**

```powershell
npx hyperframes snapshot . --at 0.1,2.5
```

Expected: `0.1s` is not a fully formed static scene; `2.5s` clearly shows PassGrid and the free-practice action.

- [ ] **Step 3: Commit Beat 1**

```powershell
git add videos/passgrid-tutorial/compositions/beat-1-start-free.html
git commit -m "feat: animate tutorial opening"
```

---

### Task 8: Implement Beat 2, Choose a Practice Path

**Files:**
- Modify: `videos/passgrid-tutorial/compositions/beat-2-practice-path.html`
- Consume: `videos/passgrid-tutorial/capture/product-states/practice-index.png`

**Interfaces:**
- Composition ID: `beat-2-practice-path`.
- Produces: the verified question-count claim, no-account claim, and path-selection interaction.

- [ ] **Step 1: Build the scene**

Render the real practice-index capture and animate:

1. A local zoom toward the `1,069` count.
2. The callout `1,069 PMP scenario questions`.
3. The callout `No account required`.
4. A cursor path to the first visible practice choice.
5. A click pulse synchronized to `assets/sfx/click.wav`.

Keep the two callouts on opposite sides of the count so neither covers page text.

- [ ] **Step 2: Verify the claim frame**

```powershell
npx hyperframes snapshot . --at 11.5
```

Expected: `1,069` and `No account required` are readable in one frame, and the real practice page remains identifiable.

- [ ] **Step 3: Commit Beat 2**

```powershell
git add videos/passgrid-tutorial/compositions/beat-2-practice-path.html
git commit -m "feat: show PassGrid practice path"
```

---

### Task 9: Implement Beat 3, Answer and Review

**Files:**
- Modify: `videos/passgrid-tutorial/compositions/beat-3-answer-review.html`
- Consume: `videos/passgrid-tutorial/capture/product-states/practice-question.png`
- Consume: `videos/passgrid-tutorial/capture/product-states/practice-explanation.png`
- Consume: `videos/passgrid-tutorial/capture/product-states/missed-review.png`

**Interfaces:**
- Composition ID: `beat-3-answer-review`.
- Produces: a three-state sequence showing answer selection, immediate explanation, and local missed-question review.

- [ ] **Step 1: Build the unanswered-question state**

Show the real question capture, pan only enough to keep the stem and answer options readable, and animate the cursor to the selected real answer.

- [ ] **Step 2: Build the explanation state**

At the answer click, replace the media with `practice-explanation.png` under a `0.18s` white flash layer. Add the callout `Review the explanation immediately` beside, not over, the explanation text.

- [ ] **Step 3: Build the local-review state**

Transition to `missed-review.png` with a vertical panel reveal. Add:

```text
Progress and missed questions stay in your browser
```

Use two text lines at most and keep each line fully inside its callout.

- [ ] **Step 4: Verify the learning-loop frame**

```powershell
npx hyperframes snapshot . --at 20.5,24.0,28.5
```

Expected: the three snapshots respectively show the answer choice, explanation, and local review state.

- [ ] **Step 5: Commit Beat 3**

```powershell
git add videos/passgrid-tutorial/compositions/beat-3-answer-review.html
git commit -m "feat: show answer and review workflow"
```

---

### Task 10: Implement Beat 4, Open AI Prompts

**Files:**
- Modify: `videos/passgrid-tutorial/compositions/beat-4-ai-prompts.html`
- Consume: `videos/passgrid-tutorial/capture/product-states/prompts-hub.png`
- Consume: `videos/passgrid-tutorial/capture/product-states/mistake-prompt.png`

**Interfaces:**
- Composition ID: `beat-4-ai-prompts`.
- Produces: navigation from the prompt hub to the first mistake-review prompt.

- [ ] **Step 1: Build the prompt-hub state**

Show `prompts-hub.png`, animate the prompt categories in with a subtle camera pan, and highlight the mistake-review category with a `#3157bd` outline.

- [ ] **Step 2: Build the mistake-prompt state**

Switch to `mistake-prompt.png` under a soft-blue transition panel. Add the message:

```text
Prompts built around real study problems
```

Keep the first prompt and copy button unobstructed.

- [ ] **Step 3: Verify prompt readability**

```powershell
npx hyperframes snapshot . --at 33.5,38.0
```

Expected: one snapshot shows the category hub; the other shows the real mistake-review prompt and its copy control.

- [ ] **Step 4: Commit Beat 4**

```powershell
git add videos/passgrid-tutorial/compositions/beat-4-ai-prompts.html
git commit -m "feat: present PassGrid AI prompts"
```

---

### Task 11: Implement Beat 5, Copy and Use the Prompt

**Files:**
- Modify: `videos/passgrid-tutorial/compositions/beat-5-copy-use.html`
- Consume: `videos/passgrid-tutorial/capture/product-states/mistake-prompt.png`
- Consume: `videos/passgrid-tutorial/capture/product-states/prompt-copied.png`

**Interfaces:**
- Composition ID: `beat-5-copy-use`.
- Produces: a real copy confirmation and a neutral, unbranded AI paste demonstration.

- [ ] **Step 1: Animate the real copy action**

Begin on `mistake-prompt.png`. Move the cursor to the actual copy button, synchronize the click with `assets/sfx/copy.wav`, then switch to `prompt-copied.png`. Show the single-word callout `Copy` for no more than `1.2s`.

- [ ] **Step 2: Build the neutral AI interface**

Create a local `.neutral-ai` panel with:

- A plain header: `AI study assistant`.
- No logo, named product, vendor colors, or copied third-party layout.
- A user-message area containing the beginning of the real copied prompt.
- A response area with the headings `Likely cause`, `Missed signals`, and `Next practice targets`.

Animate the prompt into the user-message area as a single pasted block. Reveal only the three response headings and short neutral sample bullets; do not imply a real model generated the content.

- [ ] **Step 3: Add the handoff message**

Display:

```text
Paste into the AI tool you already use
```

Place it above the caption-safe strip and outside the neutral AI panel.

- [ ] **Step 4: Verify neutrality and legibility**

```powershell
npx hyperframes snapshot . --at 44.0,48.0,50.5
```

Expected: the sequence shows the real copy state, pasted prompt, and response structure; no external AI brand is visible.

- [ ] **Step 5: Commit Beat 5**

```powershell
git add videos/passgrid-tutorial/compositions/beat-5-copy-use.html
git commit -m "feat: demonstrate prompt copy workflow"
```

---

### Task 12: Implement Beat 6, Close the Loop

**Files:**
- Modify: `videos/passgrid-tutorial/compositions/beat-6-close-loop.html`
- Consume: `videos/passgrid-tutorial/capture/product-states/practice-explanation.png`
- Consume: `videos/passgrid-tutorial/capture/product-states/mistake-prompt.png`

**Interfaces:**
- Composition ID: `beat-6-close-loop`.
- Produces: the final practice-plus-prompts summary and a URL hold of at least three seconds.

- [ ] **Step 1: Build the split workflow**

Place the explanation capture on the left and the mistake-prompt capture on the right. Use equal-width unframed panels separated by a `1px` `#e8edf6` divider. Animate both panels from a slight horizontal offset.

- [ ] **Step 2: Build the final CTA**

After the split view, transition to a clean white frame containing:

```text
PassGrid
Practice free. Review smarter.
starrycesium.com
```

Use `#081636` for the brand and message and `#1f3b82` for the URL. Hold the URL fully visible from `56.5s` through `60.0s` on the planning timeline, or for the final `3.5s` after timing reconciliation.

- [ ] **Step 3: Verify the closing hold**

```powershell
npx hyperframes snapshot . --at 54.0,57.0,59.8
```

Expected: the first snapshot shows both workflow halves; the final two show the complete URL without movement that harms readability.

- [ ] **Step 4: Commit Beat 6**

```powershell
git add videos/passgrid-tutorial/compositions/beat-6-close-loop.html
git commit -m "feat: add PassGrid tutorial close"
```

---

### Task 13: Build Transcript-Driven English Captions

**Files:**
- Create: `videos/passgrid-tutorial/compositions/captions.html`
- Consume: `videos/passgrid-tutorial/transcript.json`

**Interfaces:**
- Composition ID: `captions`.
- Produces: caption groups of 4-7 words, each shown from the first word start to the final word end.

- [ ] **Step 1: Convert word timing into caption groups**

Group transcript words by all of these rules:

- Maximum seven words.
- Break at sentence punctuation.
- Break when silence between words exceeds `0.42s`.
- Keep `P M P` in one caption group.
- Keep `A I` in one caption group.

- [ ] **Step 2: Render captions in the safe area**

Use `.caption-safe` and one active caption node at a time. Animate each group with:

```js
tl.from(
  caption,
  { opacity: 0, y: 10, duration: 0.16, ease: "power1.out" },
  group.start
);
tl.to(caption, { opacity: 0, duration: 0.12, ease: "power2.in" }, group.end - 0.12);
tl.set(caption, { opacity: 0, visibility: "hidden" }, group.end);
```

Use white text on a `rgba(8, 22, 54, 0.94)` background with a maximum 8px radius.

- [ ] **Step 3: Verify caption timing and safe area**

```powershell
npx hyperframes snapshot . --at 7.0,22.0,35.0,47.0
```

Expected: every sampled caption is English, fully inside `y=928..1034`, and does not overlap product controls.

- [ ] **Step 4: Commit captions**

```powershell
git add videos/passgrid-tutorial/compositions/captions.html
git commit -m "feat: add timed English captions"
```

---

### Task 14: Integrate, Inspect, and Deliver the Studio Preview

**Files:**
- Modify: `videos/passgrid-tutorial/index.html`
- Modify: `videos/passgrid-tutorial/STORYBOARD.md`
- Inspect: all files under `videos/passgrid-tutorial/`

**Interfaces:**
- Consumes: all six beats, captions, transitions, narration, and interface sounds.
- Produces: a validated Studio preview URL; no MP4 output.

- [ ] **Step 1: Reconcile root timing to the final transcript**

Update `index.html` and `STORYBOARD.md` together so:

- The first spoken word aligns with the opening animation.
- Each clause lands in its corresponding beat.
- The project duration is between 55 and 65 seconds.
- The final URL is visible for at least 3.0 seconds.
- Scene tracks have no gaps or overlaps.
- Transition panels cover all five scene switches.

- [ ] **Step 2: Run the complete automated checks**

From `videos/passgrid-tutorial/`:

```powershell
node --test scripts/generate-sfx.test.mjs
npx hyperframes lint .
npx hyperframes validate .
npx hyperframes inspect . --samples 15
node "C:\Users\erebu\.codex\plugins\cache\openai-curated-remote\hyperframes\0.1.2\skills\hyperframes\scripts\animation-map.mjs" . --out .hyperframes/anim-map
```

Expected: sound tests PASS; lint and validate report zero errors; inspect finds no blank or broken sample; animation-map completes.

- [ ] **Step 3: Scan the source for unfinished or prohibited content**

```powershell
$unfinished = @('T' + 'BD', 'T' + 'ODO', 'implement ' + 'later', 'lorem ' + 'ipsum')
$prohibited = @('Chat' + 'GPT', 'Claude', 'Gemini')
$pattern = (($unfinished + $prohibited) | ForEach-Object { [regex]::Escape($_) }) -join '|'
Get-ChildItem -Path . -Recurse -File -Include *.html,*.css,*.js,*.mjs,*.md,*.txt |
  Select-String -Pattern $pattern
```

Expected: no unfinished marker, named external AI product, gradient instruction, or stock-footage instruction remains in production source. Historical wording in `DESIGN.md` that explicitly prohibits an item is acceptable only if the matched line is clearly a prohibition.

- [ ] **Step 4: Generate hero-frame snapshots**

```powershell
npx hyperframes snapshot . --at 2.5,11.5,24.0,36.0,47.0,57.0
```

Open every generated image and verify:

- Real PassGrid content is crisp.
- Text fits its parent.
- No caption overlaps controls.
- No scene is blank.
- The six sampled frames tell the workflow without audio.
- The final URL is readable.

- [ ] **Step 5: Verify transition frames**

```powershell
npx hyperframes snapshot . --at 4.9,5.1,17.9,18.1,29.9,30.1,41.9,42.1,51.9,52.1
```

Expected: every scene boundary is covered by an intentional navy or soft-blue panel motion; no fully formed scene pops in.

- [ ] **Step 6: Start the Studio preview**

```powershell
npx hyperframes preview --port 3017
```

Expected: Studio reports a local preview URL and the process remains running for user review. The handoff URL is `http://localhost:3017/#project/passgrid-tutorial`.

- [ ] **Step 7: Review the complete playback**

Watch once with sound and once muted. Confirm:

- The English voice is clear at normal volume.
- Click and copy tones are subtle.
- The practice and AI prompt workflow is understandable muted.
- The total duration is 55-65 seconds.
- No private information or third-party branding appears.
- The final URL remains visible at least three seconds.

- [ ] **Step 8: Commit the validated preview source**

```powershell
git add videos/passgrid-tutorial
git commit -m "feat: complete PassGrid tutorial preview"
```

- [ ] **Step 9: Stop before rendering**

Report the Studio URL and validation results. Do not run an MP4 render command until the user explicitly approves the preview and requests the rendered file.

---

## Final Self-Review Checklist

- [ ] Every requirement in `docs/superpowers/specs/2026-07-27-passgrid-tutorial-video-design.md` maps to a task above.
- [ ] The capture audit proves the four product claims before they appear on screen.
- [ ] File names and composition IDs match the shared contract exactly.
- [ ] The narration, transcript, captions, and storyboard use the same wording and timing source.
- [ ] All six beats have a defined real asset, entrance animation, user-facing message, and verification snapshot.
- [ ] The five scene boundaries have explicit transition coverage.
- [ ] The neutral AI interface contains no named third-party product.
- [ ] The project has no unlicensed music.
- [ ] The final URL hold is at least three seconds.
- [ ] Lint and validation must report zero errors before the Studio URL is delivered.
- [ ] No MP4 is rendered without a separate explicit request.
