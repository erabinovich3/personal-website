import { Metadata } from "next";
import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

export const metadata: Metadata = {
    title: "Contact",
};

const socialLinkStyles =
    "flex flex-row gap-2 hover:text-accent transition ease-in-out duration-300";

const ContactPage = () => {
    return (
        <div className="flex flex-col gap-5 lg:gap-12 justify-center items-center w-full">
            <div className="flex flex-row flex-wrap gap-3 justify-center items-center w-full min-w-[210px]">
                <a
                    href="https://www.linkedin.com/in/rabinovicherica"
                    target="_blank"
                    rel="noreferrer"
                    className={socialLinkStyles}
                >
                    <FaLinkedin className="text-2xl" />
                    rabinovicherica
                </a>
                <Link
                    href="mailto:ericar13@live.com"
                    className={socialLinkStyles}
                >
                    <HiMail className="text-2xl" />
                    ericar13@live.com
                </Link>
                <a
                    href="https://github.com/erabinovich3"
                    target="_blank"
                    rel="noreferrer"
                    className={socialLinkStyles}
                >
                    <FaGithub className="text-2xl" />
                    erabinovich3
                </a>
            </div>
            <div className="w-full">
                <form
                    action="https://formspree.io/f/mvoldbkg"
                    method="POST"
                    className="flex flex-col gap-3 w-full min-w-[150px] max-w-5xl m-auto"
                >
                    <input
                        required
                        type="text"
                        name="name"
                        placeholder="Name"
                        className="input input-bordered w-full"
                    />
                    <input
                        required
                        type="email"
                        name="email"
                        placeholder="Email"
                        className="input input-bordered w-full"
                    />
                    <textarea
                        required
                        placeholder="Message"
                        name="message"
                        className="textarea textarea-bordered w-full"
                    />
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactPage;
