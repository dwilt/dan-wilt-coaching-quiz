import React, { PureComponent } from "react";

import PropTypes from "prop-types";

import "./TextInput.css";

export default class TextInput extends PureComponent {
    static propTypes = {
        onChange: PropTypes.func.isRequired,
        placeholder: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
    };

    static defaultProps = {
        type: `text`,
    };

    handleOnChange = ({ target: { value } }) => {
        const { onChange } = this.props;

        onChange(value);
    };

    render() {
        const { placeholder, id, ...rest } = this.props;

        return (
            <div className={`TextInput__container`}>
                <label className={`visuallyhidden`} htmlFor={id}>
                    {placeholder}
                </label>
                <input
                    className={`TextInput`}
                    {...rest}
                    id={id}
                    onChange={this.handleOnChange}
                />
            </div>
        );
    }
}
