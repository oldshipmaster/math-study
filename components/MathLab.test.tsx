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

  it("opens lessons three through five from the catalog", () => {
    const targets = [
      ["学习数列与规律", "每次向前跳两格"],
      ["学习数列与图形", "找到不断重复的小队"],
      ["学习正数与负数", "零上与零下"],
    ];
    for (const [button, heading] of targets) {
      const view = render(<MathLab />);
      fireEvent.click(screen.getByRole("button", { name: button }));
      expect(screen.getByRole("heading", { name: heading })).toBeInTheDocument();
      view.unmount();
    }
  });

  it("completes the first dedicated interaction in each new lesson", () => {
    const targets = [
      ["学习数列与规律", "10"],
      ["学习数列与图形", "红色"],
      ["学习正数与负数", "-3"],
    ];
    for (const [courseButton, answerButton] of targets) {
      const view = render(<MathLab />);
      fireEvent.click(screen.getByRole("button", { name: courseButton }));
      expect(screen.getByRole("button", { name: /继续/ })).toBeDisabled();
      fireEvent.click(screen.getByRole("button", { name: answerButton }));
      expect(screen.getByRole("button", { name: /继续/ })).toBeEnabled();
      view.unmount();
    }
  });

  it("requires completing an interaction before continuing", () => {
    render(<MathLab />);
    fireEvent.click(screen.getByRole("button", { name: /开始第 1 课/ }));
    expect(screen.getByRole("button", { name: /继续/ })).toBeDisabled();
    screen.getAllByRole("button", { name: /收集第/ }).slice(0, 5).forEach((button) => fireEvent.click(button));
    expect(screen.getByRole("button", { name: /继续/ })).toBeEnabled();
  });

  it("resets one selected course without changing the others", () => {
    localStorage.setItem("math-lab-progress", JSON.stringify({
      lessons: {
        symbols: { sceneIndex: 4, completed: true, attempts: 3, correct: 3 },
        "place-value": { sceneIndex: 5, completed: true, attempts: 4, correct: 3 },
      },
    }));
    render(<MathLab />);
    expect(screen.getByText("已完成 2/5 课")).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: "重置课程进度" }));
    expect(screen.getByRole("dialog", { name: "管理课程进度" })).toBeInTheDocument();
    expect(screen.getByText("已完成 2/5 课")).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: "重置数字符号" }));
    expect(screen.getByRole("dialog", { name: "重置《数字符号》？" })).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: "确认重置本课" }));
    expect(screen.getByText("已完成 1/5 课")).toBeInTheDocument();
    expect(screen.getByText("《数字符号》进度已重置")).toBeInTheDocument();
    const saved = JSON.parse(localStorage.getItem("math-lab-progress") ?? "{}");
    expect(saved.lessons.symbols).toBeUndefined();
    expect(saved.lessons["place-value"].completed).toBe(true);
  });

  it("keeps reset all as a separate confirmed action", () => {
    localStorage.setItem("math-lab-progress", JSON.stringify({
      lessons: { symbols: { sceneIndex: 4, completed: true, attempts: 3, correct: 3 } },
    }));
    render(<MathLab />);
    fireEvent.click(screen.getByRole("button", { name: "重置课程进度" }));
    fireEvent.click(screen.getByRole("button", { name: "重置全部课程" }));
    expect(screen.getByRole("dialog", { name: "重置全部课程进度？" })).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: "取消" }));
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    expect(screen.getByText("已完成 1/5 课")).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: "重置课程进度" }));
    fireEvent.click(screen.getByRole("button", { name: "重置全部课程" }));
    fireEvent.click(screen.getByRole("button", { name: "确认重置全部" }));
    expect(screen.getByText("已完成 0/5 课")).toBeInTheDocument();
    expect(screen.getByText("全部课程进度已重置")).toBeInTheDocument();
    expect(localStorage.getItem("math-lab-progress")).toBeNull();
  });
});
