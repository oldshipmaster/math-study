import { describe, expect, it } from "vitest";
import { courses } from "./courses";

describe("course catalog", () => {
  it("ships two complete open lessons", () => {
    expect(courses.map((course) => course.id)).toEqual(["symbols", "place-value"]);
    expect(courses[0].scenes).toHaveLength(5);
    expect(courses[1].scenes).toHaveLength(6);
  });

  it("ends each lesson with a three-question quiz", () => {
    for (const course of courses) {
      const last = course.scenes.at(-1);
      expect(last?.kind).toBe("quiz");
      expect(last?.questions).toHaveLength(3);
    }
  });
});
