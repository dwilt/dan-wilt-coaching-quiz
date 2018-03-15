import React, { PureComponent } from "react";

import Highlight from "react-highlight";

import Markdown from "react-remarkable";

import PropTypes from "prop-types";

import "./QuestionAnswer.css";
import classNames from "classnames";

const letterMap = {
    1: `a`,
    2: `b`,
    3: `c`,
    4: `d`,
};

export default class QuestionAnswer extends PureComponent {
    static propTypes = {
        questionId: PropTypes.string.isRequired,
        answerNumber: PropTypes.number.isRequired,
        selectedAnswer: PropTypes.number,
        text: PropTypes.string.isRequired,
        onChange: PropTypes.func.isRequired,
    };

    static defaultProps = {
        type: `markdown`,
    };

    handleOnChange = () => {
        const { onChange, answerNumber } = this.props;

        onChange(answerNumber);
    };

    render() {
        const {
            type,
            text,
            questionId,
            answerNumber,
            selectedAnswer,
        } = this.props;

        const answerIsSelected = answerNumber === selectedAnswer;
        const codeAnswer = type === `code`;

        const textEl = codeAnswer ? (
            <Highlight className={`javascript`}>{text}</Highlight>
        ) : (
            <Markdown>{text}</Markdown>
        );

        const radioId = `${questionId}-${answerNumber}`;

        const containerClasses = classNames(`QuestionAnswer`, {
            [`--selected`]: answerIsSelected,
        });

        const questionNumberClasses = classNames(
            `QuestionAnswer-question-number`,
            {
                [`--selected`]: answerIsSelected,
            }
        );

        return (
            <label htmlFor={radioId} className={containerClasses}>
                <span className={questionNumberClasses}>
                    {letterMap[answerNumber]}
                </span>
                <input
                    className={`visuallyhidden`}
                    value={questionId}
                    checked={answerIsSelected}
                    onChange={this.handleOnChange}
                    type={`radio`}
                    name={questionId}
                    id={radioId}
                />
                <div className={`QuestionAnswer__text`}>{textEl}</div>
            </label>
        );
    }
}
