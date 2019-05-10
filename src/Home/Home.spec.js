import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Home} from './Home';

configure({ adapter: new Adapter() });
it('1. Renders Home component without crashing', () => {
  const context = {
    title: "test"
  }
  const location = {
    math: '',
    params: ''
  }
  shallow(<Home location={location} context={context}/>);
});
