import {QuestionsArray} from "../data";
const questions = QuestionsArray.slice(0,10);
function Questions() {
 return (
    <section>
        {questions.map((questions) => {
            return (
                <div id={questions.id}>
                    <h2 className="font-medium py-2 text-lg text-white">{questions.question}</h2>
                    <div className="flex gap-4">
                        {questions.tags.map((que, idx) => <p  id={idx} className="text-[#BDBCBC] text-sm font-normal py-2">{que}</p>)}
                    </div>
                </div>
        )
        })}
    </section>
 )
}

export default Questions;