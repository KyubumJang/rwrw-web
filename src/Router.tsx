import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Letter from './pages/Letter';

const Router: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/letter" component={Letter} />
      <Route path="/">404 not found</Route>
    </Switch>
  );
};

export default Router;
