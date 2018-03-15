import { connect } from "react-redux";

import { firestoreQuestionsArraySelector, answersSelector } from "selectors";

import QuizProgressIndicator from "./QuizProgressIndicator.component";

export default connect((st) => {
    const totalQuestions = firestoreQuestionsArraySelector(st).length;
    const totalAnswers = answersSelector(st).length;

    return {
        totalQuestions,
        totalAnswers,
    };
})(QuizProgressIndicator);
