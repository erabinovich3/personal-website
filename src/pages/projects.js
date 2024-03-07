import React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import { graphql } from "gatsby"
import Project from "../components/Project"

import "../assets/css/projects.css"
import "normalize.css"

function Projects({ data }) {
  const projects = data.allContentfulProject.nodes
  return (
    <Layout>
      <Seo pageTitle="Projects" />
      <main className="project-main">
        {projects.map(project => {
          return <Project key={project.id} project={project} />
        })}
      </main>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulProject(sort: { updatedAt: DESC }) {
      nodes {
        id
        name
        description {
          description
        }
        details {
          tags
          links {
            link
            type
          }
        }
        image {
          gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
        }
      }
    }
  }
`

export default Projects
