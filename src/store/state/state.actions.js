import { put, takeEvery, select } from "redux-saga/effects";

import { questions } from "questions";

import { answersSelector } from "selectors";

export const setStateAction = (state) => ({
    type: `SET_STATE`,
    payload: {
        state,
    },
});

function* submitName() {
    yield put(setStateAction(`question`));
}

function* addAnswer() {
    const answers = yield select(answersSelector);

    if (answers.length === questions.length) {
        yield put(setStateAction(`emailCapture`));
    }
}

export default function*() {
    yield takeEvery(`SUBMIT_NAME`, submitName);
    yield takeEvery(`ADD_ANSWER`, addAnswer);
}
