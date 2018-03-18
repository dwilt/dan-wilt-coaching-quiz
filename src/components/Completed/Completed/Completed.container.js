import { connect } from "react-redux";

import { quizNameSelector } from "selectors";

import CompletedResults from "./Completed.component";

export default connect((st) => ({
    name: quizNameSelector(st),
}))(CompletedResults);
