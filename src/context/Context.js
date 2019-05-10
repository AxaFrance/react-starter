import React, { useReducer } from 'react';
import reducer from './reducer';

const Context = React.createContext();

const initialState = {
  title: 'Titre Accueil',
};

const ContextProvider = ({ children }) => {
  const [context, dispatch] = useReducer(reducer, initialState);
  const value = { context, dispatch };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export { Context, ContextProvider };
