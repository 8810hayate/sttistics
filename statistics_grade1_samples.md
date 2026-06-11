# 統計検定1級 分野別サンプル問題集（完全版・記述式全29問）

統計検定1級の筆記試験（記述式）に対応した、分野別・キーワード別の高度なサンプル問題と詳細な数式証明・解説です。共通の「統計数理」および「統計応用」の全4分野（人文・社会・理工・医薬）を網羅しています。

---

## 目次
### [1. 統計数理分野 (Q1〜Q7, Q20〜Q22)](#1-統計数理分野)
- Q1: UMVUEの導出 (Lehmann-Scheffé)
- Q2: 尤度比検定 (LRT) 統計量と漸近分布 (Wilks)
- Q3: 順序統計量の極限分布
- Q4: モーメント母関数を用いた中心極限定理の証明
- Q5: ガウス・マルコフの定理の証明 (BLUE)
- Q6: クラメール・ラオの不等式の証明
- Q7: 一様最強力検定（UMPT）の導出
- Q20: 条件付き期待値の性質と分散分解公式の証明
- Q21: デルタ法を用いた漸近期待値・漸近分散の導出
- Q22: ベイズ推定における事後分布・信用区間・予測分布の導出

### [2. 統計応用：人文科学分野 (Q8〜Q10, Q23〜Q24)](#2-統計応用人文科学分野)
- Q8: 項目反応理論 (IRT) の尤度関数
- Q9: 因子分析モデルの共分散構造式の導出
- Q10: パス解析における効果分解
- Q23: 項目反応理論 (IRT) における項目情報関数の導出
- Q24: 多次元尺度構成法 (MDS) におけるヤング・ハウスホルダーの定理と座標導出

### [3. 統計応用：社会科学分野 (Q11〜Q13, Q25〜Q26)](#3-統計応用社会科学分野)
- Q11: 操作変数法 (IV) 推定値の一致性証明
- Q12: ベクトル自己回帰 (VAR) モデルの定常条件
- Q13: パネルデータ分析（FE vs RE）
- Q25: 差の差分析 (DID) の数理モデルと平行トレンド仮定
- Q26: 選択バイアスとヘックマンの2段階推定法

### [4. 統計応用：理工学分野 (Q14〜Q16, Q27〜Q28)](#4-統計応用理工学分野)
- Q14: 直交表 $L_8(2^7)$ と交絡法
- Q15: 並列システムの信頼度とワイブル分布
- Q16: 管理図の設計と第一種の誤り（Shewhart vs EWMA）
- Q27: 実験計画法における分割法の構造モデルと期待平均平方の導出
- Q28: 信頼性工学における加速寿命試験とアレニウスモデル

### [5. 統計応用：医薬生物学分野 (Q17〜Q19, Q29)](#5-統計応用医薬生物学分野)
- Q17: 右側打ち切り生存時間データの尤度最尤推定
- Q18: マントル・ヘンツェル (MH) オッズ比による交絡調整
- Q19: メタアナリシス（固定効果 vs 変量効果）
- Q29: コックス比例ハザードモデルにおける偏尤度 (Partial Likelihood) の導出

---

## 1. 統計数理分野

### Q1. UMVUEの導出 (Lehmann-Scheffé)
$X_1, \dots, X_n \sim \text{Poisson}(\lambda)$ からの独立な標本に対し、 $\theta = e^{-\lambda}$ に対する一様最小分散不偏推定量（UMVUE）を、十分統計量 $T = \sum X_i$ のもとでの初期不偏推定量 $W = I(X_1 = 0)$ の条件付き期待値を用いて導出せよ。

*   **解答・解説**:
    $T \sim \text{Poisson}(n\lambda)$ は完備十分統計量である。
    求めるUMVUEは $\hat{\theta} = E[W|T=t] = P(X_1=0 | T=t)$ である。
    $$P(X_1 = 0 | T = t) = \frac{P(X_1 = 0) P(\sum_{i=2}^n X_i = t)}{P(T = t)} = \frac{e^{-\lambda} \cdot \frac{((n-1)\lambda)^t e^{-(n-1)\lambda}}{t!}}{\frac{(n\lambda)^t e^{-n\lambda}}{t!}} = \left( 1 - \frac{1}{n} \right)^t$$
    したがって、 $\hat{\theta}_{\text{UMVUE}} = \left( 1 - \frac{1}{n} \right)^T$。

---

### Q2. 尤度比検定 (LRT) 統計量と漸近分布 (Wilks)
$X_1, \dots, X_n \sim \text{Poisson}(\lambda)$ に対する仮説検定 $H_0: \lambda = \lambda_0 \ \text{vs} \ H_1: \lambda \neq \lambda_0$ を考える。
1. 尤度比検定統計量 $-2 \log \Lambda(X)$ を標本平均 $\bar{X}$ で表せ。
2. 帰無仮説 $H_0$ のもとでの $n \to \infty$ における漸近分布を述べよ。

*   **解答・解説**:
    1. 尤度比は $\Lambda(X) = \frac{L(\lambda_0)}{L(\bar{X})} = \left(\frac{\lambda_0}{\bar{X}}\right)^{n\bar{X}} e^{-n(\lambda_0 - \bar{X})}$。
       したがって、 $-2 \log \Lambda(X) = 2n \left[ \bar{X} \log\left(\frac{\bar{X}}{\lambda_0}\right) - (\bar{X} - \lambda_0) \right]$。
    2. ウィルクスの定理より、 $-2 \log \Lambda(X) \xrightarrow{d} \chi^2(1) \ (n \to \infty)$。

---

### Q3. 順序統計量の極限分布
独立に確率密度 $f(x) = e^{-x} \ (x \ge 0)$ の指数分布に従う $X_1, \dots, X_n$ に対し、最大値 $Y_n = \max(X_1, \dots, X_n)$ を考える。
$Z_n = Y_n - \log n$ と定義するとき、 $n \to \infty$ における $Z_n$ の極限累積分布関数 $G(z)$ を求めよ。

*   **解答・解説**:
    $Y_n$ の累積分布関数は $F_{Y_n}(y) = (1 - e^{-y})^n$。
    $F_{Z_n}(z) = F_{Y_n}(z + \log n) = \left( 1 - e^{-(z+\log n)} \right)^n = \left( 1 - \frac{e^{-z}}{n} \right)^n$。
    $n \to \infty$ のとき、 $\lim (1 - \frac{e^{-z}}{n})^n = \exp(-e^{-z}) \quad (-\infty < z < \infty)$ （ガンベル分布）。

---

### Q4. モーメント母関数を用いた中心極限定理の証明
独立同一に平均 $\mu$、分散 $\sigma^2 \ (0 < \sigma^2 < \infty)$ の分布に従う $X_1, \dots, X_n$ に対し、 $Z_n = \frac{\bar{X} - \mu}{\sigma / \sqrt{n}}$ とする。 $n \to \infty$ のとき $Z_n$ のモーメント母関数 $M_{Z_n}(t)$ が $e^{t^2/2}$ に収束することを示せ（$X_i$ のモーメント母関数の存在を仮定する）。

*   **解答・解説**:
    $Y_i = \frac{X_i-\mu}{\sigma}$ とおくと $E[Y_i]=0, V[Y_i]=1$。 $Z_n = \frac{1}{\sqrt{n}}\sum Y_i$ より、 $M_{Z_n}(t) = [M_Y(t/\sqrt{n})]^n$。
    $M_Y(s)$ を原点付近でテイラー展開すると、 $M_Y(s) = 1 + E[Y_i]s + \frac{E[Y_i^2]}{2}s^2 + o(s^2) = 1 + \frac{1}{2}s^2 + o(s^2)$。
    $s = t/\sqrt{n}$ を代入すると、 $M_{Z_n}(t) = \left[ 1 + \frac{t^2}{2n} + o\left(\frac{1}{n}\right) \right]^n$。
    両辺の対数をとり $n \to \infty$ とすると、 $\lim \log M_{Z_n}(t) = \frac{t^2}{2}$。したがって、 $M_{Z_n}(t) \to e^{t^2/2}$。

