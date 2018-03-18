import React, { Component } from "react";
import "./App.css";

import PropTypes from "prop-types";

import { Quiz, Completed } from "components";

class App extends Component {
    static propTypes = {
        state: PropTypes.string.isRequired,
    };

    render() {
        const { state } = this.props;

        let content = <div />;

        switch (state) {
            case `completed`:
                content = <Completed />;
                break;

            case `quiz`:
                content = <Quiz />;
                break;

            default:
                content = <div />;
        }

        return <div className={`App`}>{content}</div>;
    }
}

export default App;
