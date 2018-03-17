import { connect } from "react-redux";

import { quizNameSelector } from "selectors";

import Results from "./Results.component";

export default connect((st) => ({
    name: quizNameSelector(st),
}))(Results);
