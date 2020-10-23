---
title: '2019年振り返りと今年の抱負'

date: '2020-01-07'

tags: ['others']
---

## はじめに

[ogady](https://twitter.com/_ogady_)です。

初投稿兼ねて 2019 年の振り返りと、2020 年の抱負を書きました。

※冬休み中にブログサイト作ってたら振り返りと抱負がこんなにも遅れてしまいました。

## 2019 年の振り返り

### ざっくり

- 1 月〜2 月：SIer でのキャリアに疑問を持つ
- 3 月〜4 月：転職用のポートフォリオ作成(Python/Django)
- 5 月〜6 月：転職活動
- 7 月：Go キャッチアップ、AWS SAA 取得
- 8 月：現職へ転職、本格的に Gopher に
- 9 月~10 月：Go、AWS で電子書籍取次システムの移管案件に参画
- 11 月：電子書籍形式(EPUB)チェック機能の PoC 作成（AWS CDK、Lambda、DynamoDB、SQS）
- 12 月：電子書籍取次システムの本番移管作業、[SRE NEXT 2020](https://sre-next.dev/)の運営コアスタッフに Join

### 転職

2019 年はかなり人生の転機になった年でした。[某金融系 SIer からの脱出](https://ogady.hatenablog.com/entry/2019/02/13/185717)をして、8 月から[株式会社メディアドゥ](https://www.mediado.jp/)に転職したことで、かなり生活が変化しました。

SIer でマネジメント・折衝をメインにやってきた私が、いきなり Go、AWS でゴリゴリ開発するエンジニアになったので最初はかなり苦戦しましたが無事キャッチアップできました。結果、Go だけでなく、RDB、Linux の基礎から、バッチ処理のパフォーマンスチューニングなどの経験できており、転職は正解だったと思います。

### 現職業務

今は、**電子書籍取次システムの移管案件**をメインに行っており、具体的には、

- マイグレーションシステムの開発(Go、AWS、OracleDB、PostgresDB)
- マイグレーション作業
- システム移行後のクラウドリフトへ向けての技術検証

などをメインに行っています。

また、**新卒採用のお手伝い**もしていて、カジュアル面談や、人事から採用方針についての相談などを受けさせてもらっています。面談した学生は皆さん向上心・技術力が高く、かなりそこから刺激をもらうことも多いです。

### SRE NEXT の運営コアスタッフに参加

大学からの友達（[nari](https://twitter.com/fukubaka0825)）の紹介で、SRE NEXT という日本初の SRE Conference の運営に入らせていただきました。

<iframe src="https://hatenablog-parts.com/embed?url=https%3A%2F%2Fsre-next.dev%2F" title="SRE NEXT 2020" class="embed-card embed-webcard" scrolling="no" frameborder="0" style="margin: 10px 0px; padding: 0px; border: 0px; outline: 0px; font-size: 15px; vertical-align: baseline; background: rgb(255, 255, 255); max-width: 500px; color: rgb(77, 77, 77); font-family: TitilliumText22LRegular, &quot;ヒラギノ角ゴ Pro W3&quot;, &quot;Hiragino Kaku Gothic Pro&quot;, メイリオ, Meiryo, &quot;ＭＳ Ｐゴシック&quot;, &quot;MS PGothic&quot;, sans-serif; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-style: initial; text-decoration-color: initial; display: block; width: 500px; height: 155px;"></iframe>

Sler 時代から開発者体験や運用・監視の改善に興味があったことと、近々、社内に SRE の部署が立ち上がる気配があり、多くの SRE の方から知見をもらえるチャンスだと思い迷わず参加しました。

私は、当日司会（RoomC）、参加者用名札の作成、動画配信方針検討、などを担当させてもらっています。

面白そうなセッションばかりで、私も司会ではなく参加者の立場で満喫したいくらいです。後でスライドは共有されると思うので参加できない方も是非ご活用ください。参加される方は当日よろしくお願いいたします。

## 2020 年の抱負

### 基盤技術への理解を深める

- パブリッククラウドのサービス（主に AWS、GCP）の理解をより深める。
- IaC のノウハウを蓄積し、実戦投入する。（Terraform、AWS CDK など）
- コンテナ運用の知見が乏しいので、そこを集中的に

上で書いたように、現在はシステム移管用のシステム開発（主にバックエンド）を担当していますが、途中参加の案件のため、AWS 基盤は構築済みかつ、今回のシステム移管にしか使われないためインフラ資産管理などはあまり適切に行っていません。なので現状は自身で勉強するしかないのですが、今の案件が落ち着いたら、**基盤設計〜運用手法までを経験できる案件**に入れるよう、知見をためてアピールしていきます。

### アウトプットを増やす

- 最低 2 週間に一本、Qiita ないし、本ブログでアウトプットを行う。
- 自社主催イベント、外部イベント問わず、最低 5 回以上登壇を行う。

アウトプットについては、去年はかなり残念な感じでした（Qiita 数本書いた程度）。ただ、アウトプットを行うことによる理解深まりや、知識定着の効果はかなり感じることができたため、今年は積極的にアウトプットしていきたいです。登壇はまだしたことがなく、ハードル高さを勝手に感じてしまっているので、小規模な LT から始めて慣れていこうと思います。

## ブログについて

年末年始に、自分用のブログ作ってみたくて、Gatsby.js を使って作ってみました。
[kentaro](https://twitter.com/_kentaro_m)さんが配布されている雛形をカスタマイズしています。
[kentaro](https://twitter.com/_kentaro_m)さん、本当にありがとうございます！
