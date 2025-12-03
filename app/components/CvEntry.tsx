import { ReactNode } from "react"

type CvEntry = {
    title: string
    employer: string
    children: ReactNode
}

export default function CvEntry(props: CvEntry) {
    return (
        <div>
            <h3>{props.title}  {props.employer}</h3>
            <p> {props.children}</p>
        </div>
    )
}