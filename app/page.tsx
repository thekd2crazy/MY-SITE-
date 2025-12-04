
export default function Home() {
    return (
        <div className=" h-screen l-screen w-full bg-center bg-cover h-[109vh]"
            style={{
                backgroundImage: "url('/chemin/vers/image.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}>
            <div className="w-[1200px] h-auto mx-auto mt-[80px] ml-[147px]">

                <h1 className="font-[Times_New_Roman] text-[45px] text-white pl-[10px] mt-[9%] tracking-[2px]">
                    Web Design & <br />
                    <span className="text-[#ff7200] text-[60px]">Development</span> <br />
                    Course
                </h1>

                <p className="mt-[3%] font-[Arial] pl-[15px] pb-[20px] tracking-[1.2px] leading-[30px] text-white">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro nisi dicta ex ducimus animi,
                    excepturi, sit <br />
                    eos error, vitae aperiam incidunt. Magni hic quisquam minima doloremque. Sint cumque
                    quis illo ? <br />
                    ma femme est la plus jolie elle s'appelle Carola !
                </p>

                <button className="w-[160px] h-[40px] bg-[#ff7200] border-none rounded-[10px] mb-[10px] ml-[15px] text-[18px] cursor-pointer transition duration-300 ease-in-out hover:bg-white ">
                    <a className="no-underline text-black transition duration-300 ease-in-out">JOIN US</a>
                </button>
            </div>
        </div>

    );
}
