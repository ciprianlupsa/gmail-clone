import { Router, Route, Switch } from 'react-router-dom';
import React from 'react';

import { useSelector } from 'react-redux';

import MainLayout from './layouts/MainLayout';
import { createBrowserHistory as history } from 'history';
import Home from './pages/Home';
import ViewEmail from './pages/ViewEmail';
import NewEmail from './components/NewEmail/NewEmail';
import GlobalFeedback from './components/GlobalFeedback/GlobalFeedback';

import AuthRoute from './layouts/AuthRoute';
import Login from './pages/Login';

const App: React.FC = () => {
  return (
    <>
      <Router history={history({})}>
        <Switch>
          <AuthRoute exact path="/" component={MainLayout(Home)} />
        </Switch>
        <Switch>
          <AuthRoute exact path="/mail" component={MainLayout(ViewEmail)} />
        </Switch>
        <Switch>
          <Route exact path="/login" component={Login} />
        </Switch>
      </Router>

      <NewEmail />
      <GlobalFeedback />
    </>
  );
};

export default App;
