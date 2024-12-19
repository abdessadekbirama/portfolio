import {useState, useEffect,useContext } from "react";
import { ThemeContext } from "./themeContext";
const words = [
    "Developer",
    "Designer",
    "Programmer",
    "Front-end dev",
    "Back-end dev"
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
        },100);
        
        return()=> clearInterval(writeInterval);
    })
    return(
        <span className={`font-semibold flex gap-1 bg-gradient-to-br text-transparent bg-clip-text ${!light?" from-[#09daff] to-[#ffaef3]":"from-[blue] to-[#ff00e1]"}`}>
            {text}
            <span className={`bg-blue-600 p-[2px] ${anim?"anim":""}`}></span>
        </span>
    )
}

function Hero(){
    return(
        <div className="pt-32 flex flex-col items-center sm:flex-row justify-center sm:gap-10">
            <div className="text-3xl">
                <h1>Hi,I am Abdessadek Birama</h1>
                <h1 className="flex gap-2">I am <Writing/></h1>
            </div>
            <img className="size-40 border-4 border-green-500 rounded-full shadow-[0_0_20px_1px_green]" src="/imgs/html.png" alt=""/>
        </div>
    )
}
export default Hero;
