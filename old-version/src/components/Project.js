import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { FaLaptopCode } from "react-icons/fa"
import { HiOutlineExternalLink } from "react-icons/hi"
import React from "react"

function Project({ project = {} }) {
  const {
    name,
    description: { description },
    image,
    details,
  } = project
  const pathToImage = getImage(image)
  const { tags, links } = details

  return (
    <div className="project-card">
      <div className="project-img-container">
        <GatsbyImage
          image={pathToImage}
          alt={name}
          imgClassName="project-img"
        />
      </div>

      <div className="project-info">
        <h2 className="project-title">{name}</h2>
        <p className="project-desc">{description}</p>
        <div className="link-container">
          {links.map((link, index) => {
            return (
              <div key={index} className="project-link">
                <a href={link.link} target="_blank" rel="noreferrer">
                  {link.type === "source" ? (
                    <FaLaptopCode className="project-link-icon" />
                  ) : (
                    <HiOutlineExternalLink className="project-link-icon" />
                  )}
                  <span className="project-link-text">
                    {link.type === "source" ? "Source Code" : "See It Live"}
                  </span>
                </a>
              </div>
            )
          })}
        </div>
        <div className="project-tag-container">
          {tags.map((tag, index) => {
            return (
              <div key={index} className="project-tag">
                {tag}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Project
