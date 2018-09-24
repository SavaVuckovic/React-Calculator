import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ name, wide, clickHandler }) => (
  <button 
    className={`btn ${wide ? 'wide' : ''}`}
    onClick={() => clickHandler(name)}
  >
    {name}
  </button>
);

Button.propTypes = {
  name: PropTypes.string,
  wide: PropTypes.bool,
  clickHandler: PropTypes.func
};

export default Button;