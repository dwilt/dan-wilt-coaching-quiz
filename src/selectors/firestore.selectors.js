import { version } from "questions.json";

import { createSelector } from "reselect";

export const firestoreSelector = (state) => state.firestore;

export const firestoreDataSelector = createSelector(
    firestoreSelector,
    (firestore) => firestore.data || {}
);

export const firestoreQuestionsSelector = createSelector(
    firestoreDataSelector,
    (data) => (data.questions ? data.questions[version] : {})
);

export const firestoreQuestionsArraySelector = createSelector(
    firestoreQuestionsSelector,
    (questions) =>
        Object.keys(questions)
            .map((key) => ({
                id: key,
                ...questions[key],
            }))
            .sort((a, b) => {
                if (a.index < b.index) {
                    return -1;
                }
                if (a.index > b.index) {
                    return 1;
                }
                // a must be equal to b
                return 0;
            })
);

export const firestoreQuestionByIndexSelector = createSelector(
    [firestoreQuestionsArraySelector, (st, index) => index],
    (questions, index) => questions.find((question) => question.index === index)
);
