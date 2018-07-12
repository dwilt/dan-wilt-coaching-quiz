import * as React from 'react';

import { LandingGetStartedButton } from 'src/components';

import './Landing.css';

export default class Landing extends React.PureComponent {
    render() {
        return (
            <div className={'Landing'}>
                <div className={'Landing__main-content'}>
                    <h1 className={'Landing__title'}>
                        Do You Have What It Takes To Develop Mobile Apps?
                    </h1>
                    <p>
                        Note: This assessment is for developers who already have
                        a basic understanding of HTML, CSS and Javascript. To
                        get the most accurate results, use your current
                        knowledge and skills to answer each question to the best
                        of your ability, and avoid looking things up online.
                    </p>
                    <p>
                        Don't worry about getting every answer correct. The
                        questions range in subject matter and difficulty to
                        accurately assess your readiness to successfully learn
                        mobile app development and determine the right next
                        steps for you should take to get started.
                    </p>
                    <div className={'Landing__start-button'}>
                        <LandingGetStartedButton />
                    </div>
                </div>
                <div className={'Landing__image'}>
                    <img
                        className={'Landing__devices'}
                        aria-hidden={'true'}
                        src={
                            'https://www.danwiltcoaching.com/wp-content/themes/danwiltcoaching/img/app.svg'
                        }
                        alt={'iPhone and iPad'}
                    />
                </div>
            </div>
        );
    }
}
