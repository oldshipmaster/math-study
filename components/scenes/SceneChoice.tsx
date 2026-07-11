"use client";

import { useState } from "react";

export function SceneChoice({ visual, options, answer, onComplete, className = "" }: { visual: React.ReactNode; options: { label: string; value?: string }[]; answer: string; onComplete: (correct: number, attempts: number) => void; className?: string }) {
  const [attempts, setAttempts] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [done, setDone] = useState(false);

  return <div className={`activity choice-scene ${className}`}>
    <div className="scene-visual" aria-hidden="true">{visual}</div>
    <div className="scene-options">{options.map(({ label, value }) => <button key={label} disabled={done} aria-label={label} onClick={() => {
      const next = attempts + 1;
      setAttempts(next);
      if ((value ?? label) === answer) {
        setDone(true);
        setFeedback("答对了！你找到了关键规律。");
        onComplete(1, next);
      } else setFeedback("再观察一次，试试另一个答案。");
    }}>{label}</button>)}</div>
    <p className="scene-feedback" aria-live="polite">{feedback}</p>
  </div>;
}
