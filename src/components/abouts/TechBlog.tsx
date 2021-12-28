import React from 'react'

type TechBlog = {}
const TechBlog: React.FC<TechBlog> = ({ }) => {
  return (
    <section id="TechBlog">
      <h2>TechBlog</h2>
      <p>
        <ul className="alt">
          <li>
            2021-12-18
            <a
              className="item-title"
              href="https://medium.com/eureka-engineering/s3-security-case-study-6c143ae8ba11"
            >
              ケーススタディで改めて学ぶ、S3をセキュアに運用するために気をつけるべきこと
            </a>
          </li>
          <li>
            2020-08-05
            <a
              className="item-title"
              href="https://techdo.mediado.jp/entry/2020/08/05/111437"
            >
              Fargate+FireLens+EFSでログ管理
            </a>
          </li>
          <li>
            2020-06-09
            <a
              className="item-title"
              href="https://techdo.mediado.jp/entry/2020/06/09/100000"
            >
              メディアドゥにもSREチームができました！
            </a>
          </li>
          <li>
            2020-03-13
            <a
              className="item-title"
              href="https://techdo.mediado.jp/entry/2020/03/13/110000"
            >
              goroutineでバッチ処理時間を大幅に改善した話
            </a>
          </li>
        </ul>
      </p>
    </section>
  )
}

export default TechBlog
