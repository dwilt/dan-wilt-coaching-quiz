import React, { PureComponent } from "react";

import { QuizQuestion, QuizProgressIndicator } from "components";

import PropTypes from "prop-types";

import "./Quiz.css";

export default class Quiz extends PureComponent {
    static propTypes = {
        question: PropTypes.object.isRequired,
    };

    handleOnSubmit = (e) => {
        console.log(`form submitted`, e);
    };

    render() {
        const { question } = this.props;

        return (
            <form onSubmit={this.handleOnSubmit} className={`Quiz`}>
                <div className={`Quiz__progress-indicator`}>
                    <QuizProgressIndicator />
                </div>
                <QuizQuestion key={question.id} {...question} />
            </form>
        );
    }
}
