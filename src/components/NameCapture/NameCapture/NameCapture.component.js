import React, { PureComponent } from "react";

import { NameCaptureNameInput, NameCaptureContinueButton } from "components";

import "./NameCapture.css";

export default class NameCapture extends PureComponent {
    render() {
        return (
            <div className={`NameCapture`}>
                <p
                    className={`NameCapture__question`}
                >What's your first name?</p>
                <div className={`NameCapture_wrapper`}>
                    <NameCaptureNameInput />
                    <div className={`NameCapture_continue-button`}>
                        <NameCaptureContinueButton />
                    </div>
                </div>
            </div>
        );
    }
}
