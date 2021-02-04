import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/HomePage';
import Login from './pages/LoginPage';

const Router: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      {/* <Route path="/">404 not found</Route> */}
      {/* kyubumJ dev loginpage */}
      <Route exact path="/login" component={Login} />
    </Switch>
  );
};

export default Router;
