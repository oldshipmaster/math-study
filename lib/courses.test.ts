import { describe, expect, it } from "vitest";
import { courses } from "./courses";

describe("course catalog", () => {
  it("ships seventy complete open lessons", () => {
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
      "primes",
      "prime-factors",
      "squares",
      "cubes",
      "fractions",
      "fraction-of-quantity",
      "like-fraction-order",
      "unit-fraction-order",
      "fraction-addition",
      "fraction-subtraction",
      "fraction-multiplication",
      "fraction-division",
      "decimal-rounding",
      "decimal-addition",
      "decimal-subtraction",
      "percent-conversion",
      "ratios",
      "proportions",
      "fraction-representations",
      "addition-basics",
      "addition-number-line",
      "addition-hundred-grid",
      "addition-facts",
      "addition-partitioning",
      "addition-expanded-column",
      "addition-column",
      "subtraction-facts",
      "subtraction-partitioning",
      "shopkeeper-addition",
      "subtraction-expanded-column",
      "subtraction-column",
      "multiplication-scaling",
      "factor-pairs",
      "multiple-calculation",
      "times-tables",
      "multiplication-tricks",
      "multiply-powers-of-ten",
      "multiply-tens",
      "multiplication-partitioning",
      "multiplication-grid",
      "extended-short-multiplication",
      "short-multiplication",
      "long-multiplication",
      "multi-digit-multiplication",
      "decimal-multiplication",
      "lattice-multiplication",
      "division-by-multiples",
      "division-grid",
      "division-tables",
      "divide-powers-of-ten",
      "divisibility-tests",
      "division-partitioning",
      "division-factor-pairs",
      "extended-short-division",
      "short-division",
      "extended-long-division",
      "long-division",
      "remainder-conversion",
      "decimal-division",
      "operation-order",
    ]);
    expect(courses).toHaveLength(70);
    expect(courses[0].scenes).toHaveLength(5);
    expect(courses.slice(1).every((course) => course.scenes.length === 6)).toBe(true);
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
    expect(courses[10].scenes.some((scene) => scene.kind === "prime")).toBe(true);
    expect(courses[11].scenes.some((scene) => scene.kind === "factor-tree")).toBe(true);
    expect(courses[12].scenes.some((scene) => scene.kind === "power")).toBe(true);
    expect(courses[13].scenes.some((scene) => scene.kind === "power")).toBe(true);
    expect(courses[14].scenes.some((scene) => scene.kind === "fraction")).toBe(true);
    expect(courses[15].scenes.some((scene) => scene.kind === "fraction")).toBe(true);
    expect(courses[18].scenes.some((scene) => scene.kind === "fraction-operation")).toBe(true);
    expect(courses[19].scenes.some((scene) => scene.kind === "fraction-operation")).toBe(true);
    expect(courses[20].scenes.some((scene) => scene.kind === "fraction-operation")).toBe(true);
    expect(courses[21].scenes.some((scene) => scene.kind === "fraction-operation")).toBe(true);
    expect(courses[22].scenes.some((scene) => scene.kind === "decimal")).toBe(true);
    expect(courses[23].scenes.some((scene) => scene.kind === "decimal")).toBe(true);
    expect(courses[24].scenes.some((scene) => scene.kind === "decimal")).toBe(true);
    expect(courses[25].scenes.some((scene) => scene.kind === "ratio")).toBe(true);
    expect(courses[28].scenes.some((scene) => scene.kind === "ratio")).toBe(true);
    expect(courses[29].scenes.some((scene) => scene.kind === "addition")).toBe(true);
    expect(courses[40].scenes.some((scene) => scene.kind === "subtraction")).toBe(true);
    expect(courses.slice(41, 56).every((course) => course.scenes.some((scene) => scene.kind === "multiplication"))).toBe(true);
    expect(courses.slice(56, 69).every((course) => course.scenes.some((scene) => scene.kind === "division"))).toBe(true);
    expect(courses[69].scenes.some((scene) => scene.kind === "operation-order")).toBe(true);
  });
});
