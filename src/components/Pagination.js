import { useContext, useState } from "react";
import { QuestionContext } from "../context/questions.context";


function Pagination() {
    const {questionsByFilter, page, pageHandler, activeBtn } = useContext(QuestionContext);
    // const [page, setPage] = useState(1);
    // const [activeBtn, setActiveBtn] = useState(page);

    const lastPage = Math.ceil(questionsByFilter.length / 10);
    // console.log("LAST PAGE", lastPage);
    // function pageHandler(pageNo) {
    //     if ((lastPage - 1) === pageNo) {   
    //         setPage(lastPage - 2);
    //         console.log("CLICKED -1", lastPage - 2)
    //     } else {

    //         setPage(pageNo);
    //         console.log("CLICKED -2", pageNo)
    //     }

    //     if(activeBtn < lastPage) {
    //         setActiveBtn(activeBtn + 1);
    //         console.log("CLICKED -3", pageNo)

    //         // console.log("ACTIVE_BTN",activeBtn + 1);
    //     }
        
    //     // console.log("PAGE NO", page, start, end);
    // }

    console.log("PAGE", page);
    return (
        <section className="flex justify-end gap-4 py-4 items-center">
            <p className="text-white font-normal text-base"> Showing {page}-{page * 10} of {questionsByFilter.length} questions </p>
            <button onClick={() => pageHandler(page)} className={activeBtn === page ? "text-[#FAAF3D] rounded-[5px] border border-[#FAAF3D] h-[39px] px-2 w-10": "text-white rounded-[5px] border border-white h-[39px] px-2 w-10" }>{page}</button>
           {lastPage > page && <button onClick={() => pageHandler(page + 1)} className={activeBtn === page + 1 ? "text-[#FAAF3D] rounded-[5px] border border-[#FAAF3D] h-[39px] px-2 w-10": "text-white rounded-[5px] border border-white h-[39px] px-2 w-10" }>{page + 1}</button> }
            {lastPage !== (page + 1) && <span className="text-white">...</span>}
           {lastPage !== (page + 1) && <button className={activeBtn === lastPage ? "text-[#FAAF3D] rounded-[5px] border border-[#FAAF3D] h-[39px] px-2 w-10": "text-white rounded-[5px] border border-white h-[39px] px-2 w-10" }>{lastPage}</button>}
            <button onClick={() => pageHandler(page + 1)} className="bg-[#FAAF3D] rounded border border-[#FAAF3D] px-2 h-10 w-[68px]">Next</button>
        </section>
    )
}

export default Pagination;