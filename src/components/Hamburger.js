import  Hamburger  from "../assets/hamburger.png";
import Cross  from "../assets/cross.png";
import { useContext } from "react";
import { HamburgerContext } from "../context/hamburger.context";

function HamBurgerButton() {
    const { open, setOpen } = useContext(HamburgerContext)

    function hambergerHandler() {
        setOpen(!open);
    }
    return (
        <button onClick={() => hambergerHandler()} >{open ? <img src={Cross} alt="cross"></img> : <img src={Hamburger} alt="hamburger"></img>}</button>
    )
}

export default HamBurgerButton;