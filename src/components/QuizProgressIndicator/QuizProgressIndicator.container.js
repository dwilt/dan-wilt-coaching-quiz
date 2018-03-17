import { connect } from "react-redux";

import { questions } from "questions";

import { quizAnswersSelector } from "selectors";

import QuizProgressIndicator from "./QuizProgressIndicator.component";

export default connect((st) => {
    const totalQuestions = questions.length;
    const totalAnswers = quizAnswersSelector(st).length;

    return {
        totalQuestions,
        totalAnswers,
    };
})(QuizProgressIndicator);
