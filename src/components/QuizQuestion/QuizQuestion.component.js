import React, { PureComponent } from "react";

import Highlight from "react-highlight";

import Markdown from "react-remarkable";

import { QuestionAnswer } from "components";

import "highlight.js/styles/github-gist.css";

import PropTypes from "prop-types";

import "./QuizQuestion.css";

export default class QuizQuestion extends PureComponent {
    static propTypes = {
        id: PropTypes.string.isRequired,
        codeFigure: PropTypes.string,
        question: PropTypes.string.isRequired,
        answers: PropTypes.array.isRequired,
        incorrectFeedback: PropTypes.node,
    };

    render() {
        const { codeFigure, question, answers } = this.props;

        return (
            <form className={`QuizQuestion`}>
                {codeFigure && (
                    <div className={`QuizQuestion__code-figure`}>
                        <Highlight className={`javascript`}>
                            {codeFigure}
                        </Highlight>
                    </div>
                )}
                <div className={`QuizQuestion__question`}>
                    <Markdown>{question}</Markdown>
                </div>
                <ol className={`QuizQuestion__answers-list`}>
                    {answers.map((answer = {}, i) => {
                        return (
                            <li key={i}>
                                <QuestionAnswer {...answer} />
                            </li>
                        );
                    })}
                </ol>
            </form>
        );
    }
}
