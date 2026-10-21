export const user = {
  name: 'Takumi Ogawa',
  handle: 'ogady',
  github: 'ogady',
  qiita: 'ogady',
  speakerDeck: 'takumiogawa',
  twitter: '_ogady_',
  facebook: 'takumi.ogawa.37266',
  linkedin: 'takumi-ogawa-869046195',
  githubTopic: 'my-portfolio',
}

export const skills = [
  { title: 'Programming Languages', items: ['Go', 'TypeScript / JavaScript', 'Python', 'PHP'] },
  { title: 'Infrastructure / Cloud', items: ['AWS / Google Cloud', 'Kubernetes', 'Docker', 'Terraform', 'Linux'] },
  { title: 'Data Platform', items: ['BigQuery', 'dbt', 'dagster'] },
  { title: 'Database', items: ['MySQL', 'DynamoDB'] },
  { title: 'DevOps / SRE', items: ['CI/CD', 'SLI/SLO設計', 'Progressive Delivery', 'Datadog'] },
]

export type Project = {
  title: string
  period?: string
  highlights: string[]
  stack?: string[]
}

export type Job = {
  company: string
  url: string
  period: string
  role: string
  projects: Project[]
}

export const career: Job[] = [
  {
    company: '株式会社エウレカ',
    url: 'https://eure.jp/',
    period: '2021.06 — Present',
    role: 'Manager, SRE & Data Platform Team / Data Enabling Team',
    projects: [
      {
        title: 'チームマネジメント',
        period: '2025.03 〜',
        highlights: [
          'SRE & Data Platform Team と Data Enabling Team のマネージャーとして、ロードマップ・予算策定、採用、オンボーディング、育成を担当',
          'チームのミッション／ビジョン、スキル標準、定常イベント（Refinement / Retrospective）を整備し、自律的に回るチームへ',
        ],
      },
      {
        title: 'Data Enabling Team の立ち上げ',
        period: '2026.01 〜',
        highlights: [
          'DMBOKに基づくデータマネジメントを担うチームとして、Vision / Mission、責務の境界、スキル・グレード定義を策定',
          'データ品質、ガバナンス、アクセス制御、メタデータ管理を、運用できる仕組みとして標準化',
          'AI活用を見据えた指標定義の一元化やビジネス文脈の整備を、部門横断で推進',
        ],
        stack: ['Data Governance', 'Data Modeling', 'dbt', 'BigQuery'],
      },
      {
        title: 'SRE & Data Platform の技術的取り組み',
        period: '2024.10 〜',
        highlights: [
          '信頼性: SLO / CUJ の再設計と、モバイルを含む監視・SLI/SLO運用の整備',
          'ネットワーク・セキュリティ: CloudFront / WAF を軸にした環境構成の統一と、Zero Trust の検証',
          'グローバル展開・データ連携: 海外展開に向けた基盤整備と、マーケティング基盤とのデータ連携',
          'AI活用: LLMプラットフォームとAIコーディング支援環境の整備',
        ],
        stack: ['AWS', 'GCP', 'Terraform', 'Datadog', 'Cloudflare'],
      },
      {
        title: 'SREチーム — 基盤',
        period: '2021.06 〜',
        highlights: [
          'スケールに伴うAPI基盤の拡張と、SLI/SLOの再定義',
          'ECS Fargate → EKS on EC2 移行、MySQL v8 アップグレード',
          'Progressive Delivery の導入、PRごとのテスト環境の自動生成',
          'データ分析基盤の運用（BigQuery, dbt, dagster）',
        ],
      },
    ],
  },
  {
    company: '株式会社メディアドゥ',
    url: 'http://www.mediado.jp/mediado/',
    period: '2019.10 — 2021.05',
    role: 'Backend / SRE',
    projects: [
      {
        title: '電子書籍取次システム クラウドリフト',
        period: '2020.05 〜',
        highlights: [
          'TerraformによるAWSインフラ構築',
          '新規追加機能をフロントエンド〜インフラまで開発（Angular / Go）',
          '既存PHPからのAWSリソースアクセス・認証機能をGoのAPIに切り出し、マイクロサービス化',
          'PHPを5系から7系へバージョンアップ',
        ],
        stack: ['Go', 'PHP', 'TypeScript', 'Python', 'AWS', 'nginx'],
      },
      {
        title: 'Datadog検証',
        period: '2020.04 — 2020.06',
        highlights: [
          '兼務でSREチームにJoinし、Datadogを用いたコンテナ監視',
          'GoアプリケーションのAPM監視の検証',
          'Datadogログ集約、アラート機能検証',
        ],
        stack: ['Go', 'AWS', 'Datadog'],
      },
      {
        title: '電子書籍取次システム',
        period: '2019.10 — 2020.06',
        highlights: [
          '電子書籍取次システム移行用のマイグレーションシステムの開発',
          'AWSを利用した、EPUBチェック機能の新規開発',
          'ChatOpsによる業務効率化（Slack API）',
        ],
        stack: ['Go', 'AWS', 'CDK'],
      },
    ],
  },
  {
    company: 'みずほ情報総研株式会社',
    url: 'https://www.mizuho-ir.co.jp',
    period: '2017.04 — 2019.07',
    role: 'Engineer / PM',
    projects: [
      {
        title: 'FintechWG（モダン技術知見習得を目的とする社内施策）',
        highlights: [
          '某空港管理会社の案件で、フードコートのキャッシュレスWebアプリケーションのプロトタイプを作成',
          '銀行システムの内部API化案件で、マイクロサービス開発とAPI Management製品の実機比較検証を実施',
        ],
        stack: ['Python Django', 'Spring Boot', 'AWS', 'IBM Cloud', 'Stripe'],
      },
      {
        title: '全銀24時間365日対応案件',
        highlights: [
          '全銀システムの24時間化に伴う、みずほ銀行の全銀接続機能のシステムアップグレード',
          '主にPMとして要件定義〜運用テストを推進。自身もテスターとして単体・結合テストとバグ修正を実施',
        ],
        stack: ['C', 'RHEL', 'SVN'],
      },
    ],
  },
]

