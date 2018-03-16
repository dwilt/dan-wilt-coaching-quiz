import { connect } from "react-redux";

import { questions } from "questions.js";

import { answersSelector } from "selectors";

import Quiz from "./Quiz.component";

export default connect((st) => {
    const answers = answersSelector(st);
    const completedQuestions = answers.length;
    const question = questions[completedQuestions];

    return {
        question,
    };
})(Quiz);
