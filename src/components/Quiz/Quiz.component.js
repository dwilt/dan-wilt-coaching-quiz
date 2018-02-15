import React, { PureComponent } from 'react';

import PropTypes from 'prop-types';

import {
    VariableDeclaration,
} from 'components';

import './Quiz.css';

export default class Quiz extends PureComponent {
    render() {
        return (
            <div className={`Quiz`}>
                <VariableDeclaration/>
            </div>
        );
    }
}
