import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';
import Menu from './Menu';

configure({ adapter: new Adapter() });

const location = {
  pathname: '/whatever',
};

const context = {
  contract: {
    numContrat: {
      value: 23012,
    },
  },
};

it('1. Renders Menu component without crashing', () => {
  shallow(<Menu location={location} context={context} />);
});
