import { createContext, useContext, useState } from "react";

export const HamburgerContext = createContext({
    open: false,
    setOpen: () => null

});

const HamburgerProvider = ({children}) => {
    const [open, setOpen] = useState(false);

    const values = {open,setOpen}

    return <HamburgerContext.Provider value={values}>{children}</HamburgerContext.Provider>

}  

export default HamburgerProvider