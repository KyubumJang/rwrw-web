import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/HomePage';
import LetterReceivePage from './pages/LetterReceivePage';

const Router: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact pah="/LetterReceive" component={LetterReceivePage} />
      <Route path="/">404 not found</Route>
    </Switch>
  );
};

export default Router;
