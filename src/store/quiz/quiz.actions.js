import { call, put, select, takeEvery } from "redux-saga/effects";

import { questions, version } from "questions";

import {
    quizAnswersSelector,
    quizNameSelector,
    quizEmailSelector,
} from "selectors";

import { fireFetch } from "services/firebase.service";

export const setStateAction = (state) => ({
    type: `SET_QUIZ_STATE`,
    payload: {
        state,
    },
});

export const setSelectedAnswerAction = (selectedAnswer) => ({
    type: `SET_QUIZ_SELECTED_ANSWER`,
    payload: {
        selectedAnswer,
    },
});

export const setEmailAction = (email) => ({
    type: `SET_QUIZ_EMAIL`,
    payload: {
        email,
    },
});

export const setNameAction = (name) => ({
    type: `SET_QUIZ_NAME`,
    payload: {
        name,
    },
});

export const addAnswerAction = (answer) => ({
    type: `ADD_ANSWER`,
    payload: {
        answer,
    },
});

export const submitNameAction = () => ({
    type: `SUBMIT_NAME`,
});

export const submitQuizAction = () => ({
    type: `SUBMIT_QUIZ_ACTION`,
});

function* addAnswer() {
    const answers = yield select(quizAnswersSelector);

    yield put(setSelectedAnswerAction());

    yield call(window.scrollTo, 0,0);

    if (answers.length === questions.length) {
        yield put(setStateAction(`emailCapture`));
    }
}

function* submitName() {
    yield put(setStateAction(`question`));
}

function* submitQuiz() {
    const name = yield select(quizNameSelector);
    const email = yield select(quizEmailSelector);
    const answers = yield select(quizAnswersSelector);

    try {
        yield call(fireFetch, `addResult`, {
            version,
            name,
            email,
            answers,
        });
    } catch (e) {
        console.log(e);
    }
}

export default function*() {
    yield takeEvery(submitQuizAction().type, submitQuiz);
    yield takeEvery(submitNameAction().type, submitName);
    yield takeEvery(addAnswerAction().type, addAnswer);
}
