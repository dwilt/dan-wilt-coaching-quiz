import { call, put, select, take, fork } from 'redux-saga/effects';

import { version, questions } from 'src/questions';

import {
    quizAnswersSelector,
    quizNameSelector,
    quizEmailSelector,
    quizSelectedAnswerSelector,
    quizQuestionIdSelector,
    quizScoreSelector,
    subscribedToMailingListSelector,
} from 'src/selectors';

import { fireFetch } from 'src/services/firebase.service';

import { getRating } from 'firebaseFunctions/services/scoring.service';

export const setSelectedAnswerAction = (selectedAnswer) => ({
    type: 'SET_QUIZ_SELECTED_ANSWER',
    payload: {
        selectedAnswer,
    },
});

export const setEmailAction = (email) => ({
    type: 'SET_QUIZ_EMAIL',
    payload: {
        email,
    },
});

export const setNameAction = (name) => ({
    type: 'SET_QUIZ_NAME',
    payload: {
        name,
    },
});

export const addAnswerAction = (answer) => ({
    type: 'ADD_ANSWER',
    payload: {
        answer,
    },
});

export const toggleSubscribedToMailingListAction = () => ({
    type: 'TOGGLE_SUBSCRIBED_TO_MAILING_LIST',
});

export const submitAnswerAction = () => ({
    type: 'SUBMIT_SELECTED_ANSWER',
});

export const submitNameAction = () => ({
    type: 'SUBMIT_NAME',
});

export const startQuizAction = (history) => ({
    type: 'START_QUIZ',
    payload: {
        history,
    },
});

export const submitQuizAction = (history) => ({
    type: 'SUBMIT_QUIZ',
    payload: {
        history,
    },
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
}

function* submitQuiz() {
    const answers = yield select(quizAnswersSelector);
    const name = yield select(quizNameSelector);
    const email = yield select(quizEmailSelector);
    const score = yield select(quizScoreSelector);
    const subscribedToMailingList = yield select(
        subscribedToMailingListSelector
    );

    const rating = getRating(score);
    const timestamp = new Date().toISOString();

    yield call(fireFetch, 'submitQuiz', {
        name,
        email,
        rating,
        answers,
        timestamp,
        version,
        score,
        subscribedToMailingList,
    });
}

export default function*() {
    const { payload: { history } } = yield take(startQuizAction().type);

    yield call(history.push, '/name');

    yield take(submitNameAction().type);

    yield call(history.push, '/questions');

    for (let i = 0; i < questions.length; i++) {
        yield take(setSelectedAnswerAction().type);

        yield take(submitAnswerAction().type);

        yield* addAnswer();
    }

    yield call(history.push, '/email');

    yield take(submitQuizAction().type);

    yield fork(submitQuiz);

    yield call(history.push, '/completed');
}
