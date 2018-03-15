import { setSelectedAnswerAction } from "./currentQuestion.actions";

import { createReducer } from "helpers";

export default createReducer(
    {
        selectedAnswer: null,
    },
    {
        [setSelectedAnswerAction().type]: (st, { selectedAnswer }) => ({
            ...st,
            selectedAnswer,
        }),
    }
);
