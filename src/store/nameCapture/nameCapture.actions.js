export const setNameAction = (name) => ({
    type: `SET_NAME_CAPTURE_NAME`,
    payload: {
        name,
    },
});

export const submitNameAction = () => ({
    type: `SUBMIT_NAME`,
});
