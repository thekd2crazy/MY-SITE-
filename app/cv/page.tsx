'user client'
import CvEntry from "../components/CvEntry";
import Logos from "../components/Logos";


export default function CV() {
    const iconSize = 50;
    return (
        <>

            <section className="max-w-7xl mx-auto px-6 py-9 space-y-4">

                <h1 className="text-center text-white font-bold text-6xl"> Curriculum Vitae </h1>
                <CvEntry title="Intrapreneur " employer="Danemo" image="https://tse3.mm.bing.net/th/id/OIP.wxwF6whYNzvR4qCv08Im6AHaFP?cb=ucfimg2&pid=ImgDet&ucfimg=1&w=474&h=335&rs=1&o=7&rm=3">

                    <li>
                        Optimisation des processus de livrasion
                    </li>
                    <li>
                        Developpement de nouveaux concepts pour faire plus de chiffres
                    </li>

                </CvEntry>
                <CvEntry title="IT Consultant" employer="Neurogreen" image="https://images.ctfassets.net/myqv2p4gx62v/5svAb36P9eSdsjxHdXYner/64a39dd6f70068fa67b0e2383d1ea917/logo_neurogreen.jpg">
                    <li>

                        Développement des modèles de reconnaissance d'images

                    </li>
                </CvEntry>
                <CvEntry title="CEO" employer="BOXFIT" image="https://media-exp1.licdn.com/dms/image/C561BAQFmQT4pF4NXWA/company-background_10000/0/1578662930544?e=2159024400&v=beta&t=pgpBmQLI3zUC65hwNG0xH87ayA_9l3_5xcO3k2SvMuc">
                    <li>

                        Je me debrouille pour ne pas faire faillite

                    </li>
                </CvEntry>
            </section>
        </>
    )
}