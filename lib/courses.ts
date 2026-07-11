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
  {
    id: "sequences",
    number: "03",
    title: "数列与规律",
    summary: "追踪数字每一步的变化，像侦探一样找出隐藏规则。",
    duration: "约 13 分钟",
    accent: "#4f7f6f",
    goals: ["识别递增递减", "描述变化规则", "预测后续数字"],
    scenes: [
      { id: "jump-two", kind: "sequence", eyebrow: "跳格观察", title: "每次向前跳两格", body: "从 2 出发，每次加 2，就会依次来到 4、6、8。相邻两个数的差保持不变。", instruction: "选择数列 2、4、6、8 后面的数字。" },
      { id: "find-five", kind: "sequence", eyebrow: "发现规则", title: "相邻数字变了多少？", body: "观察 5、10、15、20。每前进一步，数字都增加相同的数量。", instruction: "选择这个数列每次增加多少。" },
      { id: "fill-sequence", kind: "sequence", eyebrow: "补全数列", title: "把空缺的数字找回来", body: "规律像一条看不见的轨道。只要知道每次的变化，就能找回空缺。", instruction: "补全 3、6、9、□、15。" },
      { id: "count-down", kind: "sequence", eyebrow: "倒着走", title: "数字也可以越来越小", body: "递减数列每次减去相同的数。30、25、20 正在每次减少 5。", instruction: "选择 30、25、20 后面的数字。" },
      { id: "rule-detective", kind: "sequence", eyebrow: "规则侦探", title: "同样变大，规则可能不同", body: "2、4、8、16 不是每次加同一个数，而是每次变成原来的两倍。", instruction: "找出 2、4、8、16 的规则。" },
      { id: "sequence-quiz", kind: "quiz", eyebrow: "终局测验", title: "数列侦探认证", body: "用三道题证明你能发现并延续数字规律。", questions: [
        { prompt: "4、7、10、13 后面是什么？", options: ["14", "15", "16"], answer: 2, explanation: "每次加 3，所以 13 + 3 = 16。" },
        { prompt: "40、35、30 的规则是什么？", options: ["每次减 5", "每次加 5", "每次减 10"], answer: 0, explanation: "相邻两个数都相差 5，并且越来越小。" },
        { prompt: "3、6、12、24 后面是什么？", options: ["27", "36", "48"], answer: 2, explanation: "每个数都是前一个数的 2 倍，所以 24 × 2 = 48。" },
      ] },
    ],
  },
  {
    id: "shape-patterns",
    number: "04",
    title: "数列与图形",
    summary: "让颜色、形状和方向开口说话，把看见的变化变成规律。",
    duration: "约 14 分钟",
    accent: "#5d6faa",
    goals: ["识别循环单元", "延续图形规律", "图形转化为数列"],
    scenes: [
      { id: "color-cycle", kind: "visual-pattern", eyebrow: "颜色循环", title: "找到不断重复的小队", body: "红、黄、绿三个颜色组成一个重复单元。看清最小单元，就能一直延续下去。", instruction: "选择下一个应该出现的颜色。" },
      { id: "shape-chain", kind: "visual-pattern", eyebrow: "形状接龙", title: "圆、三角、方形轮流登场", body: "图形也可以按照固定顺序循环。找到开头，观察它何时重新出现。", instruction: "补全圆、三角、方形、圆、三角、□。" },
      { id: "turn-arrow", kind: "visual-pattern", eyebrow: "方向规律", title: "箭头每次转四分之一圈", body: "向上、向右、向下、向左，箭头每次顺时针旋转 90°。", instruction: "选择向左之后的箭头方向。" },
      { id: "growing-dots", kind: "visual-pattern", eyebrow: "增长图案", title: "每幅图多两个圆点", body: "第一幅 1 个点，第二幅 3 个点，第三幅 5 个点。图形在增长，数量也形成数列。", instruction: "选择第四幅图应该有多少个点。" },
      { id: "picture-to-number", kind: "visual-pattern", eyebrow: "图形变数字", title: "把看见的规律写下来", body: "点阵 1、3、5、7 对应每次增加 2 的奇数数列。图形规律可以翻译成数字规律。", instruction: "选择下一个点阵的数量。" },
      { id: "pattern-quiz", kind: "quiz", eyebrow: "终局测验", title: "图形规律设计师认证", body: "用三道题检验你是否能看懂图形语言。", questions: [
        { prompt: "○ △ □ ○ △ 后面是什么？", options: ["○", "△", "□"], answer: 2, explanation: "重复单元是圆、三角、方形，下一项是方形。" },
        { prompt: "箭头按 ↑ → ↓ ← 循环，← 后面是什么？", options: ["↑", "→", "↓"], answer: 0, explanation: "向左之后回到向上，开始下一轮循环。" },
        { prompt: "点数是 2、4、6、8，下一幅图有几个点？", options: ["9", "10", "12"], answer: 1, explanation: "每幅图增加 2 个点，所以 8 + 2 = 10。" },
      ] },
    ],
  },
  {
    id: "signed-numbers",
    number: "05",
    title: "正数与负数",
    summary: "站在零的两边，用温度、楼层和方向理解正数与负数。",
    duration: "约 15 分钟",
    accent: "#3c86a4",
    goals: ["理解零是分界", "认识正负方向", "比较正负数大小"],
    scenes: [
      { id: "temperature", kind: "number-line", eyebrow: "温度实验", title: "零上与零下", body: "0°C 是冰水交界附近的温度。零上用正数表示，零下用负数表示。", instruction: "选择表示零下 3°C 的数字。" },
      { id: "number-walk", kind: "number-line", eyebrow: "数轴漫步", title: "从零出发，方向决定正负", body: "在数轴上，0 的右边是正数，左边是负数。离 0 越远，绝对距离越大。", instruction: "从 0 向左走 4 格，会到达哪里？" },
      { id: "elevator", kind: "number-line", eyebrow: "电梯楼层", title: "地面之上与地下", body: "地面层记作 0，地上楼层可用正数，地下停车层可用负数。", instruction: "选择地下 2 层对应的数。" },
      { id: "compare-signed", kind: "number-line", eyebrow: "谁更大", title: "越靠右，数字越大", body: "在数轴上比较数字时，右边的数总比左边的大，所以 0 大于所有负数。", instruction: "在 -2、0、3 中选择最大的数。" },
      { id: "signed-context", kind: "number-line", eyebrow: "情境配对", title: "生活中的相反方向", body: "收入与支出、上升与下降都可以用正负数表示。符号告诉我们变化的方向。", instruction: "账户支出 5 元应该用哪个数表示？" },
      { id: "signed-quiz", kind: "quiz", eyebrow: "终局测验", title: "正负数导航员认证", body: "用三道题检查你能否在零的两边准确定位。", questions: [
        { prompt: "数轴上哪个数最靠右？", options: ["-4", "-1", "2"], answer: 2, explanation: "正数在 0 的右边，2 比两个负数都大。" },
        { prompt: "温度从 2°C 降到 -3°C，一共下降多少度？", options: ["1°C", "5°C", "6°C"], answer: 1, explanation: "从 2 到 0 是 2 度，从 0 到 -3 是 3 度，共 5 度。" },
        { prompt: "地下 3 层通常写作什么？", options: ["+3", "0", "-3"], answer: 2, explanation: "地下方向相对于地面为负，所以写作 -3。" },
      ] },
    ],
  },
  {
    id: "comparison",
    number: "06",
    title: "数的比较",
    summary: "让比较符号张开嘴巴，从数量多少一路挑战到多位数大小。",
    duration: "约 16 分钟",
    accent: "#c65c48",
    goals: ["理解大小与相等", "正确使用比较符号", "从高位比较多位数"],
    scenes: [
      { id: "compare-amounts", kind: "compare", eyebrow: "数量热身", title: "哪一盘更多？", body: "先不看数字，只观察物体数量。更多、较少和相同，是比较的第一步。", instruction: "选择数量最多的一盘。" },
      { id: "symbol-mouth", kind: "compare", eyebrow: "符号鳄鱼", title: "开口朝向更大的数", body: "大于号和小于号的开口总朝向较大的数，尖角则指向较小的数。", instruction: "在 8 和 5 之间放入正确的比较符号。" },
      { id: "digit-spotlight", kind: "compare", eyebrow: "逐位聚光灯", title: "从最高位开始看", body: "比较 1404 和 1133 时，千位相同，就继续比较百位；4 大于 1，胜负已经确定。", instruction: "点亮第一个能分出大小的数位。" },
      { id: "digit-count", kind: "compare", eyebrow: "位数优先", title: "位数不同，先看位数", body: "比较正整数时，位数更多的数更大；位数相同，再从最高位逐位比较。", instruction: "选择 999 和 1000 中更大的数。" },
      { id: "compare-arena", kind: "compare", eyebrow: "比较擂台", title: "连续判断大小关系", body: "把数量、位数和逐位比较的方法连起来，完成最后一轮符号挑战。", instruction: "完成三组数的比较。" },
      { id: "comparison-quiz", kind: "quiz", eyebrow: "终局测验", title: "比较裁判认证", body: "用三道题证明你能准确判断数的大小。", questions: [
        { prompt: "8 和 5 之间应该放什么符号？", options: ["<", ">", "="], answer: 1, explanation: "8 比 5 大，所以写作 8 > 5。" },
        { prompt: "1404 和 1133 比较，哪个数位最先分出大小？", options: ["千位", "百位", "个位"], answer: 1, explanation: "千位都是 1，百位上的 4 大于 1。" },
        { prompt: "下面哪个数最大？", options: ["999", "1000", "909"], answer: 1, explanation: "1000 是四位数，比两个三位数都大。" },
      ] },
    ],
  },
  {
    id: "ordering",
    number: "07",
    title: "数的排序",
    summary: "把数字卡送上排序轨道，掌握升序、降序和多位数排名。",
    duration: "约 14 分钟",
    accent: "#8066a6",
    goals: ["理解升序降序", "排列一组整数", "利用高位决定名次"],
    scenes: [
      { id: "height-line", kind: "order", eyebrow: "排队热身", title: "从矮到高站好", body: "排序就是按照同一个标准安排先后。身高从矮到高，对应数从小到大。", instruction: "依次选择 120、135、150。" },
      { id: "ascending-track", kind: "order", eyebrow: "升序轨道", title: "最小的数先出发", body: "升序排列从小到大，像沿着数轴不断向右前进。", instruction: "按升序排列 45、444、912、5121。" },
      { id: "descending-track", kind: "order", eyebrow: "降序轨道", title: "最大的数先出发", body: "降序排列与升序相反，要从最大的数开始。", instruction: "按降序排列 45、444、912、5121。" },
      { id: "same-digits", kind: "order", eyebrow: "同位比较", title: "位数相同，逐位判断", body: "5234 和 5121 都是四位数，千位相同，比较百位就能知道 5234 更大。", instruction: "选择两个数中更大的一个。" },
      { id: "ranking-board", kind: "order", eyebrow: "排名挑战", title: "给票数排出名次", body: "先按位数分组，再从最高位逐位比较，就能高效完成完整排名。", instruction: "按从高到低选出前三名。" },
      { id: "ordering-quiz", kind: "quiz", eyebrow: "终局测验", title: "排序指挥官认证", body: "用三道题检查你的排序方向和比较方法。", questions: [
        { prompt: "哪一组是升序排列？", options: ["8、5、2", "2、5、8", "5、2、8"], answer: 1, explanation: "升序是从小到大。" },
        { prompt: "45、444、912 中最大的数是？", options: ["45", "444", "912"], answer: 2, explanation: "912 与 444 都是三位数，百位上的 9 更大。" },
        { prompt: "5234 和 5121 降序排列时谁在前？", options: ["5121", "5234", "一样大"], answer: 1, explanation: "千位相同，百位 2 大于 1，所以 5234 在前。" },
      ] },
    ],
  },
  {
    id: "estimation",
    number: "08",
    title: "估算",
    summary: "不用逐个数完，也能做出接近正确答案的合理判断。",
    duration: "约 15 分钟",
    accent: "#3c8b78",
    goals: ["理解合理估计", "用抽样估总量", "用估算检查计算"],
    scenes: [
      { id: "quick-estimate", kind: "estimate", eyebrow: "一眼估量", title: "先判断大概范围", body: "估算不是随便猜，而是利用看到的信息排除明显偏小或偏大的答案。", instruction: "选择最合理的点数估计。" },
      { id: "grid-sample", kind: "estimate", eyebrow: "网格抽样", title: "数一格，推测全部", body: "如果每格大约有 12 株花，9 格就大约有 12 × 9 = 108 株。", instruction: "选择整个花坛最合理的估计。" },
      { id: "friendly-numbers", kind: "estimate", eyebrow: "选择近似数", title: "把数字变得好算", body: "2847 接近 3000，4102 接近 4000，近似数能帮助我们快速心算。", instruction: "选择两个合适的近似数。" },
      { id: "estimate-check", kind: "estimate", eyebrow: "计算检查员", title: "答案和估算接近吗？", body: "3000 + 4000 约等于 7000，精确答案 6949 很接近，所以结果看起来合理。", instruction: "判断 6949 是否是合理的精确答案。" },
      { id: "about-equal", kind: "estimate", eyebrow: "认识约等号", title: "精确相等还是大约相等", body: "等号表示两边完全相等，约等号 ≈ 表示结果很接近但不完全相同。", instruction: "为 2847 + 4102 与 7000 选择正确符号。" },
      { id: "estimation-quiz", kind: "quiz", eyebrow: "终局测验", title: "估算观察员认证", body: "用三道题判断估算是否合理。", questions: [
        { prompt: "3879 + 1056 大约是多少？", options: ["约 5000", "约 3000", "约 8000"], answer: 0, explanation: "3879 约为 4000，1056 约为 1000，合起来约 5000。" },
        { prompt: "每格约 10 个物体，共 8 格，大约有多少？", options: ["18", "80", "800"], answer: 1, explanation: "10 × 8 = 80。" },
        { prompt: "6949 和 7000 之间更适合用哪个符号？", options: ["=", "≈", ">"], answer: 1, explanation: "两个数接近但不相等，使用约等号。" },
      ] },
    ],
  },
  {
    id: "rounding",
    number: "09",
    title: "四舍五入",
    summary: "在数轴上寻找最近的整十、整百和整千数，掌握舍与入。",
    duration: "约 15 分钟",
    accent: "#d07c35",
    goals: ["掌握四舍五入", "按指定数位取整", "理解取整误差"],
    scenes: [
      { id: "nearest-ten", kind: "rounding", eyebrow: "数轴靠近谁", title: "24、25、28 各靠近哪里？", body: "24 更靠近 20，28 更靠近 30；25 正好在中间，按照五入规则变成 30。", instruction: "把 25 四舍五入到十位。" },
      { id: "round-switch", kind: "rounding", eyebrow: "舍入拨杆", title: "小于 5 舍，大于等于 5 入", body: "先找到目标数位右边的一位，它决定保留部分是否需要进一。", instruction: "判断观察位是 4 时应该舍还是入。" },
      { id: "round-ten", kind: "rounding", eyebrow: "取整到十位", title: "观察个位", body: "7641 取整到十位时观察个位 1，小于 5，所以得到 7640。", instruction: "选择正确结果。" },
      { id: "round-hundred", kind: "rounding", eyebrow: "取整到百位", title: "观察十位", body: "7641 取整到百位时观察十位 4，小于 5，所以得到 7600。", instruction: "选择正确结果。" },
      { id: "round-thousand", kind: "rounding", eyebrow: "取整到千位", title: "观察百位", body: "7641 取整到千位时观察百位 6，大于等于 5，所以得到 8000。", instruction: "选择正确结果并比较误差。" },
      { id: "rounding-quiz", kind: "quiz", eyebrow: "终局测验", title: "取整工程师认证", body: "用三道题检查你能否找到正确观察位。", questions: [
        { prompt: "67 四舍五入到十位是多少？", options: ["60", "70", "100"], answer: 1, explanation: "个位 7 大于等于 5，十位进一，得到 70。" },
        { prompt: "7641 四舍五入到百位是多少？", options: ["7640", "7600", "8000"], answer: 1, explanation: "观察十位 4，舍去后得到 7600。" },
        { prompt: "哪个结果通常最接近 7641？", options: ["取整到十位", "取整到百位", "取整到千位"], answer: 0, explanation: "取整位越低，通常保留的信息越多，误差越小。" },
      ] },
    ],
  },
  {
    id: "multiples",
    number: "10",
    title: "倍数",
    summary: "沿数轴按固定步长跳跃，在重叠圆圈里发现公倍数和最小公倍数。",
    duration: "约 16 分钟",
    accent: "#397aa6",
    goals: ["理解乘积与倍数", "找出公倍数", "认识最小公倍数"],
    scenes: [
      { id: "shoe-array", kind: "multiples", eyebrow: "鞋架阵列", title: "6 排，每排 2 双", body: "6 × 2 = 12，所以 12 是 6 的倍数，也是 2 的倍数。", instruction: "选择能表示这组阵列的乘法式。" },
      { id: "multiple-jumps", kind: "multiples", eyebrow: "倍数跳跃", title: "每次跳 3 格", body: "从 0 开始每次跳 3 格，会依次到达 3、6、9、12，这些都是 3 的倍数。", instruction: "选择下一次会到达的数。" },
      { id: "multiple-filter", kind: "multiples", eyebrow: "倍数筛选", title: "找出 4 的倍数", body: "把 4 分别乘 1、2、3……，就能得到 4、8、12、16……", instruction: "选择所有 4 的倍数。" },
      { id: "venn-common", kind: "multiples", eyebrow: "双圈分类", title: "重叠区域藏着公倍数", body: "同时属于 3 的倍数和 4 的倍数的数，要放进两个圆的重叠区域。", instruction: "把 12 放到正确区域。" },
      { id: "least-common", kind: "multiples", eyebrow: "最小公倍数", title: "第一个共同落点", body: "12、24、36 都是 3 和 4 的公倍数，其中最小的正数 12 是最小公倍数。倍数会无限延续，所以没有最大公倍数。", instruction: "选择 3 和 4 的最小公倍数。" },
      { id: "multiples-quiz", kind: "quiz", eyebrow: "终局测验", title: "倍数探险家认证", body: "用三道题完成倍数、公倍数和最小公倍数挑战。", questions: [
        { prompt: "下面哪个数是 8 的倍数？", options: ["18", "24", "30"], answer: 1, explanation: "8 × 3 = 24，所以 24 是 8 的倍数。" },
        { prompt: "下面哪个数同时是 3 和 4 的倍数？", options: ["8", "9", "12"], answer: 2, explanation: "12 = 3 × 4，也等于 4 × 3。" },
        { prompt: "3 和 4 的最小公倍数是多少？", options: ["7", "12", "24"], answer: 1, explanation: "它们共同的正倍数从 12 开始。" },
      ] },
    ],
  },
  {
    id: "primes", number: "11", title: "质数", summary: "打开因数门，筛出只能被 1 和自己整除的特殊数字。", duration: "约 15 分钟", accent: "#b65368", goals: ["理解质数定义", "知道 1 不是质数", "用整除筛选质数"], scenes: [
      { id: "prime-gate", kind: "prime", eyebrow: "因数门卫", title: "只有两把钥匙", body: "质数是大于 1 的整数，并且只有 1 和它本身两个正因数。", instruction: "选择只有两个正因数的数。" },
      { id: "two-vs-four", kind: "prime", eyebrow: "对比实验", title: "2 是质数，4 不是", body: "2 只能被 1 和 2 整除；4 还可以被 2 整除，所以 4 是合数。", instruction: "选择 4 不是质数的原因。" },
      { id: "prime-sieve", kind: "prime", eyebrow: "质数涂格", title: "把合数筛出去", body: "先划去 1，再划去 2、3、5、7 的倍数，留下的数字就是 100 以内的质数。", instruction: "从 15、17、21 中选出质数。" },
      { id: "prime-check", kind: "prime", eyebrow: "快速筛选", title: "试除 2、3、5、7", body: "判断 100 以内较大的数时，可以依次试除较小质数。", instruction: "判断 83 是否为质数。" },
      { id: "prime-forever", kind: "prime", eyebrow: "无限星河", title: "质数没有最大一个", body: "质数有无穷多个，无论找到多大的质数，后面仍然还有新的质数。", instruction: "选择正确的说法。" },
      { id: "primes-quiz", kind: "quiz", eyebrow: "终局测验", title: "质数侦探认证", body: "完成三道质数筛选题。", questions: [
        { prompt: "下面哪个数是质数？", options: ["1", "7", "9"], answer: 1, explanation: "7 只有 1 和 7 两个正因数。" },
        { prompt: "为什么 15 不是质数？", options: ["它是奇数", "它能被 3 和 5 整除", "它大于 10"], answer: 1, explanation: "15 除了 1 和自身，还有 3、5 两个因数。" },
        { prompt: "关于质数，哪句话正确？", options: ["1 是质数", "质数有无穷多个", "所有奇数都是质数"], answer: 1, explanation: "质数有无穷多个；1 不是质数，9 等奇数也不是质数。" },
      ] },
    ]
  },
  {
    id: "prime-factors", number: "12", title: "质因数", summary: "把合数拆成不可再拆的质数积木，长出一棵因数树。", duration: "约 16 分钟", accent: "#6572aa", goals: ["认识质因数", "绘制因数树", "写出质因数乘积"], scenes: [
      { id: "prime-blocks", kind: "factor-tree", eyebrow: "数字积木", title: "不可再拆的质数块", body: "一个数的因数如果同时是质数，就叫这个数的质因数。", instruction: "选择 30 的一个质因数。" },
      { id: "factor-thirty", kind: "factor-tree", eyebrow: "分解 30", title: "30 = 2 × 3 × 5", body: "先把 30 分成 2 和 15，再把 15 分成 3 和 5，叶子都是质数。", instruction: "选择完整的质因数分解。" },
      { id: "factor-seventy-two", kind: "factor-tree", eyebrow: "因数树", title: "让 72 长出枝条", body: "72 可以先分成 8 和 9，再继续分解，直到每个叶子都是质数。", instruction: "选择 72 的下一层分解。" },
      { id: "circle-leaves", kind: "factor-tree", eyebrow: "圈出叶子", title: "只收集质数叶片", body: "因数树没有继续分枝的质数叶子，组成原数的质因数乘积。", instruction: "选择 72 的所有质因数。" },
      { id: "same-product", kind: "factor-tree", eyebrow: "不同路径", title: "树形不同，果实相同", body: "72 可以先拆成 8×9，也可以拆成 6×12，最终都会得到 2×2×2×3×3。", instruction: "判断两棵树的结果。" },
      { id: "prime-factors-quiz", kind: "quiz", eyebrow: "终局测验", title: "因数树园丁认证", body: "完成三道质因数分解题。", questions: [
        { prompt: "30 的质因数有哪些？", options: ["2、3、5", "1、6、30", "3、10"], answer: 0, explanation: "30 = 2 × 3 × 5，三个因数都是质数。" },
        { prompt: "12 的质因数分解是？", options: ["2×6", "3×4", "2×2×3"], answer: 2, explanation: "2、2、3 都是质数。" },
        { prompt: "因数树何时停止分解？", options: ["叶子都是质数时", "出现偶数时", "画满三层时"], answer: 0, explanation: "质数无法再拆成两个大于 1 的整数因数。" },
      ] },
    ]
  },
  {
    id: "squares", number: "13", title: "平方数", summary: "用小方块铺满正方形，看见一个数与自己相乘。", duration: "约 14 分钟", accent: "#368b82", goals: ["理解平方符号", "连接点阵与乘法", "识别常见平方数"], scenes: [
      { id: "square-two", kind: "power", eyebrow: "方块拼图", title: "2² 是一个 2×2 正方形", body: "2² 表示 2×2，用 4 个小方块正好拼成边长为 2 的正方形。", instruction: "选择 2² 的结果。" },
      { id: "square-three", kind: "power", eyebrow: "扩展点阵", title: "3² = 9", body: "边长为 3 的正方形有 3 行、每行 3 个，共 9 个方块。", instruction: "选择方块总数。" },
      { id: "square-table", kind: "power", eyebrow: "平方表", title: "行列相交找到答案", body: "在横轴和纵轴都找到 7，交点 49 就是 7²。", instruction: "选择 7²。" },
      { id: "square-sequence", kind: "power", eyebrow: "平方数列", title: "1、4、9、16、25", body: "平方数依次来自 1²、2²、3²、4²、5²。", instruction: "选择下一个平方数。" },
      { id: "square-parity", kind: "power", eyebrow: "奇偶观察", title: "奇数平方仍是奇数", body: "奇数乘奇数得到奇数，偶数乘偶数得到偶数。", instruction: "判断 9² 的奇偶性。" },
      { id: "squares-quiz", kind: "quiz", eyebrow: "终局测验", title: "平方建筑师认证", body: "完成三道平方数挑战。", questions: [
        { prompt: "6² 等于多少？", options: ["12", "36", "216"], answer: 1, explanation: "6² = 6 × 6 = 36。" },
        { prompt: "下面哪个是平方数？", options: ["20", "25", "30"], answer: 1, explanation: "25 = 5²。" },
        { prompt: "边长 4 的正方形点阵有几个点？", options: ["8", "12", "16"], answer: 2, explanation: "4 × 4 = 16。" },
      ] },
    ]
  },
  {
    id: "cubes", number: "14", title: "立方数", summary: "把正方形一层层叠成立方体，理解三个相同因数相乘。", duration: "约 14 分钟", accent: "#b77532", goals: ["理解立方符号", "用分层计算体积", "识别常见立方数"], scenes: [
      { id: "cube-two", kind: "power", eyebrow: "立体积木", title: "2³ = 8", body: "2³ 表示 2×2×2，需要 8 个单位小立方体。", instruction: "选择 2³ 的结果。" },
      { id: "cube-layers", kind: "power", eyebrow: "逐层组装", title: "每层 4 个，共 2 层", body: "2×2 的一层有 4 块，叠 2 层就是 8 块。", instruction: "选择正确的分层算式。" },
      { id: "cube-three", kind: "power", eyebrow: "魔方实验", title: "3³ = 27", body: "实心 3×3×3 立方体有 27 个小方块。", instruction: "选择实心立方体的方块数。" },
      { id: "square-or-cube", kind: "power", eyebrow: "概念辨析", title: "平方还是立方？", body: "平方有两个相同因数，立方有三个相同因数。", instruction: "选择表示 4³ 的算式。" },
      { id: "cube-sequence", kind: "power", eyebrow: "立方阶梯", title: "1、8、27、64", body: "这些数依次是 1³、2³、3³、4³。", instruction: "选择下一个立方数。" },
      { id: "cubes-quiz", kind: "quiz", eyebrow: "终局测验", title: "立方工程师认证", body: "完成三道立方数挑战。", questions: [
        { prompt: "3³ 等于多少？", options: ["9", "18", "27"], answer: 2, explanation: "3×3×3 = 27。" },
        { prompt: "哪个算式表示 5³？", options: ["5×3", "5×5", "5×5×5"], answer: 2, explanation: "立方表示三个相同因数相乘。" },
        { prompt: "2×2×2 立方体有几层？", options: ["2 层", "4 层", "8 层"], answer: 0, explanation: "每层 2×2 共 4 块，叠 2 层。" },
      ] },
    ]
  },
  {
    id: "fractions", number: "15", title: "分数", summary: "公平切分一个整体，用分子和分母说清拥有其中几份。", duration: "约 16 分钟", accent: "#d25f57", goals: ["理解平均分", "认识分子分母", "比较单位分数"], scenes: [
      { id: "fair-share", kind: "fraction", eyebrow: "公平切分", title: "四个人平分一个蛋糕", body: "把整体平均分成 4 份，每人得到其中 1 份，也就是 1/4。", instruction: "选择每个人得到的分数。" },
      { id: "fraction-parts", kind: "fraction", eyebrow: "分数结构", title: "分子、分母和分数线", body: "分母表示整体平均分成几份，分子表示取了其中几份。", instruction: "选择 3/8 中的分母。" },
      { id: "shade-three-eighths", kind: "fraction", eyebrow: "涂色挑战", title: "涂出八份中的三份", body: "3/8 表示整体平均分成 8 份，取其中 3 份。", instruction: "选择正确的涂色数量。" },
      { id: "half-quarter", kind: "fraction", eyebrow: "大小比较", title: "1/2 比 1/4 大", body: "同一个整体分得越细，每一份越小。", instruction: "选择更大的分数。" },
      { id: "unit-fractions", kind: "fraction", eyebrow: "单位分数赛跑", title: "分子都是 1，分母越大越小", body: "比较 1/3、1/5、1/8 时，分母最小的 1/3 最大。", instruction: "选择最大的单位分数。" },
      { id: "fractions-quiz", kind: "quiz", eyebrow: "终局测验", title: "公平分配师认证", body: "完成三道分数挑战。", questions: [
        { prompt: "一根面包平均分成 8 段，每段占几分之几？", options: ["1/8", "1/4", "8/1"], answer: 0, explanation: "整体分成 8 份，每份是 1/8。" },
        { prompt: "3/8 中的分子是？", options: ["3", "8", "11"], answer: 0, explanation: "分数线上面的 3 是分子。" },
        { prompt: "哪个单位分数最大？", options: ["1/2", "1/4", "1/6"], answer: 0, explanation: "同一整体中，分母越小，每份越大。" },
      ] },
    ]
  },
  {
    id:"fraction-of-quantity",number:"16",title:"求一个数量的一部分",summary:"先求一份，再取几份，把分数变成确切数量。",duration:"约 14 分钟",accent:"#4f8a72",goals:["先除以分母","再乘以分子","解决数量问题"],scenes:[
      {id:"share-twelve",kind:"fraction",eyebrow:"奶牛分组",title:"12 的四分之一是多少？",body:"把 12 平均分成 4 份，每份有 3。",instruction:"选择 12 的 1/4。"},
      {id:"take-three-parts",kind:"fraction",eyebrow:"取三份",title:"12 的四分之三",body:"一份是 3，取三份就是 3×3=9。",instruction:"选择 12 的 3/4。"},
      {id:"divide-then-multiply",kind:"fraction",eyebrow:"两步机器",title:"先除分母，再乘分子",body:"求一个数量的几分之几，可以先除以分母求一份，再乘分子求几份。",instruction:"选择正确的计算顺序。"},
      {id:"hens-three-quarters",kind:"fraction",eyebrow:"养鸡场任务",title:"24 的四分之三",body:"24÷4=6，6×3=18。",instruction:"选择需要带走的母鸡数。"},
      {id:"fraction-quantity-builder",kind:"fraction",eyebrow:"数量建模",title:"把分数贴到数量上",body:"图形分组能帮助我们看见分母决定份数、分子决定取几份。",instruction:"选择 20 的 2/5。"},
      {id:"fraction-of-quantity-quiz",kind:"quiz",eyebrow:"终局测验",title:"分数任务员认证",body:"完成三道数量分数题。",questions:[
        {prompt:"12 的 3/4 是多少？",options:["3","9","16"],answer:1,explanation:"12÷4×3=9。"},
        {prompt:"20 的 2/5 是多少？",options:["4","8","10"],answer:1,explanation:"20÷5=4，4×2=8。"},
        {prompt:"求 18 的 2/3，第一步应该？",options:["18÷3","18×3","18÷2"],answer:0,explanation:"先除以分母 3 求出一份。"},
      ]},
    ]
  },
  {
    id:"like-fraction-order",number:"17",title:"同分母分数比较",summary:"每份一样大时，谁取的份数多谁就更大。",duration:"约 13 分钟",accent:"#7a6cab",goals:["理解同分母","比较分子","排列同分母分数"],scenes:[
      {id:"same-eighths",kind:"fraction",eyebrow:"豌豆豆荚",title:"八等份中的不同数量",body:"3/8、1/8、5/8、6/8 的每份一样大，只需比较取了几份。",instruction:"选择最大的分数。"},
      {id:"numerator-wins",kind:"fraction",eyebrow:"分子擂台",title:"分母相同看分子",body:"分母相同，分子越大，拥有的部分越多。",instruction:"比较 3/7 和 5/7。"},
      {id:"like-order-up",kind:"fraction",eyebrow:"升序轨道",title:"从小到大排队",body:"保持分母 8 不变，按分子 1、3、5、6 排列。",instruction:"选择正确升序。"},
      {id:"like-bars",kind:"fraction",eyebrow:"分数条验证",title:"让图形证明答案",body:"同样长度的分数条被分成相同份数，涂色越多分数越大。",instruction:"选择涂色更多的分数条。"},
      {id:"like-symbol",kind:"fraction",eyebrow:"符号挑战",title:"放入大于或小于号",body:"比较分子后，把正确符号放进两个同分母分数之间。",instruction:"完成 2/9 与 7/9 的比较。"},
      {id:"like-fraction-quiz",kind:"quiz",eyebrow:"终局测验",title:"同分母裁判认证",body:"完成三道比较题。",questions:[
        {prompt:"3/8 和 6/8 哪个大？",options:["3/8","6/8","一样大"],answer:1,explanation:"分母相同，分子 6 更大。"},
        {prompt:"哪组是升序？",options:["5/7、3/7、1/7","1/7、3/7、5/7","3/7、1/7、5/7"],answer:1,explanation:"分子从 1 增加到 5。"},
        {prompt:"2/9 ? 7/9",options:[">","<","="],answer:1,explanation:"2 小于 7，所以 2/9 < 7/9。"},
      ]},
    ]
  },
  {
    id:"unit-fraction-order",number:"18",title:"单位分数比较",summary:"分子都是 1，切得越多，每一份反而越小。",duration:"约 13 分钟",accent:"#d08343",goals:["认识单位分数","用分母比较","按大小排列"],scenes:[
      {id:"carrot-halves",kind:"fraction",eyebrow:"胡萝卜切分",title:"二分之一、三分之一、五分之一",body:"同一根胡萝卜分成越多份，每一份越短。",instruction:"选择最大的一份。"},
      {id:"denominator-reverse",kind:"fraction",eyebrow:"反向规律",title:"分母越大，单位分数越小",body:"1/2 大于 1/3，1/3 大于 1/5。",instruction:"选择最小的单位分数。"},
      {id:"unit-order-down",kind:"fraction",eyebrow:"降序轨道",title:"从大到小排列",body:"单位分数比较时，分母要从小到大排列，分数才会从大到小。",instruction:"选择正确降序。"},
      {id:"unit-bars",kind:"fraction",eyebrow:"分数条验证",title:"同一整体切得更细",body:"用等长分数条观察 1/3 与 1/6 的实际大小。",instruction:"选择更大的分数。"},
      {id:"comparison-rules",kind:"fraction",eyebrow:"规则分流",title:"先看相同的是谁",body:"分母相同看分子；分子相同看分母，但大小方向相反。",instruction:"选择适合比较 1/4 和 1/7 的规则。"},
      {id:"unit-fraction-quiz",kind:"quiz",eyebrow:"终局测验",title:"单位分数导航员认证",body:"完成三道单位分数题。",questions:[
        {prompt:"1/2 和 1/5 哪个大？",options:["1/2","1/5","一样大"],answer:0,explanation:"同一整体分成 2 份，每份比分成 5 份更大。"},
        {prompt:"哪个单位分数最小？",options:["1/3","1/6","1/9"],answer:2,explanation:"分母最大的 1/9 最小。"},
        {prompt:"哪组从大到小？",options:["1/8、1/4、1/2","1/2、1/4、1/8","1/4、1/2、1/8"],answer:1,explanation:"单位分数分母越小越大。"},
      ]},
    ]
  },
  {
    id:"fraction-addition",number:"19",title:"分数加法",summary:"先让每一份一样大，再把拥有的份数合在一起。",duration:"约 17 分钟",accent:"#397fa0",goals:["同分母相加","异分母通分","处理带分数"],scenes:[
      {id:"add-like-bars",kind:"fraction-operation",eyebrow:"蛋糕合并",title:"1/5 + 2/5 = 3/5",body:"分母相同，每份大小相同，只需要把分子相加。",instruction:"选择结果。"},
      {id:"add-keep-denominator",kind:"fraction-operation",eyebrow:"规则锁定",title:"分母保持不变",body:"同分母加法合并的是份数，不会改变每份的大小。",instruction:"完成 2/7 + 3/7。"},
      {id:"add-common-denominator",kind:"fraction-operation",eyebrow:"通分桥",title:"1/4 + 1/6",body:"4 和 6 的最小公倍数是 12，把两个分数都变成十二分之几。",instruction:"选择通分后的算式。"},
      {id:"add-mixed-to-improper",kind:"fraction-operation",eyebrow:"带化假",title:"2又1/4 变成 9/4",body:"整数 2 乘分母 4，再加分子 1，得到新分子 9。",instruction:"选择正确假分数。"},
      {id:"add-four-steps",kind:"fraction-operation",eyebrow:"四步阶梯",title:"化假、通分、相加、化带",body:"复杂分数加法按固定顺序逐步完成，每一步都能检查。",instruction:"选择正确步骤顺序。"},
      {id:"fraction-addition-quiz",kind:"quiz",eyebrow:"终局测验",title:"分数加法师认证",body:"完成三道分数加法题。",questions:[
        {prompt:"1/5 + 2/5 = ?",options:["3/5","3/10","2/5"],answer:0,explanation:"分母不变，分子 1+2=3。"},
        {prompt:"1/2 + 1/4 = ?",options:["2/6","3/4","1/6"],answer:1,explanation:"1/2=2/4，所以 2/4+1/4=3/4。"},
        {prompt:"2又1/4 化成假分数是？",options:["3/4","8/4","9/4"],answer:2,explanation:"2×4+1=9。"},
      ]},
    ]
  },
  {
    id:"fraction-subtraction",number:"20",title:"分数减法",summary:"从相同大小的份中拿走一部分，再把结果化到最简。",duration:"约 17 分钟",accent:"#b95e56",goals:["同分母相减","异分母通分","约分与带分数"],scenes:[
      {id:"subtract-cookies",kind:"fraction-operation",eyebrow:"曲奇拿走",title:"3/4 - 1/4 = 2/4",body:"分母相同，直接用分子 3-1，得到 2/4。",instruction:"选择相减结果。"},
      {id:"subtract-simplify",kind:"fraction-operation",eyebrow:"约分收尾",title:"2/4 = 1/2",body:"分子分母同时除以 2，得到最简分数。",instruction:"选择 2/4 的最简形式。"},
      {id:"subtract-common-denominator",kind:"fraction-operation",eyebrow:"通分桥",title:"7/2 - 2/5",body:"2 和 5 的最小公倍数是 10，先化成 35/10 与 4/10。",instruction:"选择通分结果。"},
      {id:"subtract-mixed",kind:"fraction-operation",eyebrow:"带分数变身",title:"3又1/2 变成 7/2",body:"整数 3 乘分母 2，再加分子 1。",instruction:"选择正确假分数。"},
      {id:"subtract-four-steps",kind:"fraction-operation",eyebrow:"四步阶梯",title:"化假、通分、相减、化带",body:"分数减法与加法步骤相似，核心运算改为分子相减。",instruction:"选择正确步骤顺序。"},
      {id:"fraction-subtraction-quiz",kind:"quiz",eyebrow:"终局测验",title:"分数减法师认证",body:"完成三道分数减法题。",questions:[
        {prompt:"3/4 - 1/4 的最简结果？",options:["2/4","1/2","2/8"],answer:1,explanation:"先得 2/4，再约分为 1/2。"},
        {prompt:"3/5 - 1/5 = ?",options:["2/5","2/10","4/5"],answer:0,explanation:"分母不变，分子 3-1=2。"},
        {prompt:"1/2 - 1/4 = ?",options:["0","1/4","1/2"],answer:1,explanation:"1/2=2/4，2/4-1/4=1/4。"},
      ]},
    ]
  },
  {
    id:"fraction-multiplication",number:"21",title:"分数乘法",summary:"把一个分数再取其中一部分，用面积模型看见分子分母分别相乘。",duration:"约 17 分钟",accent:"#56876b",goals:["分数乘整数","分数乘分数","约分乘积"],scenes:[
      {id:"multiply-half-quarter",kind:"fraction-operation",eyebrow:"花圃面积",title:"四分之一的一半",body:"1/4 的 1/2 是整个花圃的 1/8。",instruction:"选择 1/4×1/2 的结果。"},
      {id:"multiply-integer",kind:"fraction-operation",eyebrow:"重复相加",title:"1/2 × 3",body:"三个 1/2 相加是 3/2，也就是 1又1/2。",instruction:"选择计算结果。"},
      {id:"multiply-numerators",kind:"fraction-operation",eyebrow:"分子通道",title:"分子乘分子",body:"2/5×2/3 的新分子是 2×2=4。",instruction:"选择新的分子。"},
      {id:"multiply-denominators",kind:"fraction-operation",eyebrow:"分母通道",title:"分母乘分母",body:"2/5×2/3 的新分母是 5×3=15。",instruction:"选择完整乘积。"},
      {id:"multiply-simplify",kind:"fraction-operation",eyebrow:"约分检查",title:"让答案保持最简",body:"分数相乘后，如果分子分母有公因数，要继续约分。",instruction:"选择 2/3×3/4 的最简结果。"},
      {id:"fraction-multiplication-quiz",kind:"quiz",eyebrow:"终局测验",title:"分数乘法师认证",body:"完成三道分数乘法题。",questions:[
        {prompt:"1/4×1/2=?",options:["1/6","1/8","2/4"],answer:1,explanation:"分子 1×1，分母 4×2，得到 1/8。"},
        {prompt:"2/5×2/3=?",options:["4/15","4/8","2/15"],answer:0,explanation:"2×2=4，5×3=15。"},
        {prompt:"2/3×3/4 的最简结果？",options:["6/12","1/2","5/7"],answer:1,explanation:"6/12 约分为 1/2。"},
      ]},
    ]
  },
  {
    id:"fraction-division",number:"22",title:"分数除法",summary:"把一份再平均分，或乘上除数的倒数，把除法变成乘法。",duration:"约 16 分钟",accent:"#7b67a1",goals:["理解等分","除数取倒数","除法转乘法"],scenes:[
      {id:"divide-quarter-three",kind:"fraction-operation",eyebrow:"西瓜等分",title:"1/4 平均分给 3 人",body:"把四分之一再分成 3 份，每人得到整体的 1/12。",instruction:"选择 1/4÷3 的结果。"},
      {id:"divide-half-two",kind:"fraction-operation",eyebrow:"分数墙",title:"1/2 ÷ 2 = 1/4",body:"一半再平均分成两份，每份是整体的四分之一。",instruction:"选择结果。"},
      {id:"division-to-multiply",kind:"fraction-operation",eyebrow:"除号变身",title:"除以 3 等于乘 1/3",body:"把除数 3 写成 3/1，再取倒数 1/3，同时把除号改为乘号。",instruction:"选择正确改写。"},
      {id:"divide-by-fraction",kind:"fraction-operation",eyebrow:"倒数钥匙",title:"2/3 ÷ 4/5",body:"保持 2/3 不变，把除数 4/5 取倒数 5/4。",instruction:"选择变换后的乘法。"},
      {id:"division-check",kind:"fraction-operation",eyebrow:"大小检查",title:"除以大于 1 的数，结果变小",body:"1/4÷3 的结果应小于 1/4，估计能帮助发现颠倒错误。",instruction:"选择合理结果。"},
      {id:"fraction-division-quiz",kind:"quiz",eyebrow:"终局测验",title:"分数除法师认证",body:"完成三道分数除法题。",questions:[
        {prompt:"1/4÷3=?",options:["1/12","3/4","3/12"],answer:0,explanation:"1/4×1/3=1/12。"},
        {prompt:"2/3÷4/5 应改写成？",options:["2/3×4/5","3/2×5/4","2/3×5/4"],answer:2,explanation:"被除数不变，除数 4/5 取倒数。"},
        {prompt:"1/2÷2=?",options:["1","1/4","2/2"],answer:1,explanation:"一半再分两份，每份是 1/4。"},
      ]},
    ]
  },
  {
    id:"decimal-rounding",number:"23",title:"小数的四舍五入",summary:"移动观察位，把小数精确到个位、十分位或百分位。",duration:"约 15 分钟",accent:"#3c8c91",goals:["确定保留位","查看下一位","写出近似小数"],scenes:[
      {id:"decimal-nearest-one",kind:"decimal",eyebrow:"数轴靠近",title:"1.3 更靠近 1",body:"精确到个位，就是寻找最近的整数。",instruction:"把 1.3 精确到个位。"},
      {id:"decimal-round-up-one",kind:"decimal",eyebrow:"另一侧",title:"1.7 更靠近 2",body:"十分位 7 大于等于 5，个位进一。",instruction:"把 1.7 精确到个位。"},
      {id:"decimal-tenths",kind:"decimal",eyebrow:"保留十分位",title:"1.15 精确到十分位",body:"观察百分位 5，十分位进一，得到 1.2。",instruction:"选择结果。"},
      {id:"decimal-hundredths",kind:"decimal",eyebrow:"保留百分位",title:"1.116 精确到百分位",body:"观察千分位 6，百分位进一，得到 1.12。",instruction:"选择结果。"},
      {id:"decimal-target-digit",kind:"decimal",eyebrow:"观察位探照灯",title:"目标位右边决定舍入",body:"要保留哪一位，就观察它右边紧挨着的一位。",instruction:"保留百分位时应该观察哪一位？"},
      {id:"decimal-rounding-quiz",kind:"quiz",eyebrow:"终局测验",title:"小数取整师认证",body:"完成三道小数舍入题。",questions:[
        {prompt:"2.36 精确到十分位？",options:["2.3","2.4","2.36"],answer:1,explanation:"百分位 6 进一，得到 2.4。"},
        {prompt:"1.114 精确到百分位？",options:["1.11","1.12","1.1"],answer:0,explanation:"千分位 4 舍去。"},
        {prompt:"5.6 精确到个位？",options:["5","6","5.6"],answer:1,explanation:"十分位 6 进一。"},
      ]},
    ]
  },
  {
    id:"decimal-addition",number:"24",title:"小数加法",summary:"把小数点对齐，从最右边相加，满十向前进一。",duration:"约 16 分钟",accent:"#c0753d",goals:["对齐小数点","十分位进位","完成小数竖式"],scenes:[
      {id:"decimal-add-money",kind:"decimal",eyebrow:"甜点结账",title:"4.5 + 7.7",body:"先估算约 12 元，再精确计算。",instruction:"选择精确总价。"},
      {id:"decimal-align-add",kind:"decimal",eyebrow:"小数点磁铁",title:"相同数位上下对齐",body:"十分位对十分位，个位对个位，小数点也上下对齐。",instruction:"选择正确竖式。"},
      {id:"decimal-tenths-carry",kind:"decimal",eyebrow:"十分位进位",title:"0.5 + 0.7 = 1.2",body:"12 个十分之一等于 1 个一和 2 个十分之一。",instruction:"选择小数部分的和。"},
      {id:"decimal-column-add",kind:"decimal",eyebrow:"竖式挑战",title:"从最右位开始相加",body:"十分位满十进一，再计算个位，最后落下小数点。",instruction:"选择 4.5+7.7 的结果。"},
      {id:"decimal-add-check",kind:"decimal",eyebrow:"金额检查",title:"结果应接近估算",body:"4.5≈5，7.7≈8，总和应接近 13，12.2 合理。",instruction:"判断哪个答案合理。"},
      {id:"decimal-addition-quiz",kind:"quiz",eyebrow:"终局测验",title:"小数加法师认证",body:"完成三道小数加法题。",questions:[
        {prompt:"4.5+7.7=?",options:["11.2","12.2","12.12"],answer:1,explanation:"十分位 5+7=12，向个位进一。"},
        {prompt:"2.35+1.4=?",options:["3.75","2.49","3.39"],answer:0,explanation:"写成 2.35+1.40=3.75。"},
        {prompt:"小数竖式最重要的对齐是？",options:["最左边","小数点","最后一位数字"],answer:1,explanation:"小数点对齐才能保证相同数位相加。"},
      ]},
    ]
  },
  {
    id:"decimal-subtraction",number:"25",title:"小数减法",summary:"小数点对齐，不够减时向前一位借一，化成十个当前单位。",duration:"约 16 分钟",accent:"#b55f59",goals:["对齐小数点","理解借位","检查差值"],scenes:[
      {id:"decimal-price-difference",kind:"decimal",eyebrow:"价格差",title:"8.2 - 4.7",body:"两个价格相差 3.5 元。",instruction:"选择差价。"},
      {id:"decimal-align-subtract",kind:"decimal",eyebrow:"小数点磁铁",title:"相同数位上下对齐",body:"先对齐小数点，再从最右边开始相减。",instruction:"选择正确竖式。"},
      {id:"decimal-borrow",kind:"decimal",eyebrow:"借一换十",title:"2 个十分之一不够减 7 个",body:"向个位借 1，换成 10 个十分之一，2 就变成 12。",instruction:"选择借位后的十分位数量。"},
      {id:"decimal-column-subtract",kind:"decimal",eyebrow:"竖式挑战",title:"12-7=5，7-4=3",body:"借位后个位从 8 变 7，得到 3.5。",instruction:"选择结果。"},
      {id:"decimal-subtract-check",kind:"decimal",eyebrow:"差值检查",title:"加回去验证",body:"3.5+4.7=8.2，所以减法结果正确。",instruction:"选择正确验算式。"},
      {id:"decimal-subtraction-quiz",kind:"quiz",eyebrow:"终局测验",title:"小数减法师认证",body:"完成三道小数减法题。",questions:[
        {prompt:"8.2-4.7=?",options:["3.5","4.5","3.15"],answer:0,explanation:"借位后 12-7=5，7-4=3。"},
        {prompt:"5.00-2.36=?",options:["2.64","3.36","2.74"],answer:0,explanation:"逐位借位计算得到 2.64。"},
        {prompt:"哪个式子能验算 8.2-4.7=3.5？",options:["8.2+4.7","3.5+4.7=8.2","8.2-3.5=3.5"],answer:1,explanation:"差加减数应等于被减数。"},
      ]},
    ]
  },
  {id:"percent-conversion",number:"26",title:"百分比的换算",summary:"把变化量与原量比较，也把百分比换成具体数量。",duration:"约 15 分钟",accent:"#4b8b70",goals:["计算变化百分比","求一个数的百分比","计算折后价格"],scenes:[
    {id:"percent-increase",kind:"ratio",eyebrow:"加量零食",title:"12 克是 60 克的百分之几？",body:"12÷60=0.2，再乘 100%，得到 20%。",instruction:"选择增加百分比。"},{id:"percent-decrease",kind:"ratio",eyebrow:"减少糖分",title:"2 克是 8 克的百分之几？",body:"2÷8=0.25，也就是减少 25%。",instruction:"选择减少百分比。"},{id:"percent-one",kind:"ratio",eyebrow:"先求百分之一",title:"250 元的 1%",body:"250÷100=2.5。",instruction:"选择 1% 对应金额。"},{id:"percent-thirty",kind:"ratio",eyebrow:"折扣换算",title:"250 元的 30%",body:"2.5×30=75。",instruction:"选择降价金额。"},{id:"percent-sale",kind:"ratio",eyebrow:"新价格",title:"原价减去折扣",body:"250-75=175。",instruction:"选择促销价。"},{id:"percent-quiz",kind:"quiz",eyebrow:"终局测验",title:"百分比换算师认证",body:"完成三题。",questions:[{prompt:"12 比原来的 60 增加百分之几？",options:["12%","20%","72%"],answer:1,explanation:"12÷60×100%=20%。"},{prompt:"200 的 15% 是？",options:["15","30","185"],answer:1,explanation:"200÷100×15=30。"},{prompt:"100 元降价 20% 后？",options:["20","80","120"],answer:1,explanation:"降价 20 元，售价 80 元。"}]},
  ]},
  {id:"ratios",number:"27",title:"比值",summary:"用 a:b 直接描述两个同类数量之间的关系，并化成最简比。",duration:"约 14 分钟",accent:"#706ba4",goals:["读写比值","理解顺序","化简比值"],scenes:[
    {id:"ratio-icecream",kind:"ratio",eyebrow:"冰淇淋口味",title:"草莓与巧克力是 3:4",body:"顺序决定比的含义。",instruction:"选择正确比值。"},{id:"ratio-symbol",kind:"ratio",eyebrow:"比号",title:"冒号连接两个数量",body:"3:4 读作三比四。",instruction:"选择比号。"},{id:"ratio-simplify",kind:"ratio",eyebrow:"配方化简",title:"40:50 化成 4:5",body:"两项同时除以 10。",instruction:"选择最简比。"},{id:"ratio-order",kind:"ratio",eyebrow:"顺序挑战",title:"长与宽不能颠倒",body:"长 40、宽 30，长宽比是 40:30。",instruction:"选择长宽比。"},{id:"ratio-painting",kind:"ratio",eyebrow:"画框比例",title:"40:30 化成 4:3",body:"同时除以最大公因数 10。",instruction:"选择最简结果。"},{id:"ratio-quiz",kind:"quiz",eyebrow:"终局测验",title:"比值调配师认证",body:"完成三题。",questions:[{prompt:"3 个红球与 4 个蓝球之比？",options:["3:4","4:3","7:4"],answer:0,explanation:"按红球在前、蓝球在后写 3:4。"},{prompt:"40:50 最简比？",options:["4:5","8:10","40:5"],answer:0,explanation:"同时除以 10。"},{prompt:"12:18 最简比？",options:["6:9","2:3","3:2"],answer:1,explanation:"同时除以 6。"}]},
  ]},
  {id:"proportions",number:"28",title:"比例",summary:"把部分放在分子、整体放在分母，用分数或百分数表达占比。",duration:"约 15 分钟",accent:"#c2773f",goals:["区分比与比例","写出部分整体","转成百分数"],scenes:[
    {id:"part-whole-cats",kind:"ratio",eyebrow:"猫舍观察",title:"4 只橘猫占 10 只猫",body:"部分与整体写成 4/10。",instruction:"选择比例。"},{id:"proportion-simplify",kind:"ratio",eyebrow:"比例化简",title:"4/10 = 2/5",body:"分子分母同时除以 2。",instruction:"选择最简分数。"},{id:"ratio-or-proportion",kind:"ratio",eyebrow:"概念分流",title:"部分比部分，还是部分占整体？",body:"黑猫与橘猫用比；橘猫占全部用比例。",instruction:"选择正确描述。"},{id:"gray-cat-percent",kind:"ratio",eyebrow:"百分数形式",title:"1/10 = 10%",body:"把分母扩成 100。",instruction:"选择百分数。"},{id:"proportion-model",kind:"ratio",eyebrow:"部分整体环",title:"阴影就是所占比例",body:"同一比例可以用分数和百分数表达。",instruction:"选择 3/5 对应百分数。"},{id:"proportion-quiz",kind:"quiz",eyebrow:"终局测验",title:"比例观察员认证",body:"完成三题。",questions:[{prompt:"4 只占 10 只的比例？",options:["4:6","4/10","10/4"],answer:1,explanation:"部分放分子，整体放分母。"},{prompt:"1/10 等于？",options:["1%","10%","100%"],answer:1,explanation:"1/10=10/100=10%。"},{prompt:"2/5 等于？",options:["20%","40%","50%"],answer:1,explanation:"2/5=0.4=40%。"}]},
  ]},
  {id:"fraction-representations",number:"29",title:"分数的不同表示",summary:"在分数、小数、百分数和比之间搭建转换桥。",duration:"约 16 分钟",accent:"#b85b63",goals:["分数化小数","小数化百分数","连接比与分数"],scenes:[
    {id:"three-fifths",kind:"ratio",eyebrow:"花束比例",title:"3/5 = 0.6 = 60%",body:"等值形式表达同一个比例。",instruction:"选择 3/5 的小数。"},{id:"fraction-decimal",kind:"ratio",eyebrow:"分数到小数",title:"分子除以分母",body:"3÷5=0.6。",instruction:"选择结果。"},{id:"decimal-percent",kind:"ratio",eyebrow:"小数到百分数",title:"0.6 × 100%",body:"得到 60%。",instruction:"选择百分数。"},{id:"ratio-fraction",kind:"ratio",eyebrow:"比到分数",title:"3:12 = 3/12 = 1/4",body:"比的前项作分子，后项作分母。",instruction:"选择最简分数。"},{id:"representation-chain",kind:"ratio",eyebrow:"转换链",title:"一种数量，多种写法",body:"1/8=0.125=12.5%。",instruction:"选择完整等值链。"},{id:"representations-quiz",kind:"quiz",eyebrow:"终局测验",title:"表示法翻译官认证",body:"完成三题。",questions:[{prompt:"3/5 的小数？",options:["0.3","0.5","0.6"],answer:2,explanation:"3÷5=0.6。"},{prompt:"0.25 等于？",options:["2.5%","25%","250%"],answer:1,explanation:"0.25×100%=25%。"},{prompt:"1/8 等于？",options:["0.125","0.18","1.25"],answer:0,explanation:"1÷8=0.125。"}]},
  ]},
  {id:"addition-basics",number:"30",title:"加法",summary:"把数量合并，从大数接着数，并发现加数交换后和不变。",duration:"约 14 分钟",accent:"#3d8192",goals:["理解合并","认识交换律","掌握接着数"],scenes:[
    {id:"add-oranges",kind:"addition",eyebrow:"橙子合并",title:"6 + 3 = 9",body:"两堆数量合起来得到更大的总数。",instruction:"选择总数。"},{id:"addition-symbol",kind:"addition",eyebrow:"加号诞生",title:"用 + 表示合并",body:"6+3=9 是简洁的数学记录。",instruction:"选择加号。"},{id:"addition-commute",kind:"addition",eyebrow:"交换位置",title:"6+3 与 3+6",body:"加数交换位置，和不变。",instruction:"选择正确说法。"},{id:"count-all",kind:"addition",eyebrow:"整体计数",title:"两堆放在一起数",body:"2 个和 5 个合并后逐个数出 7。",instruction:"选择总数。"},{id:"count-on",kind:"addition",eyebrow:"接着数",title:"从 5 开始再数 2 个",body:"从较大数开始数 6、7，更快得到答案。",instruction:"选择最后到达的数。"},{id:"addition-quiz",kind:"quiz",eyebrow:"终局测验",title:"加法启程者认证",body:"完成三题。",questions:[{prompt:"6+3=?",options:["8","9","10"],answer:1,explanation:"合并后共有 9。"},{prompt:"哪式与 2+5 相等？",options:["5+2","5-2","2×5"],answer:0,explanation:"加数交换位置，和不变。"},{prompt:"从 8 接着数 3 个，得到？",options:["9","10","11"],answer:2,explanation:"依次数 9、10、11。"}]},
  ]},
  {id:"addition-number-line",number:"31",title:"使用数轴做加法",summary:"从起点向右跳，把加数变成看得见的步数。",duration:"约 13 分钟",accent:"#4b8a72",goals:["确定起点","按加数跳格","调整刻度单位"],scenes:[
    {id:"line-four-three",kind:"addition",eyebrow:"单位跳跃",title:"从 4 向右跳 3 格",body:"依次到 5、6、7。",instruction:"选择落点。"},{id:"line-start-large",kind:"addition",eyebrow:"选好起点",title:"从较大的加数开始",body:"计算 3+8 时，从 8 开始只跳 3 格。",instruction:"选择更快起点。"},{id:"line-tens",kind:"addition",eyebrow:"十位刻度",title:"50 + 20",body:"每格代表 10，向右跳两格到 70。",instruction:"选择落点。"},{id:"line-fifteen-ten",kind:"addition",eyebrow:"练习跳跃",title:"15 + 10",body:"把一大步看作 10。",instruction:"选择结果。"},{id:"line-scale",kind:"addition",eyebrow:"刻度设计",title:"大数用大刻度",body:"根据加数选择 1、5 或 10 为单位。",instruction:"计算 40+30 选择最方便刻度。"},{id:"line-add-quiz",kind:"quiz",eyebrow:"终局测验",title:"数轴跳跃者认证",body:"完成三题。",questions:[{prompt:"4+3 的数轴落点？",options:["6","7","8"],answer:1,explanation:"从 4 右跳 3 格到 7。"},{prompt:"50+20=?",options:["52","70","700"],answer:1,explanation:"每格 10，跳两格到 70。"},{prompt:"15+10=?",options:["16","25","150"],answer:1,explanation:"向右跳一个十到 25。"}]},
  ]},
  {id:"addition-hundred-grid",number:"32",title:"使用数字网格做加法",summary:"在百数表上，加十向下、加一向右，像跳棋一样计算。",duration:"约 14 分钟",accent:"#7468a5",goals:["认识百数表","分拆十和一","跨行移动"],scenes:[
    {id:"grid-moves",kind:"addition",eyebrow:"移动规则",title:"加 10 向下，加 1 向右",body:"百数表每行有十个数。",instruction:"选择加 10 的移动。"},{id:"grid-start-56",kind:"addition",eyebrow:"标记起点",title:"找到 56",body:"先定位第一个加数。",instruction:"选择起点。"},{id:"grid-add-twenty",kind:"addition",eyebrow:"向下两行",title:"56 + 20 = 76",body:"两个十对应向下两行。",instruction:"选择中间落点。"},{id:"grid-add-six",kind:"addition",eyebrow:"向右六格",title:"76 + 6 = 82",body:"跨过行末继续到下一行。",instruction:"选择最终答案。"},{id:"grid-thirty-four",kind:"addition",eyebrow:"综合跳棋",title:"34 + 18",body:"先加 10，再加 8。",instruction:"选择结果。"},{id:"grid-add-quiz",kind:"quiz",eyebrow:"终局测验",title:"百数表棋手认证",body:"完成三题。",questions:[{prompt:"56+26=?",options:["72","82","92"],answer:1,explanation:"56+20=76，再加 6 得 82。"},{prompt:"百数表向下一行表示？",options:["+1","+10","−10"],answer:1,explanation:"每行相差 10。"},{prompt:"34+18=?",options:["42","52","62"],answer:1,explanation:"34+10+8=52。"}]},
  ]},
  {id:"addition-facts",number:"33",title:"加法口诀",summary:"记住凑十伙伴和双倍事实，让心算像反射一样快。",duration:"约 14 分钟",accent:"#c1783e",goals:["掌握凑十对","熟悉双倍","利用交换律"],scenes:[
    {id:"facts-make-ten",kind:"addition",eyebrow:"凑十伙伴",title:"1和9、2和8、3和7",body:"这些数对的和都是 10。",instruction:"选择 6 的凑十伙伴。"},{id:"facts-five-five",kind:"addition",eyebrow:"中间伙伴",title:"5 + 5 = 10",body:"两个相同的数也能凑十。",instruction:"选择结果。"},{id:"facts-doubles",kind:"addition",eyebrow:"双倍口诀",title:"6 + 6 = 12",body:"相同数相加形成双倍事实。",instruction:"选择 8+8。"},{id:"facts-commute",kind:"addition",eyebrow:"少记一半",title:"3+7 与 7+3",body:"交换加数，和不变。",instruction:"判断两个算式。"},{id:"facts-near-double",kind:"addition",eyebrow:"邻近双倍",title:"6 + 7",body:"从 6+6=12 再加 1 得 13。",instruction:"选择结果。"},{id:"facts-quiz",kind:"quiz",eyebrow:"终局测验",title:"加法口诀达人认证",body:"完成三题。",questions:[{prompt:"4 的凑十伙伴？",options:["5","6","7"],answer:1,explanation:"4+6=10。"},{prompt:"8+8=?",options:["14","16","18"],answer:1,explanation:"8 的双倍是 16。"},{prompt:"6+7=?",options:["12","13","14"],answer:1,explanation:"6+6+1=13。"}]},
  ]},
  {id:"addition-partitioning",number:"34",title:"分块加法",summary:"把数拆成整十和个位，分别相加后再合并。",duration:"约 15 分钟",accent:"#b65b61",goals:["按位拆分","计算部分和","灵活只拆一个数"],scenes:[
    {id:"partition-forty-seven",kind:"addition",eyebrow:"拆开 47",title:"47 = 40 + 7",body:"十位与个位分开。",instruction:"选择正确拆分。"},{id:"partition-thirty-five",kind:"addition",eyebrow:"拆开 35",title:"35 = 30 + 5",body:"为部分和做准备。",instruction:"选择正确拆分。"},{id:"partition-parts",kind:"addition",eyebrow:"部分相加",title:"40+30=70，7+5=12",body:"同类数位分别合并。",instruction:"选择两个部分和。"},{id:"partition-combine",kind:"addition",eyebrow:"合并答案",title:"70 + 12 = 82",body:"部分和再次相加。",instruction:"选择 47+35 的结果。"},{id:"partition-one-number",kind:"addition",eyebrow:"只拆一个",title:"80 + 54",body:"把 54 拆成 50+4，得到 130+4=134。",instruction:"选择结果。"},{id:"partition-quiz",kind:"quiz",eyebrow:"终局测验",title:"分块心算师认证",body:"完成三题。",questions:[{prompt:"47+35=?",options:["72","82","92"],answer:1,explanation:"70+12=82。"},{prompt:"54 应拆成？",options:["5+4","50+4","40+14"],answer:1,explanation:"按十位个位拆为 50+4。"},{prompt:"80+54=?",options:["124","134","144"],answer:1,explanation:"80+50+4=134。"}]},
  ]},
  {id:"addition-expanded-column",number:"35",title:"扩展竖式加法",summary:"把相同数位对齐，写出每一列的部分和，再合并成总和。",duration:"约 16 分钟",accent:"#3c8491",goals:["按数位对齐","写出部分和","合并多位数"],scenes:[
    {id:"column-align",kind:"addition",eyebrow:"数位对齐",title:"385 与 157 对齐",body:"个位、十位、百位分别在同一列。",instruction:"选择正确排列。"},{id:"column-ones",kind:"addition",eyebrow:"个位部分和",title:"5 + 7 = 12",body:"写出完整部分和 12。",instruction:"选择个位部分和。"},{id:"column-tens",kind:"addition",eyebrow:"十位部分和",title:"80 + 50 = 130",body:"十位数字代表几十。",instruction:"选择十位部分和。"},{id:"column-hundreds",kind:"addition",eyebrow:"百位部分和",title:"300 + 100 = 400",body:"百位分别相加。",instruction:"选择百位部分和。"},{id:"column-total",kind:"addition",eyebrow:"合并部分和",title:"12 + 130 + 400",body:"最终得到 542。",instruction:"选择 385+157。"},{id:"column-add-quiz",kind:"quiz",eyebrow:"终局测验",title:"扩展竖式师认证",body:"完成三题。",questions:[{prompt:"385+157=?",options:["432","542","552"],answer:1,explanation:"12+130+400=542。"},{prompt:"80+50 的部分和？",options:["13","130","800"],answer:1,explanation:"8 个十加 5 个十是 13 个十。"},{prompt:"竖式首先要保证？",options:["数字一样高","相同数位对齐","从百位开始"],answer:1,explanation:"数位对齐才能正确逐列相加。"}]},
  ]},
];
