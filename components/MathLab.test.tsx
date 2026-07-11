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

  it("opens lessons six through ten from the catalog", () => {
    const targets = [
      ["学习数的比较", "哪一盘更多？"],
      ["学习数的排序", "从矮到高站好"],
      ["学习估算", "先判断大概范围"],
      ["学习四舍五入", "24、25、28 各靠近哪里？"],
      ["学习倍数", "6 排，每排 2 双"],
    ];
    for (const [button, heading] of targets) {
      const view = render(<MathLab />);
      fireEvent.click(screen.getByRole("button", { name: button }));
      expect(screen.getByRole("heading", { name: heading })).toBeInTheDocument();
      view.unmount();
    }
  });

  it("completes the first interaction in lessons six through ten", () => {
    const targets: [string, string[]][] = [
      ["学习数的比较", ["第二盘"]],
      ["学习数的排序", ["120", "135", "150"]],
      ["学习估算", ["大约 40"]],
      ["学习四舍五入", ["30"]],
      ["学习倍数", ["6 × 2 = 12"]],
    ];
    for (const [courseButton, answers] of targets) {
      const view = render(<MathLab />);
      fireEvent.click(screen.getByRole("button", { name: courseButton }));
      expect(screen.getByRole("button", { name: /继续/ })).toBeDisabled();
      for (const answer of answers) fireEvent.click(screen.getByRole("button", { name: answer }));
      expect(screen.getByRole("button", { name: /继续/ })).toBeEnabled();
      view.unmount();
    }
  });

  it("opens and completes the first interaction in lessons eleven through fifteen", () => {
    const targets: [string, string, string[]][] = [
      ["学习质数", "只有两把钥匙", ["7"]],
      ["学习质因数", "不可再拆的质数块", ["2"]],
      ["学习平方数", "2² 是一个 2×2 正方形", ["4"]],
      ["学习立方数", "2³ = 8", ["8"]],
      ["学习分数", "四个人平分一个蛋糕", ["1/4"]],
    ];
    for (const [courseButton, heading, answers] of targets) {
      const view = render(<MathLab />);
      fireEvent.click(screen.getByRole("button", { name: courseButton }));
      expect(screen.getByRole("heading", { name: heading })).toBeInTheDocument();
      expect(screen.getByRole("button", { name: /继续/ })).toBeDisabled();
      for (const answer of answers) fireEvent.click(screen.getByRole("button", { name: answer }));
      expect(screen.getByRole("button", { name: /继续/ })).toBeEnabled();
      view.unmount();
    }
  });

  it("opens and completes the first interaction in lessons sixteen through twenty", () => {
    const targets: [string,string,string][] = [
      ["学习求一个数量的一部分","12 的四分之一是多少？","3"],
      ["学习同分母分数比较","八等份中的不同数量","6/8"],
      ["学习单位分数比较","二分之一、三分之一、五分之一","1/2"],
      ["学习分数加法","1/5 + 2/5 = 3/5","3/5"],
      ["学习分数减法","3/4 - 1/4 = 2/4","2/4"],
    ];
    for(const [button,heading,answer] of targets){ const view=render(<MathLab/>); fireEvent.click(screen.getByRole("button",{name:button})); expect(screen.getByRole("heading",{name:heading})).toBeInTheDocument(); fireEvent.click(screen.getByRole("button",{name:answer})); expect(screen.getByRole("button",{name:/继续/})).toBeEnabled(); view.unmount(); }
  });

  it("opens and completes the first interaction in lessons twenty-one through twenty-five",()=>{
    const targets:[string,string,string][]=[
      ["学习分数乘法","四分之一的一半","1/8"],
      ["学习分数除法","1/4 平均分给 3 人","1/12"],
      ["学习小数的四舍五入","1.3 更靠近 1","1"],
      ["学习小数加法","4.5 + 7.7","12.2"],
      ["学习小数减法","8.2 - 4.7","3.5"],
    ];
    for(const [button,heading,answer] of targets){const view=render(<MathLab/>);fireEvent.click(screen.getByRole("button",{name:button}));expect(screen.getByRole("heading",{name:heading})).toBeInTheDocument();fireEvent.click(screen.getByRole("button",{name:answer}));expect(screen.getByRole("button",{name:/继续/})).toBeEnabled();view.unmount();}
  });

  it("opens and completes the first interaction in lessons twenty-six through thirty",()=>{
    const targets:[string,string,string][]=[
      ["学习百分比的换算","12 克是 60 克的百分之几？","20%"],
      ["学习比值","草莓与巧克力是 3:4","3:4"],
      ["学习比例","4 只橘猫占 10 只猫","4/10"],
      ["学习分数的不同表示","3/5 = 0.6 = 60%","0.6"],
      ["学习加法","6 + 3 = 9","9"],
    ];
    for(const [button,heading,answer] of targets){const view=render(<MathLab/>);fireEvent.click(screen.getByRole("button",{name:button}));expect(screen.getByRole("heading",{name:heading})).toBeInTheDocument();fireEvent.click(screen.getByRole("button",{name:answer}));expect(screen.getByRole("button",{name:/继续/})).toBeEnabled();view.unmount();}
  });

  it("opens and completes the first interaction in lessons thirty-one through thirty-five",()=>{
    const targets:[string,string,string][]=[["学习使用数轴做加法","从 4 向右跳 3 格","7"],["学习使用数字网格做加法","加 10 向下，加 1 向右","向下一行"],["学习加法口诀","1和9、2和8、3和7","4"],["学习分块加法","47 = 40 + 7","40+7"],["学习扩展竖式加法","385 与 157 对齐","相同数位对齐"]];
    for(const [button,heading,answer] of targets){const view=render(<MathLab/>);fireEvent.click(screen.getByRole("button",{name:button}));expect(screen.getByRole("heading",{name:heading})).toBeInTheDocument();fireEvent.click(screen.getByRole("button",{name:answer}));expect(screen.getByRole("button",{name:/继续/})).toBeEnabled();view.unmount();}
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
    expect(screen.getByText("已完成 2/35 课")).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: "重置课程进度" }));
    expect(screen.getByRole("dialog", { name: "管理课程进度" })).toBeInTheDocument();
    expect(screen.getByText("已完成 2/35 课")).toBeInTheDocument();
    expect(screen.getByText("清空 35 节课程的所有记录")).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: "重置数字符号" }));
    expect(screen.getByRole("dialog", { name: "重置《数字符号》？" })).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: "确认重置本课" }));
    expect(screen.getByText("已完成 1/35 课")).toBeInTheDocument();
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
    expect(screen.getByText("已完成 1/35 课")).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: "重置课程进度" }));
    fireEvent.click(screen.getByRole("button", { name: "重置全部课程" }));
    fireEvent.click(screen.getByRole("button", { name: "确认重置全部" }));
    expect(screen.getByText("已完成 0/35 课")).toBeInTheDocument();
    expect(screen.getByText("全部课程进度已重置")).toBeInTheDocument();
    expect(localStorage.getItem("math-lab-progress")).toBeNull();
  });
});
