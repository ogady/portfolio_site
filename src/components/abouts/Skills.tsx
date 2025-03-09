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
          </ul>
        </div>

        <div className="skill-category">
          <h3>インフラ / クラウド</h3>
          <ul className="skill-list">
            <li>AWS / Google Cloud</li>
            <li>Kubernetes</li>
            <li>Docker</li>
            <li>Terraform</li>
            <li>Linux</li>
          </ul>
        </div>

        <div className="skill-category">
          <h3>Data基盤</h3>
          <ul className="skill-list">
            <li>BigQuery</li>
            <li>dbt</li>
            <li>dagster</li>
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
