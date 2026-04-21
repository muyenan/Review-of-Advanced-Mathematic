const appRoot = document.getElementById("app");
const reviewData = globalThis.reviewData;
const siteMeta = globalThis.siteMeta;

const html = String.raw;

const totalSections = reviewData.reduce((sum, chapter) => sum + chapter.sections.length, 0);

function stripMarkup(text) {
  return String(text)
    .replace(/<[^>]+>/g, " ")
    .replace(/\\(sin|cos|ln)\b/g, "$1")
    .replace(/(Σ|∫|lim)_\{([^}]+)\}\^\{([^}]+)\}/g, "$1 $2 $3")
    .replace(/(Σ|∫|lim)_\{([^}]+)\}/g, "$1 $2")
    .replace(/([A-Za-zΑ-Ωα-ω∇ΔλμρRDTFfgurxyz])_\{([^}]+)\}/gu, "$1 $2")
    .replace(/([A-Za-zΑ-Ωα-ω∇ΔλμρRDTFfgurxyz])_([A-Za-z0-9α-ωΑ-Ωθ]+)/gu, "$1 $2")
    .replace(/\^\{([^}]+)\}/g, " $1 ")
    .replace(/\^([A-Za-z0-9()+\-]+)/g, " $1 ")
    .replace(/\s+/g, " ")
    .trim();
}

function escapeAttrValue(text) {
  return stripMarkup(text)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;");
}

function formatMathExpression(expr) {
  return String(expr)
    .replace(/\\(sin|cos|ln)\b/g, "$1")
    .replace(/(Σ|∫|lim)_\{([^}]+)\}\^\{([^}]+)\}/g, "$1<sub>$2</sub><sup>$3</sup>")
    .replace(/(Σ|∫|lim)_\{([^}]+)\}/g, "$1<sub>$2</sub>")
    .replace(/([A-Za-zΑ-Ωα-ω∇ΔλμρRDTFfgurxyz])_\{([^}]+)\}/gu, "$1<sub>$2</sub>")
    .replace(/([A-Za-zΑ-Ωα-ω∇ΔλμρRDTFfgurxyz])_([A-Za-z0-9α-ωΑ-Ωθ]+)/gu, "$1<sub>$2</sub>")
    .replace(/\^\{([^}]+)\}/g, "<sup>$1</sup>")
    .replace(/\^([A-Za-z0-9()+\-]+)/g, "<sup>$1</sup>");
}

function formatRichText(content) {
  return String(content).replace(/<span class="math">([\s\S]*?)<\/span>/g, (_, expr) => `<span class="math">${formatMathExpression(expr)}</span>`);
}

function renderApp() {
  appRoot.innerHTML = html`
    <div class="page-shell">
      <aside class="sidebar">
        <div class="sidebar-brand">
          <div class="brand-mark">∫</div>
          <div>
            <h1>${siteMeta.title}</h1>
            <p>${siteMeta.subtitle}</p>
          </div>
        </div>
        <nav id="chapterNav" class="chapter-nav" aria-label="章节导航"></nav>
        <div class="sidebar-note">
          <h2>复习建议</h2>
          <ul>
            ${siteMeta.studyHints.map((hint) => `<li>${formatRichText(hint)}</li>`).join("")}
          </ul>
        </div>
      </aside>
      <main class="main-content">
        <section class="hero">
          <div class="hero-copy">
            <p class="eyebrow">Thomas Calculus · Chapter 10-14</p>
            <h2>按 PPT 五章结构整理的交互式复习站</h2>
            <p class="hero-text">
              每章都包含：章节地图、公式墙、分节知识点、易错项，以及可以直接拖动参数和视角的图形演示。
            </p>
          </div>
          <div class="hero-metrics">
            <div class="metric-card">
              <span class="metric-value">${reviewData.length}</span>
              <span class="metric-label">章节模块</span>
            </div>
            <div class="metric-card">
              <span class="metric-value">${totalSections}</span>
              <span class="metric-label">PPT 对应小节</span>
            </div>
            <div class="metric-card">
              <span class="metric-value">${reviewData.reduce((sum, chapter) => sum + chapter.demos.length, 0)}</span>
              <span class="metric-label">交互演示</span>
            </div>
          </div>
        </section>
        <section class="search-bar">
          <label for="searchInput">知识点检索</label>
          <input id="searchInput" type="search" placeholder="输入关键词，例如：Taylor、梯度、极坐标面积、叉积……" />
        </section>
        <section class="chapter-strip">
          ${reviewData
            .map(
              (chapter) => html`
                <a class="chapter-pill" href="#${chapter.id}" style="--chapter-accent:${chapter.accent}">
                  <span>${chapter.shortLabel}</span>
                  <strong>${chapter.titleCn}</strong>
                </a>
              `
            )
            .join("")}
        </section>
        <section id="chaptersContainer" class="chapters">
          ${reviewData.map(renderChapter).join("")}
        </section>
      </main>
    </div>
  `;
}

function renderChapter(chapter) {
  return html`
    <section class="chapter-panel" id="${chapter.id}" style="--chapter-accent:${chapter.accent}">
      <header class="chapter-header">
        <div>
          <p class="chapter-kicker">Chapter ${chapter.chapterNumber}</p>
          <h2>${chapter.titleCn}</h2>
          <p class="chapter-en">${chapter.titleEn}</p>
        </div>
        <div class="chapter-actions">
          <button class="ghost-button" type="button" data-expand="${chapter.id}">展开本章</button>
          <button class="ghost-button" type="button" data-collapse="${chapter.id}">收起本章</button>
        </div>
      </header>

      <div class="chapter-grid">
        <article class="chapter-card">
          <h3>本章目标</h3>
          <ul class="bullet-list">
            ${chapter.goals.map((goal) => `<li>${formatRichText(goal)}</li>`).join("")}
          </ul>
        </article>
        <article class="chapter-card">
          <h3>复习路线</h3>
          <ul class="bullet-list">
            ${chapter.studyPath.map((item) => `<li>${formatRichText(item)}</li>`).join("")}
          </ul>
        </article>
      </div>

      <article class="diagram-card">
        <div class="diagram-meta">
          <h3>${chapter.diagram.title}</h3>
          <p>${formatRichText(chapter.diagram.subtitle)}</p>
        </div>
        <div class="diagram-wrap">${chapter.diagram.svg}</div>
      </article>

      <article class="formula-wall chapter-card">
        <h3>公式墙</h3>
        <div class="formula-grid">
          ${chapter.formulaWall
            .map(
              (item) => html`
                <div class="formula-card">
                  <span class="formula-label">${item.label}</span>
                  <div class="formula-body">${formatRichText(item.body)}</div>
                </div>
              `
            )
            .join("")}
        </div>
      </article>

      <div class="topic-stack">
        ${chapter.sections.map((topic, index) => renderTopic(topic, chapter.id, index)).join("")}
      </div>

      <div class="demo-stack">
        ${chapter.demos
          .map(
            (demo) => html`
              <article class="demo-card" data-demo="${demo.id}">
                <div class="demo-card-head">
                  <div>
                    <h3>${demo.title}</h3>
                    <p>${demo.description}</p>
                  </div>
                </div>
                <div class="demo-card-body"></div>
              </article>
            `
          )
          .join("")}
      </div>

      <article class="chapter-card checklist-card">
        <h3>章末自测</h3>
        <ul class="bullet-list">
          ${chapter.examChecklist.map((item) => `<li>${formatRichText(item)}</li>`).join("")}
        </ul>
      </article>
    </section>
  `;
}

function renderTopic(topic, chapterId, index) {
  const searchText = [
    topic.code,
    topic.titleCn,
    topic.titleEn,
    topic.focus,
    ...topic.mustKnow,
    ...topic.workflow,
    ...topic.pitfalls,
    ...topic.tags,
  ]
    .map(stripMarkup)
    .join(" ")
    .toLowerCase();

  return html`
    <details class="topic-card" ${index < 2 ? "open" : ""} data-chapter="${chapterId}" data-search="${escapeAttrValue(searchText)}">
      <summary>
        <div class="topic-summary-main">
          <span class="topic-code">${topic.code}</span>
          <div>
            <h3>${topic.titleCn}</h3>
            <p>${topic.titleEn}</p>
          </div>
        </div>
        <p class="topic-focus">${formatRichText(topic.focus)}</p>
      </summary>
      <div class="topic-body">
        <div class="topic-grid">
          <article class="topic-block">
            <h4>核心概念</h4>
            <ul class="bullet-list">
              ${topic.mustKnow.map((item) => `<li>${formatRichText(item)}</li>`).join("")}
            </ul>
          </article>
          <article class="topic-block">
            <h4>关键公式</h4>
            <div class="mini-formula-grid">
              ${topic.formulas
                .map(
                  (item) => html`
                    <div class="mini-formula-card">
                      <span class="formula-label">${item.label}</span>
                      <div class="formula-body">${formatRichText(item.body)}</div>
                    </div>
                  `
                )
                .join("")}
            </div>
          </article>
          <article class="topic-block">
            <h4>解题路线</h4>
            <ul class="bullet-list">
              ${topic.workflow.map((item) => `<li>${formatRichText(item)}</li>`).join("")}
            </ul>
          </article>
          <article class="topic-block">
            <h4>易错提醒</h4>
            <ul class="bullet-list">
              ${topic.pitfalls.map((item) => `<li>${formatRichText(item)}</li>`).join("")}
            </ul>
          </article>
        </div>
      </div>
    </details>
  `;
}

function renderNav() {
  const nav = document.getElementById("chapterNav");
  nav.innerHTML = reviewData
    .map(
      (chapter) => html`
        <a href="#${chapter.id}" class="nav-link" data-target="${chapter.id}">
          <span>${chapter.shortLabel}</span>
          <strong>${chapter.titleCn}</strong>
        </a>
      `
    )
    .join("");
}

