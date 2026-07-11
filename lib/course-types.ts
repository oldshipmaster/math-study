export type Question = {
  prompt: string;
  options: string[];
  answer: number;
  explanation: string;
};

export type LessonScene = {
  id: string;
  kind: "count" | "story" | "match" | "place" | "build" | "sequence" | "visual-pattern" | "number-line" | "quiz";
  eyebrow: string;
  title: string;
  body: string;
  instruction?: string;
  questions?: Question[];
};

export type Course = {
  id: "symbols" | "place-value" | "sequences" | "shape-patterns" | "signed-numbers";
  number: string;
  title: string;
  summary: string;
  duration: string;
  accent: string;
  goals: string[];
  scenes: LessonScene[];
};

export type LessonProgress = {
  sceneIndex: number;
  completed: boolean;
  attempts: number;
  correct: number;
};

export type ProgressState = {
  lessons: Partial<Record<Course["id"], LessonProgress>>;
};
