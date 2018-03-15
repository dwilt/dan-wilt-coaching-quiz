import { firestoreReducer as firestore } from "redux-firestore";

import { combineReducers } from "redux";

import answers from "./answers/answers.reducer";
import currentQuestion from "./currentQuestion/currentQuestion.reducer";
import nameCapture from "./nameCapture/nameCapture.reducer";
import state from "./state/state.reducer";

export default combineReducers({
    answers,
    currentQuestion,
    firestore,
    nameCapture,
    state,
});
