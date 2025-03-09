import React from 'react'

type SkillsProps = {}
const Skills: React.FC<SkillsProps> = ({ }) => {
  return (
    <section id="Skills">
      <h2>Skills</h2>
      <div className="skill-container">
        <div className="skill-category">
          <h3>プログラミング言語</h3>
          <ul className="skill-list">
            <li>Go</li>
            <li>TypeScript / JavaScript</li>
            <li>Python</li>
            <li>PHP</li>
            <li>Java</li>
            <li>C</li>
          </ul>
        </div>

        <div className="skill-category">
          <h3>フレームワーク / ライブラリ</h3>
          <ul className="skill-list">
            <li>React</li>
            <li>Angular</li>
            <li>Django</li>
            <li>Spring Boot</li>
          </ul>
        </div>

        <div className="skill-category">
          <h3>インフラ / クラウド</h3>
          <ul className="skill-list">
            <li>AWS
              <ul>
                <li>EC2, ECS, EKS, Fargate</li>
                <li>RDS, Aurora, DynamoDB</li>
                <li>Lambda, API Gateway</li>
                <li>S3, EFS</li>
                <li>SQS</li>
                <li>CodePipeline</li>
                <li>CDK</li>
              </ul>
            </li>
            <li>Kubernetes</li>
            <li>Docker</li>
            <li>Terraform</li>
            <li>Linux</li>
          </ul>
        </div>

        <div className="skill-category">
          <h3>データベース</h3>
          <ul className="skill-list">
            <li>MySQL</li>
            <li>DynamoDB</li>
          </ul>
        </div>

        <div className="skill-category">
          <h3>DevOps / SRE</h3>
          <ul className="skill-list">
            <li>CI/CD</li>
            <li>SLI/SLO設計</li>
            <li>Progressive Delivery</li>
            <li>Datadog</li>
            <li>マイクロサービスアーキテクチャ</li>
          </ul>
        </div>

        <div className="skill-category">
          <h3>その他</h3>
          <ul className="skill-list">
            <li>Git / GitHub</li>
            <li>Nginx</li>
            <li>API設計</li>
            <li>セキュリティ</li>
            <li>ChatOps (Slack API)</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Skills
