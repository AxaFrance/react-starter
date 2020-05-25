import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { NavBar, NavBarItem } from '@axa-fr/react-toolkit-all';

import './Menu.scss';

export const Menu = ({ location }) => (
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
    <NavBarItem
      classModifier={classNames({
        active: location && location.pathname === '/dashboard',
      })}
      actionElt={
        <Link className="af-nav__link" to="/dashboard">
          Dashboard
        </Link>
      }
    />
  </NavBar>
);

const propTypes = {
  location: PropTypes.object.isRequired,
};

Menu.propTypes = propTypes;
