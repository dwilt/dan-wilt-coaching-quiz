import { all } from "redux-saga/effects";

import quizSaga from "src/store/quiz/quiz.actions";
import stateSaga from "src/store/state/state.actions";

export default function*() {
    yield all([stateSaga(), quizSaga()]);
}
