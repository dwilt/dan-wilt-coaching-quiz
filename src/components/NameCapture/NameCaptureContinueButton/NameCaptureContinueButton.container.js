import { connect } from "react-redux";

import { nameCaptureNameSelector } from "selectors";

import { submitNameAction as onClick } from "store/nameCapture/nameCapture.actions";

import NameCaptureContinueButton from "./NameCaptureContinueButton.component";

export default connect(
    (st) => ({
        name: nameCaptureNameSelector(st),
    }),
    {
        onClick,
    }
)(NameCaptureContinueButton);
