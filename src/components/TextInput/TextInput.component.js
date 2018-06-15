import React, { PureComponent } from 'react';

import PropTypes from 'prop-types';

import './TextInput.css';

export default class TextInput extends PureComponent {
    static propTypes = {
        onChange: PropTypes.func.isRequired,
        onEnterPress: PropTypes.func,
        placeholder: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
        autoFocus: PropTypes.bool.isRequired,
    };

    static defaultProps = {
        type: 'text',
        autoFocus: false,
    };

    componentDidMount() {
        const { autoFocus } = this.props;

        if (autoFocus) {
            this.input.focus();
        }
    }

    handleOnChange = ({ target: { value } }) => {
        const { onChange } = this.props;

        onChange(value);
    };

    setInputRef = (ref) => (this.input = ref);

    onKeyPress = ({ key }) => {
        const { onEnterPress } = this.props;

        if (key === 'Enter') {
            onEnterPress();
        }
    };

    render() {
        const { placeholder, id, onEnterPress, ...rest } = this.props;

        return (
            <div className={'TextInput__container'}>
                <label className={'visuallyhidden'} htmlFor={id}>
                    {placeholder}
                </label>
                <input
                    className={'TextInput'}
                    {...rest}
                    id={id}
                    onKeyPress={onEnterPress ? this.onKeyPress : null}
                    onChange={this.handleOnChange}
                    ref={this.setInputRef}
                />
            </div>
        );
    }
}
