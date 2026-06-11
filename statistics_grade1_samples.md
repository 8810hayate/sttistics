# 統計検定1級 分野別サンプル問題集（記述式）

統計検定1級は完全記述式の筆記試験（記述式）です。統計学の数理的な証明力と、各応用分野（人文・社会・理工・医薬）における深いモデリング能力を測るための、代表的なサンプル問題と解答・解説です。

---

## 1. 統計数理（共通科目 - 推測統計）
### 📌 キーワード：ラオ・ブラックウェルの定理 / UMVUEの導出

#### 【問題】
確率変数 $X_1, X_2, \dots, X_n$ は、互いに独立に平均 $\lambda \ (\lambda > 0)$ のポアソン分布に従うランダムサンプルとする。
このとき、パラメータ $\theta = e^{-\lambda}$ （すなわち $P(X_1 = 0)$ ）に対する**一様最小分散不偏推定量（UMVUE）**を求めよ。
不偏統計量として $W = I(X_1 = 0)$ （$X_1 = 0$ のとき $1$、それ以外で $0$ をとる指示関数）を出発点とし、十分統計量による条件付き期待値を利用して導出せよ。

#### 【解答・解説】
1.  **完備十分統計量の特定**
    ポアソン分布の同時確率質量関数は以下のようになります。
    $$P(X_1=x_1, \dots, X_n=x_n) = \prod_{i=1}^n \frac{\lambda^{x_i} e^{-\lambda}}{x_i!} = \frac{\lambda^{\sum x_i} e^{-n\lambda}}{\prod x_i!}$$
    因子分解定理より、$T = \sum_{i=1}^n X_i$ は $\lambda$ に対する十分統計量である。
    また、ポアソン分布は指数型分布族に属するため、十分統計量 $T$ は完備（Complete）十分統計量である。
    $T \sim \text{Poisson}(n\lambda)$ に従う。

2.  **初期の不偏推定量の設定**
    与えられた $W = I(X_1 = 0)$ について、その期待値を計算する。
    $$E[W] = 1 \cdot P(X_1 = 0) + 0 \cdot P(X_1 \neq 0) = P(X_1 = 0) = e^{-\lambda}$$
    したがって、$W$ は $\theta = e^{-\lambda}$ の不偏推定量である。

3.  **ラオ・ブラックウェルの定理とレーマン・シェフェの定理の適用**
    完備十分統計量 $T$ のもとでの $W$ の条件付き期待値 $\hat{\theta} = E[W | T]$ を求めれば、これは $\theta$ の不偏推定量であり、かつ唯一の一様最小分散不偏推定量（UMVUE）となる。
    $$E[W | T = t] = P(X_1 = 0 | T = t)$$
    定義式より、これを計算する。
    $$P(X_1 = 0 | T = t) = \frac{P(X_1 = 0 \text{ かつ } \sum_{i=1}^n X_i = t)}{P(\sum_{i=1}^n X_i = t)} = \frac{P(X_1 = 0 \text{ かつ } \sum_{i=2}^n X_i = t)}{P(\sum_{i=1}^n X_i = t)}$$
    $X_1$ と $\sum_{i=2}^n X_i$ は独立であり、後者は $\text{Poisson}((n-1)\lambda)$ に従うため、
    $$P(X_1 = 0 | T = t) = \frac{e^{-\lambda} \cdot \frac{((n-1)\lambda)^t e^{-(n-1)\lambda}}{t!}}{\frac{(n\lambda)^t e^{-n\lambda}}{t!}} = \frac{(n-1)^t}{n^t} = \left(1 - \frac{1}{n}\right)^t$$

4.  **結論**
    したがって、求めるUMVUEは以下のように表される。
    $$\hat{\theta}_{\text{UMVUE}} = \left(1 - \frac{1}{n}\right)^T = \left(1 - \frac{1}{n}\right)^{\sum_{i=1}^n X_i}$$

---

## 2. 統計数理（共通科目 - 仮説検定）
### 📌 キーワード：尤度比検定（LRT）と漸近検定理論

#### 【問題】
確率変数 $X_1, X_2, \dots, X_n$ は、互いに独立に平均 $\lambda \ (\lambda > 0)$ のポアソン分布に従うとする。
ここで、パラメータ $\lambda$ に関する仮説検定：
$$H_0: \lambda = \lambda_0 \quad \text{vs} \quad H_1: \lambda \neq \lambda_0$$
を考える（$\lambda_0$ は与えられた定数）。
1.  この検定に対する尤度比検定統計量 $\Lambda(X) = \frac{L(\lambda_0)}{L(\bar{X})}$ に対し、 $-2 \log \Lambda(X)$ を標本平均 $\bar{X}$ を用いて表せ。
2.  帰無仮説 $H_0$ が正しいとき、標本サイズ $n \to \infty$ における $-2 \log \Lambda(X)$ の漸近分布を述べよ。

#### 【解答・解説】
1.  **尤度比検定統計量 $-2 \log \Lambda(X)$ の導出**
    ポアソン標本に対する尤度関数 $L(\lambda)$ は次のようになります。
    $$L(\lambda) = \frac{\lambda^{n\bar{X}} e^{-n\lambda}}{\prod X_i!}$$
    最尤推定量は $\hat{\lambda} = \bar{X}$ です。尤度比 $\Lambda(X)$ は以下の通りです。
    $$\Lambda(X) = \frac{L(\lambda_0)}{L(\bar{X})} = \left( \frac{\lambda_0}{\bar{X}} \right)^{n\bar{X}} e^{-n(\lambda_0 - \bar{X})}$$
    
    対数をとって $-2$ 倍します。
    $$-2 \log \Lambda(X) = -2 \left[ n\bar{X} \log\left(\frac{\lambda_0}{\bar{X}}\right) - n(\lambda_0 - \bar{X}) \right] = 2n \left[ \bar{X} \log\left(\frac{\bar{X}}{\lambda_0}\right) - (\bar{X} - \lambda_0) \right]$$

