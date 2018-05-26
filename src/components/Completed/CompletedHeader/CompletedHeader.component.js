import React, { PureComponent } from "react";

import PropTypes from "prop-types";

import { ratings, getRating } from "firebaseFunctions/services/scoring.service";

import "./CompletedHeader.css";

export default class CompletedHeader extends PureComponent {
    static propTypes = {
        name: PropTypes.string.isRequired,
        score: PropTypes.number.isRequired,
    };

    render() {
        const { name, score } = this.props;

        let subtitle = null;
        let feedback = null;

        const rating = getRating(score);

        if (rating === ratings.EXPERT) {
            subtitle = `Perfect! You're ready to build mobile apps.`;
            feedback = `With a score like that, you're a great candidate to pick up a tool like <a href="https://facebook.github.io/react-native/">React Native</a> and start building native applications.`;
        } else if (rating === ratings.PROFICIENT) {
            subtitle = `Good Job! You're proficient in Javascript.`;
            feedback = `Although you didn't get a perfect score, you have a decent understanding of the language. With a bit of help, you'd be well on your way to building out mobile applications with a tool like <a href="https://facebook.github.io/react-native/">React Native</a>.`;
        } else {
            subtitle = `You've got a bit of learning to do before you're ready to build mobile apps`;
            feedback = `Having a solid understanding of Javascript is essential to building mobile apps with a tool with a tool like <a href="https://facebook.github.io/react-native/">React Native</a>.`;
        }

        return (
            <header className={`CompletedHeader`}>
                <div className={`CompletedHeader__header-content`}>
                    <h1
                        className={`CompletedHeader__title`}
                    >{`Congratulations ${name}, you're finished!`}</h1>
                    <h2 className={`CompletedHeader__subtitle`}>{subtitle}</h2>
                    <p dangerouslySetInnerHTML={{ __html: feedback }} />
                    <p>
                        You can review your results below. If you want me to
                        review your assessment results and provide completely
                        personalized recommendations to make sure you get
                        started right, click below to book a{` `}
                        <strong>free 15-minute coaching session</strong>
                        {` `}
                        with me!
                    </p>
                    <a
                        href={`https://calendly.com/danwiltcoaching/15min`}
                        className={`CompletedHeader__schedule-call-button btn`}
                    >
                        Schedule my free coaching call
                    </a>
                </div>
            </header>
        );
    }
}
