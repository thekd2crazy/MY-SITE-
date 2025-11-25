"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="bg-white border-b shadow-sm">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">

                    {/* Logo */}
                    <Link href="/" className="text-xl font-bold">
                        MyWebsite
                    </Link>

                    {/* Desktop menu */}
                    <div className="hidden md:flex space-x-6">
                        <Link href="/" className="hover:text-blue-600">Accueil</Link>
                        <Link href="/about" className="hover:text-blue-600">À propos</Link>
                        <Link href="/contact" className="hover:text-blue-600">Contact</Link>
                    </div>

                    {/* Hamburger */}
                    <button
                        className="md:hidden"
                        onClick={() => setOpen(!open)}
                    >
                        <span className="material-icons text-3xl">menu</span>
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            {open && (
                <div className="md:hidden bg-gray-100 py-3">
                    <Link
                        href="/"
                        className="block px-4 py-2 hover:bg-gray-200"
                        onClick={() => setOpen(false)}
                    >
                        Accueil
                    </Link>
                    <Link
                        href="/about"
                        className="block px-4 py-2 hover:bg-gray-200"
                        onClick={() => setOpen(false)}
                    >
                        À propos
                    </Link>
                    <Link
                        href="/contact"
                        className="block px-4 py-2 hover:bg-gray-200"
                        onClick={() => setOpen(false)}
                    >
                        Contact
                    </Link>
                </div>
            )}
        </nav>
    );
}
