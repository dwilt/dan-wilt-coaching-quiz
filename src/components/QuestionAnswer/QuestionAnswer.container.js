import { connect } from "react-redux";

import { quizSelectedAnswerSelector } from "selectors";

import { setSelectedAnswerAction as onChange } from "store/quiz/quiz.actions";

import QuestionAnswer from "./QuestionAnswer.component";

export default connect(
    (st) => ({
        selectedAnswer: quizSelectedAnswerSelector(st),
    }),
    {
        onChange,
    }
)(QuestionAnswer);