2.  **漸近分布（ウィルクスの定理）**
    パラメータ空間の次元は $1$、帰無仮説のもとでの次元は $0$（点制約）です。
    ウィルクスの定理より、帰無仮説 $H_0$ のもとで $n \to \infty$ のとき、 $-2 \log \Lambda(X)$ は自由度 `1 - 0 = 1` のカイ二乗分布に法則収束します。
    
    したがって、求める漸近分布は、**自由度 1 のカイ二乗分布 $\chi^2(1)$** です。
    $$-2 \log \Lambda(X) \xrightarrow{d} \chi^2(1) \quad (n \to \infty)$$

---

## 3. 統計数理（共通科目 - 確率論）
### 📌 キーワード：順序統計量と極限分布（極値分布）

#### 【問題】
互いに独立にパラメータ $\lambda = 1$ の指数分布に従う確率変数 $X_1, X_2, \dots, X_n$ がある。累積分布関数は $F(x) = 1 - e^{-x} \ (x \geq 0)$ である。
ここで、最大値（最大順序統計量）を $Y_n = \max(X_1, \dots, X_n)$ とする。
1.  $Y_n$ の累積分布関数 $F_{Y_n}(y)$ を求めよ。
2.  新たな変数 $Z_n = Y_n - \log n$ を定義するとき、 $n \to \infty$ における $Z_n$ の限界分布（極限累積分布関数） $G(z) = \lim_{n\to\infty} P(Z_n \leq z)$ を求めよ。

#### 【解答・解説】
1.  **$Y_n$ の累積分布関数の導出**
    最大値 $Y_n$ が $y$ 以下であることは、すべての $X_i$ が $y$ 以下であることと同値です。独立性より、
    $$F_{Y_n}(y) = P(Y_n \leq y) = P(X_1 \leq y, \dots, X_n \leq y) = \prod_{i=1}^n P(X_i \leq y) = [F(y)]^n$$
    よって、
    $$F_{Y_n}(y) = \left( 1 - e^{-y} \right)^n \quad (y \geq 0)$$

2.  **$Z_n = Y_n - \log n$ の極限分布の導出**
    $Z_n$ の累積分布関数 $F_{Z_n}(z)$ は、 $Y_n = Z_n + \log n$ より、
    $$F_{Z_n}(z) = F_{Y_n}(z + \log n)$$
    $$F_{Z_n}(z) = \left( 1 - e^{-(z + \log n)} \right)^n = \left( 1 - e^{-z} e^{-\log n} \right)^n = \left( 1 - \frac{e^{-z}}{n} \right)^n$$
    ここで、 $n \to \infty$ の極限をとります。
    $$G(z) = \lim_{n\to\infty} \left( 1 - \frac{e^{-z}}{n} \right)^n = \exp\left( -e^{-z} \right) \quad (-\infty < z < \infty)$$

    この極限分布は**ガンベル（Gumbel）分布**（極値分布のタイプI）として知られています。

---

## 4. 統計数理（共通科目 - 極限定理）
### 📌 キーワード：モーメント母関数を用いた中心極限定理の証明

#### 【問題】
確率変数 $X_1, X_2, \dots, X_n$ は、平均 $E[X_i] = \mu$ 、分散 $V[X_i] = \sigma^2 \ (0 < \sigma^2 < \infty)$ の同一分布に従い、互いに独立であるとする。
また、 $X_i$ のモーメント母関数 $M_X(t) = E[e^{tX}]$ は、原点の近傍で存在すると仮定する。
ここで、標準化された標本平均を次のように定義する。
$$Z_n = \frac{\bar{X} - \mu}{\sigma / \sqrt{n}} = \frac{\sum_{i=1}^n (X_i - \mu)}{\sigma \sqrt{n}}$$
$n \to \infty$ のとき、 $Z_n$ のモーメント母関数 $M_{Z_n}(t)$ が標準正規分布のモーメント母関数 $e^{t^2/2}$ に収束することを示し、中心極限定理を証明せよ。

#### 【解答・解説】
1.  **変数の標準化とモーメント母関数の書き換え**
    計算を簡略化するため、 $Y_i = \frac{X_i - \mu}{\sigma}$ とおく。このとき $E[Y_i] = 0$ 、 $V[Y_i] = 1$ である。
    $Z_n$ は次のように書ける。
    $$Z_n = \frac{1}{\sqrt{n}} \sum_{i=1}^n Y_i$$
    $Y_i$ は互いに独立で同一のモーメント母関数 $M_Y(t) = E[e^{tY_i}]$ を持つため、 $Z_n$ のモーメント母関数は積に分解できる。
    $$M_{Z_n}(t) = E\left[ \exp\left( t \cdot \frac{1}{\sqrt{n}} \sum_{i=1}^n Y_i \right) \right] = \prod_{i=1}^n E\left[ \exp\left( \frac{t}{\sqrt{n}} Y_i \right) \right] = \left[ M_Y\left( \frac{t}{\sqrt{n}} \right) \right]^n$$