function bindChapterToggles() {
  document.querySelectorAll("[data-expand]").forEach((button) => {
    button.addEventListener("click", () => {
      const panel = document.getElementById(button.dataset.expand);
      panel.querySelectorAll(".topic-card").forEach((detail) => {
        detail.open = true;
      });
    });
  });

  document.querySelectorAll("[data-collapse]").forEach((button) => {
    button.addEventListener("click", () => {
      const panel = document.getElementById(button.dataset.collapse);
      panel.querySelectorAll(".topic-card").forEach((detail) => {
        detail.open = false;
      });
    });
  });
}

function bindSearch() {
  const input = document.getElementById("searchInput");
  const topicCards = [...document.querySelectorAll(".topic-card")];
  const chapterPanels = [...document.querySelectorAll(".chapter-panel")];

  input.value = "";

  input.addEventListener("input", () => {
    const query = input.value.trim().toLowerCase();

    topicCards.forEach((card) => {
      const hit = !query || card.dataset.search.includes(query);
      card.classList.toggle("is-hidden", !hit);
      if (query && hit) {
        card.open = true;
      }
    });

    chapterPanels.forEach((panel) => {
      const visibleTopics = [...panel.querySelectorAll(".topic-card")].filter((card) => !card.classList.contains("is-hidden"));
      panel.classList.toggle("chapter-hidden", visibleTopics.length === 0);
    });
  });
}

function bindActiveNav() {
  const links = [...document.querySelectorAll(".nav-link")];
  const sections = links
    .map((link) => document.getElementById(link.dataset.target))
    .filter(Boolean);

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        links.forEach((link) => {
          link.classList.toggle("is-active", link.dataset.target === entry.target.id);
        });
      });
    },
    { rootMargin: "-30% 0px -55% 0px", threshold: 0.01 }
  );

  sections.forEach((section) => observer.observe(section));
}

