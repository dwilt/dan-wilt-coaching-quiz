import { connect } from "react-redux";

import { quizStateSelector, quizIsCompleteSelector } from "selectors";

import { submitQuizAction as onSubmit } from "store/quiz/quiz.actions";

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
