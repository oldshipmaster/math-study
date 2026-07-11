import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

describe("GitHub Pages entry", () => {
  it("has a standalone Chinese HTML shell", () => {
    const html = readFileSync("static-site/index.html", "utf8");
    expect(html).toContain('lang="zh-CN"');
    expect(html).toContain("数感实验室");
    expect(html).toContain('/src/main.tsx');
  });
});
