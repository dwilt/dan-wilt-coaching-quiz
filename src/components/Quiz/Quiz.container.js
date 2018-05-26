import { connect } from "react-redux";

import { quizStateSelector, quizIsCompleteSelector } from "src/selectors";

import { submitQuizAction as onSubmit } from "src/store/quiz/quiz.actions";

import Quiz from "./Quiz.component";

export default connect(
    (st) => {
        const state = quizStateSelector(st);
        const quizComplete = quizIsCompleteSelector(st);

        return {
            state,
            quizComplete,
        };
    },
    {
        onSubmit,
    }
)(Quiz);
