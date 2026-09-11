import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Login.css";

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
    <div className="login-page">

      {/* Background decoration */}
      <div className="login-glow login-glow-one"></div>
      <div className="login-glow login-glow-two"></div>

      <div className="login-wrapper">

        {/* LEFT SIDE */}
        <div className="login-intro">

          <div className="aura-brand">
            <div className="aura-logo-mark">A</div>

            <div>
              <h1>Aura</h1>
              <span>Invest with clarity.</span>
            </div>
          </div>

          <div className="intro-content">
            <span className="intro-badge">
              YOUR FINANCIAL SPACE
            </span>

            <h2>
              Make every
              <br />
              <span>move count.</span>
            </h2>

            <p>
              Track your investments, monitor your portfolio,
              and make smarter decisions from one simple
              financial workspace.
            </p>
          </div>

          <div className="login-features">

            <div className="feature-item">
              <div className="feature-icon">↗</div>
              <div>
                <strong>Track your portfolio</strong>
                <p>See your investments at a glance.</p>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-icon">◉</div>
              <div>
                <strong>Stay in control</strong>
                <p>Everything you need, in one place.</p>
              </div>
            </div>

          </div>
        </div>


        {/* RIGHT SIDE */}
        <div className="login-card">

          <div className="login-card-header">
            <span className="welcome-text">
              WELCOME BACK
            </span>

            <h2>Sign in to Aura</h2>

            <p>
              Enter your details to continue to your account.
            </p>
          </div>


          <form onSubmit={handleSubmit}>

            <div className="input-group">
              <label htmlFor="email">
                Email address
              </label>

              <div className="input-wrapper">
                <span className="input-icon">@</span>

                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  placeholder="you@example.com"
                  onChange={handleOnChange}
                  required
                />
              </div>
            </div>


            <div className="input-group">
              <div className="password-label">
                <label htmlFor="password">
                  Password
                </label>

                <button
                  type="button"
                  className="forgot-password"
                  onClick={() =>
                    toast.info("Password recovery coming soon.")
                  }
                >
                  Forgot password?
                </button>
              </div>

              <div className="input-wrapper">
                <span className="input-icon">••</span>

                <input
                  type="password"
                  id="password"
                  name="password"
                  value={password}
                  placeholder="Enter your password"
                  onChange={handleOnChange}
                  required
                />
              </div>
            </div>


            <button
              type="submit"
              className="login-button"
            >
              <span>Continue</span>
              <span className="button-arrow">→</span>
            </button>

          </form>


          <div className="signup-divider">
            <span>New to Aura?</span>

            <Link to="/signup">
              Create an account
            </Link>
          </div>


          <div className="security-note">
            <span>●</span>
            Your account is protected with secure authentication.
          </div>

        </div>

      </div>

      <ToastContainer />

    </div>
  );
};

export default Login;