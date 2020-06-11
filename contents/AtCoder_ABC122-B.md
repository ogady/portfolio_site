---
title: 'AtCoder(go) ABC122-B '

date: '2020-05-30'

tags: ['AtCoder', 'Go']
---

### [B-ATCoder](https://atcoder.jp/contests/abc122/tasks/abc122_b)

【概要】
英大文字からなる文字列**S**が与えられる。
S のなかで A、C、G、T（ACGT 文字列） で構成される最も長い部分文字列の長さを求める。

全探索で求める。

先頭の文字から探索し ACGT 文字列に合致した場合フラグを true にする。

ACGT 文字列に合致しない文字が現れた場合フラグを false にする。

今回は、4 文字との合致判定なので、if 文で or 条件を 4 つ並べたが、合致すべき文字数が多い場合は内部で対象の文字列を for 文で回した方が簡単にかけるはず。

また、go 言語で string 文字列を range で回す場合は、rune 型で取得する点に注意。

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

	var flg bool
	var cnt int
	str := StrStdin()

	var result int

	for _, v := range str {
		if string(v) == "A" || string(v) == "C" || string(v) == "G" || string(v) == "T" {
			if !flg {
				flg = true
			}
            cnt++

            // カウントが過去最大だったらresultを上書きする。
			if result <= cnt {
				result = cnt
			}

		} else {
			flg = false
			cnt = 0
		}
	}

	fmt.Println(result)
}

func StrStdin() string {
	scanner := bufio.NewScanner(os.Stdin)
	scanner.Scan()
	return strings.TrimSpace(scanner.Text())
}

```
