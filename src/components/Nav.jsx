import { QueueListIcon } from "@heroicons/react/16/solid";
import { XMarkIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import { BrowserRouter, Link } from "react-router-dom";

function Nav(){
    const [navVisible,setNavVisible] = useState(false);
    const [active,setActive] = useState("");
    const fadeNav = ()=>{
        setNavVisible(!navVisible);
        console.log(navVisible);
    }
    return(
        <BrowserRouter>
        <div className="flex w-full p-3 justify-around items-center fixed top-0 bg-[#454044] border-b-2 border-violet-500 z-10">
            <div>
                <p className="font-bold text-xl"><span>Abdessadek | <br className="sm:hidden"/></span>web developer</p>
            </div>
            <div>
                <nav className="hidden gap-5 sm:flex text-gray-300">
                    <Link onClick={()=>{setActive("about")}} className={`transition-all p-2 rounded ${active==="about"?"text-white bg-[#71144f] rounded":""}`}>about</Link>
                    <Link onClick={()=>{setActive("works")}} className={`transition-all p-2 rounded ${active==="works"?"text-white bg-[#71144f] rounded":""}`}>works</Link>
                    <Link onClick={()=>{setActive("contact")}} className={`transition-all p-2 rounded ${active==="contact"?"text-white bg-[#71144f] rounded":""}`}>contact</Link>
                </nav>
            </div>
        </div>
        <div className="fixed right-0 top-0 z-10">
            {
            !navVisible?<QueueListIcon onClick={fadeNav} className={`w-10 float-end m-2 sm:hidden hover:cursor-pointer`}/>:
            <XMarkIcon onClick={fadeNav} className={`w-10 float-end m-2 sm:hidden hover:cursor-pointer`}/>
    }
            <nav className={`flex flex-col text-center rounded bg-gradient-to-bl from-[#31082c] to-[#d2bfd0] w-[150px] gap-2 sm:hidden transition-all ${navVisible?"translate-y-0":"-translate-y-36"}`}>
                <Link onClick={()=>{setActive("about")}} className={`transition-all p-2 rounded ${active==="about"?"text-white bg-[#71144f] rounded":""}`}>about</Link>
                <Link onClick={()=>{setActive("works")}} className={`transition-all p-2 rounded ${active==="works"?"text-white bg-[#71144f] rounded":""}`}>works</Link>
                <Link onClick={()=>{setActive("contact")}} className={`transition-all p-2 rounded ${active==="contact"?"text-white bg-[#71144f] rounded":""}`}>contact</Link>
            </nav>
        </div>
        </BrowserRouter>
    )
}

export default Nav;