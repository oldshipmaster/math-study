"use client";
import type { LessonScene } from "../../lib/course-types";
import { SceneChoice } from "./SceneChoice";

const bar = (parts: number, shaded: number) => <div className="fraction-bar">{Array.from({ length: parts },(_,i)=><i key={i} className={i < shaded ? "shaded" : ""}/>)}</div>;
const configs: Record<string, { visual: React.ReactNode; options: { label: string }[]; answer: string }> = {
  "fair-share": { visual: bar(4,1), options: ["1/2","1/4","4/1"].map(label=>({label})), answer:"1/4" },
  "fraction-parts": { visual: <div className="fraction-structure"><strong>3</strong><hr/><strong>8</strong><span>分子<br/>分母</span></div>, options: ["3","8","分数线"].map(label=>({label})), answer:"8" },
  "shade-three-eighths": { visual: bar(8,3), options: ["涂 3 格","涂 5 格","涂 8 格"].map(label=>({label})), answer:"涂 3 格" },
  "half-quarter": { visual: <div className="fraction-compare">{bar(2,1)}{bar(4,1)}</div>, options: ["1/2","1/4","一样大"].map(label=>({label})), answer:"1/2" },
  "unit-fractions": { visual: <div className="fraction-compare">{bar(3,1)}{bar(5,1)}{bar(8,1)}</div>, options: ["1/3","1/5","1/8"].map(label=>({label})), answer:"1/3" },
};
export function FractionScene({ scene, onComplete }: { scene: LessonScene; onComplete: (correct: number, attempts: number) => void }) { return <SceneChoice {...(configs[scene.id] ?? configs["fair-share"])} onComplete={onComplete} className="fraction-scene" />; }
