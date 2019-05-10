import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from 'Home';
import PageNotFound from 'layout/NotFound';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route component={PageNotFound} />
    </Switch>
  );
};

export default Routes;
