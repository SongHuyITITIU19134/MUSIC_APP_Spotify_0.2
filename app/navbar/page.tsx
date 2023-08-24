"use client";

import { usePlaylistContext } from "@/app/PlayListContext/page";
import { useSession } from "next-auth/react";
import Link from "next/link";


const links = [
    {
        id: 1,
        title: "Home",
        url: "/home",
    },
    {
        id: 2,
        title: "Profile",
        url: "/profile",
    },
    {
        id: 3,
        title: "Music",
        url: "/music",
    },
    {
        id: 4,
        title: "About",
        url: "/about",
    },
    {
        id: 5,
        title: "Contact",
        url: "/contact",
    },
];

const Navbar = () => {
    const { data: session } = useSession();
    const { playlistContextState } = usePlaylistContext()
    return (
        <div className="navar">
            <div className="logo"> <Link href="/">
                CodFFee
            </Link></div>
            <div className="link-navbar">
                {links.map((link) => (
                    <Link key={link.id} href={link.url} >
                        {link.title}
                    </Link>
                ))}
                {session?.user && <Link href="/api/auth/signout">Sign Out</Link>}
            </div>
        </div>
    );
};

export default Navbar;