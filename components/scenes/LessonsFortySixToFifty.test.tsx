import {fireEvent,render,screen} from "@testing-library/react";
import {describe,expect,it,vi} from "vitest";
import type {LessonScene} from "../../lib/course-types";
import {MultiplicationScene} from "./MultiplicationScene";
const scene=(id:string):LessonScene=>({id,kind:"multiplication",eyebrow:"实验",title:"测试",body:"测试"});
describe("lessons forty-six through fifty",()=>{
  it("solves each new multiplication model",()=>{for(const [id,answer] of [["trick-times-five","80"],["place-times-thousand","3200"],["tens-final-product","2520"],["partition-open-array","180"],["grid-total-666","666"]]){const done=vi.fn();const view=render(<MultiplicationScene scene={scene(id)} onComplete={done}/>);fireEvent.click(screen.getByRole("button",{name:answer}));expect(done).toHaveBeenCalledWith(1,1);view.unmount();}});
});
