"use client";
import type { LessonScene } from "../../lib/course-types";
import { SceneChoice } from "./SceneChoice";

const columns=(top:string,bottom:string,sign:string)=><div className="decimal-columns"><span>{top}</span><span>{sign} {bottom}</span><hr/><b>?</b></div>;
const configs:Record<string,{visual:React.ReactNode;options:{label:string}[];answer:string}>={
  "decimal-nearest-one":{visual:<div className="decimal-line"><span>1</span><i>1.3</i><span>2</span></div>,options:["1","1.3","2"].map(label=>({label})),answer:"1"},
  "decimal-round-up-one":{visual:<div className="decimal-line"><span>1</span><i className="right">1.7</i><span>2</span></div>,options:["1","1.7","2"].map(label=>({label})),answer:"2"},
  "decimal-tenths":{visual:<div className="decimal-focus">1.<b>1</b><i>5</i></div>,options:["1.1","1.2","1.15"].map(label=>({label})),answer:"1.2"},
  "decimal-hundredths":{visual:<div className="decimal-focus">1.1<b>1</b><i>6</i></div>,options:["1.11","1.12","1.2"].map(label=>({label})),answer:"1.12"},
  "decimal-target-digit":{visual:<div className="decimal-focus">个位 . 十分位 百分位 <i>千分位</i></div>,options:["十分位","百分位","千分位"].map(label=>({label})),answer:"千分位"},
  "decimal-add-money":{visual:columns("4.5","7.7","+"),options:["11.2","12.2","12.12"].map(label=>({label})),answer:"12.2"},
  "decimal-align-add":{visual:columns("4.5","7.7","+"),options:["小数点对齐","最左边对齐","末位数字对齐"].map(label=>({label})),answer:"小数点对齐"},
  "decimal-tenths-carry":{visual:<div className="decimal-blocks">{Array.from({length:12},(_,i)=><i key={i}/>)}</div>,options:["0.12","1.2","12.0"].map(label=>({label})),answer:"1.2"},
  "decimal-column-add":{visual:columns("4.5","7.7","+"),options:["12.2","11.12","12.0"].map(label=>({label})),answer:"12.2"},
  "decimal-add-check":{visual:<div className="fraction-rule">4.5≈5，7.7≈8</div>,options:["12.2","1.22","122"].map(label=>({label})),answer:"12.2"},
  "decimal-price-difference":{visual:columns("8.2","4.7","−"),options:["3.5","4.5","3.15"].map(label=>({label})),answer:"3.5"},
  "decimal-align-subtract":{visual:columns("8.2","4.7","−"),options:["小数点对齐","最左边对齐","末位数字对齐"].map(label=>({label})),answer:"小数点对齐"},
  "decimal-borrow":{visual:<div className="decimal-focus">8.<i>12</i> − 4.7</div>,options:["12 个十分之一","2 个十分之一","20 个十分之一"].map(label=>({label})),answer:"12 个十分之一"},
  "decimal-column-subtract":{visual:columns("8.2","4.7","−"),options:["3.5","4.5","3.15"].map(label=>({label})),answer:"3.5"},
  "decimal-subtract-check":{visual:<div className="fraction-rule">差 + 减数 = 被减数</div>,options:["3.5+4.7=8.2","8.2+4.7=3.5","8.2-3.5=3.5"].map(label=>({label})),answer:"3.5+4.7=8.2"},
};
export function DecimalScene({scene,onComplete}:{scene:LessonScene;onComplete:(correct:number,attempts:number)=>void}){return <SceneChoice {...(configs[scene.id]??configs["decimal-tenths"])} onComplete={onComplete} className="decimal-scene"/>;}
