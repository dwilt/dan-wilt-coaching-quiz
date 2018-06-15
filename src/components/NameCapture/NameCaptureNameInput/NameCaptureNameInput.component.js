import React, { PureComponent } from 'react';

import PropTypes from 'prop-types';

import { TextInput } from 'src/components';

import './NameCaptureNameInput.css';

export default class NameCaptureNameInput extends PureComponent {
    static propTypes = {
        value: PropTypes.string.isRequired,
        onChange: PropTypes.func.isRequired,
        onEnterPress: PropTypes.func.isRequired,
    };

    render() {
        return (
            <TextInput
                {...this.props}
                id={'name-input'}
                placeholder={'First Name'}
                autoFocus={true}
            />
        );
    }
}
