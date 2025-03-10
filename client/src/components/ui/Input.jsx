import React, { useState } from "react";
import PropTypes from "prop-types";
import Button from "./Button";
import showPassword from "../../assets/showPassword.png";
import hidePassword from "../../assets/hidePassword.png";

function Input({
  type = "text",
  placeholder = "",
  value,
  onChange,
  label = "",
  className,
  isPassword,
  isSignup,
}) {
  const [isPasswordPrivate, setPrivacy] = useState(true);

  function handlePasswordChange() {
    isPasswordPrivate ? setPrivacy(false) : setPrivacy(true);
  }

  return (
    <div className="flex flex-col w-[80%] ">
      <label
        className={`text-gray-500 text-sm ${
          isPassword && "flex justify-between"
        }`}
      >
        {label}
        {isPassword && (
          <button
            className="flex items-center text-gray-500 text-sm gap-2 cursor-pointer"
            onClick={handlePasswordChange}
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
        className={`pl-2 ${className}`}
        type={isPassword ? (isPasswordPrivate ? "password" : "text") : type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {isPassword &&
        (isSignup || (
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
  onChange: PropTypes.func,
  label: PropTypes.string,
  isPassword: PropTypes.bool,
  className: PropTypes.string,
  isSignup: PropTypes.bool,
};

export default Input;
