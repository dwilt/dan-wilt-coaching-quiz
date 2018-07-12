// @flow
import * as React from 'react';

import classnames from 'classnames';

import PropTypes from 'prop-types';

import './Checkbox.css';

const greenCheckmark = require('../../images/check.svg');

type CheckboxProps = {
    onChange: Function,
    label: string,
    id: string,
    checked: boolean,
};

type CheckboxState = {
    focused: boolean,
};

export default class Checkbox extends React.PureComponent<
    CheckboxProps,
    CheckboxState
    > {
    static propTypes = {
        onChange: PropTypes.func.isRequired,
        label: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
        checked: PropTypes.bool.isRequired,
    };

    static defaultProps = {
        checked: false,
    };

    state = {
        focused: false,
    };

    handleOnChange = ({
        target: { checked },
    }: SyntheticInputEvent<HTMLInputElement>) => {
        const { onChange } = this.props;

        onChange(checked);
    };

    onFocus = () => {
        this.setState({
            focused: true,
        });
    };

    onBlur = () => {
        this.setState({
            focused: false,
        });
    };

    render() {
        const { id, checked, label } = this.props;
        const { focused } = this.state;

        const inputContainerStyles = classnames('Checkbox__input-container', {
            focused,
        });

        return (
            <label htmlFor={id} className={'Checkbox__container'}>
                <div className={inputContainerStyles}>
                    <input
                        type={'checkbox'}
                        className={'visuallyhidden'}
                        id={id}
                        onFocus={this.onFocus}
                        onBlur={this.onBlur}
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
