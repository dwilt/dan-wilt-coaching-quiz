import { connect } from 'react-redux';

import { withRouter } from 'react-router-dom';

import { quizNameSelector } from 'src/selectors';

import CompletedResults from './Completed.component';

export default withRouter(
    connect((st) => ({
        name: quizNameSelector(st),
    }))(CompletedResults)
);
