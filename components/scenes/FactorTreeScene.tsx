"use client";
import type { LessonScene } from "../../lib/course-types";
import { SceneChoice } from "./SceneChoice";

const tree = (root: string, branches: string[]) => <div className="factor-tree"><strong>{root}</strong><div>{branches.map(n => <span key={n}>{n}</span>)}</div></div>;
const configs: Record<string, { visual: React.ReactNode; options: { label: string }[]; answer: string }> = {
  "prime-blocks": { visual: tree("30", ["2", "3", "5"]), options: ["2", "6", "10"].map(label => ({ label })), answer: "2" },
  "factor-thirty": { visual: tree("30", ["2", "15", "3", "5"]), options: ["2 × 3 × 5", "3 × 10", "1 × 30"].map(label => ({ label })), answer: "2 × 3 × 5" },
  "factor-seventy-two": { visual: tree("72", ["8", "9", "?", "?"]), options: ["8→2×4，9→3×3", "8→1×8，9→1×9", "8→3×5，9→4×5"].map(label => ({ label })), answer: "8→2×4，9→3×3" },
  "circle-leaves": { visual: tree("72", ["2", "2", "2", "3", "3"]), options: ["2、3", "2、4、9", "8、9"].map(label => ({ label })), answer: "2、3" },
  "same-product": { visual: <div className="two-trees">{tree("72", ["8", "9"])}{tree("72", ["6", "12"])}</div>, options: ["结果相同", "第一棵正确", "第二棵正确"].map(label => ({ label })), answer: "结果相同" },
};
export function FactorTreeScene({ scene, onComplete }: { scene: LessonScene; onComplete: (correct: number, attempts: number) => void }) { return <SceneChoice {...(configs[scene.id] ?? configs["factor-thirty"])} onComplete={onComplete} className="factor-tree-scene" />; }
