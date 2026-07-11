import {fireEvent,render,screen} from "@testing-library/react";
import {describe,expect,it,vi} from "vitest";
import type {LessonScene} from "../../lib/course-types";
import {AdditionScene} from "./AdditionScene";
import {SubtractionScene} from "./SubtractionScene";
const scene=(id:string,kind:LessonScene["kind"]):LessonScene=>({id,kind,eyebrow:"实验",title:"测试",body:"测试"});
describe("lessons thirty-six through forty",()=>{
  it("solves standard column addition",()=>{const done=vi.fn();render(<AdditionScene scene={scene("standard-total","addition")} onComplete={done}/>);fireEvent.click(screen.getByRole("button",{name:"7163"}));expect(done).toHaveBeenCalledWith(1,1);});
  it("solves subtraction strategies",()=>{for(const [id,answer] of [["subtract-ten-six","4"],["subtract-sixty-one-five","56"],["shop-change-total","2.65"],["expanded-subtract-total","146"]]){const done=vi.fn();const view=render(<SubtractionScene scene={scene(id,"subtraction")} onComplete={done}/>);fireEvent.click(screen.getByRole("button",{name:answer}));expect(done).toHaveBeenCalledWith(1,1);view.unmount();}});
});
