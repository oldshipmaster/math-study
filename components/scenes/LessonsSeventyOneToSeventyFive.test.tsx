import {fireEvent,render,screen} from "@testing-library/react";
import {describe,expect,it,vi} from "vitest";
import type {LessonScene} from "../../lib/course-types";
import {CalculatorScene} from "./CalculatorScene";
import {MeasurementScene} from "./MeasurementScene";
import {OperationOrderScene} from "./OperationOrderScene";
const scene=(id:string,kind:LessonScene["kind"]):LessonScene=>({id,kind,eyebrow:"实验",title:"测试",body:"测试"});
describe("lessons seventy-one through seventy-five",()=>{
it("uses arithmetic laws",()=>{const done=vi.fn();render(<OperationOrderScene scene={scene("law-distributive","operation-order")} onComplete={done}/>);fireEvent.click(screen.getByRole("button",{name:"42"}));expect(done).toHaveBeenCalledWith(1,1);});
it("checks calculator estimates",()=>{const done=vi.fn();render(<CalculatorScene scene={scene("calculator-check","calculator")} onComplete={done}/>);fireEvent.click(screen.getByRole("button",{name:"数量级合理"}));expect(done).toHaveBeenCalledWith(1,1);});
it("solves measurement models",()=>{for(const [id,answer] of [["length-cm-m","0.6m"],["length-route-km","2.59km"],["perimeter-complex","46m"]]){const done=vi.fn();const view=render(<MeasurementScene scene={scene(id,"measurement")} onComplete={done}/>);fireEvent.click(screen.getByRole("button",{name:answer}));expect(done).toHaveBeenCalledWith(1,1);view.unmount();}});});
