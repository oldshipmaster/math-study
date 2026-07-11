import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import type { LessonScene } from "../../lib/course-types";
import { CompareScene } from "./CompareScene";
import { EstimateScene } from "./EstimateScene";
import { MultiplesScene } from "./MultiplesScene";
import { OrderScene } from "./OrderScene";
import { RoundingScene } from "./RoundingScene";

function scene(id: string, kind: LessonScene["kind"]): LessonScene {
  return { id, kind, eyebrow: "实验", title: "测试场景", body: "测试内容" };
}

describe("lessons six through ten scenes", () => {
  it("retries an incorrect comparison symbol", () => {
    const complete = vi.fn();
    render(<CompareScene scene={scene("symbol-mouth", "compare")} onComplete={complete} />);
    fireEvent.click(screen.getByRole("button", { name: "小于" }));
    expect(complete).not.toHaveBeenCalled();
    fireEvent.click(screen.getByRole("button", { name: "大于" }));
    expect(complete).toHaveBeenCalledWith(1, 2);
  });

  it("places an ascending sequence by clicking cards", () => {
    const complete = vi.fn();
    render(<OrderScene scene={scene("ascending-track", "order")} onComplete={complete} />);
    for (const value of ["45", "444", "912", "5121"]) fireEvent.click(screen.getByRole("button", { name: value }));
    expect(complete).toHaveBeenCalledWith(1, 4);
  });

  it("chooses the reasonable grid estimate", () => {
    const complete = vi.fn();
    render(<EstimateScene scene={scene("grid-sample", "estimate")} onComplete={complete} />);
    fireEvent.click(screen.getByRole("button", { name: "108" }));
    expect(complete).toHaveBeenCalledWith(1, 1);
  });

  it("rounds 7641 to the nearest thousand", () => {
    const complete = vi.fn();
    render(<RoundingScene scene={scene("round-thousand", "rounding")} onComplete={complete} />);
    fireEvent.click(screen.getByRole("button", { name: "8000" }));
    expect(complete).toHaveBeenCalledWith(1, 1);
  });

  it("identifies the least common multiple of 3 and 4", () => {
    const complete = vi.fn();
    render(<MultiplesScene scene={scene("least-common", "multiples")} onComplete={complete} />);
    fireEvent.click(screen.getByRole("button", { name: "24" }));
    expect(complete).not.toHaveBeenCalled();
    fireEvent.click(screen.getByRole("button", { name: "12" }));
    expect(complete).toHaveBeenCalledWith(1, 2);
  });
});
