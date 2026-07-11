import type { ProgressState } from "./course-types";

const KEY = "math-lab-progress";
const EMPTY: ProgressState = { lessons: {} };

export function loadProgress(): ProgressState {
  if (typeof localStorage === "undefined") return EMPTY;
  try {
    const parsed = JSON.parse(localStorage.getItem(KEY) ?? "null");
    return parsed && typeof parsed === "object" && parsed.lessons ? parsed : EMPTY;
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
