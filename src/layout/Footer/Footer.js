import React from 'react';
import logo from '@axa-fr/react-toolkit-core/dist/assets/logo-axa.svg';
import { version } from '../../../package.json';
import './Footer.scss';

const FooterApp = () => (
  <footer className="footer">
    <div className="container-fluid container">
      <div className="af-logo">
        <img className="af-logo__brand" src={logo} alt="Logo Axa" />
      </div>
      <div className="af-footer-content">
        <div className="footer__content">
          <div className="footer__base">
            Titre du footer 
            <i>Tous droits réservés</i>
          </div>
          <div className="footer__info">
            <p>Version: {version}</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default FooterApp;
