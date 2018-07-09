import React, { PureComponent } from 'react';

import PropTypes from 'prop-types';

import { Checkbox } from 'src/components';

export default class SubscribeToMailingListCheckbox extends PureComponent {
    static propTypes = {
        onChange: PropTypes.func.isRequired,
        checked: PropTypes.bool.isRequired,
    };

    render() {
        return (
            <Checkbox
                {...this.props}
                id={'mailing-list-checkbox'}
                label={
                    'Yes, I would like to receive periodic updates from Dan Wilt Coaching.'
                }
            />
        );
    }
}
