"use client";

import type { LessonScene } from "../../lib/course-types";
import { SceneChoice } from "./SceneChoice";

const configs: Record<string, { visual: React.ReactNode; options: { label: string; value?: string }[]; answer: string }> = {
  "compare-amounts": { visual: <div className="amount-rows"><span>● ● ● ●</span><span>● ● ● ● ● ●</span><span>● ● ● ● ●</span></div>, options: ["第一盘", "第二盘", "第三盘"].map((label) => ({ label })), answer: "第二盘" },
  "symbol-mouth": { visual: <div className="comparison-expression"><strong>8</strong><i>?</i><strong>5</strong></div>, options: [{ label: "小于", value: "<" }, { label: "等于", value: "=" }, { label: "大于", value: ">" }], answer: ">" },
  "digit-spotlight": { visual: <div className="digit-rows"><span><i>1</i><b>4</b>04</span><span><i>1</i><b>1</b>33</span></div>, options: ["千位", "百位", "十位", "个位"].map((label) => ({ label })), answer: "百位" },
  "digit-count": { visual: <div className="comparison-expression"><strong>999</strong><i>?</i><strong>1000</strong></div>, options: ["999", "1000", "一样大"].map((label) => ({ label })), answer: "1000" },
  "compare-arena": { visual: <div className="comparison-stack"><span>36 ? 63</span><span>502 ? 499</span><span>808 ? 808</span></div>, options: [{ label: "<、>、=" }, { label: ">、<、=" }, { label: "<、<、>" }], answer: "<、>、=" },
};

export function CompareScene({ scene, onComplete }: { scene: LessonScene; onComplete: (correct: number, attempts: number) => void }) {
  const config = configs[scene.id] ?? configs["symbol-mouth"];
  return <SceneChoice {...config} onComplete={onComplete} className="compare-scene" />;
}
