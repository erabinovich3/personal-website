"use client";

import Link from "next/link";
import React, { useState } from "react";
import logo from "@/assets/name-logo-small.svg";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { HiMenu, HiX } from "react-icons/hi";
import NavLink from "./NavLink";
import { navLinks } from "@/utils/navLinks";

const activeStyles = "border-b-2 border-b-accent text-primary";
const styles = "transition ease-in-out hover:text-secondary duration-200";

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
                    {navLinks.map((link, i) => (
                        <NavLink title={link.title} path={link.path} key={i} />
                    ))}
                </div>
            </div>
            {/* mobile menu */}
            <div
                className={`${isOpen ? "flex" : "hidden"} divider my-0 sm:hidden bg-base-100`}
            />
            <div
                className={`bg-base-100 ${isOpen ? "flex flex-col justify-center items-center gap-3 pb-2" : "hidden"} sm:hidden`}
            >
                {navLinks.map((link, i) => (
                    <NavLink title={link.title} path={link.path} key={i} />
                ))}
            </div>
        </>
    );
};

export default Navbar;
