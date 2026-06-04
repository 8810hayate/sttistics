// ===== 統計検定2級 模擬試験 =====

const QUESTIONS = [
  // --- 1. データの記述・要約 ---
  {
    id: 1, category: "データの記述", catClass: "cat-data",
    text: "5つのデータ 2, 5, 7, 8, 13 の分散（不偏分散ではなく標本分散）として正しいものはどれか。",
    choices: ["10.0", "12.5", "12.8", "14.0"],
    answer: 2,
    explanation: "平均 = (2+5+7+8+13)/5 = 7。標本分散 = {(2−7)² + (5−7)² + (7−7)² + (8−7)² + (13−7)²}/5 = (25+4+0+1+36)/5 = 66/5 = <strong>12.8 ではなく13.2</strong>…ではなく正確に計算すると (25+4+0+1+36)/5 = 66/5 = 13.2。\n\n修正：正しい標本分散は 13.2 ですが、選択肢の中で最も近い値は 12.8 です。ここでは平均を使って再計算します。平均 = 35/5 = 7。各偏差の二乗：25, 4, 0, 1, 36。合計 = 66。標本分散 = 66/5 = <strong>13.2</strong>。不偏分散 = 66/4 = 16.5。選択肢を再確認すると、問題は不偏分散ではなく n で割る方の分散です。"
  },
  {
    id: 2, category: "データの記述", catClass: "cat-data",
    text: "相関係数 r について正しい記述はどれか。",
    choices: [
      "r = 0 ならば、2変数間にいかなる関係もない",
      "r は −1 ≤ r ≤ 1 の範囲をとる",
      "r の値は測定単位に依存する",
      "r = 1 のとき、すべてのデータが同じ値をとる"
    ],
    answer: 1,
    explanation: "相関係数は <strong>−1 ≤ r ≤ 1</strong> の範囲をとります。r = 0 は「線形関係がない」ことを意味しますが、非線形の関係は存在しうるため①は誤り。相関係数は標準化された値なので単位に依存しません（③は誤り）。r = 1 は完全な正の線形関係を意味し、全データが同じ値とは限りません（④は誤り）。"
  },
  // --- 2. 確率の基礎 ---
  {
    id: 3, category: "確率", catClass: "cat-prob",
    text: "ある病気の有病率は 0.1%（0.001）である。検査の感度（病気の人が陽性になる確率）は 99%、特異度（健康な人が陰性になる確率）は 95% である。陽性と判定された人が実際に病気である確率に最も近い値はどれか。",
    choices: ["約 2%", "約 20%", "約 50%", "約 95%"],
    answer: 0,
    explanation: "ベイズの定理を使います。P(病気|陽性) = P(陽性|病気)P(病気) / P(陽性)。P(陽性) = 0.99×0.001 + 0.05×0.999 = 0.00099 + 0.04995 = 0.05094。P(病気|陽性) = 0.00099/0.05094 ≈ <strong>0.019 ≈ 約2%</strong>。有病率が低いと、陽性でも実際に病気である確率はかなり低くなります。"
  },
  {
    id: 4, category: "確率", catClass: "cat-prob",
    text: "事象 A と事象 B が独立であるとき、P(A) = 0.3, P(B) = 0.4 のとき、P(A ∪ B) はいくらか。",
    choices: ["0.12", "0.58", "0.70", "1.00"],
    answer: 1,
    explanation: "独立のとき P(A ∩ B) = P(A)P(B) = 0.3 × 0.4 = 0.12。加法定理より P(A ∪ B) = P(A) + P(B) − P(A ∩ B) = 0.3 + 0.4 − 0.12 = <strong>0.58</strong>。"
  },
  // --- 3. 確率分布 ---
  {
    id: 5, category: "確率分布", catClass: "cat-dist",
    text: "X 〜 B(100, 0.04) のとき、E[X] と V[X] の値として正しいものはどれか。",
    choices: [
      "E[X] = 4, V[X] = 3.84",
      "E[X] = 4, V[X] = 4",
      "E[X] = 0.04, V[X] = 0.0384",
      "E[X] = 40, V[X] = 24"
    ],
    answer: 0,
    explanation: "二項分布 B(n, p) では E[X] = np, V[X] = np(1−p)。E[X] = 100 × 0.04 = <strong>4</strong>。V[X] = 100 × 0.04 × 0.96 = <strong>3.84</strong>。"
  },
  {
    id: 6, category: "確率分布", catClass: "cat-dist",
    text: "確率変数 X が正規分布 N(50, 100) に従うとき、P(30 ≤ X ≤ 70) に最も近い値はどれか。ただし、標準正規分布で P(Z ≤ 2) = 0.9772 とする。",
    choices: ["0.6827", "0.9544", "0.9772", "0.6449"],
    answer: 1,
    explanation: "N(50, 100) では μ=50, σ=10。Z = (X−50)/10 に標準化すると、P(30≤X≤70) = P(−2≤Z≤2) = 2×P(Z≤2) − 1 = 2×0.9772 − 1 = <strong>0.9544</strong>。"
  },
  {
    id: 7, category: "確率分布", catClass: "cat-dist",
    text: "確率変数 X と Y が独立で、E[X]=3, E[Y]=5, V[X]=4, V[Y]=9 のとき、V[2X − Y + 1] はいくらか。",
    choices: ["7", "13", "25", "17"],
    answer: 2,
    explanation: "定数の加算は分散に影響せず、V[aX] = a²V[X]。独立なら V[X−Y] = V[X]+V[Y]。V[2X − Y + 1] = 4V[X] + V[Y] = 4×4 + 9 = <strong>25</strong>。"
  },
  // --- 4. 標本分布 ---
  {
    id: 8, category: "標本分布", catClass: "cat-sample",
    text: "母平均 μ = 60、母分散 σ² = 100 の母集団から大きさ n = 25 の無作為標本を抽出する。標本平均 X̄ の分布について正しいものはどれか。",
    choices: [
      "E[X̄] = 60, V[X̄] = 100",
      "E[X̄] = 60, V[X̄] = 4",
      "E[X̄] = 2.4, V[X̄] = 4",
      "E[X̄] = 60, V[X̄] = 2"
    ],
    answer: 1,
    explanation: "標本平均の期待値 E[X̄] = μ = <strong>60</strong>。標本平均の分散 V[X̄] = σ²/n = 100/25 = <strong>4</strong>。標準誤差は √4 = 2。"
  },
  {
    id: 9, category: "標本分布", catClass: "cat-sample",
    text: "中心極限定理について正しい記述はどれか。",
    choices: [
      "母集団が正規分布に従う場合のみ成り立つ",
      "標本の大きさ n が十分大きければ、標本平均は近似的に正規分布に従う",
      "標本の大きさ n が大きくなると、標本分散は 0 に近づく",
      "母集団の分布が対称な場合のみ成り立つ"
    ],
    answer: 1,
    explanation: "中心極限定理は<strong>母集団の分布によらず</strong>、n が十分大きければ標本平均 X̄ の分布が正規分布に近づくことを述べています。母集団が正規分布でなくても成り立つ点が重要です。"
  },
  // --- 5. 推定 ---
  {
    id: 10, category: "推定", catClass: "cat-est",
    text: "標本平均 x̄ = 72、母分散 σ² = 36（既知）、標本の大きさ n = 9 のとき、母平均 μ の 95% 信頼区間はどれか。ただし z₀.₀₂₅ = 1.96 とする。",
    choices: [
      "[68.08, 75.92]",
      "[70.04, 73.96]",
      "[66.12, 77.88]",
      "[69.08, 74.92]"
    ],
    answer: 0,
    explanation: "σ 既知の場合：x̄ ± z × σ/√n = 72 ± 1.96 × 6/3 = 72 ± 1.96 × 2 = 72 ± 3.92。信頼区間 = <strong>[68.08, 75.92]</strong>。"
  },
  {
    id: 11, category: "推定", catClass: "cat-est",
    text: "不偏推定量の性質として正しいものはどれか。",
    choices: [
      "常に母数に等しい値をとる",
      "推定量の期待値が母数に等しい",
      "標本を大きくすると推定量の分散が 0 に収束する",
      "推定量の分散が最小である"
    ],
    answer: 1,
    explanation: "不偏推定量とは、<strong>推定量の期待値が母数と一致する</strong>（E[θ̂] = θ）性質を持つ推定量です。③は一致推定量、④は有効推定量の性質です。"
  },
  // --- 6. 仮説検定 ---
  {
    id: 12, category: "仮説検定", catClass: "cat-test",
    text: "有意水準 5% で検定を行い、p値が 0.03 であった。正しい判断はどれか。",
    choices: [
      "帰無仮説を棄却しない",
      "帰無仮説を棄却する",
      "対立仮説を棄却する",
      "判断できない"
    ],
    answer: 1,
    explanation: "p値（0.03）< 有意水準（0.05）なので、<strong>帰無仮説を棄却</strong>します。p値は「帰無仮説が正しい場合に、観測データ以上に極端な結果が得られる確率」です。"
  },
  {
    id: 13, category: "仮説検定", catClass: "cat-test",
    text: "第2種の過誤（β）について正しい記述はどれか。",
    choices: [
      "帰無仮説が正しいのに棄却してしまう誤り",
      "帰無仮説が誤っているのに棄却しない誤り",
      "有意水準を下げると第2種の過誤も減少する",
      "標本サイズに関わらず一定の値をとる"
    ],
    answer: 1,
    explanation: "第2種の過誤は<strong>帰無仮説が誤っているのに棄却しない（見逃す）</strong>誤りです。①は第1種の過誤。有意水準を下げると第1種の過誤は減りますが、第2種の過誤は一般に増加します（③は誤り）。"
  },
  {
    id: 14, category: "仮説検定", catClass: "cat-test",
    text: "ある地域の有権者200人に調査した結果、ある候補者への支持率は 45% であった。支持率が 50% であるかどうかを検定するための検定統計量 Z の値に最も近いものはどれか。",
    choices: ["-1.41", "-2.00", "-0.71", "-2.83"],
    answer: 0,
    explanation: "H₀: p = 0.5 のもとで Z = (p̂ − p₀) / √{p₀(1−p₀)/n} = (0.45 − 0.50) / √(0.25/200) = −0.05 / √0.00125 = −0.05 / 0.03536 ≈ <strong>−1.41</strong>。"
  },
  {
    id: 15, category: "仮説検定", catClass: "cat-test",
    text: "χ²（カイ二乗）適合度検定において、カテゴリ数が 5 のとき、検定統計量の自由度はいくらか。",
    choices: ["3", "4", "5", "6"],
    answer: 1,
    explanation: "適合度検定の自由度は<strong>カテゴリ数 − 1</strong> = 5 − 1 = <strong>4</strong>。パラメータの推定がない場合の値です。"
  },
  // --- 7. 回帰分析 ---
  {
    id: 16, category: "回帰分析", catClass: "cat-reg",
    text: "単回帰分析において、S_xx = 40, S_xy = 20, x̄ = 5, ȳ = 10 のとき、回帰式 ŷ = β̂₀ + β̂₁x の β̂₀ と β̂₁ はいくらか。",
    choices: [
      "β̂₁ = 0.5, β̂₀ = 7.5",
      "β̂₁ = 2, β̂₀ = 0",
      "β̂₁ = 0.5, β̂₀ = 12.5",
      "β̂₁ = 2, β̂₀ = 5"
    ],
    answer: 0,
    explanation: "β̂₁ = S_xy / S_xx = 20/40 = <strong>0.5</strong>。β̂₀ = ȳ − β̂₁x̄ = 10 − 0.5×5 = 10 − 2.5 = <strong>7.5</strong>。"
  },
  {
    id: 17, category: "回帰分析", catClass: "cat-reg",
    text: "決定係数 R² = 0.81 のとき、単回帰分析における相関係数 r の絶対値はいくらか。",
    choices: ["0.656", "0.81", "0.9", "0.729"],
    answer: 2,
    explanation: "単回帰では R² = r² なので、|r| = √R² = √0.81 = <strong>0.9</strong>。"
  },
  {
    id: 18, category: "回帰分析", catClass: "cat-reg",
    text: "重回帰分析で、通常の決定係数 R² ではなく自由度調整済み R² を用いる理由として最も適切なものはどれか。",
    choices: [
      "計算が簡単だから",
      "変数を追加しても R² は必ず増加するため、モデル選択に適さないから",
      "R² は負の値をとりうるから",
      "R² は単回帰でしか定義されないから"
    ],
    answer: 1,
    explanation: "通常の R² は<strong>変数を追加すると必ず増加（または不変）</strong>するため、不要な変数を追加してもR²は改善してしまいます。自由度調整済み R² は変数の数にペナルティをかけるため、モデル選択に適しています。"
  },
  // --- 8. 分散分析 ---
  {
    id: 19, category: "分散分析", catClass: "cat-anova",
    text: "一元配置分散分析で、3群（各群5名、計15名）を比較する。分散分析表において、群間の自由度と群内の自由度はそれぞれいくらか。",
    choices: [
      "群間: 2, 群内: 12",
      "群間: 3, 群内: 12",
      "群間: 2, 群内: 14",
      "群間: 3, 群内: 11"
    ],
    answer: 0,
    explanation: "群間の自由度 = k − 1 = 3 − 1 = <strong>2</strong>。群内の自由度 = N − k = 15 − 3 = <strong>12</strong>。合計の自由度 = N − 1 = 14 で、2 + 12 = 14 と一致します。"
  },
  {
    id: 20, category: "分散分析", catClass: "cat-anova",
    text: "分散分析で帰無仮説が棄却された場合、次に行うべき分析はどれか。",
    choices: [
      "回帰分析",
      "再度分散分析を繰り返す",
      "多重比較法（例：Tukey法）",
      "χ²検定"
    ],
    answer: 2,
    explanation: "分散分析で有意差が出ても、<strong>どの群間に差があるかは分からない</strong>ため、<strong>多重比較法</strong>（Tukey法、Bonferroni法など）で事後検定を行い、具体的にどのペアに差があるかを特定します。"
  }
];

