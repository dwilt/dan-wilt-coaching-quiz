import { put, takeEvery } from "redux-saga/effects";

import { submitQuizAction } from "store/quiz/quiz.actions";

export const setStateAction = (state) => ({
    type: `SET_STATE`,
    payload: {
        state,
    },
});

function* submitQuiz() {
    yield put(setStateAction(`completed`));
}

export default function*() {
    yield takeEvery(submitQuizAction().type, submitQuiz);
}
