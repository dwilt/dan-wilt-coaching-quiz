import { connect } from 'react-redux';

import {quizAnswersSelector} from 'selectors';


import CompletedResultsList from './CompletedResultsList.component';

export default connect((st) => ({
    answers: quizAnswersSelector(st)
}), {})(CompletedResultsList);
