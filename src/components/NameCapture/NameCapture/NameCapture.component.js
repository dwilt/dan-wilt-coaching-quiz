import React, { PureComponent } from 'react';

import {
    NameCaptureNameInput,
    NameCaptureContinueButton,
    SubscribeToMailingListCheckbox,
} from 'src/components';

import './NameCapture.css';

export default class NameCapture extends PureComponent {
    render() {
        return (
            <div className={'NameCapture'}>
                <div className={'NameCapture__wrapper'}>
                    <p className={'NameCapture__title'}>
                        {'What\'s your first name?'}
                    </p>
                    <div className={'NameCapture__form-wrapper'}>
                        <NameCaptureNameInput />
                        <div className={'NameCapture__continue-button'}>
                            <NameCaptureContinueButton />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
