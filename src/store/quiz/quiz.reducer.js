import {
    setSelectedAnswerAction,
    addAnswerAction,
    setNameAction,
    setEmailAction,
    toggleSubscribedToMailingListAction,
} from './quiz.actions';

import { createReducer } from 'src/helpers';

export default createReducer(
    {
        selectedAnswer: null,
        answers: [],
        email: '',
        name: '',
        subscribedToMailingList: false,
    },
    {
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
