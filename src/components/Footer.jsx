import whatsIcn from "@iconify-icons/bi/whatsapp";
import faceIcn from "@iconify-icons/bi/facebook";
import lnkdnIcn from "@iconify-icons/bi/linkedin";
import instaIcn from "@iconify-icons/bi/instagram";
import { Icon } from "@iconify/react/dist/iconify.js";


function Footer(){
    return(
        <div className="bg-[#1b1b1b] text-white p-3 pt-7 flex flex-col items-center justify-center gap-5">
            <div className="flex justify-center gap-5 text-xl w-full">
                <a href="https://wa.me/+212675309058" ><Icon icon={whatsIcn}/></a>
                <a href="https://www.facebook.com/share/19WKk8pV9q/" ><Icon icon={faceIcn}/></a>
                <a href="https://www.instagram.com/biramaabdessadek?igsh=YzljYTk1ODg3Zg==‎‏" ><Icon icon={instaIcn}/></a>
                <a href="https://www.linkedin.com/in/abdessadek-birama-16a28730b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" ><Icon icon={lnkdnIcn}/></a>
            </div>
            <div className="text-center">
                <h1>Abdessadek Birama</h1>
                <h1>ALL RIGHTS RESERVED</h1>
            </div>
        </div>
    )
}
export default Footer;
