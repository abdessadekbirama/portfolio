import { ThemeContext } from "./themeContext";
import { useContext, useState } from "react";
import lightIcn from "@iconify-icons/bi/sun";
import darkIcn from "@iconify-icons/bi/moon-fill";
import { NavLinks } from "../data/NavLinks";
import { motion } from "framer-motion";

import { Icon } from "@iconify/react/dist/iconify.js";
function Nav(){
    const {light,setLight} = useContext(ThemeContext);
    document.body.className = !light?"bg-black min-h-screen text-white bg-fixed bg-cover":"";
    const [active,setActive] = useState("");
    const [visible,setVisible] = useState(false);
    const linkStyle =(title)=>{
        return `hover:text-white font-bold ${light?"sm:hover:text-black":"sm:hover:text-white sm:text-gray-300"} sm:border-b-2 border-b-transparent sm:hover:border-b-[blue] transition-all p-2 ${active===`${title}`?`sm:border-b-blue-500 ${light?"sm:text-black":""} sm:bg-transparent`:"text-gray-400 sm:text-gray-500"}`;
    }
    const toggleActive = (e)=>{
        setActive(e.target.innerText);
    }
    const toggleTheme = ()=>{
        setLight(!light);
    }
    const toggleVisible = ()=>{
        setVisible(!visible);
    }
    return(
        <div className={`flex items-center justify-between p-2 fixed top-0 w-full z-10 backdrop-blur-xl bg-transparent`}>
            <div className="w-10"><a href="#" onClick={()=>{setActive("")}}><img src="/imgs/web-development_1688400.png" alt=""/></a></div>
            <div className="flex gap-2 items-center">
                { 
                    light&&
                    <motion.div
                    initial={{translateY:10}}
                    animate={{translateY:0}}
                    >
                        <Icon icon={lightIcn}/>
                    </motion.div>
                }
                <div onClick={toggleTheme} className={`hover:cursor-pointer w-12 border-2 rounded-full p-[2px] ${light?"border-blue-600 bg-[#cdcdcb]":""}`}><div className={`size-3 bg-blue-400 rounded-full transition-all ${light?"translate-x-0":"translate-x-7"}`}></div></div>
                {
                    !light&&
                    <motion.div
                    initial={{translateY:10}}
                    animate={{translateY:0}}
                    >
                        <Icon icon={darkIcn}/>
                    </motion.div>
                }
            </div>
            <nav className={`flex flex-col bg-black fixed sm:relative sm:flex-row sm:bg-transparent sm:gap-4 w-1/2 text-center sm:w-fit top-14 sm:top-0 ${!light?"text-white":"sm:text-gray-700 text-white"}  right-0 ${visible?"translate-x-0":"translate-x-full"} sm:translate-x-0 transition-all duration-500 rounded`}>
                {NavLinks.map((l,i)=>(
                    <a onClick={toggleActive} href={"#"+l} key={i} className={linkStyle(l)}>{l}</a>
                ))}
            </nav>
            <div className={`${!visible?"flex flex-col gap-1":""} transition-all hover:cursor-pointer z-50 p-2 sm:hidden`} onClick={toggleVisible}>
                <div className={`p-[2px] w-7 rounded-full transition-all duration-500 ${light?"bg-black":"bg-white"} ${visible?"rotate-45 float-end":""}`}></div>
                <div className={`p-[2px] w-7 rounded-full transition-al duration-500 ${light?"bg-black":"bg-white"} ${visible?"-rotate-45":""}`}></div>
                <div className={`p-[2px] w-7 rounded-full transition-all ${light?"bg-black":"bg-white"} ${visible?"hidden":""}`}></div>
            </div>
            <div className="hidden sm:block"></div>
        </div>
    )
}
export default Nav;
