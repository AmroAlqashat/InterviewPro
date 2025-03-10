import React from "react";
import PropTypes from "prop-types";
import Button from "../ui/Button";
import Input from "../ui/Input";

function LoginSection({ isSignup }) {
  return (
    <div className="flex flex-col items-center gap-4 w-full px-6 md:w-[50%] mt-2 md:mt-8">
      <h1 className="font-semibold text-lg mb-1">
        {isSignup ? "Sign up" : "Log in"}
      </h1>
      {isSignup && (
        <Input
          className="authInput"
          type="text"
          label="Full name"
          isPassword={false}
        />
      )}
      <Input
        className="authInput"
        type="email"
        label="Email address"
        isPassword={false}
      />
      <Input
        className="authInput"
        type="password"
        label="Password"
        isPassword={true}
        isSignup={isSignup}
      />
      {isSignup && (
        <div className="w-full flex flex-col items-center">
          <Input
            className="authInput"
            type="password"
            label="Confirm Password"
            isPassword={true}
            isSignup={isSignup}
          />
        </div>
      )}
      <Button
        className="bg-blue-500 text-white px-8 md:px-12 !py-2.5 !text-base md:!text-lg w-full md:w-auto hover:opacity-85 active:opacity-75"
        label={isSignup ? "Sign up" : "Log in"}
      />
    </div>
  );
}

LoginSection.propTypes = {
  isSignup: PropTypes.bool,
};

export default LoginSection;
