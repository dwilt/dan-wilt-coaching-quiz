import { setStateAction } from "./state.actions";

import { createReducer } from "helpers";

export default createReducer(`nameCapture`, {
    [setStateAction().type]: (st, { state }) => state,
});
