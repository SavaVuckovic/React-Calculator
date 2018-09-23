import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ number }) => (
  <div className="display">
    {number}
  </div>
);

Display.defaultProps = {
  number: '0'
};

Display.propTypes = {
  number: PropTypes.string
};

export default Display;