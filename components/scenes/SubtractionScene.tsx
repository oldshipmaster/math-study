"use client";
import type {LessonScene} from "../../lib/course-types";
import {SceneChoice} from "./SceneChoice";
const model=(text:string)=><div className="subtraction-model">{text}</div>;
const path=(steps:string[])=><div className="subtraction-path">{steps.map((s,i)=><span key={s}><b>{i+1}</b>{s}</span>)}</div>;
const configs:Record<string,{visual:React.ReactNode;options:{label:string}[];answer:string}>={
  "subtract-ten-six":{visual:model("10 − 6"),options:["3","4","6"].map(label=>({label})),answer:"4"},
  "inverse-fact":{visual:model("3 + 7 = 10"),options:["10−3=7","10−7=10","7−3=10"].map(label=>({label})),answer:"10−3=7"},
  "subtract-pattern":{visual:model("10−3　?　10−7"),options:["10−3 更大","10−7 更大","一样大"].map(label=>({label})),answer:"10−3 更大"},
  "half-subtraction":{visual:model("12 − 6"),options:["5","6","7"].map(label=>({label})),answer:"6"},
  "fact-family":{visual:model("4 · 6 · 10"),options:["4+6=10，10−6=4","4+10=6，10−4=10","6−4=10，4+6=6"].map(label=>({label})),answer:"4+6=10，10−6=4"},
  "partition-subtract-25":{visual:model("25 = ?"),options:["20+5","2+5","10+5"].map(label=>({label})),answer:"20+5"},
  "subtract-eighty-one-twenty":{visual:model("81 − 20"),options:["51","61","71"].map(label=>({label})),answer:"61"},
  "subtract-sixty-one-five":{visual:model("61 − 5"),options:["46","56","66"].map(label=>({label})),answer:"56"},
  "partition-subtract-check":{visual:model("81 − 25 = 56"),options:["56+25=81","81+25=56","56−25=81"].map(label=>({label})),answer:"56+25=81"},
  "partition-subtract-new":{visual:model("93 − 40 − 7"),options:["36","46","56"].map(label=>({label})),answer:"46"},
  "shop-price":{visual:model("付款 10.00　价格 7.35"),options:["从 7.35 补到 10","把两数相加","从 7.35 减 10"].map(label=>({label})),answer:"从 7.35 补到 10"},
  "shop-to-tenth":{visual:path(["7.35","+ ?","7.40"]),options:["0.05","0.5","5"].map(label=>({label})),answer:"0.05"},
  "shop-to-one":{visual:path(["7.40","+ ?","8.00"]),options:["0.06","0.60","6.00"].map(label=>({label})),answer:"0.60"},
  "shop-to-ten":{visual:path(["8.00","+ ?","10.00"]),options:["1","2","3"].map(label=>({label})),answer:"2"},
  "shop-change-total":{visual:path(["0.05","0.60","2.00"]),options:["2.55","2.65","3.65"].map(label=>({label})),answer:"2.65"},
  "expanded-subtract-start":{visual:model("178 → 324"),options:["补到 324","补到 178","两数相加"].map(label=>({label})),answer:"补到 324"},
  "expanded-to-180":{visual:path(["178","+2","180"]),options:["2","20","22"].map(label=>({label})),answer:"2"},
  "expanded-to-200":{visual:path(["180","+20","200"]),options:["2","20","200"].map(label=>({label})),answer:"20"},
  "expanded-to-300":{visual:path(["200","+100","300"]),options:["10","100","124"].map(label=>({label})),answer:"100"},
  "expanded-subtract-total":{visual:path(["+2","+20","+100","+24"]),options:["136","146","156"].map(label=>({label})),answer:"146"},
  "subtract-column-align":{visual:model("  932\n− 767"),options:["相同数位对齐","最左边对齐","任意排列"].map(label=>({label})),answer:"相同数位对齐"},
  "subtract-borrow-ones":{visual:model("12 − 7"),options:["3","5","7"].map(label=>({label})),answer:"5"},
  "subtract-borrow-tens":{visual:model("12 个十 − 6 个十"),options:["5","6","8"].map(label=>({label})),answer:"6"},
  "subtract-column-total":{visual:model("  932\n− 767\n———"),options:["155","165","175"].map(label=>({label})),answer:"165"},
  "subtract-column-check":{visual:model("932 − 767 = 165"),options:["767+165=932","932+165=767","767−165=932"].map(label=>({label})),answer:"767+165=932"},
};
export function SubtractionScene({scene,onComplete}:{scene:LessonScene;onComplete:(correct:number,attempts:number)=>void}){return <SceneChoice {...(configs[scene.id]??configs["subtract-ten-six"])} onComplete={onComplete} className="subtraction-scene"/>;}
