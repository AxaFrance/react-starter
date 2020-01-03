import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from 'layout/Header';
import Routes from 'layout/Routes';
import Footer from 'layout/Footer';

import './App.scss';
import { Context } from 'context/Context';

const App = () => {
  const context = 'context';
  return (
    <Router>
      <Header />
      <Context.Provider value={context}>
        <div className="app">
          <Routes />
        </div>
      </Context.Provider>
      <Footer />
    </Router>
  );
};

export default App;
