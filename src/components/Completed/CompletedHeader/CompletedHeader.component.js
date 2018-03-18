import React, { PureComponent } from "react";

import PropTypes from "prop-types";

import {} from "components";

import "./CompletedHeader.css";

export default class CompletedHeader extends PureComponent {
    static propTypes = {
        name: PropTypes.string.isRequired,
    };

    render() {
        const { name } = this.props;

        return (
            <header className={`CompletedHeader`}>
                <div className={`CompletedHeader__header-content`}>
                    <h1
                        className={`CompletedHeader__title`}
                    >{`Congratulations ${name}, you're finished!`}</h1>
                    <h2 className={`CompletedHeader__coding-strength`}>
                        {`Your Coding Strength is: `}
                        <strong>Javascript Proficiency</strong>
                    </h2>
                    <p>
                        Based on your responses, you have solid understanding of
                        the foundational JavaScript essentials you need to learn
                        mobile app development. Consider getting started with a
                        training program that offers opportunities for
                        practical, real world experience building apps.
                    </p>

                    <p>
                        You can review your results below, and we also sent a
                        recap email with your responses to your inbox. If you
                        want me to review your assessment results and provide
                        completely personalized recommendations to make sure you
                        get started right, click below to book a{` `}
                        <strong>free 15-minute coaching session</strong>
                        {` `}
                        with me!
                    </p>
                    <a
                        href={`https://calendly.com/danwiltcoaching/15min`}
                        className={`CompletedHeader__schedule-call-button btn`}
                    >
                        Schedule a free coaching call
                    </a>
                </div>
            </header>
        );
    }
}
