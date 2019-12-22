import React from 'react';
import { useLocation } from 'react-router-dom';
import { Menu } from './Menu';

const EnhancedMenu = () => {
  const location = useLocation();
  return <Menu location={location} />;
};

export default EnhancedMenu;