2.  **マクローリン展開（テイラー展開）の適用**
    $M_Y(s)$ を原点 $s=0$ の周りでマクローリン展開する。
    $$M_Y(s) = M_Y(0) + M_Y'(0)s + \frac{1}{2!} M_Y''(0)s^2 + o(s^2)$$
    ここで、モーメント母関数の性質より、
    - $M_Y(0) = 1$
    - $M_Y'(0) = E[Y_i] = 0$
    - $M_Y''(0) = E[Y_i^2] = V[Y_i] + (E[Y_i])^2 = 1$
    である。よって、
    $$M_Y(s) = 1 + 0 \cdot s + \frac{1}{2} s^2 + o(s^2) = 1 + \frac{1}{2} s^2 + o(s^2)$$

3.  **極限の計算**
    $s = \frac{t}{\sqrt{n}}$ を代入する。 $n \to \infty$ のとき $s \to 0$ である。
    $$M_Y\left( \frac{t}{\sqrt{n}} \right) = 1 + \frac{t^2}{2n} + o\left(\frac{t^2}{n}\right)$$
    これを $M_{Z_n}(t)$ の式に代入する。
    $$M_{Z_n}(t) = \left[ 1 + \frac{t^2}{2n} + o\left(\frac{1}{n}\right) \right]^n$$
    両辺の自然対数をとる。
    $$\log M_{Z_n}(t) = n \log\left( 1 + \frac{t^2}{2n} + o\left(\frac{1}{n}\right) \right)$$
    $\log(1+x) = x - \frac{x^2}{2} + \dots$ のテイラー展開を用いると、
    $$\log M_{Z_n}(t) = n \left[ \frac{t^2}{2n} + o\left(\frac{1}{n}\right) \right] = \frac{t^2}{2} + n \cdot o\left(\frac{1}{n}\right)$$
    $n \to \infty$ の極限をとる。
    $$\lim_{n\to\infty} \log M_{Z_n}(t) = \frac{t^2}{2} \implies \lim_{n\to\infty} M_{Z_n}(t) = e^{t^2/2}$$

    この極限 $e^{t^2/2}$ は標準正規分布 $N(0, 1)$ のモーメント母関数である。
    モーメント母関数の収束定理により、 $Z_n$ は $n \to \infty$ のとき標準正規分布に法則収束することが示された。（証明終）

---

## 5. 統計数理（共通科目 - 線形モデル）
### 📌 キーワード：ガウス・マルコフの定理の証明

#### 【問題】
次の線形回帰モデルを考える。
$$\mathbf{Y} = \mathbf{X}\boldsymbol{\beta} + \boldsymbol{\epsilon}$$
ここで、 $\mathbf{Y}$ は $n \times 1$ の被説明変数ベクトル、 $\mathbf{X}$ は $n \times k$ の既知の計画行列（列フルランク: $\text{rank}(\mathbf{X}) = k$）、 $\boldsymbol{\beta}$ は $k \times 1$ の未知パラメータベクトル、 $\boldsymbol{\epsilon}$ は誤差項ベクトルである。
誤差項に関して、以下の仮定（ガウス・マルコフの仮定）を置く。
- $E[\boldsymbol{\epsilon}] = \mathbf{0}$
- $Var(\boldsymbol{\epsilon}) = E[\boldsymbol{\epsilon}\boldsymbol{\epsilon}^T] = \sigma^2 \mathbf{I}_n \ (0 < \sigma^2 < \infty)$

パラメータの最小二乗（OLS）推定量は $\hat{\boldsymbol{\beta}} = (\mathbf{X}^T\mathbf{X})^{-1}\mathbf{X}^T\mathbf{Y}$ で与えられる。
任意の $k \times 1$ 定数ベクトル $\mathbf{c}$ に対して、 $\mathbf{c}^T\boldsymbol{\beta}$ の線形不偏推定量 $\mathbf{a}^T\mathbf{Y}$ を考える（$\mathbf{a}$ は $n \times 1$ ベクトル）。
このとき、最小二乗推定量による推定値 $\mathbf{c}^T\hat{\boldsymbol{\beta}}$ の分散が、任意の線形不偏推定量 $\mathbf{a}^T\mathbf{Y}$ の分散以下になること（すなわち、OLS推定量が**最良線形不偏推定量（BLUE）**であること）を証明せよ。

#### 【解答・解説】
1.  **線形不偏推定量の条件**
    $\mathbf{a}^T\mathbf{Y}$ が $\mathbf{c}^T\boldsymbol{\beta}$ の不偏推定量であるための条件を求める。
    $$E[\mathbf{a}^T\mathbf{Y}] = E[\mathbf{a}^T(\mathbf{X}\boldsymbol{\beta} + \boldsymbol{\epsilon})] = \mathbf{a}^T\mathbf{X}\boldsymbol{\beta} + \mathbf{a}^T E[\boldsymbol{\epsilon}] = \mathbf{a}^T\mathbf{X}\boldsymbol{\beta}$$
    これが任意の $\boldsymbol{\beta}$ に対して $\mathbf{c}^T\boldsymbol{\beta}$ と一致する必要があるため、以下の制約条件が必要となる。
    $$\mathbf{a}^T\mathbf{X} = \mathbf{c}^T \implies \mathbf{X}^T\mathbf{a} = \mathbf{c}$$

