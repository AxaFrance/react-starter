import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';
import { Titlebar } from './Titlebar';

configure({ adapter: new Adapter() });

it('1. Renders Titlebar component without crashing', () => {
  shallow(<Titlebar title="test" />);
});
