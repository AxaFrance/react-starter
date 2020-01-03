import React, { useContext } from 'react';
import { Context } from 'context/Context';
import { HomeComponent } from './Home';

const EnhancedHome = ({ title, subtitle }) => {
  const { context } = useContext(Context);
  return <HomeComponent title={title} subtitle={subtitle} context={context} />;
};

export default EnhancedHome;
