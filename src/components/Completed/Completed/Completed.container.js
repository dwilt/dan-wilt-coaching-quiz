import { connect } from "react-redux";

import { quizNameSelector } from "src/selectors";

import CompletedResults from "./Completed.component";

export default connect((st) => ({
    name: quizNameSelector(st),
}))(CompletedResults);
