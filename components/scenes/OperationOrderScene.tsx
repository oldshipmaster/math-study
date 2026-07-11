"use client";
import type {LessonScene} from "../../lib/course-types";
import {SceneChoice} from "./SceneChoice";
const opts=(...labels:string[])=>labels.map(label=>({label}));
const formula=(steps:string[],active:number)=><div className="order-formula">{steps.map((step,i)=><span className={i===active?"active":""} key={step}><b>{i+1}</b>{step}</span>)}</div>;
const configs:Record<string,{visual:React.ReactNode;options:{label:string}[];answer:string}>={"order-priority":{visual:formula(["括号","乘方","乘除","加减"],0),options:opts("括号","乘除","加减"),answer:"括号"},"order-parentheses":{visual:formula(["4×(2+3)","4×5","20"],1),options:opts("5","6","20"),answer:"5"},"order-same-level":{visual:formula(["8÷2×3","4×3","12"],1),options:opts("4/6","12","24"),answer:"12"},"order-complex-first":{visual:formula(["17−(4+6)÷2+36","17−10÷2+36"],1),options:opts("17−10÷2+36","13÷2+36","17−4+3+36"),answer:"17−10÷2+36"},"order-complex-total":{visual:formula(["17−10÷2+36","17−5+36","12+36","48"],3),options:opts("43","48","58"),answer:"48"}};
export function OperationOrderScene({scene,onComplete}:{scene:LessonScene;onComplete:(correct:number,attempts:number)=>void}){return <SceneChoice {...(configs[scene.id]??configs["order-priority"])} onComplete={onComplete} className="operation-order-scene"/>;}
