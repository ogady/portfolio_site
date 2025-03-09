import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

type WorksProps = {
}

const Works: React.FC<WorksProps> = ({ }) => {
    const data = useStaticQuery(graphql`
    {
      pixiv: file(relativePath: { eq: "Pixiv.png" }) {
        childImageSharp {
          fluid(maxWidth: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
    return (
        <section id="Works">
            <h2>Works</h2>
            <div className="row">
                <article className="4u 12u$(xsmall) work-item" >
                    <a href={`https://hub.vroid.com/characters/1171131286256569911/models/2386843957743529183`} className="image fit thumb">
                        <img src={`https://vroid-hub.pximg.net/c/300x400_a2_g5/images/portrait_images/1606028/7118066965436116654.png`} alt="" />
                    </a>
                    <a href={`https://hub.vroid.com/users/6571484`} className="slide-title">
                        <h3>VRoid Models</h3>
                    </a>
                </article>
                <article className="4u 12u$(xsmall) work-item" >
                    <a href={`https://www.pixiv.net/users/6571484`} className="image fit thumb">
                        <Img fluid={data.pixiv.childImageSharp.fluid} />
                    </a>
                    <a href={`https://www.pixiv.net/users/6571484`} className="slide-title">
                        <h3>Paintings(Pixiv)</h3>
                    </a>
                </article>
            </div>
        </section>
    )
}

export default Works
