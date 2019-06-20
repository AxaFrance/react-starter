import React, { useContext } from 'react';
import { Context } from 'context/Context';
import Home from './Home';

const EnhancedHome = props => {
  const { context } = useContext(Context);
  return <Home {...props} context={context} />;
};

export default EnhancedHome;
