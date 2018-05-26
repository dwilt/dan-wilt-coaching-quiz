import { connect } from "react-redux";

import { quizNameSelector } from "src/selectors";

import {
    setNameAction as onChange,
    submitNameAction as onEnterPress,
} from "src/store/quiz/quiz.actions";

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
