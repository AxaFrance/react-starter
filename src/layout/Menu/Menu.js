import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { NavBar, NavBarItem } from '@axa-fr/react-toolkit-all';

import './Menu.scss';

export default ({ location }) => (
  <NavBar positionInit={-1} onClick={() => {}} isVisible>
    <NavBarItem
      classModifier={classNames({
        active: location && location.pathname === '/',
      })}
      actionElt={
        <Link className="af-nav__link" to="/">
          Accueil
        </Link>
      }
    />
  </NavBar>
);
