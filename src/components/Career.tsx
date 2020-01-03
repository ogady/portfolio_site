import React from 'react'

type CareerProps = {}
const Career: React.FC<CareerProps> = ({}) => {
  return (
    <section id="Career">
      <h2>Career</h2>
      <p>
        <ul>
          <li>
            <h4>
              &nbsp;
              <a href={`http://www.mediado.jp/mediado/`}>
                株式会社メディアドゥ &nbsp;
              </a>
              (Oct, 2019〜)
            </h4>
            <ul>
              <li>
                <strong>電子書籍取次システム移行案件</strong>
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
                        基盤：AWS(EC2, RDS, DynamoDB, SQS, Lambda, CDK etc...)
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
            <h4>
              &nbsp;
              <a href={`https://www.mizuho-ir.co.jp`}>
                みずほ情報総研株式会社&nbsp;
              </a>
              (Apr, 2017 〜 July, 2019)
            </h4>

            <ul>
              <li>
                <strong>
                  FintechWG(モダン技術知見習得を目的とする、社内施策)
                </strong>
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
                <strong>全銀24時間365日対応案件</strong>
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