2.  **OLS推定量の線形性と不偏性**
    OLS推定量による推測値 $\mathbf{c}^T\hat{\boldsymbol{\beta}}$ を $\mathbf{a}_0^T\mathbf{Y}$ とおくと、
    $$\mathbf{c}^T\hat{\boldsymbol{\beta}} = \mathbf{c}^T(\mathbf{X}^T\mathbf{X})^{-1}\mathbf{X}^T\mathbf{Y} = \mathbf{a}_0^T\mathbf{Y}$$
    ここで $\mathbf{a}_0 = \mathbf{X}(\mathbf{X}^T\mathbf{X})^{-1}\mathbf{c}$ である。
    $\mathbf{a}_0$ が不偏性の条件を満たしているか確認する。
    $$\mathbf{X}^T\mathbf{a}_0 = \mathbf{X}^T\mathbf{X}(\mathbf{X}^T\mathbf{X})^{-1}\mathbf{c} = \mathbf{c}$$
    よって、 OLS推定量も線形不偏推定量の一つである。

3.  **分散の比較**
    任意の線形不偏推定量における係数ベクトル $\mathbf{a}$ を、 $\mathbf{a} = \mathbf{a}_0 + \mathbf{d}$ と分解して書く（$\mathbf{d}$ は差分ベクトル）。
    不偏性の条件より、
    $$\mathbf{X}^T\mathbf{a} = \mathbf{X}^T(\mathbf{a}_0 + \mathbf{d}) = \mathbf{c} \implies \mathbf{X}^T\mathbf{a}_0 + \mathbf{X}^T\mathbf{d} = \mathbf{c}$$
    $\mathbf{X}^T\mathbf{a}_0 = \mathbf{c}$ であるため、差分ベクトルは以下を満たす必要がある。
    $$\mathbf{X}^T\mathbf{d} = \mathbf{0} \implies \mathbf{d}^T\mathbf{X} = \mathbf{0}^T$$
    
    ここで、任意の $\mathbf{a}^T\mathbf{Y}$ の分散を計算する。
    $$Var(\mathbf{a}^T\mathbf{Y}) = \mathbf{a}^T Var(\mathbf{Y}) \mathbf{a} = \mathbf{a}^T (\sigma^2 \mathbf{I}_n) \mathbf{a} = \sigma^2 \mathbf{a}^T\mathbf{a}$$
    $\mathbf{a} = \mathbf{a}_0 + \mathbf{d}$ を代入する。
    $$Var(\mathbf{a}^T\mathbf{Y}) = \sigma^2 (\mathbf{a}_0 + \mathbf{d})^T(\mathbf{a}_0 + \mathbf{d}) = \sigma^2 \left( \mathbf{a}_0^T\mathbf{a}_0 + 2\mathbf{d}^T\mathbf{a}_0 + \mathbf{d}^T\mathbf{d} \right)$$
    ここで、交差項 $\mathbf{d}^T\mathbf{a}_0$ を計算する。
    $$\mathbf{d}^T\mathbf{a}_0 = \mathbf{d}^T\mathbf{X}(\mathbf{X}^T\mathbf{X})^{-1}\mathbf{c}$$
    $\mathbf{d}^T\mathbf{X} = \mathbf{0}^T$ であるため、
    $$\mathbf{d}^T\mathbf{a}_0 = \mathbf{0}^T(\mathbf{X}^T\mathbf{X})^{-1}\mathbf{c} = 0$$
    したがって、分散の式は以下のように簡略化される。
    $$Var(\mathbf{a}^T\mathbf{Y}) = \sigma^2 \mathbf{a}_0^T\mathbf{a}_0 + \sigma^2 \mathbf{d}^T\mathbf{d}$$
    ここで、右辺第1項はまさに OLS推定値の分散 $Var(\mathbf{c}^T\hat{\boldsymbol{\beta}}) = \sigma^2 \mathbf{a}_0^T\mathbf{a}_0$ であり、第2項はノルムであるため非負 $\sigma^2 \mathbf{d}^T\mathbf{d} \geq 0$ である。
    よって、
    $$Var(\mathbf{a}^T\mathbf{Y}) \geq Var(\mathbf{c}^T\hat{\boldsymbol{\beta}})$$
    
    等号成立は $\mathbf{d} = \mathbf{0}$ すなわち $\mathbf{a} = \mathbf{a}_0$ のときのみである。
    したがって、最小二乗推定量は線形不偏推定量の中で最小の分散を持つ（BLUEである）。（証明終）

---

## 6. 統計応用（分野：人文科学）
### 📌 キーワード：因子分析モデルの共分散構造

#### 【問題】
人文科学における知能テストや意識調査などで広く用いられる、 $p$ 次元の観測変数ベクトル $\mathbf{X} = (X_1, \dots, X_p)^T$ に対する直交因子分析モデルを考える。
モデル式は以下のように表される。
$$\mathbf{X} = \boldsymbol{\mu} + \boldsymbol{\Lambda}\mathbf{f} + \boldsymbol{\epsilon}$$
ここで、
- $\boldsymbol{\mu}$: $p \times 1$ の平均ベクトル
- $\boldsymbol{\Lambda}$: $p \times m$ の因子負荷量行列（$m < p$）
- $\mathbf{f}$: $m \times 1$ の共通因子ベクトル
- $\boldsymbol{\epsilon}$: $p \times 1$ の独自因子（特殊因子）ベクトル
である。
モデルに関して以下の仮定を置く。
- $E[\mathbf{f}] = \mathbf{0}$、 $Var(\mathbf{f}) = E[\mathbf{f}\mathbf{f}^T] = \mathbf{I}_m$（共通因子は無相関かつ標準化されている）
- $E[\boldsymbol{\epsilon}] = \mathbf{0}$、 $Var(\boldsymbol{\epsilon}) = E[\boldsymbol{\epsilon}\boldsymbol{\epsilon}^T] = \boldsymbol{\Psi} = \text{diag}(\psi_1^2, \dots, \psi_p^2)$（独自因子は互いに無相関で対角行列）
- $E[\mathbf{f}\boldsymbol{\epsilon}^T] = \mathbf{O}$（共通因子と独自因子は無相関）

