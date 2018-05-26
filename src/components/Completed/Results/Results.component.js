import React, { PureComponent } from "react";

import { CompletedResultsList } from "src/components";

import "./Results.css";

export default class Results extends PureComponent {
    render() {
        return (
            <div>
                <h2 className={`Results__title`}>Quiz Results</h2>
                <CompletedResultsList />
            </div>
        );
    }
}
