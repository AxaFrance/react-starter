import React from 'react';
import { configure, shallow } from 'enzyme';
import { Home } from './Home';

it('1. Renders Home component without crashing', () => {
  const context = {
    title: 'test',
  };
  const location = {
    math: '',
    params: '',
  };
  shallow(<Home location={location} context={context} title="Accueil" />);
});
