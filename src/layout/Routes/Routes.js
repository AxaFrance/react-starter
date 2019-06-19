import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from 'Home';
import NotFound from 'layout/NotFound';
import Error from 'layout/Error';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/error" component={Error} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default Routes;