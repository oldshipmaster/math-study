import type { Course } from "./course-types";

export const courses: Course[] = [
  {
    id: "symbols",
    number: "01",
    title: "数字符号",
    summary: "从真实数量出发，发现人类如何用简洁符号记录世界。",
    duration: "约 12 分钟",
    accent: "#e45b3d",
    goals: ["区分数量与数字", "认识多种数字写法", "用符号准确表达数量"],
    scenes: [
      { id: "count-first", kind: "count", eyebrow: "观察实验", title: "数量一直都在那里", body: "在数字出现以前，人们也能感受到多少。点击果实，看看数量怎样变化。", instruction: "点击果实，收集正好 5 个。" },
      { id: "symbol-story", kind: "story", eyebrow: "时间旅行", title: "把“多少”留下来", body: "一条刻痕代表一个物体。刻痕越来越多，人们开始发明更快速、更统一的符号。", instruction: "逐步点亮刻痕，观察它如何变成数字 5。" },
      { id: "many-symbols", kind: "match", eyebrow: "配对实验", title: "一种数量，多种写法", body: "阿拉伯数字、汉字和罗马数字长得不同，却可以表达同一个数量。", instruction: "选择所有表示三个的卡片。" },
      { id: "symbol-sort", kind: "match", eyebrow: "拖放挑战", title: "让符号找到数量", body: "符号不是装饰，它必须与真实数量准确对应。", instruction: "把数字卡与圆点卡配成正确的一组。" },
      { id: "symbol-quiz", kind: "quiz", eyebrow: "终局测验", title: "数字观察员认证", body: "用三道题检验你是否掌握了数量与符号。", questions: [
        { prompt: "哪一项表达了四个物体？", options: ["● ● ●", "● ● ● ●", "● ● ● ● ●"], answer: 1, explanation: "数一数，四个圆点与数字 4 对应。" },
        { prompt: "哪些符号与数字 3 表示相同数量？", options: ["三", "Ⅱ", "五"], answer: 0, explanation: "汉字“三”和阿拉伯数字 3 表示相同数量。" },
        { prompt: "为什么人们需要数字符号？", options: ["让颜色更漂亮", "快速记录和交流数量", "替代所有文字"], answer: 1, explanation: "统一的数字符号让数量容易记录、计算和交流。" },
      ] },
    ],
  },
  {
    id: "place-value",
    number: "02",
    title: "位值",
    summary: "把数字放进数位屋，理解同一个数字为什么会拥有不同价值。",
    duration: "约 14 分钟",
    accent: "#d39b24",
    goals: ["认识个十百位", "展开三位数", "理解位置决定数值"],
    scenes: [
      { id: "bundle-ten", kind: "build", eyebrow: "积木实验", title: "十个一，组成一个十", body: "零散的单位积木达到十个，就能捆成一条十。", instruction: "连续加入单位块，凑成一条十。" },
      { id: "place-house", kind: "place", eyebrow: "数位屋", title: "每个位置都有名字", body: "从右向左依次是个位、十位、百位。位置不同，数字的价值也不同。", instruction: "把 3、5、2 放进正确位置，组成 352。" },
      { id: "expanded", kind: "place", eyebrow: "拆解实验", title: "把 352 打开看看", body: "百位上的 3 是 300，十位上的 5 是 50，个位上的 2 是 2。", instruction: "点击每个数位，完成 352 = 300 + 50 + 2。" },
      { id: "same-five", kind: "place", eyebrow: "对比观察", title: "同一个 5，价值大不同", body: "305 里的 5 在个位，表示 5；350 里的 5 在十位，表示 50。", instruction: "选择数字 5 价值更大的数。" },
      { id: "build-number", kind: "build", eyebrow: "造数挑战", title: "用积木造出 241", body: "两个百、四个十和一个一组合起来，就是 241。", instruction: "依次完成百位、十位和个位。" },
      { id: "place-quiz", kind: "quiz", eyebrow: "终局测验", title: "数位建筑师认证", body: "用三道题检查你的位值理解。", questions: [
        { prompt: "472 中的 7 表示多少？", options: ["7", "70", "700"], answer: 1, explanation: "7 在十位，所以表示 7 个十，也就是 70。" },
        { prompt: "300 + 20 + 6 组成哪个数？", options: ["326", "362", "236"], answer: 0, explanation: "3 个百、2 个十、6 个一组成 326。" },
        { prompt: "哪个数中的 5 表示 500？", options: ["152", "251", "521"], answer: 2, explanation: "521 中的 5 在百位，表示 500。" },
      ] },
    ],
  },
];
