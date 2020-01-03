import React from 'react';
import { render } from '@testing-library/react';
import NotFound from './NotFound';

it('1. Renders NotFound component without crashing', () => {
  const { asFragment } = render(<NotFound title="test" />);
  expect(asFragment()).toMatchSnapshot();
});
