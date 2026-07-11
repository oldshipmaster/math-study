import {fireEvent,render,screen} from "@testing-library/react";
import {describe,expect,it,vi} from "vitest";
import type {LessonScene} from "../../lib/course-types";
import {MultiplicationScene} from "./MultiplicationScene";
const scene=(id:string):LessonScene=>({id,kind:"multiplication",eyebrow:"实验",title:"测试",body:"测试"});
describe("lessons fifty-one through fifty-five",()=>{
  it("solves every column multiplication model",()=>{for(const [id,answer] of [["extended-short-total","3384"],["short-total","2944"],["long-total","3698"],["multi-add","166566"],["decimal-product-total","327.6"]]){const done=vi.fn();const view=render(<MultiplicationScene scene={scene(id)} onComplete={done}/>);fireEvent.click(screen.getByRole("button",{name:answer}));expect(done).toHaveBeenCalledWith(1,1);view.unmount();}});
});
