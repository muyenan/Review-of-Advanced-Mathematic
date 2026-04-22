const formula = (label, body) => ({ label, body });

const section = (code, titleEn, titleCn, focus, mustKnow, formulas, workflow, pitfalls, tags = []) => ({
  code,
  titleEn,
  titleCn,
  focus,
  mustKnow,
  formulas,
  workflow,
  pitfalls,
  tags,
});

const svgCard = (title, subtitle, svg) => ({
  title,
  subtitle,
  svg,
});

const chapter = ({
  id,
  shortLabel,
  chapterNumber,
  titleCn,
  titleEn,
  accent,
  goals,
  studyPath,
  formulaWall,
  diagram,
  sections,
  examChecklist,
  demos,
}) => ({
  id,
  shortLabel,
  chapterNumber,
  titleCn,
  titleEn,
  accent,
  goals,
  studyPath,
  formulaWall,
  diagram,
  sections,
  examChecklist,
  demos,
});

const chapter10Diagram = svgCard(
  "级数判别法路线图",
  "先看项，再分类型，再给出误差估计。",
  `
  <svg viewBox="0 0 760 290" role="img" aria-label="Chapter 10 series test roadmap">
    <defs>
      <linearGradient id="seriesCard" x1="0%" x2="100%">
        <stop offset="0%" stop-color="#123c43" />
        <stop offset="100%" stop-color="#1f5f63" />
      </linearGradient>
      <marker id="seriesArrow" markerWidth="12" markerHeight="12" refX="9" refY="6" orient="auto">
        <path d="M0,0 L12,6 L0,12 z" fill="#245b53" />
      </marker>
    </defs>
    <rect x="20" y="16" width="720" height="258" rx="28" fill="#f5efe4" />
    <rect x="40" y="34" width="166" height="58" rx="18" fill="url(#seriesCard)" />
    <text x="123" y="58" text-anchor="middle" fill="#f8f3ea" font-size="22" font-family="Baskerville, serif">Σaₙ 收敛？</text>
    <text x="123" y="78" text-anchor="middle" fill="#c9e8df" font-size="13" font-family="Menlo, monospace">第一步先查 aₙ → 0</text>
    <rect x="296" y="32" width="176" height="62" rx="18" fill="#d9f0e4" stroke="#245b53" stroke-width="2" />
    <text x="384" y="57" text-anchor="middle" fill="#13353a" font-size="20" font-family="Baskerville, serif">正项级数？</text>
    <text x="384" y="77" text-anchor="middle" fill="#245b53" font-size="13" font-family="Menlo, monospace">比较 / 积分 / 比值 / 根值</text>
    <rect x="540" y="32" width="176" height="62" rx="18" fill="#fde3c5" stroke="#af6c25" stroke-width="2" />
    <text x="628" y="57" text-anchor="middle" fill="#59300d" font-size="20" font-family="Baskerville, serif">交错或带符号？</text>
    <text x="628" y="77" text-anchor="middle" fill="#7d4814" font-size="13" font-family="Menlo, monospace">Leibniz / 绝对收敛 / 条件收敛</text>
    <rect x="70" y="154" width="160" height="84" rx="20" fill="#dcebf4" stroke="#3f6f88" stroke-width="2" />
    <text x="150" y="182" text-anchor="middle" fill="#1a4254" font-size="20" font-family="Baskerville, serif">特殊模板</text>
    <text x="150" y="204" text-anchor="middle" fill="#2f5f75" font-size="13" font-family="Menlo, monospace">几何级数</text>
    <text x="150" y="222" text-anchor="middle" fill="#2f5f75" font-size="13" font-family="Menlo, monospace">p-级数</text>
    <rect x="300" y="154" width="160" height="84" rx="20" fill="#eef2d6" stroke="#7f8a3d" stroke-width="2" />
    <text x="380" y="182" text-anchor="middle" fill="#4d551f" font-size="20" font-family="Baskerville, serif">幂级数</text>
    <text x="380" y="204" text-anchor="middle" fill="#67732f" font-size="13" font-family="Menlo, monospace">先找收敛半径 R</text>
    <text x="380" y="222" text-anchor="middle" fill="#67732f" font-size="13" font-family="Menlo, monospace">再逐端点检查</text>
    <rect x="530" y="154" width="160" height="84" rx="20" fill="#f7ddd7" stroke="#8f5044" stroke-width="2" />
    <text x="610" y="182" text-anchor="middle" fill="#5d2d22" font-size="20" font-family="Baskerville, serif">Taylor 近似</text>
    <text x="610" y="204" text-anchor="middle" fill="#8a4b3e" font-size="13" font-family="Menlo, monospace">多项式逼近</text>
    <text x="610" y="222" text-anchor="middle" fill="#8a4b3e" font-size="13" font-family="Menlo, monospace">余项控制误差</text>
    <path d="M206 62 H286" stroke="#245b53" stroke-width="3" marker-end="url(#seriesArrow)" fill="none" />
    <path d="M472 62 H530" stroke="#af6c25" stroke-width="3" marker-end="url(#seriesArrow)" fill="none" />
    <path d="M123 92 V140" stroke="#3f6f88" stroke-width="3" marker-end="url(#seriesArrow)" fill="none" />
    <path d="M384 94 V140" stroke="#7f8a3d" stroke-width="3" marker-end="url(#seriesArrow)" fill="none" />
    <path d="M628 94 V140" stroke="#8f5044" stroke-width="3" marker-end="url(#seriesArrow)" fill="none" />
  </svg>
  `
);

const chapter11Diagram = svgCard(
  "参数方程与极坐标的互通",
  "同一条曲线，可以从轨迹、速度方向和极角变化三个角度观察。",
  `
  <svg viewBox="0 0 760 290" role="img" aria-label="Chapter 11 coordinate systems relationship">
    <defs>
      <marker id="coordArrow" markerWidth="12" markerHeight="12" refX="9" refY="6" orient="auto">
        <path d="M0,0 L12,6 L0,12 z" fill="#34637a" />
      </marker>
    </defs>
    <rect x="22" y="18" width="716" height="254" rx="28" fill="#f6f1e9" />
    <rect x="40" y="44" width="190" height="170" rx="22" fill="#dbeaf2" stroke="#34637a" stroke-width="2" />
    <text x="135" y="78" text-anchor="middle" fill="#24495a" font-size="24" font-family="Baskerville, serif">直角坐标</text>
    <text x="135" y="106" text-anchor="middle" fill="#34637a" font-size="14" font-family="Menlo, monospace">x = r cos θ</text>
    <text x="135" y="126" text-anchor="middle" fill="#34637a" font-size="14" font-family="Menlo, monospace">y = r sin θ</text>
    <path d="M88 170 C120 132, 166 134, 188 172" fill="none" stroke="#24495a" stroke-width="3" />
    <circle cx="108" cy="152" r="5" fill="#24495a" />
    <circle cx="160" cy="149" r="5" fill="#24495a" />
    <text x="135" y="196" text-anchor="middle" fill="#24495a" font-size="13" font-family="Menlo, monospace">可消去参数，得到轨迹方程</text>
    <rect x="286" y="44" width="190" height="170" rx="22" fill="#e5f2d7" stroke="#6a8b38" stroke-width="2" />
    <text x="381" y="78" text-anchor="middle" fill="#43591a" font-size="24" font-family="Baskerville, serif">参数方程</text>
    <text x="381" y="106" text-anchor="middle" fill="#5e7b31" font-size="14" font-family="Menlo, monospace">x = f(t), y = g(t)</text>
    <text x="381" y="126" text-anchor="middle" fill="#5e7b31" font-size="14" font-family="Menlo, monospace">t 控制方向与速度</text>
    <path d="M326 174 C352 114, 414 114, 438 174" fill="none" stroke="#43591a" stroke-width="3" />
    <path d="M382 136 L398 142 L390 158" fill="none" stroke="#43591a" stroke-width="3" />
    <text x="381" y="196" text-anchor="middle" fill="#43591a" font-size="13" font-family="Menlo, monospace">用滑块观察点如何移动</text>
    <rect x="532" y="44" width="190" height="170" rx="22" fill="#fde8d6" stroke="#b06c2a" stroke-width="2" />
    <text x="627" y="78" text-anchor="middle" fill="#6f3f10" font-size="24" font-family="Baskerville, serif">极坐标</text>
    <text x="627" y="106" text-anchor="middle" fill="#915623" font-size="14" font-family="Menlo, monospace">r = f(θ)</text>
    <text x="627" y="126" text-anchor="middle" fill="#915623" font-size="14" font-family="Menlo, monospace">看半径随角度变化</text>
    <circle cx="607" cy="166" r="44" fill="none" stroke="#915623" stroke-width="2" stroke-dasharray="6 6" />
    <line x1="607" y1="166" x2="650" y2="144" stroke="#6f3f10" stroke-width="3" />
    <circle cx="650" cy="144" r="5" fill="#6f3f10" />
    <text x="627" y="196" text-anchor="middle" fill="#6f3f10" font-size="13" font-family="Menlo, monospace">对称性先判 θ 替换</text>
    <path d="M230 128 H274" stroke="#34637a" stroke-width="3" fill="none" marker-end="url(#coordArrow)" />
    <path d="M476 128 H520" stroke="#6a8b38" stroke-width="3" fill="none" marker-end="url(#coordArrow)" />
  </svg>
  `
);

