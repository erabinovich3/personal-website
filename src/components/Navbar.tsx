"use client";

import Link from "next/link";
import React, { useState } from "react";
import logo from "@/assets/name-logo-small.svg";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { HiMenu, HiX } from "react-icons/hi";

const activeStyles = "border-b-2 border-b-accent text-primary";
const styles = "transition ease-in-out hover:text-secondary duration-200";

function useNavLinks() {
    return (
        <>
            <Link
                href="/"
                className={
                    usePathname() === "/" ? `${activeStyles}` : `${styles}`
                }
            >
                Home
            </Link>
            <Link
                href="/about"
                className={
                    usePathname() === "/about" ? `${activeStyles}` : `${styles}`
                }
            >
                About
            </Link>
            <Link
                href="/resume"
                className={
                    usePathname() === "/resume"
                        ? `${activeStyles}`
                        : `${styles}`
                }
            >
                Resume
            </Link>
            <Link
                href="/projects"
                className={
                    usePathname() === "/projects"
                        ? `${activeStyles}`
                        : `${styles}`
                }
            >
                Projects
            </Link>
            <Link
                href="/contact"
                className={
                    usePathname() === "/contact"
                        ? `${activeStyles}`
                        : `${styles}`
                }
            >
                Contact
            </Link>
        </>
    );
}

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className="navbar p-3 bg-base-100 gap-3 font-bold justify-between sm:justify-center">
                <div>
                    <button
                        onClick={() => {
                            setIsOpen(!isOpen);
                        }}
                        className="btn btn-ghost text-xl text-neutral block sm:hidden"
                    >
                        {isOpen ? <HiX /> : <HiMenu />}
                        <span className="sr-only">
                            {isOpen ? "Close main menu" : "Open main menu"}
                        </span>
                    </button>
                </div>
                <div>
                    <Link href="/">
                        <Image
                            src={logo}
                            alt="Erica Homepage"
                            width={100}
                            height={150}
                            className="px-2 min-w-20 mr-0 sm:mr-5 "
                        />
                    </Link>
                </div>
                <div
                    className={`transition-all hidden sm:flex sm:flex-row sm:gap-3`}
                >
                    {useNavLinks()}
                </div>
            </div>
            {/* mobile menu */}
            <div
                className={`${isOpen ? "flex" : "hidden"} divider my-0 sm:hidden bg-base-100`}
            />
            <div
                className={`bg-base-100 ${isOpen ? "flex flex-col justify-center items-center gap-3 pb-2" : "hidden"} sm:hidden`}
            >
                {useNavLinks()}
            </div>
        </>
    );
};

export default Navbar;
