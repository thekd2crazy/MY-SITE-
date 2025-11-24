import Link from "next/link";
import { type ReactNode } from "react";

type NavLinkProps = {
    href: string
    children: ReactNode
} // spécifie les types  de la fonction 

function NavLink(props: NavLinkProps) {  // par importer car il ne s'applique que ici !
    return (
        <li className=" hover:bg-slate-600 py-2 px-2">
            <Link href={props.href}> {props.children} </Link>
        </li>
    )
}


export default function Navbar() {
    return (
        <nav className="bg-slate-800 text-slate-50 shadow-2xl py.2">
            <ul className="container mx-auto flex gap-4">
                <NavLink href="/">Accueil</NavLink>
                <NavLink href="/cv"> CV </NavLink>
            </ul>
        </nav>
    )
}