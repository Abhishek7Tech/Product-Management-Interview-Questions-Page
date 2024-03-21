import { useState } from "react";

const Buttons = [{
    id: "all",
    name: "All",
    selected: true
},

{
    id: "product design",
    name: "Product Design",
    selected: false
},

{
    id: "guesstimates",
    name: "Guesstimates",
    selected: false
},


{
    id: "product strategy",
    name: "Product Strategy",
    selected: false
},

{
    id: "behavioral",
    name: "Behavioral",
    selected: false
},


{
    id: "analytics",
    name: "Analytics",
    selected: false
},
{
    id: "system design",
    name: "System Design",
    selected: false
},
{
    id: "technical",
    name: "Technical",
    selected: false
},
]

function ProductsHeader() {
    const [buttons, setButtons] = useState(Buttons);
    return (
        <section className="py-4">
            <h1 className="font-bold text-4xl text-[#FAAF3E]">Product Management Interview Questions</h1>
            <p className="font-normal text-lg text-white py-2">Browse 1000+ questions from top tech companies</p>

        <div className="flex gap-4">
            {buttons.map((button) => <button id={button.id} className={button.selected ? "bg-white rounded px-2 border text-[#1B1919] font-medium text-sm h-[36px] align-middle" : "rounded px-2 border border-white font-medium text-sm text-white h-[36px] align-middle"}>{button.name}</button>)}
        </div>
        </section>
    )
}

export default ProductsHeader;