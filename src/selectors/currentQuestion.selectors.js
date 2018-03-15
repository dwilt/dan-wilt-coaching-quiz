import { createSelector } from "reselect";

const currentQuestionSelector = (state) => state.currentQuestion;

export const currentQuestionSelectedAnswerSelector = createSelector(
    currentQuestionSelector,
    (currentQuestion) => currentQuestion.selectedAnswer
);
