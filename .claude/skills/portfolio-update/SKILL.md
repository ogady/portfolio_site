---
name: portfolio-update
description: ogadyのポートフォリオサイト(Astro)のコンテンツを更新するスキル。「ポートフォリオ更新」「経歴を追加」「記事リストを最新に」「プロフィール画像変更」「ロール変更」などと言われた場合に使用する。社内情報(Glean/Slack/Jira)から取り組みを抽出して公開用に抽象化する手順も含む。
---

# portfolio-update

このリポジトリ(`ogady/portfolio_site`)は Astro 5 の静的サイト。デザインは深い青 + 黄色アクセント。
更新作業は基本的に「データファイル編集 → ビルド → 目視確認」。

## 構成と編集箇所

| やりたいこと | 編集先 |
|---|---|
| 経歴・スキル・資格・TechBlog固定リスト・Works | `src/data/profile.ts` |
| ヒーロー(肩書き/紹介文/ボタン/SNSリンク/スタッツ) | `src/pages/index.astro` |
| GitHub/Qiita/Speaker Deck/Medium の自動取得 | `src/lib/fetchers.ts` |
| ブログ記事 | `contents/*.md` (frontmatter: `title`, `date`, `tags`) |
| プロフィール画像(アバター/favicon/OGP兼用) | `public/avatar.jpg` |
| 色・レイアウト | `src/styles/global.css` (`:root` のトークン) |
| デプロイ | `.github/workflows/deploy.yml` (master push → gh-pages) |

- 外部取得はビルド時のみ。失敗してもビルドは落ちず、該当セクションが空になる。反映は次回ビルド(push)後。
- Medium は `medium.com/@ogady` のRSSを自動取得し、`techBlog` 固定リストとタイトル重複なしで統合する。固定リストはフォールバック兼Medium以外(メディアドゥ等)の記事用。新記事が出たら固定リストにも追記しておく。
- Speaker Deck は Atom feed を自動取得(コード変更不要)。

## 手順

1. 変更内容に応じて上表のファイルを編集する。
2. `npx astro build` でエラーがないことを確認する。
3. 見た目を変えた場合は `npx astro preview --port 4399` + Playwright でスクリーンショットを撮り、デスクトップと390px幅の両方を確認する。横スクロールが出ていないか `document.documentElement.scrollWidth > innerWidth` でも確認する。
4. コミット/PRは依頼があったときだけ行う。

## 経歴アップデート(社内情報から抽出)する場合

1. Glean `search` で調べる。出力が大きいのでファイルに保存された結果は `grep -E -A1 "^## [0-9]+\."` でタイトル一覧化してから読む。
   - Jira Epic: `app:jira`, `owner:me`, 期間を `after`/`before` で分割(半年〜1年単位)。ラベル `SRERoadmap*` が四半期ロードマップ。
   - 組織/ロール: Confluence(チーム定義ページ)、社内の昇格通知など。
   - 担当が他メンバーのEpicでもチームの取り組みとして扱ってよい(ユーザー確認済み)。
2. **公開用に抽象化して書く。** 次は載せない:
   - チケット番号、アカウントID、ARN等の識別子
   - 監査・セキュリティ依頼の具体的内容、未公開の社内システム名・プロジェクト名
   - ベンダー契約・金額、社外秘スライドの具体的内容
   - 人事評価・サーベイ結果・1on1・採用候補者に関する情報(検索に出ても使わない)
   - 他メンバーの個人名
3. 粒度は「技術テーマ1行」。具体的すぎるとユーザーから抽象化を求められる(過去に実際あった)。
4. ユーザーが一度削除した項目は、抽象化し直しても復活させない。
5. 推定で書いた箇所(開始時期、ニュアンス)は、最後の報告で「推定」と明記してユーザーに確認する。

## 現在のロール表記(ユーザー確認済み)

- Eureka: Manager, SRE & Data Platform Team / Data Enabling Team
- ヒーローの肩書き: `Manager, SRE & Data Platform / Data Enabling @ Eureka, Inc.`
- 経歴の構成(エウレカ): チームマネジメント / Data Enabling Team の立ち上げ / SRE & Data Platform の技術的取り組み / SREチーム — 基盤

## 既知の落とし穴

- この環境の `sed -i` はBSD版で、日本語や複雑なパターンで失敗する。置換は Python か Edit ツールで行う。
- `cp` が対話確認(`overwrite? (y/n)`)で止まる。上書きは `command cp -f` を使う。
- `base` は `/portfolio_site`。`import.meta.env.BASE_URL` は末尾スラッシュの有無が環境で揺れるので、`.replace(/\/$/, '')` で正規化してから `${base}/path` の形で使う。
- ブログ本文中のiframeにはインライン `width` が付いていてモバイルではみ出す。`.prose iframe { width:100% !important }` で対処済み。
- ブログ記事のURLは `/blog/<ファイル名の小文字>/`。旧Gatsby時代のルート直下URLとは異なる。
- Astro 7 は Node 22+ 必須。ローカルがNode 20のため Astro 5 系を使っている。
- ファイル末尾には必ず改行を入れる。
