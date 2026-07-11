import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { MathLab } from "./MathLab";

describe("MathLab", () => {
  it("opens both available lessons from the catalog", () => {
    render(<MathLab />);
    expect(screen.getByRole("heading", { name: "把数学，变成可以触摸的想法" })).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: /开始第 1 课/ }));
    expect(screen.getByRole("heading", { name: "数量一直都在那里" })).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: "课程目录" }));
    fireEvent.click(screen.getByRole("button", { name: /学习位值/ }));
    expect(screen.getByRole("heading", { name: "十个一，组成一个十" })).toBeInTheDocument();
  });

  it("requires completing an interaction before continuing", () => {
    render(<MathLab />);
    fireEvent.click(screen.getByRole("button", { name: /开始第 1 课/ }));
    expect(screen.getByRole("button", { name: /继续/ })).toBeDisabled();
    screen.getAllByRole("button", { name: /收集第/ }).slice(0, 5).forEach((button) => fireEvent.click(button));
    expect(screen.getByRole("button", { name: /继续/ })).toBeEnabled();
  });
});
