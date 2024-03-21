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
});


const QuestionsProvider = ({ children }) => {
    const [filters, setFilters] = useState(filtersArray);
    const [questionsByFilter, setQuestionsByFilter] = useState(QuestionsArray);
    const [questions, setQuestions] = useState(questionsByFilter.slice(0, 10));
    const [page, setPage] = useState(1);
    const [activeBtn, setActiveBtn] = useState(page);


    // function questionsHandler (pageNo) {
    //     const lastPage = Math.ceil (questionsByFilter.length / 10);
    //     console.log("LAST PAGE WILL BE", lastPage, pageNo)
    //     // if ((lastPage - 1) === pageNo) {
    //     //     return;
    //     // }
    //     setPage(pageNo);
    //   const start = (pageNo - 1) * 10;
    //   const end = pageNo * 10;
    //   const updatedQuestionsArray = QuestionsArray.slice(start, end);
    //   console.log("START", start, "END", end);
    //   console.log("QUESTION ARRAY", updatedQuestionsArray);
    //   console.log("PAGE NO", page, start, end);
    // }
    // function pageHandler(id) {
    //     if (+id !== page) {
    //         setPage()
    //     }
    // }

    function pageHandler(pageNo) {
        const lastPage = Math.ceil(questionsByFilter.length / 10);
        // if (page >= lastPage) {
        //     return;
        // }
        console.log("LAST PAGE", lastPage, pageNo);
        if ((lastPage - 1) === pageNo) {
            setPage(lastPage - 2);
            console.log("CLICKED -1", lastPage - 2)
        } else {

          lastPage !== pageNo &&  setPage(pageNo);
        }


        if (activeBtn < lastPage) {
            setActiveBtn(activeBtn + 1);
            console.log("CLICKED -3", pageNo)

            // console.log("ACTIVE_BTN",activeBtn + 1);
        }
    }

    function filtersHandler(id) {
        const updatedFiltersArray = filters.map((button) => button.name === id ? { ...button, selected: !button.selected } : { ...button, selected: false });
        setFilters(updatedFiltersArray);
        const updatedQuestionsArray = QuestionsArray.filter((questions) => questions.tags.includes(id) && questions);
        // console.log("FILTERED QUESTIONS ARRAY", updatedQuestionsArray);
        // setQuestionsByFilter(updatedQuestionsArray);
        setPage(1);
        setActiveBtn(1);
        setQuestions(updatedQuestionsArray);
    }
    const values = { filters, filtersHandler, questions, questionsByFilter, page, activeBtn, pageHandler };
    // setFilters(filtersHandler);
    return <QuestionContext.Provider value={values}>{children}</QuestionContext.Provider>
}

export default QuestionsProvider