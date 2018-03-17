import React, { PureComponent } from "react";

import Highlight from "react-highlight";

import Markdown from "react-remarkable";

import { QuestionAnswer, ActionButton } from "components";

import "highlight.js/styles/darkula.css";

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
            question: {
                question: questionString,
                codeFigure,
                answers,
                id,
                answerType,
            },
            questionNumber,
            selectedAnswer,
            userAnswers,
            name,
        } = this.props;

        const active = userAnswers.length + 1 === questionNumber;

        const fieldsetClasses = classNames({
            [`visuallyhidden`]: !active,
        });

        const answerListClasses = classNames(`QuizQuestion__answers-list`, {
            [`--grid`]: answerType === `code`,
        });

        return (
            <fieldset className={fieldsetClasses}>
                <div className={`QuizQuestion`}>
                    {questionNumber === 1 && (
                        <p
                            className={`QuizQuestion__introduction`}
                        >{`Thanks ${name}! Let's get started...`}</p>
                    )}
                    <div className={`QuizQuestion__question`}>
                        <Markdown>{questionString}</Markdown>
                    </div>
                    {codeFigure && (
                        <div className={`QuizQuestion__code-figure`}>
                            <Highlight className={`javascript`}>
                                {codeFigure}
                            </Highlight>
                        </div>
                    )}
                    <div className={`QuizQuestion__answers-list-wrapper`}>
                        <ol className={answerListClasses}>
                            {answers.map((answer = {}, i) => (
                                <li key={i}>
                                    <QuestionAnswer
                                        questionId={id}
                                        {...answer}
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
                            Continue
                        </ActionButton>
                    </div>
                </div>
            </fieldset>
        );
    }
}
