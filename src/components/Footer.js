import Dribble from "../assets/dribbble.png";
import Facebook from "../assets/facebook.png";
import Be from "../assets/be.png";
import Linkedin from "../assets/linkedin.png";

const Socials = [
    { img: Dribble, alt: "dribble" },
    { img: Facebook, alt: "facebook" },
    { img: Be, alt: "be" },
    { img: Linkedin, alt: "linkedin" },

]
function Footer() {
    return (
        <footer className="mx-20 pt-6 py-2">
            <div className="flex justify-between">
                <a href="#">
                    <h1 className="text-[40px] leading-[48.76px] font-extrabold text-[#FFFFFF]">Crework<span className="text-[#FAAF3D]">.</span></h1>
                </a>

                <div className="">
                    <ul className="grid grid-cols-2 gap-x-20 gap-y-4">
                        <li className="font-normal text-xl text-[#ADADAD]">Newsletter</li>
                        <li className="font-normal text-xl text-[#ADADAD]">30 Days of PM</li>
                        <li className="font-normal text-xl text-[#ADADAD]">Builders Cohort</li>
                        <li className="font-normal text-xl text-[#ADADAD]">Transition to PM role</li>

                    </ul>
                    {/* <ul className="flex">
                    </ul> */}
                    <div className="bg-gradient-to-r from-[#FFFFFF] to-[#211F1F] h-[1px] my-8"></div>
                </div>

                <ul className="flex gap-x-6 gap-y-4">
                    {
                        Socials.map((social, idx) => <li id={idx}><img src={social.img} alt={social.alt}></img></li>)
                    }

                </ul>
            </div>
            <div className="py-1 text-center">
                <small className="font-medium text-[#ADADAD] text-base">copyright <span className="text-lg"> &copy; </span> 2024 Crework</small>
            </div>
        </footer>
    )
}

export default Footer;