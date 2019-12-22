/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Titlebar } from 'layout/Titlebar';
import { Menu } from 'layout/Menu';
import { NotFound } from 'layout/NotFound';
import { ServerError } from 'layout/ServerError';

import routes from './routes.conf';

const Routes = () => {
  return (
    <Switch>
      {routes.map(route => (
        <Route
          key={route.name}
          exact
          path={route.path}
          render={props => (
            <>
              <Menu location={props.location} />
              <Titlebar
                title={route.titlebar.title}
                subtitle={route.titlebar.subtitle}
              />
              <route.component
                {...props}
                title={route.titlebar.title}
                subtitle={route.titlebar.subtitle}
              />
            </>
          )}
        />
      ))}
      <Route exact path="/serverError" component={ServerError} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default Routes;
