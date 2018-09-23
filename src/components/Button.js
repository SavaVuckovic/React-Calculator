import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ name, wide }) => (
  <button className={`btn ${wide ? 'wide' : ''}`}>
    {name}
  </button>
);

Button.propTypes = {
  name: PropTypes.string
};

export default Button;