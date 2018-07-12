import { connect } from 'react-redux';

import { withRouter } from 'react-router-dom';

import { startQuizAction } from 'src/store/quiz/quiz.actions';

import LandingGetStartedButton from './LandingGetStartedButton.component';

export default withRouter(
    connect(null, (dispatch, { history }) => ({
        onClick: () => dispatch(startQuizAction(history)),
    }))(LandingGetStartedButton)
);
