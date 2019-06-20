import React from 'react';
import logo from '@axa-fr/react-toolkit-core/dist/assets/logo-axa.svg';
import { Header, Name, User } from '@axa-fr/react-toolkit-all';
import './Header.scss';

export default () => (
  <Header>
    <Name
      title="Starter kit"
      subtitle="A little project as a demo for all our tools"
      img={logo}
      alt="Logo"
      onClick={() => {}}
    />
    <User name="John Doe" href="#" profile="Inspecteur" onClick={() => {}} />
  </Header>
);
