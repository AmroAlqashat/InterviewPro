import React from "react";
import PropTypes from "prop-types";
import IconButton from "../ui/IconButton";
import googleIcon from "../../assets/googleIcon.png";
import facebookIcon from "../../assets/facebookIcon.png";
import emailIcon from "../../assets/emailIcon.png";

function SignupSection({ handleGoogleSignup, handleFacebookSignup, signupBtnToggle, existsUser }) {
  const signupButtons = [
    { icon: googleIcon, label: "Continue with Google", onClick: handleGoogleSignup },
    { icon: facebookIcon, label: "Continue with Facebook", onClick: handleFacebookSignup  },
    {
      icon: emailIcon,
      label: existsUser ? "Sign up with email" : "Log in with email",
      onClick: signupBtnToggle ,
    },
  ];

  return (
    <div className="flex flex-col items-center gap-4 w-full px-6 md:w-[50%] mt-4 md:mt-8">
      <h1 className="font-semibold text-lg mb-1">Sign up</h1>
      {signupButtons.map((btn, index) => (
        <IconButton
          key={index}
          buttonClassName="sign-up-btn"
          iconClassName="h-4.5"
          pClassName="px-2.5"
          icon={btn.icon}
          label={btn.label}
          onClick={btn.onClick}
        />
      ))}
      <p className="text-gray-600 text-xs md:text-[0.72rem] w-full md:w-[82%] px-2">
        By signing up, you agree to the{" "}
        <button className="underline">Terms of Service</button> and acknowledge
        you have read our <button className="underline">Privacy policy.</button>
      </p>
    </div>
  );
}

SignupSection.propTypes = {
  handleGoogleSignup: PropTypes.func,
  handleFacebookSignup: PropTypes.func,
  signupBtnToggle: PropTypes.func,
  existsUser: PropTypes.bool,
};

export default SignupSection;
