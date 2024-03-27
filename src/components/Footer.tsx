import { navLinks } from "@/utils/navLinks";
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
                {navLinks.map((link, i) => {
                    return (
                        <Link
                            href={link.path}
                            className="link link-hover"
                            key={i}
                        >
                            {link.title}
                        </Link>
                    );
                })}
            </nav>
            <nav>
                <div className="grid grid-flow-col gap-4">
                    <a
                        href="https://www.linkedin.com/in/rabinovicherica"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FaLinkedin className={socialLinkStyles} />
                    </a>
                    <Link href="mailto:ericar13@live.com">
                        <HiMail className={socialLinkStyles} />
                    </Link>
                    <a
                        href="https://github.com/erabinovich3"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FaGithub className={socialLinkStyles} />
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
