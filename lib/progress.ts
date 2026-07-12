import type { ChallengeProgress, LessonProgress, ProgressState } from "./course-types";

const KEY = "math-lab-progress";
const EMPTY: ProgressState = { lessons: {} };
export const EMPTY_CHALLENGE_PROGRESS:ChallengeProgress={completedIds:[],requiredIds:[],correct:0,attempts:0,reasons:{}};

function normalizeLesson(lesson:LessonProgress):LessonProgress{
  const saved=lesson.challenge;
  return {...lesson,challenge:{
    completedIds:Array.isArray(saved?.completedIds)?saved.completedIds:[],
    requiredIds:Array.isArray(saved?.requiredIds)?saved.requiredIds:[],
    correct:Number.isFinite(saved?.correct)?saved!.correct:0,
    attempts:Number.isFinite(saved?.attempts)?saved!.attempts:0,
    reasons:saved?.reasons&&typeof saved.reasons==="object"?saved.reasons:{},
  }};
}

function normalizeProgress(progress:ProgressState):ProgressState{
  return {lessons:Object.fromEntries(Object.entries(progress.lessons).map(([id,lesson])=>[id,lesson?normalizeLesson(lesson):lesson])) as ProgressState["lessons"]};
}

export function loadProgress(): ProgressState {
  if (typeof localStorage === "undefined") return EMPTY;
  try {
    const parsed = JSON.parse(localStorage.getItem(KEY) ?? "null");
    return parsed && typeof parsed === "object" && parsed.lessons ? normalizeProgress(parsed as ProgressState) : EMPTY;
  } catch {
    return EMPTY;
  }
}

export function saveProgress(progress: ProgressState) {
  if (typeof localStorage === "undefined") return;
  try {
    localStorage.setItem(KEY, JSON.stringify(progress));
  } catch {
    // Learning remains usable when storage is unavailable.
  }
}

export function clearProgress() {
  if (typeof localStorage === "undefined") return;
  try {
    localStorage.removeItem(KEY);
  } catch {
    // The in-memory reset still lets a learner start over in this session.
  }
}

export function clearCourseProgress(progress: ProgressState, courseId: keyof ProgressState["lessons"]): ProgressState {
  const lessons = { ...progress.lessons };
  delete lessons[courseId];
  const next = normalizeProgress({ lessons });
  saveProgress(next);
  return next;
}
