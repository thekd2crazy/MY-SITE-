'user client'
import { ReactNode } from "react"
import { SlideIn } from "./Animation"
import Image, { StaticImageData } from "next/image";


type CvEntry = {
    title: string
    employer: string
    image: string
    children: ReactNode
}

export default function CvEntry(props: CvEntry) {
    return (

        <SlideIn>
            <div className="
                    border border-white
                    bg-bleu-500 
                
                    p-5 
                    rounded-xl
                    shadow-md 
                    hover:shadow-xl
                    transition-all 
                    duration-300
                    hover:-translate-y-1
                ">
                <div className="flex items-center gap-4 ">
                    <Image src={props.image} alt={`${props.employer} logo`} fill className="relative w-[3px] h-[3px] rounded-full overflow-hidden" />
                </div>
                <h3 className="text-sm md:text-base text-amber-100 ">{props.title}  {props.employer}</h3>
                <ul className="text-sm md:text-base mt-4 text-amber-50 list-disc list-inside"> {props.children}</ul>
            </div>
        </SlideIn>

    )
}