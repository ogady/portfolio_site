# portfolio_site

ogady's portfolio site. [Astro](https://astro.build) で構築した静的サイト。

## Development

```bash
npm install
npm run dev      # http://localhost:4321/portfolio_site/
npm run build    # dist/ に出力
```

## 構成

- `src/data/profile.ts` — プロフィール・経歴・スキル・資格・TechBlogなどのコンテンツ
- `src/lib/fetchers.ts` — GitHub / Qiita / Speaker Deck をビルド時に取得（失敗時は該当セクションを省略）
- `contents/*.md` — ブログ記事（frontmatter: `title`, `date`, `tags`）
- `src/styles/global.css` — デザイントークン（深い青 + 黄色のアクセント）

## Deploy

master への push で GitHub Actions が `gh-pages` ブランチへデプロイする。

Secrets（いずれもレート制限回避用。未設定でもビルド可）:

- `READ_GITHUB_API_TOKEN` — GitHub API
- `QIITA_API_TOKEN` — Qiita API
- `GH_TOKEN` — gh-pages へのデプロイ（scope: `repo`）

## Licence

MIT