このとき、観測変数 $\mathbf{X}$ の共分散行列 $\boldsymbol{\Sigma} = Var(\mathbf{X})$ が、因子負荷量と独自因子分散を用いて次のように分解できることを示せ。
$$\boldsymbol{\Sigma} = \boldsymbol{\Lambda}\boldsymbol{\Lambda}^T + \boldsymbol{\Psi}$$

#### 【解答・解説】
1.  **共分散行列の定義**
    共分散行列 $\boldsymbol{\Sigma}$ の定義は以下の通りです。
    $$\boldsymbol{\Sigma} = E[(\mathbf{X} - \boldsymbol{\mu})(\mathbf{X} - \boldsymbol{\mu})^T]$$
    モデル式より、 $\mathbf{X} - \boldsymbol{\mu} = \boldsymbol{\Lambda}\mathbf{f} + \boldsymbol{\epsilon}$ であるため、
    $$\boldsymbol{\Sigma} = E\left[ (\boldsymbol{\Lambda}\mathbf{f} + \boldsymbol{\epsilon})(\boldsymbol{\Lambda}\mathbf{f} + \boldsymbol{\epsilon})^T \right]$$
    
2.  **積の展開**
    行列の転置の性質 $(A+B)^T = A^T + B^T$ および $(AB)^T = B^T A^T$ を用いて展開します。
    $$\boldsymbol{\Sigma} = E\left[ (\boldsymbol{\Lambda}\mathbf{f} + \boldsymbol{\epsilon})(\mathbf{f}^T\boldsymbol{\Lambda}^T + \boldsymbol{\epsilon}^T) \right]$$
    $$\boldsymbol{\Sigma} = E\left[ \boldsymbol{\Lambda}\mathbf{f}\mathbf{f}^T\boldsymbol{\Lambda}^T + \boldsymbol{\Lambda}\mathbf{f}\boldsymbol{\epsilon}^T + \boldsymbol{\epsilon}\mathbf{f}^T\boldsymbol{\Lambda}^T + \boldsymbol{\epsilon}\boldsymbol{\epsilon}^T \right]$$
    期待値の線形性より、個別の期待値の和に分解します。
    $$\boldsymbol{\Sigma} = \boldsymbol{\Lambda} E[\mathbf{f}\mathbf{f}^T] \boldsymbol{\Lambda}^T + \boldsymbol{\Lambda} E[\mathbf{f}\boldsymbol{\epsilon}^T] + E[\boldsymbol{\epsilon}\mathbf{f}^T] \boldsymbol{\Lambda}^T + E[\boldsymbol{\epsilon}\boldsymbol{\epsilon}^T]$$

3.  **仮説条件の適用**
    モデルの仮定値：
    - $E[\mathbf{f}\mathbf{f}^T] = \mathbf{I}_m$
    - $E[\boldsymbol{\epsilon}\boldsymbol{\epsilon}^T] = \boldsymbol{\Psi}$
    - $E[\mathbf{f}\boldsymbol{\epsilon}^T] = \mathbf{O} \implies E[\boldsymbol{\epsilon}\mathbf{f}^T] = \mathbf{O}^T = \mathbf{O}$
    を代入します。
    $$\boldsymbol{\Sigma} = \boldsymbol{\Lambda} \mathbf{I}_m \boldsymbol{\Lambda}^T + \boldsymbol{\Lambda} \mathbf{O} + \mathbf{O} \boldsymbol{\Lambda}^T + \boldsymbol{\Psi}$$
    $$\boldsymbol{\Sigma} = \boldsymbol{\Lambda}\boldsymbol{\Lambda}^T + \boldsymbol{\Psi}$$

    したがって、観測変数の共分散構造は、共通因子による説明部分 $\boldsymbol{\Lambda}\boldsymbol{\Lambda}^T$ と、独自因子による部分 $\boldsymbol{\Psi}$ の和に綺麗に直交分解できることが示されました。

---

## 7. 統計応用（分野：社会科学 / 計量経済学）
### 📌 キーワード：内生性と操作変数法 (IV)

#### 【問題】
次の単純線形回帰モデルを考える。
$$Y_i = \beta_0 + \beta_1 X_i + u_i \quad (i = 1, \dots, n)$$
ここで、説明変数 $X_i$ と誤差項 $u_i$ の間に相関がある（すなわち $Cov(X_i, u_i) \neq 0$ の**内生性**が存在する）ため、通常の最小二乗（OLS）推定量にはバイアスが生じる。
これを解決するため、次の条件を満たす操作変数 $Z_i$ を導入する。
- 条件1（操作変数の妥当性/排他性）： $Cov(Z_i, u_i) = 0$
- 条件2（操作変数の関連性）： $Cov(Z_i, X_i) \neq 0$

1.  モーメント法を用いて、操作変数推定量 $\hat{\beta}_1^{\text{IV}}$ の式を導出せよ。
2.  標本サイズ $n \to \infty$ において、操作変数推定量 $\hat{\beta}_1^{\text{IV}}$ が真のパラメータ $\beta_1$ に対して**一致性**を持つことを数理的に証明せよ。

