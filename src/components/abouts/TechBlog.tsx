import React from 'react'

type TechBlog = {}
const TechBlog: React.FC<TechBlog> = ({ }) => {
  return (
    <section id="TechBlog">
      <h2>TechBlog</h2>
      <p>
        <ul className="alt">
          <li>
            2024-12-19
            <a
              className="item-title"
              href="https://medium.com/eureka-engineering/dbt-1-9-0-%E3%81%A7%E5%B0%8E%E5%85%A5%E3%81%95%E3%82%8C%E3%81%9Fmicrobatch%E3%82%92bigquery%E3%81%A7%E6%A4%9C%E8%A8%BC%E3%81%99%E3%82%8B-2ef4f450f346"
            >
              dbt 1.9.0 で導入されたmicrobatchをBigQueryで検証する
            </a>
          </li>
          <li>
            2023-12-10
            <a
              className="item-title"
              href="https://medium.com/eureka-engineering/%E9%96%8B%E7%99%BAbranch%E3%81%94%E3%81%A8%E3%81%AE%E5%80%8B%E5%88%A5%E7%92%B0%E5%A2%83-adhoc-dev%E7%92%B0%E5%A2%83-%E3%82%92%E6%A7%8B%E7%AF%89%E3%81%97-%E9%96%8B%E7%99%BA%E3%83%95%E3%83%AD%E3%83%BC%E3%82%92%E6%94%B9%E5%96%84%E3%81%97%E3%81%9F%E8%A9%B1-0fb58bcc7129"
            >
              開発Branchごとの個別環境（Adhoc Dev環境）を構築し、開発フローを改善した話
            </a>
          </li>
          <li>
            2022-12-21
            <a
              className="item-title"
              href="https://medium.com/eureka-engineering/argo-rollouts%E3%81%A8pairs%E3%81%AE%E3%83%87%E3%83%AA%E3%83%90%E3%83%AA%E3%83%BC%E6%88%A6%E7%95%A5-progressive-delivery%E3%81%B8%E3%81%AE%E7%A7%BB%E8%A1%8C-266cb2af8d20"
            >
              Argo RolloutsとPairsのデリバリー戦略 -Progressive Deliveryへの移行-
            </a>
          </li>
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
            2021-12-18
            <a
              className="item-title"
              href="https://medium.com/eureka-engineering/s3-security-case-study-6c143ae8ba11"
            >
              ケーススタディで改めて学ぶ、S3をセキュアに運用するために気をつけるべきこと
            </a>
          </li>
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
