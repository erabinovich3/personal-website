import React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import "../assets/css/about.css"
import "normalize.css"

function About({ data }) {
  const pathToImage = getImage(data.allFile.nodes[0].childImageSharp)
  return (
    <Layout>
      <Seo pageTitle="About" />
      <main className="main-about">
        <div className="self-img-container">
          <GatsbyImage
            image={pathToImage}
            alt="Picture of Erica"
            imgClassName="self-img"
          />
        </div>
        <div className="about-content">
          I'm Erica Rabinovich, a full stack software engineer based in Atlanta,
          Georgia.
          <br />
          <br />
          I graduated from Georgia Tech with a BS in Computer Science in 2019
          where I focused on info internetworks and media. I'm interested in
          working on projects that improve people's lives. I love to learn new
          things and hope that my future endeavors will provide that
          opportunity.
          <br />
          <br />
          In my free time, I like to read, crochet, and spend time with my
          family.
        </div>
      </main>
    </Layout>
  )
}

export const query = graphql`
  {
    allFile(
      filter: {
        sourceInstanceName: { eq: "images" }
        extension: { eq: "jpg" }
        name: { eq: "erica" }
      }
    ) {
      nodes {
        childImageSharp {
          gatsbyImageData(
            layout: CONSTRAINED
            placeholder: TRACED_SVG
            height: 130
          )
        }
      }
    }
  }
`

export default About
