import { connect } from 'react-redux';

import { quizNameSelector } from 'src/selectors';

import { submitNameAction as onClick } from 'src/store/quiz/quiz.actions';

import NameCaptureContinueButton from './NameCaptureContinueButton.component';

export default connect(
    (st) => ({
        name: quizNameSelector(st),
    }),
    {
        onClick,
    }
)(NameCaptureContinueButton);
