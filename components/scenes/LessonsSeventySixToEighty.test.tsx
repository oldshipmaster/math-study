import {fireEvent,render,screen} from "@testing-library/react";
import {describe,expect,it,vi} from "vitest";
import type {LessonScene} from "../../lib/course-types";
import {MeasurementScene} from "./MeasurementScene";
const scene=(id:string):LessonScene=>({id,kind:"measurement",eyebrow:"实验",title:"测试",body:"测试"});
describe("lessons seventy-six through eighty",()=>{it("solves every geometry model",()=>{for(const [id,answer] of [["formula-isosceles","7cm"],["area-count","6m²"],["estimate-area-combine","31m²"],["triangle-example","20cm²"],["parallelogram-formula","40cm²"]]){const done=vi.fn();const view=render(<MeasurementScene scene={scene(id)} onComplete={done}/>);fireEvent.click(screen.getByRole("button",{name:answer}));expect(done).toHaveBeenCalledWith(1,1);view.unmount();}});});
