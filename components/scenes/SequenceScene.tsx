"use client";

import { useState } from "react";
import type { LessonScene } from "../../lib/course-types";

const tasks: Record<string, { sequence: string[]; choices: string[]; answer: string; rule: string }> = {
  "jump-two": { sequence: ["2", "4", "6", "8", "?"], choices: ["9", "10", "12"], answer: "10", rule: "每次加 2：8 + 2 = 10" },
  "find-five": { sequence: ["5", "10", "15", "20"], choices: ["增加 2", "增加 5", "增加 10"], answer: "增加 5", rule: "每两个相邻数字都相差 5" },
  "fill-sequence": { sequence: ["3", "6", "9", "?", "15"], choices: ["10", "11", "12"], answer: "12", rule: "每次加 3：9 + 3 = 12" },
  "count-down": { sequence: ["30", "25", "20", "?"], choices: ["10", "15", "25"], answer: "15", rule: "每次减 5：20 - 5 = 15" },
  "rule-detective": { sequence: ["2", "4", "8", "16"], choices: ["每次加 2", "每次乘 2", "每次加 4"], answer: "每次乘 2", rule: "后一个数都是前一个数的 2 倍" },
};

export function SequenceScene({ scene, onComplete }: { scene: LessonScene; onComplete: (correct: number, attempts: number) => void }) {
  const task = tasks[scene.id] ?? tasks["jump-two"];
  const [attempts, setAttempts] = useState(0);
  const [feedback, setFeedback] = useState("先观察相邻数字的变化");
  const [done, setDone] = useState(false);

  function choose(choice: string) {
    if (done) return;
    const nextAttempts = attempts + 1;
    setAttempts(nextAttempts);
    if (choice === task.answer) {
      setDone(true);
      setFeedback(task.rule);
      onComplete(1, nextAttempts);
    } else {
      setFeedback("还不对。比较每一对相邻数字，再试一次。");
    }
  }

  return <div className="activity sequence-activity">
    <div className="sequence-track" aria-label={`数列 ${task.sequence.join("，")}`}>
      {task.sequence.map((value, index) => <div className={value === "?" ? "missing" : ""} key={`${value}-${index}`}><span>{value}</span>{index < task.sequence.length - 1 && <i>→</i>}</div>)}
    </div>
    <div className="scene-choices">{task.choices.map((choice) => <button key={choice} aria-label={choice} onClick={() => choose(choice)} className={done && choice === task.answer ? "correct" : ""}>{choice}</button>)}</div>
    <p className="scene-feedback" aria-live="polite">{feedback}</p>
  </div>;
}
