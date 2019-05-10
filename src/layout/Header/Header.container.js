import React from 'react';
import { withRouter } from 'react-router-dom';
import { HeaderApp as Header } from './Header';

const EnhancedHeader = props => {
  return <Header />;
};

export default withRouter(EnhancedHeader);
