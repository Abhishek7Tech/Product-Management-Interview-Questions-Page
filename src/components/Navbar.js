import { HamburgerContext } from "../context/hamburger.context";
import HamBurgerButton from "./Hamburger"
import { useContext, useRef } from "react";
import Navlist from "./Navlist";

function Navbar() {
    const windowWidth = useRef(window.innerWidth);
    const {open} = useContext(HamburgerContext);
    const width = 768
    return (
        <>
        <nav className="relative flex justify-between mx-4 md:mx-20 pt-6 items-center">
            {/* <div> */}

            <a href="#">
                <h1 className="text-2xl md:text-[40px] leading-[48.76px] font-extrabold text-[#FFFFFF] font-mono">Crework<span className="text-[#FAAF3D]">.</span></h1>
            </a>
            {/* </div> */}
            {windowWidth.current > width && <ul className="flex justify-between w-[487px]">
                <li><a href="#" className="font-normal font-inter text-xl text-[#BDBCBC]">30 Days of PM</a></li>
                <li><a href="#" className="font-normal font-inter text-xl text-[#BDBCBC]">Newsletter</a></li>
                <li><a href="#" className="font-normal font-inter text-xl text-[#BDBCBC]">Builders Cohort</a></li>
            </ul>
            }

            {windowWidth.current <= width && <HamBurgerButton />}
            
            
        </nav>
        {windowWidth.current <= width && open && <Navlist/>}
        </>
    )
}

export default Navbar