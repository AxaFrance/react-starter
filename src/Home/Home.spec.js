import React from 'react';
import { shallow } from 'enzyme';
import { HomeComponent } from './Home';

it('1. Renders Home component without crashing', () => {
  const context = {
    title: 'test',
  };
  const location = {
    math: '',
    params: '',
  };
  shallow(
    <HomeComponent location={location} context={context} title="Accueil" />
  );
});
