# Innovative Challenge Bank Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add exactly 20 innovative questions to each of 80 courses, with a ten-question required run, optional remaining exploration, reasoning input, persistence, reset support, tests, and deployment.

**Architecture:** Keep existing lesson content and three-question quiz unchanged, then append one generated `challenge` scene to every course. A deterministic challenge-bank module expands each course's hand-authored title, summary, goals, scenes, and quiz facts into a stable 20-question bank with strict category quotas. A focused challenge component manages selection, retries, reasoning text, hints, completion, and saved per-course challenge progress.

**Tech Stack:** TypeScript, React, Vitest, Testing Library, localStorage, Vite/vinext, GitHub Pages.

## Global Constraints

- Exactly 80 courses and 20 innovative questions per course, 1600 total.
- Category quota per course is 4 application, 4 reverse, 3 error-correction, 3 pattern, 3 open, 3 inquiry.
- Each required run contains 10 stable questions and at least one from every category.
- Open and inquiry questions require both a selected approach and a non-empty reason.
- Existing per-course and reset-all flows clear the corresponding challenge progress.
- No runtime AI or network dependency.

---

### Task 1: Challenge data model and deterministic bank

**Files:**
- Modify: `lib/course-types.ts`
- Create: `lib/challenge-bank.ts`
- Create: `lib/challenge-bank.test.ts`
- Modify: `lib/courses.ts`
- Modify: `lib/courses.test.ts`

**Interfaces:**
- Produces: `ChallengeCategory`, `ChallengeQuestion`, `buildChallengeBank(course)`, `selectRequiredChallenges(questions)`, and `LessonScene.kind === "challenge"`.

- [ ] Write failing tests asserting 80×20=1600, 4/4/3/3/3/3 quotas, global unique IDs, complete fields, deterministic ten-question selection, and six-category coverage.
- [ ] Run `npm test -- --run lib/challenge-bank.test.ts lib/courses.test.ts` and verify failures are caused by missing challenge APIs.
- [ ] Add challenge types and deterministic option rotation keyed by course ID and question index.
- [ ] Build course-specific questions from title, summary, goals, scene facts, and existing quiz facts; append a challenge scene to every course.
- [ ] Re-run focused tests and commit the green data layer.

### Task 2: Challenge progress persistence and reset compatibility

**Files:**
- Modify: `lib/course-types.ts`
- Modify: `lib/progress.ts`
- Modify: `lib/progress.test.ts`

**Interfaces:**
- Produces: `ChallengeProgress` nested under each `LessonProgress`, preserving old stored objects with defaults.

- [ ] Write failing tests for loading legacy progress, saving challenge IDs/reasons, clearing one course, and clearing all.
- [ ] Run `npm test -- --run lib/progress.test.ts` and verify expected failures.
- [ ] Add optional/defaulted challenge progress fields without changing the storage key.
- [ ] Run focused tests and commit the persistence layer.

### Task 3: Innovation challenge user experience

**Files:**
- Create: `components/scenes/ChallengeScene.tsx`
- Create: `components/scenes/ChallengeScene.test.tsx`
- Modify: `components/MathLab.tsx`
- Modify: `components/MathLab.test.tsx`
- Modify: `app/globals.css`

**Interfaces:**
- Consumes: a challenge scene's 20 questions and saved challenge progress.
- Produces: ten-question required completion metrics plus optional exploration actions.

- [ ] Write failing tests for category labels, objective retry/hints, required reasoning text, 10/20 completion, continue-exploring access, and reset-visible counts.
- [ ] Run focused component tests and verify failures.
- [ ] Implement category rail, question card, choices, reason input, hint/reference panels, and accessible feedback.
- [ ] Wire the challenge scene into lesson navigation and progress recording while retaining existing quiz scores.
- [ ] Add responsive styles, run focused tests, and commit the UI layer.

### Task 4: Full validation and public release

**Files:**
- Modify only if verification identifies a concrete defect.

**Interfaces:**
- Validates all prior tasks and publishes the exact generated static bundle.

- [ ] Run `npm test -- --run`; require zero failed tests.
- [ ] Run `npm run lint`, `npm run build`, and `npm run build:pages`; require exit code 0.
- [ ] Run an audit script proving 80 courses, 1600 questions, exact quotas, complete fields, and unique IDs.
- [ ] Commit final verified changes and push `main`.
- [ ] Publish `pages-dist` to `gh-pages`, wait for Pages success, then verify HTTP 200 and online bundle strings for `创新挑战营`, `1600`, and `继续探索`.