// Fix Q1 to have correct answer
QUESTIONS[0] = {
  id: 1, category: "データの記述", catClass: "cat-data",
  text: "5つのデータ 2, 4, 6, 8, 10 の標本分散（n で割る）はいくらか。",
  choices: ["6", "8", "10", "12"],
  answer: 1,
  explanation: "平均 = (2+4+6+8+10)/5 = 6。標本分散 = {(2−6)²+(4−6)²+(6−6)²+(8−6)²+(10−6)²}/5 = (16+4+0+4+16)/5 = 40/5 = <strong>8</strong>。なお不偏分散（n−1 で割る）なら 40/4 = 10 です。"
};

// ===== App State =====
let currentQ = 0;
let answers = new Array(QUESTIONS.length).fill(-1);
let timerInterval = null;
let timeLeft = 60 * 60; // 60 min in seconds
let startTime = null;

// ===== DOM =====
const $=s=>document.querySelector(s);
const $$=s=>document.querySelectorAll(s);

// ===== Init =====
document.addEventListener('DOMContentLoaded', () => {
  buildDots();
  $('#startBtn').addEventListener('click', startExam);
  $('#prevQuestion').addEventListener('click', () => navigate(-1));
  $('#nextQuestion').addEventListener('click', () => navigate(1));
  $('#submitExam').addEventListener('click', submitExam);
  $('#retryBtn').addEventListener('click', () => location.reload());
});

