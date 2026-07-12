import {describe,expect,it} from "vitest";
import {courses} from "./courses";
import {buildChallengeBank,selectRequiredChallenges} from "./challenge-bank";

describe("innovative challenge bank",()=>{
  it("builds exactly twenty complete challenges for every course",()=>{
    const all=courses.flatMap(course=>buildChallengeBank(course));
    expect(courses).toHaveLength(80);
    expect(all).toHaveLength(1600);
    expect(new Set(all.map(question=>question.id)).size).toBe(1600);
    for(const course of courses){
      const questions=buildChallengeBank(course);
      expect(questions).toHaveLength(20);
      expect(questions.filter(q=>q.category==="application")).toHaveLength(4);
      expect(questions.filter(q=>q.category==="reverse")).toHaveLength(4);
      expect(questions.filter(q=>q.category==="error-correction")).toHaveLength(3);
      expect(questions.filter(q=>q.category==="pattern")).toHaveLength(3);
      expect(questions.filter(q=>q.category==="open")).toHaveLength(3);
      expect(questions.filter(q=>q.category==="inquiry")).toHaveLength(3);
      for(const question of questions){
        expect(question.prompt.trim()).not.toBe("");
        expect(question.options.length).toBeGreaterThanOrEqual(3);
        expect(question.answer).toBeGreaterThanOrEqual(0);
        expect(question.answer).toBeLessThan(question.options.length);
        expect(question.explanation.trim()).not.toBe("");
        expect(question.hint.trim()).not.toBe("");
        expect(question.reference.trim()).not.toBe("");
        expect(question.knowledgeTag.trim()).not.toBe("");
        expect(`${question.prompt} ${question.explanation} ${question.knowledgeTag}`).toContain(course.title);
      }
    }
  });

  it("selects a stable ten-question run covering all six categories",()=>{
    for(const course of courses){
      const bank=buildChallengeBank(course);
      const first=selectRequiredChallenges(bank);
      const second=selectRequiredChallenges(bank);
      expect(first.map(q=>q.id)).toEqual(second.map(q=>q.id));
      expect(first).toHaveLength(10);
      expect(new Set(first.map(q=>q.category))).toEqual(new Set(["application","reverse","error-correction","pattern","open","inquiry"]));
    }
  });
});
