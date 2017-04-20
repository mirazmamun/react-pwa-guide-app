import React from 'react';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import asyncComponent from './AsyncComponent';
import AppShell from './AppShell';
import Greeting from './Greeting';

const Users = asyncComponent(() => {
  return import('./Users').then(module => module.default);
});

const Notification = asyncComponent(() => {
  return import('./Notification').then(module => module.default);
});

class App extends React.Component {
  render() {
    return (
      <Router>
        <AppShell>
          <div>
            <Route exact path="/" component={Greeting}/>
            <Route path="/users/:id?" component={Users}/>
            <Route path="/notification" component={Notification}/>
          </div>
        </AppShell>
      </Router>
    );
  }
}

export default App;
