import { connect } from "react-redux";

import { currentQuestionSelectedAnswerSelector } from "selectors";

import { setSelectedAnswerAction as onChange } from "store/currentQuestion/currentQuestion.actions";

import QuestionAnswer from "./QuestionAnswer.component";

export default connect(
    (st) => ({
        selectedAnswer: currentQuestionSelectedAnswerSelector(st),
    }),
    {
        onChange,
    }
)(QuestionAnswer);
