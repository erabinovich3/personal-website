import React from "react"
import Hero from "../components/Hero"
import Layout from "../components/Layout"
import Seo from "../components/Seo"

import "../assets/css/main.css"
import "normalize.css"

export default function Home() {
  return (
    <Layout>
      <Seo pageTitle="Home" />
      <Hero />
      <main className="main-home">
        I am interested in developing software that helps people, whether in a
        large or small way.
        <br />
        <br />
        I want to make a difference.
        <hr />
        <h3>“Be somebody who makes everybody feel like a somebody.”</h3>
      </main>
    </Layout>
  )
}
