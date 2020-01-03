import React from 'react';
import PropTypes from 'prop-types';

import './Home.scss';

export const HomeComponent = ({ title, subtitle }) => (
  <div className="home container">
    <h1 className="af-title--content">{title}</h1>
    <h2>{subtitle}</h2>
    <p>
      Donec sollicitudin molestie malesuada. Donec sollicitudin molestie
      malesuada. Donec rutrum congue leo eget malesuada. Vivamus suscipit tortor
      eget felis porttitor volutpat. Sed porttitor lectus nibh. Curabitur arcu
      erat, accumsan id imperdiet et, porttitor at sem. Vivamus magna justo,
      lacinia eget consectetur sed, convallis at tellus. Proin eget tortor
      risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Pellentesque in ipsum id orci porta dapibus.
    </p>

    <p>
      Sed porttitor lectus nibh. Curabitur non nulla sit amet nisl tempus
      convallis quis ac lectus. Mauris blandit aliquet elit, eget tincidunt nibh
      pulvinar a. Sed porttitor lectus nibh. Quisque velit nisi, pretium ut
      lacinia in, elementum id enim. Vivamus magna justo, lacinia eget
      consectetur sed, convallis at tellus. Nulla quis lorem ut libero malesuada
      feugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
      suscipit tortor eget felis porttitor volutpat. Sed porttitor lectus nibh.
    </p>
  </div>
);

const propTypes = {
  subtitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

HomeComponent.propTypes = propTypes;
