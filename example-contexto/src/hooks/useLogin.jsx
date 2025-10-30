import { useState } from "react";
import { useNavigate } from "react-router";

import Api from "../sercices/Api";

import { useUser } from "./UserContext";

const useLogin = () => {
  const { loginUser } = useUser();
  const navigate = useNavigate();
  const [email, setEmail] = useState("user"); // hardcode for testing
  const [password, setPassword] = useState("pass"); // hardcode for testing
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChangeEmail = (event) => setEmail(event.target.value);
  const handleChangePassword = (event) => setPassword(event.target.value);

  const login = () => {
    setLoading(true);

    Api.login(email, password)
      .then(({ user }) => {
        loginUser(user);
        navigate("/");
      })
      .catch(() => setError("Login failed"))
      .finally(() => setLoading(false));
  }

  return {
    error,
    loading,
    email,
    password,
    handleChangeEmail,
    handleChangePassword,
    login
  }
}

export default useLogin;
