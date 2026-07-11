"use client";
import type { LessonScene } from "../../lib/course-types";
import { SceneChoice } from "./SceneChoice";
const dots=(a:number,b:number)=><div className="addition-dots"><span>{Array.from({length:a},(_,i)=><i key={i}/>)}</span><b>+</b><span>{Array.from({length:b},(_,i)=><i key={i}/>)}</span></div>;
const configs:Record<string,{visual:React.ReactNode;options:{label:string}[];answer:string}>={
  "add-oranges":{visual:dots(6,3),options:["8","9","10"].map(label=>({label})),answer:"9"},
  "addition-symbol":{visual:<div className="ratio-model">6 ? 3 = 9</div>,options:["+","−","×"].map(label=>({label})),answer:"+"},
  "addition-commute":{visual:<div className="ratio-model">6+3 ? 3+6</div>,options:["相等","左边大","右边大"].map(label=>({label})),answer:"相等"},
  "count-all":{visual:dots(2,5),options:["5","7","10"].map(label=>({label})),answer:"7"},
  "count-on":{visual:<div className="count-on-line">5 → 6 → 7</div>,options:["6","7","8"].map(label=>({label})),answer:"7"},
};
export function AdditionScene({scene,onComplete}:{scene:LessonScene;onComplete:(correct:number,attempts:number)=>void}){return <SceneChoice {...(configs[scene.id]??configs["add-oranges"])} onComplete={onComplete} className="addition-scene"/>;}
