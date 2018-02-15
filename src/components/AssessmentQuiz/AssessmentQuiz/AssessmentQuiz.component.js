import React, { PureComponent } from 'react';

import PropTypes from 'prop-types';

import {
    Quiz,
    VariableDeclarationQuestion,
} from 'components';


export default class AssessmentQuiz extends PureComponent {
    static propTypes = {};

    render() {
        const {} = this.props;

        return (
            <Quiz>
                <VariableDeclarationQuestion/>
            </Quiz>
        );
    }
}
