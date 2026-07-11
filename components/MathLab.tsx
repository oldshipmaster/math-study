"use client";

import { useEffect, useMemo, useState } from "react";
import { courses } from "../lib/courses";
import type { Course, LessonScene, ProgressState } from "../lib/course-types";
import { clearProgress, loadProgress, saveProgress } from "../lib/progress";

type View = "home" | "lesson";

export function MathLab() {
  const [view, setView] = useState<View>("home");
  const [courseId, setCourseId] = useState<Course["id"]>("symbols");
  const [sceneIndex, setSceneIndex] = useState(0);
  const [progress, setProgress] = useState<ProgressState>({ lessons: {} });
  const [ready, setReady] = useState(false);
  const [resetOpen, setResetOpen] = useState(false);
  const [resetDone, setResetDone] = useState(false);

  useEffect(() => {
    setProgress(loadProgress());
    setReady(true);
  }, []);

  const course = courses.find((item) => item.id === courseId) ?? courses[0];
  const scene = course.scenes[sceneIndex];

  function openCourse(id: Course["id"]) {
    const saved = progress.lessons[id];
    setCourseId(id);
    setSceneIndex(saved?.completed ? 0 : Math.min(saved?.sceneIndex ?? 0, courses.find((item) => item.id === id)!.scenes.length - 1));
    setView("lesson");
  }

  function record(nextScene: number, completed = false, correct = 0, attempts = 0) {
    const current = progress.lessons[courseId];
    const next: ProgressState = {
      lessons: {
        ...progress.lessons,
        [courseId]: {
          sceneIndex: nextScene,
          completed,
          correct: (current?.correct ?? 0) + correct,
          attempts: (current?.attempts ?? 0) + attempts,
        },
      },
    };
    setProgress(next);
    saveProgress(next);
  }

  if (!ready) return <main className="loading">正在打开数学实验室…</main>;

  if (view === "home") {
    return <Home progress={progress} onOpen={openCourse} onReset={() => setResetOpen(true)} resetDone={resetDone} resetOpen={resetOpen} onCancelReset={() => setResetOpen(false)} onConfirmReset={() => {
      clearProgress();
      setProgress({ lessons: {} });
      setSceneIndex(0);
      setResetOpen(false);
      setResetDone(true);
    }} />;
  }

  return (
    <Lesson
      course={course}
      scene={scene}
      sceneIndex={sceneIndex}
      onExit={() => setView("home")}
      onPrevious={() => setSceneIndex((index) => Math.max(0, index - 1))}
      onNext={(correct, attempts) => {
        const isLast = sceneIndex === course.scenes.length - 1;
        record(isLast ? sceneIndex : sceneIndex + 1, isLast, correct, attempts);
        if (!isLast) setSceneIndex((index) => index + 1);
      }}
    />
  );
}

