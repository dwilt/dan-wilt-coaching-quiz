import { connect } from "react-redux";

import { quizEmailIsValidSelector } from "selectors";

import EmailCaptureContinueButton from "./EmailCaptureContinueButton.component";

export default connect((st) => ({
    valid: quizEmailIsValidSelector(st),
}))(EmailCaptureContinueButton);
