import {fireEvent,render,screen} from "@testing-library/react";
import {describe,expect,it,vi} from "vitest";
import type {LessonScene} from "../../lib/course-types";
import {DivisionScene} from "./DivisionScene";
const scene=(id:string):LessonScene=>({id,kind:"division",eyebrow:"实验",title:"测试",body:"测试"});
describe("lessons sixty-one through sixty-five",()=>{
  it("solves every new division model",()=>{for(const [id,answer] of [["divisible-four","可被 4 整除"],["divide-partition-combine","21"],["divide-pair-tens","4"],["extended-divide-total","22余2"],["short-divide-total","22余2"]]){const done=vi.fn();const view=render(<DivisionScene scene={scene(id)} onComplete={done}/>);fireEvent.click(screen.getByRole("button",{name:answer}));expect(done).toHaveBeenCalledWith(1,1);view.unmount();}});
});
