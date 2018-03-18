import { connect } from 'react-redux';

import {
    quizNameSelector,
} from 'selectors';


import CompletedHeader from './CompletedHeader.component';

export default connect((st) => ({
    name: quizNameSelector(st),
}), {})(CompletedHeader);
