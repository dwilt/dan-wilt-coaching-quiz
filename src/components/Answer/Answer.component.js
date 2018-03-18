import React, { PureComponent } from "react";

import Highlight from "react-highlight";

import Markdown from "react-remarkable";

import "highlight.js/styles/github-gist.css";

import PropTypes from "prop-types";

import "./Answer.css";

import classNames from "classnames";

const letterMap = {
    1: `a`,
    2: `b`,
    3: `c`,
    4: `d`,
};

export default class Answer extends PureComponent {
    static propTypes = {
        questionId: PropTypes.string,
        answerNumber: PropTypes.number.isRequired,
        selectedAnswer: PropTypes.number,
        text: PropTypes.string.isRequired,
        answerType: PropTypes.string.isRequired,
        theme: PropTypes.oneOf([`none`, `green`, `red`, `blue-outline`])
            .isRequired,
        onChange: PropTypes.func,
    };

    static defaultProps = {
        theme: `none`,
        answerType: `markdown`,
    };

    handleOnChange = () => {
        const { onChange, answerNumber } = this.props;

        onChange(answerNumber);
    };

    render() {
        const {
            onChange,
            answerType,
            text,
            questionId,
            answerNumber,
            selectedAnswer,
            theme,
        } = this.props;

        const answerIsSelected = answerNumber === selectedAnswer;

        const textEl =
            answerType === `code` ? (
                <Highlight className={`javascript`}>{text}</Highlight>
            ) : (
                <Markdown>{text}</Markdown>
            );

        const radioId = `${questionId}-${answerNumber}`;

        const containerClasses = classNames(`Answer`, `--theme-${theme}`);

        const content = (
            <div className={containerClasses}>
                <span className={`Answer__question-number`}>
                    {letterMap[answerNumber]}
                </span>
                {onChange && (
                    <input
                        className={`visuallyhidden`}
                        value={questionId}
                        checked={answerIsSelected}
                        onChange={this.handleOnChange}
                        type={`radio`}
                        name={questionId}
                        id={radioId}
                    />
                )}
                <div className={`Answer__text`}>{textEl}</div>
            </div>
        );

        return onChange ? <label htmlFor={radioId}>{content}</label> : content;
    }
}
