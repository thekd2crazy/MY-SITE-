import { ReactNode } from "react"

type SkillEntry = {
  title: string

}

export default function SkillEntry(props: SkillEntry) {
  return (
    <div className="bg-[#3F4041] text-slate-50 flex flex-col items-center justify-center w-30 h-30 lg:w-36 lg:h-36 rounded-3xl hover:bg-[#E7BF76] transition-all duration-100">

      <p className="text-lg text-center">{props.title}</p>
    </div>
  )
}
