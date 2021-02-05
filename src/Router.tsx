import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../src/components/Header/Header';
import HomePage from './pages/HomePage';
import LetterPage from './pages/LetterPage';

const Router: React.FC = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/letter" component={LetterPage} />
        <Route path="/">404 not found</Route>
      </Switch>
    </>
  );
};

export default Router;
