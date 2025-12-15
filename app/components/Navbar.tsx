"use client";

import Link from "next/link";
import { useState } from "react";
import { FaBars } from "react-icons/fa"
import AnimatedUnderline from "./Animation";

export function Hamburger() {
    return < FaBars size={50} />;
}

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (

        <nav className="bg-transparent border-b shadow-sm">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">

                    {/* Logo */}
                    <Link href="/" className="text-xl font-bold text-white ">
                        MyWebsite
                    </Link>

                    {/* Desktop menu */}
                    <div className="hidden md:flex space-x-6 text-white " >
                        <Link href="/" className="block hover:text-orange-500">Accueil</Link>
                        <Link href="/cv" className="block hover:text-orange-500">CV</Link>
                        <Link href="/skills" className="block hover:text-orange-500">compétences</Link>
                        <Link href="/contact" className="block hover:text-orange-500">Contact</Link>
                        <Link href="/blog" className="block hover:text-orange-500">Blog</Link>
                        <Link href="/tasks" className="block hover:text-orange-500">Tâches</Link>

                    </div>

                    {/* Hamburger */}
                    <button
                        className="md:hidden text-white"
                        onClick={() => setOpen(!open)}
                    >
                        <Hamburger />
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            {open && (
                <div className="md:hidden bg-transparent   py-3">
                    <Link
                        href="/"
                        className="block px-4 py-2 hover:bg-orange-500 text-white"
                        onClick={() => setOpen(false)}
                    >
                        Accueil
                    </Link>
                    <Link
                        href="/cv"
                        className="block px-4 py-2 hover:bg-orange-500 text-white"
                        onClick={() => setOpen(false)}
                    >
                        CV
                    </Link>

                    <Link
                        href="/skills"
                        className="block px-4 py-2 hover:bg-orange-500 text-white"
                        onClick={() => setOpen(false)}
                    >
                        Compténces
                    </Link>

                    <Link
                        href="/contact"
                        className="block px-4 py-2 hover:bg-orange-500 text-white"
                        onClick={() => setOpen(false)}
                    >
                        Contact
                    </Link>

                    <Link
                        href="/blog"
                        className="block px-4 py-2 hover:bg-orange-500 text-white"
                        onClick={() => setOpen(false)}
                    >
                        Blog
                    </Link>


                    <Link
                        href="/tasks"
                        className="block px-4 py-2 hover:bg-orange-500 text-white"
                        onClick={() => setOpen(false)}
                    >
                        Tâches
                    </Link>

                </div>
            )}http://localhost:3000/blog
        </nav>


    );
}
