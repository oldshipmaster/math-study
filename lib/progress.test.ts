import { beforeEach, describe, expect, it, vi } from "vitest";
import { clearCourseProgress, clearProgress, loadProgress, saveProgress } from "./progress";

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
    expect(loadProgress()).toEqual({lessons:{symbols:{...progress.lessons.symbols,challenge:{completedIds:[],requiredIds:[],correct:0,attempts:0,reasons:{}}}}});
  });

  it("upgrades legacy progress with safe challenge defaults",()=>{
    localStorage.setItem("math-lab-progress",JSON.stringify({lessons:{symbols:{sceneIndex:4,completed:true,attempts:3,correct:3}}}));
    expect(loadProgress().lessons.symbols?.challenge).toEqual({completedIds:[],requiredIds:[],correct:0,attempts:0,reasons:{}});
  });

  it("round-trips innovative challenge completion and reasons",()=>{
    const progress={lessons:{symbols:{sceneIndex:5,completed:false,attempts:8,correct:6,challenge:{completedIds:["symbols-challenge-01"],requiredIds:["symbols-challenge-01","symbols-challenge-02"],correct:1,attempts:2,reasons:{"symbols-challenge-01":"画图能看清数量关系"}}}}};
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

  it("clears one course and preserves every other lesson", () => {
    const progress = {
      lessons: {
        symbols: { sceneIndex: 4, completed: true, attempts: 3, correct: 3 },
        "place-value": { sceneIndex: 2, completed: false, attempts: 1, correct: 1 },
      },
    };
    const next = clearCourseProgress(progress, "symbols");
    expect(next.lessons.symbols).toBeUndefined();
    expect(next.lessons["place-value"]).toMatchObject(progress.lessons["place-value"]!);
    expect(next.lessons["place-value"]?.challenge).toEqual({completedIds:[],requiredIds:[],correct:0,attempts:0,reasons:{}});
    expect(loadProgress()).toEqual(next);
  });
});
