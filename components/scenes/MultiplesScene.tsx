"use client";

import type { LessonScene } from "../../lib/course-types";
import { SceneChoice } from "./SceneChoice";

const configs: Record<string, { visual: React.ReactNode; options: { label: string; value?: string }[]; answer: string }> = {
  "shoe-array": { visual: <div className="shoe-array">{Array.from({ length: 12 }, (_, i) => <i key={i}>◆</i>)}</div>, options: ["6 × 2 = 12", "6 + 2 = 12", "12 ÷ 6 = 6"].map((label) => ({ label })), answer: "6 × 2 = 12" },
  "multiple-jumps": { visual: <div className="multiple-line">{[0, 3, 6, 9, 12].map((n) => <span key={n}>{n}</span>)}</div>, options: ["13", "15", "18"].map((label) => ({ label })), answer: "15" },
  "multiple-filter": { visual: <div className="multiple-cloud">4 · 6 · 8 · 10 · 12 · 16</div>, options: ["4、8、12、16", "4、6、10", "8、10、12"].map((label) => ({ label })), answer: "4、8、12、16" },
  "venn-common": { visual: <div className="venn"><div><b>3 的倍数</b></div><div><b>4 的倍数</b></div><span>共同区域</span></div>, options: [{ label: "只放左圈" }, { label: "放入重叠区" }, { label: "只放右圈" }], answer: "放入重叠区" },
  "least-common": { visual: <div className="common-list"><span>3：3, 6, 9, <b>12</b>, 15…</span><span>4：4, 8, <b>12</b>, 16…</span></div>, options: ["7", "24", "12"].map((label) => ({ label })), answer: "12" },
};

export function MultiplesScene({ scene, onComplete }: { scene: LessonScene; onComplete: (correct: number, attempts: number) => void }) {
  return <SceneChoice {...(configs[scene.id] ?? configs["shoe-array"])} onComplete={onComplete} className="multiples-scene" />;
}
