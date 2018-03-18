import React, { PureComponent } from "react";

import PropTypes from "prop-types";

import bg from "./progress-indicator-bg.svg";

import "./QuizProgressIndicator.css";

export default class QuizProgressIndicator extends PureComponent {
    static propTypes = {
        totalAnswers: PropTypes.number.isRequired,
        totalQuestions: PropTypes.number.isRequired,
    };

    render() {
        const { totalAnswers, totalQuestions } = this.props;

        return (
            <div
                className={`QuizProgressIndicator`}
                style={{ backgroundImage: `url(${bg})` }}
            >
                <p className={`QuizProgressIndicator__wrapper`}>
                    <span className={`visuallyhidden`}>Question number </span>
                    <span className={`QuizProgressIndicator__total-answers`}>
                        {totalAnswers + 1}
                    </span>
                    <span className={`QuizProgressIndicator__slash`} />
                    <span className={`visuallyhidden`}> out of </span>
                    <span className={`QuizProgressIndicator__total-questions`}>
                        {totalQuestions}
                    </span>
                </p>
            </div>
        );
    }
}
