import React from 'react';
import PropTypes from 'prop-types';
import logo from '@axa-fr/react-toolkit-core/dist/assets/logo-axa.svg';
import { Header, Name, User } from '@axa-fr/react-toolkit-all';
import './Header.scss';

const HeaderComponent = ({ userName }) => (
  <Header>
    <Name
      title="Starter kit"
      subtitle="A little project as a demo for all our tools"
      img={logo}
      alt="Logo"
    />
    <User name={userName} href="#" profile="Inspecteur" />
  </Header>
);

HeaderComponent.propTypes = {
  userName: PropTypes.string.isRequired,
};

export default HeaderComponent;
