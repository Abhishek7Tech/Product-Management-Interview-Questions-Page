import { useState } from "react";
import { QuestionContext } from "../context/questions.context";
import { useContext } from "react";


function ProductsHeader() {
    const {filters, filtersHandler} = useContext(QuestionContext);
    return (
        <section className="py-4">
            <h1 className="font-bold text-4xl text-[#FAAF3E]">Product Management Interview Questions</h1>
            <p className="font-normal text-lg text-white py-2">Browse 1000+ questions from top tech companies</p>

        <div className="flex gap-4">
            {filters.map((button) => <button onClick={() => filtersHandler(button.name)} id={button.id} key={button.id} className={button.selected ? "bg-white rounded px-2 border text-[#1B1919] font-medium text-sm h-[36px] align-middle" : "rounded px-2 border border-white font-medium text-sm text-white h-[36px] align-middle"}>{button.name}</button>)}
        </div>
        </section>
    )
}

export default ProductsHeader;