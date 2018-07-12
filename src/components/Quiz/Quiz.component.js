import React, { PureComponent } from 'react';

import { QuizQuestion, QuizProgressIndicator, QuizTitle } from 'src/components';

import { questions } from 'src/questions';

import './Quiz.css';

export default class Quiz extends PureComponent {
    render() {
        return (
            <div className={'Quiz'}>
                <QuizTitle />
                <div className={'Quiz__content-container'}>
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
            </div>
        );
    }
}
