import { Icon } from "@iconify/react/dist/iconify.js";
import whatsIcn from "@iconify-icons/bi/whatsapp";
import faceIcn from "@iconify-icons/bi/facebook";
import lnkdnIcn from "@iconify-icons/bi/linkedin";
import instaIcn from "@iconify-icons/bi/instagram";
import { motion } from "framer-motion";

function About(){
    return(
        <motion.div
        initial={{opacity:0}}
        whileInView={{opacity:100}}
        transition={{duration:1}}
         id="About" className="pt-14">
            <h1 className="text-4xl ml-10 font-semibold">About me</h1>
            <p className="ml-10 p-5 text-lg max-w-[800px]">
                Hi, I'm Abdessadek Birama , a passionate Full Stack Web Developer
                and student. I sepecialize in building responsive and dynamic web
                applications using modern technologies. I love solving problems
                through code and creating seamless user experiences.My goal is to
                continue learning and developing impactful projects.Let's connect and build smething amazing!
            </p>
            <div className="flex justify-center gap-3 mt-10">
                <a href="" className="text-3xl text-green-600"><Icon icon={whatsIcn}/></a>
                <a href="" className="text-3xl text-blue-700"><Icon icon={faceIcn}/></a>
                <a href="" className="text-3xl text-pink-600"><Icon icon={instaIcn}/></a>
                <a href="" className="text-3xl text-blue-500"><Icon icon={lnkdnIcn}/></a>
            </div>
        </motion.div>
    )
}
export default About;