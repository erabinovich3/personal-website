import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

const socialLinkStyles =
    "text-2xl text-accent hover:text-warning transition ease-in-out duration-300";

const Footer = () => {
    return (
        <footer className="footer footer-center p-10 bg-neutral text-base-200 rounded">
            <nav className="flex flex-row flex-wrap gap-4">
                <Link href="/" className="link link-hover">
                    Home
                </Link>
                <Link href="/about" className="link link-hover">
                    About
                </Link>
                <Link href="/resume" className="link link-hover">
                    Resume
                </Link>
                <Link href="projects" className="link link-hover">
                    Projects
                </Link>
                <Link href="contact" className="link link-hover">
                    Contact
                </Link>
            </nav>
            <nav>
                <div className="grid grid-flow-col gap-4">
                    <a
                        href="https://www.linkedin.com/in/rabinovicherica"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FaLinkedin className={socialLinkStyles}></FaLinkedin>
                    </a>
                    <Link href="mailto:ericar13@live.com">
                        <HiMail className={socialLinkStyles}></HiMail>
                    </Link>
                    <a
                        href="mailto:ericar13@live.com"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FaGithub className={socialLinkStyles}></FaGithub>
                    </a>
                </div>
            </nav>
            <aside className="flex flex-wrap">
                <p>
                    Copyright &copy; {new Date().getFullYear()} Erica Rabinovich
                    | All Rights Reserved | Built with{" "}
                    <a
                        href="https://nextjs.org/"
                        target="_blank"
                        rel="noreferrer"
                        className="font-bold link-hover"
                    >
                        NextJS
                    </a>
                </p>
            </aside>
        </footer>
    );
};

export default Footer;
