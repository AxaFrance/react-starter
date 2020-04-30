import React from 'react';
import { shallow } from 'enzyme';
import { Menu } from './Menu';

const location = {
  pathname: '/whatever',
};

it('1. Renders Menu component without crashing', () => {
  shallow(<Menu location={location} />);
});
