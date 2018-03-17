import React, { PureComponent } from "react";

import PropTypes from "prop-types";

import {
    ResultsList
} from "components";

import "./Results.css";

export default class Results extends PureComponent {
    static propTypes = {
        name: PropTypes.string.isRequired,
    };

    render() {
        const { name, answers } = this.props;

        return (
            <div className={`Results`}>
                <header className={`Results__header`}>
                    <div className={`Results__header-content`}>
                        <h1 className={`Results__title`}>{`Congratulations ${name}, you're finished!`}</h1>
                        <h2 className={`Results__coding-strength`}>
                            {`Your Coding Strength is: `}
                            <strong>{`Javascript Proficiency`}</strong>
                        </h2>
                        <p>
                            Based on your responses, you have solid
                            understanding of the foundational JavaScript
                            essentials you need to learn mobile app development.
                            Consider getting started with a training program
                            that offers opportunities for practical, real world
                            experience building apps.
                        </p>

                        <p>
                            You can review your results below, and we also sent
                            a recap email with your responses to your inbox. If
                            you want me to review your assessment results and
                            provide completely personalized recommendations to
                            make sure you get started right, click below to book
                            a <strong>{`free 15-minute coaching session`}</strong>{` `}
                            with me!
                        </p>
                        <a
                            href={`#`}
                            className={`Results__schedule-call-button btn`}
                        >
                            Schedule a free coaching call
                        </a>
                    </div>
                </header>
                <h2>{`Results`}</h2>
                <ResultsList/>
            </div>
        );
    }
}
