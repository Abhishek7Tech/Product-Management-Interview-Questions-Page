import { useContext, useRef } from "react";
import { QuestionContext } from "../context/questions.context";


function Pagination() {
    const { questionIndex, questionsByFilter, page, nextPageHandler, activeBtn, prevPageHandler } = useContext(QuestionContext);
    const windowWidth = useRef(window.innerWidth);
    const width = 768
    const lastPage = Math.ceil(questionsByFilter.length / 10);

    return (
        <section className="flex justify-end gap-4 py-4 items-center">
            {windowWidth.current > width && <p className="text-white font-normal font-poppins text-base"> Showing {(questionIndex[0] + 1)}-{questionIndex[1]} of {questionsByFilter.length} questions </p>}
            <button onClick={() => prevPageHandler(page)} className="bg-[#FAAF3D] rounded border border-[#FAAF3D] px-2 h-10 w-[68px] text-base font-medium leading-[21px]">Prev</button>
            {lastPage > 2 && <button onClick={() => nextPageHandler(page)} className={activeBtn === page && page !== lastPage - 1 && activeBtn !== lastPage ? "text-[#FAAF3D] text-base leading-[21px] font-medium font-poppins rounded-[5px] border border-[#FAAF3D] h-[39px] px-2 w-10" : "text-white text-base leading-[21px] font-medium font-poppins rounded-[5px] border border-white h-[39px] px-2 w-10"}>{lastPage - 2 >= page ? page : lastPage - 2}</button>}
            {<button onClick={() => nextPageHandler(page + 1)} className={activeBtn === lastPage - 1 ? "text-[#FAAF3D] text-base leading-[21px] font-medium font-poppins rounded-[5px] border border-[#FAAF3D] h-[39px] px-2 w-10" : "text-white text-base leading-[21px] font-medium font-poppins rounded-[5px] border border-white h-[39px] px-2 w-10"}>{lastPage - 1 > page ? page + 1 : lastPage - 1}</button>}
            {lastPage > 2 && <span className="text-white font-medium font-poppins">...</span>}
            {<button onClick={() => nextPageHandler(lastPage)} className={activeBtn === lastPage ? "text-[#FAAF3D] text-base leading-[21px] font-medium font-poppins rounded-[5px] border border-[#FAAF3D] h-[39px] px-2 w-10" : "text-white text-base leading-[21px] font-medium font-poppins rounded-[5px] border border-white h-[39px] px-2 w-10"}>{lastPage}</button>}
            <button onClick={() => nextPageHandler(page + 1)} className="bg-[#FAAF3D] rounded border border-[#FAAF3D] px-2 h-10 w-[68px] text-base font-medium font-poppins leading-[21px]">Next</button>
        </section>
    )
}

export default Pagination;