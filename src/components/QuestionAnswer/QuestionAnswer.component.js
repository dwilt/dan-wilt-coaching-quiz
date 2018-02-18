import React, { PureComponent } from "react";

import Highlight from "react-highlight";

import Markdown from "react-remarkable";

import PropTypes from "prop-types";

import "./QuestionAnswer.css";

export default class QuestionAnswer extends PureComponent {
    static propTypes = {
        text: PropTypes.string.isRequired,
        type: PropTypes.oneOf([`code`, `markdown`]),
    };

    static defaultProps = {
        type: `markdown`,
    };

    render() {
        const { type, text } = this.props;

        return type === `code` ? (
            <Highlight className={`javascript`}>{text}</Highlight>
        ) : (
            <Markdown>{text}</Markdown>
        );
    }
}
