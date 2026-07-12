import {fireEvent,render,screen} from "@testing-library/react";
import {describe,expect,it,vi} from "vitest";
import {courses} from "../../lib/courses";
import {selectRequiredChallenges} from "../../lib/challenge-bank";
import type {ChallengeProgress,LessonScene} from "../../lib/course-types";
import {ChallengeScene} from "./ChallengeScene";

const empty:ChallengeProgress={completedIds:[],requiredIds:[],correct:0,attempts:0,reasons:{}};

describe("innovation challenge scene",()=>{
  it("shows a ten-question required run and gives a hint after a wrong answer",()=>{
    const scene=courses[0].scenes.at(-1)!;
    const required=selectRequiredChallenges(scene.challenges!);
    render(<ChallengeScene scene={scene} saved={empty} onProgress={vi.fn()} onComplete={vi.fn()}/>);
    expect(screen.getByText("问题 1 / 10")).toBeInTheDocument();
    expect(screen.getByText("情境应用")).toBeInTheDocument();
    const question=required[0];
    const wrong=question.options.find((_,index)=>index!==question.answer)!;
    fireEvent.click(screen.getByRole("button",{name:wrong}));
    expect(screen.getByText(question.hint)).toBeInTheDocument();
  });

  it("requires an approach and a written reason for open thinking",()=>{
    const source=courses[0].scenes.at(-1)!.challenges!.find(question=>question.mode==="reasoning")!;
    const scene:LessonScene={id:"reasoning",kind:"challenge",eyebrow:"创新挑战营",title:"开放题",body:"测试",challenges:[source]};
    render(<ChallengeScene scene={scene} saved={{...empty,requiredIds:[source.id]}} onProgress={vi.fn()} onComplete={vi.fn()}/>);
    const submit=screen.getByRole("button",{name:"提交思考"});
    expect(submit).toBeDisabled();
    fireEvent.click(screen.getByRole("button",{name:source.options[0]}));
    expect(submit).toBeDisabled();
    fireEvent.change(screen.getByRole("textbox",{name:"写下一句理由"}),{target:{value:"画图可以让我看清数量之间的关系"}});
    expect(submit).toBeEnabled();
    fireEvent.click(submit);
    expect(screen.getByText(source.reference)).toBeInTheDocument();
  });

  it("finishes ten required questions and offers the remaining ten",()=>{
    const scene=courses[0].scenes.at(-1)!;
    const required=selectRequiredChallenges(scene.challenges!);
    const onComplete=vi.fn();
    render(<ChallengeScene scene={scene} saved={empty} onProgress={vi.fn()} onComplete={onComplete}/>);
    for(const question of required){
      fireEvent.click(screen.getByRole("button",{name:question.options[question.answer]}));
      if(question.mode==="reasoning"){
        fireEvent.change(screen.getByRole("textbox",{name:"写下一句理由"}),{target:{value:"我会用本课知识验证这个思路"}});
        fireEvent.click(screen.getByRole("button",{name:"提交思考"}));
      }
      fireEvent.click(screen.getByRole("button",{name:"下一题"}));
    }
    expect(screen.getByText("必做挑战 10 / 10")).toBeInTheDocument();
    expect(screen.getByRole("button",{name:"继续探索剩余 10 题"})).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button",{name:"本次挑战完成"}));
    expect(onComplete).toHaveBeenCalled();
  });
});
