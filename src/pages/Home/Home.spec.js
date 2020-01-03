import React from 'react';
import { render } from '@testing-library/react';
import { HomeComponent } from './Home';

it('1. Renders Home component without crashing', () => {
  const { asFragment } = render(
    <HomeComponent title="Accueil" subtitle="Sous titre" />
  );
  expect(asFragment()).toMatchSnapshot();
});
