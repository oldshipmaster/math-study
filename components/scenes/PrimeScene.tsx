"use client";
import type { LessonScene } from "../../lib/course-types";
import { SceneChoice } from "./SceneChoice";

const configs: Record<string, { visual: React.ReactNode; options: { label: string; value?: string }[]; answer: string }> = {
  "prime-gate": { visual: <div className="factor-gates"><span>因数 1</span><strong>7</strong><span>因数 7</span></div>, options: ["6", "7", "9"].map(label => ({ label })), answer: "7" },
  "two-vs-four": { visual: <div className="factor-cards"><span>2：1、2</span><span>4：1、2、4</span></div>, options: ["4 有因数 2", "4 是偶数", "4 大于 2"].map(label => ({ label })), answer: "4 有因数 2" },
  "prime-sieve": { visual: <div className="prime-grid">{[11,12,13,14,15,16,17,18,19,20,21].map(n => <i key={n} className={[12,14,15,16,18,20,21].includes(n) ? "crossed" : ""}>{n}</i>)}</div>, options: ["15", "17", "21"].map(label => ({ label })), answer: "17" },
  "prime-check": { visual: <div className="division-check">83 ÷ 2、3、5、7<br /><strong>都不能整除</strong></div>, options: ["是质数", "不是质数", "无法判断"].map(label => ({ label })), answer: "是质数" },
  "prime-forever": { visual: <div className="prime-stream">2 · 3 · 5 · 7 · 11 · 13 · 17 · …</div>, options: ["质数有无穷多个", "有最大的质数", "所有奇数都是质数"].map(label => ({ label })), answer: "质数有无穷多个" },
};
export function PrimeScene({ scene, onComplete }: { scene: LessonScene; onComplete: (correct: number, attempts: number) => void }) { return <SceneChoice {...(configs[scene.id] ?? configs["prime-gate"])} onComplete={onComplete} className="prime-scene" />; }
