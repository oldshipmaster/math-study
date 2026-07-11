"use client";

import type { LessonScene } from "../../lib/course-types";
import { SceneChoice } from "./SceneChoice";

const configs: Record<string, { visual: React.ReactNode; options: { label: string; value?: string }[]; answer: string }> = {
  "nearest-ten": { visual: <div className="round-line"><span>20</span><i style={{ left: "50%" }}>25</i><span>30</span></div>, options: ["20", "25", "30"].map((label) => ({ label })), answer: "30" },
  "round-switch": { visual: <div className="round-switch"><strong>观察位：4</strong><span>0 1 2 3 4 │ 5 6 7 8 9</span></div>, options: ["舍", "入"].map((label) => ({ label })), answer: "舍" },
  "round-ten": { visual: <div className="round-number">764<span>1</span><small>观察个位</small></div>, options: ["7640", "7650", "7600"].map((label) => ({ label })), answer: "7640" },
  "round-hundred": { visual: <div className="round-number">76<span>4</span>1<small>观察十位</small></div>, options: ["7640", "7600", "7700"].map((label) => ({ label })), answer: "7600" },
  "round-thousand": { visual: <div className="round-number">7<span>6</span>41<small>观察百位</small></div>, options: ["7000", "7600", "8000"].map((label) => ({ label })), answer: "8000" },
};

export function RoundingScene({ scene, onComplete }: { scene: LessonScene; onComplete: (correct: number, attempts: number) => void }) {
  return <SceneChoice {...(configs[scene.id] ?? configs["nearest-ten"])} onComplete={onComplete} className="rounding-scene" />;
}
