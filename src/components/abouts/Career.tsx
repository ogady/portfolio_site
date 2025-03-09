import React from 'react'

type CareerProps = {}
const Career: React.FC<CareerProps> = ({ }) => {
  return (
    <section id="Career">
      <h2>Career</h2>
      <p>
        <ul>
          <li>
            <h3>
              &nbsp;
              <a href={`https://eure.jp/`}>
                株式会社エウレカ（Eureka, Inc.） &nbsp;
              </a>
              (Jun, 2021〜)
            </h3>
            <ul>
              <li>
                <h4>SREチーム(Jun, 2021~)</h4>
                <ul>
                  <li>スケールに伴うメインプロダクトAPIのサブネットの拡張</li>
                  <li>SLI/SLOの再構築・再定義</li>
                  <li>S3セキュリティ強化</li>
                  <li>Terraformパイプラインの改善</li>
                  <li>ECS Fargate → EKS on EC2移行</li>
                  <li>MySQL v8アップグレード</li>
                  <li>Progressive delivery導入</li>
                  <li>Pull Requestテスト環境自動生成機構構築</li>
                  <li>Data分析基盤の運用（Bigquery, dbt, dagster）</li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <h3>
              &nbsp;
              <a href={`http://www.mediado.jp/mediado/`}>
                株式会社メディアドゥ &nbsp;
              </a>
              (Oct, 2019〜 May, 2021)

            </h3>
            <ul>
              <li>
                <h4>電子書籍取次システムクラウドリフト案件(May, 2020〜)</h4>
                <ul>
                  <li>TerraformによるAWSインフラ構築</li>
                  <li>
                    新規追加機能をフロントエンド〜インフラまで開発（フロントエンド:Angular、バックエンド:Go）
                  </li>
                  <li>
                    既存PHPからのAWSリソースへのアクセスや認証機能をGoのAPIに切り出し、マイクロサービス化
                  </li>
                  <li>PHPを5系から7系へバージョンアップ対応</li>
                  <div className="box">
                    【使用技術】
                    <ul>
                      <li>使用言語：Go, PHP, TypeScript(Angular), Python</li>
                      <li>
                        インフラ：AWS(Fargate, Aurora, EFS, SQS, Lambda, EC2,
                        S3, CodePipeline etc...)
                      </li>
                      <li>Webサーバー：nginx</li>
                      <li>資産管理：GitHub</li>
                    </ul>
                  </div>
                </ul>
              </li>
              <li>
                <h4>Datadog検証(Apr, 2020〜June, 2020)</h4>
                <ul>
                  <li>兼務でSREチームにJoinし、Datadogを用いたコンテナ監視</li>
                  <li>GoアプリケーションのAPM監視の検証</li>
                  <li>Datadogログ集約、アラート機能検証</li>
                  <div className="box">
                    【使用技術】
                    <ul>
                      <li>使用言語：Go</li>
                      <li>インフラ：AWS</li>
                      <li>監視基盤：Datadog</li>
                      <li>資産管理：GitHub</li>
                    </ul>
                  </div>
                </ul>
              </li>
              <li>
                <h4>電子書籍取次システム案件(Oct, 2019〜June, 2020)</h4>
                <ul>
                  <li>
                    電子書籍取次システム移行用のマイグレーションシステムの開発
                  </li>
                  <li>AWSを利用した、EPUBチェック機能の新規開発</li>
                  <li>ChatOpsによる業務効率化 (Slack API)</li>
                  <div className="box">
                    【使用技術】
                    <ul>
                      <li>使用言語：Go</li>
                      <li>
                        インフラ：AWS(EC2, RDS, DynamoDB, SQS, Lambda, CDK
                        etc...)
                      </li>
                      <li>資産管理：GitHub</li>
                    </ul>
                  </div>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <hr />
            <h3>
              &nbsp;
              <a href={`https://www.mizuho-ir.co.jp`}>
                みずほ情報総研株式会社&nbsp;
              </a>
              (Apr, 2017 〜 July, 2019)
            </h3>

            <ul>
              <li>
                <h4>FintechWG(モダン技術知見習得を目的とする、社内施策)</h4>
                <ul>
                  <li>
                    某空港管理会社の案件で、フードコートのキャッシュレスWebアプリケーションのプロトタイプを作成。
                    <div className="box">
                      【使用技術】
                      <ul>
                        <li>フレームワーク：Python Django</li>
                        <li>nginx, wsgi, AWS(EC2, S3)</li>
                        <li>データベース：MySQL</li>
                        <li>stripe(決済系API)</li>
                        <li>資産管理：GitHub</li>
                      </ul>
                    </div>
                  </li>
                </ul>
                <ul>
                  <li>
                    銀行システムの内部API化案件に参画。主に技術検証チームとしてマイクロサービス開発とAPI
                    Management製品の実機比較検証を実施。
                    <div className="box">
                      【使用技術】
                      <ul>
                        <li>フレームワーク：Java(Spring boot)</li>
                        <li>クラウド環境：AWS(lambda, S3, API gateway)</li>
                        <li>
                          オンプレミス環境：IBM Cloud(API Connect, API Manager,
                          API Developer Portal)
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </li>
            </ul>
            <ul>
              <li>
                <h4>全銀24時間365日対応案件</h4>
                <ul>
                  <li>
                    他行間の内国為替取引を担う全銀システムのサービス24時間化に伴い、みずほ銀行の全銀接続機能のシステムアップグレードを行うもの。主にPMとして、要件定義、基本設計、詳細設計、単体テスト、結合テスト、シナリオテスト、運用テストを推進。
                    自身でも、テスターとして、単体テスト、結合テストの実施とバグ修正を実施
                    <div className="box">
                      【使用技術】
                      <ul>
                        <li>使用言語：C言語</li>
                        <li>基盤：Linux(RedHat Enterprise)</li>
                        <li>資産管理：SVN</li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </p>
    </section>
  )
}

export default Career
