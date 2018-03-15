import { setNameAction } from "./nameCapture.actions";

import { createReducer } from "helpers";

export default createReducer(
    {
        name: ``,
    },
    {
        [setNameAction().type]: (st, { name }) => ({
            ...st,
            name,
        }),
    }
);