function buildDots() {
  const c = $('#questionDots');
  QUESTIONS.forEach((_, i) => {
    const d = document.createElement('div');
    d.className = 'q-dot';
    d.textContent = i + 1;
    d.addEventListener('click', () => goTo(i));
    c.appendChild(d);
  });
}

function startExam() {
  $('#startScreen').classList.remove('active');
  $('#examScreen').classList.add('active');
  startTime = Date.now();
  renderQuestion();
  startTimer();
}

// ===== Timer =====
function startTimer() {
  updateTimerDisplay();
  timerInterval = setInterval(() => {
    timeLeft--;
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      timeLeft = 0;
      submitExam();
    }
    updateTimerDisplay();
  }, 1000);
}

function updateTimerDisplay() {
  const m = Math.floor(timeLeft / 60);
  const s = timeLeft % 60;
  const el = $('#timer');
  el.textContent = `${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
  el.classList.toggle('warning', timeLeft <= 600 && timeLeft > 120);
  el.classList.toggle('danger', timeLeft <= 120);
}

// ===== Navigation =====
function navigate(dir) {
  const next = currentQ + dir;
  if (next >= 0 && next < QUESTIONS.length) goTo(next);
}

function goTo(idx) {
  currentQ = idx;
  renderQuestion();
}

function renderQuestion() {
  const q = QUESTIONS[currentQ];

  // Meta
  $('#questionCategory').textContent = q.category;
  $('#questionCategory').className = 'q-category ' + q.catClass;
  $('#questionNumber').textContent = `問${currentQ + 1}`;
  $('#questionText').innerHTML = q.text;

  // Choices
  const cc = $('#choicesContainer');
  cc.innerHTML = '';
  const marks = ['ア','イ','ウ','エ','オ'];
  q.choices.forEach((ch, i) => {
    const btn = document.createElement('button');
    btn.className = 'choice-btn' + (answers[currentQ] === i ? ' selected' : '');
    btn.innerHTML = `<span class="choice-mark">${marks[i]}</span><span class="choice-text">${ch}</span>`;
    btn.addEventListener('click', () => selectAnswer(i));
    cc.appendChild(btn);
  });

  // Nav
  $('#prevQuestion').disabled = currentQ === 0;
  $('#nextQuestion').textContent = currentQ === QUESTIONS.length - 1 ? '最後の問題' : '次の問題 →';
  $('#progressText').textContent = `${currentQ + 1} / ${QUESTIONS.length}`;
  $('#examProgress').style.width = `${((currentQ + 1) / QUESTIONS.length) * 100}%`;

  // Dots
  $$('.q-dot').forEach((d, i) => {
    d.classList.toggle('current', i === currentQ);
    d.classList.toggle('answered', answers[i] !== -1 && i !== currentQ);
  });

  // Animation
  const area = $('.question-area');
  area.style.animation = 'none';
  void area.offsetHeight;
  area.style.animation = 'fadeUp .35s ease both';
}

function selectAnswer(idx) {
  answers[currentQ] = idx;
  $$('.choice-btn').forEach((btn, i) => {
    btn.classList.toggle('selected', i === idx);
  });
  $$('.q-dot').forEach((d, i) => {
    d.classList.toggle('answered', answers[i] !== -1 && i !== currentQ);
  });
}

// ===== Submit =====
function submitExam() {
  const unanswered = answers.filter(a => a === -1).length;
  if (unanswered > 0) {
    if (!confirm(`未回答の問題が ${unanswered} 問あります。提出しますか？`)) return;
  } else {
    if (!confirm('解答を提出しますか？')) return;
  }

  clearInterval(timerInterval);
  const elapsed = Math.floor((Date.now() - startTime) / 1000);

  // Calculate
  let correct = 0;
  const catResults = {};
  QUESTIONS.forEach((q, i) => {
    const isCorrect = answers[i] === q.answer;
    if (isCorrect) correct++;
    if (!catResults[q.category]) catResults[q.category] = { total: 0, correct: 0, catClass: q.catClass };
    catResults[q.category].total++;
    if (isCorrect) catResults[q.category].correct++;
  });

  const pct = Math.round((correct / QUESTIONS.length) * 100);
  const pass = pct >= 60;

  // Show result screen
  $('#examScreen').classList.remove('active');
  $('#resultScreen').classList.add('active');

  // Score
  $('#scorePercent').textContent = pct + '%';
  $('#correctCount').textContent = correct;
  const em = Math.floor(elapsed / 60);
  const es = elapsed % 60;
  $('#elapsedTime').textContent = `${em}分${es}秒`;

  // Arc animation
  const offset = 327 - (327 * pct / 100);
  const arc = $('#scoreArc');
  arc.style.stroke = pass ? 'var(--green)' : 'var(--red)';
  setTimeout(() => { arc.style.strokeDashoffset = offset; }, 100);

  // Message
  const msg = $('#resultMessage');
  if (pass) {
    msg.textContent = '🎉 合格ライン達成！';
    msg.className = 'result-message result-pass';
  } else {
    msg.textContent = '📚 もう少し頑張りましょう';
    msg.className = 'result-message result-fail';
  }

  // Category breakdown
  const catCon = $('#categoryBreakdown');
  catCon.innerHTML = '';
  for (const [name, data] of Object.entries(catResults)) {
    const p = Math.round((data.correct / data.total) * 100);
    const color = p >= 60 ? 'var(--green)' : p >= 40 ? 'var(--yellow)' : 'var(--red)';
    catCon.innerHTML += `
      <div class="cat-card">
        <div class="cat-name">${name}</div>
        <div class="cat-bar"><div class="cat-bar-fill" style="width:${p}%;background:${color}"></div></div>
        <div class="cat-score">${data.correct}/${data.total} (${p}%)</div>
      </div>`;
  }

  // Review
  const rc = $('#reviewContainer');
  rc.innerHTML = '';
  const marks = ['ア','イ','ウ','エ','オ'];
  QUESTIONS.forEach((q, i) => {
    const isCorrect = answers[i] === q.answer;
    const card = document.createElement('div');
    card.className = `review-card ${isCorrect ? 'correct' : 'wrong'}`;

    const header = document.createElement('div');
    header.className = 'review-header';
    header.innerHTML = `
      <span class="review-icon">${isCorrect ? '✅' : '❌'}</span>
      <span class="review-q-num">問${i+1}</span>
      <span class="review-q-text">${q.text.replace(/<[^>]*>/g,'')}</span>
      <span class="review-toggle">▼</span>`;

    const body = document.createElement('div');
    body.className = 'review-body';

    let choicesHtml = '';
    q.choices.forEach((ch, ci) => {
      let cls = '';
      if (ci === q.answer) cls = 'is-correct';
      else if (ci === answers[i] && ci !== q.answer) cls = 'is-wrong';
      const mark = ci === q.answer ? '✓' : (ci === answers[i] ? '✗' : '　');
      choicesHtml += `<div class="review-choice ${cls}"><span class="rc-mark">${mark}</span> ${marks[ci]}. ${ch}</div>`;
    });

    body.innerHTML = `
      <div class="question-text">${q.text}</div>
      ${choicesHtml}
      <div class="explanation-box">${q.explanation}</div>`;

    header.addEventListener('click', () => {
      body.classList.toggle('open');
      header.querySelector('.review-toggle').textContent = body.classList.contains('open') ? '▲' : '▼';
    });

    card.appendChild(header);
    card.appendChild(body);
    rc.appendChild(card);
  });
}
