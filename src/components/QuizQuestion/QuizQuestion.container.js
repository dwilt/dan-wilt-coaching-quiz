import { connect } from "react-redux";

import {
    quizSelectedAnswerSelector,
    quizNameSelector,
    quizAnswersSelector,
} from "selectors";

import { submitAnswerAction as onSubmit } from "store/quiz/quiz.actions";

import QuizQuestion from "./QuizQuestion.component";

export default connect(
    (st) => ({
        selectedAnswer: quizSelectedAnswerSelector(st),
        name: quizNameSelector(st),
        userAnswers: quizAnswersSelector(st),
    }),
    {
        onSubmit,
    }
)(QuizQuestion);
