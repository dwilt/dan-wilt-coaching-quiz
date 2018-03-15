import { addAnswerAction } from "./answers.actions";

import { createReducer } from "helpers";

export default createReducer([], {
    [addAnswerAction().type]: (st, { answer }) => [...st, answer],
});
