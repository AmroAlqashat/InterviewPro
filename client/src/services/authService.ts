import axios from "axios";
import { NavigateFunction } from "react-router-dom";

interface FormData {
  fullName?: string;
  email: string;
  password: string;
  confirmPassword?: string;
}

interface Errors {
  fullName?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
}

export const handleAuthSubmit = async (
  formData: FormData,
  existsUser: boolean,
  setResponseMessage: (message: string) => void,
  setOpenSnackbar: (open: boolean) => void,
  setFormData: (data: FormData) => void,
  setErrors: (errors: Errors) => void,
  navigate: NavigateFunction
): Promise<void> => {
  try {
    const endpoint = existsUser
      ? "http://localhost:5000/api/auth/login"
      : "http://localhost:5000/api/auth/signup";

    const response = await axios.post(
      endpoint,
      existsUser
        ? { email: formData.email, password: formData.password }
        : formData
    );

    localStorage.setItem("token", response.data.token);
    setResponseMessage(response.data.message);
    setOpenSnackbar(true);
    setTimeout(() => {
      navigate(`/dashboard`);
    }, 1500);

    setFormData({ fullName: "", email: "", password: "", confirmPassword: "" });
    setErrors({ fullName: "", email: "", password: "", confirmPassword: "" });
  } catch (error: any) {
    const errorData = error.response.data;
    if (errorData.emailError) {
      setErrors({ email: errorData.message });
    } else if (errorData.passwordError) {
      setErrors({ password: errorData.message });
    }
  }
};

export const handleAuthFormValidation = (
  formData: FormData,
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
