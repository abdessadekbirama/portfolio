import { Link } from "react-router-dom";
import { ThemeContext } from "./themeContext";
import { useContext, useState } from "react";
import lightIcn from "@iconify-icons/bi/sun";
import darkIcn from "@iconify-icons/bi/moon-fill";
import menuIcn from "@iconify-icons/bi/list";
import xIcn from "@iconify-icons/bi/x";


import { Icon } from "@iconify/react/dist/iconify.js";
function Nav(){
    const {light,setLight} = useContext(ThemeContext);
    document.body.className = !light?"bg-[linear-gradient(135deg,#260246,#026873)] min-h-screen text-white":"";
    const [active,setActive] = useState("");
    const [visible,setVisible] = useState(false);
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
        <div className="flex items-center justify-between p-3 fixed top-0 border-b-2 border-b-blue-700 w-full">
            <div className="w-10"><Link><img src="/imgs/html.png" alt=""/></Link></div>
            <div onClick={toggleTheme} className={`hover:cursor-pointer w-14 border-2 scale-110 rounded-full p-[2px] ${light?"border-blue-600 bg-[#3300ff50]":""}`}><Icon className={`${light?"translate-x-0":"translate-x-8"} transition-all`} icon={light?lightIcn:darkIcn}/></div>
            <nav className={`flex flex-col bg-[#5a5a67] fixed sm:relative sm:flex-row sm:bg-transparent sm:gap-4 w-full text-center sm:w-fit top-0 ${!light?"text-white":"sm:text-gray-700 text-white"}  left-0 ${visible?"translate-y-0":"-translate-y-40"} sm:translate-y-0 transition-all duration-[.7s]`}>
                <Link to="#about" onClick={toggleActive} className={`hover:bg-[#860dae] sm:hover:bg-transparent sm:border-b-2 border-b-transparent sm:hover:border-b-[blue] transition-all p-2 ${active==="About"?"sm:border-b-blue-500 bg-[#860dae] sm:bg-transparent":""}`}>About</Link>
                <Link to="#works" onClick={toggleActive} className={`hover:bg-[#860dae] sm:hover:bg-transparent sm:border-b-2 border-b-transparent sm:hover:border-b-[blue] transition-all p-2 ${active==="Works"?"sm:border-b-blue-500 bg-[#860dae] sm:bg-transparent":""}`}>Works</Link>
                <Link to="#contact" onClick={toggleActive} className={`hover:bg-[#860dae] sm:hover:bg-transparent sm:border-b-2 border-b-transparent sm:hover:border-b-[blue] transition-all p-2 ${active==="Contact"?"sm:border-b-blue-500 bg-[#860dae] sm:bg-transparent":""}`}>Contact</Link>
            </nav>
            <Icon onClick={toggleVisible} className={`text-3xl sm:hidden z-10 rounded-full hover:cursor-pointer ${light&&visible?"text-white":""}`} icon={visible?xIcn:menuIcn}/>
            <div className="hidden sm:block"></div>
        </div>
    )
}
export default Nav;