import { useContext} from "react";
import { QuestionContext } from "../context/questions.context";
function Questions() {
    const {questions} = useContext(QuestionContext);
   console.log("QUESTIONS", questions);
    return (
    <section>
        {questions.map((questions) => {
            return (
                <div key={questions.id}>
                    <h2 className="font-medium py-2 text-lg text-white">{questions.question}</h2>
                    <div className="flex gap-4">
                        {questions.tags.map((que, idx) => <p  id={idx} key={idx} className="text-[#BDBCBC] text-sm font-normal py-2">{que}</p>)}
                    </div>
                </div>
        )
        })}
    </section>
 )
}

export default Questions;