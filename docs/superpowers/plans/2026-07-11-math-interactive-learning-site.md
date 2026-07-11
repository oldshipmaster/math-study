# 数学互动学习网站 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 构建并发布一个面向 7–12 岁、包含「数字符号」和「位值」两节完整 HTML 互动动画课的中文数学学习网站。

**Architecture:** 使用 Sites 初始化的 React/Vite 项目。课程内容以强类型配置描述，通用课程播放器管理场景、进度、反馈和本地恢复；每种互动场景由独立组件实现，以便后续课程复用。

**Tech Stack:** React、TypeScript、CSS animations、Vitest、Testing Library、Sites hosting

## Global Constraints

- 面向 7–12 岁，中文内容直观但不过度幼龄化。
- 采用米白、墨绿、橙红和金黄的“编辑感数学实验室”视觉方向。
- 首版完整开放「数字符号」和「位值」。
- 支持鼠标、触屏、键盘和 `prefers-reduced-motion`。
- 学习进度仅保存在浏览器本地，不要求账号。
- 不复制 B 站原视频画面、配音或逐句文案。

---

### Task 1: 初始化网站与课程领域模型

**Files:**
- Create: `lib/course-types.ts`
- Create: `lib/courses.ts`
- Create: `lib/progress.ts`
- Create: `lib/progress.test.ts`
- Modify: `package.json`

**Interfaces:**
- Produces: `Course`, `LessonScene`, `loadProgress()`, `saveProgress(progress)` 和 `courses`。

- [ ] **Step 1: 初始化 Sites 项目并保留其 Vite/Sites 配置。**
- [ ] **Step 2: 添加 Vitest 与 Testing Library，编写进度存取失败时安全降级的失败测试。**
- [ ] **Step 3: 定义课程、场景、问题和进度类型，并录入两课所有中文内容。**
- [ ] **Step 4: 实现 `loadProgress`/`saveProgress`，运行 `npm test`，预期全部通过。**

### Task 2: 构建课程目录与响应式应用外壳

**Files:**
- Create: `components/CourseCatalog.tsx`
- Create: `components/AppShell.tsx`
- Create: `components/AppShell.test.tsx`
- Modify: `app/page.tsx`
- Modify: `app/layout.tsx`
- Modify: `app/globals.css`

**Interfaces:**
- Consumes: `courses: Course[]`。
- Produces: `AppShell({ courses })`，负责首页、课程选择和移动端目录。

- [ ] **Step 1: 编写目录显示两节开放课程与其余分组预告的失败测试。**
- [ ] **Step 2: 实现首页首屏、分组目录、课程卡和响应式导航。**
- [ ] **Step 3: 更新站点标题、描述、颜色、字体、焦点样式和减少动态效果规则。**
- [ ] **Step 4: 运行目录测试，预期全部通过。**

### Task 3: 构建通用课程播放器

**Files:**
- Create: `components/LessonPlayer.tsx`
- Create: `components/LessonPlayer.test.tsx`
- Create: `components/ProgressRail.tsx`
- Create: `components/FeedbackPanel.tsx`

**Interfaces:**
- Consumes: `Course` 和本地学习进度。
- Produces: 场景切换、重播、上一步、继续、即时反馈和结课统计。

- [ ] **Step 1: 编写场景前进、返回、重播、刷新恢复和结课统计测试。**
- [ ] **Step 2: 实现播放器状态机及本地进度同步。**
- [ ] **Step 3: 实现进度轨道、控制栏和反馈面板的无障碍语义。**
- [ ] **Step 4: 运行播放器测试，预期全部通过。**

### Task 4: 实现可复用 HTML 互动动画

**Files:**
- Create: `components/scenes/CountScene.tsx`
- Create: `components/scenes/SymbolMatchScene.tsx`
- Create: `components/scenes/PlaceValueScene.tsx`
- Create: `components/scenes/BuildNumberScene.tsx`
- Create: `components/scenes/QuizScene.tsx`
- Create: `components/scenes/SceneRenderer.tsx`
- Create: `components/scenes/scenes.test.tsx`

**Interfaces:**
- Consumes: `LessonScene`、`onAttempt(correct)`、`onComplete()`。
- Produces: 点击计数、符号配对、数位拖放、积木造数和动态测验。

- [ ] **Step 1: 编写点击、拖放替代按钮、错误归位、正确完成和键盘操作测试。**
- [ ] **Step 2: 实现五类互动组件和统一场景分派器。**
- [ ] **Step 3: 加入进入、演示、操作和完成动画；减少动态效果时切换为静态过渡。**
- [ ] **Step 4: 运行场景测试，预期全部通过。**

### Task 5: 整合两节课程并完成视觉细节

**Files:**
- Modify: `lib/courses.ts`
- Modify: `components/AppShell.tsx`
- Modify: `app/globals.css`
- Modify: `app/page.tsx`

**Interfaces:**
- Consumes: 所有课程数据、播放器和场景组件。
- Produces: 可从首页完整进入、完成和切换两节课程的首版产品。

- [ ] **Step 1: 将第一课五个场景和第二课六个场景逐一接入播放器。**
- [ ] **Step 2: 补全课程中的知识文案、即时提示、结课知识卡和真实目录内容。**
- [ ] **Step 3: 完成手机、平板、桌面布局以及触控目标尺寸。**
- [ ] **Step 4: 运行完整测试，预期全部通过。**

### Task 6: 验证与发布

**Files:**
- Modify: `.openai/hosting.json`（仅在 Sites 初始化配置要求时）
- Create: `public/og.png`（生成内容通过文字检查后）
- Modify: `app/layout.tsx`

**Interfaces:**
- Consumes: 完整网站。
- Produces: 通过构建验证并部署的 Sites URL。

- [ ] **Step 1: 运行 `npm test`，修复实际失败直到全部通过。**
- [ ] **Step 2: 运行 `npm run build`，修复实际失败直到成功。**
- [ ] **Step 3: 检查首版课程内容、元数据、站点图标和社交预览，不保留 starter 标记。**
- [ ] **Step 4: 使用 Sites 发布，确认部署成功并返回公开 URL。**
