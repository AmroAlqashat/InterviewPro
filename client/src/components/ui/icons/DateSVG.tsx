import React from "react";
import PropTypes from "prop-types";

function DateSVG({ className, fillColor = "currentColor" }) {
  return (
    <svg className={`${className}`} fill={`${fillColor}`} viewBox="0 0 20 20">
      <path
        fillRule="evenodd"
        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1 1zM4 7h12v9a1 1 0 01-1 1H5a1 1 0 01-1-1V7z"
        clipRule="evenodd"
      />
    </svg>
  );
}

DateSVG.propTypes = {
  className: PropTypes.string,
  fillColor: PropTypes.string,
};

export default DateSVG;
