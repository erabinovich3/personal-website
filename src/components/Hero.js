import { StaticImage } from "gatsby-plugin-image"
import React from "react"

import "../assets/css/hero.css"

function Hero() {
  return (
    <div className="hero">
      <div className="hero-content">
        <div className="heroText">
          <h1>Hi, I'm Erica.</h1>
          <h3>Full Stack Software Engineer</h3>
        </div>
        <div className="hero-img-container">
          <StaticImage
            src="../assets/images/erica-vector-background.svg"
            placeholder="tracedSVG"
            alt="simple drawing of erica"
            layout="constrained"
            imgClassName="hero-img"
          />
        </div>
      </div>
    </div>
  )
}

export default Hero
