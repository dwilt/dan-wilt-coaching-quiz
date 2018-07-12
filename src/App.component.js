import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';

import {
    Quiz,
    Completed,
    Landing,
    NameCapture,
    EmailCapture,
} from 'src/components';

class App extends Component {
    render() {
        return (
            <Router basename={'/quiz'}>
                <div className={'App'}>
                    <Switch>
                        <Route exact path={'/'} component={Landing} />
                        <Route path={'/name'} component={NameCapture} />
                        <Route path={'/questions'} component={Quiz} />
                        <Route path={'/email'} component={EmailCapture} />
                        <Route path={'/completed'} component={Completed} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
