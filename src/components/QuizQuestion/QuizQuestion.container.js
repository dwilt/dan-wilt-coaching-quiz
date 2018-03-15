import { connect } from "react-redux";

import {
    currentQuestionSelectedAnswerSelector,
    nameCaptureNameSelector,
} from "selectors";

import { addAnswerAction as onSubmit } from "store/answers/answers.actions";

import QuizQuestion from "./QuizQuestion.component";

export default connect(
    (st) => ({
        selectedAnswer: currentQuestionSelectedAnswerSelector(st),
        name: nameCaptureNameSelector(st),
    }),
    {
        onSubmit,
    }
)(QuizQuestion);
