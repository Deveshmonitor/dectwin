import React, { useState } from "react";
// import { Link } from 'react-router-dom';
import "./Login.css";

function Login() {
  const [isPanelActive, setIsPanelActive] = useState(false);

  // Handler for sign up button
  const handleSignUp = () => {
    setIsPanelActive(true);
  };

  // Handler for sign in button
  const handleSignIn = () => {
    setIsPanelActive(false);
  };

  return (
    <div>
      <div className="login-pannel">
        <div
          className={`container-login ${
            isPanelActive ? "right-panel-active" : ""
          }`}
          id="container"
        >
          <div className="form-container sign-up-container">
            <form action="#">
              <h1>Create Account</h1>
              <br />
              <br />
              <br />
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <input type="number" placeholder="Number" />
              <input type="password" placeholder="Password" />
              <br />
              <button>Sign Up</button>
            </form>
          </div>
          <div className="form-container sign-in-container">
            <form action="#">
              <h1>Sign in</h1>
              <br />
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <br />
              <button>Sign In</button>
            </form>
          </div>
          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-left">
                <h1>Welcome Back!</h1>
                <p>
                  To keep connected with us please login with your personal info
                </p>
                <button className="ghost" id="signIn" onClick={handleSignIn}>
                  Sign In
                </button>
              </div>
              <div className="overlay-panel overlay-right">
                <h1>Hello, User!</h1>
                <p>Enter your personal details and start journey with us</p>
                <button className="ghost" id="signUp" onClick={handleSignUp}>
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