function round(value, digits = 3) {
  return Number(value).toFixed(digits);
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function lerp(a, b, t) {
  return a + (b - a) * t;
}

function range(start, end, step = 1) {
  const values = [];
  for (let current = start; current <= end + step * 0.5; current += step) {
    values.push(current);
  }
  return values;
}

function createSvgFrame(width, height, xMin, xMax, yMin, yMax, padding = 34) {
  const innerWidth = width - padding * 2;
  const innerHeight = height - padding * 2;
  return {
    width,
    height,
    padding,
    xMin,
    xMax,
    yMin,
    yMax,
    x(value) {
      return padding + ((value - xMin) / (xMax - xMin || 1)) * innerWidth;
    },
    y(value) {
      return height - padding - ((value - yMin) / (yMax - yMin || 1)) * innerHeight;
    },
  };
}

function pathFromPoints(points, frame) {
  return points
    .map((point, index) => `${index === 0 ? "M" : "L"} ${frame.x(point.x)} ${frame.y(point.y)}`)
    .join(" ");
}

function axisMarkup(frame, ticksX = [], ticksY = []) {
  const xAxisVisible = frame.yMin <= 0 && frame.yMax >= 0;
  const yAxisVisible = frame.xMin <= 0 && frame.xMax >= 0;
  const xAxisY = frame.y(0);
  const yAxisX = frame.x(0);

  return html`
    <rect x="0" y="0" width="${frame.width}" height="${frame.height}" rx="20" fill="#fbf8f1" />
    <rect
      x="${frame.padding}"
      y="${frame.padding}"
      width="${frame.width - frame.padding * 2}"
      height="${frame.height - frame.padding * 2}"
      rx="16"
      fill="none"
      stroke="#d7d2c2"
    />
    ${ticksX
      .map(
        (tick) => html`
          <line x1="${frame.x(tick)}" y1="${frame.padding}" x2="${frame.x(tick)}" y2="${frame.height - frame.padding}" stroke="#ece5d5" />
          <text x="${frame.x(tick)}" y="${frame.height - 10}" text-anchor="middle" fill="#6a6961" font-size="11">${round(tick, 1)}</text>
        `
      )
      .join("")}
    ${ticksY
      .map(
        (tick) => html`
          <line x1="${frame.padding}" y1="${frame.y(tick)}" x2="${frame.width - frame.padding}" y2="${frame.y(tick)}" stroke="#ece5d5" />
          <text x="16" y="${frame.y(tick) + 4}" text-anchor="start" fill="#6a6961" font-size="11">${round(tick, 1)}</text>
        `
      )
      .join("")}
    ${xAxisVisible ? `<line x1="${frame.padding}" y1="${xAxisY}" x2="${frame.width - frame.padding}" y2="${xAxisY}" stroke="#7e7a6e" />` : ""}
    ${yAxisVisible ? `<line x1="${yAxisX}" y1="${frame.padding}" x2="${yAxisX}" y2="${frame.height - frame.padding}" stroke="#7e7a6e" />` : ""}
  `;
}

function rotate3(point, orbit) {
  const { yaw, pitch } = orbit;
  const cosY = Math.cos(yaw);
  const sinY = Math.sin(yaw);
  const cosP = Math.cos(pitch);
  const sinP = Math.sin(pitch);

  const x1 = cosY * point.x + sinY * point.z;
  const z1 = -sinY * point.x + cosY * point.z;
  const y2 = cosP * point.y - sinP * z1;
  const z2 = sinP * point.y + cosP * z1;

  return { x: x1, y: y2, z: z2 };
}

function project3(rotated, width, height, scale = 70) {
  const distance = 8.5;
  const factor = distance / (distance - rotated.z);
  return {
    x: width / 2 + rotated.x * scale * factor,
    y: height / 2 - rotated.y * scale * factor,
    depth: rotated.z,
  };
}

function projectScenePoints(points, orbit, width, height, scale) {
  return points.map((point) => {
    const rotated = rotate3(point, orbit);
    return {
      original: point,
      rotated,
      projected: project3(rotated, width, height, scale),
    };
  });
}

function drawArrow(ctx, from, to, color, lineWidth = 3) {
  ctx.strokeStyle = color;
  ctx.lineWidth = lineWidth;
  ctx.beginPath();
  ctx.moveTo(from.x, from.y);
  ctx.lineTo(to.x, to.y);
  ctx.stroke();

  const angle = Math.atan2(to.y - from.y, to.x - from.x);
  const arrowSize = 8;
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.moveTo(to.x, to.y);
  ctx.lineTo(to.x - arrowSize * Math.cos(angle - Math.PI / 6), to.y - arrowSize * Math.sin(angle - Math.PI / 6));
  ctx.lineTo(to.x - arrowSize * Math.cos(angle + Math.PI / 6), to.y - arrowSize * Math.sin(angle + Math.PI / 6));
  ctx.closePath();
  ctx.fill();
}

function attachOrbit(canvas, orbit, render) {
  let dragging = false;
  let lastX = 0;
  let lastY = 0;

  canvas.addEventListener("pointerdown", (event) => {
    dragging = true;
    lastX = event.clientX;
    lastY = event.clientY;
    canvas.setPointerCapture(event.pointerId);
  });

  canvas.addEventListener("pointermove", (event) => {
    if (!dragging) return;
    const dx = event.clientX - lastX;
    const dy = event.clientY - lastY;
    lastX = event.clientX;
    lastY = event.clientY;
    orbit.yaw += dx * 0.01;
    orbit.pitch = clamp(orbit.pitch + dy * 0.01, -1.35, 1.35);
    render();
  });

  canvas.addEventListener("pointerup", (event) => {
    dragging = false;
    canvas.releasePointerCapture(event.pointerId);
  });
}

function createControlRow(host, controls, note = "") {
  host.innerHTML = html`
    <div class="demo-controls">${controls.join("")}</div>
    ${note ? `<p class="demo-note">${note}</p>` : ""}
  `;
}

function initSequenceSeriesDemo(card) {
  const body = card.querySelector(".demo-card-body");
  body.innerHTML = html`
    <div class="demo-layout two-up">
      <div class="demo-pane">
        <div class="demo-controls"></div>
        <div class="demo-stats"></div>
      </div>
      <div class="visual-stack">
        <svg class="plot-svg" viewBox="0 0 430 220"></svg>
        <svg class="plot-svg" viewBox="0 0 430 220"></svg>
      </div>
    </div>
  `;

  const controls = body.querySelector(".demo-controls");
  const stats = body.querySelector(".demo-stats");
  const [termsSvg, sumsSvg] = body.querySelectorAll("svg");

  const presets = {
    geometric: {
      label: "几何级数 aₙ = 0.72ⁿ",
      term: (n) => 0.72 ** n,
      sequenceConclusion: "aₙ → 0",
      seriesConclusion: "Σaₙ 收敛，部分和趋近于 a/(1-r) 型常数。",
    },
    harmonic: {
      label: "调和级数 aₙ = 1/n",
      term: (n) => 1 / n,
      sequenceConclusion: "aₙ → 0，但速度很慢。",
      seriesConclusion: "Σaₙ 发散，这是“第 n 项趋 0 仍可能发散”的标准反例。",
    },
    alternating: {
      label: "交错调和 aₙ = (-1)ⁿ⁻¹ / n",
      term: (n) => ((n % 2 === 0 ? -1 : 1) / n),
      sequenceConclusion: "aₙ → 0，且符号交替。",
      seriesConclusion: "Σaₙ 条件收敛，部分和在极限附近来回逼近。",
    },
    telescoping: {
      label: "望远镜型 aₙ = 1 / (n(n+1))",
      term: (n) => 1 / (n * (n + 1)),
      sequenceConclusion: "aₙ → 0。",
      seriesConclusion: "Σaₙ 收敛，且部分和会很快稳定。",
    },
    sequenceOnly: {
      label: "数列 aₙ = n / (n+1)",
      term: (n) => n / (n + 1),
      sequenceConclusion: "aₙ → 1。",
      seriesConclusion: "若把它当级数 Σaₙ，则各项不趋 0，所以发散。",
    },
  };

  const state = {
    preset: "geometric",
    count: 24,
  };

  createControlRow(
    controls,
    [
      `<label>模板<select data-role="preset">${Object.entries(presets)
        .map(([key, preset]) => `<option value="${key}">${preset.label}</option>`)
        .join("")}</select></label>`,
      `<label>观察前 N 项<input data-role="count" type="range" min="6" max="60" value="${state.count}" /></label>`,
    ],
    "上图看单个项 aₙ，下图看部分和 Sₙ。两张图不一样，是这一章最重要的思维切换。"
  );

  const presetSelect = controls.querySelector("[data-role='preset']");
  const countInput = controls.querySelector("[data-role='count']");

  const render = () => {
    const preset = presets[state.preset];
    const terms = range(1, state.count, 1).map((n) => ({ x: n, y: preset.term(n) }));
    const sums = [];
    let acc = 0;
    terms.forEach((item) => {
      acc += item.y;
      sums.push({ x: item.x, y: acc });
    });

    const termValues = terms.map((point) => point.y);
    const sumValues = sums.map((point) => point.y);
    const termLimit = state.preset === "sequenceOnly" ? 1 : 0;
    const termMin = Math.min(...termValues, termLimit) - 0.2;
    const termMax = Math.max(...termValues, termLimit) + 0.2;
    const sumMin = Math.min(...sumValues, 0) - 0.4;
    const sumMax = Math.max(...sumValues, 0) + 0.4;
    const termFrame = createSvgFrame(430, 220, 1, state.count, termMin, termMax);
    const sumFrame = createSvgFrame(430, 220, 1, state.count, sumMin, sumMax);

    termsSvg.innerHTML = html`
      ${axisMarkup(termFrame, [1, Math.floor(state.count / 2), state.count], [Math.floor(termMin), 0, Math.ceil(termMax)])}
      <path d="${pathFromPoints(terms, termFrame)}" fill="none" stroke="#1f5f63" stroke-width="2.4" />
      ${terms
        .map((point) => `<circle cx="${termFrame.x(point.x)}" cy="${termFrame.y(point.y)}" r="3.6" fill="#1f5f63" />`)
        .join("")}
      <line x1="${termFrame.padding}" y1="${termFrame.y(termLimit)}" x2="${430 - termFrame.padding}" y2="${termFrame.y(termLimit)}" stroke="#d57f38" stroke-dasharray="7 6" />
      <text x="350" y="32" fill="#5a4c3f" font-size="13">aₙ 的轨迹</text>
    `;

    sumsSvg.innerHTML = html`
      ${axisMarkup(sumFrame, [1, Math.floor(state.count / 2), state.count], [Math.floor(sumMin), 0, Math.ceil(sumMax)])}
      <path d="${pathFromPoints(sums, sumFrame)}" fill="none" stroke="#b06c2a" stroke-width="2.8" />
      ${sums
        .map((point) => `<circle cx="${sumFrame.x(point.x)}" cy="${sumFrame.y(point.y)}" r="3.2" fill="#b06c2a" />`)
        .join("")}
      <text x="314" y="32" fill="#5a4c3f" font-size="13">Sₙ 的轨迹</text>
    `;

    stats.innerHTML = html`
      <div class="stat-grid">
        <div class="stat-chip"><span>a<sub>N</sub></span><strong>${round(terms.at(-1).y, 4)}</strong></div>
        <div class="stat-chip"><span>S<sub>N</sub></span><strong>${round(sums.at(-1).y, 4)}</strong></div>
      </div>
      <div class="demo-explain">
        <p><strong>数列：</strong>${preset.sequenceConclusion}</p>
        <p><strong>级数：</strong>${preset.seriesConclusion}</p>
      </div>
    `;
  };

  presetSelect.addEventListener("change", () => {
    state.preset = presetSelect.value;
    render();
  });
  countInput.addEventListener("input", () => {
    state.count = Number(countInput.value);
    render();
  });

  render();
}

function initTaylorDemo(card) {
  const body = card.querySelector(".demo-card-body");
  body.innerHTML = html`
    <div class="demo-layout two-up">
      <div class="demo-pane">
        <div class="demo-controls"></div>
        <div class="demo-stats"></div>
      </div>
      <svg class="plot-svg large" viewBox="0 0 500 300"></svg>
    </div>
  `;

  const controls = body.querySelector(".demo-controls");
  const stats = body.querySelector(".demo-stats");
  const svg = body.querySelector("svg");

  const presets = {
    exp: {
      label: "e^x",
      domain: [-2.2, 2.2],
      actual: (x) => Math.exp(x),
      taylor: (degree, x) => {
        let sum = 0;
        let fact = 1;
        let power = 1;
        for (let n = 0; n <= degree; n += 1) {
          if (n > 0) {
            fact *= n;
            power *= x;
          }
          sum += power / fact;
        }
        return sum;
      },
    },
    sin: {
      label: "sin x",
      domain: [-Math.PI * 1.4, Math.PI * 1.4],
      actual: (x) => Math.sin(x),
      taylor: (degree, x) => {
        let sum = 0;
        for (let n = 0; n <= degree; n += 1) {
          if (n % 2 === 0) continue;
          let fact = 1;
          for (let k = 2; k <= n; k += 1) fact *= k;
          sum += ((n % 4 === 1 ? 1 : -1) * x ** n) / fact;
        }
        return sum;
      },
    },
    cos: {
      label: "cos x",
      domain: [-Math.PI * 1.4, Math.PI * 1.4],
      actual: (x) => Math.cos(x),
      taylor: (degree, x) => {
        let sum = 0;
        for (let n = 0; n <= degree; n += 1) {
          if (n % 2 === 1) continue;
          let fact = 1;
          for (let k = 2; k <= n; k += 1) fact *= k;
          sum += ((n % 4 === 0 ? 1 : -1) * x ** n) / fact;
        }
        return sum;
      },
    },
    inv: {
      label: "1 / (1 - x)",
      domain: [-0.95, 0.95],
      actual: (x) => 1 / (1 - x),
      taylor: (degree, x) => {
        let sum = 0;
        for (let n = 0; n <= degree; n += 1) {
          sum += x ** n;
        }
        return sum;
      },
    },
    ln: {
      label: "ln(1 + x)",
      domain: [-0.85, 1],
      actual: (x) => Math.log(1 + x),
      taylor: (degree, x) => {
        let sum = 0;
        for (let n = 1; n <= degree; n += 1) {
          sum += ((n % 2 === 1 ? 1 : -1) * x ** n) / n;
        }
        return sum;
      },
    },
  };

  const state = {
    preset: "exp",
    degree: 4,
    x: 0.6,
  };

  createControlRow(
    controls,
    [
      `<label>函数<select data-role="preset">${Object.entries(presets)
        .map(([key, preset]) => `<option value="${key}">${preset.label}</option>`)
        .join("")}</select></label>`,
      `<label>阶数 n<input data-role="degree" type="range" min="0" max="10" value="${state.degree}" /></label>`,
      `<label>x 取值<input data-role="x" type="range" min="-220" max="220" value="${state.x * 100}" /></label>`,
    ],
    "蓝线是真函数，橙线是 Taylor 多项式。拖动阶数时，观察近展开点与远离展开点处的误差差异。"
  );

  const presetSelect = controls.querySelector("[data-role='preset']");
  const degreeInput = controls.querySelector("[data-role='degree']");
  const xInput = controls.querySelector("[data-role='x']");

  const render = () => {
    const preset = presets[state.preset];
    const [xMin, xMax] = preset.domain;
    const points = range(0, 160, 1).map((step) => {
      const x = lerp(xMin, xMax, step / 160);
      return {
        x,
        actual: preset.actual(x),
        approx: preset.taylor(state.degree, x),
      };
    });
    const allY = points.flatMap((item) => [item.actual, item.approx]);
    const yMin = Math.min(...allY);
    const yMax = Math.max(...allY);
    const frame = createSvgFrame(500, 300, xMin, xMax, yMin - 0.4, yMax + 0.4, 42);
    const actualPath = pathFromPoints(points.map((item) => ({ x: item.x, y: item.actual })), frame);
    const approxPath = pathFromPoints(points.map((item) => ({ x: item.x, y: item.approx })), frame);
    const clampedX = clamp(state.x, xMin, xMax);
    const actualValue = preset.actual(clampedX);
    const approxValue = preset.taylor(state.degree, clampedX);
    const error = approxValue - actualValue;

    svg.innerHTML = html`
      ${axisMarkup(frame, [xMin, 0, xMax], [Math.floor(yMin), 0, Math.ceil(yMax)])}
      <path d="${actualPath}" fill="none" stroke="#295a67" stroke-width="3" />
      <path d="${approxPath}" fill="none" stroke="#d57f38" stroke-width="3" stroke-dasharray="8 6" />
      <line x1="${frame.x(clampedX)}" y1="${frame.padding}" x2="${frame.x(clampedX)}" y2="${300 - frame.padding}" stroke="#7e7a6e" stroke-dasharray="6 6" />
      <circle cx="${frame.x(clampedX)}" cy="${frame.y(actualValue)}" r="5" fill="#295a67" />
      <circle cx="${frame.x(clampedX)}" cy="${frame.y(approxValue)}" r="5" fill="#d57f38" />
      <text x="60" y="30" fill="#295a67" font-size="13">真函数</text>
      <text x="120" y="30" fill="#d57f38" font-size="13">Taylor 近似</text>
    `;

    stats.innerHTML = html`
      <div class="stat-grid">
        <div class="stat-chip"><span>x</span><strong>${round(clampedX, 3)}</strong></div>
        <div class="stat-chip"><span>f(x)</span><strong>${round(actualValue, 4)}</strong></div>
        <div class="stat-chip"><span>T<sub>${state.degree}</sub>(x)</span><strong>${round(approxValue, 4)}</strong></div>
        <div class="stat-chip"><span>误差</span><strong>${round(error, 5)}</strong></div>
      </div>
      <p class="demo-explain">展开中心默认为 <strong>x = 0</strong>。离 0 越远，通常需要更高阶项才能保持精度。</p>
    `;
  };

  presetSelect.addEventListener("change", () => {
    state.preset = presetSelect.value;
    render();
  });
  degreeInput.addEventListener("input", () => {
    state.degree = Number(degreeInput.value);
    render();
  });
  xInput.addEventListener("input", () => {
    state.x = Number(xInput.value) / 100;
    render();
  });

  render();
}

function initParametricDemo(card) {
  const body = card.querySelector(".demo-card-body");
  body.innerHTML = html`
    <div class="demo-layout two-up">
      <div class="demo-pane">
        <div class="demo-controls"></div>
        <div class="demo-stats"></div>
      </div>
      <svg class="plot-svg large" viewBox="0 0 460 320"></svg>
    </div>
  `;

  const controls = body.querySelector(".demo-controls");
  const stats = body.querySelector(".demo-stats");
  const svg = body.querySelector("svg");

  const presets = {
    circle: {
      label: "圆 x=2cos t, y=2sin t",
      tMin: 0,
      tMax: Math.PI * 2,
      eval: (t) => ({ x: 2 * Math.cos(t), y: 2 * Math.sin(t) }),
      deriv: (t) => ({ x: -2 * Math.sin(t), y: 2 * Math.cos(t) }),
    },
    cycloid: {
      label: "摆线 x=t-sin t, y=1-cos t",
      tMin: 0,
      tMax: Math.PI * 4,
      eval: (t) => ({ x: t - Math.sin(t), y: 1 - Math.cos(t) }),
      deriv: (t) => ({ x: 1 - Math.cos(t), y: Math.sin(t) }),
    },
    lissajous: {
      label: "Lissajous x=2sin(2t), y=1.6sin(3t)",
      tMin: 0,
      tMax: Math.PI * 2,
      eval: (t) => ({ x: 2 * Math.sin(2 * t), y: 1.6 * Math.sin(3 * t) }),
      deriv: (t) => ({ x: 4 * Math.cos(2 * t), y: 4.8 * Math.cos(3 * t) }),
    },
    parabola: {
      label: "抛物线 x=t, y=t²/4-1",
      tMin: -4,
      tMax: 4,
      eval: (t) => ({ x: t, y: t * t / 4 - 1 }),
      deriv: (t) => ({ x: 1, y: t / 2 }),
    },
  };

  const state = {
    preset: "circle",
    t: 0,
    playing: false,
    frameId: 0,
    lastTime: 0,
  };

  createControlRow(
    controls,
    [
      `<label>曲线<select data-role="preset">${Object.entries(presets)
        .map(([key, preset]) => `<option value="${key}">${preset.label}</option>`)
        .join("")}</select></label>`,
      `<label>参数 t<input data-role="t" type="range" min="0" max="1000" value="0" /></label>`,
      `<button class="accent-button" type="button" data-role="toggle">播放</button>`,
    ],
    "橙色箭头给出切线方向。拖动 t 的时候，重点看“方向是否改变”和“速度是否均匀”。"
  );

  const presetSelect = controls.querySelector("[data-role='preset']");
  const tInput = controls.querySelector("[data-role='t']");
  const toggleButton = controls.querySelector("[data-role='toggle']");

  const syncSlider = () => {
    const preset = presets[state.preset];
    const ratio = (state.t - preset.tMin) / (preset.tMax - preset.tMin || 1);
    tInput.value = String(clamp(ratio * 1000, 0, 1000));
  };

  const render = () => {
    const preset = presets[state.preset];
    const samples = range(0, 220, 1).map((step) => {
      const t = lerp(preset.tMin, preset.tMax, step / 220);
      return preset.eval(t);
    });
    const xs = samples.map((point) => point.x);
    const ys = samples.map((point) => point.y);
    const frame = createSvgFrame(460, 320, Math.min(...xs) - 0.6, Math.max(...xs) + 0.6, Math.min(...ys) - 0.6, Math.max(...ys) + 0.6, 42);
    const path = pathFromPoints(samples, frame);
    const point = preset.eval(state.t);
    const tangent = preset.deriv(state.t);
    const tangentLength = Math.hypot(tangent.x, tangent.y) || 1;
    const arrowEnd = {
      x: point.x + (tangent.x / tangentLength) * 0.75,
      y: point.y + (tangent.y / tangentLength) * 0.75,
    };
    const trail = range(0, 100, 1).map((step) => {
      const t = lerp(preset.tMin, state.t, step / 100);
      return preset.eval(t);
    });

    svg.innerHTML = html`
      ${axisMarkup(frame, [Math.floor(frame.xMin), 0, Math.ceil(frame.xMax)], [Math.floor(frame.yMin), 0, Math.ceil(frame.yMax)])}
      <path d="${path}" fill="none" stroke="#295a67" stroke-width="3" />
      <path d="${pathFromPoints(trail, frame)}" fill="none" stroke="#d57f38" stroke-width="4" stroke-linecap="round" opacity="0.6" />
      <line x1="${frame.x(point.x)}" y1="${frame.y(point.y)}" x2="${frame.x(arrowEnd.x)}" y2="${frame.y(arrowEnd.y)}" stroke="#d57f38" stroke-width="3" />
      <circle cx="${frame.x(point.x)}" cy="${frame.y(point.y)}" r="6" fill="#d57f38" />
      <circle cx="${frame.x(point.x)}" cy="${frame.y(point.y)}" r="13" fill="rgba(213, 127, 56, 0.12)" />
    `;

    stats.innerHTML = html`
      <div class="stat-grid">
        <div class="stat-chip"><span>t</span><strong>${round(state.t, 3)}</strong></div>
        <div class="stat-chip"><span>x(t)</span><strong>${round(point.x, 3)}</strong></div>
        <div class="stat-chip"><span>y(t)</span><strong>${round(point.y, 3)}</strong></div>
        <div class="stat-chip"><span>dy/dx</span><strong>${round(tangent.y / (tangent.x || Number.EPSILON), 3)}</strong></div>
      </div>
      <p class="demo-explain">当前切向量为 <strong>⟨${round(tangent.x, 3)}, ${round(tangent.y, 3)}⟩</strong>，它决定了曲线在这一刻的前进方向。</p>
    `;
  };

  const tick = (time) => {
    if (!state.playing) return;
    const preset = presets[state.preset];
    if (!state.lastTime) state.lastTime = time;
    const delta = (time - state.lastTime) / 1000;
    state.lastTime = time;
    state.t += delta * (preset.tMax - preset.tMin) * 0.18;
    if (state.t > preset.tMax) {
      state.t = preset.tMin;
    }
    syncSlider();
    render();
    state.frameId = requestAnimationFrame(tick);
  };

  const stop = () => {
    state.playing = false;
    state.lastTime = 0;
    toggleButton.textContent = "播放";
    cancelAnimationFrame(state.frameId);
  };

  presetSelect.addEventListener("change", () => {
    state.preset = presetSelect.value;
    state.t = presets[state.preset].tMin;
    syncSlider();
    render();
  });
  tInput.addEventListener("input", () => {
    const preset = presets[state.preset];
    state.t = lerp(preset.tMin, preset.tMax, Number(tInput.value) / 1000);
    render();
  });
  toggleButton.addEventListener("click", () => {
    if (state.playing) {
      stop();
      return;
    }
    state.playing = true;
    toggleButton.textContent = "暂停";
    state.frameId = requestAnimationFrame(tick);
  });

  state.t = presets[state.preset].tMin;
  render();
}

function initPolarDemo(card) {
  const body = card.querySelector(".demo-card-body");
  body.innerHTML = html`
    <div class="demo-layout two-up">
      <div class="demo-pane">
        <div class="demo-controls"></div>
        <div class="demo-stats"></div>
      </div>
      <svg class="plot-svg large" viewBox="0 0 460 320"></svg>
    </div>
  `;

  const controls = body.querySelector(".demo-controls");
  const stats = body.querySelector(".demo-stats");
  const svg = body.querySelector("svg");

  const presets = {
    rose: {
      label: "玫瑰线 r = 2 cos 4θ",
      eval: (theta, state) => 2 * Math.cos(4 * theta),
      thetaMax: Math.PI * 2,
      showDirectrix: false,
      describe: () => "当 k=4 时会出现 8 个花瓣，负半径会让花瓣落到对面。",
    },
    cardioid: {
      label: "心形线 r = 1.5(1 + cos θ)",
      eval: (theta, state) => 1.5 * (1 + Math.cos(theta)),
      thetaMax: Math.PI * 2,
      showDirectrix: false,
      describe: () => "心形线在 θ=π 处经过极点，尖点是识别标志。",
    },
    spiral: {
      label: "阿基米德螺线 r = 0.22θ",
      eval: (theta, state) => 0.22 * theta,
      thetaMax: Math.PI * 6,
      showDirectrix: false,
      describe: () => "半径随 θ 线性增长，所以相邻两圈的径向间距恒定。",
    },
    conic: {
      label: "圆锥曲线 r = ed / (1 + e cos θ)",
      eval: (theta, state) => (state.eccentricity * 2) / (1 + state.eccentricity * Math.cos(theta)),
      thetaMax: Math.PI * 2,
      showDirectrix: true,
      describe: (state) => `当前偏心率 e=${round(state.eccentricity, 2)}：${state.eccentricity < 1 ? "椭圆" : state.eccentricity === 1 ? "抛物线边界" : "双曲线"}`,
    },
  };

  const state = {
    preset: "rose",
    theta: 0,
    eccentricity: 0.7,
    playing: false,
    frameId: 0,
    lastTime: 0,
  };

  createControlRow(
    controls,
    [
      `<label>图形<select data-role="preset">${Object.entries(presets)
        .map(([key, preset]) => `<option value="${key}">${preset.label}</option>`)
        .join("")}</select></label>`,
      `<label>θ<input data-role="theta" type="range" min="0" max="1000" value="0" /></label>`,
      `<label class="conditional-control">偏心率 e<input data-role="e" type="range" min="30" max="170" value="70" /></label>`,
      `<button class="accent-button" type="button" data-role="toggle">播放</button>`,
    ],
    "当前半径会用橙色射线表示。若 r 为负，点会落到反方向，这是极坐标最容易错的地方。"
  );

  const presetSelect = controls.querySelector("[data-role='preset']");
  const thetaInput = controls.querySelector("[data-role='theta']");
  const eInput = controls.querySelector("[data-role='e']");
  const toggleButton = controls.querySelector("[data-role='toggle']");
  const conditionalControl = controls.querySelector(".conditional-control");

  const syncThetaSlider = () => {
    const preset = presets[state.preset];
    thetaInput.value = String((state.theta / preset.thetaMax) * 1000);
  };

  const render = () => {
    const preset = presets[state.preset];
    conditionalControl.classList.toggle("is-visible", state.preset === "conic");
    const samples = range(0, 300, 1).map((step) => {
      const theta = (step / 300) * preset.thetaMax;
      const r = preset.eval(theta, state);
      return {
        x: r * Math.cos(theta),
        y: r * Math.sin(theta),
      };
    });
    const xs = samples.map((point) => point.x);
    const ys = samples.map((point) => point.y);
    const limit = Math.max(Math.abs(Math.min(...xs)), Math.abs(Math.max(...xs)), Math.abs(Math.min(...ys)), Math.abs(Math.max(...ys)), 2.5) + 0.8;
    const frame = createSvgFrame(460, 320, -limit, limit, -limit, limit, 44);
    const currentR = preset.eval(state.theta, state);
    const current = { x: currentR * Math.cos(state.theta), y: currentR * Math.sin(state.theta) };
    const axisTicks = [-Math.floor(limit / 2), 0, Math.floor(limit / 2)];

    svg.innerHTML = html`
      ${axisMarkup(frame, axisTicks, axisTicks)}
      <circle cx="${frame.x(0)}" cy="${frame.y(0)}" r="${(frame.x(1) - frame.x(0)) * 1.5}" fill="none" stroke="#ece5d5" />
      <path d="${pathFromPoints(samples, frame)}" fill="none" stroke="#295a67" stroke-width="3" />
      <line x1="${frame.x(0)}" y1="${frame.y(0)}" x2="${frame.x(current.x)}" y2="${frame.y(current.y)}" stroke="#d57f38" stroke-width="3" />
      <circle cx="${frame.x(current.x)}" cy="${frame.y(current.y)}" r="6" fill="#d57f38" />
      ${
        preset.showDirectrix
          ? `<line x1="${frame.x(2)}" y1="${frame.padding}" x2="${frame.x(2)}" y2="${320 - frame.padding}" stroke="#8a4c3c" stroke-dasharray="8 6" />
             <text x="${frame.x(2) + 8}" y="${frame.padding + 18}" fill="#8a4c3c" font-size="12">directrix x = 2</text>`
          : ""
      }
      <text x="62" y="30" fill="#295a67" font-size="13">极坐标轨迹</text>
    `;

    stats.innerHTML = html`
      <div class="stat-grid">
        <div class="stat-chip"><span>θ</span><strong>${round(state.theta, 3)}</strong></div>
        <div class="stat-chip"><span>r(θ)</span><strong>${round(currentR, 3)}</strong></div>
        <div class="stat-chip"><span>x</span><strong>${round(current.x, 3)}</strong></div>
        <div class="stat-chip"><span>y</span><strong>${round(current.y, 3)}</strong></div>
      </div>
      <p class="demo-explain">${preset.describe(state)}</p>
    `;
  };

  const tick = (time) => {
    if (!state.playing) return;
    const preset = presets[state.preset];
    if (!state.lastTime) state.lastTime = time;
    const delta = (time - state.lastTime) / 1000;
    state.lastTime = time;
    state.theta += delta * preset.thetaMax * 0.16;
    if (state.theta > preset.thetaMax) state.theta = 0;
    syncThetaSlider();
    render();
    state.frameId = requestAnimationFrame(tick);
  };

  const stop = () => {
    state.playing = false;
    state.lastTime = 0;
    toggleButton.textContent = "播放";
    cancelAnimationFrame(state.frameId);
  };

  presetSelect.addEventListener("change", () => {
    state.preset = presetSelect.value;
    state.theta = 0;
    syncThetaSlider();
    render();
  });
  thetaInput.addEventListener("input", () => {
    const preset = presets[state.preset];
    state.theta = (Number(thetaInput.value) / 1000) * preset.thetaMax;
    render();
  });
  eInput.addEventListener("input", () => {
    state.eccentricity = Number(eInput.value) / 100;
    render();
  });
  toggleButton.addEventListener("click", () => {
    if (state.playing) {
      stop();
      return;
    }
    state.playing = true;
    toggleButton.textContent = "暂停";
    state.frameId = requestAnimationFrame(tick);
  });

  render();
}

function drawCanvasBackdrop(ctx, width, height) {
  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = "#fbf7ef";
  ctx.fillRect(0, 0, width, height);
  ctx.strokeStyle = "#eee5d5";
  ctx.lineWidth = 1;
  for (let x = 24; x < width; x += 36) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, height);
    ctx.stroke();
  }
  for (let y = 24; y < height; y += 36) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(width, y);
    ctx.stroke();
  }
}

