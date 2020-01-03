import React from 'react';
import { shallow } from 'enzyme';
import { Titlebar } from './Titlebar';

it('1. Renders Titlebar component without crashing', () => {
  shallow(<Titlebar title="test" />);
});
