import React, { PureComponent } from "react";

import isEmptyObject from "is-empty-object";

import { QuizQuestion } from "components";

import PropTypes from "prop-types";

import "./Quiz.css";

export default class Quiz extends PureComponent {
    static propTypes = {
        questions: PropTypes.object,
    };

    render() {
        const { questions } = this.props;

        return questions && !isEmptyObject(questions) ? (
            <div className={`Quiz`}>
                {Object.values(questions).map((question) => (
                    <div key={question.id}>
                        <QuizQuestion {...question} />
                    </div>
                ))}
            </div>
        ) : null;
    }
}
