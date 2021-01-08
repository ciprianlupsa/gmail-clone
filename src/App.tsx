import { Router, Route, Switch } from 'react-router-dom';
import React from 'react';
import MainLayout from './layouts/MainLayout';
import { createBrowserHistory as history } from 'history';
import Home from './pages/Home';
import ViewEmail from './pages/ViewEmail';
import ViewEmailList from './pages/ViewEmailList';
import NewEmail from './components/NewEmail/NewEmail';

const App: React.FC = () => {
  return (
    <>
      <Router history={history({})}>
        <Switch>
          <Route exact path="/" component={MainLayout(Home)} />
        </Switch>
        <Switch>
          <Route exact path="/list" component={MainLayout(ViewEmailList)} />
        </Switch>
        <Switch>
          <Route exact path="/mail" component={MainLayout(ViewEmail)} />
        </Switch>
      </Router>

      <NewEmail />
    </>
  );
};

export default App;
