import {fireEvent,render,screen} from "@testing-library/react";
import {describe,expect,it,vi} from "vitest";
import type {LessonScene} from "../../lib/course-types";
import {MultiplicationScene} from "./MultiplicationScene";
import {SubtractionScene} from "./SubtractionScene";
const scene=(id:string,kind:LessonScene["kind"]):LessonScene=>({id,kind,eyebrow:"实验",title:"测试",body:"测试"});
describe("lessons forty-one through forty-five",()=>{
  it("solves borrowing column subtraction",()=>{const done=vi.fn();render(<SubtractionScene scene={scene("subtract-column-total","subtraction")} onComplete={done}/>);fireEvent.click(screen.getByRole("button",{name:"165"}));expect(done).toHaveBeenCalledWith(1,1);});
  it("solves each multiplication model",()=>{for(const [id,answer] of [["scale-combine","10×4=40"],["pair-three-four","3 和 4"],["multiple-jumps","28"],["table-nine-seven","63"]]){const done=vi.fn();const view=render(<MultiplicationScene scene={scene(id,"multiplication")} onComplete={done}/>);fireEvent.click(screen.getByRole("button",{name:answer}));expect(done).toHaveBeenCalledWith(1,1);view.unmount();}});
});
