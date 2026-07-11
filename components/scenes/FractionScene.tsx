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
  "share-twelve": { visual: <div className="quantity-groups">{[0,1,2,3].map(g=><span key={g}>● ● ●</span>)}</div>, options:["2","3","4"].map(label=>({label})), answer:"3" },
  "take-three-parts": { visual: <div className="quantity-groups">{[0,1,2,3].map(g=><span key={g} className={g<3?"taken":""}>● ● ●</span>)}</div>, options:["3","9","12"].map(label=>({label})), answer:"9" },
  "divide-then-multiply": { visual:<div className="fraction-rule">数量 ÷ 分母 × 分子</div>, options:["先除分母，再乘分子","先乘分母，再除分子","分子分母相加"].map(label=>({label})), answer:"先除分母，再乘分子" },
  "hens-three-quarters": { visual:<div className="fraction-rule">24 ÷ 4 × 3</div>, options:["6","18","32"].map(label=>({label})), answer:"18" },
  "fraction-quantity-builder": { visual:<div className="fraction-rule">20 的 2/5</div>, options:["4","8","10"].map(label=>({label})), answer:"8" },
  "same-eighths": { visual:<div className="fraction-compare">{bar(8,3)}{bar(8,1)}{bar(8,5)}{bar(8,6)}</div>, options:["3/8","1/8","5/8","6/8"].map(label=>({label})), answer:"6/8" },
  "numerator-wins": { visual:<div className="fraction-compare">{bar(7,3)}{bar(7,5)}</div>, options:["3/7","5/7","一样大"].map(label=>({label})), answer:"5/7" },
  "like-order-up": { visual:<div className="fraction-rule">1/8 · 3/8 · 5/8 · 6/8</div>, options:["1/8 < 3/8 < 5/8 < 6/8","6/8 < 5/8 < 3/8 < 1/8","1/8 < 6/8 < 3/8 < 5/8"].map(label=>({label})), answer:"1/8 < 3/8 < 5/8 < 6/8" },
  "like-bars": { visual:<div className="fraction-compare">{bar(8,3)}{bar(8,6)}</div>, options:["3/8","6/8"].map(label=>({label})), answer:"6/8" },
  "like-symbol": { visual:<div className="fraction-rule">2/9 ? 7/9</div>, options:[">","<","="].map(label=>({label})), answer:"<" },
  "carrot-halves": { visual:<div className="fraction-compare">{bar(2,1)}{bar(3,1)}{bar(5,1)}</div>, options:["1/2","1/3","1/5"].map(label=>({label})), answer:"1/2" },
  "denominator-reverse": { visual:<div className="fraction-rule">1/2 · 1/3 · 1/5</div>, options:["1/2","1/3","1/5"].map(label=>({label})), answer:"1/5" },
  "unit-order-down": { visual:<div className="fraction-rule">单位分数降序</div>, options:["1/2 > 1/4 > 1/8","1/8 > 1/4 > 1/2","1/4 > 1/2 > 1/8"].map(label=>({label})), answer:"1/2 > 1/4 > 1/8" },
  "unit-bars": { visual:<div className="fraction-compare">{bar(3,1)}{bar(6,1)}</div>, options:["1/3","1/6","一样大"].map(label=>({label})), answer:"1/3" },
  "comparison-rules": { visual:<div className="fraction-rule">1/4 ? 1/7</div>, options:["分子相同，看分母；分母小的更大","分母相同，看分子","直接相加"].map(label=>({label})), answer:"分子相同，看分母；分母小的更大" },
};
export function FractionScene({ scene, onComplete }: { scene: LessonScene; onComplete: (correct: number, attempts: number) => void }) { return <SceneChoice {...(configs[scene.id] ?? configs["fair-share"])} onComplete={onComplete} className="fraction-scene" />; }
