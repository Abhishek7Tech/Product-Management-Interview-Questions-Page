import { useContext, useRef } from "react";
import { QuestionContext } from "../context/questions.context";


function Pagination() {
    const { questionIndex, questionsByFilter, page, pageHandler, activeBtn, prevPageHandler } = useContext(QuestionContext);
    const windowWidth = useRef(window.innerWidth);
    const width = 768
    const lastPage = Math.ceil(questionsByFilter.length / 10);
    // const firstQuestionIdx = questions.length - (questions.length - (questions.length - 1));
    // const lastQuestionIdx = (questions.length - 1);
    // useEffect(() => {
    // console.log("EFFECT")
    // }, [page])
    // console.log("FIRST IDX", questionIndex);
    console.log("ACTIVE BTN",  activeBtn)

    // console.log("PAGE", page, "Questions - Lenght", questions.length, "Questions By Filter", questionsByFilter.length);
    return (
        <section className="flex justify-end gap-4 py-4 items-center">
            {windowWidth.current > width && <p className="text-white font-normal text-base"> Showing {(questionIndex[0] + 1)}-{questionIndex[1]} of {questionsByFilter.length} questions </p>}
            <button onClick={() => prevPageHandler(page)} className="bg-[#FAAF3D] rounded border border-[#FAAF3D] px-2 h-10 w-[68px] text-base font-medium leading-[21px]">Prev</button>
            {/* <button onClick={() => pageHandler(page)} className={activeBtn === page ? "text-[#FAAF3D] text-base leading-[21px] font-medium rounded-[5px] border border-[#FAAF3D] h-[39px] px-2 w-10" : "text-white text-base leading-[21px] font-medium rounded-[5px] border border-white h-[39px] px-2 w-10"}>{page}</button>
            {lastPage > page && <button onClick={() => pageHandler(page + 1)} className={activeBtn === page + 1 ? "text-[#FAAF3D] text-base leading-[21px] font-medium rounded-[5px] border border-[#FAAF3D] h-[39px] px-2 w-10" : "text-white text-base leading-[21px] font-medium rounded-[5px] border border-white h-[39px] px-2 w-10"}>{page + 1}</button>}
            {lastPage !== (page + 1) && page !== lastPage && <span className="text-white font-medium">...</span>}

            {lastPage !== (page + 1) && page !== lastPage && <button onClick={() => pageHandler(lastPage)} className={activeBtn === lastPage ? "text-[#FAAF3D] text-base leading-[21px] font-medium rounded-[5px] border border-[#FAAF3D] h-[39px] px-2 w-10" : "text-white text-base leading-[21px] font-medium rounded-[5px] border border-white h-[39px] px-2 w-10"}>{lastPage}</button>} */}
           

         {lastPage > 2 &&  <button onClick={() => pageHandler(page)} className={activeBtn === page && page !== lastPage - 1 && activeBtn !== lastPage  ? "text-[#FAAF3D] text-base leading-[21px] font-medium rounded-[5px] border border-[#FAAF3D] h-[39px] px-2 w-10" : "text-white text-base leading-[21px] font-medium rounded-[5px] border border-white h-[39px] px-2 w-10"}>{lastPage - 2  >= page ? page : lastPage - 2 }</button> }
            {<button onClick={() => pageHandler(page + 1)} className={activeBtn === lastPage - 1 ? "text-[#FAAF3D] text-base leading-[21px] font-medium rounded-[5px] border border-[#FAAF3D] h-[39px] px-2 w-10" : "text-white text-base leading-[21px] font-medium rounded-[5px] border border-white h-[39px] px-2 w-10"}>{lastPage - 1 > page ? page + 1 : lastPage - 1}</button>}
          {lastPage > 2 && <span className="text-white font-medium">...</span>}

            {<button onClick={() => pageHandler(lastPage)} className={activeBtn === lastPage ? "text-[#FAAF3D] text-base leading-[21px] font-medium rounded-[5px] border border-[#FAAF3D] h-[39px] px-2 w-10" : "text-white text-base leading-[21px] font-medium rounded-[5px] border border-white h-[39px] px-2 w-10"}>{lastPage}</button>}
           
            <button onClick={() => pageHandler(page + 1)} className="bg-[#FAAF3D] rounded border border-[#FAAF3D] px-2 h-10 w-[68px] text-base font-medium leading-[21px]">Next</button>

        </section>
    )
}

export default Pagination;