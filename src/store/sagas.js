import { all } from "redux-saga/effects";

import currentQuestionSaga from "store/currentQuestion/currentQuestion.actions";
import stateSaga from "store/state/state.actions";

export default function*() {
    yield all([stateSaga(), currentQuestionSaga()]);
}
