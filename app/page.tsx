"use client"
import { useRouter } from "next/navigation";
import TypingEffect from "./components/TypingEffet";

export default function Home() {
    const router = useRouter();
    return (

        <section className="max-w-7xl mx-auto px-6 py-9">

            <h1 className=" text-4xl space-y-5 md:space-y-2 md:text-3xl font-[Times_New_Roman]   text-white  mt-[5%] tracking-[2px]">
                Je suis  <br />
                <TypingEffect text="STEVE" /> <br />
                étudiant en ingénieurie informatique !
            </h1>

            <p className="mt-[5%] md:mt-[3%] font-[Arial]  pb-[20px] mx-auto tracking-[1.2px] leading-[30px] text-white text-base  md:text-lg">
                Étudiant en ingénierie, passionné par la technologie et la résolution de problèmes, je développe mes compétences à travers des projets académiques et personnels. <br />
                Curieux et rigoureux, j’aime transformer des idées en solutions concrètes. <br />
                Ce portfolio présente mes réalisations, mes compétences et mon parcours. N’hésitez pas à me contacter pour toute opportunité de stage ou de collaboration.

            </p>

            <button onClick={() => router.push("/contact")} className="w-[160px] h-[40px] bg-[#ff7200] border-none rounded-[10px] mb-[10px]  text-[18px] cursor-pointer transition duration-300 ease-in-out hover:bg-white ">
                <a className="no-underline text-black transition duration-300 ease-in-out">CONTACT ME</a>
            </button>
        </section>


    );
}
