import React, { useState } from "react";
import AuthHeader from "./AuthHeader";
import SignupSection from "./SignupSection";
import LoginSection from "./LoginSection";
import PropTypes from "prop-types";
import LanguageSelector from "./LanguageSelector";

function AuthForm({ formVisibility }) {
  const [existsUser, setExistsUser] = useState(true);

  function signupBtnToggle(){
    setExistsUser(!existsUser);
  }

  return (
    <div className={"fixed inset-0 flex items-center justify-center z-50 "}>
      <div className="w-full max-w-4xl mx-auto shadow-2xl rounded-3xl md:w-[90%] lg:w-[80%] xl:w-[70%] bg-white plus-jakarta-sans-font ">
        <div className="flex flex-col ">
          <AuthHeader formVisibility={formVisibility}/>
          <div className="flex flex-col md:flex-row justify-between mt-6 md:mt-12">
            <SignupSection existsUser={existsUser} signupBtnToggle={signupBtnToggle}/>
            <div className="border-t border-gray-200 my-6 md:border-t-0 md:border-l md:h-auto md:mx-2"></div>
            <LoginSection existsUser={existsUser}/>
          </div>
          <LanguageSelector />
        </div>
      </div>
    </div>
  );
}

AuthForm.propTypes = {
  formVisibility: PropTypes.func,
}

export default AuthForm;
