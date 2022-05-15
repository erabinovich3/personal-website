import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import Helmet from "react-helmet"

const query = graphql`
  {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`

function Seo({ pageTitle }) {
  const { site } = useStaticQuery(query)
  return (
    <Helmet
      title={`${pageTitle} | ${site.siteMetadata.title}`}
      htmlAttributes={{
        lang: "en",
      }}
      meta={[
        {
          name: `description`,
          content: site.siteMetadata.description,
        },
        {
          property: `og:title`,
          content: `${pageTitle} | ${site.siteMetadata.title}`,
        },
        {
          property: `og:description`,
          content: site.siteMetadata.description,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata?.author || ``,
        },
        {
          name: `twitter:title`,
          content: `${pageTitle} | ${site.siteMetadata.title}`,
        },
        {
          name: `twitter:description`,
          content: site.siteMetadata.description,
        },
      ]}
    ></Helmet>
  )
}

export default Seo
