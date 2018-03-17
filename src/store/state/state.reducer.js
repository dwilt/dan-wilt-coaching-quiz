import { setStateAction } from "./state.actions";

import { createReducer } from "helpers";

export default createReducer(`quiz`, {
    [setStateAction().type]: (st, { state }) => state,
});
