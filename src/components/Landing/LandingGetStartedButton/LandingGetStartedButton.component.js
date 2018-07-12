import * as React from 'react';

import PropTypes from 'prop-types';

import { ActionButton } from 'src/components';

export default class LandingGetStartedButton extends React.PureComponent {
    static propTypes = {
        onClick: PropTypes.func.isRequired,
    };

    render() {
        return <ActionButton {...this.props}>Get Started</ActionButton>;
    }
}