---

### Q5. ガウス・マルコフの定理の証明 (BLUE)
線形モデル $\mathbf{Y} = \mathbf{X}\boldsymbol{\beta} + \boldsymbol{\epsilon}$ （$E[\boldsymbol{\epsilon}] = \mathbf{0}, Var(\boldsymbol{\epsilon}) = \sigma^2 \mathbf{I}_n$）において、最小二乗推定量 $\hat{\boldsymbol{\beta}} = (\mathbf{X}^T\mathbf{X})^{-1}\mathbf{X}^T\mathbf{Y}$ による推測値 $\mathbf{c}^T\hat{\boldsymbol{\beta}}$ が、任意の線形不偏推定量 $\mathbf{a}^T\mathbf{Y}$ の中で最小の分散を持つことを証明せよ。

*   **解答・解説**:
    不偏性条件は $\mathbf{X}^T\mathbf{a} = \mathbf{c}$。 OLS推定量は $\mathbf{a}_0 = \mathbf{X}(\mathbf{X}^T\mathbf{X})^{-1}\mathbf{c}$ と書け、不偏性を満たす。
    任意の $\mathbf{a}$ を $\mathbf{a} = \mathbf{a}_0 + \mathbf{d}$ と分解すると、 $\mathbf{X}^T\mathbf{d} = \mathbf{0}$。
    $Var(\mathbf{a}^T\mathbf{Y}) = \sigma^2 \mathbf{a}^T\mathbf{a} = \sigma^2 (\mathbf{a}_0+\mathbf{d})^T(\mathbf{a}_0+\mathbf{d}) = \sigma^2 (\mathbf{a}_0^T\mathbf{a}_0 + 2\mathbf{d}^T\mathbf{a}_0 + \mathbf{d}^T\mathbf{d})$。
    ここで $\mathbf{d}^T\mathbf{a}_0 = \mathbf{d}^T\mathbf{X}(\mathbf{X}^T\mathbf{X})^{-1}\mathbf{c} = 0$。
    したがって $Var(\mathbf{a}^T\mathbf{Y}) = Var(\mathbf{c}^T\hat{\boldsymbol{\beta}}) + \sigma^2 \mathbf{d}^T\mathbf{d} \ge Var(\mathbf{c}^T\hat{\boldsymbol{\beta}})$ （BLUEの成立）。

---

