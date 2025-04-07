import { useContext, useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import phoneIcn from "@iconify-icons/bi/telephone-fill";
import mailIcn from "@iconify-icons/bi/envelope-at-fill";
import sendIcn from "@iconify-icons/fa/send";
import { ThemeContext } from "./themeContext";

function Contact(){
    const [name,setName] = useState("");
    const [message,setMessage] = useState("");
    const {light} = useContext(ThemeContext);
    

    const handleChange = (e)=>{
        e.target.id==="name"?setName(e.target.value):
        e.target.id==="message"?setMessage(e.target.value):null
    }
    const sendMessage = (e)=>{
        e.preventDefault();
        const mailTo = `mailto:abdessadekbirama1@gmail.com?body=${message}%0A%0A${name}`;
        window.location.href = mailTo;
    }
    return(
        <div id="Contact" className="min-h-screen pt-10">
            <h1 className="text-4xl ml-14 my-10 font-semibold">Contact me</h1>
            <a href="mailto:abdessadekbirama1@gmail.com" className="flex gap-4 my-5 ml-10">
                <div className="bg-gray-300 text-[#9823c3] size-12 flex justify-center items-center text-2xl rounded-full"><Icon icon={mailIcn}/></div>
                <div>
                    <h1 className="font-semibold text-lg">Email hello world </h1>
                    <p className={`font-semibold ${light?"text-gray-600":"text-gray-300"}`}>abdessadekbirama1@gmail.com</p>
                </div>
            </a>
            <a href="tel:+212675309058" className="flex gap-4 ml-10 pb-10">
                <div className="bg-gray-300 text-[#9823c3] size-12 flex justify-center items-center text-2xl rounded-full"><Icon icon={phoneIcn}/></div>
                <div>
                    <h1 className="font-semibold text-lg">Phone</h1>
                    <p className={`font-semibold ${light?"text-gray-600":"text-gray-300"}`}>+212 6 75 30 90 58</p>
                </div>
            </a>
            <form onSubmit={sendMessage} className="flex flex-col gap-4 items-center px-5 m-auto w-full sm:w-2/3 md:w-1/2">
                <div className="flex flex-col gap-2 w-full">
                    <label className="text-lg font-semibold">your name</label>
                    <input id="name" onChange={handleChange} className="outline-none border-2 border-violet-400 rounded focus:border-violet-600 transition-all p-1 bg-violet-300/50" type="text" required placeholder="your name..." />
                </div>
                <div className="flex flex-col gap-2 w-full">
                    <label className="text-lg font-semibold">message</label>
                    <textarea id="message" onChange={handleChange} className="outline-none border-2 border-violet-400 rounded focus:border-violet-600 transition-all p-1 bg-violet-300/50" required placeholder="your name..." >
                    </textarea>
                </div>
                <button className="mb-10 text-lg p-1 bg-gradient-to-r from-[#8427b3] to-[#ff00f7] hover:scale-95 transition-all w-fit rounded-full px-7 font-semibold text-white flex items-center gap-3">
                    <Icon icon={sendIcn}/>
                    send
                </button>
            </form>
        </div>
    )
}
export default Contact;
