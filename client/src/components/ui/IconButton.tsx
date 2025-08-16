import React from "react";
import Button from "./Button";
import PropTypes from "prop-types";

function IconButton({
  label,
  icon,
  SVG,
  onClick,
  href = "",
  pClassName = "",
  iconClassName = "",
  buttonClassName = "",
}) {
  return (
    <Button
      className={`flex items-center ${buttonClassName}`}
      onClick={onClick}
      href={href}
      label={
        <>
          {icon ? (
            <img className={iconClassName} src={icon} />
          ) : (
            <SVG className={iconClassName} />
          )}
          <p className={pClassName}>{label}</p>
        </>
      }
    />
  );
}

IconButton.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func,
  href: PropTypes.string,
  pClassName: PropTypes.string,
  iconClassName: PropTypes.string,
  buttonClassName: PropTypes.string,
  icon: PropTypes.string,
  SVG: PropTypes.elementType,
};

export default IconButton;
