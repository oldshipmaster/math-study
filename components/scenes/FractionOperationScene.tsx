"use client";
import type { LessonScene } from "../../lib/course-types";
import { SceneChoice } from "./SceneChoice";

const ladder = (steps:string[]) => <div className="operation-ladder">{steps.map((s,i)=><span key={s}><b>{i+1}</b>{s}</span>)}</div>;
const configs:Record<string,{visual:React.ReactNode;options:{label:string}[];answer:string}>={
  "add-like-bars":{visual:<div className="fraction-rule">1/5 + 2/5</div>,options:["3/5","3/10","2/5"].map(label=>({label})),answer:"3/5"},
  "add-keep-denominator":{visual:<div className="fraction-rule">2/7 + 3/7</div>,options:["5/7","5/14","6/7"].map(label=>({label})),answer:"5/7"},
  "add-common-denominator":{visual:ladder(["找 12","1/4=3/12","1/6=2/12"]),options:["3/12 + 2/12","1/12 + 1/12","4/12 + 6/12"].map(label=>({label})),answer:"3/12 + 2/12"},
  "add-mixed-to-improper":{visual:<div className="fraction-rule">2又1/4 → ?/4</div>,options:["8/4","9/4","10/4"].map(label=>({label})),answer:"9/4"},
  "add-four-steps":{visual:ladder(["?","?","?","?"]),options:["化假→通分→分子相加→化带","通分→化带→相加→化假","相加→通分→化假→化带"].map(label=>({label})),answer:"化假→通分→分子相加→化带"},
  "subtract-cookies":{visual:<div className="fraction-rule">3/4 - 1/4</div>,options:["2/4","2/8","3/4"].map(label=>({label})),answer:"2/4"},
  "subtract-simplify":{visual:<div className="fraction-rule">2/4 ÷ 2/2</div>,options:["1/2","1/4","2/2"].map(label=>({label})),answer:"1/2"},
  "subtract-common-denominator":{visual:ladder(["找 10","7/2=35/10","2/5=4/10"]),options:["35/10 - 4/10","7/10 - 2/10","14/10 - 10/10"].map(label=>({label})),answer:"35/10 - 4/10"},
  "subtract-mixed":{visual:<div className="fraction-rule">3又1/2 → ?/2</div>,options:["6/2","7/2","8/2"].map(label=>({label})),answer:"7/2"},
  "subtract-four-steps":{visual:ladder(["?","?","?","?"]),options:["化假→通分→分子相减→化带","通分→化带→相减→化假","相减→通分→约分→化假"].map(label=>({label})),answer:"化假→通分→分子相减→化带"},
};
export function FractionOperationScene({scene,onComplete}:{scene:LessonScene;onComplete:(correct:number,attempts:number)=>void}){return <SceneChoice {...(configs[scene.id]??configs["add-like-bars"])} onComplete={onComplete} className="fraction-operation-scene"/>;}
