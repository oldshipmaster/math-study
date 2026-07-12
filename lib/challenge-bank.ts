import type {ChallengeCategory,ChallengeQuestion,Course,LessonScene,Question} from "./course-types";

const quotas:ChallengeCategory[]=[
  "application","application","application","application",
  "reverse","reverse","reverse","reverse",
  "error-correction","error-correction","error-correction",
  "pattern","pattern","pattern",
  "open","open","open",
  "inquiry","inquiry","inquiry",
];

function hash(text:string){return [...text].reduce((value,char)=>(value*33+char.charCodeAt(0))>>>0,5381);}
function clean(text:string){return text.replace(/[。！？?]/g,"").trim();}
function rotate(options:string[],correct:string,seed:number){
  const distinct=[correct,...options.filter(option=>option!==correct)].slice(0,3);
  while(distinct.length<3) distinct.push(`再检查第 ${distinct.length+1} 个条件`);
  const offset=seed%distinct.length;
  const rotated=[...distinct.slice(offset),...distinct.slice(0,offset)];
  return {options:rotated,answer:rotated.indexOf(correct)};
}
function contentScenes(course:Course){return course.scenes.filter(scene=>scene.kind!=="quiz"&&scene.kind!=="challenge");}
function quizFacts(course:Course){return course.scenes.flatMap(scene=>scene.questions??[]);}
function sceneAt(scenes:LessonScene[],index:number){return scenes[index%Math.max(1,scenes.length)]??{id:"concept",kind:"story",eyebrow:"概念",title:"核心概念",body:"观察并解释数学关系"};}
function factAt(facts:Question[],index:number){return facts[index%Math.max(1,facts.length)]??{prompt:"哪种方法符合本课目标？",options:["使用本课方法","忽略条件","随意猜测"],answer:0,explanation:"应使用本课方法并说明理由。"};}

export function buildChallengeBank(course:Course):ChallengeQuestion[]{
  const scenes=contentScenes(course);
  const facts=quizFacts(course);
  const goals=course.goals.length?course.goals:[course.summary];
  return quotas.map((category,index)=>{
    const scene=sceneAt(scenes,index);
    const nextScene=sceneAt(scenes,index+1);
    const fact=factAt(facts,index);
    const goal=goals[index%goals.length];
    const correctFact=fact.options[fact.answer]??goal;
    const wrongFact=fact.options.find((_,optionIndex)=>optionIndex!==fact.answer)??"忽略关键条件";
    const seed=hash(`${course.id}-${category}-${index}`);
    let prompt="",correct="",distractors:string[]=[],explanation="",hint="",reference="";
    if(category==="application"){
      prompt=`《${course.title}》情境应用：在“${scene.eyebrow}”任务中，哪一步最能帮助你完成“${clean(scene.title)}”？`;
      correct=`先运用“${goal}”分析条件`;
      distractors=[`只抄写“${clean(nextScene.title)}”而不分析`,`忽略单位或数量关系直接猜`];
      explanation=`《${course.title}》的情境题要先识别条件，再用“${goal}”建立数学关系。`;
      hint=`圈出“${clean(scene.body)}”中的已知量和目标量。`;
      reference=`参考路径：读情境 → 找条件 → 选择“${goal}” → 用${clean(scene.title)}检查。`;
    }else if(category==="reverse"){
      prompt=`《${course.title}》反向推理：已知结论“${clean(fact.explanation)}”，最适合反推确认什么？`;
      correct=`确认“${clean(fact.prompt)}”中的条件是否成立`;
      distractors=[`把结论当作新条件直接重复`,`换成与“${goal}”无关的问题`];
      explanation=`反向推理要从结论回到产生它的条件；《${course.title}》中应核对原问题。`;
      hint=`问自己：这个结论是由哪一个条件或算式得到的？`;
      reference=`参考思路：从“${clean(fact.explanation)}”倒推到“${clean(fact.prompt)}”，再用${goal}验证。`;
    }else if(category==="error-correction"){
      prompt=`《${course.title}》找错：小明把“${clean(fact.prompt)}”答成“${wrongFact}”。最关键的修正是什么？`;
      correct=`改为“${correctFact}”，并用“${goal}”说明`;
      distractors=[`保留“${wrongFact}”，只改书写顺序`,`删掉条件，不再检查答案`];
      explanation=`正确答案是“${correctFact}”；找错不仅要改结果，还要指出《${course.title}》中的依据。`;
      hint=`比较“${wrongFact}”和“${correctFact}”分别满足了哪些条件。`;
      reference=`参考纠错：定位错误条件 → 改为“${correctFact}” → 用${clean(fact.explanation)}验算。`;
    }else if(category==="pattern"){
      prompt=`《${course.title}》规律探索：把“${clean(scene.title)}”与“${clean(nextScene.title)}”放在一起观察，哪种研究方式最可靠？`;
      correct=`比较不变量与变化量，再用“${goal}”验证`;
      distractors=[`只看一个例子就宣布规律`,`只比较文字长短，不比较数学关系`];
      explanation=`规律需要多个例子和可重复验证；《${course.title}》可用“${goal}”检验猜想。`;
      hint=`分别写出两个场景中“没变的”和“改变的”。`;
      reference=`参考步骤：列举 → 对比 → 猜想 → 用新例子验证“${goal}”。`;
    }else if(category==="open"){
      prompt=`《${course.title}》开放思考：如果要向同学解释“${clean(scene.title)}”，你会选择哪种表达方式？选择后写一句理由。`;
      correct=`画图或操作模型，并标出关键关系`;
      distractors=[`写出算式并逐步解释`,`举一个生活情境再验证`];
      explanation=`三种方式都可能合理；关键是理由必须连接《${course.title}》的“${goal}”。`;
      hint=`想一想哪种表达最能让别人看见“为什么”。`;
      reference=`参考思路：我选择一种可视或可验证的方法，因为它能清楚呈现“${goal}”。`;
    }else{
      prompt=`《${course.title}》启发性思考：学会“${goal}”后，下一步最值得提出哪个可验证的问题？选择后写一句理由。`;
      correct=`改变一个条件，预测结果并用新例子检验`;
      distractors=[`寻找另一种方法并比较优缺点`,`把它连接到生活或另一门数学知识`];
      explanation=`启发性问题没有唯一方向，但应能继续观察、计算或验证，并与《${course.title}》相关。`;
      hint=`好问题通常可以通过画图、计算、操作或收集例子来验证。`;
      reference=`参考提问：如果改变“${clean(scene.title)}”中的一个条件，原来的“${goal}”还成立吗？为什么？`;
    }
    const arranged=rotate(distractors,correct,seed);
    return {id:`${course.id}-challenge-${String(index+1).padStart(2,"0")}`,category,mode:category==="open"||category==="inquiry"?"reasoning":"choice",prompt,options:arranged.options,answer:arranged.answer,explanation,hint,reference,knowledgeTag:`《${course.title}》· ${goal}`};
  });
}

export function selectRequiredChallenges(questions:ChallengeQuestion[]){
  const selected:ChallengeQuestion[]=[];
  for(const category of ["application","reverse","error-correction","pattern","open","inquiry"] as ChallengeCategory[]){
    const found=questions.find(question=>question.category===category);
    if(found) selected.push(found);
  }
  for(const question of questions){if(selected.length>=10) break;if(!selected.some(item=>item.id===question.id)) selected.push(question);}
  return selected;
}
