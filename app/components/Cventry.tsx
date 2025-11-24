import React, { ReactNode } from "react";


type CventryProps = {
    title: string;
    employer: string;
    children: ReactNode
}

function Cventry


export default function Cventry(props: CventryProps) {
    return (
        <div>
            <h3>{props.title}, {props.employer}  </h3>
            {props.children}
        </div>
    )
}
