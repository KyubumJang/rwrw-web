import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/HomePage';
import Login from './pages/LoginPage';

const Router: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route path="/">404 not found</Route>
    </Switch>
  );
};

export default Router;
