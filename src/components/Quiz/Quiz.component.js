import React, { PureComponent } from 'react';

import PropTypes from 'prop-types';

import {
    QuizQuestion
} from 'components';

import './Quiz.css';

export default class Quiz extends PureComponent {
    static propTypes = {
        children: PropTypes.array,
    };

    render() {
        const {children} = this.props;

        return (
            <div className={`Quiz`}>
                {children}
            </div>
        );
    }
}
