"use client";
import type { LessonScene } from "../../lib/course-types";
import { SceneChoice } from "./SceneChoice";

const grid = (count: number, size: number, cube = false) => <div className={`power-grid ${cube ? "cube-grid" : ""}`} style={{ "--size": size } as React.CSSProperties}>{Array.from({ length: count }, (_, i) => <i key={i} />)}</div>;
const configs: Record<string, { visual: React.ReactNode; options: { label: string }[]; answer: string }> = {
  "square-two": { visual: grid(4,2), options: ["2", "4", "8"].map(label=>({label})), answer:"4" },
  "square-three": { visual: grid(9,3), options: ["6", "9", "27"].map(label=>({label})), answer:"9" },
  "square-table": { visual: <div className="power-formula">7² = 7 × 7</div>, options: ["14","42","49"].map(label=>({label})), answer:"49" },
  "square-sequence": { visual: <div className="power-formula">1 · 4 · 9 · 16 · 25 · ?</div>, options: ["30","36","49"].map(label=>({label})), answer:"36" },
  "square-parity": { visual: grid(81,9), options: ["奇数","偶数","无法判断"].map(label=>({label})), answer:"奇数" },
  "cube-two": { visual: grid(8,2,true), options: ["4","6","8"].map(label=>({label})), answer:"8" },
  "cube-layers": { visual: grid(8,2,true), options: ["4×2=8","2×2=4","8×2=16"].map(label=>({label})), answer:"4×2=8" },
  "cube-three": { visual: grid(27,3,true), options: ["9","18","27"].map(label=>({label})), answer:"27" },
  "square-or-cube": { visual: <div className="power-formula">4³ = ?</div>, options: ["4×3","4×4","4×4×4"].map(label=>({label})), answer:"4×4×4" },
  "cube-sequence": { visual: <div className="power-formula">1 · 8 · 27 · 64 · ?</div>, options: ["100","125","216"].map(label=>({label})), answer:"125" },
};
export function PowerScene({ scene, onComplete }: { scene: LessonScene; onComplete: (correct: number, attempts: number) => void }) { return <SceneChoice {...(configs[scene.id] ?? configs["square-two"])} onComplete={onComplete} className="power-scene" />; }
