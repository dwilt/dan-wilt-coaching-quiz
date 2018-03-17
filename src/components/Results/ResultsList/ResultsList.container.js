import { connect } from 'react-redux';

import {quizAnswersSelector} from 'selectors';


import ResultsList from './ResultsList.component';

export default connect((st) => ({
    answers: quizAnswersSelector(st)
}), {})(ResultsList);
