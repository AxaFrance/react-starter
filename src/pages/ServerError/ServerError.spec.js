import React from 'react';
import { shallow } from 'enzyme';
import ServerError from './ServerError';

it('1. Renders ServerError component without crashing', () => {
  shallow(<ServerError />);
});
