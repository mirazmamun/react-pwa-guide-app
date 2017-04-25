import React from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
import asyncComponent from './AsyncComponent';
import AppShell from './AppShell';

const Greeting = asyncComponent(() => {
  return import(/* webpackChunkName: "greeting" */ './Greeting')
    .then(module => module.default);
});

const Users = asyncComponent(() => {
  return import(/* webpackChunkName: "users" */ './Users')
    .then(module => module.default);
});

const Notification = asyncComponent(() => {
  return import(/* webpackChunkName: "notification" */ './Notification')
    .then(module => module.default);
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
