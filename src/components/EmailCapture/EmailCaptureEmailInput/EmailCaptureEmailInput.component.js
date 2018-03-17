import React, { PureComponent } from "react";

import PropTypes from "prop-types";

import { TextInput } from "components";

import "./EmailCaptureEmailInput.css";

export default class EmailCaptureEmailInput extends PureComponent {
    static propTypes = {
        value: PropTypes.string.isRequired,
        onChange: PropTypes.func.isRequired,
    };

    render() {
        return (
            <TextInput
                {...this.props}
                id={`email-input`}
                placeholder={`Email Address`}
                autoFocus={true}
            />
        );
    }
}
