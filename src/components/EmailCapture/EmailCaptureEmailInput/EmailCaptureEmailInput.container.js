import { connect } from "react-redux";

import { quizEmailSelector } from "src/selectors";

import { setEmailAction as onChange } from "src/store/quiz/quiz.actions";

import EmailCaptureEmailInput from "./EmailCaptureEmailInput.component";

export default connect(
    (st) => ({
        value: quizEmailSelector(st),
    }),
    {
        onChange,
    }
)(EmailCaptureEmailInput);
