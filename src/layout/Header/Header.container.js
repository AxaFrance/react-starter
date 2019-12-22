import React from 'react';
import { withRouter } from 'react-router-dom';
import { HeaderApp } from './Header';

const EnhancedHeader = () => {
  return <HeaderApp />;
};

export default withRouter(EnhancedHeader);
