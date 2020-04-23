import React from 'react';
import { render } from '@testing-library/react';
import { StaticRouter } from 'react-router-dom';
import { Context } from 'context/Context';

import App from './App';

const wrapper = ({ children }) => (
  <StaticRouter context={{}}>
    <Context.Provider value={{ context: { title: 'Titre Accueil' } }}>
      {children}
    </Context.Provider>
  </StaticRouter>
);

it('1. Renders Menu component without crashing', () => {
  const { asFragment } = render(<App oidcEnabled={false} />, { wrapper });
  expect(asFragment()).toMatchSnapshot();
});
