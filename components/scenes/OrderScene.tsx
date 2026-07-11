"use client";

import { useState } from "react";
import type { LessonScene } from "../../lib/course-types";

const orders: Record<string, { cards: string[]; target: string[]; label: string }> = {
  "height-line": { cards: ["150", "120", "135"], target: ["120", "135", "150"], label: "从矮到高" },
  "ascending-track": { cards: ["912", "45", "5121", "444"], target: ["45", "444", "912", "5121"], label: "升序" },
  "descending-track": { cards: ["444", "5121", "45", "912"], target: ["5121", "912", "444", "45"], label: "降序" },
  "same-digits": { cards: ["5121", "5234"], target: ["5234"], label: "选择较大的数" },
  "ranking-board": { cards: ["912", "45", "5234", "444", "10423", "5121"], target: ["10423", "5234", "5121"], label: "前三名" },
};

export function OrderScene({ scene, onComplete }: { scene: LessonScene; onComplete: (correct: number, attempts: number) => void }) {
  const config = orders[scene.id] ?? orders["ascending-track"];
  const [placed, setPlaced] = useState<string[]>([]);
  const [attempts, setAttempts] = useState(0);
  const [feedback, setFeedback] = useState("");
  const done = placed.length === config.target.length;

  return <div className="activity order-scene"><p className="track-label">{config.label}</p><div className="order-track">{config.target.map((_, index) => <span key={index}>{placed[index] ?? index + 1}</span>)}</div><div className="order-cards">{config.cards.map((card) => <button key={card} aria-label={card} disabled={done || placed.includes(card)} onClick={() => {
    const nextAttempts = attempts + 1;
    setAttempts(nextAttempts);
    if (card === config.target[placed.length]) {
      const next = [...placed, card];
      setPlaced(next);
      setFeedback("位置正确，继续排下一个。");
      if (next.length === config.target.length) onComplete(1, nextAttempts);
    } else setFeedback("这个位置还不对，比较一下剩余数字。");
  }}>{card}</button>)}</div><p className="scene-feedback" aria-live="polite">{feedback}</p></div>;
}
