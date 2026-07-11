"use client";
import type {LessonScene} from "../../lib/course-types";
import {SceneChoice} from "./SceneChoice";
const opts=(...labels:string[])=>labels.map(label=>({label}));
const calc=(display:string,active:string)=><div className="calculator"><output>{display}</output><div>{["AC","±","%","÷","7","8","9","×","4","5","6","−","1","2","3","+","0",".","√","="].map(k=><i className={k===active?"active":""} key={k}>{k}</i>)}</div></div>;
const configs:Record<string,{visual:React.ReactNode;options:{label:string}[];answer:string}>={"calculator-estimate":{visual:calc("≈ 15 000","×"),options:opts("约150","约1500","约15000"),answer:"约15000"},"calculator-clear":{visual:calc("0","AC"),options:opts("清除显示","开平方","变成负数"),answer:"清除显示"},"calculator-decimal":{visual:calc("4.9","."),options:opts("4、.、9","4、9、.",".、4、9"),answer:"4、.、9"},"calculator-operation":{visual:calc("14 × 27 = 378","="),options:opts("278","378","478"),answer:"378"},"calculator-check":{visual:calc("15 043","="),options:opts("数量级合理","一定输入错误","应接近150"),answer:"数量级合理"}};
export function CalculatorScene({scene,onComplete}:{scene:LessonScene;onComplete:(correct:number,attempts:number)=>void}){return <SceneChoice {...(configs[scene.id]??configs["calculator-estimate"])} onComplete={onComplete} className="calculator-scene"/>;}
