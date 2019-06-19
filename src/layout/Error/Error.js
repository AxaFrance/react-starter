import React from 'react';
import './Error.scss';

export const Error = () => (
  <>
    <div className="container af-container--notfound">
      <h1 className="af-notfound__title">
        <div className="af-notfound__title-covernumber">
          <span className="af-notfound__title-number">Err</span>
        </div>
      </h1>
      <p className="af-notfound__message">
        The page you are looking for has a problem!
      </p>
    </div>
  </>
);
