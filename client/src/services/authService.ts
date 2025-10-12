import axios from "axios";
import { NavigateFunction } from "react-router-dom";

export interface AuthFormData {
  fullName?: string;
  email: string;
  password: string;
  confirmPassword?: string;
}

export interface Errors {
  fullName?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
}

export const handleAuthSubmit = async (
  formData: AuthFormData,
  existsUser: boolean,
  setResponseMessage: (message: string) => void,
  setOpenSnackbar: (open: boolean) => void,
  setFormData: (data: AuthFormData) => void,
  setErrors: (errors: Errors) => void,
  navigate: NavigateFunction
): Promise<void> => {
  try {
    const endpoint = existsUser
      ? "http://localhost:4000/api/user/login"
      : "http://localhost:4000/api/user/signup";

    const response = await axios.post(
      endpoint,
      existsUser
        ? { email: formData.email, password: formData.password }
        : {
            email: formData.email,
            fullName: formData.fullName,
            password: formData.password,
          }
    );

    console.log("Response from server:", response.data);

    localStorage.setItem("token", response.data.token);
    setResponseMessage(response.data.message);
    setOpenSnackbar(true);
    setTimeout(() => {
      navigate(`/dashboard`);
    }, 1500);

    setFormData({ fullName: "", email: "", password: "", confirmPassword: "" });
    setErrors({ fullName: "", email: "", password: "", confirmPassword: "" });
  } catch (error: any) {
    console.log("Error during form submission:", error.response);

    if (error.response) {
      const status = error.response.status;
      const errorData = error.response.data;

      if (errorData.errorType === 'email') {
        setErrors({ email: errorData.message });
      } else if (errorData.errorType === 'password') {
        setErrors({ password: errorData.message });
      }
      else if (errorData.message) {
        setErrors({ email: errorData.message });
      }
    } else {
      setErrors({ email: "An error occurred. Please try again." });
    }
  }
};

export const handleAuthFormValidation = (
  formData: AuthFormData,
  setErrors: (errors: Errors) => void,
  existsUser: boolean
): boolean => {
  const { fullName, email, password, confirmPassword } = formData;
  let isVaild = true;
  const newErrors: Errors = {};

  if (!fullName && !existsUser) {
    isVaild = false;
    newErrors.fullName = "Full name is required";
  }

  if (!email) {
    isVaild = false;
    newErrors.email = "Email is required";
  } else if (
    !/^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/.test(email)
  ) {
    isVaild = false;
    newErrors.email = "Invalid email format";
  }

  if (!password) {
    isVaild = false;
    newErrors.password = "Password is required";
  } else if (!/^(?!\s)(\S{8,})(?!\s)$/.test(password)) {
    isVaild = false;
    newErrors.password =
      "Password must be at least 8 characters long and without spaces";
  }

  if (!existsUser && !confirmPassword) {
    isVaild = false;
    newErrors.confirmPassword = "Confirm password is required";
  } else if (!existsUser && password !== confirmPassword) {
    isVaild = false;
    newErrors.confirmPassword = "Passwords do not match";
  }

  setErrors(newErrors);
  return isVaild;
};
