import { connect } from "react-redux";

import { quizNameSelector, quizScoreSelector } from "selectors";

import CompletedHeader from "./CompletedHeader.component";

export default connect((st) => ({
    name: quizNameSelector(st),
    score: quizScoreSelector(st),
}))(CompletedHeader);
