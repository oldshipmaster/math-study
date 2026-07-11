# Reset Course Progress Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 在首页提供带二次确认的全部课程进度重置功能，让孩子从第一课第一场景重新开始。

**Architecture:** `lib/progress.ts` 负责唯一的本地存储删除接口；`MathLab` 管理确认框、内存状态归零和完成提示。确认框为站内 React 组件，使用原有视觉变量和无障碍语义。

**Tech Stack:** React 19、TypeScript、localStorage、Vitest、Testing Library、GitHub Pages

## Global Constraints

- 重置范围仅限 `math-lab-progress` 课程记录。
- 点击入口不能立即删除，必须经过站内二次确认。
- 删除失败时当前页面仍恢复为空进度。
- 桌面和手机均可访问入口，键盘可操作确认框。

---

### Task 1: 本地进度清空接口

**Files:**
- Modify: `lib/progress.ts`
- Modify: `lib/progress.test.ts`

**Interfaces:**
- Produces: `clearProgress(): void`，删除 `math-lab-progress` 且不向调用方抛出存储错误。

- [ ] **Step 1:** 在 `lib/progress.test.ts` 添加保存后清空、删除失败不抛错两项测试。
- [ ] **Step 2:** 运行 `npx vitest run lib/progress.test.ts`，确认因 `clearProgress` 缺失而失败。
- [ ] **Step 3:** 在 `lib/progress.ts` 实现 `clearProgress()`，仅调用 `localStorage.removeItem(KEY)` 并捕获异常。
- [ ] **Step 4:** 重跑测试，预期全部通过。

### Task 2: 重置入口与确认对话框

**Files:**
- Modify: `components/MathLab.tsx`
- Modify: `components/MathLab.test.tsx`
- Modify: `app/globals.css`

**Interfaces:**
- Consumes: `clearProgress()`。
- Produces: 首页“重置进度”入口、确认对话框、取消/确认行为和完成提示。

- [ ] **Step 1:** 添加界面测试：打开确认框不清空、取消保留、确认后显示 `已完成 0/2 课` 和“课程进度已重置”。
- [ ] **Step 2:** 运行 `npx vitest run components/MathLab.test.tsx`，确认入口缺失导致失败。
- [ ] **Step 3:** 在 `MathLab` 中实现对话框状态与重置回调，并在首页桌面和移动布局中暴露入口。
- [ ] **Step 4:** 添加对话框、警示按钮和移动端入口样式。
- [ ] **Step 5:** 重跑界面测试，预期全部通过。

### Task 3: 验证和发布

**Files:**
- Generated: `pages-dist/**`

**Interfaces:**
- Produces: 更新后的 `https://oldshipmaster.github.io/math-study/`。

- [ ] **Step 1:** 运行 `npm test`，预期所有测试通过。
- [ ] **Step 2:** 运行 `npm run build:pages`，预期静态构建成功。
- [ ] **Step 3:** 提交并推送 `main`，将 `pages-dist` 发布至 `gh-pages`。
- [ ] **Step 4:** 等待 Pages 部署成功，验证线上 HTML、脚本资源和“重置进度”入口。
