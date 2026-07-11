import {fireEvent,render,screen} from "@testing-library/react";
import {describe,expect,it,vi} from "vitest";
import type {LessonScene} from "../../lib/course-types";
import {DivisionScene} from "./DivisionScene";
import {MultiplicationScene} from "./MultiplicationScene";
const scene=(id:string,kind:LessonScene["kind"]):LessonScene=>({id,kind,eyebrow:"实验",title:"测试",body:"测试"});
describe("lessons fifty-six through sixty",()=>{
  it("solves lattice multiplication",()=>{const done=vi.fn();render(<MultiplicationScene scene={scene("lattice-total","multiplication")} onComplete={done}/>);fireEvent.click(screen.getByRole("button",{name:"4992"}));expect(done).toHaveBeenCalledWith(1,1);});
  it("solves every division model",()=>{for(const [id,answer] of [["division-result","14余2"],["division-grid-new","8"],["table-divide-chocolate","9"],["divide-thousand","6.452"]]){const done=vi.fn();const view=render(<DivisionScene scene={scene(id,"division")} onComplete={done}/>);fireEvent.click(screen.getByRole("button",{name:answer}));expect(done).toHaveBeenCalledWith(1,1);view.unmount();}});
});
