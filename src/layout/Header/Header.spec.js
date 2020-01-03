import React from 'react';
import { render } from '@testing-library/react';
import { HeaderApp } from './Header';

it('1. Renders Header component without crashing', () => {
  const { asFragment } = render(<HeaderApp title="test" />);
  expect(asFragment()).toMatchSnapshot();
});