function initVectorDemo(card) {
  const body = card.querySelector(".demo-card-body");
  body.innerHTML = html`
    <div class="demo-layout two-up">
      <div class="demo-pane">
        <div class="demo-controls"></div>
        <div class="demo-stats"></div>
      </div>
      <canvas class="scene-canvas" width="520" height="320"></canvas>
    </div>
  `;

  const controls = body.querySelector(".demo-controls");
  const stats = body.querySelector(".demo-stats");
  const canvas = body.querySelector("canvas");
  const ctx = canvas.getContext("2d");

  const presets = {
    generic: {
      label: "一般位置",
      a: { x: 2.2, y: 1.4, z: 1.6 },
      b: { x: 1.2, y: 2.4, z: 0.9 },
    },
    orthogonal: {
      label: "接近正交",
      a: { x: 2.4, y: 0.6, z: 1.1 },
      b: { x: -0.4, y: 2.1, z: 1.8 },
    },
    parallelish: {
      label: "接近平行",
      a: { x: 2.2, y: 1.2, z: 0.8 },
      b: { x: 1.8, y: 0.9, z: 0.7 },
    },
  };

  const orbit = { yaw: -0.7, pitch: 0.5 };
  const state = { preset: "generic" };

  createControlRow(
    controls,
    [
      `<label>向量关系<select data-role="preset">${Object.entries(presets)
        .map(([key, preset]) => `<option value="${key}">${preset.label}</option>`)
        .join("")}</select></label>`,
    ],
    "拖动画布可以旋转视角。绿色是 a，橙色是 b，紫色是 a×b，虚线是 a 在 b 上的投影。"
  );

  const presetSelect = controls.querySelector("[data-role='preset']");

  const render = () => {
    const preset = presets[state.preset];
    const a = preset.a;
    const b = preset.b;
    const dot = a.x * b.x + a.y * b.y + a.z * b.z;
    const cross = {
      x: a.y * b.z - a.z * b.y,
      y: a.z * b.x - a.x * b.z,
      z: a.x * b.y - a.y * b.x,
    };
    const projScale = dot / (b.x * b.x + b.y * b.y + b.z * b.z);
    const projection = { x: projScale * b.x, y: projScale * b.y, z: projScale * b.z };
    const angle = Math.acos(clamp(dot / ((Math.hypot(a.x, a.y, a.z) * Math.hypot(b.x, b.y, b.z)) || 1), -1, 1));

    drawCanvasBackdrop(ctx, canvas.width, canvas.height);

    const axes = [
      [{ x: 0, y: 0, z: 0 }, { x: 3.2, y: 0, z: 0 }, "#8a5e54"],
      [{ x: 0, y: 0, z: 0 }, { x: 0, y: 3.2, z: 0 }, "#6f8d42"],
      [{ x: 0, y: 0, z: 0 }, { x: 0, y: 0, z: 3.2 }, "#3c6f8f"],
    ];
    axes.forEach(([from, to, color]) => {
      const [p1, p2] = projectScenePoints([from, to], orbit, canvas.width, canvas.height, 64).map((item) => item.projected);
      drawArrow(ctx, p1, p2, color, 2.2);
    });

    const plane = [a, { x: a.x + b.x, y: a.y + b.y, z: a.z + b.z }, b, { x: 0, y: 0, z: 0 }];
    const planePoints = projectScenePoints(plane, orbit, canvas.width, canvas.height, 64);
    ctx.fillStyle = "rgba(41, 90, 103, 0.11)";
    ctx.beginPath();
    planePoints.forEach((item, index) => {
      const point = item.projected;
      if (index === 0) ctx.moveTo(point.x, point.y);
      else ctx.lineTo(point.x, point.y);
    });
    ctx.closePath();
    ctx.fill();

    const drawVector3 = (vector, color) => {
      const [origin, end] = projectScenePoints([{ x: 0, y: 0, z: 0 }, vector], orbit, canvas.width, canvas.height, 64).map((item) => item.projected);
      drawArrow(ctx, origin, end, color, 3.6);
      return end;
    };

    drawVector3(a, "#1f7d75");
    drawVector3(b, "#c37332");
    drawVector3(cross, "#7e5a93");

    const projectionPoints = projectScenePoints([a, projection], orbit, canvas.width, canvas.height, 64);
    ctx.strokeStyle = "#7e7a6e";
    ctx.setLineDash([8, 6]);
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(projectionPoints[0].projected.x, projectionPoints[0].projected.y);
    ctx.lineTo(projectionPoints[1].projected.x, projectionPoints[1].projected.y);
    ctx.stroke();
    ctx.setLineDash([]);

    stats.innerHTML = html`
      <div class="stat-grid">
        <div class="stat-chip"><span>a·b</span><strong>${round(dot, 3)}</strong></div>
        <div class="stat-chip"><span>夹角</span><strong>${round((angle * 180) / Math.PI, 2)}°</strong></div>
        <div class="stat-chip"><span>|a×b|</span><strong>${round(Math.hypot(cross.x, cross.y, cross.z), 3)}</strong></div>
      </div>
      <p class="demo-explain">点积告诉你夹角与投影，叉积给出法向量与面积。看不见空间时，就拖动视角直到平面和法向量关系变得明显。</p>
    `;
  };

  presetSelect.addEventListener("change", () => {
    state.preset = presetSelect.value;
    render();
  });

  attachOrbit(canvas, orbit, render);
  render();
}

