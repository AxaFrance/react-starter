import React from 'react';
import { render } from '@testing-library/react';
import Dashboard from './Dashboard';

it('1. Renders Dashboard component without crashing', () => {
  const { asFragment } = render(<Dashboard />);
  expect(asFragment()).toMatchSnapshot();
});
