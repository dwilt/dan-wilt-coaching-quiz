import { connect } from "react-redux";

import { quizNameSelector } from "selectors";

import { submitNameAction as onClick } from "store/quiz/quiz.actions";

import NameCaptureContinueButton from "./NameCaptureContinueButton.component";

export default connect(
    (st) => ({
        name: quizNameSelector(st),
    }),
    {
        onClick,
    }
)(NameCaptureContinueButton);
