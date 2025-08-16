import React, { useState } from "react";
import PropTypes from "prop-types";
import Button from "./Button";
import showPassword from "../../assets/showPassword.png";
import hidePassword from "../../assets/hidePassword.png";

function Input({
  type = "text",
  placeholder = "",
  value,
  name,
  onChange,
  label = "",
  className,
  isPassword,
  existsUser,
  inputError,
  labelClassName,
}) {
  const [isPasswordPrivate, setPrivacy] = useState(true);

  function passwordChangePrivacy() {
    isPasswordPrivate ? setPrivacy(false) : setPrivacy(true);
  }

  return (
    <div className="flex flex-col w-full">
      <label
        className={`${labelClassName} self-center ${inputError ? `text-red-400` : `text-gray-500`} mt-2 text-sm ${
          isPassword && "flex justify-between"
        }`}
      >
        {label}
        {isPassword && (
          <button
            className="flex  text-gray-500 text-sm gap-2 cursor-pointer"
            type="button"
            onClick={passwordChangePrivacy}
          >
            <img
              className="h-5"
              src={isPasswordPrivate ? showPassword : hidePassword}
            />
            <p>{isPasswordPrivate ? "Show" : "Hide"}</p>
          </button>
        )}
      </label>
      <input
        className={`pl-2 border-1 self-center ${inputError ? `border-red-400 focus:ring-red-400` : `border-gray-200 focus:ring-gray-500`} ${className}`}
        type={isPassword ? (isPasswordPrivate ? "password" : "text") : type}
        placeholder={placeholder}
        value={value}
        name={name}
        onChange={onChange}
      />
      {isPassword &&
        (!existsUser || (
          <Button
            className="text-gray-700 underline !text-xs self-end"
            label="Forget your password"
          />
        ))}
    </div>
  );
}

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  label: PropTypes.string,
  isPassword: PropTypes.bool,
  className: PropTypes.string,
  existsUser: PropTypes.bool,
  inputError: PropTypes.bool,
  labelClassName: PropTypes.string,
};

export default Input;
