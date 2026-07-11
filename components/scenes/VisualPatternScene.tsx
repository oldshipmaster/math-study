"use client";

import { useState } from "react";
import type { LessonScene } from "../../lib/course-types";

const tasks: Record<string, { pattern: string[]; choices: string[]; answer: string; note: string; mode: string }> = {
  "color-cycle": { pattern: ["红", "黄", "绿", "红", "黄", "绿", "?"], choices: ["黄色", "红色", "绿色"], answer: "红色", note: "红、黄、绿完成一轮后，又从红色开始。", mode: "colors" },
  "shape-chain": { pattern: ["●", "▲", "■", "●", "▲", "?"], choices: ["圆形", "三角形", "方形"], answer: "方形", note: "重复单元是圆、三角、方形。", mode: "shapes" },
  "turn-arrow": { pattern: ["↑", "→", "↓", "←", "?"], choices: ["向上", "向右", "向下"], answer: "向上", note: "每次顺时针转 90°，向左之后回到向上。", mode: "arrows" },
  "growing-dots": { pattern: ["●", "●●●", "●●●●●", "?"], choices: ["6 个", "7 个", "8 个"], answer: "7 个", note: "点数是 1、3、5、7，每次增加 2。", mode: "dots" },
  "picture-to-number": { pattern: ["1", "3", "5", "7", "?"], choices: ["8", "9", "10"], answer: "9", note: "奇数数列每次增加 2，所以 7 后面是 9。", mode: "numbers" },
};

export function VisualPatternScene({ scene, onComplete }: { scene: LessonScene; onComplete: (correct: number, attempts: number) => void }) {
  const task = tasks[scene.id] ?? tasks["color-cycle"];
  const [attempts, setAttempts] = useState(0);
  const [feedback, setFeedback] = useState("先找出最小的重复或增长单元");
  const [done, setDone] = useState(false);

  function choose(choice: string) {
    if (done) return;
    const nextAttempts = attempts + 1;
    setAttempts(nextAttempts);
    if (choice === task.answer) {
      setDone(true);
      setFeedback(task.note);
      onComplete(1, nextAttempts);
    } else setFeedback("这个选择打断了规律。回到开头再看一轮。");
  }

  return <div className="activity pattern-activity">
    <div className={`pattern-strip ${task.mode}`} aria-label={`图形规律 ${task.pattern.join("，")}`}>{task.pattern.map((item, index) => <span className={`pattern-item token-${item}`} key={`${item}-${index}`}>{item}</span>)}</div>
    <div className="scene-choices">{task.choices.map((choice) => <button key={choice} aria-label={choice} onClick={() => choose(choice)} className={done && choice === task.answer ? "correct" : ""}>{choice}</button>)}</div>
    <p className="scene-feedback" aria-live="polite">{feedback}</p>
  </div>;
}
