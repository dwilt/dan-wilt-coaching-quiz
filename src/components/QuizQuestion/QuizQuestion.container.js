import { connect } from "react-redux";

import { compose } from "redux";

import { firestoreConnect } from "react-redux-firebase";

import Quiz from "./QuizQuestion.component";

export default compose(
    firestoreConnect([`questions/1`]),
    connect((state) => ({
        questions:
            state.firestore.data.questions && state.firestore.data.questions[1],
    }))
)(Quiz);
