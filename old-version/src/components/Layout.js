import React from "react"
import Footer from "./Footer"
import Navbar from "./Navbar"

import "../assets/css/layout.css"

function Layout({ children }) {
  return (
    <div className="page">
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