#### 【解答・解説】
1.  **操作変数推定量 $\hat{\beta}_1^{\text{IV}}$ の導出**
    母集団共分散 $Cov(Z_i, u_i) = 0$ より、対応する標本共分散（偏差表記 $y_i, x_i, z_i$ を用いる）を $0$ と置きます。
    $$\frac{1}{n} \sum_{i=1}^n z_i (y_i - \hat{\beta}_1^{\text{IV}} x_i) = 0 \implies \hat{\beta}_1^{\text{IV}} = \frac{\sum_{i=1}^n (Z_i - \bar{Z})(Y_i - \bar{Y})}{\sum_{i=1}^n (Z_i - \bar{Z})(X_i - \bar{X})}$$

2.  **一致性（Consistency）の証明**
    偏差モデル式を代入します。
    $$\hat{\beta}_1^{\text{IV}} = \beta_1 + \frac{\frac{1}{n} \sum_{i=1}^n (Z_i - \bar{Z})(u_i - \bar{u})}{\frac{1}{n} \sum_{i=1}^n (Z_i - \bar{Z})(X_i - \bar{X})}$$
    大数の法則より、標本サイズ $n \to \infty$ のとき標本共分散は母共分散へ確率収束（$\text{plim}$）します。
    $$\text{plim} \ \hat{\beta}_1^{\text{IV}} = \beta_1 + \frac{Cov(Z, u)}{Cov(Z, X)}$$
    ここで、条件1（$Cov(Z, u) = 0$）および条件2（$Cov(Z, X) \neq 0$）より、
    $$\text{plim} \ \hat{\beta}_1^{\text{IV}} = \beta_1 + \frac{0}{Cov(Z, X)} = \beta_1$$
    したがって、操作変数推定量は真値 $\beta_1$ に対して一致性を持つことが証明されました。

---

## 8. 統計応用（分野：社会科学 / 時系列解析）
### 📌 キーワード：ベクトル自己回帰 (VAR) モデルの定常条件

#### 【問題】
2次元の定常確率変動ベクトル $\mathbf{Y}_t = (Y_{1,t}, Y_{2,t})^T$ に対する、次のような1階のベクトル自己回帰モデル VAR(1) を考える。
$$\mathbf{Y}_t = \boldsymbol{\Phi} \mathbf{Y}_{t-1} + \boldsymbol{\epsilon}_t$$
ここで、 $\boldsymbol{\Phi}$ は $2 \times 2$ の係数行列、 $\boldsymbol{\epsilon}_t = (\epsilon_{1,t}, \epsilon_{2,t})^T$ は平均ベクトル $\mathbf{0}$、共分散行列 $\boldsymbol{\Sigma}_{\epsilon}$ の多次元ホワイトノイズである。
1.  VAR(1)モデルが定常である（時間経過により発散しない）ための、係数行列 $\boldsymbol{\Phi}$ の固有値に関する数理的条件を述べよ。
2.  係数行列が以下のように与えられる具体的なモデルについて、定常性を有するかどうかを固有値計算により判定せよ。
    $$\boldsymbol{\Phi} = \begin{pmatrix} 0.5 & 0.4 \\ 0.2 & 0.3 \end{pmatrix}$$

#### 【解答・解説】
1.  **VAR(1)モデルの定常条件**
    多次元時系列モデル $\mathbf{Y}_t = \boldsymbol{\Phi} \mathbf{Y}_{t-1} + \boldsymbol{\epsilon}_t$ の定常条件は、ラグ係数多項式 $|\mathbf{I} - \boldsymbol{\Phi} z| = 0$ のすべての根 $z$ の絶対値が単位円の外側 ($|z| > 1$) にあることです。
    これは、係数行列 $\boldsymbol{\Phi}$ のすべての**固有値 $\lambda$ の絶対値が $1$ 未満** ($|\lambda| < 1$) であることと同値です。

2.  **固有値の計算と定常判定**
    与えられた行列 $\boldsymbol{\Phi}$ の固有方程式 $\det(\boldsymbol{\Phi} - \lambda \mathbf{I}) = 0$ を解きます。
    $$\det \begin{pmatrix} 0.5 - \lambda & 0.4 \\ 0.2 & 0.3 - \lambda \end{pmatrix} = 0$$
    $$(0.5 - \lambda)(0.3 - \lambda) - (0.4 \times 0.2) = 0$$
    $$\lambda^2 - 0.8 \lambda + 0.15 - 0.08 = 0$$
    $$\lambda^2 - 0.8 \lambda + 0.07 = 0$$
    因数分解すると、
    $$(\lambda - 0.7)(\lambda - 0.1) = 0 \implies \lambda_1 = 0.7, \ \lambda_2 = 0.1$$
    
    得られた固有値の絶対値は、 $|\lambda_1| = 0.7 < 1$ かつ $|\lambda_2| = 0.1 < 1$ を満たしています。
    すべての固有値の絶対値が $1$ 未満であるため、この具体的なVAR(1)モデルは**定常性を有する**と判定されます。

---

## 9. 統計応用（分野：理工学 - 実験計画）
### 📌 キーワード：直交表 $L_8(2^7)$ と交絡法

