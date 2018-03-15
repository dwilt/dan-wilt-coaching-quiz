import { connect } from "react-redux";

import { nameCaptureNameSelector } from "selectors";

import { setNameAction as onChange } from "store/nameCapture/nameCapture.actions";

import NameCaptureNameInput from "./NameCaptureNameInput.component";

export default connect(
    (st) => ({
        value: nameCaptureNameSelector(st),
    }),
    {
        onChange,
    }
)(NameCaptureNameInput);
