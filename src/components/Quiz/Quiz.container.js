import { connect } from "react-redux";

import { quizStateSelector } from "selectors";

import { submitQuizAction as onSubmit } from "store/quiz/quiz.actions";

import Quiz from "./Quiz.component";

export default connect(
    (st) => {
        const state = quizStateSelector(st);

        return {
            state,
        };
    },
    {
        onSubmit,
    }
)(Quiz);
