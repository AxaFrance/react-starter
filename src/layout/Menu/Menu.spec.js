import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';
import Menu from './Menu';

configure({ adapter: new Adapter() });

const location = {
  pathname: '/whatever',
};

it('1. Renders Menu component without crashing', () => {
  shallow(<Menu location={location} />);
});
