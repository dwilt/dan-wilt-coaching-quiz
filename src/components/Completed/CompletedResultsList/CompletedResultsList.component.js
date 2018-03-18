import React, { PureComponent } from "react";

import PropTypes from "prop-types";

import classNames from "classnames";

import Markdown from "react-remarkable";

import { questions } from "questions";

import { Question, Answer, CodeFigure } from "components";

import "./CompletedResultsList.css";

const greenCheckmark = require(`./green-checkmark.svg`);

const redX = require(`./red-x.svg`);

export default class CompletedResultsList extends PureComponent {
    static propTypes = {
        answers: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.string.isRequired,
                selectedAnswer: PropTypes.number.isRequired,
            })
        ).isRequired,
    };

    render() {
        const { answers } = this.props;

        return (
            <ol className={`CompletedResultsList`}>
                {answers.map(({ selectedAnswer, id }, i) => {
                    const {
                        question,
                        correctAnswer,
                        answers: questionAnswers,
                        answerType,
                        codeFigure,
                        incorrectFeedback,
                    } = questions.find((q) => q.id === id);

                    const correctAnswerText =
                        questionAnswers[correctAnswer - 1];
                    const userAnswerText = questionAnswers[selectedAnswer - 1];
                    const answeredCorrectly = correctAnswer === selectedAnswer;

                    const answersWrapperClasses = classNames(
                        `CompletedResultsList__answers-wrapper`,
                        {
                            [`--no-grid`]: !!codeFigure,
                        }
                    );

                    return (
                        <li key={id}>
                            <div
                                className={`CompletedResultsList__container`}
                                style={{
                                    backgroundImage: `url(${
                                        answeredCorrectly
                                            ? greenCheckmark
                                            : redX
                                    })`,
                                }}
                            >
                                <h2
                                    className={`CompletedResultsList__question-title`}
                                >
                                    <Question
                                        question={`${i + 1}. ${question}`}
                                    />
                                </h2>
                                <div
                                    className={`CompletedResultsList__content`}
                                >
                                    {codeFigure && (
                                        <div
                                            className={`CompletedResultsList__code-figure`}
                                        >
                                            <CodeFigure
                                                codeFigure={codeFigure}
                                            />
                                        </div>
                                    )}
                                    <div
                                        className={`CompletedResultsList__answers`}
                                    >
                                        <div className={answersWrapperClasses}>
                                            <div
                                                className={`CompletedResultsList__correct-answer`}
                                            >
                                                <p
                                                    className={`CompletedResultsList__answer-title`}
                                                >
                                                    Correct Answer
                                                </p>
                                                <Answer
                                                    answerType={answerType}
                                                    answerNumber={correctAnswer}
                                                    text={correctAnswerText}
                                                    theme={`green`}
                                                />
                                            </div>
                                            <div
                                                className={`CompletedResultsList__your-answer`}
                                            >
                                                <p
                                                    className={`CompletedResultsList__answer-title`}
                                                >
                                                    Your Answer
                                                </p>
                                                <Answer
                                                    answerType={answerType}
                                                    answerNumber={
                                                        selectedAnswer
                                                    }
                                                    text={userAnswerText}
                                                    theme={
                                                        answeredCorrectly
                                                            ? `green`
                                                            : `red`
                                                    }
                                                />
                                            </div>
                                        </div>
                                        {!answeredCorrectly && (
                                            <div
                                                className={`CompletedResultsList__feedback`}
                                            >
                                                <h3
                                                    className={`CompletedResultsList__feedback-title`}
                                                >
                                                    Feedback
                                                </h3>
                                                <div>
                                                    <Markdown>
                                                        {incorrectFeedback}
                                                    </Markdown>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </li>
                    );
                })}
            </ol>
        );
    }
}
