import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import type { LessonScene } from "../../lib/course-types";
import { FractionOperationScene } from "./FractionOperationScene";
import { FractionScene } from "./FractionScene";

const scene = (id: string, kind: LessonScene["kind"]): LessonScene => ({ id, kind, eyebrow:"实验", title:"测试", body:"测试" });

describe("lessons sixteen through twenty scenes", () => {
  it("finds three quarters of twelve", () => { const done=vi.fn(); render(<FractionScene scene={scene("take-three-parts","fraction")} onComplete={done}/>); fireEvent.click(screen.getByRole("button",{name:"9"})); expect(done).toHaveBeenCalledWith(1,1); });
  it("compares like and unit fractions", () => { const like=vi.fn(); const view=render(<FractionScene scene={scene("same-eighths","fraction")} onComplete={like}/>); fireEvent.click(screen.getByRole("button",{name:"6/8"})); expect(like).toHaveBeenCalledWith(1,1); view.unmount(); const unit=vi.fn(); render(<FractionScene scene={scene("carrot-halves","fraction")} onComplete={unit}/>); fireEvent.click(screen.getByRole("button",{name:"1/2"})); expect(unit).toHaveBeenCalledWith(1,1); });
  it("adds and subtracts like fractions", () => { const add=vi.fn(); const view=render(<FractionOperationScene scene={scene("add-like-bars","fraction-operation")} onComplete={add}/>); fireEvent.click(screen.getByRole("button",{name:"3/5"})); expect(add).toHaveBeenCalledWith(1,1); view.unmount(); const subtract=vi.fn(); render(<FractionOperationScene scene={scene("subtract-cookies","fraction-operation")} onComplete={subtract}/>); fireEvent.click(screen.getByRole("button",{name:"2/4"})); expect(subtract).toHaveBeenCalledWith(1,1); });
});
