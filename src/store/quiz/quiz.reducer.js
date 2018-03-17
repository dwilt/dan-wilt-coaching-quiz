import {
    setStateAction,
    setSelectedAnswerAction,
    addAnswerAction,
    setNameAction,
    setEmailAction,
} from "./quiz.actions";

import { createReducer } from "helpers";

export default createReducer(
    {
        state: `nameCapture`,
        selectedAnswer: 1,
        answers: [],
        email: `dan@dan.com`,
        name: `Dan`,
    },
    {
        [setStateAction().type]: (st, { state }) => ({
            ...st,
            state,
        }),
        [setSelectedAnswerAction().type]: (st, { selectedAnswer }) => ({
            ...st,
            selectedAnswer,
        }),
        [addAnswerAction().type]: (st, { answer }) => ({
            ...st,
            answers: [...st.answers, answer],
        }),
        [setNameAction().type]: (st, { name }) => ({
            ...st,
            name,
        }),
        [setEmailAction().type]: (st, { email }) => ({
            ...st,
            email,
        }),
    }
);