function sampleSurface(fn, xMin, xMax, yMin, yMax, xSteps, ySteps) {
  const patches = [];
  for (let i = 0; i < xSteps; i += 1) {
    const x1 = lerp(xMin, xMax, i / xSteps);
    const x2 = lerp(xMin, xMax, (i + 1) / xSteps);
    for (let j = 0; j < ySteps; j += 1) {
      const y1 = lerp(yMin, yMax, j / ySteps);
      const y2 = lerp(yMin, yMax, (j + 1) / ySteps);
      patches.push([
        { x: x1, y: fn(x1, y1), z: y1 },
        { x: x2, y: fn(x2, y1), z: y1 },
        { x: x2, y: fn(x2, y2), z: y2 },
        { x: x1, y: fn(x1, y2), z: y2 },
      ]);
    }
  }
  return patches;
}

function sampleParametricSurface(fn, uMin, uMax, vMin, vMax, uSteps, vSteps) {
  const patches = [];
  for (let i = 0; i < uSteps; i += 1) {
    const u1 = lerp(uMin, uMax, i / uSteps);
    const u2 = lerp(uMin, uMax, (i + 1) / uSteps);
    for (let j = 0; j < vSteps; j += 1) {
      const v1 = lerp(vMin, vMax, j / vSteps);
      const v2 = lerp(vMin, vMax, (j + 1) / vSteps);
      patches.push([fn(u1, v1), fn(u2, v1), fn(u2, v2), fn(u1, v2)]);
    }
  }
  return patches;
}

