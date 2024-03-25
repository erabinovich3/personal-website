import React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import socials from "../utils/socials"

import "../assets/css/contact.css"
import "normalize.css"

function Contact() {
  return (
    <Layout>
      <Seo pageTitle="Contact" />
      <main className="form-main">
        <div className="contact-socials">
          {socials.map(social => {
            return (
              <div key={social.id} className="contact-social">
                <a href={social.link}>{social.icon}</a>
                {displaySocial(social.link)}
              </div>
            )
          })}
        </div>
        <div className="contact-form">
          <form
            action="https://formspree.io/f/mvoldbkg"
            method="POST"
            className="form"
          >
            <div className="form-row">
              <label htmlFor="name">
                Name <span className="form-required">(Required)</span>
              </label>
              <input type="text" name="name" id="name" required />
            </div>
            <div className="form-row">
              <label htmlFor="email">
                Email <span className="form-required">(Required)</span>
              </label>
              <input type="email" name="email" id="email" required />
            </div>
            <div className="form-row">
              <label htmlFor="message">
                Message <span className="form-required">(Required)</span>
              </label>
              <textarea name="message" id="message" required></textarea>
            </div>
            <button type="submit" className="submit-btn">
              Submit
            </button>
          </form>
        </div>
        <div className="contact-spacer"></div>
      </main>
    </Layout>
  )
}

function displaySocial(link) {
  if (link.includes("mailto:")) {
    return link.substring(link.indexOf(":") + 1)
  } else {
    return link.substring(link.lastIndexOf("/") + 1)
  }
}

export default Contact
