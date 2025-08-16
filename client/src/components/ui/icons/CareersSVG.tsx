import React from "react";
import PropTypes from "prop-types";

function CareersSVG({ className, fillColor = "currentColor" }) {
  return (
    <svg className={`${className}`} fill={`${fillColor}`} viewBox="0 0 24 24">
      <path d="M10,2H14A2,2 0 0,1 16,4V6H20A2,2 0 0,1 22,8V19A2,2 0 0,1 20,21H4A2,2 0 0,1 2,19V8A2,2 0 0,1 4,6H8V4A2,2 0 0,1 10,2M14,6V4H10V6H14M4,8V19H20V8H4Z" />
    </svg>
  );
}

CareersSVG.propTypes = {
  className: PropTypes.string,
  fillColor: PropTypes.string,
};

export default CareersSVG;
