import { fireEvent,render,screen } from "@testing-library/react";
import { describe,expect,it,vi } from "vitest";
import type { LessonScene } from "../../lib/course-types";
import { DecimalScene } from "./DecimalScene";
import { FractionOperationScene } from "./FractionOperationScene";
const scene=(id:string,kind:LessonScene["kind"]):LessonScene=>({id,kind,eyebrow:"实验",title:"测试",body:"测试"});
describe("lessons twenty-one through twenty-five",()=>{
  it("multiplies and divides fractions",()=>{const mul=vi.fn();const view=render(<FractionOperationScene scene={scene("multiply-half-quarter","fraction-operation")} onComplete={mul}/>);fireEvent.click(screen.getByRole("button",{name:"1/8"}));expect(mul).toHaveBeenCalledWith(1,1);view.unmount();const div=vi.fn();render(<FractionOperationScene scene={scene("divide-quarter-three","fraction-operation")} onComplete={div}/>);fireEvent.click(screen.getByRole("button",{name:"1/12"}));expect(div).toHaveBeenCalledWith(1,1);});
  it("rounds and calculates decimals",()=>{for(const [id,answer] of [["decimal-tenths","1.2"],["decimal-add-money","12.2"],["decimal-price-difference","3.5"]]){const done=vi.fn();const view=render(<DecimalScene scene={scene(id,"decimal")} onComplete={done}/>);fireEvent.click(screen.getByRole("button",{name:answer}));expect(done).toHaveBeenCalledWith(1,1);view.unmount();}});
});
