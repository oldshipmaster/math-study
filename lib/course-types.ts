export type Question = {
  prompt: string;
  options: string[];
  answer: number;
  explanation: string;
};

export type LessonScene = {
  id: string;
  kind: "count" | "story" | "match" | "place" | "build" | "sequence" | "visual-pattern" | "number-line" | "compare" | "order" | "estimate" | "rounding" | "multiples" | "prime" | "factor-tree" | "power" | "fraction" | "fraction-operation" | "decimal" | "ratio" | "addition" | "quiz";
  eyebrow: string;
  title: string;
  body: string;
  instruction?: string;
  questions?: Question[];
};

export type Course = {
  id: "symbols" | "place-value" | "sequences" | "shape-patterns" | "signed-numbers" | "comparison" | "ordering" | "estimation" | "rounding" | "multiples" | "primes" | "prime-factors" | "squares" | "cubes" | "fractions" | "fraction-of-quantity" | "like-fraction-order" | "unit-fraction-order" | "fraction-addition" | "fraction-subtraction" | "fraction-multiplication" | "fraction-division" | "decimal-rounding" | "decimal-addition" | "decimal-subtraction" | "percent-conversion" | "ratios" | "proportions" | "fraction-representations" | "addition-basics";
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