const chapter12Diagram = svgCard(
  "点积、叉积与空间几何",
  "一个看投影，一个看面积和法向量，再配上线面方程。",
  `
  <svg viewBox="0 0 760 290" role="img" aria-label="Chapter 12 vector geometry map">
    <rect x="24" y="18" width="712" height="254" rx="28" fill="#f5efe5" />
    <line x1="110" y1="220" x2="110" y2="62" stroke="#355164" stroke-width="3" />
    <line x1="110" y1="220" x2="220" y2="220" stroke="#355164" stroke-width="3" />
    <line x1="110" y1="220" x2="72" y2="140" stroke="#355164" stroke-width="3" />
    <path d="M110 220 L184 110" stroke="#1b6a74" stroke-width="4" fill="none" />
    <path d="M110 220 L198 188" stroke="#ab5b36" stroke-width="4" fill="none" />
    <text x="188" y="102" fill="#1b6a74" font-size="16" font-family="Menlo, monospace">a</text>
    <text x="204" y="183" fill="#ab5b36" font-size="16" font-family="Menlo, monospace">b</text>
    <path d="M110 220 L205 143" stroke="#77939f" stroke-width="3" stroke-dasharray="8 6" fill="none" />
    <text x="104" y="46" fill="#355164" font-size="22" font-family="Baskerville, serif">向量坐标</text>
    <text x="104" y="266" fill="#355164" font-size="13" font-family="Menlo, monospace">长度、方向、分量</text>
    <rect x="280" y="48" width="188" height="78" rx="18" fill="#dcebf4" stroke="#355164" stroke-width="2" />
    <text x="374" y="78" text-anchor="middle" fill="#294558" font-size="24" font-family="Baskerville, serif">点积 a·b</text>
    <text x="374" y="100" text-anchor="middle" fill="#355164" font-size="13" font-family="Menlo, monospace">= |a||b| cos θ</text>
    <text x="374" y="118" text-anchor="middle" fill="#355164" font-size="13" font-family="Menlo, monospace">判夹角、投影、正交</text>
    <rect x="280" y="154" width="188" height="78" rx="18" fill="#f7ddd7" stroke="#92513f" stroke-width="2" />
    <text x="374" y="184" text-anchor="middle" fill="#613022" font-size="24" font-family="Baskerville, serif">叉积 a×b</text>
    <text x="374" y="206" text-anchor="middle" fill="#92513f" font-size="13" font-family="Menlo, monospace">|a×b| = 平行四边形面积</text>
    <text x="374" y="224" text-anchor="middle" fill="#92513f" font-size="13" font-family="Menlo, monospace">方向由右手法则确定</text>
    <polygon points="566,96 664,64 700,140 602,172" fill="#e6efd8" stroke="#6c863e" stroke-width="2" />
    <line x1="620" y1="120" x2="620" y2="56" stroke="#6c863e" stroke-width="4" />
    <circle cx="620" cy="56" r="6" fill="#4f6724" />
    <text x="620" y="220" text-anchor="middle" fill="#4f6724" font-size="24" font-family="Baskerville, serif">平面与法向量</text>
    <text x="620" y="240" text-anchor="middle" fill="#6c863e" font-size="13" font-family="Menlo, monospace">n·(r-r₀)=0</text>
  </svg>
  `
);

const chapter13Diagram = svgCard(
  "空间运动中的 Frenet 视角",
  "位置、速度、加速度沿着轨迹展开，重点分清切向和法向。",
  `
  <svg viewBox="0 0 760 290" role="img" aria-label="Chapter 13 Frenet frame">
    <rect x="24" y="18" width="712" height="254" rx="28" fill="#f4efe7" />
    <path d="M82 206 C146 88, 248 86, 302 176 S442 264, 542 156 S642 72, 696 120" fill="none" stroke="#1f5b63" stroke-width="4" />
    <circle cx="404" cy="222" r="6" fill="#1f5b63" />
    <line x1="404" y1="222" x2="470" y2="194" stroke="#bf6f1f" stroke-width="4" />
    <line x1="404" y1="222" x2="378" y2="152" stroke="#4e7f2b" stroke-width="4" />
    <line x1="404" y1="222" x2="452" y2="128" stroke="#8c4f7f" stroke-width="4" stroke-dasharray="8 7" />
    <text x="482" y="190" fill="#bf6f1f" font-size="16" font-family="Menlo, monospace">T</text>
    <text x="360" y="150" fill="#4e7f2b" font-size="16" font-family="Menlo, monospace">N</text>
    <text x="456" y="122" fill="#8c4f7f" font-size="16" font-family="Menlo, monospace">B</text>
    <rect x="68" y="38" width="178" height="74" rx="18" fill="#dbe8f1" stroke="#355c70" stroke-width="2" />
    <text x="157" y="67" text-anchor="middle" fill="#274557" font-size="24" font-family="Baskerville, serif">r(t)</text>
    <text x="157" y="90" text-anchor="middle" fill="#355c70" font-size="13" font-family="Menlo, monospace">位置向量定义轨迹</text>
    <rect x="290" y="38" width="178" height="74" rx="18" fill="#fbe4d0" stroke="#b56a26" stroke-width="2" />
    <text x="379" y="67" text-anchor="middle" fill="#6d3d0d" font-size="24" font-family="Baskerville, serif">v(t), a(t)</text>
    <text x="379" y="90" text-anchor="middle" fill="#b56a26" font-size="13" font-family="Menlo, monospace">速度沿切线，加速度可拆成两部分</text>
    <rect x="514" y="38" width="178" height="74" rx="18" fill="#e7efd8" stroke="#6c8538" stroke-width="2" />
    <text x="603" y="67" text-anchor="middle" fill="#44571b" font-size="24" font-family="Baskerville, serif">κ 与半径</text>
    <text x="603" y="90" text-anchor="middle" fill="#6c8538" font-size="13" font-family="Menlo, monospace">κ = |dT/ds|, ρ = 1/κ</text>
  </svg>
  `
);

const chapter14Diagram = svgCard(
  "多元函数分析主线",
  "从曲面和等高线出发，经过偏导、梯度，再到极值与约束极值。",
  `
  <svg viewBox="0 0 760 290" role="img" aria-label="Chapter 14 multivariable roadmap">
    <defs>
      <marker id="multiArrow" markerWidth="12" markerHeight="12" refX="9" refY="6" orient="auto">
        <path d="M0,0 L12,6 L0,12 z" fill="#295a67" />
      </marker>
    </defs>
    <rect x="20" y="18" width="720" height="254" rx="28" fill="#f5efe4" />
    <ellipse cx="116" cy="154" rx="74" ry="42" fill="none" stroke="#976246" stroke-width="3" />
    <ellipse cx="116" cy="154" rx="48" ry="24" fill="none" stroke="#c8936c" stroke-width="2" />
    <circle cx="116" cy="154" r="4" fill="#976246" />
    <text x="116" y="66" text-anchor="middle" fill="#6a3d22" font-size="24" font-family="Baskerville, serif">曲面 / 等高线</text>
    <text x="116" y="226" text-anchor="middle" fill="#976246" font-size="13" font-family="Menlo, monospace">先建立几何直觉</text>
    <rect x="246" y="86" width="158" height="136" rx="24" fill="#dbe8f1" stroke="#295a67" stroke-width="2" />
    <text x="325" y="126" text-anchor="middle" fill="#214651" font-size="22" font-family="Baskerville, serif">偏导 / 链式法则</text>
    <text x="325" y="154" text-anchor="middle" fill="#295a67" font-size="13" font-family="Menlo, monospace">固定其余变量</text>
    <text x="325" y="174" text-anchor="middle" fill="#295a67" font-size="13" font-family="Menlo, monospace">沿路径传播变化率</text>
    <text x="325" y="194" text-anchor="middle" fill="#295a67" font-size="13" font-family="Menlo, monospace">写 total derivative</text>
    <rect x="454" y="86" width="158" height="136" rx="24" fill="#e6efd8" stroke="#6d883e" stroke-width="2" />
    <text x="533" y="126" text-anchor="middle" fill="#475b1d" font-size="22" font-family="Baskerville, serif">梯度 / 切平面</text>
    <text x="533" y="154" text-anchor="middle" fill="#6d883e" font-size="13" font-family="Menlo, monospace">∇f 指向最快上升</text>
    <text x="533" y="174" text-anchor="middle" fill="#6d883e" font-size="13" font-family="Menlo, monospace">线性化近似局部图形</text>
    <text x="533" y="194" text-anchor="middle" fill="#6d883e" font-size="13" font-family="Menlo, monospace">df 是最佳线性主部</text>
    <rect x="620" y="110" width="92" height="88" rx="20" fill="#f7ddd7" stroke="#92503f" stroke-width="2" />
    <text x="666" y="145" text-anchor="middle" fill="#613022" font-size="22" font-family="Baskerville, serif">极值</text>
    <text x="666" y="166" text-anchor="middle" fill="#92503f" font-size="13" font-family="Menlo, monospace">Hessian</text>
    <text x="666" y="184" text-anchor="middle" fill="#92503f" font-size="13" font-family="Menlo, monospace">Lagrange</text>
    <path d="M188 154 H236" stroke="#295a67" stroke-width="3" fill="none" marker-end="url(#multiArrow)" />
    <path d="M404 154 H444" stroke="#6d883e" stroke-width="3" fill="none" marker-end="url(#multiArrow)" />
    <path d="M612 154 H620" stroke="#92503f" stroke-width="3" fill="none" marker-end="url(#multiArrow)" />
  </svg>
  `
);

