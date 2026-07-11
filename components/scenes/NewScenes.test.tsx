import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import type { LessonScene } from "../../lib/course-types";
import { NumberLineScene } from "./NumberLineScene";
import { SequenceScene } from "./SequenceScene";
import { VisualPatternScene } from "./VisualPatternScene";

function scene(id: string, kind: LessonScene["kind"]): LessonScene {
  return { id, kind, eyebrow: "实验", title: "测试场景", body: "测试内容" };
}

describe("new interactive lesson scenes", () => {
  it("completes a sequence only after the correct choice", () => {
    const complete = vi.fn();
    render(<SequenceScene scene={scene("jump-two", "sequence")} onComplete={complete} />);
    fireEvent.click(screen.getByRole("button", { name: "9" }));
    expect(complete).not.toHaveBeenCalled();
    fireEvent.click(screen.getByRole("button", { name: "10" }));
    expect(complete).toHaveBeenCalledWith(1, 2);
  });

  it("completes a visual pattern only after the correct choice", () => {
    const complete = vi.fn();
    render(<VisualPatternScene scene={scene("color-cycle", "visual-pattern")} onComplete={complete} />);
    fireEvent.click(screen.getByRole("button", { name: "黄色" }));
    expect(complete).not.toHaveBeenCalled();
    fireEvent.click(screen.getByRole("button", { name: "红色" }));
    expect(complete).toHaveBeenCalledWith(1, 2);
  });

  it("completes a number-line task only after the correct choice", () => {
    const complete = vi.fn();
    render(<NumberLineScene scene={scene("temperature", "number-line")} onComplete={complete} />);
    fireEvent.click(screen.getByRole("button", { name: "+3" }));
    expect(complete).not.toHaveBeenCalled();
    fireEvent.click(screen.getByRole("button", { name: "-3" }));
    expect(complete).toHaveBeenCalledWith(1, 2);
  });
});
