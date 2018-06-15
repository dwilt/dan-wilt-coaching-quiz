import React, { PureComponent } from 'react';

import PropTypes from 'prop-types';

import { ActionButton } from 'src/components';

export default class NameCaptureContinueButton extends PureComponent {
    static propTypes = {
        onClick: PropTypes.func.isRequired,
        name: PropTypes.string,
    };

    render() {
        const { name } = this.props;

        return (
            <ActionButton {...this.props} disabled={!name.length}>
                Continue
            </ActionButton>
        );
    }
}
