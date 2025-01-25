import { Icon } from "@iconify/react/dist/iconify.js";
import { useContext, useState } from "react";
import gh from "@iconify-icons/bi/github";
import web from "@iconify-icons/fa/external-link";
import { ThemeContext } from "./themeContext";
import { motion } from "framer-motion";

function ProjectCard({img,title,description,source,demo}){
    const [hover,setHover] = useState(false);
    const {light} = useContext(ThemeContext);
    
    const Hover = ()=>{
        setHover(true);
    }
    const Blur = ()=>{
        setHover(false);
    }

    const visitSource=()=>{
        window.open(source);
    }
    const visitDemo=()=>{
        window.open(demo);
    }
    return(
        
        <motion.div
        initial={{opacity:0}}
        whileInView={{opacity:100}}
        transition={{duration:1}}
         onMouseOver={Hover} onMouseOut={Blur} className={`p- pt-0 rounded-3xl flex flex-col gap-2 items-center size-[300px] shadow-[0_0_30px_1px_grey] overflow-hidden ${light&&"text-black"} `}>
            <img className={`rounded w-[300px] transition-all duration-300 ${hover&&"scale-125 -z-30 brightness-50 "}`} src={`/imgs/${img}`} alt=""/>
            <div className={`flex gap-3 absolute mt-16 opacity-0 transition-all duration-300 ${hover&&"opacity-100"}`}>
                <Icon onClick={visitSource} className="bg-gray-300 text-black size-10 rounded-full p-2 hover:scale-110 transition-all hover:cursor-pointer" icon={gh}/>
                <button onClick={visitDemo} className="bg-gray-300 text-black size-10 rounded-full flex hover:scale-110 transition-all justify-center items-center"><Icon icon={web}/></button>
            </div>
            <div className={`${light?"bg-white":"bg-black"}`}>
                <h1 className="text-2xl pl-2 w-full">{title}</h1>
                <p className={`px-2`}>{description}</p>
            </div>
        </motion.div>
    )
}
export default ProjectCard;
