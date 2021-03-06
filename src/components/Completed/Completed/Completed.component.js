import React, { PureComponent } from 'react';

import { CompletedHeader, Results } from 'src/components';

import './Completed.css';

export default class Completed extends PureComponent {
    render() {
        return (
            <div className={'Completed'}>
                <CompletedHeader />
                <Results />
            </div>
        );
    }
}
