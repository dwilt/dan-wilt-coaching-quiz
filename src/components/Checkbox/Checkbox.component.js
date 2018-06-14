import React, { PureComponent } from 'react';

import PropTypes from 'prop-types';

import './Checkbox.css';

const greenCheckmark = require('./check.svg');

export default class Checkbox extends PureComponent {
    static propTypes = {
        onChange: PropTypes.func.isRequired,
        label: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
        checked: PropTypes.bool.isRequired,
    };

    static defaultProps = {
        checked: false,
    };

    handleOnChange = ({ target: { checked } }) => {
        const { onChange } = this.props;

        onChange(checked);
    };

    render() {
        const { id, checked, label } = this.props;

        return (
            <label htmlFor={id} className={'Checkbox__container'}>
                <div className={'Checkbox__input-container'}>
                    <input
                        type={'checkbox'}
                        className={'visuallyhidden'}
                        id={id}
                        onChange={this.handleOnChange}
                        checked={checked}
                    />
                    {checked && (
                        <img
                            className={'Checkbox__check'}
                            src={greenCheckmark}
                            alt={'checked'}
                        />
                    )}
                </div>
                <div className={'Checkbox_label'}>{label}</div>
            </label>
        );
    }
}
