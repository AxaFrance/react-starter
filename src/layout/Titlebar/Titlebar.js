import React from 'react';
import './Titlebar.scss';

export default ({ title }) => (
  <div className="af-title-bar">
    <div className="af-title-bar__wrapper container-fluid container">
      <h1 className="af-title-bar__title">{title}</h1>
    </div>
  </div>
);
