import { beforeEach, describe, expect, it } from "vitest";
import { loadProgress, saveProgress } from "./progress";

describe("lesson progress", () => {
  beforeEach(() => localStorage.clear());

  it("returns a safe empty state when no progress exists", () => {
    expect(loadProgress()).toEqual({ lessons: {} });
  });

  it("round-trips completed scenes", () => {
    const progress = {
      lessons: {
        symbols: { sceneIndex: 3, completed: false, attempts: 2, correct: 1 },
      },
    };
    saveProgress(progress);
    expect(loadProgress()).toEqual(progress);
  });

  it("recovers from malformed local data", () => {
    localStorage.setItem("math-lab-progress", "not-json");
    expect(loadProgress()).toEqual({ lessons: {} });
  });
});
