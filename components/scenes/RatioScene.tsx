"use client";
import type { LessonScene } from "../../lib/course-types";
import { SceneChoice } from "./SceneChoice";
const grid=(active:number)=><div className="percent-grid">{Array.from({length:100},(_,i)=><i key={i} className={i<active?"active":""}/>)}</div>;
const model=(text:string)=><div className="ratio-model">{text}</div>;
const configs:Record<string,{visual:React.ReactNode;options:{label:string}[];answer:string}>={
  "percent-increase":{visual:grid(20),options:["12%","20%","72%"].map(label=>({label})),answer:"20%"},
  "percent-decrease":{visual:grid(25),options:["20%","25%","40%"].map(label=>({label})),answer:"25%"},
  "percent-one":{visual:model("250 ÷ 100"),options:["1","2.5","25"].map(label=>({label})),answer:"2.5"},
  "percent-thirty":{visual:model("2.5 × 30"),options:["30","75","175"].map(label=>({label})),answer:"75"},
  "percent-sale":{visual:model("250 − 75"),options:["75","175","225"].map(label=>({label})),answer:"175"},
  "ratio-icecream":{visual:<div className="ratio-bars"><span style={{flex:3}}>草莓 3</span><span style={{flex:4}}>巧克力 4</span></div>,options:["3:4","4:3","3:7"].map(label=>({label})),answer:"3:4"},
  "ratio-symbol":{visual:model("3 ? 4"),options:[":","/","%"].map(label=>({label})),answer:":"},
  "ratio-simplify":{visual:model("40:50 ÷ 10"),options:["4:5","8:10","40:5"].map(label=>({label})),answer:"4:5"},
  "ratio-order":{visual:model("长 40 · 宽 30"),options:["40:30","30:40","70:40"].map(label=>({label})),answer:"40:30"},
  "ratio-painting":{visual:model("40:30"),options:["4:3","3:4","2:3"].map(label=>({label})),answer:"4:3"},
  "part-whole-cats":{visual:grid(40),options:["4/10","4:6","10/4"].map(label=>({label})),answer:"4/10"},
  "proportion-simplify":{visual:model("4/10 ÷ 2/2"),options:["2/5","4/5","1/5"].map(label=>({label})),answer:"2/5"},
  "ratio-or-proportion":{visual:model("橘猫 4 · 全部 10"),options:["部分/整体","部分:部分","整体/部分"].map(label=>({label})),answer:"部分/整体"},
  "gray-cat-percent":{visual:grid(10),options:["1%","10%","100%"].map(label=>({label})),answer:"10%"},
  "proportion-model":{visual:grid(60),options:["30%","50%","60%"].map(label=>({label})),answer:"60%"},
  "three-fifths":{visual:grid(60),options:["0.3","0.5","0.6"].map(label=>({label})),answer:"0.6"},
  "fraction-decimal":{visual:model("3 ÷ 5"),options:["0.35","0.6","1.5"].map(label=>({label})),answer:"0.6"},
  "decimal-percent":{visual:model("0.6 × 100%"),options:["6%","60%","600%"].map(label=>({label})),answer:"60%"},
  "ratio-fraction":{visual:model("3:12 = 3/12"),options:["1/4","1/3","3/4"].map(label=>({label})),answer:"1/4"},
  "representation-chain":{visual:model("同一个阴影"),options:["1/8=0.125=12.5%","1/8=0.8=8%","1/8=1.25=125%"].map(label=>({label})),answer:"1/8=0.125=12.5%"},
};
export function RatioScene({scene,onComplete}:{scene:LessonScene;onComplete:(correct:number,attempts:number)=>void}){return <SceneChoice {...(configs[scene.id]??configs["percent-increase"])} onComplete={onComplete} className="ratio-scene"/>;}
