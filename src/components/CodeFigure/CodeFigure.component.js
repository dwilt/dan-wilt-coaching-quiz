import React, { PureComponent } from 'react';

import Highlight from 'react-highlight';

import PropTypes from 'prop-types';

import './CodeFigure.css';

export default class CodeFigure extends PureComponent {
    static propTypes = {
        codeFigure: PropTypes.string.isRequired,
    };

    render() {
        const { codeFigure } = this.props;

        return (
            <div className={'CodeFigure'}>
                <Highlight className={'javascript'}>{codeFigure}</Highlight>
            </div>
        );
    }
}
