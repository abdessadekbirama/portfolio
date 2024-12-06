import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

const technologies = [
    {
        icon:"react.png",
        title:"React.js"
    },
    {
        icon:"react.png",
        title:"Node.js"
    },
    {
        icon:"react.png",
        title:"Three.js"
    },
    {
        icon:"react.png",
        title:"Tailwind.css"
    },
]
function About(){
    return(
        <div className="ml-10 sm:ml-20 md:mx-32 lg:mx-40 xl:mx-52">
            <p className="text-2xl">Introduction</p>
            <p className="text-5xl font-extrabold my-2">Overview.</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam tenetur officiis blanditiis ipsum reiciendis, perspiciatis voluptatibus exercitationem hic laborum doloremque architecto eos reprehenderit eius culpa ipsa numquam nisi animi delectus.</p>
            <div className="flex gap-2 flex-wrap py-5">
                {
                    technologies.map((e,i)=>{
                        return (
                           <motion.div key={i}
                           initial={{translateX:-200}}
                           whileInView={{translateX:0}}
                           transition={{duration:0.3*i}}
                           >
                             <Tilt className="bg-gradient-to-bl size-40 from-[#220224] to-[#700b78] content-center text-center rounded-lg shadow-[0_0_10px_0px] shadow-[#ff6cfd] border-2 border-violet-400">
                                <p className="text-xl font-bold">{e.title}</p>
                            </Tilt>
                            </motion.div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default About;