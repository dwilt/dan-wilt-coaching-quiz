import { put, take } from 'redux-saga/effects';

import { submitQuizAction } from 'src/store/quiz/quiz.actions';

export const setStateAction = (state) => ({
    type: 'SET_STATE',
    payload: {
        state,
    },
});

export default function*() {
    yield take(submitQuizAction().type);

    yield put(setStateAction('completed'));
}
