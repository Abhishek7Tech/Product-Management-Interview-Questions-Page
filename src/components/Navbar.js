function Navbar() {
    return (
        <nav className="flex justify-between mx-20 pt-6 items-center">
            {/* <div> */}

                <a href="#">
                    <h1 className="text-[40px] leading-[48.76px] font-extrabold text-[#FFFFFF]">Crework<span className="text-[#FAAF3D]">.</span></h1>
                </a>
            {/* </div> */}
                <ul className="flex justify-between w-[487px]">
                    <li><a href="#" className="font-normal text-xl text-[#BDBCBC]">30 Days of PM</a></li>
                    <li><a href="#" className="font-normal text-xl text-[#BDBCBC]">Newsletter</a></li>
                    <li><a href="#" className="font-normal text-xl text-[#BDBCBC]">Builders Cohort</a></li>
                </ul>
        </nav>
    )
}

export default Navbar