import React from 'react';
import { shallow } from 'enzyme';
import Error from './Error';

it('1. Renders Error component without crashing', () => {
  shallow(<Error />);
});
