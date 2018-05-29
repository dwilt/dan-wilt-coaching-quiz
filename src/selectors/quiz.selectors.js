import { createSelector } from "reselect";

import { questions } from "src/questions";

import { isValidEmail } from "src/helpers";

const quizSelector = (state) => state.quiz;

export const quizStateSelector = createSelector(
    quizSelector,
    (quiz) => quiz.state
);

export const quizSelectedAnswerSelector = createSelector(
    quizSelector,
    (quiz) => quiz.selectedAnswer
);

export const quizAnswersSelector = createSelector(
    quizSelector,
    (quiz) => quiz.answers
);

export const quizNameSelector = createSelector(quizSelector, (quiz) => quiz.name);

export const quizEmailSelector = createSelector(
    quizSelector,
    (quiz) => quiz.email
);

export const quizEmailIsValidSelector = createSelector(
    quizEmailSelector,
    (email) => isValidEmail(email)
);

export const quizIsCompleteSelector = createSelector(
    [quizAnswersSelector],
    (answers) => answers.length === questions.length
);

export const quizQuestionIdSelector = createSelector(
    [quizAnswersSelector],
    (answers) => questions[answers.length].id
);

export const subscribedToMailingListSelector = createSelector(
    [quizSelector],
    (quiz) => quiz.subscribedToMailingList
);

export const quizScoreSelector = createSelector(
    [quizAnswersSelector],
    (answers) => {
        const totalPossibleScore = questions.reduce(
            (totalScore, { scoreValue }) => totalScore + scoreValue,
            0
        );
        const actualScore = answers.reduce((totalScore, { id, answer }) => {
            const question = questions.find((qu) => qu.id === id);

            return question.correctAnswer === answer
                ? totalScore + question.scoreValue
                : totalScore;
        }, 0);

        return actualScore / totalPossibleScore * 100;
    }
);
