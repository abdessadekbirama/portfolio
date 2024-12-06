import LaptopCanvas from "./Laptop";

function Hero(){
    return(
        <div className="mt-16 py-11">
            <div className="flex gap-5 p-3 ml-10 sm:ml-20 md:mx-32 lg:mx-40 xl:mx-52 pr-10">
                <div className="flex flex-col items-center">
                    <div className="size-5 bg-[#ec25d2] rounded-full shadow-[0_0_20px_5px] shadow-[#c96caa]"></div>
                    <div className="w-[5px] h-[200px] bg-gradient-to-b from-[#ec25d2] to-[#eb46d50f]"></div>
                </div>
                <div className="text-3xl">
                    <h1>Hi, I'm <span className="text-[#fd1def]">Abdessadek Birama</span></h1>
                    <p className="my-5 text-lg ml-2">i'am a passionate web developer with good skills in Front-end with
                         React.js Tailwind.css and Three.js, i created a lot of responsive and user friendly websites interfaces.</p>
                </div>
            </div>
            <LaptopCanvas/>
        </div>
    )
}

export default Hero;