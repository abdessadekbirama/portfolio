import technologies from "../data/tech";
import { Tilt } from "react-tilt";
import { Icon } from "@iconify/react/dist/iconify.js";
import { motion } from "framer-motion";

function Skills(){
    return(
        <div id="Skills" className="pt-10">
            <h1 className="text-4xl font-semibold ml-10 my-5 mb-20">My Skills</h1>
            <div className="text-white w-fit m-auto grid grid-cols-2 gap-3 sm:grid-cols-3">
                {technologies.map((t,i)=>(
                <motion.Tilt
                initial={{opacity:0}}
                whileInView={{opacity:100}}
                transition={{duration:1}}
                 key={i} className="w-40 p-2 py-4 rounded-lg flex flex-col items-center gap-2 bg-gradient-to-br from-[#3154ff_10%] to-[#3c0260_10%]">
                    <img className="w-1/2" src={"/imgs/"+t.icon} alt=""/>                    
                    <h1>{t.title}</h1>
                </motion.Tilt>
                ))}
            </div>
        </div>
    )
}
export default Skills;