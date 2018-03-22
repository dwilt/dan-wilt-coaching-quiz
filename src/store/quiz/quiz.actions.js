import { call, put, select, takeEvery } from "redux-saga/effects";

import { version } from "questions";

import {
    quizAnswersSelector,
    quizNameSelector,
    quizEmailSelector,
    quizSelectedAnswerSelector,
    quizQuestionIdSelector,
    quizIsCompleteSelector,
} from "selectors";

import { fireFetch } from "services/firebase.service";
import sendSlackMessage from "services/slack.service";

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

export const setQuestionIdAction = (questionId) => ({
    type: `SET_QUIZ_QUESTION_ID`,
    payload: {
        questionId,
    },
});

export const submitAnswerAction = () => ({
    type: `SUBMIT_SELECTED_ANSWER`,
});

export const submitNameAction = () => ({
    type: `SUBMIT_NAME`,
});

export const submitQuizAction = () => ({
    type: `SUBMIT_QUIZ_ACTION`,
});

function* addAnswer() {
    const id = yield select(quizQuestionIdSelector);
    const answer = yield select(quizSelectedAnswerSelector);

    yield put(setSelectedAnswerAction());

    yield put(
        addAnswerAction({
            id,
            answer,
        })
    );

    yield call(window.scrollTo, 0, 0);

    const quizComplete = yield select(quizIsCompleteSelector);

    if (quizComplete) {
        yield put(setStateAction(`emailCapture`));
    }
}

function* submitName() {
    yield put(setStateAction(`question`));
}

function* submitQuiz() {
    const answers = yield select(quizAnswersSelector);
    const name = yield select(quizNameSelector);
    const email = yield select(quizEmailSelector);

    const timestamp = new Date().toISOString();

    try {
        yield call(fireFetch, `addResult`, {
            version,
            name,
            email,
            answers,
            timestamp,
        });

        yield call(sendSlackMessage, {
            text: `New quiz submission from ${name}: ${email}`,
        });
    } catch (e) {
        console.log(e);
    }
}

export default function*() {
    yield takeEvery(submitQuizAction().type, submitQuiz);
    yield takeEvery(submitNameAction().type, submitName);
    yield takeEvery(submitAnswerAction().type, addAnswer);
}
