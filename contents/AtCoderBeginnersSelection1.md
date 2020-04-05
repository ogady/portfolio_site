---

title: 'AtCoder Beginers Selectionをgoで解いてみる(前編)'

date: '2020-03-07'

tags: ['AtCoder', 'Go']

---

## はじめに

自分が文系出身ということもあり、コンピューターサイエンスの基礎があまりにもわからない。

ここらでちゃんと勉強しようと思い、まずはデータ構造とアルゴリズムの基礎から勉強していくことにした。

とりあえず、[AtCoder Beginers Selection](https://atcoder.jp/contests/abs)（以下ABS）をやってみる。

ABSとは、初心者向けにAtCoderの過去問から10問ピックアップされたもので、競プロ初心者が最初に解いてみると良いらしい。

実業務にも活かしていく前提なので、言語は`Go`で！

## Go言語で競プロの問題を解くために

### 入力値の受け取り

兎にも角にも入力を受け取らないと話にならない。

Go言語でAtCoderからの入力値を受け取るには、こんな感じになります。

この組み合わせで大体の入力は処理できるはず。

```go
/*
 入力形式
 --------
 n (数字)
 --------
*/
var n int
fmt.Scanf("%d", &n)

/*
 入力形式
 --------
 s (文字列)
 --------
*/
var s string
fmt.Scanf("%d", &s)

/*
 入力形式
 --------
 n1 n2
 --------
*/
var n1, n2 int
fmt.Scanf("%d %d", &n1, &n2)

/*
 入力形式
 --------
 N
 n1
 .
 .
 nN
 --------
*/
var N int
fmt.Scanf("%d", &N)
list := make([]int, n)
for i := 0; i < n; i++ {
    fmt.Scanf("%d", &list[i])
}

/*
 入力形式
 --------
 N
 s1 s2 .. sN
 --------
*/
var N int
fmt.Scanf("%d", &n)
s := bufio.NewScanner(os.Stdin)
s.Scan()
sList := strings.Fields(s.Text())

```

## ABSを解いていく

### [Welcome to AtCoder](https://atcoder.jp/contests/abs/tasks/practice_1)

【概要】

整数3個と、文字列が与えられ、その整数の和と、文字列を出力します。

この問題は特に悩むところもないです。

```go
package main

import (
    "fmt"
)

func main() {
    var a, b, c int
    var s string
    fmt.Scanf("%d", &a)
    fmt.Scanf("%d %d", &b, &c)
    fmt.Scanf("%s", &s)
    fmt.Printf("%d %s\n", a+b+c, s)
}
```

### [Product](https://atcoder.jp/contests/abs/tasks/abc086_a)

【概要】

偶奇の判定。

これも特に悩むところは無し。

```go
package main

import "fmt"

func main() {
    var a, b int
    fmt.Scanf("%d %d", &a, &b)
    r := (a * b) % 2
    if r == 0 {
        fmt.Println("Even")
    } else {
        fmt.Println("Odd")
    }
}
```

### [Placing Marbles](https://atcoder.jp/contests/abs/tasks/abc081_a)

【概要】

与えられた数列を受け取り、その中に ”1”が何個あるか求めます。

全探索です。

これはfor文で一文字ずつ判定しても良いですが、goの`strings.Count()`を使用すレバサクッとできます。

```go
package main

import (
    "fmt"
    "strings"
)

func main() {
    var s string
    fmt.Scanf("%s", &s)
    fmt.Println(strings.Count(s, "1"))
}
```

### [Shift only](https://atcoder.jp/contests/abs/tasks/abc081_a)

【概要】

N個の整数が与えられ、その全てが偶数である時、その整数を2で割った値に変換します。これを何回行うことができるか求めるもの。

全探索を使用して、行う操作をそのまま実装すると以下のようになります。

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
    var cnt, n int
    var ns []int
    var existOdd bool

    fmt.Scanf("%d", &n)
    s := bufio.NewScanner(os.Stdin)
    s.Scan()
    ss := strings.Fields(s.Text())

    for _, v := range ss {
        j, _ := strconv.Atoi(v)
        ns = append(ns, j)
    }

    for {
        // 与えたれた整数が全て2で割り切れるか確認
        for _, v := range ns {
            if v%2 == 1 {existOdd = true}
        }
        // 与えたれた整数が全て2で割り切れなければfor文を抜ける
        if existOdd {break}
        // 各数字を2で割る
        for i, v := range ns {
            ns[i] = v / 2
        }
        cnt++
    }
    fmt.Println(cnt)
}
```
