import React from 'react'

type Certification = {}
const Certification: React.FC<Certification> = ({ }) => {
  return (
    <section id="Certification">
      <h2>Certification</h2>
      <p>
        <ul className="alt">
          <li>
            <h4>2021-12 AWS Certified Data Analytics - Specialty</h4>
          </li>
          <li>
            <h4>2019-07 AWS Certified Solutions Architect Associate</h4>
          </li>
          <li>
            <h4>2018-05 応用情報技術者</h4>
          </li>
          <li>
            <h4>2017-05 基本情報技術者</h4>
          </li>
        </ul>
      </p>
    </section>
  )
}

export default Certification
