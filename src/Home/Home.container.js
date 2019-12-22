import React, { useContext } from 'react';
import { Context } from 'context/Context';
import { HomeComponent } from './Home';

const EnhancedHome = ({ location, title, subtitle }) => {
  const { context } = useContext(Context);
  return (
    <HomeComponent
      location={location}
      title={title}
      subtitle={subtitle}
      context={context}
    />
  );
};

export default EnhancedHome;
