import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from 'layout/Header';
import Routes from 'layout/Routes';
import Footer from 'layout/Footer';

import './App.scss';

const App = () => {
  return (
    <Router>
      <Header />
      <div className="app">
        <Routes />
      </div>
      <Footer />
    </Router>
  );
};

export default App;
