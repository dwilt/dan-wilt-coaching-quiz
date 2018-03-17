import { createSelector } from "reselect";

import { isValidEmail } from "helpers";

const quizSelector = (state) => state.quiz;

export const quizStateSelector = createSelector(
    quizSelector,
    (quiz) => quiz.state,
);

export const quizSelectedAnswerSelector = createSelector(
    quizSelector,
    (quiz) => quiz.selectedAnswer,
);

export const quizAnswersSelector = createSelector(
    quizSelector,
    (quiz) => quiz.answers,
);

export const quizNameSelector = createSelector(
    quizSelector,
    (quiz) => quiz.name,
);

export const quizEmailSelector = createSelector(
    quizSelector,
    (quiz) => quiz.email,
);

export const quizEmailIsValidSelector = createSelector(
    quizEmailSelector,
    (email) => isValidEmail(email),
);
