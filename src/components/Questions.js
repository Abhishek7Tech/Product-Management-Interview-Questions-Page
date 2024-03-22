import { useContext} from "react";
import { QuestionContext } from "../context/questions.context";
function Questions() {
    const {questions} = useContext(QuestionContext);
    return (
    <section className="min-h-[85vh]">
        {questions.map((questions) => {
            return (
                <div key={questions.id}>
                    <h2 className="font-medium font-poppins py-2 text-lg leading-6 text-white">{questions.question}</h2>
                    <div className="flex gap-4">
                        {questions.tags.map((que, idx) => <p  id={idx} key={idx} className="text-[#BDBCBC] text-sm font-normal font-inter py-2">{que}</p>)}
                    </div>
                </div>
        )
        })}
    </section>
 )
}

export default Questions;