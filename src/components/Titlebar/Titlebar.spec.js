import React from 'react';
import { render } from '@testing-library/react';
import { Titlebar } from './Titlebar';

it('1. Renders Titlebar component without crashing', () => {
  const { asFragment } = render(<Titlebar title="test" />);
  expect(asFragment()).toMatchSnapshot();
});
