import { connect } from "react-redux";

import { quizNameSelector } from "selectors";

import { setNameAction as onChange } from "store/quiz/quiz.actions";

import NameCaptureNameInput from "./NameCaptureNameInput.component";

export default connect(
    (st) => ({
        value: quizNameSelector(st),
    }),
    {
        onChange,
    }
)(NameCaptureNameInput);
