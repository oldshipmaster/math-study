import { describe, expect, it } from "vitest";
import { courses } from "./courses";

describe("course catalog", () => {
  it("ships ten complete open lessons", () => {
    expect(courses.map((course) => course.id)).toEqual([
      "symbols",
      "place-value",
      "sequences",
      "shape-patterns",
      "signed-numbers",
      "comparison",
      "ordering",
      "estimation",
      "rounding",
      "multiples",
    ]);
    expect(courses.map((course) => course.scenes.length)).toEqual([5, 6, 6, 6, 6, 6, 6, 6, 6, 6]);
  });

  it("ends each lesson with a three-question quiz", () => {
    for (const course of courses) {
      const last = course.scenes.at(-1);
      expect(last?.kind).toBe("quiz");
      expect(last?.questions).toHaveLength(3);
    }
  });

  it("uses a dedicated interaction model for each new lesson", () => {
    expect(courses[2].scenes.some((scene) => scene.kind === "sequence")).toBe(true);
    expect(courses[3].scenes.some((scene) => scene.kind === "visual-pattern")).toBe(true);
    expect(courses[4].scenes.some((scene) => scene.kind === "number-line")).toBe(true);
    expect(courses[5].scenes.some((scene) => scene.kind === "compare")).toBe(true);
    expect(courses[6].scenes.some((scene) => scene.kind === "order")).toBe(true);
    expect(courses[7].scenes.some((scene) => scene.kind === "estimate")).toBe(true);
    expect(courses[8].scenes.some((scene) => scene.kind === "rounding")).toBe(true);
    expect(courses[9].scenes.some((scene) => scene.kind === "multiples")).toBe(true);
  });
});
