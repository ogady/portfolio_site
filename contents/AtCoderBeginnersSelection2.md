---
title: 'AtCoder Beginers Selectionをgoで解いてみる(中編)'

date: '2020-03-17'

tags: ['AtCoder', 'Go']
---

### 4. [Coins](https://atcoder.jp/contests/abs/tasks/abc087_b)

【概要】

500 円玉を A 枚、100 円玉を B 枚、50 円玉を C 枚持っている。これらの硬貨の中から何枚かを選び、合計金額をちょうど XX 円にする方法は何通りあるか求める。

for 文をネストして全探索する。

```go
package main

import "fmt"

func main() {
    var a, b, c, x, cnt int
    fmt.Scanf("%d", &a)
    fmt.Scanf("%d", &b)
    fmt.Scanf("%d", &c)
    fmt.Scanf("%d", &x)
    for A := 0; A <= a; A++ {
        for B := 0; B <= b; B++ {
            for C := 0; C <= c; C++ {
                i := 500*A + 100*B + 50*C
                if x == i {
                    cnt++
                }
            }
        }
    }
    fmt.Println(cnt)
}
```

### 5. [Some Sums](https://atcoder.jp/contests/abs/tasks/abc083_b)

【概要】

1 以上 N 以下の整数のうち、10 進法で各桁の和が A 以上 B 以下であるものについて、総和を求める。

全探索で解きました。

与えられた N 以下の整数を文字列に変換し、桁分だけループしています。

この解法だと桁が大量に増えたときに厳しいかも。。。

```go
package main

import (
    "fmt"
    "strconv"
)

func main() {
    var n, a, b, sum int
    fmt.Scanf("%d %d %d", &n, &a, &b)
    for i := 0; i <= n; i++ {
        s := strconv.Itoa(i)
        var x int
        for _, v := range s {
            j, _ := strconv.Atoi(string(v))
            x += j
        }
        if x >= a && x <= b {
            sum += i
        }
    }
    fmt.Println(sum)
}
```

### 6. [Card Game for Two](https://atcoder.jp/contests/abs/tasks/abc088_b)

【概要】

Alice と Bob が数字の大きい順に、交互に一枚ずつカードをとり、取ったカードの合計の差を求めるもの。

ソートの例題です。

```go
package main

import (
    "bufio"
    "fmt"
    "os"
    "sort"
    "strconv"
    "strings"
)

func main() {
    var n int
    var aa []string
    var ia []int
    var alice int
    var bob int

    fmt.Scanf("%d", &n)
    s := bufio.NewScanner(os.Stdin)
    s.Scan()
    aa = strings.Fields(s.Text())
    for _, v := range aa {
        i, _ := strconv.Atoi(v)
        ia = append(ia, i)
    }
    sort.Slice(ia, func(i, j int) bool { return ia[i] > ia[j] })
    for i, v := range ia {
        if i == 0 || i%2 == 0 {
            alice += v
        } else {
            bob += v
        }
    }
    fmt.Println(alice - bob)
}
```

### 7. [Kagami Mochi](https://atcoder.jp/contests/abs/tasks/abc085_b)

【概要】

N 個の整数が与えられ、その中に何種類の異なる値があるか求めるもの。

list の配列に異なる値を保持しながら配列を回しています。

どうやらバケット法というらしい。

```go
package main

import (
    "fmt"
    "sort"
)

func main() {
    var n int
    fmt.Scanf("%d", &n)
    list := make([]int, n)
    for i := 0; i < n; i++ {
        fmt.Scanf("%d", &list[i])
    }
    sort.Sort(sort.IntSlice(list))
    var count int
    var preValue int
    for _, v := range list {
        if preValue == 0 {
            count ++
        } else if preValue != v {
            count ++
        }
        preValue = v
    }
    fmt.Println(count)
}
```
