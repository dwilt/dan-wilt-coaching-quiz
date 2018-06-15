import { connect } from 'react-redux';

import { quizAnswersSelector } from 'src/selectors';

import CompletedResultsList from './CompletedResultsList.component';

export default connect(
    (st) => ({
        answers: quizAnswersSelector(st),
    }),
    {}
)(CompletedResultsList);
