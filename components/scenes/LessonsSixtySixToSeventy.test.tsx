import {fireEvent,render,screen} from "@testing-library/react";
import {describe,expect,it,vi} from "vitest";
import type {LessonScene} from "../../lib/course-types";
import {DivisionScene} from "./DivisionScene";
import {OperationOrderScene} from "./OperationOrderScene";
const scene=(id:string,kind:LessonScene["kind"]):LessonScene=>({id,kind,eyebrow:"实验",title:"测试",body:"测试"});
describe("lessons sixty-six through seventy",()=>{
it("solves advanced division models",()=>{for(const [id,answer] of [["extended-long-total","139余2"],["long-divide-total","139余2"],["remainder-decimal","12.5"],["decimal-division-total","0.31"]]){const done=vi.fn();const view=render(<DivisionScene scene={scene(id,"division")} onComplete={done}/>);fireEvent.click(screen.getByRole("button",{name:answer}));expect(done).toHaveBeenCalledWith(1,1);view.unmount();}});
it("follows operation priority",()=>{const done=vi.fn();render(<OperationOrderScene scene={scene("order-complex-total","operation-order")} onComplete={done}/>);fireEvent.click(screen.getByRole("button",{name:"48"}));expect(done).toHaveBeenCalledWith(1,1);});});