function drawPatches(ctx, patches, orbit, width, height, scale, fillStyle, strokeStyle) {
  const projectedPatches = patches.map((patch) => {
    const transformed = patch.map((point) => {
      const rotated = rotate3(point, orbit);
      return { rotated, projected: project3(rotated, width, height, scale) };
    });
    const depth = transformed.reduce((sum, item) => sum + item.rotated.z, 0) / transformed.length;
    return { transformed, depth };
  });

  projectedPatches.sort((a, b) => a.depth - b.depth);
  projectedPatches.forEach((patch) => {
    ctx.beginPath();
    patch.transformed.forEach((item, index) => {
      const p = item.projected;
      if (index === 0) ctx.moveTo(p.x, p.y);
      else ctx.lineTo(p.x, p.y);
    });
    ctx.closePath();
    ctx.fillStyle = fillStyle;
    ctx.fill();
    ctx.strokeStyle = strokeStyle;
    ctx.lineWidth = 1;
    ctx.stroke();
  });
}

function initQuadricDemo(card) {
  const body = card.querySelector(".demo-card-body");
  body.innerHTML = html`
    <div class="demo-layout two-up">
      <div class="demo-pane">
        <div class="demo-controls"></div>
        <div class="demo-stats"></div>
      </div>
      <canvas class="scene-canvas" width="520" height="320"></canvas>
    </div>
  `;

  const controls = body.querySelector(".demo-controls");
  const stats = body.querySelector(".demo-stats");
  const canvas = body.querySelector("canvas");
  const ctx = canvas.getContext("2d");

  const surfaces = {
    ellipsoid: {
      label: "椭球面",
      patches: () =>
        sampleParametricSurface(
          (u, v) => ({
            x: 2.2 * Math.cos(u) * Math.cos(v),
            y: 1.4 * Math.sin(v),
            z: 1.6 * Math.sin(u) * Math.cos(v),
          }),
          0,
          Math.PI * 2,
          -Math.PI / 2,
          Math.PI / 2,
          20,
          12
        ),
      note: "三个轴长度不同，但每个水平截面都是椭圆。",
    },
    paraboloid: {
      label: "椭圆抛物面",
      patches: () => sampleSurface((x, z) => (x * x) / 4 + (z * z) / 5 - 1.4, -2.5, 2.5, -2.5, 2.5, 18, 18),
      note: "像开口向上的碗，水平截面是椭圆。",
    },
    saddle: {
      label: "双曲抛物面",
      patches: () => sampleSurface((x, z) => x * x / 4 - z * z / 4, -2.8, 2.8, -2.8, 2.8, 18, 18),
      note: "典型马鞍面，一条方向向上弯，另一条方向向下弯。",
    },
    cone: {
      label: "圆锥面",
      patches: () =>
        sampleParametricSurface(
          (u, v) => ({
            x: (1.6 - v) * Math.cos(u),
            y: v - 0.8,
            z: (1.6 - v) * Math.sin(u),
          }),
          0,
          Math.PI * 2,
          -1.6,
          1.4,
          22,
          16
        ),
      note: "顶点附近最尖，水平截面是圆。",
    },
  };

  const orbit = { yaw: -0.65, pitch: 0.5 };
  const state = { surface: "ellipsoid" };

  createControlRow(
    controls,
    [
      `<label>曲面<select data-role="surface">${Object.entries(surfaces)
        .map(([key, surface]) => `<option value="${key}">${surface.label}</option>`)
        .join("")}</select></label>`,
    ],
    "拖动画布后，注意观察不同方向的截面会变成什么曲线，这比死记曲面名称更重要。"
  );

  const surfaceSelect = controls.querySelector("[data-role='surface']");

  const render = () => {
    drawCanvasBackdrop(ctx, canvas.width, canvas.height);
    const surface = surfaces[state.surface];
    drawPatches(ctx, surface.patches(), orbit, canvas.width, canvas.height, 66, "rgba(41, 90, 103, 0.16)", "#295a67");
    stats.innerHTML = `<p class="demo-explain">${surface.note}</p>`;
  };

  surfaceSelect.addEventListener("change", () => {
    state.surface = surfaceSelect.value;
    render();
  });

  attachOrbit(canvas, orbit, render);
  render();
}