export const certifications = [
  { date: '2018-05', name: '応用情報技術者' },
  { date: '2017-05', name: '基本情報技術者' },
]

export const techBlog = [
  { date: '2025-12-03', title: 'エウレカにおけるEKS導入から現在までの変遷', url: 'https://medium.com/@ogady' },
  { date: '2024-12-19', title: 'dbt 1.9.0 で導入されたmicrobatchをBigQueryで検証する', url: 'https://medium.com/eureka-engineering/dbt-1-9-0-%E3%81%A7%E5%B0%8E%E5%85%A5%E3%81%95%E3%82%8C%E3%81%9Fmicrobatch%E3%82%92bigquery%E3%81%A7%E6%A4%9C%E8%A8%BC%E3%81%99%E3%82%8B-2ef4f450f346' },
  { date: '2023-12-10', title: '開発Branchごとの個別環境（Adhoc Dev環境）を構築し、開発フローを改善した話', url: 'https://medium.com/eureka-engineering/%E9%96%8B%E7%99%BAbranch%E3%81%94%E3%81%A8%E3%81%AE%E5%80%8B%E5%88%A5%E7%92%B0%E5%A2%83-adhoc-dev%E7%92%B0%E5%A2%83-%E3%82%92%E6%A7%8B%E7%AF%89%E3%81%97-%E9%96%8B%E7%99%BA%E3%83%95%E3%83%AD%E3%83%BC%E3%82%92%E6%94%B9%E5%96%84%E3%81%97%E3%81%9F%E8%A9%B1-0fb58bcc7129' },
  { date: '2022-12-21', title: 'Argo RolloutsとPairsのデリバリー戦略 -Progressive Deliveryへの移行-', url: 'https://medium.com/eureka-engineering/argo-rollouts%E3%81%A8pairs%E3%81%AE%E3%83%87%E3%83%AA%E3%83%90%E3%83%AA%E3%83%BC%E6%88%A6%E7%95%A5-progressive-delivery%E3%81%B8%E3%81%AE%E7%A7%BB%E8%A1%8C-266cb2af8d20' },
  { date: '2021-12-18', title: 'ケーススタディで改めて学ぶ、S3をセキュアに運用するために気をつけるべきこと', url: 'https://medium.com/eureka-engineering/s3-security-case-study-6c143ae8ba11' },
  { date: '2020-08-05', title: 'Fargate+FireLens+EFSでログ管理', url: 'https://techdo.mediado.jp/entry/2020/08/05/111437' },
  { date: '2020-06-09', title: 'メディアドゥにもSREチームができました！', url: 'https://techdo.mediado.jp/entry/2020/06/09/100000' },
  { date: '2020-03-13', title: 'goroutineでバッチ処理時間を大幅に改善した話', url: 'https://techdo.mediado.jp/entry/2020/03/13/110000' },
].sort((a, b) => b.date.localeCompare(a.date))

export const works = [
  {
    title: 'VRoid Models',
    url: 'https://hub.vroid.com/users/6571484',
    image: 'https://vroid-hub.pximg.net/c/300x400_a2_g5/images/portrait_images/1606028/7118066965436116654.png',
  },
  {
    title: 'Paintings (Pixiv)',
    url: 'https://www.pixiv.net/users/6571484',
    image: 'pixiv.png',
  },
]
