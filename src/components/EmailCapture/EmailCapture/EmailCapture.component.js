import React, { PureComponent } from "react";

import {
    EmailCaptureEmailInput,
    EmailCaptureContinueButton,
} from "src/components";

import "./EmailCapture.css";

export default class EmailCapture extends PureComponent {
    render() {
        return (
            <div className={`EmailCapture`}>
                <div className={`EmailCapture__wrapper`}>
                    <h2 className={`EmailCapture__title`}>
                        {`Ready to find out if you have what it takes to develop
                    mobile apps?`}
                    </h2>
                    <p className={`EmailCapture__description`}>
                        {`Enter your best email address below to access your quiz
                    results:`}
                    </p>
                    <div className={`EmailCapture__form-wrapper`}>
                        <EmailCaptureEmailInput />
                        <div className={`EmailCapture__continue-button`}>
                            <EmailCaptureContinueButton />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
