import { connect } from "react-redux";

import { questions } from "questions";

import { answersSelector } from "selectors";

import QuizProgressIndicator from "./QuizProgressIndicator.component";

export default connect((st) => {
    const totalQuestions = questions.length;
    const totalAnswers = answersSelector(st).length;

    return {
        totalQuestions,
        totalAnswers,
    };
})(QuizProgressIndicator);
