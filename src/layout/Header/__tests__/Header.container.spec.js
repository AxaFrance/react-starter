import React from 'react';
import { AuthenticationContext } from '@axa-fr/react-oidc-context';
import { render, screen } from '@testing-library/react';
import HeaderContainer from '../Header.container';

describe('Header container tests suite', () => {
  const user = {
    profile: {
      name: 'Jean DUPOND',
    },
  };

  const getWrapper = oidcUser => ({ children }) => (
    <AuthenticationContext.Provider value={{ oidcUser }}>
      {children}
    </AuthenticationContext.Provider>
  );

  it('Should display user when is filled', () => {
    render(<HeaderContainer />, { wrapper: getWrapper(user) });
    expect(screen.getByText(/Jean DUPOND/)).toBeInTheDocument();
  });

  it('Should display Utilisateur non connecté when is not filled', () => {
    render(<HeaderContainer />, { wrapper: getWrapper() });
    expect(screen.getByText(/Utilisateur non connecté/)).toBeInTheDocument();
  });
});
