import React, { Component } from 'react';
import './App.css';

import {
    AssessmentQuiz
} from 'components';

class App extends Component {
    render() {
        return (
            <div className={`App`}>
                <AssessmentQuiz/>
            </div>
        );
    }
}

export default App;
