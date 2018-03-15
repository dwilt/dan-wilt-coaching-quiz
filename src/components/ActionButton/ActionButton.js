import React, { Component } from "react";

import { ActivityIndicator } from "components";

import PropTypes from "prop-types";

import classNames from "classnames";

class ActionButton extends Component {
    static propTypes = {
        disabled: PropTypes.bool.isRequired,
        isLoading: PropTypes.bool.isRequired,
        type: PropTypes.oneOf([`button`, `submit`]).isRequired,
        onClick: PropTypes.func,
        children: PropTypes.string.isRequired,
    };

    static defaultProps = {
        type: `button`,
        disabled: false,
        isLoading: false,
        children: `Link Text`,
    };

    render() {
        const { onClick, children, isLoading, disabled, type } = this.props;

        const innerContent = isLoading ? (
            <div className={`ActionButton-loading`}>
                <ActivityIndicator />
            </div>
        ) : (
            children
        );

        const buttonClasses = classNames(`btn`, {
            disabled,
        });

        return (
            <button
                className={buttonClasses}
                type={type}
                disabled={disabled}
                onClick={onClick}
            >
                {innerContent}
            </button>
        );
    }
}

export default ActionButton;
