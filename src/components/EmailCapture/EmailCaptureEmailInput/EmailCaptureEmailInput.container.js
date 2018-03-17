import { connect } from "react-redux";

import { quizEmailSelector } from "selectors";

import { setEmailAction as onChange } from "store/quiz/quiz.actions";

import EmailCaptureEmailInput from "./EmailCaptureEmailInput.component";

export default connect(
    (st) => ({
        value: quizEmailSelector(st),
    }),
    {
        onChange,
    }
)(EmailCaptureEmailInput);
