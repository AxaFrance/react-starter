import React, { useEffect } from 'react';
import { Titlebar } from './Titlebar';

const EnhancedTitlebar = ({ title, subtitle }) => {
  useEffect(() => {}, []);

  return <Titlebar title={title} subtitle={subtitle} />;
};

export default EnhancedTitlebar;
