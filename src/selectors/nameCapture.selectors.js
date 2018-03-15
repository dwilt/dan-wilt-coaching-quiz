import { createSelector } from "reselect";

const nameCaptureSelector = (state) => state.nameCapture;

export const nameCaptureNameSelector = createSelector(
    nameCaptureSelector,
    (nameCapture) => nameCapture.name
);
