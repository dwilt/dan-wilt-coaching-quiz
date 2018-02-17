import { connect } from 'react-redux'

import { compose } from 'redux'

import { firestoreConnect } from 'react-redux-firebase'

import Quiz from './Quiz.component';

export default compose(
    firestoreConnect([
        `questions`,
    ]),
    connect(
        (state) => ({
            questions: state.firestore.data.questions
        })
    )
)(Quiz)
