import React, { PureComponent } from "react";

import Highlight from "react-highlight";

import Markdown from "react-remarkable";

import PropTypes from "prop-types";

import "./QuestionAnswer.css";

export default class QuestionAnswer extends PureComponent {
    static propTypes = {
        questionId: PropTypes.string.isRequired,
        questionNumber: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired,
        type: PropTypes.oneOf([`code`, `markdown`]),
    };

    static defaultProps = {
        type: `markdown`,
    };

    render() {
        const { type, text, questionId, questionNumber } = this.props;

        const textEl = type === `code` ? (
            <Highlight className={`javascript`}>{text}</Highlight>
        ) : (
            <Markdown>{text}</Markdown>
        );

        const radioId = `${questionId}-${questionNumber}`;

        return (
            <div>
                <input type={`radio`} name={questionId} id={radioId}/>
                <label htmlFor={radioId}>
                    {textEl}
                </label>
            </div>
        );
    }
}
