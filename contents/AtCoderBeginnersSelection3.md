---
title: 'AtCoder Beginers Selectionをgoで解いてみる(後編)'

date: '2020-05-17'

tags: ['AtCoder', 'Go']
---

### 8. [Otoshidama](hhttps://atcoder.jp/contests/abs/tasks/abc085_c)

【概要】

10000 円札、5000 円札、1000 円札を合計 N 枚使用して、Y 円になる組み合わせを 1 つ出力する。

N 枚のお札の合計金額が Y 円となることがありえない場合は、`-1 -1 -1` と出力する。

for 文をネストして全探索するが、素直に 3 重ループで回すと、TLE（Time Limit Exceeded）となってしまいそう。

2 重ループで 2 種類のお札の枚数を確定させ、3 種類目のお札の枚数（`N - 1種類目の枚数 - 2種類目の枚数」`）で 残りの金額が実現できるかを調査すれば、for 文のネストをいつ解消することができる。

```go
package main

import "fmt"

func main() {
	var cnt, tar int
	fmt.Scanf("%d %d", &cnt, &tar)

	for i := 0; i <= cnt; i++ {
		for j := 0; j <= cnt; j++ {
			sum := 10000*i + 5000*j + 1000*(cnt-i-j)
			if (cnt - i - j) >= 0 {
				if sum == tar {
					fmt.Println(i, j, (cnt - i - j))
				}
			}
		}
	}
	fmt.Println(-1, -1, -1)
}
```

### 9. [白昼夢](https://atcoder.jp/contests/abs/tasks/arc065_a)

【概要】

文字列 S が`dream`、`dreamer`、`erase`、`eraser`の組み合わせでできているかを判例する。

S を後ろから判定していくと簡単に求められる。

Greedy アルゴリズム（貪欲法）と言うらしい。

> 貪欲法とは。。。
>
> 1. 問題を複数の部分問題に分割する
> 2. 各部分問題に対する解を評価する(各部分問題ごとに考えられる解のパターンは複数ある．)
> 3. 評価が最も良いものをその部分問題の解(=局所最適解)として，次の部分問題の解(これも複数通り考えられる)を評価する

```go
package main

import (
	"fmt"
	"strings"
)

func main() {

	keyWords := []string{"dream", "dreamer", "erase", "eraser"}

	var s string

	fmt.Scanf("%s", &s)

	for {
		var status bool
		if s != "" {　
			for _, v := range keyWords {
				if strings.HasSuffix(s, v) {
					s = strings.TrimSuffix(s, v)
					status = true
				}
			}
			if !status {
				break
			}
		} else {
			break
		}
	}
	if s != "" {
		fmt.Println("NO")
	} else {
		fmt.Println("YES")
	}

}
```

### 10. [Traveling](https://atcoder.jp/contests/abs/tasks/arc089_a)

【概要】

二次元平面上を時刻 0 に点 (0,0)からスタートし、時刻 ti ごとにに 点 (xi,yi) に移動しながら動く。これが実現可能かを判定する。

時刻 t+1 には、(x+1,y) , (x−1,y), (x,y+1), (x,y−1)に移動し、留まることはできない。

これは最初全然解き方がわからなかった。

[パリティ](https://www.weblio.jp/content/%E3%83%91%E3%83%AA%E3%83%86%E3%82%A3)（今回の定義では偶奇性）の考え方を使用するらしい。

毎ステップごとにの`xi+yi`偶奇が入れ替わる特性を利用して解いていく。

```go
package main

import (
	"fmt"
	"math"
)

type plan struct {
	t float64
	x float64
	y float64
}

func main() {
	var n int
	fmt.Scanf("%d", &n)

	plans := make([]plan, n+1)
	plans[0] = plan{
		t: 0,
		x: 0,
		y: 0,
	}

	var t, x, y float64
	for i := 1; i <= n; i++ {
		fmt.Scanf("%f %f %f", &t, &x, &y)
		plans[i] = plan{
			t: t,
			x: x,
			y: y,
		}
	}

	var canMove bool

	for i := 1; i <= n; i++ {

		dist := math.Abs(plans[i].x-plans[i-1].x) + math.Abs(plans[i].y-plans[i-1].y)
		dt := math.Abs(plans[i].t - plans[i-1].t)

		if dist <= dt && judgeEven(dist) == judgeEven(dt) {
			canMove = true
		} else {
			canMove = false
			break
		}
	}

	if canMove {
		fmt.Println("Yes")
	} else {
		fmt.Println("No")
	}
}

func judgeEven(tar float64) bool {
	if int(tar)%2 == 0 {
		return true
	}
	return false
}

```