const reviewSiteData = [
  chapter({
    id: "chapter-10",
    shortLabel: "Ch.10",
    chapterNumber: "10",
    titleCn: "无穷数列与级数",
    titleEn: "Infinite Sequences and Series",
    accent: "#1f5f63",
    goals: [
      "先分清“数列极限”和“级数收敛”是两个对象：一个看 aₙ，一个看部分和 Sₙ。",
      "掌握正项级数、交错级数、幂级数三条主线，各自对应不同判别法。",
      "会把收敛性判断落成流程：第 n 项判别法 → 类型识别 → 选判别法 → 给结论与理由。",
    ],
    studyPath: [
      "10.1-10.2：建立数列极限与部分和思想，知道“看图像/看表格/看递推”的基本入口。",
      "10.3-10.6：针对一般级数选判别法，尤其注意适用条件和比较对象。",
      "10.7-10.10：进入幂级数与 Taylor 展开，重点转为“收敛半径 + 逼近误差”。",
    ],
    formulaWall: [
      formula("几何级数", "<span class=\"math\">Σ ar<sup>n</sup></span> 在 <span class=\"math\">|r| &lt; 1</span> 时收敛，和为 <span class=\"math\">a / (1-r)</span>。"),
      formula("p-级数", "<span class=\"math\">Σ 1/n<sup>p</sup></span> 当且仅当 <span class=\"math\">p &gt; 1</span> 收敛。"),
      formula("积分判别法余项", "<span class=\"math\">∫<sub>N+1</sub><sup>∞</sup> f(x) dx ≤ R<sub>N</sub> ≤ ∫<sub>N</sub><sup>∞</sup> f(x) dx</span>。"),
      formula("比值/根值判别", "<span class=\"math\">L = lim |a<sub>n+1</sub>/a<sub>n</sub>|</span> 或 <span class=\"math\">L = limsup |a<sub>n</sub>|<sup>1/n</sup></span>，<span class=\"math\">L &lt; 1</span> 绝对收敛。"),
      formula("Taylor 余项", "<span class=\"math\">R<sub>n</sub>(x) = f<sup>(n+1)</sup>(ξ)(x-a)<sup>n+1</sup> / (n+1)!</span>，用来控制逼近误差。"),
    ],
    diagram: chapter10Diagram,
    sections: [
      section(
        "10.1",
        "Sequences",
        "数列",
        "把数列看作定义在正整数上的函数，核心是极限、单调性和有界性。",
        [
          "数列极限的本质是：当 n 很大时，aₙ 是否稳定靠近某个数 L。",
          "若极限存在且有限，则数列必有界；反过来仅有界不保证收敛。",
          "单调有界定理是处理递推数列的重要工具：先证单调，再证有界。",
        ],
        [
          formula("数列极限记号", "<span class=\"math\">lim<sub>n→∞</sub> a<sub>n</sub> = L</span>。"),
          formula("夹逼思想", "若 <span class=\"math\">a<sub>n</sub> ≤ b<sub>n</sub> ≤ c<sub>n</sub></span> 且两端同趋于 L，则中间也趋于 L。"),
        ],
        [
          "显式数列先尝试当作连续函数在大 x 处的行为来判断。",
          "递推数列常用“假设极限存在并代入递推式”，但前提是先补足收敛性依据。",
        ],
        [
          "把“项越来越小”误判成“数列收敛到 0”；例如 (-1)ⁿ 并不收敛。",
          "只会代入极限方程，却忘记证明单调或有界。",
        ],
        ["极限", "递推数列", "单调有界", "夹逼"]
      ),
      section(
        "10.2",
        "Infinite Series",
        "无穷级数",
        "级数研究的是部分和序列 Sₙ，而不是单个项 aₙ 本身。",
        [
          "定义部分和 <span class=\"math\">Sₙ = a₁ + ··· + aₙ</span>，级数是否收敛取决于 <span class=\"math\">Sₙ</span> 是否有极限。",
          "第 n 项判别法只能判发散：若 <span class=\"math\">aₙ</span> 不趋于 0，则级数一定发散。",
          "几何级数是最重要的基准模板，很多题都要化成它来比较。",
        ],
        [
          formula("级数收敛定义", "<span class=\"math\">Σ aₙ</span> 收敛 ⇔ <span class=\"math\">lim Sₙ = S</span>。"),
          formula("第 n 项判别法", "若 <span class=\"math\">lim aₙ ≠ 0</span> 或不存在，则 <span class=\"math\">Σ aₙ</span> 发散。"),
        ],
        [
          "先写出部分和，再判断其极限，尤其对望远镜级数要积极拆项。",
          "遇到形如 <span class=\"math\">arⁿ</span>、<span class=\"math\">ar<sup>n-1</sup></span> 的项，先考虑几何级数。",
        ],
        [
          "看到 <span class=\"math\">aₙ → 0</span> 就直接说级数收敛，这是最常见错误；调和级数反例必须牢记。",
          "望远镜级数若拆分错误，会把未消掉的尾项漏掉。",
        ],
        ["部分和", "几何级数", "望远镜级数"]
      ),
      section(
        "10.3",
        "The Integral Test",
        "积分判别法",
        "正项、连续、单调递减是积分判别法的三大门槛。",
        [
          "把级数 <span class=\"math\">Σ aₙ</span> 与曲线下面积 <span class=\"math\">∫ f(x) dx</span> 对比。",
          "积分判别法除了给收敛性，还能给余项 Rₙ 的估计。",
          "典型应用：<span class=\"math\">Σ 1/(n (ln n)^p)</span> 这类难以直接比较的正项级数。",
        ],
        [
          formula("适用条件", "令 <span class=\"math\">aₙ = f(n)</span>，要求 <span class=\"math\">f</span> 在大区间上正、连续、递减。"),
          formula("余项估计", "<span class=\"math\">∫<sub>N+1</sub><sup>∞</sup> f ≤ Rₙ ≤ ∫<sub>N</sub><sup>∞</sup> f</span>。"),
        ],
        [
          "先检查函数是否最终递减；必要时可说明“从某个 N 起递减即可”。",
          "若题目要求和的精度，用余项积分上界控制误差，不必硬求精确和。",
        ],
        [
          "把积分判别法用于带符号级数或不单调函数。",
          "忘记说明正项与递减条件，只写一个积分值就下结论。",
        ],
        ["正项级数", "积分判别", "余项估计"]
      ),
      section(
        "10.4",
        "Comparison Tests",
        "比较判别法",
        "比较对象要抓主导阶，越接近原式越容易写出严格结论。",
        [
          "直接比较适合大小关系明显的题；极限比较适合“长得像”的题。",
          "比较对象通常选几何级数、p-级数或它们的变形。",
          "对分式型项，主导阶来自最高次或增长最快的因子。",
        ],
        [
          formula("直接比较", "若 <span class=\"math\">0 ≤ aₙ ≤ bₙ</span> 且 <span class=\"math\">Σ bₙ</span> 收敛，则 <span class=\"math\">Σ aₙ</span> 收敛。"),
          formula("极限比较", "若 <span class=\"math\">lim aₙ/bₙ = c</span>，其中 <span class=\"math\">0 &lt; c &lt; ∞</span>，则两级数同敛散。"),
        ],
        [
          "先做大 n 主导项分析，把原式约化成最熟悉的模板。",
          "不容易写出恒成立不等式时，优先换极限比较。",
        ],
        [
          "比较对象选错量级，比如把 <span class=\"math\">ln n / n</span> 和 <span class=\"math\">1/n²</span> 比，结论会失真。",
          "极限比较的常数若为 0 或 ∞，不能直接说同敛散，还需改换对象或回到直接比较。",
        ],
        ["比较判别", "极限比较", "主导阶"]
      ),
      section(
        "10.5",
        "Absolute Convergence; The Ratio and Root Tests",
        "绝对收敛、比值判别与根值判别",
        "遇到阶乘、指数、n 次幂时，优先想到比值或根值判别。",
        [
          "绝对收敛比普通收敛更强：若 <span class=\"math\">Σ |aₙ|</span> 收敛，则 <span class=\"math\">Σ aₙ</span> 必收敛。",
          "比值判别对含阶乘、乘积、指数特别高效；根值判别对 <span class=\"math\">(·)^n</span> 结构最自然。",
          "判别结果 <span class=\"math\">L = 1</span> 时无结论，必须换方法。",
        ],
        [
          formula("绝对收敛", "<span class=\"math\">Σ |aₙ|</span> 收敛 ⇒ <span class=\"math\">Σ aₙ</span> 收敛。"),
          formula("根值判别", "<span class=\"math\">L = limsup |aₙ|^{1/n}</span>；<span class=\"math\">L &lt; 1</span> 收敛，<span class=\"math\">L &gt; 1</span> 发散。"),
        ],
        [
          "先简化 <span class=\"math\">|aₙ|</span>，再做比值或开 n 次根，避免带符号干扰。",
          "对含参数的题，L 往往变成参数条件，最后要写成参数范围。",
        ],
        [
          "把“条件收敛”和“绝对收敛”混为一谈。",
          "遇到 L = 1 还硬判，这是判别法失效的典型信号。",
        ],
        ["绝对收敛", "比值判别", "根值判别"]
      ),
      section(
        "10.6",
        "Alternating Series and Conditional Convergence",
        "交错级数与条件收敛",
        "交错级数先看符号是否真正交替，再看绝对值是否单调递减到 0。",
        [
          "Leibniz 判别法要求 <span class=\"math\">bₙ ≥ 0</span>、<span class=\"math\">bₙ ↓</span>、<span class=\"math\">bₙ → 0</span>。",
          "条件收敛意味着原级数收敛但绝对值级数发散，交错调和级数是典型样本。",
          "交错级数余项估计：截断误差的绝对值不超过下一项的绝对值。",
        ],
        [
          formula("Leibniz 判别", "<span class=\"math\">Σ (-1)^{n-1} bₙ</span> 若满足 <span class=\"math\">bₙ ↓ 0</span>，则收敛。"),
          formula("误差估计", "<span class=\"math\">|S - Sₙ| ≤ b_{n+1}</span>。"),
        ],
        [
          "先判断 <span class=\"math\">Σ |aₙ|</span> 是否收敛，再区分绝对收敛或条件收敛。",
          "做误差题时直接用下一项上界，不必重新估整条余项。",
        ],
        [
          "把“项符号有时变”误认为交错级数；Leibniz 要求有规律的交替。",
          "绝对值项不单调时，不能直接套 Leibniz。",
        ],
        ["交错级数", "条件收敛", "误差估计"]
      ),
      section(
        "10.7",
        "Power Series",
        "幂级数",
        "幂级数最重要的对象不是某一个 x，而是收敛半径 R 与收敛区间。",
        [
          "幂级数在中心点附近像一个“可无限微分的函数模板”。",
          "先用比值或根值判别找收敛半径 R，再单独检查端点。",
          "在收敛区间内部可以逐项求导、逐项积分，且收敛半径不变。",
        ],
        [
          formula("一般形式", "<span class=\"math\">Σ cₙ (x-a)^n</span>。"),
          formula("半径公式", "常用 <span class=\"math\">R = 1 / limsup |cₙ|^{1/n}</span>；端点必须单独代回原级数。"),
        ],
        [
          "比值判别时把所有与 x 有关的部分集中到 <span class=\"math\">|x-a|</span> 上。",
          "求出 R 后，一定写成“开放区间 + 两个端点分别检查”的完整答案。",
        ],
        [
          "只给出 R，不写端点，答案不完整。",
          "把中心点 a 忽略，误把区间写成关于 0 的对称区间。",
        ],
        ["幂级数", "收敛半径", "逐项求导积分"]
      ),
      section(
        "10.8",
        "Taylor and Maclaurin Series",
        "Taylor 与 Maclaurin 级数",
        "Taylor 展开是“用函数在一点的导数信息，拼成一个局部最匹配多项式”。",
        [
          "Maclaurin 是展开点 <span class=\"math\">a = 0</span> 的 Taylor 级数。",
          "常见母函数：<span class=\"math\">e^x</span>、<span class=\"math\">\\sin x</span>、<span class=\"math\">\\cos x</span>、<span class=\"math\">1/(1-x)</span>、<span class=\"math\">\\ln(1+x)</span>。",
          "组合技法很常见：代换、自乘、积分、求导都能从已知展开式得到新展开式。",
        ],
        [
          formula("Taylor 多项式", "<span class=\"math\">Tₙ(x) = Σ_{k=0}^{n} f^{(k)}(a)(x-a)^k / k!</span>。"),
          formula("Maclaurin", "<span class=\"math\">Tₙ(x) = Σ_{k=0}^{n} f^{(k)}(0)x^k / k!</span>。"),
        ],
        [
          "先背熟几个母式，再做代换，例如把 x 换成 <span class=\"math\">x²</span> 或 <span class=\"math\">-x</span>。",
          "若要求近似值，通常只取到误差足够小的最低次数项。",
        ],
        [
          "导数展开时符号、阶乘和中心点极易出错。",
          "把有限阶 Taylor 多项式误认为原函数本身，忘记余项存在。",
        ],
        ["Taylor", "Maclaurin", "局部逼近"]
      ),
      section(
        "10.9",
        "Convergence of Taylor Series",
        "Taylor 级数的收敛与误差",
        "要区分两件事：Taylor 级数收敛，和它是否真的收敛到原函数。",
        [
          "即便级数收敛，也要再看余项是否趋于 0，才能说明 <span class=\"math\">f(x) = Σ ...</span>。",
          "Lagrange 余项是最常见的误差控制方式。",
          "在考试里常见任务是：给定误差上限，求至少取到几次项。",
        ],
        [
          formula("收敛到原函数", "若 <span class=\"math\">Rₙ(x) → 0</span>，则 Taylor 级数在该点收敛到 <span class=\"math\">f(x)</span>。"),
          formula("误差上界", "若 <span class=\"math\">|f^{(n+1)}(ξ)| ≤ M</span>，则 <span class=\"math\">|Rₙ(x)| ≤ M|x-a|^{n+1}/(n+1)!</span>。"),
        ],
        [
          "误差题优先先给出 M 的上界，再代入余项公式。",
          "逼近范围越远离展开点，需要的次数通常越高。",
        ],
        [
          "没写“对某个 ξ 在 a 与 x 之间”就直接把余项写死。",
          "忽略定义域，导致拿对数或根式在不合法区间上展开。",
        ],
        ["Taylor余项", "误差控制", "收敛到原函数"]
      ),
      section(
        "10.10",
        "The Binomial Series and Applications of Taylor Series",
        "二项级数与 Taylor 应用",
        "把一般幂函数写成幂级数，是构造近似与积分估值的利器。",
        [
          "非整数指数的二项展开本质上来自 Taylor/Maclaurin 公式。",
          "应用场景包括：近似计算、简化积分、比较函数局部行为。",
          "题目往往要求给出前几项并注明适用区间。",
        ],
        [
          formula("二项级数", "<span class=\"math\">(1+x)^α = 1 + αx + α(α-1)x²/2! + ···</span>，通常在 <span class=\"math\">|x| &lt; 1</span> 内成立。"),
          formula("近似理念", "小量 x 出现时，保留低次项即可得到高精度近似。"),
        ],
        [
          "看到根式、倒数或形如 <span class=\"math\">(1+u)^α</span> 的表达式，先凑成二项级数模板。",
          "若应用到积分或微分，先保证在收敛区间内逐项操作合法。",
        ],
        [
          "忘记写收敛条件 <span class=\"math\">|x| &lt; 1</span>。",
          "把系数 α(α-1)(α-2)… 的连乘顺序写错。",
        ],
        ["二项级数", "近似计算", "幂函数展开"]
      ),
    ],
    examChecklist: [
      "会用一句话解释“aₙ→0 只是必要条件，不是充分条件”。",
      "会根据表达式结构在 10 秒内想到优先判别法。",
      "会从已知母函数写出 Taylor 展开，并给出误差控制。",
    ],
    demos: [
      {
        id: "sequence-series-demo",
        title: "数列与部分和观察器",
        description: "切换模板、拖动 n，看 aₙ 与 Sₙ 的不同命运。",
      },
      {
        id: "taylor-demo",
        title: "Taylor 逼近实验室",
        description: "改变展开阶数与取值点，观察近似曲线和误差如何变化。",
      },
    ],
  }),
  chapter({
    id: "chapter-11",
    shortLabel: "Ch.11",
    chapterNumber: "11",
    titleCn: "参数方程与极坐标",
    titleEn: "Parametric Equations and Polar Coordinates",
    accent: "#34637a",
    goals: [
      "同一条曲线要能在直角坐标、参数方程、极坐标之间来回切换。",
      "会从参数或角度判断运动方向、切线斜率、面积与弧长。",
      "对玫瑰线、心形线、螺线、圆锥曲线等经典图形形成稳定图像记忆。",
    ],
    studyPath: [
      "11.1-11.2：先看参数如何控制位置与运动，再做导数、面积、弧长。",
      "11.3-11.5：建立极坐标与直角坐标互化，掌握图像、面积、弧长。",
      "11.6-11.7：把圆锥曲线统一到焦点-准线和偏心率框架下。",
    ],
    formulaWall: [
      formula("参数曲线导数", "<span class=\"math\">dy/dx = (dy/dt)/(dx/dt)</span>，前提是 <span class=\"math\">dx/dt ≠ 0</span>。"),
      formula("参数曲线弧长", "<span class=\"math\">L = ∫ √((dx/dt)² + (dy/dt)²) dt</span>。"),
      formula("极坐标互化", "<span class=\"math\">x = r cos θ, y = r sin θ, r² = x² + y²</span>。"),
      formula("极坐标面积", "<span class=\"math\">A = 1/2 ∫ r² dθ</span>。"),
      formula("极坐标圆锥曲线", "<span class=\"math\">r = ed / (1 ± e cos θ)</span> 或 <span class=\"math\">r = ed / (1 ± e sin θ)</span>。"),
    ],
    diagram: chapter11Diagram,
    sections: [
      section(
        "11.1",
        "Parametrizations of Plane Curves",
        "平面曲线的参数表示",
        "参数 t 不只是“另一个变量”，它还决定走向、速度和是否重复经过同一点。",
        [
          "同一条曲线往往有多种参数化，区别在于起点、方向、速度和定义域。",
          "消去参数可以得到直角坐标方程，但会丢失运动信息。",
          "参数化非常适合描述无法写成 y=f(x) 的曲线，如圆、摆线、Lissajous 曲线。",
        ],
        [
          formula("参数形式", "<span class=\"math\">x=f(t), y=g(t)</span>。"),
          formula("方向判断", "增大 t 时点沿轨迹移动的方向，就是曲线的取向。"),
        ],
        [
          "先列关键点：t 的起止值、特殊时刻对应的坐标、是否闭合或重复。",
          "如果要求直角坐标方程，再尝试消参，但记得单独说明方向。",
        ],
        [
          "消参后就忘了原曲线只走其中一部分。",
          "把“同一轨迹”误认为“同一参数化”。",
        ],
        ["参数方程", "消参", "方向"]
      ),
      section(
        "11.2",
        "Calculus with Parametric Curves",
        "参数曲线上的微积分",
        "所有导数都要回到 t 上求，再通过链式法则换成对 x 或弧长的表达。",
        [
          "切线斜率来自 <span class=\"math\">dy/dx</span>；凹凸性来自 <span class=\"math\">d²y/dx²</span>。",
          "面积常写成 <span class=\"math\">A = ∫ y dx = ∫ y(t)x'(t) dt</span>。",
          "弧长公式是速度模长积分，本质与空间曲线相同。",
        ],
        [
          formula("二阶导", "<span class=\"math\">d²y/dx² = (d/dt(dy/dx)) / (dx/dt)</span>。"),
          formula("参数面积", "<span class=\"math\">A = ∫ y(t) x'(t) dt</span>，方向与上下限很重要。"),
        ],
        [
          "先求 <span class=\"math\">x'(t), y'(t)</span>，很多后续问题都依赖它们。",
          "面积题要先画草图，确认是否需要取绝对值或拆区间。",
        ],
        [
          "忘记检查 <span class=\"math\">dx/dt = 0</span> 导致斜率不存在。",
          "直接把参数区间代进面积公式，却没确认曲线是否回头或穿越 x 轴。",
        ],
        ["参数求导", "弧长", "面积"]
      ),
      section(
        "11.3",
        "Polar Coordinates",
        "极坐标",
        "极坐标的本质是“角度 + 距离原点的有向长度”，负半径必须有几何意识。",
        [
          "同一点可以有多组极坐标表示，常见变换是 <span class=\"math\">(r, θ)</span> 与 <span class=\"math\">(-r, θ+π)</span>。",
          "极轴、极角、半径三者构成观察曲线的新方式。",
          "负半径意味着沿反方向走同样的距离，画图时尤其关键。",
        ],
        [
          formula("互化", "<span class=\"math\">tan θ = y/x</span> 只给出参考值，象限必须靠点的位置补足。"),
          formula("圆与射线", "<span class=\"math\">r = c</span> 是圆；<span class=\"math\">θ = α</span> 是一条过原点射线。"),
        ],
        [
          "换坐标时先画出象限，避免 arctan 的多值问题。",
          "极坐标画图先判断对称性，再找零点、最大半径、周期。",
        ],
        [
          "把 <span class=\"math\">r &lt; 0</span> 的点画在错误方向。",
          "用直角坐标直觉去理解极坐标，不看角度变化。",
        ],
        ["极坐标", "互化", "负半径"]
      ),
      section(
        "11.4",
        "Graphing Polar Coordinate Equations",
        "极坐标方程作图",
        "作图要看函数随 θ 的周期、对称性和半径符号变化。",
        [
          "玫瑰线、心形线、利马松、阿基米德螺线、双纽线是高频母图。",
          "极坐标对称性常用替换：<span class=\"math\">θ→-θ</span>、<span class=\"math\">θ→π-θ</span>、<span class=\"math\">θ→θ+π</span>。",
          "同一图形可能在不同角区间重复出现，积分和作图都要先找最小重复周期。",
        ],
        [
          formula("玫瑰线", "<span class=\"math\">r = a cos(kθ)</span> 或 <span class=\"math\">a sin(kθ)</span>。k 奇偶决定花瓣数。"),
          formula("心形线", "<span class=\"math\">r = a(1 ± cos θ)</span> 或 <span class=\"math\">a(1 ± sin θ)</span>。"),
        ],
        [
          "先列一个 θ 关键表：0、π/2、π、3π/2，以及使 r=0 的角。",
          "用对称性把需要扫描的区间压缩到最小。",
        ],
        [
          "忽略负半径，导致花瓣位置整体错位。",
          "未判断周期就积分，重复计算同一块面积。",
        ],
        ["玫瑰线", "心形线", "对称性"]
      ),
      section(
        "11.5",
        "Areas and Lengths in Polar Coordinates",
        "极坐标中的面积与弧长",
        "极坐标面积来自扇形近似，弧长来自速度分解。",
        [
          "两曲线夹区域面积通常写成 <span class=\"math\">1/2 ∫ (r_outer² - r_inner²) dθ</span>。",
          "弧长公式要用 <span class=\"math\">r</span> 和 <span class=\"math\">dr/dθ</span> 同时出现。",
          "边界角度的选择比公式本身更关键，必须先找交点。",
        ],
        [
          formula("极坐标弧长", "<span class=\"math\">L = ∫ √(r² + (dr/dθ)²) dθ</span>。"),
          formula("区域面积", "<span class=\"math\">A = 1/2 ∫_{α}^{β} r² dθ</span>。"),
        ],
        [
          "先画图确定谁在外谁在内，再写积分上下限和 integrand。",
          "求交点时通常解 <span class=\"math\">r₁ = r₂</span>，但别忘了有时还需考虑负半径对应同一点。",
        ],
        [
          "拿错积分区间，把整个封闭图形算多了一圈。",
          "弧长公式漏掉平方根中的 <span class=\"math\">r²</span>。",
        ],
        ["极坐标面积", "极坐标弧长", "交点"]
      ),
      section(
        "11.6",
        "Conic Sections",
        "圆锥曲线",
        "椭圆、抛物线、双曲线要统一到焦点-准线与偏心率 e 的语言里。",
        [
          "e<1 是椭圆，e=1 是抛物线，e>1 是双曲线。",
          "标准方程、焦点位置、离心率、渐近线是最常考的四件事。",
          "很多题目并不是让你背公式，而是通过定义推导标准式。",
        ],
        [
          formula("椭圆标准式", "<span class=\"math\">x²/a² + y²/b² = 1</span>，其中 <span class=\"math\">c² = a²-b²</span>。"),
          formula("双曲线标准式", "<span class=\"math\">x²/a² - y²/b² = 1</span> 或其纵向版本，且 <span class=\"math\">c² = a²+b²</span>。"),
        ],
        [
          "先认中心、顶点、焦点所在方向，再记分母下对应的是伸展方向。",
          "遇到几何定义题，直接从“到焦点距离与到准线距离之比”起步。",
        ],
        [
          "把椭圆和双曲线的 c² 关系记反。",
          "渐近线只属于双曲线，不属于抛物线。",
        ],
        ["圆锥曲线", "偏心率", "标准方程"]
      ),
      section(
        "11.7",
        "Conics in Polar Coordinates",
        "极坐标中的圆锥曲线",
        "极坐标最适合写带焦点的圆锥曲线，因为焦点可以放在极点。",
        [
          "核心对象是焦点在极点、准线平行于某坐标轴的圆锥曲线。",
          "分母里的 <span class=\"math\">1 ± e cos θ</span> 或 <span class=\"math\">1 ± e sin θ</span> 决定开口方向。",
          "偏心率 e 直接控制图形从椭圆到双曲线的变化。",
        ],
        [
          formula("水平准线型", "<span class=\"math\">r = ed / (1 ± e cos θ)</span>。"),
          formula("竖直准线型", "<span class=\"math\">r = ed / (1 ± e sin θ)</span>。"),
        ],
        [
          "先从准线方向判断该用 cos 还是 sin，再看正负号决定朝向。",
          "若题目给出 e 和 d，建议先画焦点、准线，再定位顶点。",
        ],
        [
          "把 d 理解成焦点到顶点距离；它其实是焦点到准线的距离参数。",
          "不区分 e 的大小，直接想当然地画成椭圆。",
        ],
        ["极坐标圆锥曲线", "偏心率", "焦点准线"]
      ),
    ],
    examChecklist: [
      "会从图形描述反推出一个合适的参数化。",
      "会用极坐标对称性快速缩小扫描区间。",
      "会在同一道题里切换参数、极坐标、直角坐标三种视角。",
    ],
    demos: [
      {
        id: "parametric-demo",
        title: "含参曲线运动演示",
        description: "拖动 t 或播放动画，观察点、切线和运动方向。",
      },
      {
        id: "polar-demo",
        title: "极坐标图形实验室",
        description: "切换玫瑰线、心形线、螺线与圆锥曲线，直接看角度和半径的关系。",
      },
    ],
  }),
  chapter({
    id: "chapter-12",
    shortLabel: "Ch.12",
    chapterNumber: "12",
    titleCn: "向量与空间解析几何",
    titleEn: "Vectors and the Geometry of Space",
    accent: "#355164",
    goals: [
      "从二维过渡到三维，先适应空间坐标系、距离、球面和投影关系。",
      "把点积、叉积、直线、平面视为同一套向量语言的不同应用。",
      "对常见二次曲面建立立体图像，并能读出它们的截面特征。",
    ],
    studyPath: [
      "12.1-12.2：建立三维坐标与向量基本语言。",
      "12.3-12.5：掌握点积、叉积，再落到线与平面方程。",
      "12.6：识别柱面和二次曲面，训练空间图形想象。",
    ],
    formulaWall: [
      formula("空间距离", "<span class=\"math\">d = √((x₂-x₁)² + (y₂-y₁)² + (z₂-z₁)²)</span>。"),
      formula("点积", "<span class=\"math\">a·b = a₁b₁ + a₂b₂ + a₃b₃ = |a||b|cosθ</span>。"),
      formula("叉积", "<span class=\"math\">|a×b| = |a||b|sinθ</span>，方向由右手法则给出。"),
      formula("直线参数式", "<span class=\"math\">r = r₀ + tv</span>。"),
      formula("平面方程", "<span class=\"math\">ax + by + cz = d</span>，法向量是 <span class=\"math\">⟨a,b,c⟩</span>。"),
    ],
    diagram: chapter12Diagram,
    sections: [
      section(
        "12.1",
        "Three-Dimensional Coordinate Systems",
        "三维坐标系",
        "重点不是多了一个 z，而是要学会在脑中同时看投影、截面和空间位置。",
        [
          "空间点 <span class=\"math\">(x,y,z)</span> 可以用在三个坐标平面上的投影来理解。",
          "球面、圆柱和一些简单曲面可以直接由距离定义写出方程。",
          "三维图形常用“固定一个变量看截面”的方式去识别。",
        ],
        [
          formula("球面", "<span class=\"math\">(x-a)² + (y-b)² + (z-c)² = R²</span>。"),
          formula("坐标平面", "<span class=\"math\">xy</span> 平面即 <span class=\"math\">z=0</span>，其余类似。"),
        ],
        [
          "先判断点在八个卦限中的哪一个，再结合投影理解位置。",
          "识别曲面时，多看与坐标平面的交线是什么形状。",
        ],
        [
          "把三维坐标轴方向画混，导致后续向量方向全部错位。",
          "只看整体式子，不做截面分析，无法识别空间曲面。",
        ],
        ["三维坐标", "球面", "截面"]
      ),
      section(
        "12.2",
        "Vectors",
        "向量",
        "向量既是有方向的量，也是空间中平移不变的几何对象。",
        [
          "向量的长度、方向、分量、单位向量是最基础的四个概念。",
          "位置向量把点和向量关联起来，是写空间曲线与直线的标准入口。",
          "几何运算如加法、数乘、分解，都可以落到坐标分量上。",
        ],
        [
          formula("长度", "<span class=\"math\">|v| = √(v₁² + v₂² + v₃²)</span>。"),
          formula("单位向量", "<span class=\"math\">u = v / |v|</span>。"),
        ],
        [
          "先画向量尾端到原点的位移，再写坐标，几何和代数会统一。",
          "涉及方向时，尽量把向量单位化再解释。",
        ],
        [
          "把点的坐标和向量分量当成两个互不相关的对象。",
          "没先求长度就直接写单位向量。",
        ],
        ["向量", "单位向量", "位置向量"]
      ),
      section(
        "12.3",
        "The Dot Product",
        "点积",
        "点积是“投影 + 夹角 + 正交”的统一语言。",
        [
          "点积为 0 是正交条件；为正/负反映夹角锐/钝。",
          "投影长度和分量都通过点积表达，在线面距离里非常常见。",
          "工作（work）等物理量本质也是力和位移的点积。",
        ],
        [
          formula("投影", "<span class=\"math\">proj_b a = (a·b / |b|²) b</span>。"),
          formula("夹角", "<span class=\"math\">cos θ = (a·b)/(|a||b|)</span>。"),
        ],
        [
          "要判垂直，优先做点积；要判平行，优先比方向向量是否成比例。",
          "求分量时先选投影方向，再决定是标量投影还是向量投影。",
        ],
        [
          "把点积算成向量；点积结果是标量。",
          "分母忘记平方，导致投影向量系数错误。",
        ],
        ["点积", "投影", "夹角"]
      ),
      section(
        "12.4",
        "The Cross Product",
        "叉积",
        "叉积一方面给面积，另一方面直接给出垂直于平面的法向量。",
        [
          "叉积结果是向量，方向由右手法则决定。",
          "平行四边形面积是 <span class=\"math\">|a×b|</span>；三角形面积再除以 2。",
          "两向量平行当且仅当叉积为零向量。",
        ],
        [
          formula("行列式计算", "<span class=\"math\">a×b = det |i j k; a₁ a₂ a₃; b₁ b₂ b₃|</span>。"),
          formula("面积", "<span class=\"math\">Area = |a×b|</span>。"),
        ],
        [
          "先判断所求是“面积”还是“法向量”，再决定是否取模。",
          "直线和平面问题里常先用两个方向向量做叉积求法向量。",
        ],
        [
          "把右手法则方向搞反，尤其在交换顺序时忘记 <span class=\"math\">a×b = -(b×a)</span>。",
          "三角形面积忘记除以 2。",
        ],
        ["叉积", "法向量", "面积"]
      ),
      section(
        "12.5",
        "Lines and Planes in Space",
        "空间中的直线与平面",
        "方向向量决定直线，法向量决定平面，二者的夹角关系贯穿整节。",
        [
          "直线常用参数式或对称式；平面常用点法式或一般式。",
          "两平面的夹角看法向量，两直线夹角看方向向量。",
          "直线与平面的平行、垂直、相交关系都能通过点积和参数方程统一处理。",
        ],
        [
          formula("直线对称式", "<span class=\"math\">(x-x₀)/a = (y-y₀)/b = (z-z₀)/c</span>。"),
          formula("点法式平面", "<span class=\"math\">n·(r-r₀)=0</span>。"),
        ],
        [
          "先提取方向向量和法向量，再谈几何关系，会比直接盯方程清晰得多。",
          "求交点时把直线参数式代入平面方程，是最稳的路线。",
        ],
        [
          "把平面的一般式系数看成方向向量；它其实是法向量。",
          "漏掉“平面内无穷多点”这一事实，导致只凭一个点就写平面。",
        ],
        ["直线", "平面", "法向量", "夹角"]
      ),
      section(
        "12.6",
        "Cylinders and Quadric Surfaces",
        "柱面与二次曲面",
        "识别二次曲面的关键不是死记名字，而是看符号、缺失变量和截面。",
        [
          "柱面常由“少一个变量”识别，例如 <span class=\"math\">x²+y²=1</span> 是沿 z 轴延伸的圆柱。",
          "椭球面、单双叶双曲面、椭圆/双曲抛物面、圆锥面都要能从标准式认图。",
          "截面法最可靠：固定 z 看平面曲线，固定 x 或 y 看另一组截面。",
        ],
        [
          formula("椭球面", "<span class=\"math\">x²/a² + y²/b² + z²/c² = 1</span>。"),
          formula("双曲抛物面", "<span class=\"math\">z = x²/a² - y²/b²</span>，典型马鞍面。"),
        ],
        [
          "先看变量平方项的符号：全正多为椭球类，一正一负常指双曲类。",
          "再看等式右端是 1、0 还是 z 之类，判断是否中心曲面或抛物面。",
        ],
        [
          "把单双叶双曲面混淆；看右端为正的那个变量对应开口方向。",
          "忘记“缺失变量”意味着沿该轴方向无限延伸。",
        ],
        ["二次曲面", "柱面", "截面分析"]
      ),
    ],
    examChecklist: [
      "会从方程迅速提取方向向量和法向量。",
      "会用截面法解释二次曲面长什么样。",
      "会把点积、叉积和空间几何题串到同一张图里理解。",
    ],
    demos: [
      {
        id: "vector-demo",
        title: "空间向量 3D 视图",
        description: "拖动画布改变视角，观察向量、夹角、法向量与投影。",
      },
      {
        id: "quadric-demo",
        title: "二次曲面画廊",
        description: "切换椭球、圆锥、抛物面、马鞍面，用 3D 视角建立空间直觉。",
      },
    ],
  }),
  chapter({
    id: "chapter-13",
    shortLabel: "Ch.13",
    chapterNumber: "13",
    titleCn: "向量值函数与空间运动",
    titleEn: "Vector-Valued Functions and Motion in Space",
    accent: "#1f5b63",
    goals: [
      "把空间曲线理解为位置向量 r(t) 随时间变化形成的轨迹。",
      "把速度、加速度、曲率、Frenet 标架统一到一条曲线上理解。",
      "能在直角坐标和极坐标两种运动描述之间切换。",
    ],
    studyPath: [
      "13.1-13.2：从 r(t) 出发，建立速度、加速度和向量积分。",
      "13.3-13.5：进一步进入弧长参数、曲率和加速度分解。",
      "13.6：把运动拆成径向与横向分量，连接极坐标与力学直觉。",
    ],
    formulaWall: [
      formula("位置、速度、加速度", "<span class=\"math\">v = r'(t), a = r''(t)</span>。"),
      formula("弧长", "<span class=\"math\">s = ∫ |r'(t)| dt</span>。"),
      formula("曲率", "<span class=\"math\">κ = |dT/ds| = |r'×r''| / |r'|³</span>。"),
      formula("加速度分解", "<span class=\"math\">a = a_T T + a_N N</span>，其中 <span class=\"math\">a_T = dv/dt</span>。"),
      formula("极坐标运动", "<span class=\"math\">v = ṙ u_r + r θ̇ u_θ</span>，<span class=\"math\">a = (r̈-rθ̇²)u_r + (rθ̈+2ṙθ̇)u_θ</span>。"),
    ],
    diagram: chapter13Diagram,
    sections: [
      section(
        "13.1",
        "Curves in Space and Their Tangents",
        "空间曲线及其切向量",
        "空间曲线由位置向量 r(t) 给出，切向量来自它的一阶导数。",
        [
          "位置向量 <span class=\"math\">r(t)=⟨x(t),y(t),z(t)⟩</span> 同时编码三维轨迹。",
          "切线方向由 <span class=\"math\">r'(t)</span> 决定，只要导数不为零。",
          "单位切向量 <span class=\"math\">T</span> 是后续曲率和加速度分解的基础。",
        ],
        [
          formula("切线方程", "过点 <span class=\"math\">r(t₀)</span> 且方向向量为 <span class=\"math\">r'(t₀)</span>。"),
          formula("单位切向量", "<span class=\"math\">T = r'/|r'|</span>。"),
        ],
        [
          "先求具体时刻的位置，再求导数，最后写出参数式切线。",
          "若要判断速度快慢，不能只看方向，要看 <span class=\"math\">|r'|</span>。",
        ],
        [
          "把轨迹方程和运动方程混为一谈；同一轨迹可对应不同速度分布。",
          "r'(t₀)=0 时仍机械写切线。",
        ],
        ["空间曲线", "切向量", "单位切向量"]
      ),
      section(
        "13.2",
        "Integrals of Vector Functions; Projectile Motion",
        "向量函数积分与抛体运动",
        "向量函数的积分逐分量进行，物理意义上常用于从加速度恢复速度和位置。",
        [
          "向量求导与积分都可以分量化处理，本质上和单变量微积分平行。",
          "抛体运动是常见应用：已知重力加速度，积分得到速度和位置。",
          "常量向量积分会引入常向量，用初始条件求解。",
        ],
        [
          formula("逐分量积分", "<span class=\"math\">∫⟨f,g,h⟩dt = ⟨∫fdt, ∫gdt, ∫hdt⟩ + C</span>。"),
          formula("匀重力模型", "<span class=\"math\">a = ⟨0,-g,0⟩</span> 或在二维写成 <span class=\"math\">⟨0,-g⟩</span>。"),
        ],
        [
          "物理题优先按“加速度 → 速度 → 位置”两次积分的链条做。",
          "注意初速度、初始位置都可能是向量。",
        ],
        [
          "积分常数漏写成标量，导致维度不对。",
          "只看一维公式，不注意三维分量之间是否彼此独立。",
        ],
        ["向量积分", "抛体运动", "初始条件"]
      ),
      section(
        "13.3",
        "Arc Length in Space",
        "空间曲线弧长",
        "空间弧长和二维参数曲线弧长完全同源，核心仍是速度模长。",
        [
          "弧长参数 s 能把“走了多远”和“时间参数 t”区分开。",
          "若改用弧长参数，则单位速度恰好为 1，很多公式更简洁。",
          "曲线重参数化时，轨迹不变，但速度和加速度会变。",
        ],
        [
          formula("弧长函数", "<span class=\"math\">s(t)=∫_{t₀}^{t}|r'(u)|du</span>。"),
          formula("单位速度", "若以弧长 s 为参数，则 <span class=\"math\">|dr/ds|=1</span>。"),
        ],
        [
          "积分前先求简洁的 <span class=\"math\">|r'(t)|</span>，避免展开成复杂多项式。",
          "弧长参数题通常要先证速度不为零。",
        ],
        [
          "把 <span class=\"math\">|r'|</span> 误写成分量平方和本身，漏掉开方。",
          "忘记弧长函数默认从某个起始参数开始累计。",
        ],
        ["弧长", "重参数化", "速度模长"]
      ),
      section(
        "13.4",
        "Curvature and the Normal Vector of a Curve",
        "曲率与法向量",
        "曲率衡量的是曲线转弯有多快，而不是点走得有多快。",
        [
          "单位切向量变化越快，曲率越大；曲率半径 <span class=\"math\">ρ=1/κ</span> 越小。",
          "主法向量 N 指向切向量改变的方向，和 T 垂直。",
          "对平面圆而言，曲率是常数 <span class=\"math\">1/R</span>。",
        ],
        [
          formula("曲率定义", "<span class=\"math\">κ = |dT/ds|</span>。"),
          formula("计算式", "<span class=\"math\">κ = |r'×r''| / |r'|³</span>。"),
        ],
        [
          "若题目给的是一般参数 t，优先用叉积公式算曲率最稳。",
          "求 N 时先求 T，再对 T 求导并单位化。",
        ],
        [
          "把曲率和速度混在一起，以为“走得快曲率就大”。",
          "没有先单位化 <span class=\"math\">dT/dt</span> 就直接当 N。",
        ],
        ["曲率", "法向量", "Frenet"]
      ),
      section(
        "13.5",
        "Tangential and Normal Components of Acceleration",
        "加速度的切向与法向分量",
        "加速度并不总是朝着速度方向，它可以同时改变速率和转向。",
        [
          "切向分量 <span class=\"math\">a_T</span> 控制速率变化；法向分量 <span class=\"math\">a_N</span> 控制转弯。",
          "匀速圆周运动中 <span class=\"math\">a_T=0</span>、<span class=\"math\">a_N=v²/ρ</span>。",
          "这一节把力学直觉和曲率联系得最紧。",
        ],
        [
          formula("分解公式", "<span class=\"math\">a = a_T T + a_N N</span>。"),
          formula("计算", "<span class=\"math\">a_T = d|v|/dt</span>，<span class=\"math\">a_N = κ|v|²</span>。"),
        ],
        [
          "如果已知 r(t)，通常先求 v、a，再用点积或模长提取 <span class=\"math\">a_T,a_N</span>。",
          "若题目给的是曲率和速度，直接用 <span class=\"math\">a_N = κv²</span> 很快。",
        ],
        [
          "误把 <span class=\"math\">a_T</span> 写成 <span class=\"math\">|a|</span> 的切向分量。",
          "分量公式会算，但不知道物理意义，导致判断运动状态时出错。",
        ],
        ["加速度分解", "切向分量", "法向分量"]
      ),
      section(
        "13.6",
        "Velocity and Acceleration in Polar Coordinates",
        "极坐标中的速度与加速度",
        "极坐标基向量本身会随 θ 改变，因此求导时不能把 <span class=\"math\">u_r,u_θ</span> 当常量。",
        [
          "速度由径向项 <span class=\"math\">ṙu_r</span> 和横向项 <span class=\"math\">rθ̇u_θ</span> 组成。",
          "加速度里最重要的两个耦合项是 <span class=\"math\">-rθ̇²</span> 和 <span class=\"math\">2ṙθ̇</span>。",
          "圆周运动、螺旋靠近/远离原点、中心力问题都常用此框架。",
        ],
        [
          formula("基向量求导", "<span class=\"math\">u'_r = θ̇u_θ</span>，<span class=\"math\">u'_θ = -θ̇u_r</span>。"),
          formula("极坐标加速度", "<span class=\"math\">a=(r̈-rθ̇²)u_r + (rθ̈+2ṙθ̇)u_θ</span>。"),
        ],
        [
          "先写 <span class=\"math\">r = ru_r</span>，再连锁求导，比死背公式更不易错。",
          "解题时要分清题目给的是 <span class=\"math\">r(t)</span>、<span class=\"math\">θ(t)</span> 还是速度角速度。",
        ],
        [
          "把 <span class=\"math\">u_r,u_θ</span> 当固定方向，漏掉其导数。",
          "遗漏耦合项 <span class=\"math\">2ṙθ̇</span>，这在考试中很常见。",
        ],
        ["极坐标运动", "径向分量", "横向分量"]
      ),
    ],
    examChecklist: [
      "会从 r(t) 直接写出切线、速度、加速度。",
      "会解释曲率与法向加速度之间的关系。",
      "会在极坐标中正确处理基向量求导。",
    ],
    demos: [
      {
        id: "space-motion-demo",
        title: "空间运动 3D 演示",
        description: "沿着空间曲线播放粒子运动，同时显示速度和加速度方向。",
      },
      {
        id: "polar-motion-demo",
        title: "极坐标速度分解",
        description: "拖动时间参数，观察径向与横向分量如何叠加成真实运动。",
      },
    ],
  }),
  chapter({
    id: "chapter-14",
    shortLabel: "Ch.14",
    chapterNumber: "14",
    titleCn: "偏导数",
    titleEn: "Partial Derivatives",
    accent: "#295a67",
    goals: [
      "建立多元函数的几何直觉：曲面、等高线、方向变化率。",
      "会在偏导、梯度、切平面、极值、约束极值之间切换语言。",
      "把链式法则和全微分看成“变量依赖关系”的系统表达。",
    ],
    studyPath: [
      "14.1-14.3：先认识多元函数、极限连续、偏导与二阶偏导。",
      "14.4-14.6：处理变量依赖、方向导数、梯度、切平面和线性化。",
      "14.7-14.10：进入无约束极值、Lagrange 乘子与受约束变量。",
    ],
    formulaWall: [
      formula("偏导", "<span class=\"math\">f_x(a,b) = lim_{h→0}[f(a+h,b)-f(a,b)]/h</span>。"),
      formula("链式法则", "<span class=\"math\">dz/dt = f_x dx/dt + f_y dy/dt</span>。"),
      formula("方向导数", "<span class=\"math\">D_u f = ∇f · u</span>，其中 u 为单位向量。"),
      formula("切平面", "<span class=\"math\">z = f(a,b) + f_x(a,b)(x-a) + f_y(a,b)(y-b)</span>。"),
      formula("Lagrange 乘子", "<span class=\"math\">∇f = λ∇g</span>，配合约束 <span class=\"math\">g(x,y)=c</span>。"),
    ],
    diagram: chapter14Diagram,
    sections: [
      section(
        "14.1",
        "Functions of Several Variables",
        "多元函数",
        "多元函数的第一步不是算导数，而是看定义域、值域、图形和等高线。",
        [
          "二元函数可以看成曲面 <span class=\"math\">z=f(x,y)</span>，也可以看成平面上的等高线族。",
          "定义域常由根号、分母、对数等约束共同决定。",
          "截线和等高线是理解曲面的两把钥匙：一个固定变量，一个固定函数值。",
        ],
        [
          formula("图形", "<span class=\"math\">z = f(x,y)</span> 在三维空间中形成曲面。"),
          formula("等高线", "<span class=\"math\">f(x,y)=k</span> 是平面内的水平截痕。"),
        ],
        [
          "先从定义域入手，再画几条典型等高线，会比直接盯曲面更容易。",
          "判断极值点或方向导数前，先看局部等高线密度和疏密变化。",
        ],
        [
          "只会写函数式，却不会说明定义域。",
          "把等高线图和三维曲面图混成两回事，看不出对应关系。",
        ],
        ["多元函数", "定义域", "等高线"]
      ),
      section(
        "14.2",
        "Limits and Continuity in Higher Dimensions",
        "高维极限与连续性",
        "多元极限必须对所有路径一致，单一路径验证只够证“极限不存在”。",
        [
          "若沿不同路径趋近得到不同结果，则极限不存在。",
          "连续函数的四则运算和复合性质与一元情形一致，但定义域边界要额外小心。",
          "极坐标替换常用于处理含 <span class=\"math\">x²+y²</span> 的原点极限。",
        ],
        [
          formula("连续定义", "<span class=\"math\">lim_{(x,y)→(a,b)} f(x,y) = f(a,b)</span>。"),
          formula("极坐标替换", "<span class=\"math\">x = r cos θ, y = r sin θ</span>，若结果与 θ 无关且 <span class=\"math\">r→0</span>，常可判极限。"),
        ],
        [
          "证不存在时，优先试直线、抛物线、坐标轴等典型路径。",
          "想证存在时，路径法通常不够，要找统一估计或极坐标夹逼。",
        ],
        [
          "沿几条路径都一样就草率判存在。",
          "只看分子分母次数，不做严格估计。",
        ],
        ["多元极限", "路径法", "连续性"]
      ),
      section(
        "14.3",
        "Partial Derivatives",
        "偏导数",
        "偏导就是“冻结其余变量后”的一元导数，但二阶偏导涉及次序与可交换条件。",
        [
          "偏导衡量沿坐标轴方向的变化率，与方向导数不同。",
          "混合偏导 <span class=\"math\">f_{xy}</span> 与 <span class=\"math\">f_{yx}</span> 在足够光滑时相等。",
          "偏导存在不必然推出连续，更不必然推出可微。",
        ],
        [
          formula("偏导记号", "<span class=\"math\">f_x, f_y, f_{xx}, f_{xy}</span> 等。"),
          formula("Clairaut 定理", "若混合二阶偏导在邻域内连续，则 <span class=\"math\">f_{xy}=f_{yx}</span>。"),
        ],
        [
          "把其它变量当常数做一元求导，这是最稳的运算心法。",
          "二阶偏导题一定写清先后次序，避免记号混乱。",
        ],
        [
          "把全导数和偏导数混淆，尤其在复合函数里容易出错。",
          "偏导存在就误判函数可微或连续。",
        ],
        ["偏导数", "二阶偏导", "混合偏导"]
      ),
      section(
        "14.4",
        "The Chain Rule",
        "链式法则",
        "链式法则的本质是：输出量的变化由所有中间变量通道共同贡献。",
        [
          "树状结构最适合组织多元链式法则：每一条从顶到底的路径都贡献一项。",
          "若 x、y 都依赖于 t，<span class=\"math\">z=f(x,y)</span> 的导数要把两条链都加起来。",
          "隐函数、约束变量和物理量变化率问题大量依赖这一节。",
        ],
        [
          formula("单参数链式法则", "<span class=\"math\">dz/dt = f_x x' + f_y y'</span>。"),
          formula("双参数版本", "<span class=\"math\">z_r = f_x x_r + f_y y_r</span>，<span class=\"math\">z_s = f_x x_s + f_y y_s</span>。"),
        ],
        [
          "先画依赖树，再写每条路径的乘积和。",
          "若中间变量较多，可先求梯度，再与参数导数向量点乘。",
        ],
        [
          "漏掉某条路径，少写一项是最典型错误。",
          "把偏导 evaluated at 哪里忽略掉，导致答案缺上下文。",
        ],
        ["链式法则", "依赖树", "全导数"]
      ),
      section(
        "14.5",
        "Directional Derivatives and Gradient Vectors",
        "方向导数与梯度",
        "梯度是局部增长最快的方向，方向导数是把梯度投影到指定方向上。",
        [
          "方向向量必须单位化，否则方向导数大小会被向量长度污染。",
          "梯度垂直于等高线，是等高线图和三维图之间最关键的桥梁。",
          "最大方向导数的值等于 <span class=\"math\">|∇f|</span>。",
        ],
        [
          formula("方向导数", "<span class=\"math\">D_u f = f_x u₁ + f_y u₂ = ∇f·u</span>。"),
          formula("梯度", "<span class=\"math\">∇f = ⟨f_x, f_y⟩</span> 或 <span class=\"math\">⟨f_x,f_y,f_z⟩</span>。"),
        ],
        [
          "先算梯度，再点乘单位方向向量，是最稳定路线。",
          "看到等高线图时，梯度方向应与曲线正交并指向更高函数值。",
        ],
        [
          "忘记单位化方向向量，导致数值错误。",
          "把梯度方向误看成“切线方向”；它其实法向于等高线。",
        ],
        ["方向导数", "梯度", "等高线"]
      ),
      section(
        "14.6",
        "Tangent Planes and Differentials",
        "切平面与微分",
        "可微性的几何含义是：函数在局部可以被一个平面很好近似。",
        [
          "切平面是曲面在某点最好的线性近似。",
          "全微分 <span class=\"math\">df = f_x dx + f_y dy</span> 直接给出小改变量近似。",
          "偏导连续是可微的常用充分条件，但不是必要条件。",
        ],
        [
          formula("线性化", "<span class=\"math\">L(x,y)=f(a,b)+f_x(a,b)(x-a)+f_y(a,b)(y-b)</span>。"),
          formula("误差量级", "若可微，则 <span class=\"math\">Δf - df</span> 相比 <span class=\"math\">√(Δx²+Δy²)</span> 更小。"),
        ],
        [
          "一旦题目问“近似值”，优先想到线性化而不是重算复杂函数值。",
          "写切平面前一定先求函数值和两个偏导在该点的值。",
        ],
        [
          "把切平面公式里的点坐标和变量 x,y 混用。",
          "没有先检查点是否在曲面上就写切平面。",
        ],
        ["切平面", "线性化", "全微分"]
      ),
      section(
        "14.7",
        "Extreme Values and Saddle Points",
        "极值与鞍点",
        "多元极值先找临界点，再靠 Hessian 判别局部几何类型。",
        [
          "临界点来自 <span class=\"math\">∇f=0</span> 或偏导不存在但函数有定义的点。",
          "Hessian 判别看 <span class=\"math\">D = f_{xx}f_{yy} - f_{xy}²</span> 的符号。",
          "局部极值和绝对极值不同；闭有界区域上要把边界也纳入考察。",
        ],
        [
          formula("二阶判别", "若 <span class=\"math\">D&gt;0</span> 且 <span class=\"math\">f_{xx}&gt;0</span>，为极小；若 <span class=\"math\">f_{xx}&lt;0</span>，为极大；若 <span class=\"math\">D&lt;0</span>，为鞍点。"),
          formula("判别失效", "<span class=\"math\">D=0</span> 时二阶判别法无结论。"),
        ],
        [
          "先找所有临界点，再统一代 Hessian，不要边找边判。",
          "绝对极值题若定义域有边界，要把边界降维后继续做单变量/约束极值。",
        ],
        [
          "只求 <span class=\"math\">∇f=0</span>，忘记边界。",
          "把 D>0 直接判成极值，却没看 <span class=\"math\">f_{xx}</span> 正负。",
        ],
        ["极值", "鞍点", "Hessian"]
      ),
      section(
        "14.8",
        "Lagrange Multipliers",
        "Lagrange 乘子",
        "约束极值的几何意义是：目标函数等高线与约束曲线在极值点相切。",
        [
          "在约束面上，最优点处目标函数梯度与约束梯度平行。",
          "方程组通常由 <span class=\"math\">∇f=λ∇g</span> 加约束条件共同组成。",
          "多个约束时会引入多个乘子，本质仍是法向量线性组合。",
        ],
        [
          formula("基本方程", "<span class=\"math\">∇f = λ∇g</span>, <span class=\"math\">g(x,y,z)=c</span>。"),
          formula("几何解释", "在极值点，目标等值面与约束面具有平行法向量。"),
        ],
        [
          "先确认题目是“有约束极值”，再决定是否用 Lagrange，而不是一上来套公式。",
          "解完方程组后一定比较函数值，别默认所有解都是同类极值。",
        ],
        [
          "忘记把约束方程一起带上，导致未知数多于方程数。",
          "把约束边界题和无约束 Hessian 判别混用。",
        ],
        ["Lagrange", "约束极值", "梯度平行"]
      ),
      section(
        "14.9",
        "Taylor’s Formula for Two Variables",
        "二元 Taylor 公式",
        "二元 Taylor 是局部近似的高阶版本，二次项里会出现混合项。",
        [
          "二阶展开会自然引出 Hessian 矩阵，是极值判别和误差估计的基础。",
          "二元情形不仅有 <span class=\"math\">(x-a)²</span> 和 <span class=\"math\">(y-b)²</span>，还有交叉项 <span class=\"math\">(x-a)(y-b)</span>。",
          "局部二次近似能直接看出“像碗还是像马鞍”。",
        ],
        [
          formula("二元二阶 Taylor", "<span class=\"math\">f(a+h,b+k)≈f+f_xh+f_yk+1/2(f_{xx}h²+2f_{xy}hk+f_{yy}k²)</span>。"),
          formula("矩阵视角", "二次项可写成 <span class=\"math\">1/2 [h k] H [h k]^T</span>。"),
        ],
        [
          "先选展开中心，再统一用 <span class=\"math\">h=x-a, k=y-b</span> 组织式子，最不容易乱。",
          "若题目要判断局部形状，重点看二次主部的符号结构。",
        ],
        [
          "混合项前的系数 2 容易漏写。",
          "把 Hessian 判别和 Taylor 展开彼此割裂，不知道它们其实是同一件事的两种说法。",
        ],
        ["二元Taylor", "Hessian", "二次近似"]
      ),
      section(
        "14.10",
        "Partial Derivatives with Constrained Variables",
        "受约束变量下的偏导",
        "变量之间若有隐式约束，所谓“偏导”往往已经不是简单地固定其余变量。",
        [
          "要先弄清哪些变量独立、哪些变量依赖，再谈偏导或全导数。",
          "隐函数关系常要求用链式法则和隐式求导共同处理。",
          "这一节本质上是在训练“变量依赖图”的意识。",
        ],
        [
          formula("隐式求导思想", "若 <span class=\"math\">F(x,y,z)=0</span> 且 <span class=\"math\">z=z(x,y)</span>，则 <span class=\"math\">z_x = -F_x/F_z</span>、<span class=\"math\">z_y = -F_y/F_z</span>。"),
          formula("总变化率", "约束下的小变化常用 <span class=\"math\">dz = z_x dx + z_y dy</span> 或更高层链式法则组织。"),
        ],
        [
          "先明确独立变量个数，再决定最终答案应是几元函数。",
          "若题目给出物理约束或几何约束，优先画依赖关系图。",
        ],
        [
          "默认所有变量独立，导致求导路线完全错位。",
          "只会背公式，不知道 <span class=\"math\">F_z ≠ 0</span> 等可解条件从哪里来。",
        ],
        ["隐式求导", "约束变量", "总变化率"]
      ),
    ],
    examChecklist: [
      "会从等高线图读出梯度方向与极值类型。",
      "会把无约束极值和有约束极值分成两条不同流程。",
      "会用切平面和线性化做近似计算，不只会机械求偏导。",
    ],
    demos: [
      {
        id: "surface-demo",
        title: "曲面与切平面 3D 观察器",
        description: "切换曲面并拖动视角，观察点处切平面如何贴近原曲面。",
      },
      {
        id: "lagrange-demo",
        title: "梯度与 Lagrange 图解",
        description: "在等高线与约束曲线的切点上，看梯度为何会平行。",
      },
    ],
  }),
];

const reviewSiteMeta = {
  title: "高等数学五章复习网站",
  subtitle: "依据 PPT Chapter 10-14 结构整理，配合 SVG 图解、参数动画与可拖拽 3D 模型。",
  studyHints: [
    "先按章节总览建立地图，再钻进每一节的“核心概念 + 公式 + 易错点”。",
    "遇到能调参数的地方，优先拖动滑块，看图像、速度方向与几何对象如何变化。",
    "如果准备考试，建议每章先做一次公式墙回忆，再用交互模块修正直觉。",
  ],
};

globalThis.reviewData = reviewSiteData;
globalThis.siteMeta = reviewSiteMeta;
