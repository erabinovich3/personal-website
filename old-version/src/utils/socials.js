import React from "react"
import { FaLinkedin, FaGithub } from "react-icons/fa"
import { HiMail } from "react-icons/hi"

const socials = [
  {
    id: 1,
    icon: <FaLinkedin className="social-icon"></FaLinkedin>,
    link: "https://www.linkedin.com/in/rabinovicherica",
  },
  {
    id: 2,
    icon: <HiMail className="social-icon"></HiMail>,
    link: "mailto:ericar13@live.com",
  },
  {
    id: 3,
    icon: <FaGithub className="social-icon"></FaGithub>,
    link: "https://github.com/erabinovich3",
  },
]

export default socials
