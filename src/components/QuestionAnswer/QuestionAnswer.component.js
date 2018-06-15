import React, { PureComponent } from 'react';

import PropTypes from 'prop-types';

import { Answer } from 'src/components';

export default class QuestionAnswer extends PureComponent {
    static propTypes = {
        answerNumber: PropTypes.number.isRequired,
        selectedAnswer: PropTypes.number,
        text: PropTypes.string.isRequired,
        onChange: PropTypes.func.isRequired,
        onEnterPress: PropTypes.func.isRequired,
    };

    render() {
        const { selectedAnswer, answerNumber } = this.props;

        return (
            <Answer
                {...this.props}
                theme={
                    selectedAnswer === answerNumber ? 'blue-outline' : 'none'
                }
            />
        );
    }
}
