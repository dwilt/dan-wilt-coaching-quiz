import React, { PureComponent } from 'react';

import './ActivityIndicator.css';

export default class ActivityIndicator extends PureComponent {
    render() {
        return (
            <div className={'ispinner ispinner--white ispinner--animating '}>
                <div className={'ispinner__blade'} />
                <div className={'ispinner__blade'} />
                <div className={'ispinner__blade'} />
                <div className={'ispinner__blade'} />
                <div className={'ispinner__blade'} />
                <div className={'ispinner__blade'} />
                <div className={'ispinner__blade'} />
                <div className={'ispinner__blade'} />
                <div className={'ispinner__blade'} />
                <div className={'ispinner__blade'} />
                <div className={'ispinner__blade'} />
                <div className={'ispinner__blade'} />
            </div>
        );
    }
}
