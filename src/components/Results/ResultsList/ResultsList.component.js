import React, { PureComponent } from 'react';

import PropTypes from 'prop-types';

import {
    questions,
} from 'questions';

import './ResultsList.css';

export default class ResultsList extends PureComponent {
    static propTypes = {
        answers: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.string.isRequired,
            selectedAnswer: PropTypes.number.isRequired,
        })).isRequired,
    };

    render() {
        const { answers } = this.props;

        return (
            <ol className={`ResultsList`}>
                {answers.map((answer, i) => {
                    const { question } = questions.find(q => q.id === answer.id);

                    return (
                        <li key={answer.id}>
                            <p className={`ResultsList__question-title`}>{`${i + 1}. ${question}`}</p>
                        </li>
                    );
                })}
            </ol>
        );
    }
}
