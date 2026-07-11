import { fireEvent,render,screen } from "@testing-library/react";
import { describe,expect,it,vi } from "vitest";
import type { LessonScene } from "../../lib/course-types";
import { AdditionScene } from "./AdditionScene";
import { RatioScene } from "./RatioScene";
const scene=(id:string,kind:LessonScene["kind"]):LessonScene=>({id,kind,eyebrow:"实验",title:"测试",body:"测试"});
describe("lessons twenty-six through thirty",()=>{
  it("converts percent ratio and representations",()=>{for(const [id,answer] of [["percent-increase","20%"],["ratio-simplify","4:5"],["part-whole-cats","4/10"],["three-fifths","0.6"]]){const done=vi.fn();const view=render(<RatioScene scene={scene(id,"ratio")} onComplete={done}/>);fireEvent.click(screen.getByRole("button",{name:answer}));expect(done).toHaveBeenCalledWith(1,1);view.unmount();}});
  it("combines quantities with addition",()=>{const done=vi.fn();render(<AdditionScene scene={scene("add-oranges","addition")} onComplete={done}/>);fireEvent.click(screen.getByRole("button",{name:"9"}));expect(done).toHaveBeenCalledWith(1,1);});
});
