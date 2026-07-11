"use client";

import type { LessonScene } from "../../lib/course-types";
import { SceneChoice } from "./SceneChoice";

const dots = <div className="estimate-dots">{Array.from({ length: 36 }, (_, i) => <i key={i} />)}</div>;
const configs: Record<string, { visual: React.ReactNode; options: { label: string; value?: string }[]; answer: string }> = {
  "quick-estimate": { visual: dots, options: ["大约 10", "大约 40", "大约 100"].map((label) => ({ label })), answer: "大约 40" },
  "grid-sample": { visual: <div className="sample-grid">{Array.from({ length: 9 }, (_, i) => <span key={i}>{i === 8 ? "12" : "≈"}</span>)}</div>, options: ["48", "108", "900"].map((label) => ({ label })), answer: "108" },
  "friendly-numbers": { visual: <div className="estimate-equation">2847 + 4102</div>, options: ["3000 + 4000", "2000 + 5000", "2800 + 4100"].map((label) => ({ label })), answer: "3000 + 4000" },
  "estimate-check": { visual: <div className="estimate-equation">3000 + 4000 ≈ 7000<br /><strong>精确答案：6949</strong></div>, options: ["合理", "太小", "太大"].map((label) => ({ label })), answer: "合理" },
  "about-equal": { visual: <div className="comparison-expression"><strong>2847 + 4102</strong><i>?</i><strong>7000</strong></div>, options: ["=", "≈", ">"].map((label) => ({ label })), answer: "≈" },
};

export function EstimateScene({ scene, onComplete }: { scene: LessonScene; onComplete: (correct: number, attempts: number) => void }) {
  return <SceneChoice {...(configs[scene.id] ?? configs["quick-estimate"])} onComplete={onComplete} className="estimate-scene" />;
}
