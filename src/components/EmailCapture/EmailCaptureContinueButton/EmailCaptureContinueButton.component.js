import React, { PureComponent } from 'react';

import PropTypes from 'prop-types';

import { ActionButton } from 'src/components';

export default class EmailCaptureContinueButton extends PureComponent {
    static propTypes = {
        valid: PropTypes.bool.isRequired,
    };

    render() {
        const { valid } = this.props;

        return (
            <ActionButton {...this.props} disabled={!valid} type={'submit'}>
                Continue
            </ActionButton>
        );
    }
}
