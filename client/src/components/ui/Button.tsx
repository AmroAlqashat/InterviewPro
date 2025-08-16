import React from "react";
import { Link } from "react-router-dom";

interface ButtonProps {
  children?: string;
  label?: string;
  onClick?: () => void;
  to?: string;
  className?: string;
  type?: "button" | "submit" | "reset";
}

function Button({ children, label, onClick, to, className = "", type = "button" }: ButtonProps): React.ReactElement {

  const buttonText = children || label;

  if (to) {
    return (
      <Link to={to} className={`btn plus-jakarta-sans-font ${className}`}>
        {buttonText}
      </Link>
    );
  }
  return (
    <button
      type={type}
      className={`btn plus-jakarta-sans-font ${className}`}
      onClick={onClick}
    >
      {buttonText}
    </button>
  );
}

export default Button;
