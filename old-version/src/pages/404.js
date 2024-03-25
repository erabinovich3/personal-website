import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"

import "../assets/css/error.css"
import "normalize.css"

function Error() {
  return (
    <Layout>
      <Seo pageTitle="Not Found" />
      <main className="main-error">
        <div className="error">
          <div className="error-content">
            <div className="errorText">
              <h1>404</h1>
              <h3>Page Not Found</h3>
            </div>
            <div className="error-img-container">
              <StaticImage
                src="../assets/images/error404.svg"
                placeholder="tracedSVG"
                alt="404 Page Not Found"
                layout="constrained"
                className="error-img"
              />
            </div>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default Error
