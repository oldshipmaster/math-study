"use client";
import type {LessonScene} from "../../lib/course-types";
import {SceneChoice} from "./SceneChoice";
const opts=(...labels:string[])=>labels.map(label=>({label}));
const ruler=(labels:string[])=><div className="measure-ruler">{labels.map((v,i)=><span key={`${v}-${i}`}>{v}</span>)}</div>;
const shape=(labels:string[])=><div className="perimeter-shape">{labels.map((v,i)=><span key={`${v}-${i}`}>{v}</span>)}</div>;
const configs:Record<string,{visual:React.ReactNode;options:{label:string}[];answer:string}>={
"length-meaning":{visual:ruler(["A","距离","B"]),options:opts("两点之间的距离","物体的重量","经过的时间"),answer:"两点之间的距离"},"length-unit-scale":{visual:ruler(["km","m","cm","mm"]),options:opts("千米","厘米","毫米"),answer:"千米"},"length-cm-mm":{visual:ruler(["60cm","×10","600mm"]),options:opts("60mm","600mm","6000mm"),answer:"600mm"},"length-cm-m":{visual:ruler(["60cm","÷100","0.6m"]),options:opts("0.6m","6m","60m"),answer:"0.6m"},"length-choose-unit":{visual:ruler(["黄蜂","15 ?"]),options:opts("千米","米","毫米"),answer:"毫米"},
"length-tree-growth":{visual:ruler(["15.4m","→","16.6m"]),options:opts("0.2m","1.2m","2.2m"),answer:"1.2m"},"length-year-average":{visual:ruler(["1.2m","÷4","0.3m"]),options:opts("0.3m","3m","4.8m"),answer:"0.3m"},"length-convert-km":{visual:ruler(["1.2km","×1000","1200m"]),options:opts("120m","1200m","12000m"),answer:"1200m"},"length-route-total":{visual:ruler(["760m","1200m","630m"]),options:opts("1590m","2590m","3590m"),answer:"2590m"},"length-route-km":{visual:ruler(["2590m","÷1000","2.59km"]),options:opts("0.259km","2.59km","25.9km"),answer:"2.59km"},
"perimeter-meaning":{visual:shape(["边","边","边","边"]),options:opts("所有边的总长度","图形内部大小","最长的一条边"),answer:"所有边的总长度"},"perimeter-court":{visual:shape(["11","24","11","24"]),options:opts("35m","70m","264m"),answer:"70m"},"perimeter-opposite":{visual:shape(["12","9","?"]),options:opts("9+?=12","9×?=12","12+?=9"),answer:"9+?=12"},"perimeter-missing":{visual:shape(["12−9","?"]),options:opts("2m","3m","4m"),answer:"3m"},"perimeter-complex":{visual:shape(["12","6","9","5","3","11"]),options:opts("36m","46m","56m"),answer:"46m"},
};
export function MeasurementScene({scene,onComplete}:{scene:LessonScene;onComplete:(correct:number,attempts:number)=>void}){return <SceneChoice {...(configs[scene.id]??configs["length-meaning"])} onComplete={onComplete} className="measurement-scene"/>;}