#### 【問題】
理工学の製品開発やプロセス最適化において用いられる、2水準の因子を最大7個まで割り付けることができる直交表 $L_8(2^7)$ を用いた実験計画を考える。
実験回数は8回である。
1.  直交表 $L_8(2^7)$ の任意の2つの列（例えば列1と列2）が表す因子について、「直交している」とは数学的にどのような状態を意味するか、実験回数8回におけるセルの組合せ数を用いて説明せよ。
2.  3つの因子 $A, B, C$ を直交表の列1, 列2, 列4に割り付けたとする。このとき、 $A$ と $B$ の相互作用（交互作用） $A \times B$ は直交表の列3に現れ、 $A$ と $C$ の交互作用 $A \times C$ は列5に現れることが知られている（列間の積の関係による）。
    もし、残りの列にさらに新たな別の主効果因子 $D, E$ などを割り付けた場合、交互作用と主効果の「交絡（Confounding）」がどのように発生するかを説明し、一部実施計画を設計する際の注意点を述べよ。

#### 【解答・解説】
1.  **列の直交性の数学的意味**
    直交表の任意の2つの列に注目したとき、それぞれの列の水準（例えば $1$ と $2$、あるいは $-1$ と $+1$）のすべての可能な組み合わせ $(1,1), (1,2), (2,1), (2,2)$ が、**同数回（8回中それぞれ2回ずつ）出現する**ことを意味します。
    これにより、一方の因子の効果を推定する際、他方の因子の効果が完全に相殺（バランス）され、各因子の主効果を独立に（無相関に）推定できるようになります。

2.  **交絡の発生と一部実施計画の注意点**
    - **交絡の発生**:
      直交表の列の間には積の代数関係（例えば `列1 × 列2 = 列3`）があります。これは因子 $A$ (列1) と因子 $B$ (列2) の交互作用 $AB$ の効果が列3から検出されることを意味します。
      もし、この列3に主効果因子 $D$ を割り付けて実験を行うと、列3の分析から得られる効果は「因子 $D$ の純粋な主効果」と「因子 $A, B$ の交互作用 $AB$」が合算されたものになり、両者を区別（分離）することができなくなります。これを**交絡（Confounding）**と呼びます。
    - **一部実施計画における注意点**:
      7つの列すべてに主効果因子を割り付けると、すべての2因子交互作用が別の主効果と交絡します（計画の分解能が低い状態）。
      そのため、設計時には以下の点に注意する必要があります。
      1.  **事前知識の活用**: 交互作用が実質的に無視できる（ほぼ $0$ である）と予想される列に対して主効果を割り当てる。
      2.  **定義対比の設計**: 交絡関係（別名構造）をあらかじめ明確にし、重要な主効果が、発生する可能性の高い重要な交互作用と交絡しないように配置（割り付け）を工夫する。

---

## 10. 統計応用（分野：理工学 - 信頼性）
### 📌 キーワード：並列システムの信頼度とワイブル分布

#### 【問題】
2つの独立な部品（部品1、部品2）からなる並列システムがある。並列システムは、少なくとも1つの部品が動作していればシステム全体として動作する。
それぞれの部品の寿命 $T_1, T_2$ は、独立に形状パラメータ $m \ (m > 0)$、尺度パラメータ $\eta \ (\eta > 0)$ の同一の**ワイブル分布**に従っている。
ワイブル分布の累積分布関数は $F(t) = 1 - e^{-(t/\eta)^m} \ (t \geq 0)$ で与えられる。

1.  この並列システム全体の信頼度関数 $R_{\text{sys}}(t)$ （時刻 $t$ までシステムが生存している確率）を求めよ。
2.  部品が指数分布に従う特殊なケース（形状パラメータ $m = 1$ ）において、システム全体の平均故障時間（MTTF: Mean Time to Failure）を求めよ。

#### 【解答・解説】
1.  **システム全体の信頼度関数 $R_{\text{sys}}(t)$ の導出**
    各部品の信頼度は $R_i(t) = 1 - F_i(t) = e^{-(t/\eta)^m} \ (i = 1, 2)$ である。
    並列システムが故障している確率（不信頼度） $F_{\text{sys}}(t)$ は積で表される。
    $$F_{\text{sys}}(t) = F_1(t) F_2(t) = \left[ 1 - e^{-(t/\eta)^m} \right]^2 = 1 - 2e^{-(t/\eta)^m} + e^{-2(t/\eta)^m}$$
    信頼度関数 $R_{\text{sys}}(t)$ は次のように求まる。
    $$R_{\text{sys}}(t) = 1 - F_{\text{sys}}(t) = 2e^{-(t/\eta)^m} - e^{-2(t/\eta)^m}$$

2.  **$m=1$ のときの期待寿命 (MTTF) の計算**
    $m=1$ のとき、信頼度関数は次のようになります（指数分布ケース）。
    $$R_{\text{sys}}(t) = 2e^{-t/\eta} - e^{-2t/\eta}$$
    システム全体の期待寿命 MTTF は、信頼度関数を $0$ から $\infty$ まで積分します。
    $$\text{MTTF} = \int_0^\infty R_{\text{sys}}(t) dt = \int_0^\infty \left( 2e^{-t/\eta} - e^{-2t/\eta} \right) dt = \left[ -2\eta e^{-t/\eta} + \frac{\eta}{2} e^{-2t/\eta} \right]_0^\infty = 1.5\eta$$
    
    期待寿命は $1.5\eta$ となります。

---

## 11. 統計応用（分野：医薬生物学 - 生存時間）
### 📌 キーワード：生存時間解析 / 右側打ち切りの尤度関数と最尤推定

