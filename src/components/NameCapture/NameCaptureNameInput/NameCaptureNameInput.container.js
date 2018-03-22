import { connect } from "react-redux";

import { quizNameSelector } from "selectors";

import {
    setNameAction as onChange,
    submitNameAction as onEnterPress,
} from "store/quiz/quiz.actions";

import NameCaptureNameInput from "./NameCaptureNameInput.component";

export default connect(
    (st) => ({
        value: quizNameSelector(st),
    }),
    {
        onChange,
        onEnterPress,
    }
)(NameCaptureNameInput);
