import { put, takeEvery } from "redux-saga/effects";

export const setSelectedAnswerAction = (selectedAnswer) => ({
    type: `SET_CURRENT_QUESTION_SELECTED_ANSWER`,
    payload: {
        selectedAnswer,
    },
});

function* submitName() {
    yield put(setSelectedAnswerAction(null));
}

export default function*() {
    yield takeEvery(`ADD_ANSWER`, submitName);
}
