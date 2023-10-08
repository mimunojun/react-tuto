import Link from "next/link";
import React from "react";

const links = [
    {
        id: 1,
        title: "Home",
        url: "/",
    },
    {
        id: 2,
        title: "Works",
        url: "/works",
    },
    {
        id: 3,
        title: "About",
        url: "/about",
    },
    {
        id: 4,
        title: "Blog",
        url: "/blog",
    },
    {
        id: 5,
        title: "Contact",
        url: "/contact",
    },
];

const Navbar = () => {
    return (
        <div>
            <Link href="/">click to top</Link>
            <div>
                {links.map((link) => {
                    return (
                        <Link key={link.id} href={link.url}>
                            {link.title}
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

export default Navbar;
