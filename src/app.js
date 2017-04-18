import React, {Component} from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
import AppShell from './components/AppShell';

class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/" component={AppShell}/>
      </Router>
    );
  }
}

export default App;
