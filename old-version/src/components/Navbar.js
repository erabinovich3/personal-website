import { Link } from "gatsby"
import React, { useState } from "react"
import { HiMenu } from "react-icons/hi"
import logo from "../assets/images/name-logo-small.svg"

function Navbar() {
  const [show, setShow] = useState(false)
  return (
    <nav>
      <div className="nav-header">
        <Link to="/">
          <img
            src={logo}
            alt="Erica"
            className={show ? "logo-img logo-show-links" : "logo-img"}
          />
        </Link>
        <button className="nav-button" onClick={() => setShow(show => !show)}>
          <HiMenu />
        </button>
        <div className={show ? "nav-links show-links" : "nav-links"}>
          <Link
            to="/"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => setShow(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => setShow(false)}
          >
            About
          </Link>
          <Link
            to="/resume"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => setShow(false)}
          >
            Resume
          </Link>
          <Link
            to="/projects"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => setShow(false)}
          >
            Projects
          </Link>
          <Link
            to="/contact"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => setShow(false)}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