### Q6. クラメール・ラオの不等式の証明
確率変数 $X$ の確率密度関数を $f(x; \theta)$ とする。 $\theta$ の一価関数 $g(\theta)$ の任意の不偏推定量 $T(X)$ に対し、次のクラメール・ラオの不等式が成り立つことを証明せよ。
$$V(T) \geq \frac{[g'(\theta)]^2}{I(\theta)}$$
（ただし、 $I(\theta) = E\left[ \left( \frac{\partial \log f(X; \theta)}{\partial \theta} \right)^2 \right]$ はフィッシャー情報量であり、積分と微分の順序交換などの正則条件を満たしているとする）

*   **解答・解説**:
    スコア関数を $S = \frac{\partial \log f(X; \theta)}{\partial \theta} = \frac{1}{f} \frac{\partial f}{\partial \theta}$ とする。 $E[S] = 0$、 $V(S) = I(\theta)$ である。
    不偏性条件 $E[T] = \int T(x) f(x; \theta) dx = g(\theta)$ の両辺を $\theta$ で微分すると：
    $$\int T(x) \frac{\partial f(x; \theta)}{\partial \theta} dx = g'(\theta) \implies \int T(x) S f(x; \theta) dx = g'(\theta) \implies E[TS] = g'(\theta)$$
    $E[S] = 0$ より、共分散は $Cov(T, S) = E[TS] - E[T]E[S] = g'(\theta)$。
    コーシー・シュワルツの不等式 $[Cov(T, S)]^2 \leq V(T) V(S)$ より、
    $$[g'(\theta)]^2 \leq V(T) I(\theta) \implies V(T) \geq \frac{[g'(\theta)]^2}{I(\theta)}$$

---

### Q7. 一様最強力検定（UMPT）の導出
独立に正規分布 $N(\mu, \sigma^2)$ （$\sigma^2$ は既知）に従うサンプル $X_1, \dots, X_n$ に対し、仮説検定 $H_0: \mu = \mu_0 \ \text{vs} \ H_1: \mu > \mu_0$ を考える。
このとき、単調尤度比（MLR）の性質を用いて、有意水準 $\alpha$ における一様最強力（UMP）検定の棄却域が $\bar{X} \ge \mu_0 + z_\alpha \frac{\sigma}{\sqrt{n}}$ となることを示せ。

*   **解答・解説**:
    任意の $\mu_1 > \mu_0$ に対し、尤度比は次のようになる。
    $$\frac{L(\mu_1)}{L(\mu_0)} = \frac{\exp\left( -\frac{1}{2\sigma^2} \sum (X_i - \mu_1)^2 \right)}{\exp\left( -\frac{1}{2\sigma^2} \sum (X_i - \mu_0)^2 \right)} = \exp\left( \frac{\mu_1 - \mu_0}{\sigma^2} \sum X_i - \frac{n(\mu_1^2 - \mu_0^2)}{2\sigma^2} \right)$$
    これは、統計量 $T = \sum X_i$ （または $\bar{X}$）の単調増加関数である（$\mu_1 > \mu_0$ より）。したがって、正規分布モデルは $T$ に関して単調尤度比（MLR）プロパティを持つ。
    カールイン・ルビン（Karlin-Rubin）の定理より、一様最強力（UMP）検定の棄却域は $T \ge k$ すなわち $\bar{X} \ge k'$ の形になる。
    有意水準 $\alpha$ の条件 $P_{\mu_0}(\bar{X} \ge k') = \alpha$ より、 $k' = \mu_0 + z_\alpha \frac{\sigma}{\sqrt{n}}$ が定まる。

---

## 2. 統計応用：人文科学分野

### Q8. 項目反応理論 (IRT) の尤度関数
被験者 $j \ (j=1, \dots, N)$ の能力パラメータ $\theta_j$ 、項目 $i \ (i=1, \dots, I)$ の困難度 $b_i$ に対する1パラメータロジスティックモデル（ラッシュモデル）において、局所独立性を仮定したときの応答行列 $\mathbf{U}$ に対する同時対数尤度関数 $\log L(\boldsymbol{\theta}, \mathbf{b})$ を定式化せよ。

*   **解答・解説**:
    正答確率を $p_{ij} = \frac{e^{\theta_j - b_i}}{1 + e^{\theta_j - b_i}}$ とする。局所独立性の仮定より、同時尤度は各セルの積となる。
    $$L = \prod_{j=1}^N \prod_{i=1}^I p_{ij}^{u_{ij}} (1-p_{ij})^{1-u_{ij}}$$
    対数をとって整理すると、
    $$\log L = \sum_{j=1}^N \sum_{i=1}^I \left[ u_{ij} \log p_{ij} + (1-u_{ij} ) \log(1-p_{ij} ) \right] = \sum_{j=1}^N \sum_{i=1}^I \left[ u_{ij} (\theta_j - b_i) - \log(1 + e^{\theta_j - b_i}) \right]$$

---

### Q9. 因子分析モデルの共分散構造式の導出
直交因子モデル $\mathbf{X} = \boldsymbol{\mu} + \boldsymbol{\Lambda}\mathbf{f} + \boldsymbol{\epsilon}$ （仮定: $Var(\mathbf{f})=\mathbf{I}, Var(\boldsymbol{\epsilon})=\boldsymbol{\Psi}, Cov(\mathbf{f},\boldsymbol{\epsilon})=\mathbf{O}$）において、観測データの共分散行列 $\boldsymbol{\Sigma} = Var(\mathbf{X})$ が $\boldsymbol{\Sigma} = \boldsymbol{\Lambda}\boldsymbol{\Lambda}^T + \boldsymbol{\Psi}$ と分解できることを示せ。

*   **解答・解説**:
    $\boldsymbol{\Sigma} = E[(\mathbf{X}-\boldsymbol{\mu})(\mathbf{X}-\boldsymbol{\mu})^T] = E[(\boldsymbol{\Lambda}\mathbf{f}+\boldsymbol{\epsilon})(\boldsymbol{\Lambda}\mathbf{f}+\boldsymbol{\epsilon})^T]$。
    転置を展開すると、 $E[(\boldsymbol{\Lambda}\mathbf{f}+\boldsymbol{\epsilon})(\mathbf{f}^T\boldsymbol{\Lambda}^T+\boldsymbol{\epsilon}^T)] = E[\boldsymbol{\Lambda}\mathbf{f}\mathbf{f}^T\boldsymbol{\Lambda}^T + \boldsymbol{\Lambda}\mathbf{f}\boldsymbol{\epsilon}^T + \boldsymbol{\epsilon}\mathbf{f}^T\boldsymbol{\Lambda}^T + \boldsymbol{\epsilon}\boldsymbol{\epsilon}^T]$。
    期待値をとると、 $\boldsymbol{\Lambda} E[\mathbf{f}\mathbf{f}^T] \boldsymbol{\Lambda}^T + \boldsymbol{\Lambda} E[\mathbf{f}\boldsymbol{\epsilon}^T] + E[\boldsymbol{\epsilon}\mathbf{f}^T]\boldsymbol{\Lambda}^T + E[\boldsymbol{\epsilon}\boldsymbol{\epsilon}^T]$。
    仮定条件を代入すると、 $\boldsymbol{\Lambda} \mathbf{I} \boldsymbol{\Lambda}^T + \mathbf{O} + \mathbf{O} + \boldsymbol{\Psi} = \boldsymbol{\Lambda}\boldsymbol{\Lambda}^T + \boldsymbol{\Psi}$。

---

### Q10. パス解析における効果分解
次のパス図（構造方程式モデル）で示される3つの変数 $X, Y, Z$ の線形モデルを考える。
$$Y = \beta_{yx} X + e_y$$
$$Z = \beta_{zx} X + \beta_{zy} Y + e_z$$
（ただし、 $e_y, e_z$ は互いに独立で、 $X$ とも独立な誤差項である）
1. 変数 $X$ から $Z$ への**直接効果 (Direct Effect)**、**間接効果 (Indirect Effect)**、および**総合効果 (Total Effect)** を定義し、モデルパラメータを用いて表せ。
2. 総合効果が、直接効果と間接効果の和に等しくなることを示せ。

*   **解答・解説**:
    1. 各効果の定義は以下の通りです。
       - **直接効果**: 他の変数を経由せず、 $X$ から $Z$ へ直接伝わる影響。本モデルでは係数 **$\beta_{zx}$** である。
       - **間接効果**: 中間変数 $Y$ を経由して $X$ から $Z$ へ伝わる影響。経路の積 **$\beta_{yx} \beta_{zy}$** である。
       - **総合効果**: $X$ が $Z$ に及ぼす全体の影響。
    2. $Y$ の式を $Z$ の式に代入して整理します。
       $$Z = \beta_{zx} X + \beta_{zy} (\beta_{yx} X + e_y) + e_z = (\beta_{zx} + \beta_{zy} \beta_{yx}) X + (\beta_{zy} e_y + e_z)$$
       この式の $X$ の係数 $\beta_{zx} + \beta_{zy} \beta_{yx}$ が総合効果です。
       したがって、
       $$\text{総合効果} = \beta_{zx} + \beta_{yx} \beta_{zy} = \text{直接効果} + \text{間接効果}$$
       が成り立ちます。

---

## 3. 統計応用：社会科学分野

### Q11. 操作変数法 (IV) 推定値の一致性証明
内生性（$Cov(X, u) \neq 0$）があるモデル $Y_i = \beta_0 + \beta_1 X_i + u_i$ に対し、操作変数 $Z_i$ （条件: $Cov(Z, u)=0, Cov(Z,X) \neq 0$）を用いたIV推定量 $\hat{\beta}_1^{\text{IV}} = \frac{\sum (Z_i-\bar{Z})(Y_i-\bar{Y})}{\sum (Z_i-\bar{Z})(X_i-\bar{X})}$ が一致性を持つことを証明せよ。

*   **解答・解説**:
    偏差モデル式を代入すると、 $\hat{\beta}_1^{\text{IV}} = \beta_1 + \frac{\frac{1}{n}\sum (Z_i-\bar{Z})(u_i-\bar{u})}{\frac{1}{n}\sum (Z_i-\bar{Z})(X_i-\bar{X})}$。
    大数の法則より $n \to \infty$ のとき、 $\text{plim} \ \hat{\beta}_1^{\text{IV}} = \beta_1 + \frac{Cov(Z, u)}{Cov(Z, X)}$。
    条件 $Cov(Z, u) = 0$ および $Cov(Z, X) \neq 0$ より、 $\text{plim} \ \hat{\beta}_1^{\text{IV}} = \beta_1 + \frac{0}{Cov(Z, X)} = \beta_1$。

---

### Q12. ベクトル自己回帰 (VAR) モデルの定常条件
2次元VAR(1)モデル $\mathbf{Y}_t = \boldsymbol{\Phi}\mathbf{Y}_{t-1} + \boldsymbol{\epsilon}_t$ において、モデルが定常であるための数理的条件を示し、 $\boldsymbol{\Phi} = \begin{pmatrix} 0.5 & 0.4 \\ 0.2 & 0.3 \end{pmatrix}$ の定常性を判定せよ。

*   **解答・解説**:
    定常条件は、係数行列 $\boldsymbol{\Phi}$ のすべての固有値の絶対値が $1$ 未満であることである。
    固有方程式 $\det(\boldsymbol{\Phi}-\lambda\mathbf{I}) = (0.5-\lambda)(0.3-\lambda) - 0.08 = \lambda^2 - 0.8\lambda + 0.07 = (\lambda-0.7)(\lambda-0.1) = 0$。
    固有値は $\lambda_1 = 0.7, \lambda_2 = 0.1$。ともに絶対値が1未満なので、このモデルは定常である。

---

### Q13. パネルデータ分析（FE vs RE）
社会科学の計量分析で用いられるパネルデータモデルにおいて、個体効果（個体固定の観察不可能な属性）を考慮する「固定効果モデル (Fixed Effects Model)」と「ランダム効果モデル (Random Effects Model)」について考える。
1. 各モデルの誤差項に関する仮定の違いを、個体効果 $\alpha_i$ と説明変数 $X_{it}$ の相関関係に着目して説明せよ。
2. どちらのモデルを採用すべきかを判定するための「ハウスマン（Hausman）検定」の基本的な考え方（帰無仮説と推定量の振る舞い）を説明せよ。

*   **解答・解説**:
    1. 各モデルの仮定の違い：
       - **固定効果モデル (FE)**: 個体効果 $\alpha_i$ と説明変数 $X_{it}$ の間に相関がある（$Cov(X_{it}, \alpha_i) \neq 0$）と仮定します。
       - **ランダム効果モデル (RE)**: 個体効果 $\alpha_i$ と説明変数 $X_{it}$ は互いに独立である（$Cov(X_{it}, \alpha_i) = 0$）と仮定します。
    2. ハウスマン検定の考え方：
       - **帰無仮説 $H_0$**: 「個体効果 $\alpha_i$ と説明変数 $X_{it}$ は無相関である（REモデルの仮定が正しい）」。
       - **推定量の振る舞い**:
         - $H_0$ が正しい場合、FE推定量もRE推定量もともに一致推定量になりますが、RE推定量のほうが効率的（分散が小さい）になります。
         - $H_0$ が偽である（相関がある）場合、RE推定量には内生性バイアスが生じて不一致になりますが、FE推定量は依然として一致性を保ちます。
       - ハウスマン検定は、これら2つの推定量の差 $(\hat{\beta}_{\text{FE}} - \hat{\beta}_{\text{RE}})$ が有意に大きいかどうかをカイ二乗検定によって判定します。差が有意であれば $H_0$ を棄却し、FEモデルを採用します。

---

## 4. 統計応用：理工学分野

### Q14. 直交表 $L_8(2^7)$ と交絡法
直交表 $L_8(2^7)$ の列の直交性の数学的意味を説明せよ。また、交互作用と主効果の「交絡」がどのように発生するか、および一部実施計画を設計する際の注意点を述べよ。

*   **解答・解説**:
    直交性とは、任意の2列の水準の組み合わせ $(1,1), (1,2), (2,1), (2,2)$ が同数回（2回ずつ）現れることを示す。これにより各効果を独立に推定できる。
    直交表の列間には代数的な積の関係（例: `列1 × 列2 = 列3`）があり、列1に $A$、列2に $B$ を割り当てると、交互作用 $AB$ は列3に現れる。もし列3に主効果 $D$ を割り当てると、 $D$ と $AB$ は区別できなくなり（交絡）、一部実施計画ではこれが発生するため、重要度の低い、または無視できる交互作用の列に主効果を割り当てる設計が必要である。

---

### Q15. 並列システムの信頼度とワイブル分布
寿命がそれぞれ同一のワイブル分布 $F(t) = 1 - e^{-(t/\eta)^m}$ に従う2つの独立な部品からなる並列システムの信頼度関数 $R_{\text{sys}}(t)$ を求めよ。また $m=1$ のときのシステムの期待寿命 (MTTF) を求めよ。

*   **解答・解説**:
    システム不信頼度は各部品の不信頼度の積であるため、 $F_{\text{sys}}(t) = [F(t)]^2 = [1 - e^{-(t/\eta)^m}]^2 = 1 - 2e^{-(t/\eta)^m} + e^{-2(t/\eta)^m}$。
    信頼度関数は $R_{\text{sys}}(t) = 1 - F_{\text{sys}}(t) = 2e^{-(t/\eta)^m} - e^{-2(t/\eta)^m}$。
    $m=1$ （指数分布）のとき、 $R_{\text{sys}}(t) = 2e^{-t/\eta} - e^{-2t/\eta}$。
    $\text{MTTF} = \int_0^\infty R_{\text{sys}}(t) dt = \int_0^\infty (2e^{-t/\eta} - e^{-2t/\eta}) dt = [-2\eta e^{-t/\eta} + \frac{\eta}{2} e^{-2t/\eta}]_0^\infty = 1.5\eta$。

---

### Q16. 管理図の設計と第一種の誤り（Shewhart vs EWMA）
工程管理において用いられる管理図について考える。
1. シューハート（Shewhart）管理図（特に $\bar{X}$ 管理図）において、管理限界線（UCL, LCL）に $3\sigma$ 限界を用いる場合の、工程が安定している状態での「第1種の誤り（誤警報の確率）」を計算式を交えて説明せよ。
2. シューハート管理図と比較したときの、指数加重移動平均（EWMA）管理図の数理的な特徴と、どのような異常の検出に適しているかを説明せよ。

*   **解答・解説**:
    1. シューハート管理図の第一種の誤り：
       - $\bar{X}$ 管理図では、工程が安定（管理状態）しているとき、標本平均は正規分布に従います。
       - $3\sigma$ 限界を用いる場合、点が管理限界線の外側に飛び出す確率は、正規分布の両側 $3\sigma$ の外側の確率に対応します。
       - 標準正規分布 $Z \sim N(0, 1)$ において、 $|Z| > 3$ となる確率は：
         $$\alpha = P(|Z| > 3) \approx 0.0027 \quad (0.27\%)$$
       - したがって、工程が正常であっても、約 $370$ 回に1回（平均ラン長 $\text{ARL} = 1/0.0027 \approx 370$）の割合で誤警報が発生します。
    2. EWMA管理図の特徴と用途：
       - **数理的特徴**: 過去の全データの加重平均を用い、新しいデータほど大きなウェイトを置き、過去にさかのぼるほど指数関数的にウェイトを減少させます。統計量 $z_t$ は次の漸化式で表されます。
         $$z_t = \lambda x_t + (1-\lambda) z_{t-1} \quad (0 < \lambda \le 1)$$
       - **用途**: シューハート管理図が大きな工程変化の検出に適しているのに対し、EWMA管理図は蓄積された過去の情報を用いるため、**「工程平均の小さな持続的な変化（シフト）」**を迅速に検出するのに適しています。

---

## 5. 統計応用：医薬生物学分野

### Q17. 右側打ち切り生存時間データの尤度最尤推定
生存時間 $T \sim \text{Exp}(\lambda)$ に対する右側打ち切りデータ $(t_i, \delta_i)$ の尤度関数 $L(\lambda)$ を構築し、最尤推定量 $\hat{\lambda}$ を求めよ。

*   **解答・解説**:
    被験者の尤度への寄与は $f(t_i)^{\delta_i} S(t_i)^{1-\delta_i}$ であるため、 $L(\lambda) = \prod_{i=1}^n (\lambda e^{-\lambda t_i})^{\delta_i} (e^{-\lambda t_i})^{1-\delta_i} = \lambda^{\sum \delta_i} e^{-\lambda \sum t_i}$。
    全イベント数 $d = \sum \delta_i$、総追跡時間 $V = \sum t_i$ とおくと、 $\log L(\lambda) = d \log \lambda - \lambda V$。
    $\lambda$ で微分して $0$ とおくと、 $\frac{d}{\lambda} - V = 0 \implies \hat{\lambda} = \frac{d}{V} = \frac{\sum \delta_i}{\sum t_i}$。

---

### Q18. マントル・ヘンツェル (MH) オッズ比による交絡調整
$K$ 個の層に分割された $2 \times 2$ 分割表（各セルの度数を $a_h, b_h, c_h, d_h$ 、総数を $n_h$ とする）におけるマントル・ヘンツェルオッズ比推定量 $\hat{\psi}_{\text{MH}}$ の公式を示し、交絡調整における疫学的な意義を説明せよ。

*   **解答・解説**:
    公式: $\hat{\psi}_{\text{MH}} = \frac{\sum_{h=1}^K \frac{a_h d_h}{n_h}}{\sum_{h=1}^K \frac{b_h c_h}{n_h}}$。
    疫学的意義: 交絡因子 $Z$ とリスク要因および疾患に相関がある場合、層分けせずに合算した粗オッズ比にはバイアスが生じる。層別の情報を加重平均して統合するMHオッズ比を用いることで、交絡因子の影響を調整し、シンプソンのパラドックス（層別と合算でのオッズ比の逆転現象）を防ぐことができる。

---

### Q19. メタアナリシス（固定効果 vs 変量効果）
複数の独立した臨床試験の治療効果（効果量）を統合するメタアナリシスにおいて用いられる「固定効果モデル」と「変量効果モデル」の数理的アプローチの違いについて考える。
各研究 $i \ (i=1, \dots, k)$ の観察された効果量を $Y_i$、その標本分散（既知とする）を $s_i^2$ とする。
1. 各モデルにおける効果量 $Y_i$ の数理的な定式化（真の効果量 $\theta_i$ および誤差項の仮定）の違いを明記せよ。
2. 統合効果量 $\hat{\theta}$ を算出する際、各研究に割り当てられるウェイト（重み） $w_i$ の決定方法の違いを数式を用いて説明せよ。

*   **解答・解説**:
    1. 各モデルの定式化の違い：
       - **固定効果モデル**: すべての研究で真の効果量が同一（$\theta_i = \theta$）であると仮定します。
         $$Y_i = \theta + e_i \quad (e_i \sim N(0, s_i^2))$$
       - **変量効果モデル**: 真の効果量は研究ごとに異なり、それら自身がある平均 $\theta$、研究間分散 $\tau^2$ の分布から抽出されたと仮定します。
         $$Y_i = \theta_i + e_i \quad (e_i \sim N(0, s_i^2))$$
         $$\theta_i = \theta + u_i \quad (u_i \sim N(0, \tau^2))$$
         よって、 $Y_i = \theta + u_i + e_i \quad (Var(Y_i) = s_i^2 + \tau^2)$ となります。
    2. 加重平均ウェイト $w_i$ の決定方法：
       統合効果量は、ウェイトを用いた加重平均 $\hat{\theta} = \frac{\sum w_i Y_i}{\sum w_i}$ で求められます。このときのウェイトは分散の逆数（精度）に設定されます。
       - **固定効果モデル**: 研究内分散のみを考慮します。
         $$w_i = \frac{1}{s_i^2}$$
       - **変量効果モデル**: 研究内分散に加えて、研究間分散 $\tau^2$ も加算します。
         $$w_i^* = \frac{1}{s_i^2 + \tau^2}$$
       これにより、変量効果モデルでは、サンプルサイズが大きく研究内分散 $s_i^2$ が極めて小さい特定の研究にウェイトが集中するのを防ぎ、小規模な研究の効果量も相対的に重視されるようになります。

---

## 1. 統計数理分野（追加）

### Q20. 条件付き期待値の性質と分散分解公式の証明
確率変数 $X$ と $Y$ に対し、条件付き期待値 $E[Y|X]$ および条件付き分散 $V(Y|X)$ を定義する。
1. 反復期待値の法則 $E[E[Y|X]] = E[Y]$ を示せ（連続型確率変数の場合で証明せよ）。
2. 分散分解公式（全分散の公式）
   $$V(Y) = E[V(Y|X)] + V(E[Y|X])$$
   を証明せよ。

*   **解答・解説**:
    1.  **反復期待値の法則の証明**
        $X$ と $Y$ の同時確率密度関数を $f(x, y)$ 、 $X$ の周辺確率密度関数を $f_X(x)$ 、 $X=x$ が与えられたときの $Y$ の条件付き確率密度関数を $f_{Y|X}(y|x) = \frac{f(x,y)}{f_X(x)}$ とする。
        条件付き期待値の定義より、
        $$E[Y|X=x] = \int_{-\infty}^\infty y f_{Y|X}(y|x) dy = \int_{-\infty}^\infty y \frac{f(x, y)}{f_X(x)} dy$$
        これの $X$ に関する期待値をとると、
        $$E[E[Y|X]] = \int_{-\infty}^\infty E[Y|X=x] f_X(x) dx = \int_{-\infty}^\infty \left( \int_{-\infty}^\infty y \frac{f(x, y)}{f_X(x)} dy \right) f_X(x) dx$$
        $$= \int_{-\infty}^\infty \int_{-\infty}^\infty y f(x, y) dy dx = \int_{-\infty}^\infty y \left( \int_{-\infty}^\infty f(x, y) dx \right) dy$$
        $$= \int_{-\infty}^\infty y f_Y(y) dy = E[Y]$$
        よって、 $E[E[Y|X]] = E[Y]$ が成り立つ。

    2.  **分散分解公式の証明**
        条件付き分散の定義 $V(Y|X) = E[Y^2|X] - (E[Y|X])^2$ の両辺の期待値をとると、
        $$E[V(Y|X)] = E[E[Y^2|X]] - E[(E[Y|X])^2] = E[Y^2] - E[(E[Y|X])^2]$$
        （ここで反復期待値の法則より $E[E[Y^2|X]] = E[Y^2]$ である）
        次に、確率変数 $E[Y|X]$ の分散は以下のように書ける。
        $$V(E[Y|X]) = E[(E[Y|X])^2] - (E[E[Y|X]])^2 = E[(E[Y|X])^2] - (E[Y])^2$$
        （ここで $E[E[Y|X]] = E[Y]$ である）
        これら2式の和をとると、
        $$E[V(Y|X)] + V(E[Y|X]) = \left( E[Y^2] - E[(E[Y|X])^2] \right) + \left( E[(E[Y|X])^2] - (E[Y])^2 \right)$$
        $$= E[Y^2] - (E[Y])^2 = V(Y)$$
        したがって、 $V(Y) = E[V(Y|X)] + V(E[Y|X])$ が証明された。

---

### Q21. デルタ法を用いた漸近期待値・漸近分散の導出
確率変数数列 $X_n$ が平均 $\mu \neq 0$、分散 $\sigma^2 > 0$ を持ち、 $\sqrt{n}(X_n - \mu) \xrightarrow{d} N(0, \sigma^2)$ と漸近正規性を持つとする。
関数 $g(x) = \frac{1}{x}$ とするとき、以下の問いに答えよ。
1. 1変数のデルタ法（テイラー展開を用いた1次近似）を用いて、 $\sqrt{n}(g(X_n) - g(\mu))$ の漸近分布を導出せよ。
2. 確率変数 $Y_n = \frac{1}{X_n}$ の漸近期待値および漸近分散を $\mu$ と $\sigma^2$ で表せ。

*   **解答・解説**:
    1.  **デルタ法による漸近正規性の導出**
        デルタ法によれば、関数 $g(x)$ が $x=\mu$ で微分可能であり $g'(\mu) \neq 0$ ならば、
        $$\sqrt{n}(g(X_n) - g(\mu)) \xrightarrow{d} N(0, [g'(\mu)]^2 \sigma^2)$$
        が成り立つ。 $g(x) = x^{-1}$ のとき、 $g'(x) = -x^{-2} \implies g'(\mu) = -\frac{1}{\mu^2}$ である。
        これを公式に代入すると、
        $$[g'(\mu)]^2 = \left(-\frac{1}{\mu^2}\right)^2 = \frac{1}{\mu^4}$$
        よって、 $\sqrt{n}\left( \frac{1}{X_n} - \frac{1}{\mu} \right) \xrightarrow{d} N\left(0, \frac{\sigma^2}{\mu^4}\right)$ となる。

    2.  **漸近期待値と漸近分散**
        十分に大きな $n$ に対して、 $\frac{1}{X_n}$ は近似的に正規分布 $N\left(\frac{1}{\mu}, \frac{\sigma^2}{n\mu^4}\right)$ に従う。
        したがって、 $Y_n = \frac{1}{X_n}$ の漸近特性は以下の通りである。
        - 漸近期待値: $E[Y_n] \approx \frac{1}{\mu}$
        - 漸近分散: $V(Y_n) \approx \frac{\sigma^2}{n\mu^4}$

---

### Q22. ベイズ推定における事後分布・信用区間・予測分布の導出
あるコインを投げて表が出る確率を $\theta$ とする。事前分布として一様分布 $Beta(1, 1)$ を仮定し、 $n$ 回投げたところ表が $x$ 回出現した（尤度は二項分布に従う）。
1. $\theta$ の事後分布 $p(\theta|x)$ がベータ分布 $Beta(x+1, n-x+1)$ に従うことを示せ。
2. $n=2, x=2$ のとき、事後確率が $95\%$ となる片側信頼下限（信用下限） $\theta_L$ を求める数式を示せ。
3. 次の新たな試行 $X^* \in \{0, 1\}$ （$X^*=1$ は表）に対するベイズ予測分布 $P(X^*=1|x)$ の値を $n$ と $x$ で表せ。

*   **解答・解説**:
    1.  **事後分布の導出**
        事前分布: $\pi(\theta) = 1 \quad (\theta \in [0, 1])$
        尤度関数: $f(x|\theta) = \binom{n}{x} \theta^x (1-\theta)^{n-x}$
        事後分布の密度は、ベイズの定理より尤度と事前分布の積に比例する。
        $$p(\theta|x) \propto \pi(\theta) f(x|\theta) \propto \theta^x (1-\theta)^{n-x} = \theta^{(x+1)-1} (1-\theta)^{(n-x+1)-1}$$
        これはベータ分布 $Beta(x+1, n-x+1)$ の確率密度のカーネル（核）である。
        積分の正規化定数を考慮すると、事後分布は以下となる。
        $$p(\theta|x) = \frac{1}{B(x+1, n-x+1)} \theta^x (1-\theta)^{n-x}$$

    2.  **片側信用下限 $\theta_L$ の計算**
        $n=2, x=2$ のとき、事後分布は $Beta(3, 1)$ となり、密度関数は $p(\theta|x) = \frac{\Gamma(4)}{\Gamma(3)\Gamma(1)} \theta^2 = 3\theta^2 \quad (\theta \in [0, 1])$。
        信用下限 $\theta_L$ は、 $P(\theta \ge \theta_L | x) = 0.95$ を満たす。
        $$\int_{\theta_L}^1 3\theta^2 d\theta = 0.95 \implies \left[ \theta^3 \right]_{\theta_L}^1 = 1 - \theta_L^3 = 0.95 \implies \theta_L^3 = 0.05 \implies \theta_L = \sqrt[3]{0.05} \approx 0.368$$

    3.  **ベイズ予測分布の導出**
        事後分布で $\theta$ を周辺化する。
        $$P(X^*=1 | x) = \int_0^1 P(X^*=1|\theta) p(\theta|x) d\theta = \int_0^1 \theta \frac{\theta^x (1-\theta)^{n-x}}{B(x+1, n-x+1)} d\theta = \frac{B(x+2, n-x+1)}{B(x+1, n-x+1)}$$
        ベータ関数の定義 $B(a, b) = \frac{\Gamma(a)\Gamma(b)}{\Gamma(a+b)}$ より、
        $$P(X^*=1 | x) = \frac{\Gamma(x+2)\Gamma(n-x+1)}{\Gamma(n+3)} \cdot \frac{\Gamma(n+2)}{\Gamma(x+1)\Gamma(n-x+1)} = \frac{x+1}{n+2}$$

---

## 2. 統計応用：人文科学分野（追加）

### Q23. 項目反応理論 (IRT) における項目情報関数の導出
2パラメータロジスティックモデル（2PLモデル）において、項目 $i$ に対する能力値 $\theta$ の被験者の正答確率を $P_i(\theta) = \frac{1}{1 + \exp(-a_i(\theta - b_i))}$ （$a_i$ は識別力、 $b_i$ は困難度、 $Q_i(\theta) = 1 - P_i(\theta)$ ）とする。
応答変数 $U_i \in \{0, 1\}$ に対するスコア関数の分散として定義される項目情報関数 $I_i(\theta)$ が、次式に一致することを示せ。
$$I_i(\theta) = a_i^2 P_i(\theta) Q_i(\theta)$$

*   **解答・解説**:
    応答 $U_i$ に対する対数尤度は $\log f(u_i|\theta) = u_i \log P_i(\theta) + (1-u_i) \log Q_i(\theta)$。
    ここで正答確率の導関数を求める。 $z = a_i(\theta-b_i)$ とおくと、 $P_i(\theta) = \frac{1}{1+e^{-z}}$。
    $$\frac{dP_i}{d\theta} = \frac{dP_i}{dz} \frac{dz}{d\theta} = (P_i(1-P_i)) a_i = a_i P_i Q_i$$
    同様に $\frac{dQ_i}{d\theta} = -\frac{dP_i}{d\theta} = -a_i P_i Q_i$ である。
    対数尤度を $\theta$ で微分（スコア関数 $S$ ）すると、
    $$S = \frac{\partial \log f(U_i|\theta)}{\partial \theta} = \frac{U_i}{P_i}(a_i P_i Q_i) - \frac{1-U_i}{Q_i}(a_i P_i Q_i) = a_i(U_i Q_i - (1-U_i)P_i) = a_i(U_i - P_i)$$
    項目情報関数 $I_i(\theta)$ はスコア関数の分散である。 $V(U_i) = P_i Q_i$ であるため、
    $$I_i(\theta) = V(S) = V(a_i(U_i - P_i)) = a_i^2 V(U_i) = a_i^2 P_i(\theta) Q_i(\theta)$$

---

### Q24. 多次元尺度構成法 (MDS) におけるヤング・ハウスホルダーの定理と座標導出
$n$ 個の対象間の距離行列 $\mathbf{D} = (d_{ij})$ が与えられたとき、重心を原点とする制約（ $\sum \mathbf{x}_i = \mathbf{0}$ ）のもとで、対象の座標行列 $\mathbf{X} \in \mathbb{R}^{n \times p}$ を構成する古典的MDSの手順について以下の問いに答えよ。
1. 内積行列 $\mathbf{B} = \mathbf{X}\mathbf{X}^T$ （$b_{ij} = \mathbf{x}_i^T\mathbf{x}_j$）の各要素が、距離の平方 $d_{ij}^2$ を用いたヤング・ハウスホルダー変換
   $$b_{ij} = -\frac{1}{2}\left( d_{ij}^2 - \frac{1}{n}\sum_{k=1}^n d_{ik}^2 - \frac{1}{n}\sum_{l=1}^n d_{lj}^2 + \frac{1}{n^2}\sum_{k=1}^n\sum_{l=1}^n d_{kl}^2 \right)$$
   により導出できることを示せ。
2. 内積行列 $\mathbf{B}$ から $p$ 次元空間の座標行列 $\mathbf{X}$ を固有値分解を用いて導出する手順を説明せよ。

*   **解答・解説**:
    1.  **ヤング・ハウスホルダー変換の導出**
        距離の定義より $d_{ij}^2 = \|\mathbf{x}_i - \mathbf{x}_j\|^2 = \mathbf{x}_i^T\mathbf{x}_i + \mathbf{x}_j^T\mathbf{x}_j - 2\mathbf{x}_i^T\mathbf{x}_j = b_{ii} + b_{jj} - 2b_{ij}$。
        重心制約 $\sum_{i=1}^n \mathbf{x}_i = \mathbf{0}$ より、内積行列の行・列和は0となる（ $\sum_{j=1}^n b_{ij} = 0$ ）。
        上の式を $j$ について和をとり $n$ で割ると、
        $$\frac{1}{n}\sum_{j=1}^n d_{ij}^2 = b_{ii} + \frac{1}{n}\text{tr}(\mathbf{B}) \quad (\because \sum_{j} b_{jj} = \text{tr}(\mathbf{B}))$$
        同様に $i$ について和をとり $n$ で割ると、
        $$\frac{1}{n}\sum_{i=1}^n d_{ij}^2 = b_{jj} + \frac{1}{n}\text{tr}(\mathbf{B})$$
        さらに全体 $i, j$ について和をとり $n^2$ で割ると、
        $$\frac{1}{n^2}\sum_{i=1}^n\sum_{j=1}^n d_{ij}^2 = \frac{2}{n}\text{tr}(\mathbf{B})$$
        これらを $b_{ij} = -\frac{1}{2}(d_{ij}^2 - b_{ii} - b_{jj})$ に代入して整理することで、ヤング・ハウスホルダーの公式が導かれる。
        これは行列形式では $\mathbf{B} = -\frac{1}{2} \mathbf{H} \mathbf{D}^{(2)} \mathbf{H}$ （$\mathbf{H} = \mathbf{I} - \frac{1}{n}\mathbf{1}\mathbf{1}^T$ はセンタリング行列）と表現できる。

    2.  **座標行列の導出**
        算出した半正定値行列 $\mathbf{B}$ に対し固有値分解を行う。
        $$\mathbf{B} = \mathbf{V} \boldsymbol{\Lambda} \mathbf{V}^T$$
        最大のものから順に $p$ 個の正の固有値からなる対角行列を $\boldsymbol{\Lambda}_p = \text{diag}(\lambda_1, \dots, \lambda_p)$ とし、対応する固有ベクトル行列を $\mathbf{V}_p \in \mathbb{R}^{n \times p}$ とする。
        内積行列の低次元近似 $\mathbf{B} \approx \mathbf{V}_p \boldsymbol{\Lambda}_p \mathbf{V}_p^T = (\mathbf{V}_p \boldsymbol{\Lambda}_p^{1/2})(\mathbf{V}_p \boldsymbol{\Lambda}_p^{1/2})^T$ より、求める対象の座標行列 $\mathbf{X}$ は以下のように得られる。
        $$\mathbf{X} = \mathbf{V}_p \boldsymbol{\Lambda}_p^{1/2}$$

---

## 3. 統計応用：社会科学分野（追加）

### Q25. 差の差分析 (DID) の数理モデルと平行トレンド仮定
パネルデータを用いて政策効果を評価する差の差分析（Difference-in-Differences: DID）について考える。介入群（$D=1$）、対照群（$D=0$）、政策実施前（$T=0$）、実施後（$T=1$）とする。
1. 差の差推定値 $\hat{\delta}_{\text{DID}}$ を、条件付き期待値 $E[Y|D, T]$ を用いて定式化せよ。
2. 回帰モデル $Y_{it} = \beta_0 + \beta_1 D_i + \beta_2 T_t + \delta(D_i \times T_t) + \epsilon_{it}$ において、交差項の係数 $\delta$ が $\hat{\delta}_{\text{DID}}$ に等しいことを示せ。
3. DID推定値が一貫性を持つための前提となる「平行トレンド仮定（Parallel Trends Assumption）」の数理的表現と疫学・経済学的な意味を説明せよ。

*   **解答・解説**:
    1.  **差の差推定値の定式化**
        $$\hat{\delta}_{\text{DID}} = \left( E[Y|D=1, T=1] - E[Y|D=1, T=0] \right) - \left( E[Y|D=0, T=1] - E[Y|D=0, T=0] \right)$$

    2.  **交差項の係数 $\delta$ の意味の証明**
        回帰モデルの条件付き期待値より、
        - $E[Y|D=0, T=0] = \beta_0$
        - $E[Y|D=0, T=1] = \beta_0 + \beta_2$
        - $E[Y|D=1, T=0] = \beta_0 + \beta_1$
        - $E[Y|D=1, T=1] = \beta_0 + \beta_1 + \beta_2 + \delta$
        これらを 1 の式に代入する。
        $$\hat{\delta}_{\text{DID}} = \left( (\beta_0 + \beta_1 + \beta_2 + \delta) - (\beta_0 + \beta_1) \right) - \left( (\beta_0 + \beta_2) - \beta_0 \right) = (\beta_2 + \delta) - \beta_2 = \delta$$
        よって、交差項のOLS推定量 $\hat{\delta}$ は差の差推定値に一致する。

    3.  **平行トレンド仮定**
        - 数理表現: 政策未実施時の潜在結果を $Y^0$ とするとき、
          $$E[Y^0|D=1, T=1] - E[Y^0|D=1, T=0] = E[Y^0|D=0, T=1] - E[Y^0|D=0, T=0]$$
        - 意味: 「もし介入群に対する政策介入が実施されなかったならば、介入群の目的変数の時間的推移（トレンド）は対照群の推移と平行であった」という仮定。この仮定が満たされない場合、両群の本来のトレンド差が政策効果の推定量 $\delta$ に混入し、バイアスが生じる。

---

### Q26. 選択バイアスとヘックマンの2段階推定法
就業選択などによってデータが非ランダムに欠損する場合のサンプル選択バイアス（Selection Bias）を補正するヘックマン（Heckman）の2段階推定法について考える。
主方程式: $Y_i = \mathbf{X}_i \boldsymbol{\beta} + u_{1i}$ 、 選択方程式: $Z_i^* = \mathbf{W}_i \boldsymbol{\gamma} + u_{2i}$ （観測ダミー $Z_i = I(Z_i^* > 0)$、 $(u_1, u_2)$ は相関係数 $\rho$ の2次元正規分布に従う）とする。
1. 観測されるサンプル（$Z_i = 1$）の条件付き期待値 $E[Y_i | \mathbf{X}_i, Z_i = 1]$ を求め、逆ミルズ比 $\lambda(\mathbf{W}_i\boldsymbol{\gamma}) = \frac{\phi(\mathbf{W}_i\boldsymbol{\gamma})}{\Phi(\mathbf{W}_i\boldsymbol{\gamma})}$ を用いて表せ。
2. 2段階推定法の具体的な手順を説明せよ。

*   **解答・解説**:
    1.  **条件付き期待値と逆ミルズ比の導出**
        誤差項の正規性の仮定より、 $E[u_{1i}|u_{2i}] = \rho \sigma_1 u_{2i}$ となる。
        観測条件 $u_{2i} > -\mathbf{W}_i\boldsymbol{\gamma}$ のもとでの条件付き期待値は、
        $$E[Y_i | \mathbf{X}_i, Z_i = 1] = \mathbf{X}_i \boldsymbol{\beta} + E[u_{1i} | u_{2i} > -\mathbf{W}_i\boldsymbol{\gamma}] = \mathbf{X}_i \boldsymbol{\beta} + \rho \sigma_1 E[u_{2i} | u_{2i} > -\mathbf{W}_i\boldsymbol{\gamma}]$$
        標準正規分布の切断分布の期待値公式 $E[Z | Z > c] = \frac{\phi(c)}{1-\Phi(c)} = \frac{\phi(-c)}{\Phi(-c)}$ より、
        $$E[u_{2i} | u_{2i} > -\mathbf{W}_i\boldsymbol{\gamma}] = \frac{\phi(-\mathbf{W}_i\boldsymbol{\gamma})}{1-\Phi(-\mathbf{W}_i\boldsymbol{\gamma})} = \frac{\phi(\mathbf{W}_i\boldsymbol{\gamma})}{\Phi(\mathbf{W}_i\boldsymbol{\gamma})} = \lambda(\mathbf{W}_i\boldsymbol{\gamma})$$
        したがって、 $E[Y_i | \mathbf{X}_i, Z_i = 1] = \mathbf{X}_i \boldsymbol{\beta} + \rho \sigma_1 \lambda(\mathbf{W}_i\boldsymbol{\gamma})$ となる。通常のOLSでは逆ミルズ比の項が漏れているため、 $\rho \neq 0$ のときに選択バイアスが生じる。

    2.  **2段階推定の手順**
        - **第1段階**: 全サンプルを用いて $Z_i$ を被説明変数とするプロビット（Probit）モデルを推定し、パラメータ $\hat{\boldsymbol{\gamma}}$ を得る。これをもとに各サンプルの逆ミルズ比の推定値 $\hat{\lambda}_i = \frac{\phi(\mathbf{W}_i\hat{\boldsymbol{\gamma}})}{\Phi(\mathbf{W}_i\hat{\boldsymbol{\gamma}})}$ を算出する。
        - **第2段階**: 観測サンプル（$Z_i=1$）のみを用いて、目的変数 $Y_i$ を $\mathbf{X}_i$ および算出した $\hat{\lambda}_i$ に線形回帰（OLS）し、パラメータ $\boldsymbol{\beta}$ と $\theta = \rho \sigma_1$ の一致推定量を得る。

---

## 4. 統計応用：理工学分野（追加）

### Q27. 実験計画法における分割法の構造モデルと期待平均平方の導出
各大区画に1次要因A（水準数 $a$）を割り当て、さらに細分化した小区画に2次要因B（水準数 $b$）を割り当てる分割法（Split-plot design）を考える。ブロック数を $r$ とする。
線形モデル: $Y_{ijk} = \mu + \theta_i + \alpha_j + \eta_{ij} + \beta_k + (\alpha\beta)_{jk} + \epsilon_{ijk}$ （大区画誤差 $\eta_{ij} \sim N(0, \sigma_w^2)$、 小区画誤差 $\epsilon_{ijk} \sim N(0, \sigma_e^2)$、固定効果モデル）とする。
1. 大区画誤差 $\eta_{ij}$ と小区画誤差 $\epsilon_{ijk}$ の確率的な性質と共分散構造の違いについて説明せよ。
2. 因子Aと因子Bの効果を検定するための適切なF統計量の構成方法（分母に用いる平均平方 MS）を、期待平均平方（EMS）を用いて説明せよ。

*   **解答・解説**:
    1.  **誤差構造の違い**
        - $\eta_{ij}$ は大区画に生じる誤差であり、同一の大区画（同一ブロック・同一のAの水準）に属する複数の小区画のデータ間で共有される。よって、大区画内の小区画データ間には共分散 $Cov(Y_{ijk}, Y_{ij'k'}) = \sigma_w^2 \ (k \neq k')$ が生じる。
        - $\epsilon_{ijk}$ は個々の小区画に生じる独立な通常の測定誤差（分散 $\sigma_e^2$）である。

    2.  **期待平均平方 (EMS) と検定統計量の構成**
        各大区画効果および小区画効果に対応する平均平方期待値は以下のようになる。
        - 1次要因A: $E[MS_A] = \sigma_e^2 + b\sigma_w^2 + \frac{rb\sum\alpha_j^2}{a-1}$
        - 大区画残差（残差1）: $E[MS_{Error1}] = \sigma_e^2 + b\sigma_w^2$
        - 2次要因B: $E[MS_B] = \sigma_e^2 + \frac{ra\sum\beta_k^2}{b-1}$
        - 交互作用AB: $E[MS_{AB}] = \sigma_e^2 + \frac{r\sum\sum(\alpha\beta)_{jk}^2}{(a-1)(b-1)}$
        - 小区画残差（残差2）: $E[MS_{Error2}] = \sigma_e^2$

        - **要因A（大区画要因）の検定**:
          帰無仮説 $H_{0A}: \alpha_j = 0$ のもとで $E[MS_A] = E[MS_{Error1}]$ となるため、大区画残差を用いて $F_A = \frac{MS_A}{MS_{Error1}}$ とする。
        - **要因Bおよび交互作用AB（小区画要因）の検定**:
          帰無仮説のもとで平均平方期待値は $\sigma_e^2$ となるため、小区画残差を用いて $F_B = \frac{MS_B}{MS_{Error2}}$ 、 $F_{AB} = \frac{MS_{AB}}{MS_{Error2}}$ とする。

---

### Q28. 信頼性工学における加速寿命試験とアレニウスモデル
絶対温度 $T$ （K）のもとでの特性寿命を $\theta$ とし、アレニウスモデル $\ln \theta = \beta_0 + \beta_1(1/T)$ （$\beta_1 = E_a/k_B$）を仮定する。
1. 使用温度 $T_0 = 300\text{K}$ における平均寿命 $\theta_0$ と、加速試験温度 $T_1 = 375\text{K}$ における平均寿命 $\theta_1$ の比である「加速係数（Acceleration Factor: AF）」 $AF = \theta_0/\theta_1$ を、活性化エネルギー $E_a$ およびボルツマン定数 $k_B$ を用いて表す式を導出せよ。
2. 寿命分布にワイブル分布 $F(t) = 1 - \exp(-(t/\eta)^m)$ を仮定し、形状母数 $m$ は温度によらず一定であり、尺度母数 $\eta$ がアレニウス則に従うとする。
   温度 $T_1$ で測定された累積故障確率 $p$ への到達時間 $t_{p, T_1}$ から、使用温度 $T_0$ における到達時間 $t_{p, T_0}$ を予測する式を示せ。

*   **解答・解説**:
    1.  **加速係数の導出**
        モデルの式より、
        $$\ln\theta_0 = \beta_0 + \frac{E_a}{k_B T_0}, \quad \ln\theta_1 = \beta_0 + \frac{E_a}{k_B T_1}$$
        両者の差をとると、
        $$\ln\left(\frac{\theta_0}{\theta_1}\right) = \frac{E_a}{k_B} \left( \frac{1}{T_0} - \frac{1}{T_1} \right)$$
        したがって、加速係数 $AF$ は以下となる。
        $$AF = \exp\left( \frac{E_a}{k_B} \left( \frac{1}{T_0} - \frac{1}{T_1} \right) \right)$$

    2.  **通常温度における故障時間の予測**
        累積故障確率 $p$ と故障時間 $t_p$ の関係は $t_p = \eta (-\ln(1-p))^{1/m}$ である。
        $m$ が一定であるため、温度 $T_0$ と $T_1$ の故障時間比は尺度母数の比に等しい。
        $$\frac{t_{p, T_0}}{t_{p, T_1}} = \frac{\eta_{T_0}}{\eta_{T_1}}$$
        尺度母数 $\eta$ も平均寿命と同様にアレニウス則に従うため、その比は加速係数 $AF$ に等しくなる。
        よって、通常温度での故障時間の予測式は以下となる。
        $$t_{p, T_0} = t_{p, T_1} \times AF = t_{p, T_1} \exp\left( \frac{E_a}{k_B} \left( \frac{1}{T_0} - \frac{1}{T_1} \right) \right)$$

---

## 5. 統計応用：医薬生物学分野（追加）

### Q29. コックス比例ハザードモデルにおける偏尤度 (Partial Likelihood) の導出
被験者 $i$ のハザードを $h_i(t) = h_0(t) \exp(\boldsymbol{\beta}^T \mathbf{x}_i)$ とする。打ち切りのない $D$ 個のイベント（死亡）がそれぞれ異なる時刻 $t_{(1)} < t_{(2)} < \dots < t_{(D)}$ で発生したとする。
時刻 $t_{(j)}$ における死亡個体のインデックスを $i_j$、その直前の生存者集合（リスクセット）を $R(t_{(j)})$ とする。
1. 時刻 $t_{(j)}$ においてイベントが発生したという条件のもとで、「実際にイベントを起こしたのが個体 $i_j$ である条件付き確率」を求め、これが基準ハザード $h_0(t)$ に依存しないことを示せ。
2. これに基づいて、コックスの偏尤度関数 $L_p(\boldsymbol{\beta})$ を定式化せよ。

*   **解答・解説**:
    1.  **条件付き確率の導出**
        時刻 $t_{(j)}$ においてリスクセット $R(t_{(j)})$ の中のいずれかの個体がイベントを起こすとき、それが特定の個体 $i_j$ である条件付き確率は、個々のハザードの比で表される。
        $$P(i_j | \text{event at } t_{(j)}) = \frac{h_{i_j}(t_{(j)})}{\sum_{k \in R(t_{(j)})} h_k(t_{(j)})}$$
        ここにコックスモデルのハザード式を代入する。
        $$\frac{h_0(t_{(j)}) \exp(\boldsymbol{\beta}^T \mathbf{x}_{i_j})}{\sum_{k \in R(t_{(j)})} h_0(t_{(j)}) \exp(\boldsymbol{\beta}^T \mathbf{x}_k)} = \frac{\exp(\boldsymbol{\beta}^T \mathbf{x}_{i_j})}{\sum_{k \in R(t_{(j)})} \exp(\boldsymbol{\beta}^T \mathbf{x}_k)}$$
        分子と分母で共通する基準ハザード $h_0(t_{(j)})$ が相殺されるため、この条件付き確率は基準ハザードに依存しない。

    2.  **偏尤度の定式化**
        各イベント発生時点の条件付き確率の積をとることで、偏尤度関数 $L_p(\boldsymbol{\beta})$ が定式化される。
        $$L_p(\boldsymbol{\beta}) = \prod_{j=1}^D \frac{\exp(\boldsymbol{\beta}^T \mathbf{x}_{i_j})}{\sum_{k \in R(t_{(j)})} \exp(\boldsymbol{\beta}^T \mathbf{x}_k)}$$
        この関数は最尤推定と同様に対数をとって微分することで、基準ハザード $h_0(t)$ を一切特定することなく、回帰パラメータ $\boldsymbol{\beta}$ の推定を行うことを可能にする。
