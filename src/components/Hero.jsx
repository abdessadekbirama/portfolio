import {useState, useEffect,useContext } from "react";
import { ThemeContext } from "./themeContext";
import { Icon } from "@iconify/react/dist/iconify.js";
import sendIcn from "@iconify-icons/bi/send";
import { useNavigate } from "react-router-dom";

const words = [
    "Programmer",
    "Front-end developer",
    "Back-end developer",
    "Full-stack developer",
]
const Writing = ()=>{
    const [text,setText] = useState("");
    const [count,setCount] = useState(0);
    const [canRemove,setCanRemove] = useState(false);
    const [i,setI] = useState(0);
    const [anim,setAnim] = useState(false);
    const [write,setWrite] = useState(true);
    const {light} = useContext(ThemeContext);
    useEffect(()=>{
        const writeInterval = setInterval(()=>{
            if (write){
                setCount(count+1);
                setCanRemove(false);
                setAnim(false);
            }
            else if (canRemove){
                count>0?setCount(count-1):setCount(0);
                count===0 && i<words.length-1?setI(i+1):
                i===words.length-1 && count===0?setI(0):null
                setAnim(false);
            }
            else{
                setAnim(true);
                clearInterval(writeInterval)
                setTimeout(()=>{setCanRemove(true)},2000)
            }
            count<words[i].length?"":
            count===words[i].length?setWrite(false):null
            count===0&&setWrite(true);
            setText(words[i].slice(0,count));
        },50);
        
        return()=> clearInterval(writeInterval);
    })

    return(
        <span className={`font-semibold flex gap-1 bg-gradient-to-br text-transparent bg-clip-text ${light?"bg-[#6a00ff]":"bg-[#ff00ff]"}`}>
            {text}
            <span className={`bg-blue-600 p-[2px] ${anim?"anim":""}`}></span>
        </span>
    )
}

function Hero(){

    return(
        <div>
            <div className="min-h-[80vh] flex items-center gap-10 sm:flex-row flex-col-reverse justify-center mx-5 pt-5">
            <div className="text-3xl">
                <h1>Hi,I am Abdessadek Birama</h1>
                <h1 className="text-2xl flex"><Writing/><span className="p-4"></span></h1>
            </div>
            <img 
            className="rounded-full w-72" src="/imgs/profile.jpeg" alt=""/>
            </div>
            <div className="flex justify-center mb-10">
                <a href="#Contact" className="flex items-center gap-2 text-lg p-1 px-3 border-2 border-blue-500 rounded font-semibold hover:bg-blue-500 transition-all text-blue-600 hover:text-white duration-400">
                    <Icon icon={sendIcn}/>
                    Contact me
                </a>
            </div>
        </div>
    )
}
export default Hero;
