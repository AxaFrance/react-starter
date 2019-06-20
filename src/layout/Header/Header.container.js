import React from 'react';
import { withRouter } from 'react-router-dom';
import HeaderApp from './Header';

const EnhancedHeader = props => {
  return <HeaderApp />;
};

export default withRouter(EnhancedHeader);
