import { beforeEach, describe, expect, it, vi } from "vitest";
import { clearProgress, loadProgress, saveProgress } from "./progress";

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

  it("clears the saved course progress", () => {
    saveProgress({ lessons: { symbols: { sceneIndex: 4, completed: true, attempts: 3, correct: 3 } } });
    clearProgress();
    expect(loadProgress()).toEqual({ lessons: {} });
  });

  it("does not throw when storage deletion fails", () => {
    const remove = vi.spyOn(Storage.prototype, "removeItem").mockImplementation(() => {
      throw new Error("storage unavailable");
    });
    expect(() => clearProgress()).not.toThrow();
    remove.mockRestore();
  });
});
