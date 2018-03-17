import { combineReducers } from "redux";

import quiz from "./quiz/quiz.reducer";
import state from "./state/state.reducer";

export default combineReducers({
    quiz,
    state,
});
