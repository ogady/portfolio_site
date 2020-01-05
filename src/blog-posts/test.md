---
title: 'Goで青空文庫からWordCloud作ってみた'
date: '2018-11-23'
tags: ['Go']
---

## はじめに

こんにちは、[ogady](https://twitter.com/gadyma)です。

WordCloudかっこいいですよね！この記事読んでみて、こういうオシャレなやつをGoでやってみたい！と思って作ってみました。

 [[Python]銀河鉄道の夜をWordCloudで可視化してみた！](https://qiita.com/uminchu987/items/07baa1a354cf96d2564b)

せっかくなんで青空文庫のAPIを使用して、作品指定してWordCloud生成するCLIツールっぽくしようと思います。

普段はGoでお堅いバックエンド処理ばっか書いていたので、たまにはこんなことしてみたかった。

## 技術スタック

- Go1.13

###使用ライブラリなど

- https://github.com/PuerkitoBio/goquery
- http://github.com/bluele/mecab-golang
- https://github.com/psykhi/wordclouds
- https://qiita.com/ksato9700/items/48fd0eba67316d58b9d6

## 1. MeCab 導入

今回は、[@uminchu987さんの記事](https://qiita.com/uminchu987/items/07baa1a354cf96d2564b)と同様に、形態素解析にMeCabを使用していきます。

 ```sh
# MeCabインストール
$ brew insatll mecab mecab-ipadic

# インストール確認
$ which mecab-config
/usr/local/bin/mecab-config
 ```



次に、GoからMeCabを使うためのライブラリ[mecab-golang](http://github.com/bluele/mecab-golang)の準備をしていきます。

リポジトリのREADMEに記載されている通りに作業していきます。

```sh
# github.com/bluele/mecab-golangの準備
$ export CGO_LDFLAGS="`mecab-config --libs`"
$ export CGO_CFLAGS="-I`mecab-config --inc-dir`"
```

これで準備ができました。



## 2.実装

### Aozora APIをCallして、書籍情報を取得する。

今回は引数に本のタイトル名を指定する事でその本の本文でWordCloudを作成します。

本の情報は青空文庫のAPIを叩いてhtmlのURLを取得→スクレイピングといった感じです。（APIでテキストデータとしても取ってこれるみたいだけど今回は勉強兼ねてスクレイピングで）

#### 青空文庫のAPIを叩く

青空文庫APIのリポジトリはこちら

[aozorahack](https://github.com/aozorahack)/[pubserver2](https://github.com/aozorahack/pubserver2)

返ってくる書籍情報のデータ構造はこちらの記事を参照しました。

[青空文庫のデータ構造について-Qiita](https://qiita.com/ksato9700/items/48fd0eba67316d58b9d6)

```go
package aozora

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"
	"net/url"
	"time"
)

const (
	BOOKS_ENDPOINT = "http://pubserver2.herokuapp.com/api/v0.1/books/"
)

type Author struct {
	PersonID  int    `json:"person_id"`
	LastName  string `json:"last_name"`
	FirstName string `json:"first_name"`
}

type BookInfo struct {
	BookID                      int       `json:"book_id"`
	Title                       string    `json:"title"`
	TitleYomi                   string    `json:"title_yomi"`
	TitleSort                   string    `json:"title_sort"`
	Subtitle                    string    `json:"subtitle"`
	SubtitleYomi                string    `json:"subtitle_yomi"`
	OriginalTitle               string    `json:"original_title"`
	FirstAppearance             string    `json:"first_appearance"`
	NDCCode                     string    `json:"ndc_code"`
	FontKanaType                string    `json:"font_kana_type"`
	Copyright                   bool      `json:"copyright"`
	ReleaseDate                 time.Time `json:"release_date"`
	LastModified                time.Time `json:"last_modified"`
	CardURL                     string    `json:"card_url"`
	
 		------------略------------
  
	Authors                     []Author  `json:"authors"`
}

func GetBookInfoByTitleName(titleName string) (string, error) {

	values := url.Values{}
	values.Add("title", titleName)
	url := BOOKS_ENDPOINT + "?" + values.Encode()

	// APIを叩いてデータを取得
	resp, err := http.Get(url)
	if err != nil {
		err = fmt.Errorf("青空文庫APIのコールに失敗しました。URL：%s \n %w", url, err)
		return "", err
	}

	defer resp.Body.Close()

	body, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		err = fmt.Errorf("レスポンスボディの読み込みに失敗しました。\n %w", err)
		return "", err
	}

	// 取得したデータを構造体にマッピング
	var bookInfos []BookInfo

	err = json.Unmarshal(body, &bookInfos)
	if err != nil {
		err = fmt.Errorf("レスポンスボディを構造体にマッピングできませんでした。\n %w", err)
		return "", err
	}

	return bookInfos[0].HTMLURL, nil
}
```



####取得したURLから本文をスクレイピングする

ここについては、 [[Python]銀河鉄道の夜をWordCloudで可視化してみた！](https://qiita.com/uminchu987/items/07baa1a354cf96d2564b)のPythonコードをGoに直しただけです。

青空文庫は文字コードがShift JISのようなので、UTF8にデコードしています。

``` go
package scraper

import (
	"fmt"

	"github.com/PuerkitoBio/goquery"
	"github.com/ogady/wordCloudMakerForAozora/pkg/decoder"
)

func Scrape(url string) (string, error) {

	doc, err := goquery.NewDocument(url)
	if err != nil {
		err = fmt.Errorf("Document Constructorの初期化に失敗しました。\n %w", err)
		return "", err
	}

	selection := doc.Find("body > div.main_text")
	text := selection.Text()
  
  // UTF8に変換
	encodedText, err := decoder.Decode("ShiftJIS", []byte(text))
	if err != nil {
		err = fmt.Errorf("UTF8変換に失敗しました。 \n %w", err)
		return "", err
	}

	return string(encodedText), nil
}
```





###形態素解析を行う

取得したテキストをMeCabを使って形態素解析を行います。

抽出する品詞は` 名詞`に絞る事で、その本を特徴付けるワードを抽出します。

形態素解析をした結果は単語ごとにカウントし、https://github.com/psykhi/wordclouds のインプットの形（` map[string]int`）にします。

ここで、文章を特徴付けるために、意味のない（単語としての情報量が少ない）単語をストップワードとして取り除いています。

僕は自然言語処理に関してはど素人なので、いろんな記事を参考（[【自然言語処理入門】日本語ストップワードの考察【品詞別】](https://mieruca-ai.com/ai/nlp-stopwords/#toc_3-1)など）にしたり、実際のMeCabの解析結果を見たりしながらピックアップしていきました。

```go
package morphoAnalyzer

import (
	"fmt"
	"sort"
	"strings"

	"github.com/bluele/mecab-golang"
)

func ParseToNode(text string) (map[string]int, error) {

	wordMap := make(map[string]int)

	m, err := mecab.New("-Owakati")
	if err != nil {
		err = fmt.Errorf("MeCabの初期化（分かち書き出力モード）に失敗しました。\n %w", err)
		return wordMap, err
	}
	defer m.Destroy()

	tg, err := m.NewTagger()
	if err != nil {
		return wordMap, err
	}

	defer tg.Destroy()

	lt, err := m.NewLattice(text)
	if err != nil {
		return wordMap, err
	}

	defer lt.Destroy()

	node := tg.ParseToNode(lt)
	for {
		features := strings.Split(node.Feature(), ",")
		if features[0] == "名詞" {
      // ストップワードを除去
			if !contains(stopWordJPN, node.Surface()) {
				// mapのkeyに単語・valueにカウントを設定し、キーに対してカウントしていく
				wordMap[node.Surface()]++
			}
		}
		if node.Next() != nil {
			break
		}
	}
	return wordMap, nil
}


func contains(sl []string, s string) bool {

	for _, v := range sl {
		if s == v {
			return true
		}
	}
	return false
}
```

### WordCloudを生成する

いよいよWordCloudを作成します。

ライブラリは[psykhi/wordclouds](https://github.com/psykhi/wordclouds)を使用させていただきました。

使い方はGoDocとREADMEを見れば大体わかります。

頻出単語をFontMaxSizeで表示する為、最頻出単語の文字数が多いと画像サイズを超えてしまい描画されないので、フォントサイズの設定を（かなり雑に）計算しています。

```go
package wordCloud

import (
	"flag"
	"image"
	"image/color"

	"github.com/psykhi/wordclouds"
)

type MaskConf struct {
	File  string     `json:"file"`
	Color color.RGBA `json:"color"`
}

type Conf struct {
	FontMaxSize     int          `json:"font_max_size"`
	FontMinSize     int          `json:"font_min_size"`
	RandomPlacement bool         `json:"random_placement"`
	FontFile        string       `json:"font_file"`
	Colors          []color.RGBA `json:"colors"`
	Width           int          `json:"width"`
	Height          int          `json:"height"`
	Mask            MaskConf     `json:"mask"`
}


func (c *Conf) calcFontMaxSize(numOfChar int) int {
	var fontMaxSize int
	fontMaxSize = int(float32(c.Width) * 0.4 / float32(numOfChar))

	return fontMaxSize
}

func (c *Conf) calcFontMinSize(numOfChar int) int {
	var fontMinSize int
	fontMinSize = int(float32(c.Width) * 0.4 / float32(numOfChar) / 10)
	return fontMinSize
}

func CreateWordCloud(wordList map[string]int, numOfChar int, colorsSetting []color.RGBA) image.Image {

	var DefaultConf = Conf{
		RandomPlacement: false,
		FontFile:        "./config/rounded-l-mplus-2c-medium.ttf",
		Colors:          colorsSetting,
		Width:           2048,
		Height:          2048,
		Mask: MaskConf{"", color.RGBA{
			R: 0,
			G: 0,
			B: 0,
			A: 0,
		}},
	}

	conf := DefaultConf

	var boxes []*wordclouds.Box
	if conf.Mask.File != "" {
		boxes = wordclouds.Mask(
			conf.Mask.File,
			conf.Width,
			conf.Height,
			conf.Mask.Color)
	}

	colors := make([]color.Color, 0)
	for _, c := range conf.Colors {
		colors = append(colors, c)
	}

	w := wordclouds.NewWordcloud(wordList,
		wordclouds.FontFile(conf.FontFile),
		wordclouds.FontMaxSize(conf.calcFontMaxSize(numOfChar)),
		wordclouds.FontMinSize(conf.calcFontMinSize(numOfChar)),
		wordclouds.Colors(colors),
		wordclouds.MaskBoxes(boxes),
		wordclouds.Height(conf.Height),
		wordclouds.Width(conf.Width),
		wordclouds.RandomPlacement(conf.RandomPlacement),
	)

  // ここで描画
	img := w.Draw()
	return img
}

```



### 処理ロジック

ユースケースのロジックは、ただ順番にパッケージの処理を呼び出しているだけなので省略します。

### main

メインはシンプルに、WordCloudCreaterを生成して`Execute()`を呼び出すだけです。

描画する画像の色彩を赤系、青系、緑系、ビビッドカラーから選択できるようにしています。

```go
package main

import (
	"flag"
	"log"
	"os"
	"github.com/ogady/wordCloudMakerForAozora/internal"
)

func main() {
	var (
		output         = flag.String("o", "output.png", "path to output image")
		titleName      = flag.String("t", "銀河鉄道の夜", "target TitleName")
		specifiedColor = flag.String("c", "red", "specify the color to draw from ’red’, ’blue’, ’green’, and ’vivid’.")
	)
	flag.Parse()

	repo := internal.NewWordCloudCreater(*output, *titleName, *specifiedColor)
	err := repo.Execute()
	if err != nil {
		log.Fatal(err)
		os.Exit(1)
	}
}
```



## 3. 使い方

```sh
$./main -h
Usage of ./main:
  -c string
        specify the color to draw from ’red’, ’blue’, ’green’, and ’vivid’. (default "red")
  -o string
        path to output image (default "output.png")
  -t string
        target TitleName (default "銀河鉄道の夜")
exit status 2
```



## 4.生成されたWordCloud

こんな感じにできました。

色とかは個人的な好みでやっているので、センス合わなかったらすいません！



## 後書き

普段やらないような趣味のツールとか作るとストレス解消になるし、良いですね！

デザインや形態素解析の単語抽出部分でもっとよくできる部分はあったと思います。

作成したものは、github上にあげています。

**[githubリポジトリ - ogady/wordCloudMakerForAozora - ](https://github.com/ogady/wordCloudMakerForAozora)**



今回は自分で青空文庫APIを叩いてみましたが、作った後で青空文庫APIのGoライブラリを見つけたので紹介します！

[spiegel-im-spiegel](https://github.com/spiegel-im-spiegel)/[aozora-api](https://github.com/spiegel-im-spiegel/aozora-api)

これもいい感じで使えそうです。



## 参考にした記事など

[[Python]銀河鉄道の夜をWordCloudで可視化してみた！](https://qiita.com/uminchu987/items/07baa1a354cf96d2564b)

[【自然言語処理入門】日本語ストップワードの考察【品詞別】](https://mieruca-ai.com/ai/nlp-stopwords/#toc_3-1)

[[goでmecabを動かす](https://ema-hiro.hatenablog.com/entry/2017/12/17/174323)](https://ema-hiro.hatenablog.com/entry/2017/12/17/174323)