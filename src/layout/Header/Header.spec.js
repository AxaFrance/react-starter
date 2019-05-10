import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

it('1. Renders Header component without crashing', () => {
  shallow(<Header />);
});
