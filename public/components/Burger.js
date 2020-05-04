import React from 'react';

const Burger = props => (
  <button className="burger-toggle" onClick={props.click}>
    <div className="line1"></div>
    <div className="line2"></div>
    <div className="line3"></div>
  </button>
);

export default Burger;