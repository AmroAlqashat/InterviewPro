import React from "react";
import Logo from "../ui/Logo";
import PropTypes from "prop-types";
import xIcon from "../../assets/x.png";

function AuthHeader({ formVisibility }) {
  return (
    <div className="flex flex-col text-center items-center gap-2 mt-6 px-4">
      <button className="self-end cursor-pointer " onClick={formVisibility}>
        <img className="h-4 mr-2 md:mr-6 mb-2" src={xIcon} alt="Close" />
      </button>
      <Logo />
      <p className="text-sm md:text-base px-4">Trak your progress, And access previous interiew sessions</p>
    </div>
  );
}

AuthHeader.propTypes = {
  formVisibility: PropTypes.func,
}

export default AuthHeader;
