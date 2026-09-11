import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {

  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:3002/home",
          {
            withCredentials: true,
          }
        );

        if (data.status) {
          window.location.href = "http://localhost:5174/";
        }
      } catch (error) {
        // User is not logged in
      }
    };

    checkAuth();
  }, []);

  const { email, password } = inputValue;

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (message) => {
    toast.error(message, {
      position: "bottom-left",
    });
  };

  const handleSuccess = (message) => {
    toast.success(message, {
      position: "bottom-right",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(
        "http://localhost:3002/login",
        {
          email,
          password,
        },
        {
          withCredentials: true,
        }
      );

      console.log("LOGIN RESPONSE:", data);

      const { success, message } = data;

      if (success) {
        handleSuccess(message);

        setTimeout(() => {
          window.location.href = "http://localhost:5174/";
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.error("LOGIN ERROR:", error);

      if (error.response) {
        handleError(
          error.response.data.message || "Login failed"
        );
      } else {
        handleError("Unable to connect to server");
      }
    }

    setInputValue({
      email: "",
      password: "",
    });
  };



  return (
    <div className="form_container">
      <h2>Login to Aura</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>

          <input
            type="email"
            name="email"
            value={email}
            placeholder="Enter your email"
            onChange={handleOnChange}
            required
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>

          <input
            type="password"
            name="password"
            value={password}
            placeholder="Enter your password"
            onChange={handleOnChange}
            required
          />
        </div>

        <button type="submit">
          Login
        </button>

        <span>
          Don't have an account?{" "}
          <Link to="/signup">Signup</Link>
        </span>
      </form>

      <ToastContainer />
    </div>
  );
};

export default Login;