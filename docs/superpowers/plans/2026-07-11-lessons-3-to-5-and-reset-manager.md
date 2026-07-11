# Lessons 3–5 and Progress Manager Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 上线数列与规律、数列与图形、正数与负数三节完整互动课，并将进度重置升级为逐课优先、全部重置可选的管理面板。

**Architecture:** 课程数据继续由 `lib/courses.ts` 配置，播放器通过 `Scene` 分派到三个新增的场景组件。进度模块提供不可变的单课删除函数；首页管理面板只负责选择目标和确认操作。

**Tech Stack:** React 19、TypeScript、CSS animations、Vitest、Testing Library、Sites/vinext、GitHub Pages

## Global Constraints

- 新增课程必须复用现有播放器、进度保存和测验组件。
- 首页显示 5 节正式课程和“已完成 X/5 课”。
- 重置默认不选择课程；逐课重置不影响其他课程。
- “重置全部课程”仅在独立警示区提供并二次确认。
- 支持触屏、鼠标、键盘和减少动态效果。

---

### Task 1: 扩展课程类型与数据

**Files:** `lib/course-types.ts`, `lib/courses.ts`, `lib/courses.test.ts`

**Produces:** 5 节 `Course` 数据；`sequence`、`visual-pattern`、`number-line` 场景类型。

- [ ] 添加失败测试，断言 5 节课程、每节以三题测验结束及新增场景类型存在。
- [ ] 运行课程测试确认失败。
- [ ] 扩展类型并录入第 3–5 课各 6 个场景及测验内容。
- [ ] 重跑课程测试确认通过。

### Task 2: 实现三种互动场景

**Files:** `components/MathLab.tsx`, `components/MathLab.test.tsx`, `app/globals.css`

**Produces:** `SequenceScene`、`VisualPatternScene`、`NumberLineScene`，均调用 `onComplete(correct, attempts)`。

- [ ] 添加失败测试，分别从课程目录进入第 3–5 课并完成首个互动。
- [ ] 运行界面测试确认新课程入口缺失。
- [ ] 实现三类场景和场景分派，加入清晰的按钮标签和视觉反馈。
- [ ] 更新首页 5 课目录与进度文案，移除第 3–5 课预告行。
- [ ] 重跑界面测试确认通过。

### Task 3: 实现逐课进度管理

**Files:** `lib/progress.ts`, `lib/progress.test.ts`, `components/MathLab.tsx`, `components/MathLab.test.tsx`, `app/globals.css`

**Produces:** `clearCourseProgress(progress, courseId): ProgressState`；课程管理面板与逐课/全部确认流程。

- [ ] 添加失败测试，验证单课删除保留其他课程、打开面板不清空、单课确认和全部确认。
- [ ] 运行相关测试确认失败。
- [ ] 实现不可变单课删除并持久化结果。
- [ ] 将现有直接全部确认框改为课程列表管理面板和两级确认状态。
- [ ] 重跑进度与界面测试确认通过。

### Task 4: 验证与双渠道发布

**Files:** 生成 `dist/**` 与 `pages-dist/**`，提交源文件。

- [ ] 运行 `npm test`，确认完整测试全部通过。
- [ ] 运行 `npm run build` 与 `npm run build:pages`，确认两种生产构建成功。
- [ ] 提交并推送 `main`，更新 Sites 版本和 GitHub Pages `gh-pages`。
- [ ] 等待 GitHub Pages 成功，验证线上包包含 5 节课和逐课重置文案。
