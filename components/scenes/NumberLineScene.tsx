"use client";

import { useState } from "react";
import type { LessonScene } from "../../lib/course-types";

const tasks: Record<string, { marker: number; choices: string[]; answer: string; note: string; label: string }> = {
  temperature: { marker: -3, choices: ["+3", "-3", "0"], answer: "-3", note: "零下 3°C 位于 0 的下方，用 -3 表示。", label: "温度 °C" },
  "number-walk": { marker: -4, choices: ["-4", "+4", "-3"], answer: "-4", note: "从 0 向左走 4 格，到达 -4。", label: "数轴位置" },
  elevator: { marker: -2, choices: ["+2", "-2", "0"], answer: "-2", note: "地下 2 层在地面 0 以下，用 -2 表示。", label: "楼层" },
  "compare-signed": { marker: 3, choices: ["-2", "0", "3"], answer: "3", note: "数轴越靠右数字越大，3 最靠右。", label: "比较大小" },
  "signed-context": { marker: -5, choices: ["+5", "-5", "0"], answer: "-5", note: "支出表示金额减少，所以用 -5 表示。", label: "账户变化" },
};

export function NumberLineScene({ scene, onComplete }: { scene: LessonScene; onComplete: (correct: number, attempts: number) => void }) {
  const task = tasks[scene.id] ?? tasks.temperature;
  const [attempts, setAttempts] = useState(0);
  const [feedback, setFeedback] = useState("以 0 为分界，先判断方向");
  const [done, setDone] = useState(false);

  function choose(choice: string) {
    if (done) return;
    const nextAttempts = attempts + 1;
    setAttempts(nextAttempts);
    if (choice === task.answer) {
      setDone(true);
      setFeedback(task.note);
      onComplete(1, nextAttempts);
    } else setFeedback("方向反了。0 的左边或下方使用负数。");
  }

  return <div className="activity numberline-activity">
    <p className="numberline-label">{task.label}</p>
    <div className="number-line" aria-label={`从负五到正五的数轴，目标 ${task.marker}`}>
      {Array.from({ length: 11 }, (_, index) => index - 5).map((value) => <div key={value} className={done && value === task.marker ? "target" : value === 0 ? "zero" : ""}><i /><span>{value > 0 ? `+${value}` : value}</span></div>)}
    </div>
    <div className="scene-choices">{task.choices.map((choice) => <button key={choice} aria-label={choice} onClick={() => choose(choice)} className={done && choice === task.answer ? "correct" : ""}>{choice}</button>)}</div>
    <p className="scene-feedback" aria-live="polite">{feedback}</p>
  </div>;
}
