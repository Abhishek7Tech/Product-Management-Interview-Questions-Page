import { QuestionContext } from "../context/questions.context";
import { useContext } from "react";


function ProductsHeader() {
    const {filters, filtersHandler} = useContext(QuestionContext);
    return (
        <section className="py-4">
            <h1 className="font-bold text-[28px] md:text-4xl text-[#FAAF3E] text-wrap w-3/2 md:w-full">Product Management Interview Questions</h1>
            <p className="font-normal text-sm md:text-lg text-white py-3 md:py2">Browse 1000+ questions from top tech companies</p>

        <div className="flex gap-3 md:gap-4 flex-wrap">
            {filters.map((button) => <button onClick={() => filtersHandler(button.name)} id={button.id} key={button.id} className={button.selected ? "bg-white rounded px-2 border text-[#1B1919] font-medium text-sm h-[36px] align-middle" : "rounded px-2 border border-white font-medium text-sm text-white h-[36px] align-middle"}>{button.name}</button>)}
        </div>
        </section>
    )
}

export default ProductsHeader;