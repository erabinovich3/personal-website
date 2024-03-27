import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface NavLinkProps {
    title: string;
    path: string;
}

const NavLink = ({ title, path }: NavLinkProps) => {
    return (
        <Link
            href={path}
            className={
                usePathname() === path
                    ? "border-b-2 border-b-accent text-primary"
                    : "transition ease-in-out hover:text-secondary duration-200"
            }
        >
            {title}
        </Link>
    );
};

export default NavLink;
