import React from "react"
import socials from "../utils/socials"

function Footer() {
  return (
    <footer>
      <div className="socials">
        {socials.map(social => {
          return (
            <a href={social.link} key={social.id}>
              {social.icon}
            </a>
          )
        })}
      </div>
      <h4 className="footer-text">
        &copy; {new Date().getFullYear()} Erica Rabinovich | All Rights Reserved
        | Built with{" "}
        <a href="https://www.gatsbyjs.com/" target="_blank" rel="noreferrer">
          Gatsby
        </a>
      </h4>
    </footer>
  )
}

export default Footer
