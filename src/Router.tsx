import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Letter from './pages/Letter';

const Router: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/letter" component={Letter} />
      <Route path="/">404 not found</Route>
    </Switch>
  );
};

export default Router;
