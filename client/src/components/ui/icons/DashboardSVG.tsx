import React from "react";
import PropTypes from "prop-types";

function DashbaordSVG({ className, fillColor = "currentColor" }) {
  return (
    <svg className={`${className}`} fill={`${fillColor}`} viewBox="0 0 24 24">
      <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z" />
    </svg>
  );
}

DashbaordSVG.propTypes = {
  className: PropTypes.string,
  fillColor: PropTypes.string,
};

export default DashbaordSVG;
