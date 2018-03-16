import React, { Component } from "react";
import "./App.css";

import PropTypes from "prop-types";

import { Quiz, NameCapture } from "components";

class App extends Component {
    static propTypes = {
        state: PropTypes.string.isRequired,
    };

    render() {
        const { state } = this.props;

        let content = <div />;

        switch (state) {
            case `nameCapture`:
                content = <NameCapture />;
                break;

            case `question`:
                content = <Quiz />;
                break;

            default:
                content = <div />;
                break;
        }

        return (
            <div className={`App`}>
                <h1 className={`App__title`}>{`Javascript Quiz`}</h1>
                {content}
            </div>
        );
    }
}

export default App;
