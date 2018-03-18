import React, { PureComponent } from 'react';

import PropTypes from 'prop-types';

import {
    CompletedResultsList
} from 'components';

import './Results.css';

export default class Results extends PureComponent {

    render() {

        return (
            <div>
                <h2 className={`Results__title`}>{`Quiz Results`}</h2>
                <CompletedResultsList/>
            </div>
        );
    }
}
