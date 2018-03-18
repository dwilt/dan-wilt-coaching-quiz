import React, { PureComponent } from 'react';

import PropTypes from 'prop-types';

import {
    questions,
} from 'questions';

import './CompletedResultsList.css';

export default class CompletedResultsList extends PureComponent {
    static propTypes = {
        answers: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.string.isRequired,
            selectedAnswer: PropTypes.number.isRequired,
        })).isRequired,
    };

    render() {
        const { answers } = this.props;

        return (
            <ol className={`CompletedResultsList`}>
                {answers.map((answer, i) => {
                    const { question } = questions.find(q => q.id === answer.id);

                    return (
                        <li key={answer.id}>
                            <p className={`CompletedResultsList__question-title`}>{`${i + 1}. ${question}`}</p>
                        </li>
                    );
                })}
            </ol>
        );
    }
}
