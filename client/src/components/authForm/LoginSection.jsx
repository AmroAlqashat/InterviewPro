import React, { useState } from "react";
import PropTypes from "prop-types";
import Button from "../ui/Button";
import Input from "../ui/Input";
import MySnackbar from "../ui/MySnackbar";
import { handleAuthSubmit, handleAuthFormValidation } from "../../services/authService";
import { useNavigate } from "react-router-dom";

function LoginSection({ existsUser }) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    if (!handleAuthFormValidation(formData, setErrors, existsUser)) return;

    handleAuthSubmit(formData, existsUser, setResponseMessage, setOpenSnackbar, setFormData, setErrors, navigate);
  };

  return (
    <div className="flex flex-col items-center gap-4 w-full px-6 md:w-[50%] mt-2 md:mt-8">
      <h1 className="font-semibold text-lg mb-1">
        {existsUser ? "Log in" : "Sign up"}
      </h1>
      <MySnackbar
        open={openSnackbar}
        onClose={() => setOpenSnackbar(false)}
        message={responseMessage}
      />
      <form
        onSubmit={handleSubmit}
        className="w-full flex flex-col gap-1 items-center"
      >
        {!existsUser && (
          <>
            <Input
              className="authInput"
              type="text"
              label="Full name"
              isPassword={false}
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              inputError={!!errors.fullName}
            />
            <p className="errorLoginMsg">{errors.fullName}</p>
          </>
        )}

        <Input
          className="authInput"
          type="email"
          label="Email address"
          isPassword={false}
          name="email"
          value={formData.email}
          onChange={handleChange}
          inputError={!!errors.email}
        />
        <p className="errorLoginMsg">{errors.email}</p>

        <Input
          className="authInput"
          type="password"
          label="Password"
          isPassword={true}
          name="password"
          value={formData.password}
          onChange={handleChange}
          inputError={!!errors.password}
        />
        <p className="errorLoginMsg">{errors.password}</p>

        {!existsUser && (
          <>
            <Input
              className="authInput"
              type="password"
              label="Confirm Password"
              isPassword={true}
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              inputError={!!errors.confirmPassword}
            />
            <p className="errorLoginMsg">{errors.confirmPassword}</p>
          </>
        )}

        <Button
          type="submit"
          className="bg-blue-500 rounded-4xl text-white mt-4 px-8 md:px-12 py-2.5 !text-base md:!text-lg w-full md:w-auto hover:opacity-85 active:opacity-75"
          label={existsUser ? "Log in" : "Sign up"}
        />
      </form>
    </div>
  );
}

LoginSection.propTypes = {
  existsUser: PropTypes.bool,
};

export default LoginSection;
