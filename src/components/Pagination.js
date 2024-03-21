function Pagination () {
    return (
        <section className="flex justify-end gap-4 py-4 items-center">
            <p className="text-white font-normal text-base"> Showing 1-10 of 100 questions </p>
            <button className="text-[#FAAF3D] rounded-[5px] border border-[#FAAF3D] h-[39px] px-2 w-10">1</button>
            <button className="text-white rounded-[5px] border border-white h-[39px] px-2 w-10">2</button>
            <span className="text-white">...</span>
            <button className="text-white rounded-[5px] border border-white h-[39px] px-2 w-10">10</button>
            <button className="bg-[#FAAF3D] rounded border border-[#FAAF3D] px-2 h-10 w-[68px]">Next</button>
        </section>
    )
}

export default Pagination;