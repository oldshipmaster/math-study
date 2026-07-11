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
  "line-four-three":{visual:<div className="addition-line">4 → 5 → 6 → 7</div>,options:["6","7","8"].map(label=>({label})),answer:"7"},
  "line-start-large":{visual:<div className="addition-line">3 + 8</div>,options:["从 3 开始","从 8 开始","从 0 开始"].map(label=>({label})),answer:"从 8 开始"},
  "line-tens":{visual:<div className="addition-line">50 → 60 → 70</div>,options:["60","70","80"].map(label=>({label})),answer:"70"},
  "line-fifteen-ten":{visual:<div className="addition-line">15 → 25</div>,options:["16","25","150"].map(label=>({label})),answer:"25"},
  "line-scale":{visual:<div className="addition-line">40 + 30</div>,options:["每格 1","每格 5","每格 10"].map(label=>({label})),answer:"每格 10"},
  "grid-moves":{visual:<div className="hundred-mini">+1 →　+10 ↓</div>,options:["向右一格","向下一行","向左一格"].map(label=>({label})),answer:"向下一行"},
  "grid-start-56":{visual:<div className="hundred-mini">51 52 53 54 55 <b>56</b> 57</div>,options:["46","56","65"].map(label=>({label})),answer:"56"},
  "grid-add-twenty":{visual:<div className="hundred-mini">56 ↓ 66 ↓ 76</div>,options:["66","76","86"].map(label=>({label})),answer:"76"},
  "grid-add-six":{visual:<div className="hundred-mini">76 → 77 → 78 → 79 → 80 → 81 → 82</div>,options:["80","82","86"].map(label=>({label})),answer:"82"},
  "grid-thirty-four":{visual:<div className="hundred-mini">34 + 10 + 8</div>,options:["42","52","62"].map(label=>({label})),answer:"52"},
  "facts-make-ten":{visual:<div className="fact-pairs">1+9　2+8　3+7　?</div>,options:["4","5","6"].map(label=>({label})),answer:"4"},
  "facts-five-five":{visual:<div className="fact-pairs">5 + 5</div>,options:["5","10","15"].map(label=>({label})),answer:"10"},
  "facts-doubles":{visual:<div className="fact-pairs">8 + 8</div>,options:["14","16","18"].map(label=>({label})),answer:"16"},
  "facts-commute":{visual:<div className="fact-pairs">3+7　7+3</div>,options:["相等","左边大","右边大"].map(label=>({label})),answer:"相等"},
  "facts-near-double":{visual:<div className="fact-pairs">6+6+1</div>,options:["12","13","14"].map(label=>({label})),answer:"13"},
  "partition-forty-seven":{visual:<div className="partition-blocks"><span>40</span><span>7</span></div>,options:["40+7","4+7","30+17"].map(label=>({label})),answer:"40+7"},
  "partition-thirty-five":{visual:<div className="partition-blocks"><span>30</span><span>5</span></div>,options:["30+5","3+5","20+5"].map(label=>({label})),answer:"30+5"},
  "partition-parts":{visual:<div className="partition-blocks"><span>40+30</span><span>7+5</span></div>,options:["70 和 12","70 和 2","7 和 12"].map(label=>({label})),answer:"70 和 12"},
  "partition-combine":{visual:<div className="partition-blocks"><span>70</span><span>12</span></div>,options:["72","82","92"].map(label=>({label})),answer:"82"},
  "partition-one-number":{visual:<div className="partition-blocks"><span>80+50</span><span>+4</span></div>,options:["124","134","144"].map(label=>({label})),answer:"134"},
  "column-align":{visual:<div className="expanded-column">385<br/>+157</div>,options:["相同数位对齐","最左边对齐","任意排列"].map(label=>({label})),answer:"相同数位对齐"},
  "column-ones":{visual:<div className="expanded-column">5 + 7</div>,options:["2","12","120"].map(label=>({label})),answer:"12"},
  "column-tens":{visual:<div className="expanded-column">80 + 50</div>,options:["13","130","800"].map(label=>({label})),answer:"130"},
  "column-hundreds":{visual:<div className="expanded-column">300 + 100</div>,options:["4","40","400"].map(label=>({label})),answer:"400"},
  "column-total":{visual:<div className="expanded-column">12 + 130 + 400</div>,options:["432","542","552"].map(label=>({label})),answer:"542"},
};
export function AdditionScene({scene,onComplete}:{scene:LessonScene;onComplete:(correct:number,attempts:number)=>void}){return <SceneChoice {...(configs[scene.id]??configs["add-oranges"])} onComplete={onComplete} className="addition-scene"/>;}
