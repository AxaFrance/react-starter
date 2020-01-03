import React from 'react';
import { shallow } from 'enzyme';
import NotFound from './NotFound';

it('1. Renders NotFound component without crashing', () => {
  shallow(<NotFound />);
});
