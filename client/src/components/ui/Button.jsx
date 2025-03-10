import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Button({ label, onClick, to, className, type = "button" }) {
  if (to) {
    return (
      <Link to={to} className={`btn plus-jakarta-sans-font ${className}`}>
        {label}
      </Link>
    );
  }
  return (
    <button
      type={type}
      className={`btn plus-jakarta-sans-font ${className}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

Button.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func,
  to: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.string,
};

export default Button;
