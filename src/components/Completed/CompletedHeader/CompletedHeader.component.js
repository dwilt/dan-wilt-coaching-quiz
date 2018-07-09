import React, { PureComponent } from 'react';

import PropTypes from 'prop-types';

import { ratings, getRating } from 'firebaseFunctions/services/scoring.service';

import './CompletedHeader.css';

export default class CompletedHeader extends PureComponent {
    static propTypes = {
        name: PropTypes.string.isRequired,
        score: PropTypes.number.isRequired,
    };

    render() {
        const { name, score } = this.props;

        let subtitle = null;
        let feedback = null;
        let text = null;

        const rating = getRating(score);

        switch (rating) {
            case ratings.EXPERT: {
                subtitle =
                    'Perfect! You’re ready to start building mobile apps.';
                text = (
                    <div>
                        <p>
                            Based on your score, it looks like you’ve mastered
                            the Javascript fundamentals necessary to dive right
                            into learning to build native mobile applications.
                        </p>
                        <p>
                            Be sure to check your inbox in a few minutes because
                            I’m sending you some next steps you should take to
                            get started right.
                        </p>
                        <p>
                            For now, scroll down to review your results and
                            click below to book a free 15-minute coaching
                            session with me so I can provide personalized
                            recommendations to help you start learning to
                            develop mobile apps right away.
                        </p>
                    </div>
                );
                break;
            }

            case ratings.PROFICIENT: {
                subtitle = 'Good Job! You’re proficient in Javascript.';
                text = (
                    <div>
                        <p>
                            Based on your score, it looks like you have a decent
                            understanding of Javascript. With a bit of help,
                            you’ll be ready to learn to build native mobile
                            applications.
                        </p>
                        <p>
                            Be sure to check your inbox in a few minutes because
                            I’m sending you some next steps you can take to
                            advance your Javascript skills and get started
                            learning to build mobile apps.
                        </p>
                        <p>
                            For now, scroll down to review your results and
                            click below to book a free 15-minute coaching
                            session with me so I can provide personalized
                            recommendations to help you master Javascript
                            fundamentals and start learning to develop mobile
                            apps right away.
                        </p>
                    </div>
                );
                break;
            }

            default: {
                subtitle =
                    'You’ve got a bit of learning to do before you’re ready to build mobile apps';
                text = (
                    <div>
                        <p>
                            Based on your score, it looks like you’ll want to
                            focus on mastering Javascript fundamentals before
                            you start learning to build native mobile
                            applications
                        </p>
                        <p>
                            Be sure to check your inbox in a few minutes because
                            I’m sending you a few next steps you can take to
                            master the Javascript fundamentals necessary to
                            start learning to build mobile apps.
                        </p>
                        <p>
                            For now, scroll down to review your results and
                            click below to book a free 15-minute coaching
                            session with me so I can provide personalized
                            recommendations to help you fast-track the process
                            of mastering Javascript fundamentals.
                        </p>
                    </div>
                );
                break;
            }
        }

        return (
            <header className={'CompletedHeader'}>
                <div className={'CompletedHeader__header-content'}>
                    <h1
                        className={'CompletedHeader__title'}
                    >{`Congratulations ${name}, you're finished!`}</h1>
                    <h2 className={'CompletedHeader__subtitle'}>{subtitle}</h2>
                    <p dangerouslySetInnerHTML={{ __html: feedback }} />
                    {text}
                    <a
                        href={'https://calendly.com/danwiltcoaching/15min'}
                        className={'CompletedHeader__schedule-call-button btn'}
                    >
                        Schedule my free coaching call
                    </a>
                </div>
            </header>
        );
    }
}
