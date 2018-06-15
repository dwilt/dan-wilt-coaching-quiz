import { connect } from 'react-redux';

import { quizSelectedAnswerSelector } from 'src/selectors';

import {
    setSelectedAnswerAction as onChange,
    submitAnswerAction as onEnterPress,
} from 'src/store/quiz/quiz.actions';

import QuestionAnswer from './QuestionAnswer.component';

export default connect(
    (st) => ({
        selectedAnswer: quizSelectedAnswerSelector(st),
    }),
    {
        onChange,
        onEnterPress,
    }
)(QuestionAnswer);
