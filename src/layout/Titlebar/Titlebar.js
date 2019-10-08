import React from 'react';
import PropTypes from 'prop-types';
import './Titlebar.scss';

export const Titlebar = ({ title, subtitle }) => (
  <div className="af-title-bar">
    <div className="af-title-bar__wrapper container-fluid container">
      <h1 className="af-title-bar__title">
        {title}
        {subtitle && (
          <small className="af-title-bar__subtitle">{subtitle}</small>
        )}
      </h1>
    </div>
  </div>
);

const propTypes = {
  title: PropTypes.string.isRequired,
};

Titlebar.propTypes = propTypes;
