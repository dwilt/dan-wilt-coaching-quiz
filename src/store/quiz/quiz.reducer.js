import {
    setStateAction,
    setSelectedAnswerAction,
    addAnswerAction,
    setNameAction,
    setEmailAction,
    toggleSubscribedToMailingListAction,
} from './quiz.actions';

import { createReducer } from 'src/helpers';

export default createReducer(
    {
        state: 'nameCapture',
        selectedAnswer: null,
        answers: [],
        email: '',
        name: '',
        subscribedToMailingList: false,
    },
    {
        [setStateAction().type]: (st, { state }) => ({
            ...st,
            state,
        }),
        [setSelectedAnswerAction().type]: (st, { selectedAnswer }) => ({
            ...st,
            selectedAnswer,
        }),
        [addAnswerAction().type]: (st, { answer }) => ({
            ...st,
            answers: [...st.answers, answer],
        }),
        [setNameAction().type]: (st, { name }) => ({
            ...st,
            name,
        }),
        [setEmailAction().type]: (st, { email }) => ({
            ...st,
            email,
        }),
        [toggleSubscribedToMailingListAction().type]: (st) => ({
            ...st,
            subscribedToMailingList: !st.subscribedToMailingList,
        }),
    }
);
