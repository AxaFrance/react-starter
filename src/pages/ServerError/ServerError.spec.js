import React from 'react';
import { render } from '@testing-library/react';
import ServerError from './ServerError';

it('1. Renders ServerError component without crashing', () => {
  const { asFragment } = render(<ServerError title="test" />);
  expect(asFragment()).toMatchSnapshot();
});
