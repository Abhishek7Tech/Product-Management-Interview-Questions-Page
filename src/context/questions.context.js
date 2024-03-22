import { createContext, useState } from "react";
import { QuestionsArray } from "../data";
console.log("QUESTION ARRAY", QuestionsArray.length);
const filtersArray = [{
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


export const QuestionContext = createContext({
    filters: filtersArray,
    filtersHandler: () => null,
    questions: [],
    questionsByFilter: [],
    page: 1,
    activeBtn: 1,
    pageHandler: () => null,
    questionIndex: []
});


const QuestionsProvider = ({ children }) => {
    const [filters, setFilters] = useState(filtersArray);
    const [questionsByFilter, setQuestionsByFilter] = useState(QuestionsArray);
    const [startIdx, setStartIdx] = useState(2);
    const [questions, setQuestions] = useState(questionsByFilter.slice(0, 10));
    const [page, setPage] = useState(1);
    const [activeBtn, setActiveBtn] = useState(page);
    const [questionIndex, setQuestionsIdndex] = useState([1, questions.length]);

    function pageHandler(pageNo) {
        const lastPage = Math.ceil(questionsByFilter.length / 10);
        // if (page >= lastPage) {
        //     return;
        // }

        console.log("PAGE NO-1", pageNo);

        if (pageNo < 1) {
            console.log("PAGE NO", pageNo);
            return;
        }

        if (pageNo > lastPage) {
            return;
        }
        // console.log("PAGE NO", pageNo, lastPage);
        setActiveBtn(pageNo);
        setStartIdx(startIdx + 1);
        // setActiveBtn(pageNo);
        // console.log("LAST PAGE", lastPage, pageNo);
        if ((lastPage - 1) === pageNo) {
            setPage(pageNo);

        } else {


            lastPage !== pageNo && setPage(pageNo) && setStartIdx(pageNo + 1);
        }
        let start = (startIdx - 1) * 10;
        let end = startIdx * 10;
        if (pageNo === lastPage) {
            setPage(pageNo);
            start = (lastPage - 1) * 10;
            end = questionsByFilter.length;
            const questionsSlice = questionsByFilter.slice(start, end);
            console.log("STARTIDX", startIdx, page, questionsSlice);
            setQuestions(questionsSlice);
            const newQuestionsIndex = [start, end];
            setQuestionsIdndex(newQuestionsIndex);
            return;
        }


        console.log("START", start, "END", end);

        const questionsSlice = questionsByFilter.slice(start, end);
        console.log("STARTIDX", startIdx, page, questionsSlice);
        setQuestions(questionsSlice);
        const newQuestionsIndex = [questionIndex[1], questionIndex[1] + questionsSlice.length]
        setQuestionsIdndex(newQuestionsIndex)
    }
    function filtersHandler(id) {

        const updatedFiltersArray = filters.map((button) => button.name === id ? { ...button, selected: !button.selected } : { ...button, selected: false });
        setFilters(updatedFiltersArray);
        const updatedQuestionsArray = QuestionsArray.filter((questions) => questions.tags[1] === id && questions);
        // console.log("FILTERED QUESTIONS ARRAY", updatedQuestionsArray);
        // setQuestionsByFilter(updatedQuestionsArray);
        setPage(1);
        setActiveBtn(1);
        const newQuestionsIndex = [1, questions.length]

        setQuestionsByFilter(updatedQuestionsArray);
        setQuestionsIdndex(newQuestionsIndex)
    }
    const values = { filters, filtersHandler, questions, questionIndex, questionsByFilter, page, activeBtn, pageHandler };
    // setFilters(filtersHandler);
    return <QuestionContext.Provider value={values}>{children}</QuestionContext.Provider>
}

export default QuestionsProvider