import { connect } from 'react-redux';

import EmailCapture from './EmailCapture.component';

import { submitQuizAction as onSubmit } from 'src/store/quiz/quiz.actions';

export default connect(null, {
    onSubmit,
})(EmailCapture);
