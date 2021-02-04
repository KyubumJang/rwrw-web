import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';

const Router: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/">404 not found</Route>
    </Switch>
  );
};

export default Router;
