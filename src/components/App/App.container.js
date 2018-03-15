import { compose } from "redux";

import { connect } from "react-redux";

import { stateSelector } from "selectors";

import App from "./App.component";

import { version } from "../../questions";

import { firestoreConnect } from "react-redux-firebase";

export default compose(
    firestoreConnect([`questions/${version}`]),
    connect((st) => ({
        state: stateSelector(st),
        questions: st.firestore.data.questions && st.firestore.data.questions[1],
    }))
)(App);
