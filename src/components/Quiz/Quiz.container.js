import { connect } from "react-redux";

import { compose } from "redux";

import { firestoreConnect } from "react-redux-firebase";

import { version } from "questions.json";

import { answersSelector, firestoreQuestionByIndexSelector } from "selectors";

import Quiz from "./Quiz.component";

export default compose(
    firestoreConnect([`questions/${version}`]),
    connect((st) => {
        const answers = answersSelector(st);
        const completedQuestions = answers.length;
        const question = firestoreQuestionByIndexSelector(
            st,
            completedQuestions
        );

        return {
            question,
        };
    })
)(Quiz);
