import React, { PureComponent } from 'react';

import PropTypes from 'prop-types';

import {
    QuizQuestion,
    QuizProgressIndicator,
    NameCapture,
    EmailCapture,
} from 'src/components';

import { questions } from 'src/questions';

import './Quiz.css';

export default class Quiz extends PureComponent {
    static propTypes = {
        state: PropTypes.string.isRequired,
        onSubmit: PropTypes.func.isRequired,
        quizComplete: PropTypes.bool.isRequired,
    };

    handleOnSubmit = (e) => {
        const { onSubmit, quizComplete, history } = this.props;

        e.preventDefault();

        if (!quizComplete) {
            return false;
        } else {
            onSubmit(history);
        }
    };

    render() {
        const { state } = this.props;

        let content = <div />;

        switch (state) {
            case 'nameCapture':
                content = <NameCapture />;
                break;

            case 'emailCapture':
                content = <EmailCapture />;
                break;

            case 'question':
                content = (
                    <div>
                        <div className={'Quiz__progress-indicator'}>
                            <QuizProgressIndicator />
                        </div>
                        {questions.map((question, i) => (
                            <QuizQuestion
                                questionNumber={i + 1}
                                key={question.id}
                                question={question}
                            />
                        ))}
                    </div>
                );
                break;

            default:
                content = <div />;
        }

        return (
            <form onSubmit={this.handleOnSubmit} className={'Quiz'}>
                <h1 className={'Quiz__title'}>Javascript Quiz</h1>
                <div className={'Quiz__content-container'}>{content}</div>
            </form>
        );
    }
}
