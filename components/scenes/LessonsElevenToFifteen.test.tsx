import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import type { LessonScene } from "../../lib/course-types";
import { FactorTreeScene } from "./FactorTreeScene";
import { FractionScene } from "./FractionScene";
import { PowerScene } from "./PowerScene";
import { PrimeScene } from "./PrimeScene";

const scene = (id: string, kind: LessonScene["kind"]): LessonScene => ({ id, kind, eyebrow: "实验", title: "测试", body: "测试" });

describe("lessons eleven through fifteen scenes", () => {
  it("retries before selecting prime 17", () => {
    const complete = vi.fn(); render(<PrimeScene scene={scene("prime-sieve", "prime")} onComplete={complete} />);
    fireEvent.click(screen.getByRole("button", { name: "15" })); expect(complete).not.toHaveBeenCalled();
    fireEvent.click(screen.getByRole("button", { name: "17" })); expect(complete).toHaveBeenCalledWith(1, 2);
  });
  it("finds the prime factorization of 30", () => {
    const complete = vi.fn(); render(<FactorTreeScene scene={scene("factor-thirty", "factor-tree")} onComplete={complete} />);
    fireEvent.click(screen.getByRole("button", { name: "2 × 3 × 5" })); expect(complete).toHaveBeenCalledWith(1, 1);
  });
  it("computes a square and cube", () => {
    const square = vi.fn(); const squareView = render(<PowerScene scene={scene("square-three", "power")} onComplete={square} />);
    fireEvent.click(screen.getByRole("button", { name: "9" })); expect(square).toHaveBeenCalledWith(1, 1);
    squareView.unmount();
    const cube = vi.fn(); render(<PowerScene scene={scene("cube-three", "power")} onComplete={cube} />);
    fireEvent.click(screen.getByRole("button", { name: "27" })); expect(cube).toHaveBeenCalledWith(1, 1);
  });
  it("compares one quarter with one half", () => {
    const complete = vi.fn(); render(<FractionScene scene={scene("half-quarter", "fraction")} onComplete={complete} />);
    fireEvent.click(screen.getByRole("button", { name: "1/2" })); expect(complete).toHaveBeenCalledWith(1, 1);
  });
});