function Home({ progress, onOpen, onReset, resetDone, resetOpen, onCancelReset, onConfirmReset }: { progress: ProgressState; onOpen: (id: Course["id"]) => void; onReset: () => void; resetDone: boolean; resetOpen: boolean; onCancelReset: () => void; onConfirmReset: () => void }) {
  const completed = Object.values(progress.lessons).filter((item) => item?.completed).length;
  return (
    <main className="site-shell">
      <nav className="topbar" aria-label="主导航">
        <a className="brand" href="#top" aria-label="数感实验室首页"><span>∑</span> 数感实验室</a>
        <div className="nav-links"><a href="#courses">课程</a><a href="#method">学习方法</a></div>
        <div className="progress-actions"><div className="progress-pill">已完成 {completed}/2 课</div><button className="reset-link" onClick={onReset} aria-label="重置课程进度">重置进度</button></div>
      </nav>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="kicker">为 7–12 岁好奇心设计</p>
          <h1>把数学，变成<br /><em>可以触摸</em>的想法</h1>
          <p className="hero-text">不只是看动画。亲手点击、拖动、试验，让每一个抽象概念在眼前发生。</p>
          <div className="hero-actions">
            <button className="primary" onClick={() => onOpen("symbols")} aria-label="开始第 1 课数字符号">开始第 1 课 <span>→</span></button>
            <a className="text-link" href="#courses">查看课程地图</a>
          </div>
        </div>
        <div className="hero-lab" aria-label="数字与数量互动示意">
          <span className="lab-note">观察 · 拖动 · 发现</span>
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="big-number">3</div>
          <div className="dot-cluster"><i /><i /><i /></div>
          <p>一个符号<br />装下三个真实的数量</p>
        </div>
      </section>

      <section className="method-strip" id="method">
        <p>我们的学习循环</p>
        <ol><li><b>01</b> 看见概念</li><li><b>02</b> 亲手试验</li><li><b>03</b> 回答挑战</li><li><b>04</b> 带走知识</li></ol>
      </section>

      <section className="courses-section" id="courses">
        <div className="section-heading"><div><p className="kicker">数与数感 · 第一章</p><h2>从符号到位值</h2></div><div className="section-side"><p>两节完整互动课，建立整个数学世界的地基。</p><button className="mobile-reset" onClick={onReset} aria-label="移动端重置课程进度">重置课程进度</button></div></div>
        <div className="course-grid">
          {courses.map((course) => {
            const saved = progress.lessons[course.id];
            const percent = saved?.completed ? 100 : Math.round(((saved?.sceneIndex ?? 0) / course.scenes.length) * 100);
            return (
              <article className="course-card" key={course.id} style={{ "--accent": course.accent } as React.CSSProperties}>
                <div className="course-number">{course.number}</div>
                <div className="course-body"><p className="card-meta">{course.duration} · {course.scenes.length} 个互动场景</p><h3>{course.title}</h3><p>{course.summary}</p>
                  <div className="goal-list">{course.goals.map((goal) => <span key={goal}>{goal}</span>)}</div>
                  <div className="card-footer"><div className="mini-progress"><i style={{ width: `${percent}%` }} /></div><button onClick={() => onOpen(course.id)} aria-label={`学习${course.title}`}>{saved?.sceneIndex ? "继续学习" : "开始学习"} →</button></div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="coming-soon"><p className="kicker">接下来</p><div className="chapter-row"><span>03</span><b>数列与规律</b><small>即将开放</small></div><div className="chapter-row"><span>04</span><b>数列与图形</b><small>即将开放</small></div><div className="chapter-row"><span>05</span><b>正数与负数</b><small>即将开放</small></div></section>
      <footer><span className="brand"><span>∑</span> 数感实验室</span><p>每一个数字，都值得亲手发现。</p></footer>
      {resetDone && <div className="reset-toast" role="status">课程进度已重置</div>}
      {resetOpen && <div className="dialog-backdrop" onMouseDown={onCancelReset}><div className="reset-dialog" role="dialog" aria-modal="true" aria-labelledby="reset-dialog-title" onMouseDown={(event) => event.stopPropagation()}><p className="kicker">重新开始</p><h2 id="reset-dialog-title">重置全部课程进度？</h2><p>“数字符号”和“位值”的场景进度、答题次数与结课记录都会清空。此操作无法撤销。</p><div className="dialog-actions"><button className="secondary" onClick={onCancelReset}>取消</button><button className="danger" onClick={onConfirmReset}>确认重置</button></div></div></div>}
    </main>
  );
}

function Lesson({ course, scene, sceneIndex, onExit, onPrevious, onNext }: { course: Course; scene: LessonScene; sceneIndex: number; onExit: () => void; onPrevious: () => void; onNext: (correct: number, attempts: number) => void }) {
  const [complete, setComplete] = useState(false);
  const [result, setResult] = useState({ correct: 0, attempts: 0 });
  const key = `${course.id}-${scene.id}`;

  useEffect(() => { setComplete(false); setResult({ correct: 0, attempts: 0 }); }, [key]);

  return (
    <main className="lesson-shell" style={{ "--accent": course.accent } as React.CSSProperties}>
      <header className="lesson-header"><button className="icon-button" onClick={onExit} aria-label="课程目录">←</button><div><p>第 {course.number} 课</p><strong>{course.title}</strong></div><div className="lesson-progress"><span>{sceneIndex + 1} / {course.scenes.length}</span><div>{course.scenes.map((item, index) => <i className={index <= sceneIndex ? "active" : ""} key={item.id} />)}</div></div></header>
      <div className="lesson-layout">
        <aside className="lesson-aside"><p className="kicker">本课路线</p>{course.scenes.map((item, index) => <div className={`scene-link ${index === sceneIndex ? "current" : ""} ${index < sceneIndex ? "done" : ""}`} key={item.id}><span>{index < sceneIndex ? "✓" : index + 1}</span><p>{item.eyebrow}<b>{item.title}</b></p></div>)}</aside>
        <section className="stage-wrap"><div className="stage-title"><p className="kicker">{scene.eyebrow}</p><h1>{scene.title}</h1><p>{scene.body}</p></div><Scene key={key} scene={scene} onComplete={(correct, attempts) => { setComplete(true); setResult({ correct, attempts }); }} /></section>
      </div>
      <footer className="lesson-controls"><button className="secondary" onClick={onPrevious} disabled={sceneIndex === 0}>← 上一步</button><p aria-live="polite">{complete ? "很好，实验完成！" : scene.instruction}</p><button className="primary" onClick={() => onNext(result.correct, result.attempts)} disabled={!complete}>继续 <span>→</span></button></footer>
    </main>
  );
}

function Scene({ scene, onComplete }: { scene: LessonScene; onComplete: (correct: number, attempts: number) => void }) {
  if (scene.kind === "quiz") return <Quiz scene={scene} onComplete={onComplete} />;
  if (scene.kind === "count") return <Count onComplete={onComplete} />;
  if (scene.kind === "story") return <Story onComplete={onComplete} />;
  if (scene.kind === "match") return <Match scene={scene} onComplete={onComplete} />;
  if (scene.kind === "place") return <Place scene={scene} onComplete={onComplete} />;
  return <Build scene={scene} onComplete={onComplete} />;
}

function Count({ onComplete }: { onComplete: (correct: number, attempts: number) => void }) {
  const [count, setCount] = useState(0);
  return <div className="activity count-activity"><div className="object-field">{Array.from({ length: 7 }, (_, index) => <button aria-label={`收集第 ${index + 1} 个果实`} className={index < count ? "picked" : ""} key={index} onClick={() => { const next = Math.min(5, count + 1); setCount(next); if (next === 5) onComplete(1, 1); }}><span>●</span></button>)}</div><div className="counter"><strong>{count}</strong><span>已收集</span></div></div>;
}

function Story({ onComplete }: { onComplete: (correct: number, attempts: number) => void }) {
  const [step, setStep] = useState(0);
  return <div className="activity story-activity"><div className="story-line"><div className={step >= 1 ? "shown" : ""}>|||||</div><span>→</span><div className={step >= 2 ? "shown" : ""}>Ⅴ</div><span>→</span><div className={step >= 3 ? "shown final" : ""}>5</div></div><button className="activity-button" onClick={() => { const next = step + 1; setStep(next); if (next >= 3) onComplete(1, 1); }}>{step >= 3 ? "符号诞生了！" : "点亮下一步"}</button></div>;
}

function Match({ scene, onComplete }: { scene: LessonScene; onComplete: (correct: number, attempts: number) => void }) {
  const first = scene.id === "many-symbols";
  const cards = first ? ["3", "三", "Ⅲ", "Ⅱ", "五"] : ["2 · ●●", "3 · ●●●", "4 · ●●●●"];
  const targets = first ? new Set([0, 1, 2]) : new Set([0, 1, 2]);
  const [selected, setSelected] = useState<Set<number>>(new Set());
  return <div className="activity"><div className="card-sort">{cards.map((card, index) => <button key={card} className={selected.has(index) ? "selected" : ""} onClick={() => { const next = new Set(selected); if (first && !targets.has(index)) { setSelected(next); return; } next.add(index); setSelected(next); if (targets.size === next.size) onComplete(1, next.size); }}>{card}</button>)}</div><p className="hint">{first ? "找出全部三种正确写法" : "点击每组，检查数字与圆点是否对应"}</p></div>;
}

function Place({ scene, onComplete }: { scene: LessonScene; onComplete: (correct: number, attempts: number) => void }) {
  const isHouse = scene.id === "place-house";
  const isExpand = scene.id === "expanded";
  const items = isHouse ? ["3 放入百位", "5 放入十位", "2 放入个位"] : isExpand ? ["3 → 300", "5 → 50", "2 → 2"] : ["305 · 5 个一", "350 · 5 个十"];
  const [done, setDone] = useState<number[]>([]);
  return <div className="activity place-activity"><div className="place-columns"><div><small>百位</small><strong>{done.includes(0) ? "3" : "?"}</strong></div><div><small>十位</small><strong>{done.includes(1) ? "5" : "?"}</strong></div><div><small>个位</small><strong>{done.includes(2) ? "2" : "?"}</strong></div></div><div className="place-actions">{items.map((item, index) => <button key={item} className={done.includes(index) ? "done" : ""} onClick={() => { const next = [...new Set([...done, index])]; setDone(next); const target = isHouse || isExpand ? 3 : 1; if ((isHouse || isExpand) ? next.length === target : index === 1) onComplete(1, next.length); }}>{item}</button>)}</div></div>;
}

function Build({ scene, onComplete }: { scene: LessonScene; onComplete: (correct: number, attempts: number) => void }) {
  const target = scene.id === "bundle-ten" ? 10 : 7;
  const [blocks, setBlocks] = useState(0);
  return <div className="activity build-activity"><div className="blocks">{Array.from({ length: blocks }, (_, index) => <i key={index} className={scene.id === "build-number" && index < 2 ? "hundred" : ""} />)}</div><div className="build-readout"><strong>{blocks}</strong><span>{scene.id === "bundle-ten" ? "/ 10 个一" : "/ 2百 4十 1个"}</span></div><button className="activity-button" onClick={() => { const next = Math.min(target, blocks + 1); setBlocks(next); if (next === target) onComplete(1, target); }}>加入一块</button></div>;
}

function Quiz({ scene, onComplete }: { scene: LessonScene; onComplete: (correct: number, attempts: number) => void }) {
  const questions = scene.questions ?? [];
  const [index, setIndex] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [attempts, setAttempts] = useState(0);
  const [feedback, setFeedback] = useState("");
  const question = questions[index];
  const finished = index >= questions.length;
  const score = useMemo(() => Math.round((correct / Math.max(1, questions.length)) * 100), [correct, questions.length]);
  if (finished) return <div className="activity result-card"><div className="result-ring">{score}<small>分</small></div><h2>知识卡已点亮</h2><p>你完成了全部挑战。数学符号正在变成你的思考工具。</p><button className="activity-button" onClick={() => onComplete(correct, attempts)}>领取本课知识卡</button></div>;
  return <div className="activity quiz-card"><div className="quiz-count">问题 {index + 1} / {questions.length}</div><h2>{question.prompt}</h2><div className="quiz-options">{question.options.map((option, optionIndex) => <button key={option} onClick={() => { const nextAttempts = attempts + 1; setAttempts(nextAttempts); if (optionIndex === question.answer) { setCorrect((value) => value + 1); setFeedback(question.explanation); window.setTimeout(() => { setIndex((value) => value + 1); setFeedback(""); }, 500); } else setFeedback("再观察一下：位置和数量都很重要。"); }}>{option}</button>)}</div><p className="quiz-feedback" aria-live="polite">{feedback}</p></div>;
}
