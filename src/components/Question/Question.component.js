import React, { PureComponent } from "react";

import Markdown from "react-remarkable";

import PropTypes from "prop-types";

import "./Question.css";

export default class Question extends PureComponent {
    static propTypes = {
        question: PropTypes.string.isRequired,
    };

    render() {
        const { question } = this.props;

        return (
            <div className={`Question`} aria-hidden={true}>
                <Markdown>{question}</Markdown>
            </div>
        );
    }
}
