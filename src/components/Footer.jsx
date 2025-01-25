import whatsIcn from "@iconify-icons/bi/whatsapp";
import faceIcn from "@iconify-icons/bi/facebook";
import lnkdnIcn from "@iconify-icons/bi/linkedin";
import instaIcn from "@iconify-icons/bi/instagram";
import { Icon } from "@iconify/react/dist/iconify.js";


function Footer(){
    return(
        <div className="bg-[#1b1b1b] text-white p-3 pt-7 flex flex-col items-center justify-center gap-5">
            <div className="flex justify-center gap-5 text-xl w-full">
                <a href="" ><Icon icon={whatsIcn}/></a>
                <a href="" ><Icon icon={faceIcn}/></a>
                <a href="" ><Icon icon={instaIcn}/></a>
                <a href="" ><Icon icon={lnkdnIcn}/></a>
            </div>
            <div className="text-center">
                <h1>Abdessadek Birama</h1>
                <h1>ALL RIGHTS RESERVED</h1>
            </div>
        </div>
    )
}
export default Footer;