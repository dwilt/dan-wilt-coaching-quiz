import React, { PureComponent } from "react";

import { QuestionAnswer, ActionButton, CodeFigure, Question } from "components";

import PropTypes from "prop-types";

import "./QuizQuestion.css";

import classNames from "classnames";

export default class QuizQuestion extends PureComponent {
    static propTypes = {
        questionNumber: PropTypes.number.isRequired,
        onSubmit: PropTypes.func.isRequired,
        selectedAnswer: PropTypes.number,
        userAnswers: PropTypes.array.isRequired,
        name: PropTypes.string.isRequired,
        question: PropTypes.shape({
            id: PropTypes.string.isRequired,
            codeFigure: PropTypes.string,
            answerType: PropTypes.oneOf([`code`, `markdown`]),
            question: PropTypes.string.isRequired,
            answers: PropTypes.array.isRequired,
            incorrectFeedback: PropTypes.node,
        }).isRequired,
    };

    handleOnSubmit = () => {
        const { selectedAnswer, question: { id }, onSubmit } = this.props;

        onSubmit({ id, selectedAnswer });
    };

    render() {
        const {
            question: { question, codeFigure, answers, id, answerType },
            questionNumber,
            selectedAnswer,
            userAnswers,
            name,
        } = this.props;

        const active = userAnswers.length + 1 === questionNumber;

        const questionClasses = classNames(`QuizQuestion`, {
            [`visuallyhidden`]: !active,
        });

        const answerListClasses = classNames(`QuizQuestion__answers-list`, {
            [`--grid`]: answerType === `code`,
        });

        return (
            <div className={questionClasses}>
                {questionNumber === 1 && (
                    <p
                        className={`QuizQuestion__introduction`}
                    >{`Thanks ${name}! Let's get started...`}</p>
                )}
                <fieldset>
                    <legend className={`visuallyhidden`}>{question}</legend>
                    <div className={`QuizQuestion__question`}>
                        <Question question={question} />
                    </div>
                    {codeFigure && (
                        <div className={`QuizQuestion__code-figure`}>
                            <CodeFigure codeFigure={codeFigure} />
                        </div>
                    )}
                    <div className={`QuizQuestion__answers-list-wrapper`}>
                        <ol className={answerListClasses}>
                            {answers.map((answer = {}, i) => (
                                <li key={i}>
                                    <QuestionAnswer
                                        text={answer}
                                        answerType={answerType}
                                        questionId={id}
                                        answerNumber={i + 1}
                                    />
                                </li>
                            ))}
                        </ol>
                    </div>
                    <div className={`QuizQuestion__submit-button-wrapper`}>
                        <ActionButton
                            type={`button`}
                            disabled={typeof selectedAnswer !== `number`}
                            onClick={this.handleOnSubmit}
                        >
                            {`Continue`}
                        </ActionButton>
                    </div>
                </fieldset>
            </div>
        );
    }
}
