import {fireEvent,render,screen} from "@testing-library/react";
import {describe,expect,it,vi} from "vitest";
import type {LessonScene} from "../../lib/course-types";
import {AdditionScene} from "./AdditionScene";
const scene=(id:string):LessonScene=>({id,kind:"addition",eyebrow:"实验",title:"测试",body:"测试"});
describe("lessons thirty-one through thirty-five",()=>{it("solves each addition strategy",()=>{for(const [id,answer] of [["line-four-three","7"],["grid-add-six","82"],["facts-make-ten","4"],["partition-combine","82"],["column-total","542"]]){const done=vi.fn();const view=render(<AdditionScene scene={scene(id)} onComplete={done}/>);fireEvent.click(screen.getByRole("button",{name:answer}));expect(done).toHaveBeenCalledWith(1,1);view.unmount();}});});
