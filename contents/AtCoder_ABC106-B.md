---
title: 'AtCoder(go) ABC106-B '

date: '2020-05-23'

tags: ['AtCoder', 'Go']
---

### [B - 105](https://atcoder.jp/contests/abc106/tasks/abc106_b)

【概要】
**1 以上 N 以下の奇数**のうち, 正の約数をちょうど**8 個**持つようなものの個数を求めよ.

全探索で求める。

1〜N の数字を for 文で一個づつ約数の数を求める。

このとき最初に偶奇判定をしておくとループ回数を減らせる。

```go
package main

import (
	"bufio"
	"fmt"
	"os"
	"strconv"
	"strings"
)

func main() {

	n := IntStdin()

	var result int

	for i := 1; i <= n; i++ {
		var cnt int
		if i%2 == 1 {
			for j := 1; j <= n; j++ {

				if i%j == 0 {
					cnt++
				}
			}
			if cnt == 8 {
				result++
			}
		}
	}

	fmt.Println(result)
}


func strStdin() string {
	scanner := bufio.NewScanner(os.Stdin)
	scanner.Scan()
	return strings.TrimSpace(scanner.Text())
}

// IntStdin 1つの符号付き整数値の入力

func intStdin() int {
	stringInput := strStdin()
	num, _ := strconv.ParseInt(strings.TrimSpace(stringInput), 10, 64)
	return int(num)
}
```
