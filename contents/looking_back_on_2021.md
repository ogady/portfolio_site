---
title: '2021年振り返り'

date: '2021-12-31'

tags: ['others']
---

## はじめに

[ogady](https://twitter.com/_ogady_)です。

今年は転職したりSREになったりといろいろありましたが、自身の備忘もかねて2021年を振り返っていこうと思います。


## 2021年の振り返り

#### コアシステムのクラウドリフト（メディアドゥ時代）

メディアドゥのコアシステムのクラウドリフトに携わってきました。

メインの技術スタックがPHP、Go、AWSだったのでこの時に色々触れるようになり、今に活きています。

この時、ついでに新規機能を作ろうということでで完全に新しいシステムを開発することになり、フロントエンドからインフラまでをガッツリやれたのは良い経験でした。

また、当初考えていた通り、SREチームと協力してアラートなどを設定して運用に乗せられる体制も整えていきました。

無事リリース完了し、運用の中でSNIの仕様だったり、オンプレのPostgresqlとAurora for Postgresqlのshared_buffersへのメモリ割り当ての違いだったり、勉強になることもたくさんありました。

AWSのインフラ構築時は自分ともう一人がメインでやっていたため、ナレッジシェアが出来ていない状態だったため、チーム全体で運用できるような状態に持っていけるように、リリース後にドキュメントなども整備していきました。

このあたりで、SRE Lounge/NEXTの関わり、クラウドリフトのインフラ構築をやる中でSRE領域の専門性を高めたいという思いが募ってきました。

#### 転職（メディアドゥ -> エウレカ）

メディアドゥでのクラウドリフトが落ち着いたタイミングで、エウレカで働いている[@Takashi Narikawa](https://twitter.com/fukubaka0825)から声をかけてもらって、エウレカにSREとして転職しました。

エウレカに入社して感じたこととしては、

- バックオフィス系のオンボーディングがBotにより自動化されているので楽
- Welcome Talk Rallyという制度があり、いろんな人と話す機会が仕組みとして存在しているので、リモートの中でもコミュニケーションを取りやすい
- 比較的小規模の会社であるため、社員のプロダクトに対する視座が高く、裁量もかなり与えられているため、やりたいことをやりやすい空気がある
- 社員の仲がめっちゃいい

といった感じでした。

また、業務中Slack Huddleに常駐しているといろんなチームの人が話しにきてくれるので完全リモート下でもコミュニケーションに困ることはありませんでした。

#### エウレカでSREとして半年何をしてきたか

まだ入社して半年ですが、主に

- スケールに伴うメインプロダクトAPIのサブネットの拡張
- SLI/SLOの再構築・再定義
- セキュリティ強化
- Terraformパイプラインの改善
- SREに一人リファラル紹介（[@MoneyForest](https://twitter.com/_MoneyForest)）
- aws certified data analytics - specialty取得（間違えて申し込んだのがきっかけだけど、勉強になったし結果よかった）

などをやってきました。

SREチームはメンバーの協力や、ドキュメント/IaCが整備されていることもあってキャッチアップをさくさく進めることができたので、早めに業務でアウトプットを出すことができました。

チーム内外の人たちにもよくしていただき、いい会社に入ったなぁと強く感じています。

#### SRE Lounge #13開催

去年に引き続き、SRE Loungeのイベントに運営として参加し、オンライン開催を行いました。
同イベントで久々の登壇も行い、結構反響を得ることができました。

<iframe width="560" height="315" src="https://www.youtube.com/embed/_hfRB_uVqOM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### 技術的なアウトプット

上記登壇に加え、ブログを2本執筆しました。

<div style="left: 0; width: 100%; height: 190px; position: relative;"><iframe src="https://hatenablog-parts.com/embed?url=https%3A%2F%2Ftechdo.mediado.jp%2Fentry%2F2021%2F05%2F25%2F110000" style="top: 0; left: 0; width: 100%; height: 100%; position: absolute; border: 0;" allowfullscreen scrolling="no"></iframe></div>

<script async src="https://static.medium.com/embed.js"></script><a class="m-story" href="https://medium.com/eureka-engineering/s3-security-case-study-6c143ae8ba11">ケーススタディで改めて学ぶ、S3をセキュアに運用するために気をつけるべきこと</a>

### 趣味とか

#### アニメについて

今年も相変わらずアニメをみていました。

今年好きだったアニメ（旧作はたくさんあるので省略）

- TVシリーズ
    - 平家物語(FOD独占先行配信)
    - ウマ娘 プリティーダービー Season 2
    - かげきしょうじょ!!
    - Sonny Boy
    - スーパークルックス(ネトフリオリジナル)
    - Vivy - Fluorite Eyeʼs Song-
    - ひぐらしのなく頃に卒(いろんな意味で面白かった)
    - 2.43 清陰高校男子バレー部
    - シャドーハウス

- 映画
    - 劇場版 少女☆歌劇 レヴュースタァライト
    - アイの歌声を聴かせて
    - シン・エヴァンゲリオン劇場版

来年は、タイバニ2期、地球外少年少女（映画公開としては来年）、犬王、グッバイ ドン・グリーズ！、RE:cycle of the PENGUINDRUM、スプリガン、チェンソーマン、ぼっち・ざ・ろっく！とかが楽しみですね。

#### お絵描きを始めたこと

昔からやってみたかったイラストについに手を出しました。二次創作とかオリジナルイラストとか、いつもTwitterに流れてくるものを眺めているだけだったのですが、作る側にもなりたいなーと思って早数年経っていたのですが、ついに。

絵が描けるようになると、自分の描く最強の世界を形として表現できるようになるのでそこ目指してやっていきたい。

9月に始めて、今3ヶ月くらいなのですが仕事の合間を縫って社内の人のVRアバターなどを描いています。
めちゃたのしー

<div style="left: 0; width: 100%; height: 0; position: relative; padding-bottom: 52.5%;"><iframe src="https://embed.pixiv.net/oembed_iframe.php?type=illust&id=95104592" style="top: 0; left: 0; width: 100%; height: 100%; position: absolute; border: 0;" allowfullscreen></iframe></div>

<div style="left: 0; width: 100%; height: 0; position: relative; padding-bottom: 52.5%;"><iframe src="https://embed.pixiv.net/oembed_iframe.php?type=illust&id=95104624" style="top: 0; left: 0; width: 100%; height: 100%; position: absolute; border: 0;" allowfullscreen></iframe></div>

### 2022年の抱負

#### 業務内のこと

来年のSREチームとしては、Policy as Codeやk8sへの本格移行などがキーワードとして上がっているため、冬休み中にキャッチアップをしないと。

また、今年やってきたSLO再定義もまだまだ完全とは程遠いのでそちらも引き続きやっていきます。
CCチームのメトリクスとの連携や、クライアントメトリクスから信頼性を図る手法などにトライしていきたい。

なので、しばらくはエウレカSREチームでSREぽいことをやっていく予定です。

#### エンジニアとして

これまで、エンジニアキャリアについては結構成り行きに任せて動いていたのですが、そろそろちゃんとゴールを描きなからやっていこうと思います。

来年は、SREとして今たりてないと感じるところを書き出してそれを重点的に伸ばしていくような時期にしたいと思います。副業なども視野に入れてエウレカでは得ることができないような経験も積みたいですね。

#### 趣味のこと

ここは変わらず、細々とイラスト続けつつ、アニメ/漫画/映画をみていこうかな

#### 来年のキーワード

- k8s
- PaC
- 負荷試験の自動化
- SLI/SLO再構築第二弾
- リリースエンジニアリング
- データベースの仕組み
- リード/ファシリテートのスキル
- お絵描き
