import React, { useState } from "react";
import Cookies from "universal-cookie";
import axios from "axios";

import signInImage from "../assets/signup.jpg";

const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(true);

  const handleChange = () => {};

  const switchMode = () => {
    setIsSignUp((prevIsSignup) => !prevIsSignup);
  }

  return (
    <div className="auth__form-container">
      <div className="auth__form-container_fields">
        <div className="auth__form-container_fields-content">
          <p>{isSignUp ? "Sign Up" : "Sign In"}</p>
          <form onSubmit={{}}>
            {isSignUp && (
              <div className="auth__form-container_fields-content_input">
                <label htmlFor="fullName">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  onchange={handleChange}
                  required
                />
              </div>
            )}
            <div className="auth__form-container_fields-content_input">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                placeholder="Username"
                onchange={handleChange}
                required
              />
            </div>
            {isSignUp && (
              <div className="auth__form-container_fields-content_input">
                <label htmlFor="phoneNumber">Phone Number</label>
                <input
                  type="text"
                  name="phoneNumber"
                  placeholder="Phone Number"
                  onchange={handleChange}
                  required
                />
              </div>
            )}
            {isSignUp && (
              <div className="auth__form-container_fields-content_input">
                <label htmlFor="avatarURL">Avatar URL</label>
                <input
                  type="text"
                  name="avatarURL"
                  placeholder="Avatar URL"
                  onchange={handleChange}
                  required
                />
              </div>
            )}
                <div className="auth__form-container_fields-content_input">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      onchange={handleChange}
                      required
                    />
                </div>
            {isSignUp && (
                <div className="auth__form-container_fields-content_input">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input
                      type="password"
                      name="confirmPassword"
                      placeholder="Confirm Password"
                      onchange={handleChange}
                      required
                    />
                </div>
            )}
          </form>
            <div className="auth__form-container_fields-account">
                <p>
                    {isSignUp ? "Already have an account?" : "Don't have an account?"}
                    <span onClick={switchMode}>
                        {isSignUp ? "Sign In" : "Sign Up"}
                    </span>
                </p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