#### 【問題】
ある臨床試験において、患者 $n$ 人の生存時間データを収集した。
生存時間 $T$ はパラメータ $\lambda \ (\lambda > 0)$ の指数分布に従うと仮定する。このとき生存関数は $S(t) = e^{-\lambda t}$、確率密度関数は $f(t) = \lambda e^{-\lambda t} \ (t \geq 0)$ である。
観測されたデータは $(t_1, \delta_1), (t_2, \delta_2), \dots, (t_n, \delta_n)$ のペアで構成されている。
ここで $t_i$ は追跡時間、$\delta_i$ はイベントインジケータであり、
- $\delta_i = 1$: 時刻 $t_i$ に死亡（イベント発生）
- $\delta_i = 0$: 時刻 $t_i$ に右側打ち切り
である。
この設定において、パラメータ $\lambda$ に対する尤度関数 $L(\lambda)$ を構築し、最尤推定量 $\hat{\lambda}$ を求めよ。

#### 【解答・解説】
1.  **尤度関数 $L(\lambda)$ の構築**
    被験者 $i$ の尤度寄与は $f(t_i)^{\delta_i} S(t_i)^{1-\delta_i}$ であるため、全体の尤度関数 $L(\lambda)$ は次のようになります。
    $$L(\lambda) = \prod_{i=1}^n \left( \lambda e^{-\lambda t_i} \right)^{\delta_i} \left( e^{-\lambda t_i} \right)^{1-\delta_i} = \lambda^{\sum_{i=1}^n \delta_i} e^{-\lambda \sum_{i=1}^n t_i}$$
    ここで、全イベント数 $d = \sum_{i=1}^n \delta_i$、総追跡時間 $V = \sum_{i=1}^n t_i$ とおくと、
    $$L(\lambda) = \lambda^d e^{-\lambda V}$$

2.  **対数尤度関数の導出**
    $$\ell(\lambda) = \log L(\lambda) = d \log \lambda - \lambda V$$

3.  **尤度方程式と最尤推定量 $\hat{\lambda}$ の導出**
    $\lambda$ について微分し、 $0$ とおく。
    $$\frac{d \ell(\lambda)}{d \lambda} = \frac{d}{\lambda} - V = 0 \implies \hat{\lambda} = \frac{d}{V} = \frac{\sum_{i=1}^n \delta_i}{\sum_{i=1}^n t_i}$$

4.  **結論**
    指数生存モデルにおいて、右側打ち切りを考慮したハザードパラメータ $\lambda$ の最尤推定量は、**（全イベント数）/（総生存時間）** となり、これは一般に「死亡率」や「ハザード率」の直感的な定義と一致します。

---

## 12. 統計応用（分野：医薬生物学 - 疫学）
### 📌 キーワード：交絡の調整とマントル・ヘンツェル (Mantel-Haenszel) オッズ比

#### 【問題】
あるリスク要因 $X$ と疾患 $Y$ の関連（オッズ比）を評価したい。
しかし、交絡因子 $Z$ （例えば年齢グループなど）の影響が懸念されるため、データを $Z$ の $K$ 個の層（ストラタ）に分割し、それぞれの層で以下の $2 \times 2$ 分割表を作成した（第 $h$ 層： $h=1, \dots, K$）。

| リスク要因 | 疾患あり | 疾患なし | 合計 |
| :--- | :---: | :---: | :---: |
| **曝露あり** | $a_h$ | $b_h$ | $n_{1h}$ |
| **曝露なし** | $c_h$ | $d_h$ | $n_{0h}$ |
| **合計** | $m_{1h}$ | $m_{0h}$ | $n_h$ |

1.  交絡因子の影響を調整（統合）した共通のオッズ比を推定する**マントル・ヘンツェル（Mantel-Haenszel）オッズ比推定量** $\hat{\psi}_{\text{MH}}$ の公式を、各層のセル度数を用いて表せ。
2.  この推定値を用いることの疫学的な意義（単純に全データを統合した分割表から計算するオッズ比と比較したとき）について説明せよ。

#### 【解答・解説】
1.  **マントル・ヘンツェルオッズ比推定量の公式**
    第 $h$ 層におけるオッズ比は $ad / bc$ に対応しますが、マントル・ヘンツェル推定量は各層のサンプルサイズ $n_h$ で重み付けした加重平均の形で以下のように定義されます。
    $$\hat{\psi}_{\text{MH}} = \frac{\sum_{h=1}^K \frac{a_h d_h}{n_h}}{\sum_{h=1}^K \frac{b_h c_h}{n_h}}$$

2.  **疫学的意義（交絡の調整とシンプソンのパラドックスの回避）**
    - **交絡（Confounding）の調整**:
      交絡因子 $Z$ がリスク要因 $X$ と疾患 $Y$ の両方に関連している場合、層分けせずにすべてのデータを単純に合算した表から計算したオッズ比（粗オッズ比）には偏り（バイアス）が生じます。マントル・ヘンツェル推定量は、交絡因子 $Z$ の水準が同じである層の内部でオッズ比を計算して統合するため、 $Z$ による交絡の影響を取り除くことができます。
    - **シンプソンのパラドックスの回避**:
      極端なケースでは、各層の内部ではオッズ比がすべて $1$ より大きい（曝露が疾患リスクを高める）にもかかわらず、単純合算するとオッズ比が $1$ 未満になるという逆転現象（シンプソンのパラドックス）が発生することがあります。マントル・ヘンツェル法を用いることで、このような誤った結論を避けることができます。
