import { all } from "redux-saga/effects";

import quizSaga from "store/quiz/quiz.actions";
import stateSaga from "store/state/state.actions";

export default function*() {
    yield all([stateSaga(), quizSaga()]);
}