function initSpaceMotionDemo(card) {
  const body = card.querySelector(".demo-card-body");
  body.innerHTML = html`
    <div class="demo-layout two-up">
      <div class="demo-pane">
        <div class="demo-controls"></div>
        <div class="demo-stats"></div>
      </div>
      <canvas class="scene-canvas" width="520" height="320"></canvas>
    </div>
  `;

  const controls = body.querySelector(".demo-controls");
  const stats = body.querySelector(".demo-stats");
  const canvas = body.querySelector("canvas");
  const ctx = canvas.getContext("2d");

  const presets = {
    helix: {
      label: "螺旋线",
      tMin: 0,
      tMax: Math.PI * 4,
      eval: (t) => ({ x: 1.5 * Math.cos(t), y: t / 2 - 3, z: 1.5 * Math.sin(t) }),
      velocity: (t) => ({ x: -1.5 * Math.sin(t), y: 0.5, z: 1.5 * Math.cos(t) }),
      acceleration: (t) => ({ x: -1.5 * Math.cos(t), y: 0, z: -1.5 * Math.sin(t) }),
    },
    projectile: {
      label: "空间抛体",
      tMin: 0,
      tMax: 4.2,
      eval: (t) => ({ x: 1.8 * t - 3, y: 3.4 * t - 0.55 * t * t - 2, z: 0.9 * t - 1.6 }),
      velocity: (t) => ({ x: 1.8, y: 3.4 - 1.1 * t, z: 0.9 }),
      acceleration: () => ({ x: 0, y: -1.1, z: 0 }),
    },
    cubic: {
      label: "扭曲三次曲线",
      tMin: -1.8,
      tMax: 1.8,
      eval: (t) => ({ x: 1.6 * t, y: t * t - 1.2, z: 0.9 * t * t * t }),
      velocity: (t) => ({ x: 1.6, y: 2 * t, z: 2.7 * t * t }),
      acceleration: (t) => ({ x: 0, y: 2, z: 5.4 * t }),
    },
  };

  const orbit = { yaw: -0.72, pitch: 0.48 };
  const state = { preset: "helix", t: 0, playing: false, frameId: 0, lastTime: 0 };

  createControlRow(
    controls,
    [
      `<label>轨迹<select data-role="preset">${Object.entries(presets)
        .map(([key, preset]) => `<option value="${key}">${preset.label}</option>`)
        .join("")}</select></label>`,
      `<label>t<input data-role="t" type="range" min="0" max="1000" value="0" /></label>`,
      `<button class="accent-button" type="button" data-role="toggle">播放</button>`,
    ],
    "绿色箭头表示速度，橙色箭头表示加速度。速度沿切线，但加速度未必沿切线。"
  );

  const presetSelect = controls.querySelector("[data-role='preset']");
  const tInput = controls.querySelector("[data-role='t']");
  const toggleButton = controls.querySelector("[data-role='toggle']");

  const syncSlider = () => {
    const preset = presets[state.preset];
    tInput.value = String(((state.t - preset.tMin) / (preset.tMax - preset.tMin)) * 1000);
  };

  const render = () => {
    const preset = presets[state.preset];
    drawCanvasBackdrop(ctx, canvas.width, canvas.height);
    const samples = range(0, 180, 1).map((step) => preset.eval(lerp(preset.tMin, preset.tMax, step / 180)));
    const projectedCurve = projectScenePoints(samples, orbit, canvas.width, canvas.height, 70).map((item) => item.projected);
    ctx.strokeStyle = "#295a67";
    ctx.lineWidth = 3;
    ctx.beginPath();
    projectedCurve.forEach((point, index) => {
      if (index === 0) ctx.moveTo(point.x, point.y);
      else ctx.lineTo(point.x, point.y);
    });
    ctx.stroke();

    const point = preset.eval(state.t);
    const velocity = preset.velocity(state.t);
    const acceleration = preset.acceleration(state.t);
    const [p0, pv, pa] = projectScenePoints(
      [
        point,
        { x: point.x + velocity.x * 0.5, y: point.y + velocity.y * 0.5, z: point.z + velocity.z * 0.5 },
        { x: point.x + acceleration.x * 0.9, y: point.y + acceleration.y * 0.9, z: point.z + acceleration.z * 0.9 },
      ],
      orbit,
      canvas.width,
      canvas.height,
      70
    ).map((item) => item.projected);

    ctx.fillStyle = "#d57f38";
    ctx.beginPath();
    ctx.arc(p0.x, p0.y, 6, 0, Math.PI * 2);
    ctx.fill();
    drawArrow(ctx, p0, pv, "#2e7d54", 3.4);
    drawArrow(ctx, p0, pa, "#d57f38", 3.4);

    stats.innerHTML = html`
      <div class="stat-grid">
        <div class="stat-chip"><span>|v|</span><strong>${round(Math.hypot(velocity.x, velocity.y, velocity.z), 3)}</strong></div>
        <div class="stat-chip"><span>|a|</span><strong>${round(Math.hypot(acceleration.x, acceleration.y, acceleration.z), 3)}</strong></div>
        <div class="stat-chip"><span>t</span><strong>${round(state.t, 3)}</strong></div>
      </div>
      <p class="demo-explain">速度决定切线方向；若加速度不与速度同向，就说明运动正在转弯。</p>
    `;
  };

  const tick = (time) => {
    if (!state.playing) return;
    const preset = presets[state.preset];
    if (!state.lastTime) state.lastTime = time;
    const delta = (time - state.lastTime) / 1000;
    state.lastTime = time;
    state.t += delta * (preset.tMax - preset.tMin) * 0.18;
    if (state.t > preset.tMax) state.t = preset.tMin;
    syncSlider();
    render();
    state.frameId = requestAnimationFrame(tick);
  };

  const stop = () => {
    state.playing = false;
    state.lastTime = 0;
    toggleButton.textContent = "播放";
    cancelAnimationFrame(state.frameId);
  };

  presetSelect.addEventListener("change", () => {
    state.preset = presetSelect.value;
    state.t = presets[state.preset].tMin;
    syncSlider();
    render();
  });
  tInput.addEventListener("input", () => {
    const preset = presets[state.preset];
    state.t = lerp(preset.tMin, preset.tMax, Number(tInput.value) / 1000);
    render();
  });
  toggleButton.addEventListener("click", () => {
    if (state.playing) {
      stop();
      return;
    }
    state.playing = true;
    toggleButton.textContent = "暂停";
    state.frameId = requestAnimationFrame(tick);
  });

  attachOrbit(canvas, orbit, render);
  state.t = presets[state.preset].tMin;
  render();
}

function initPolarMotionDemo(card) {
  const body = card.querySelector(".demo-card-body");
  body.innerHTML = html`
    <div class="demo-layout two-up">
      <div class="demo-pane">
        <div class="demo-controls"></div>
        <div class="demo-stats"></div>
      </div>
      <svg class="plot-svg large" viewBox="0 0 460 320"></svg>
    </div>
  `;

  const controls = body.querySelector(".demo-controls");
  const stats = body.querySelector(".demo-stats");
  const svg = body.querySelector("svg");

  const state = { t: 0, playing: false, frameId: 0, lastTime: 0 };

  createControlRow(
    controls,
    [
      `<label>t<input data-role="t" type="range" min="0" max="1000" value="0" /></label>`,
      `<button class="accent-button" type="button" data-role="toggle">播放</button>`,
    ],
    "这里演示的运动满足 r(t)=1.4+0.45sin(1.6t)，θ(t)=0.9t。蓝线是轨迹，绿色是径向分量，橙色是横向分量。"
  );

  const tInput = controls.querySelector("[data-role='t']");
  const toggleButton = controls.querySelector("[data-role='toggle']");

  const curve = (t) => {
    const r = 1.4 + 0.45 * Math.sin(1.6 * t);
    const theta = 0.9 * t;
    return { r, theta };
  };
  const velocityComponents = (t) => {
    const r = 1.4 + 0.45 * Math.sin(1.6 * t);
    const theta = 0.9 * t;
    const rDot = 0.72 * Math.cos(1.6 * t);
    const thetaDot = 0.9;
    return {
      r,
      theta,
      radial: rDot,
      tangential: r * thetaDot,
    };
  };

  const render = () => {
    const points = range(0, 180, 1).map((step) => {
      const t = (step / 180) * 8;
      const { r, theta } = curve(t);
      return { x: r * Math.cos(theta), y: r * Math.sin(theta) };
    });
    const frame = createSvgFrame(460, 320, -2.6, 2.6, -2.2, 2.2, 42);
    const { r, theta, radial, tangential } = velocityComponents(state.t);
    const point = { x: r * Math.cos(theta), y: r * Math.sin(theta) };
    const radialUnit = { x: Math.cos(theta), y: Math.sin(theta) };
    const tangentialUnit = { x: -Math.sin(theta), y: Math.cos(theta) };
    const radialEnd = { x: point.x + radialUnit.x * radial * 0.45, y: point.y + radialUnit.y * radial * 0.45 };
    const tangentialEnd = { x: point.x + tangentialUnit.x * tangential * 0.35, y: point.y + tangentialUnit.y * tangential * 0.35 };

    svg.innerHTML = html`
      ${axisMarkup(frame, [-2, 0, 2], [-2, 0, 2])}
      <path d="${pathFromPoints(points, frame)}" fill="none" stroke="#295a67" stroke-width="3" />
      <line x1="${frame.x(0)}" y1="${frame.y(0)}" x2="${frame.x(point.x)}" y2="${frame.y(point.y)}" stroke="#7e7a6e" stroke-dasharray="7 6" />
      <line x1="${frame.x(point.x)}" y1="${frame.y(point.y)}" x2="${frame.x(radialEnd.x)}" y2="${frame.y(radialEnd.y)}" stroke="#2e7d54" stroke-width="3" />
      <line x1="${frame.x(point.x)}" y1="${frame.y(point.y)}" x2="${frame.x(tangentialEnd.x)}" y2="${frame.y(tangentialEnd.y)}" stroke="#d57f38" stroke-width="3" />
      <circle cx="${frame.x(point.x)}" cy="${frame.y(point.y)}" r="6" fill="#d57f38" />
      <text x="${frame.x(radialEnd.x) + 6}" y="${frame.y(radialEnd.y) - 6}" fill="#2e7d54" font-size="12">ṙuᵣ</text>
      <text x="${frame.x(tangentialEnd.x) + 6}" y="${frame.y(tangentialEnd.y) - 6}" fill="#d57f38" font-size="12">rθ̇uθ</text>
    `;

    stats.innerHTML = html`
      <div class="stat-grid">
        <div class="stat-chip"><span>r</span><strong>${round(r, 3)}</strong></div>
        <div class="stat-chip"><span>θ</span><strong>${round(theta, 3)}</strong></div>
        <div class="stat-chip"><span>径向分量</span><strong>${round(radial, 3)}</strong></div>
        <div class="stat-chip"><span>横向分量</span><strong>${round(tangential, 3)}</strong></div>
      </div>
      <p class="demo-explain">如果只改半径，点沿射线移动；如果只改角度，点沿圆周切向移动。真实速度是二者叠加。</p>
    `;
  };

  const tick = (time) => {
    if (!state.playing) return;
    if (!state.lastTime) state.lastTime = time;
    const delta = (time - state.lastTime) / 1000;
    state.lastTime = time;
    state.t += delta * 1.1;
    if (state.t > 8) state.t = 0;
    tInput.value = String((state.t / 8) * 1000);
    render();
    state.frameId = requestAnimationFrame(tick);
  };

  toggleButton.addEventListener("click", () => {
    if (state.playing) {
      state.playing = false;
      state.lastTime = 0;
      toggleButton.textContent = "播放";
      cancelAnimationFrame(state.frameId);
      return;
    }
    state.playing = true;
    toggleButton.textContent = "暂停";
    state.frameId = requestAnimationFrame(tick);
  });

  tInput.addEventListener("input", () => {
    state.t = (Number(tInput.value) / 1000) * 8;
    render();
  });

  render();
}

