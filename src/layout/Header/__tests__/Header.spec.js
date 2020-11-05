import React from 'react';
import { render } from '@testing-library/react';
import Header from '../Header';

it('1. Renders Header component without crashing', () => {
  const { asFragment } = render(<Header userName="Jean Pascal" />);
  expect(asFragment()).toMatchSnapshot();
});
