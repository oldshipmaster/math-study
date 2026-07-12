"use client";
import {useMemo,useState} from "react";
import type {ChallengeProgress,ChallengeQuestion,LessonScene} from "../../lib/course-types";
import {selectRequiredChallenges} from "../../lib/challenge-bank";

const labels={application:"情境应用",reverse:"反向推理","error-correction":"找错纠正",pattern:"规律探索",open:"开放思考",inquiry:"启发思考"} as const;
const empty:ChallengeProgress={completedIds:[],requiredIds:[],correct:0,attempts:0,reasons:{}};

export function ChallengeScene({scene,saved,onProgress,onComplete}:{scene:LessonScene;saved?:ChallengeProgress;onProgress:(progress:ChallengeProgress)=>void;onComplete:(correct:number,attempts:number)=>void}){
  const questions=useMemo(()=>scene.challenges??[],[scene.challenges]);
  const initial={...empty,...saved};
  const requiredIds=initial.requiredIds.length?initial.requiredIds:selectRequiredChallenges(questions).map(question=>question.id);
  const questionMap=useMemo(()=>new Map(questions.map(question=>[question.id,question])),[questions]);
  const required=requiredIds.map(id=>questionMap.get(id)).filter((question):question is ChallengeQuestion=>Boolean(question));
  const requiredDone=required.every(question=>initial.completedIds.includes(question.id));
  const [progress,setProgress]=useState<ChallengeProgress>({...initial,requiredIds});
  const [queue,setQueue]=useState<ChallengeQuestion[]>(requiredDone?[]:required.filter(question=>!initial.completedIds.includes(question.id)));
  const [index,setIndex]=useState(0);
  const [phase,setPhase]=useState<"required"|"result"|"explore">(requiredDone?"result":"required");
  const [selected,setSelected]=useState<number|null>(null);
  const [reason,setReason]=useState("");
  const [feedback,setFeedback]=useState("");
  const [answered,setAnswered]=useState(false);
  const current=queue[index];

  function persist(next:ChallengeProgress){setProgress(next);onProgress(next);}
  function finish(question:ChallengeQuestion,nextAttempts:number,nextCorrect:number,answerReason=""){
    const completedIds=[...new Set([...progress.completedIds,question.id])];
    const reasons=answerReason?{...progress.reasons,[question.id]:answerReason}:progress.reasons;
    persist({...progress,requiredIds,completedIds,attempts:nextAttempts,correct:nextCorrect,reasons});
    setAnswered(true);
    setFeedback(question.explanation);
  }
  function choose(question:ChallengeQuestion,optionIndex:number){
    setSelected(optionIndex);
    if(question.mode==="reasoning") return;
    const nextAttempts=progress.attempts+1;
    if(optionIndex===question.answer) finish(question,nextAttempts,progress.correct+1);
    else {persist({...progress,requiredIds,attempts:nextAttempts});setFeedback(question.hint);}
  }
  function submitReason(){if(!current||selected===null||!reason.trim()) return;finish(current,progress.attempts+1,progress.correct+1,reason.trim());}
  function next(){
    setSelected(null);setReason("");setFeedback("");setAnswered(false);
    if(index+1<queue.length){setIndex(value=>value+1);return;}
    setPhase("result");setIndex(0);
  }
  function explore(){
    const remaining=questions.filter(question=>!progress.completedIds.includes(question.id));
    setQueue(remaining);setIndex(0);setPhase("explore");setSelected(null);setReason("");setFeedback("");setAnswered(false);
  }

  if(phase==="result"||!current){
    const requiredCount=required.filter(question=>progress.completedIds.includes(question.id)).length;
    const remaining=questions.length-progress.completedIds.length;
    return <div className="activity challenge-result"><p className="challenge-kicker">创新挑战营</p><h2>必做挑战 {requiredCount} / {required.length}</h2><div className="challenge-summary">{Object.entries(labels).map(([category,label])=><span key={category}><b>{progress.completedIds.filter(id=>questionMap.get(id)?.category===category).length}</b>{label}</span>)}</div><p>你已经从六种思考角度完成本轮训练，还可以继续探索完整题库。</p><div className="challenge-result-actions">{remaining>0&&<button className="secondary" onClick={explore}>继续探索剩余 {remaining} 题</button>}<button className="activity-button" onClick={()=>onComplete(0,0)}>本次挑战完成</button></div></div>;
  }

  const total=phase==="required"?required.length:queue.length;
  return <div className="activity challenge-scene">
    <div className="challenge-top"><span className={`challenge-category ${current.category}`}>{labels[current.category]}</span><div className="challenge-count">问题 {index+1} / {total}</div></div>
    <div className="challenge-track" aria-label="挑战进度">{Array.from({length:total},(_,position)=><i className={position<index?"done":position===index?"active":""} key={position}/>)}</div>
    <p className="challenge-tag">{current.knowledgeTag}</p><h2>{current.prompt}</h2>
    <div className="challenge-options">{current.options.map((option,optionIndex)=><button className={selected===optionIndex?"selected":""} disabled={answered} key={option} onClick={()=>choose(current,optionIndex)}>{option}</button>)}</div>
    {current.mode==="reasoning"&&<div className="reason-box"><label htmlFor="challenge-reason">写下一句理由</label><textarea id="challenge-reason" aria-label="写下一句理由" value={reason} disabled={answered} onChange={event=>setReason(event.target.value)} placeholder="例如：我选择画图，因为……"/><button className="activity-button" disabled={selected===null||!reason.trim()||answered} onClick={submitReason}>提交思考</button></div>}
    {feedback&&<div className={`challenge-feedback ${answered?"success":"hint"}`} aria-live="polite"><p>{feedback}</p>{answered&&<p className="challenge-reference">{current.reference}</p>}</div>}
    {answered&&<button className="primary challenge-next" onClick={next}>下一题</button>}
  </div>;
}
