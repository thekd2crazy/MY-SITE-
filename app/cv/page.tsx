'user client'
import CvEntry from "../components/CvEntry"


export default function CV() {
    return (
        <>

            <section className="max-w-xl mx-auto p-6 space-y-6 h-screen  l-screen w-full bg-center bg-cover h-[109vh]  ">

                <h1 className="text-center text-white font-bold text-6xl"> Curriculum Vitae </h1>
                <CvEntry title="Intrapreneur " employer="Danemo">

                    <li>
                        Optimisation des processus de livrasion
                    </li>
                    <li>
                        Developpement de nouveaux concepts pour faire plus de chiffres
                    </li>

                </CvEntry>
                <CvEntry title="IT Consultant" employer="Neurogreen">
                    <li>
                        <p>
                            Développement des modèles de reconnaissance d'images
                        </p>
                    </li>
                </CvEntry>
                <CvEntry title="CEO" employer="BOXFIT">
                    <li>
                        <p>
                            Je me debrouille pour ne pas faire faillite
                        </p>
                    </li>
                </CvEntry>
            </section>

            <section>

            </section>
        </>
    )
}