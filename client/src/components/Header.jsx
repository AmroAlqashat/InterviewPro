import React from "react";
import Logo from "./ui/Logo";
import Button from "./ui/Button";
import PropTypes from "prop-types";

function Header({ formVisibility }) {
  return (
    <div className="container flex items-center justify-between px-4 my-6 mx-auto">
      <Logo className="w-auto" />

      <div className="hidden lg:flex items-center space-x-4 absolute left-1/2 transform -translate-x-1/2">
        <Button className="btn home-btn" label="Home" to="/" />
        <a
          className="btn hover:text-gray-500 active:text-gray-400 px-4"
          href="#howItWorks"
        >
          How It Works
        </a>
        <a
          className="btn hover:text-gray-500 active:text-gray-400 px-4"
          href="#features"
        >
          Features
        </a>
      </div>

      <div className="flex items-center space-x-4">
        <Button
          className="btn hover:text-gray-500 active:text-gray-400 px-4"
          label="Sign-In"
          to="/signup"
        />
        <Button
          className="btn bg-blue-500 text-gray-100 hover:opacity-80 active:opacity-70 px-4"
          label="Sign-Up"
          onClick={formVisibility}
        />
      </div>
    </div>
  );
}

Header.propTypes = {
  formVisibility: PropTypes.func,
};

export default Header;
