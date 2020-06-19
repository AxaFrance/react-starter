/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Title } from '@axa-fr/react-toolkit-all';

import Menu from 'layout/Menu';
import NotFound from 'pages/NotFound';
import ServerError from 'pages/ServerError';

import routes from './routes.conf';

const GenericLayout = ({ route }) => (
  <>
    <Menu />
    <Title title={route.titlebar.title} subtitle={route.titlebar.subtitle} />
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
        <Route key={route.name} exact path={route.path}>
          <GenericLayout route={route} />
        </Route>
      ))}
      <Route exact path="/serverError">
        <ServerError />
      </Route>
      <Route component={NotFound} />
    </Switch>
  );
};

export default Routes;
