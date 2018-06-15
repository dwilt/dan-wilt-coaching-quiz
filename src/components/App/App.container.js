import { connect } from 'react-redux';

import { stateSelector } from 'src/selectors';

import App from './App.component';

export default connect((st) => ({
    state: stateSelector(st),
}))(App);
