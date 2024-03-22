import Dribble from "../assets/dribbble.png";
import Facebook from "../assets/facebook.png";
import Be from "../assets/be.png";
import Linkedin from "../assets/linkedin.png";
import { useRef } from "react";
import FooterList from "./Footerlist";
const Socials = [
    { img: Dribble, alt: "dribble" },
    { img: Facebook, alt: "facebook" },
    { img: Be, alt: "be" },
    { img: Linkedin, alt: "linkedin" },

]
function Footer() {
    const windowWidth = useRef(window.innerWidth);
    const width = 768


    return (
        <footer className="mx-4 md:mx-20 md:pt-6 py-2">
            <div className="flex flex-col md:flex-row items-center md:items-start md:justify-between">
                <a href="#">
                    <h1 className="text-base md:text-[40px] md:leading-[48.76px] font-extrabold text-[#FFFFFF] my-6 md:my-0">Crework<span className="text-[#FAAF3D]">.</span></h1>
                </a>

                <div className="w-10/12 md:w-auto flex flex-col items-center">
                    {windowWidth.current > width && <ul className="grid grid-cols-2 gap-x-20 gap-y-4">
                        <li className="font-normal text-xl text-[#ADADAD]">Newsletter</li>
                        <li className="font-normal text-xl text-[#ADADAD]">30 Days of PM</li>
                        <li className="font-normal text-xl text-[#ADADAD]">Builders Cohort</li>
                        <li className="font-normal text-xl text-[#ADADAD]">Transition to PM role</li>

                    </ul>}

                    {windowWidth.current <= width && <FooterList />}

                    {windowWidth.current <= width && <ul className="flex gap-x-6 mt-4 mb-2 gap-y-4">
                        {
                            Socials.map((social, idx) => <li key={social.alt}><img className="w-8 h-8" src={social.img} alt={social.alt}></img></li>)
                        }

                    </ul>}
                    <div className="bg-gradient-to-r from-[#FFFFFF] to-[#211F1F] h-[1px] my-6 w-10/12 md:w-full"></div>
                </div>

                {windowWidth.current > width && <ul className="flex gap-x-6 gap-y-4">
                    {
                        Socials.map((social, idx) => <li key={social.alt}><img src={social.img} alt={social.alt}></img></li>)
                    }

                </ul>}
            </div>
            <div className="py-1 text-center">
                {windowWidth.current <= width && <small className="font-medium text-[#ADADAD] text-base"> 2021 Crework, 2023</small>}
                {windowWidth.current > width && <small className="font-medium text-[#ADADAD] text-base"> copyright <span className="text-lg"> &copy; </span> 2024 Crework</small>}

            </div>
        </footer>
    )
}

export default Footer;