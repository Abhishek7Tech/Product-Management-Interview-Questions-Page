import { createContext, useState } from "react";
import { QuestionsArray } from "../db/data";
import { filtersArray } from "../db/filters";

export const QuestionContext = createContext({
    filters: filtersArray,
    filtersHandler: () => null,
    questions: [],
    questionsByFilter: [],
    page: 1,
    activeBtn: 1,
    nextPageHandler: () => null,
    questionIndex: [],
    prevPageHandler: () => null
});


const QuestionsProvider = ({ children }) => {
    const [filters, setFilters] = useState(filtersArray);
    const [questionsByFilter, setQuestionsByFilter] = useState(QuestionsArray);
    const [startIdx, setStartIdx] = useState(2);
    const [questions, setQuestions] = useState(questionsByFilter.slice(0, 10));
    const [page, setPage] = useState(1);
    const [activeBtn, setActiveBtn] = useState(page);
    const [questionIndex, setQuestionsIdndex] = useState([1, questions.length]);

    function nextPageHandler(pageNo) {
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
            setQuestions(questionsSlice);
            const newQuestionsIndex = [start, end];
            setQuestionsIdndex(newQuestionsIndex);
            return;
        }


        console.log("START", start, "END", end);
        const questions = questionsByFilter;
        const questionsSlice = questions.slice(start, end);
        setQuestions(questionsSlice);
        const newQuestionsIndex = [questionIndex[1], questionIndex[1] + questionsSlice.length]
        setQuestionsIdndex(newQuestionsIndex)
    }

    function prevPageHandler(pageNo) {


        if (pageNo === 1) {

            return;
        }


        setActiveBtn(pageNo);
        setStartIdx(startIdx - 1);

        setPage(pageNo - 1);
        setActiveBtn(pageNo - 1);
        setStartIdx(pageNo - 1);

        let start = 0;
        let end = 10;
        if (pageNo === 2) {
            const questions = questionsByFilter;
            const questionsSlice = questions.slice(start, end);
            setQuestions(questionsSlice);
            const newQuestionsIndex = [start, end];
            setQuestionsIdndex(newQuestionsIndex)
            // console.log("QUESTIONS_PREV", questionsSlice);
            return;
        }

        start = (startIdx - 3) * 10;
        end = (startIdx - 2) * 10;
        console.log("START_PREV", start, "END_PREV", end);

        const questions = questionsByFilter;
        const questionsSlice = questions.slice(start, end);
        setQuestions(questionsSlice);
        const newQuestionsIndex = [questionIndex[0] - 10, questionIndex[0]];
        // console.log("QUESTIONS IDX", newQuestionsIndex, start, start - 10 )
        setQuestionsIdndex(newQuestionsIndex);
    }

    function filtersHandler(id) {
        console.log("ID", id);
        if (id === "Product Design" || id === "All") {
            setQuestionsByFilter(QuestionsArray);
            setQuestions(QuestionsArray.slice(0, 10))
        } else {
            const updatedQuestionsArray = QuestionsArray.filter((questions) => questions.tags[1] === id && questions);
            setQuestionsByFilter(updatedQuestionsArray);
            setQuestions(updatedQuestionsArray.slice(0, 10))

        }
        const updatedFiltersArray = filters.map((button) => button.name === id ? { ...button, selected: !button.selected } : { ...button, selected: false });
        setFilters(updatedFiltersArray);
        setPage(1);
        setActiveBtn(1);


        const newQuestionsIndex = [1, 10]
        setQuestionsIdndex(newQuestionsIndex);
        setStartIdx(2);

    }
    const values = { filters, filtersHandler, questions, questionIndex, questionsByFilter, page, activeBtn, nextPageHandler, prevPageHandler };
    return <QuestionContext.Provider value={values}>{children}</QuestionContext.Provider>
}

export default QuestionsProvider