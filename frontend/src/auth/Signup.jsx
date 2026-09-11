import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Signup.css";

const Signup = () => {
  const navigate = useNavigate();

  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    username: "",
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

  const { email, password, username } = inputValue;

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
        "http://localhost:3002/signup",
        {
          email,
          password,
          username,
        },
        {
          withCredentials: true,
        }
      );

      const { success, message } = data;

      if (success) {
        handleSuccess(message);

        setTimeout(() => {
          navigate("/login");
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.error("SIGNUP ERROR:", error);

      if (error.response) {
        handleError(
          error.response.data.message || "Signup failed"
        );
      } else {
        handleError("Unable to connect to server");
      }
    }

    setInputValue({
      email: "",
      password: "",
      username: "",
    });
  };

  return (
    <div className="signup-page">

      {/* Background decoration */}
      <div className="signup-glow signup-glow-one"></div>
      <div className="signup-glow signup-glow-two"></div>

      <div className="signup-wrapper">

        {/* =================================
            LEFT SIDE
        ================================= */}

        <div className="signup-intro">

          <div className="aura-brand">

            <div className="aura-logo-mark">
              A
            </div>

            <div>
              <h1>Aura</h1>
              <span>Invest with clarity.</span>
            </div>

          </div>


          <div className="signup-intro-content">

            <span className="signup-badge">
              START YOUR JOURNEY
            </span>

            <h2>
              Build your
              <br />
              <span>financial future.</span>
            </h2>

            <p>
              Create your Aura account and bring your
              investments, watchlists, and portfolio into
              one simple financial workspace.
            </p>

          </div>


          <div className="signup-highlights">

            <div className="signup-highlight">

              <div className="highlight-number">
                01
              </div>

              <div>
                <strong>
                  Create your account
                </strong>

                <p>
                  Set up your personal Aura workspace.
                </p>
              </div>

            </div>


            <div className="signup-highlight">

              <div className="highlight-number">
                02
              </div>

              <div>
                <strong>
                  Explore your portfolio
                </strong>

                <p>
                  Keep your investments organized.
                </p>
              </div>

            </div>

          </div>

        </div>


        {/* =================================
            RIGHT SIDE
        ================================= */}

        <div className="signup-card">

          <div className="signup-card-header">

            <span className="signup-welcome">
              GET STARTED
            </span>

            <h2>
              Create your account
            </h2>

            <p>
              Join Aura and start building your
              financial workspace.
            </p>

          </div>


          <form onSubmit={handleSubmit}>

            {/* Username */}

            <div className="signup-input-group">

              <label htmlFor="username">
                Username
              </label>

              <div className="signup-input-wrapper">

                <span className="signup-input-icon">
                  ◉
                </span>

                <input
                  type="text"
                  id="username"
                  name="username"
                  value={username}
                  placeholder="Choose a username"
                  onChange={handleOnChange}
                  required
                />

              </div>

            </div>


            {/* Email */}

            <div className="signup-input-group">

              <label htmlFor="email">
                Email address
              </label>

              <div className="signup-input-wrapper">

                <span className="signup-input-icon">
                  @
                </span>

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


            {/* Password */}

            <div className="signup-input-group">

              <label htmlFor="password">
                Password
              </label>

              <div className="signup-input-wrapper">

                <span className="signup-input-icon">
                  ••
                </span>

                <input
                  type="password"
                  id="password"
                  name="password"
                  value={password}
                  placeholder="Create a secure password"
                  onChange={handleOnChange}
                  required
                />

              </div>

            </div>


            {/* Submit */}

            <button
              type="submit"
              className="signup-button"
            >

              <span>
                Create account
              </span>

              <span className="signup-button-arrow">
                →
              </span>

            </button>

          </form>


          {/* Login */}

          <div className="signup-login">

            <span>
              Already have an account?
            </span>

            <Link to="/login">
              Sign in
            </Link>

          </div>


          {/* Security */}

          <div className="signup-security">

            <span>●</span>

            Your information is protected with
            secure authentication.

          </div>

        </div>

      </div>

      <ToastContainer />

    </div>
  );
};

export default Signup;