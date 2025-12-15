import SkillEntry from "../components/SkillEntry";
import { SiJavascript, SiTypescript, SiCss3, SiHtml5, SiPython, SiSharp, SiCplusplus, SiArduino } from 'react-icons/si';

export default function SKILLS() {
    return (
        <>
            <h1 className="text-3xl text-white font-bold text-center pb-12 mt-2">MON BAGAGE TECHNIQUE</h1>
            <section className="mx-25 w-full max-w-7xl px-6 py-9  items-center grid gap-6 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-3 xl:grid-cols-4">
                <SkillEntry title="Python"><SiPython size={50} /> </SkillEntry>
                <SkillEntry title="C#"><SiSharp size={50} /> </SkillEntry>
                <SkillEntry title="Javascript"><SiJavascript size={50} /> </SkillEntry>
                <SkillEntry title="Html"><SiHtml5 size={50} /> </SkillEntry>
                <SkillEntry title="C++"><SiCplusplus size={50} /> </SkillEntry>
                <SkillEntry title="CSS"><SiCss3 size={50} /> </SkillEntry>
                <SkillEntry title="Typscript"><SiTypescript size={50} /> </SkillEntry>
                <SkillEntry title="Arduino"><SiArduino size={50} /> </SkillEntry>
            </section>
        </>
    )
}