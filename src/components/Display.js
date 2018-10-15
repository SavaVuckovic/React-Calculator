import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ number }) => (
  <div className="display">
    {number !== null ? number : '0'}
  </div>
);

Display.propTypes = {
  number: PropTypes.string
};

export default Display;