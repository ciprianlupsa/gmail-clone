import { Router, Route, Switch } from 'react-router-dom';
import React from 'react';
import MainLayout from './layouts/MainLayout';
import { createBrowserHistory as history } from 'history';
import Dashboard from './pages/Dashboard';
import ViewEmail from './pages/ViewEmail';
import ViewEmailList from './pages/ViewEmailList';

const App: React.FC = () => {
  return (
    <Router history={history({})}>
      <Switch>
        <Route exact path="/" component={MainLayout(Dashboard)} />
      </Switch>
      <Switch>
        <Route exact path="/list" component={MainLayout(ViewEmailList)} />
      </Switch>
      <Switch>
        <Route exact path="/email" component={MainLayout(ViewEmail)} />
      </Switch>
    </Router>
  );
};

export default App;
