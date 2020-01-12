---

title: 'Gatsby.jsでOGPイメージを表示するときハマったことメモ'

date: '2020-01-11'

tags: ['Gatsby']

---

## やりたかったこと

Gatsby.jsで作ったサイトにOGP設定をして、リンクシェアしたときにTwitterカードとかを綺麗に表示させたかった。

## 前提

- 静的サイトホスティングには、github pages を使用
- 個人ドメインは使用ぜず、デフォルトの`https://{ユーザー名}.github.io/{リポジトリ名}`を使用

## ハマったこと

Twitterカードにサムネイルがうまく表示されない。

## 調べてみる

`gatsby-config.js` はこう

```javascript
require('dotenv').config()
const querystring = require('querystring')
const path = require('path')

const siteMetadata = {
  title: 'Takumi Ogawa - @ogady',
  author: 'Takumi Ogawa',
  description: "ogady's portfolio site",
  siteUrl: 'https://ogady.github.io/portfolio_site',　
  siteLanguage: 'ja',
  shortName: 'ogady',
  ----------中略----------
  },
}

module.exports = {
  siteMetadata,
  pathPrefix: `/portfolio_site`, // ←（1）
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `assets`, `images`),　// ← サムネイル画像の格納パス
      },
    },
  ],
}
```

（1）では、pathPrefixを指定しています。Github Pagesはドメインのルート（/）以外（`https://{ユーザー名}.github.io/{リポジトリ名}`）でホストされているので、すべてのリソースのパスにプレフィックス（{リポジトリ名}の部分）を追加する必要があります。

ヘッダー情報のコンポーネントはこう

```tsx
import React from 'react'
import Helmet, { HelmetProps } from 'react-helmet'
import { graphql, useStaticQuery } from 'gatsby'
import { createAbsoluteUri } from '../lib/utils'

const Head: React.FC<HelmetProps> = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
          siteUrl
          siteLanguage
          user {
            twitter
          }
        }
      }
      avatar: file(relativePath: { eq: "ogady_pro.jpg" }) { 	// ←（2）
        publicURL
      }
    }
  `)

  const {
    user,
    title,
    description,
    siteUrl,
    siteLanguage,
  } = data.site.siteMetadata

  return (
    <Helmet title={title}>
      <html lang={siteLanguage} />
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={title} />
      <meta property="og:url" content={siteUrl} />
      <meta
        property="og:image"
        content={createAbsoluteUri(siteUrl, data.avatar.publicURL)} // ←（3）
      />
      <meta property="og:image:type" content="image/jpeg" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={`@${user.twitter}`} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:url" content={siteUrl}></meta>
      <meta name="twitter:description" content={description} />
      <meta
        name="twitter:image"
        content={createAbsoluteUri(siteUrl, data.avatar.publicURL)} // ←（4）
      />
    </Helmet>
  )
}

export default Head
```

（2）では、graphQLのクエリでサムネイル画像のファイル名指定で、ファイルを静的ディレクトリにコピーし、パブリックURL（相対パス）を取得しています。

（3）、（4）で`content`に指定したURLがOGPのカードにサムネイルとして表示されます。ここでは、siteMetadataで定義している`siteUrl`と①で取得したパブリックURLを結合してサムネイル画像のフルパスを生成しています。

## 何がダメだったか

（3）、（4）でsiteUrlと、サムネ画像の`publicURL`を結合していますが、siteURLにパスプレフィックスと同じリポジトリ名を含めてしまっていた。

`publicURL`には（1）で定義したパスプレフィックスが含まれるので、最終的なサムネイル画像のフルパスが

`https://{ユーザー名}.github.io/{リポジトリ名}/{リポジトリ名}/static/{サムネイル画像ファイル}`となってしまい、正しく参照されていなかった。

## どうすべきか

直し方は簡単で、`gatsby-config.js`を以下のように編集する、

```javascript
require('dotenv').config()
const querystring = require('querystring')
const path = require('path')

const siteMetadata = {
  title: 'Takumi Ogawa - @ogady',
  author: 'Takumi Ogawa',
  description: "ogady's portfolio site", 
  // siteUrl: 'https://ogady.github.io/portfolio_site',　// ここを↓
  siteUrl: 'https://ogady.github.io/',　// こう！！
  siteLanguage: 'ja',
  shortName: 'ogady',
  ----------中略----------
  },
}
```

## 後書き

くそ凡ミスでした。。。

## 参考にした記事など
- [公式ドキュメント](https://www.gatsbyjs.org/docs/path-prefix/)

