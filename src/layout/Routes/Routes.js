/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Titlebar from 'components/Titlebar';
import Menu from 'layout/Menu';
import NotFound from 'pages/NotFound';
import ServerError from 'pages/ServerError';

import routes from './routes.conf';

const GenericLayout = ({ route }) => (
  <>
    <Menu />
    <Titlebar title={route.titlebar.title} subtitle={route.titlebar.subtitle} />
    <route.component
      title={route.titlebar.title}
      subtitle={route.titlebar.subtitle}
    />
  </>
);

const Routes = () => {
  return (
    <Switch>
      {routes.map(route => (
        <Route
          key={route.name}
          exact
          path={route.path}
          render={() => <GenericLayout route={route} />}
        />
      ))}
      <Route exact path="/serverError" component={ServerError} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default Routes;
