import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Home } from 'Home';
import { NotFound } from 'layout/NotFound';
import { ServerError } from 'layout/ServerError';

const Routes = () => {
  return (
    <Switch>
      <Route
        exact
        path="/"
        render={props => <Home {...props} title="Accueil" />}
      />
      <Route exact path="/serverError" component={ServerError} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default Routes;
