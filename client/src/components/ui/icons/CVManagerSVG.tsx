import React from "react";
import PropTypes from "prop-types";

function CVManagerSVG({ className, fillColor = "currentColor" }) {
  return (
    <svg className={`${className}`} fill={`${fillColor}`} viewBox="0 0 24 24">
      <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
      <path d="M8,12V14H16V12H8M8,16V18H13V16H8Z" />
    </svg>
  );
}

CVManagerSVG.propTypes = {
  className: PropTypes.string,
  fillColor: PropTypes.string,
};

export default CVManagerSVG;
