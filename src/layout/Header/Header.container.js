import React from 'react';
import { useReactOidc } from '@axa-fr/react-oidc-context';

import Header from './Header';

const EnhancedHeader = () => {
  const { oidcUser } = useReactOidc();
  const userName =
    oidcUser && oidcUser.profile
      ? oidcUser.profile.name
      : 'Utilisateur non connecté';
  return <Header userName={userName} />;
};

export default EnhancedHeader;