function initSurfaceDemo(card) {
  const body = card.querySelector(".demo-card-body");
  body.innerHTML = html`
    <div class="demo-layout two-up">
      <div class="demo-pane">
        <div class="demo-controls"></div>
        <div class="demo-stats"></div>
      </div>
      <canvas class="scene-canvas" width="520" height="320"></canvas>
    </div>
  `;

  const controls = body.querySelector(".demo-controls");
  const stats = body.querySelector(".demo-stats");
  const canvas = body.querySelector("canvas");
  const ctx = canvas.getContext("2d");

  const surfaces = {
    paraboloid: {
      label: "z = x²/4 + y²/4",
      f: (x, y) => x * x / 4 + y * y / 4 - 1.8,
      fx: (x) => x / 2,
      fy: (_, y) => y / 2,
    },
    saddle: {
      label: "z = x²/4 - y²/4",
      f: (x, y) => x * x / 4 - y * y / 4,
      fx: (x) => x / 2,
      fy: (_, y) => -y / 2,
    },
    wave: {
      label: "z = 0.9 sin x cos y",
      f: (x, y) => 0.9 * Math.sin(x) * Math.cos(y),
      fx: (x, y) => 0.9 * Math.cos(x) * Math.cos(y),
      fy: (x, y) => -0.9 * Math.sin(x) * Math.sin(y),
    },
  };

  const orbit = { yaw: -0.74, pitch: 0.46 };
  const state = { surface: "paraboloid", x: 0.6, y: 0.6 };

  createControlRow(
    controls,
    [
      `<label>曲面<select data-role="surface">${Object.entries(surfaces)
        .map(([key, surface]) => `<option value="${key}">${surface.label}</option>`)
        .join("")}</select></label>`,
      `<label>x<input data-role="x" type="range" min="-180" max="180" value="60" /></label>`,
      `<label>y<input data-role="y" type="range" min="-180" max="180" value="60" /></label>`,
    ],
    "深色网格是原曲面，浅橙色面片是当前点的切平面。拖动画布可以看出“局部贴合”的感觉。"
  );

  const surfaceSelect = controls.querySelector("[data-role='surface']");
  const xInput = controls.querySelector("[data-role='x']");
  const yInput = controls.querySelector("[data-role='y']");

  const render = () => {
    const surface = surfaces[state.surface];
    drawCanvasBackdrop(ctx, canvas.width, canvas.height);

    drawPatches(ctx, sampleSurface(surface.f, -2.5, 2.5, -2.5, 2.5, 18, 18), orbit, canvas.width, canvas.height, 68, "rgba(41, 90, 103, 0.15)", "#295a67");

    const z0 = surface.f(state.x, state.y);
    const fx = surface.fx(state.x, state.y);
    const fy = surface.fy(state.x, state.y);
    const tangent = (x, y) => z0 + fx * (x - state.x) + fy * (y - state.y);
    drawPatches(ctx, sampleSurface(tangent, state.x - 1.1, state.x + 1.1, state.y - 1.1, state.y + 1.1, 6, 6), orbit, canvas.width, canvas.height, 68, "rgba(213, 127, 56, 0.18)", "#c37332");

    const [point] = projectScenePoints([{ x: state.x, y: z0, z: state.y }], orbit, canvas.width, canvas.height, 68).map((item) => item.projected);
    ctx.fillStyle = "#d57f38";
    ctx.beginPath();
    ctx.arc(point.x, point.y, 6, 0, Math.PI * 2);
    ctx.fill();

    stats.innerHTML = html`
      <div class="stat-grid">
        <div class="stat-chip"><span>x₀</span><strong>${round(state.x, 3)}</strong></div>
        <div class="stat-chip"><span>y₀</span><strong>${round(state.y, 3)}</strong></div>
        <div class="stat-chip"><span>f(x₀,y₀)</span><strong>${round(z0, 3)}</strong></div>
        <div class="stat-chip"><span>∇f</span><strong>⟨${round(fx, 3)}, ${round(fy, 3)}⟩</strong></div>
      </div>
      <p class="demo-explain">切平面公式：<strong>z = ${round(z0, 3)} + ${round(fx, 3)}(x-${round(state.x, 2)}) + ${round(fy, 3)}(y-${round(state.y, 2)})</strong></p>
    `;
  };

  surfaceSelect.addEventListener("change", () => {
    state.surface = surfaceSelect.value;
    render();
  });
  xInput.addEventListener("input", () => {
    state.x = Number(xInput.value) / 60;
    render();
  });
  yInput.addEventListener("input", () => {
    state.y = Number(yInput.value) / 60;
    render();
  });

  attachOrbit(canvas, orbit, render);
  render();
}

function initLagrangeDemo(card) {
  const body = card.querySelector(".demo-card-body");
  body.innerHTML = html`
    <div class="demo-layout two-up">
      <div class="demo-pane">
        <div class="demo-controls"></div>
        <div class="demo-stats"></div>
      </div>
      <svg class="plot-svg large" viewBox="0 0 460 320"></svg>
    </div>
  `;

  const controls = body.querySelector(".demo-controls");
  const stats = body.querySelector(".demo-stats");
  const svg = body.querySelector("svg");

  const state = { mode: "max" };

  createControlRow(
    controls,
    [
      `<label>观察点<select data-role="mode">
        <option value="max">最大值切点</option>
        <option value="min">最小值切点</option>
      </select></label>`,
    ],
    "目标函数取 f(x,y)=x+y，约束取 x²+y²=4。极值点处，目标函数等值线会与圆相切。"
  );

  const modeSelect = controls.querySelector("[data-role='mode']");

  const render = () => {
    const point = state.mode === "max" ? { x: Math.SQRT2, y: Math.SQRT2 } : { x: -Math.SQRT2, y: -Math.SQRT2 };
    const c = point.x + point.y;
    const frame = createSvgFrame(460, 320, -3.2, 3.2, -2.4, 2.4, 42);
    const circle = range(0, 180, 1).map((step) => {
      const t = (step / 180) * Math.PI * 2;
      return { x: 2 * Math.cos(t), y: 2 * Math.sin(t) };
    });
    const contourLine = [
      { x: -3.2, y: c + 3.2 },
      { x: 3.2, y: c - 3.2 },
    ];
    const gradFEnd = { x: point.x + 0.8, y: point.y + 0.8 };
    const gradGEnd = { x: point.x * 1.45, y: point.y * 1.45 };

    svg.innerHTML = html`
      ${axisMarkup(frame, [-2, 0, 2], [-2, 0, 2])}
      <path d="${pathFromPoints(circle, frame)}" fill="none" stroke="#295a67" stroke-width="3" />
      <line x1="${frame.x(contourLine[0].x)}" y1="${frame.y(contourLine[0].y)}" x2="${frame.x(contourLine[1].x)}" y2="${frame.y(contourLine[1].y)}" stroke="#d57f38" stroke-width="3" />
      <circle cx="${frame.x(point.x)}" cy="${frame.y(point.y)}" r="6" fill="#d57f38" />
      <line x1="${frame.x(point.x)}" y1="${frame.y(point.y)}" x2="${frame.x(gradFEnd.x)}" y2="${frame.y(gradFEnd.y)}" stroke="#4f7b2b" stroke-width="3" />
      <line x1="${frame.x(point.x)}" y1="${frame.y(point.y)}" x2="${frame.x(gradGEnd.x)}" y2="${frame.y(gradGEnd.y)}" stroke="#8f4f7a" stroke-width="3" />
      <text x="${frame.x(gradFEnd.x) + 6}" y="${frame.y(gradFEnd.y) - 6}" fill="#4f7b2b" font-size="12">∇f</text>
      <text x="${frame.x(gradGEnd.x) + 6}" y="${frame.y(gradGEnd.y) - 6}" fill="#8f4f7a" font-size="12">∇g</text>
      <text x="60" y="30" fill="#295a67" font-size="13">约束圆 x² + y² = 4</text>
      <text x="246" y="30" fill="#d57f38" font-size="13">目标等值线 x + y = c</text>
    `;

    stats.innerHTML = html`
      <div class="stat-grid">
        <div class="stat-chip"><span>点</span><strong>(${round(point.x, 3)}, ${round(point.y, 3)})</strong></div>
        <div class="stat-chip"><span>f 值</span><strong>${round(c, 3)}</strong></div>
        <div class="stat-chip"><span>∇f</span><strong>⟨1, 1⟩</strong></div>
        <div class="stat-chip"><span>∇g</span><strong>⟨${round(2 * point.x, 3)}, ${round(2 * point.y, 3)}⟩</strong></div>
      </div>
      <p class="demo-explain">因为 <strong>∇f</strong> 和 <strong>∇g</strong> 平行，所以目标等值线与约束曲线在该点相切，这正是 Lagrange 乘子的几何图像。</p>
    `;
  };

  modeSelect.addEventListener("change", () => {
    state.mode = modeSelect.value;
    render();
  });

  render();
}

function initDemos() {
  const initMap = {
    "sequence-series-demo": initSequenceSeriesDemo,
    "taylor-demo": initTaylorDemo,
    "parametric-demo": initParametricDemo,
    "polar-demo": initPolarDemo,
    "vector-demo": initVectorDemo,
    "quadric-demo": initQuadricDemo,
    "space-motion-demo": initSpaceMotionDemo,
    "polar-motion-demo": initPolarMotionDemo,
    "surface-demo": initSurfaceDemo,
    "lagrange-demo": initLagrangeDemo,
  };

  document.querySelectorAll(".demo-card").forEach((card) => {
    const id = card.dataset.demo;
    if (initMap[id]) {
      initMap[id](card);
    }
  });
}

renderApp();
renderNav();
bindChapterToggles();
bindSearch();
bindActiveNav();
initDemos();
