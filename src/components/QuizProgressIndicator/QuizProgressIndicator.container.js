import { connect } from "react-redux";

import { questions } from "src/questions";

import { quizAnswersSelector } from "src/selectors";

import QuizProgressIndicator from "./QuizProgressIndicator.component";

export default connect((st) => {
    const totalQuestions = questions.length;
    const totalAnswers = quizAnswersSelector(st).length;

    return {
        totalQuestions,
        totalAnswers,
    };
})(QuizProgressIndicator);
