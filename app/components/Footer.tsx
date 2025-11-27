import { ReactNode } from "react"
import SocialIcons from "./SocialIcons"

type Footer = {
    title: string
    date: string
    children: ReactNode
}

export default function Footer(props: Footer) {
    return (
        <footer className="p-3 space-y-5 space-x-40 my-135 bg-neutral-900 items-center justify-center" >
            <div className="flex text-center text-white p-3 mx-7s ">
                <p className="   mx-111 my-5"> ©   {props.date}   {props.title}.   {props.children}  </p>
                <SocialIcons />
            </div>
        </footer>

    )
}