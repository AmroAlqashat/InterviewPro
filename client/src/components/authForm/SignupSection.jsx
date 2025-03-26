import React from "react";
import PropTypes from "prop-types";
import IconButton from "../ui/IconButton";
import googleIcon from "../../assets/googleIcon.png";
import facebookIcon from "../../assets/facebookIcon.png";
import emailIcon from "../../assets/emailIcon.png";
import axios from 'axios';

function SignupSection({ signupBtnToggle, existsUser }) {
  
  return (
    <div className="flex flex-col items-center gap-4 w-full px-6 md:w-[50%] mt-4 md:mt-8">
      <h1 className="font-semibold text-lg mb-1">Sign up</h1>
      <IconButton
        divClassName="sign-up-btn-div w-full"
        icon={googleIcon}
        label="Continue with Google"
      />
      <IconButton
        divClassName="sign-up-btn-div w-full"
        icon={facebookIcon}
        label="Continue with Facebook"
      />
      <IconButton
        divClassName="sign-up-btn-div w-full"
        icon={emailIcon}
        label={existsUser ? "Sign up with email" : "Log in with email"}
        onClick={signupBtnToggle}
      />
      <p className="text-gray-600 text-xs md:text-[0.72rem] w-full md:w-[82%] px-2">
        By signing up, you agree to the{" "}
        <button className="underline">Terms of Service</button> and acknowledge
        you have read our <button className="underline">Privacy policy.</button>
      </p>
    </div>
  );
}

SignupSection.propTypes = {
  signupBtnToggle: PropTypes.func,
  existsUser: PropTypes.bool,
}

export default SignupSection;
