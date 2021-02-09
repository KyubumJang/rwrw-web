import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/HomePage';
import LettersPage from './pages/LettersPage';
import LettersReadPage from './pages/LetterReadPage';

const Router: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/letters" component={LettersPage} />
      <Route exact path="/letter-read/:id" component={LettersReadPage} />
      <Route path="/">404 not found</Route>
    </Switch>
  );
};

export default Router;
