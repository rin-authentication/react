import React from "react";
import { useNavigate } from "react-router-dom";
import "./style.scss";

function Signin() {
  const navigate = useNavigate();

  const redirectToRegister = () => {
    navigate('/register')
  }

  return (
    <div className="signin-container">
      <form className="form">
        <div className="auth-card-info--form">
          <div className="input_container">
            <label htmlFor="password_field" className="input_label">
              Username
            </label>
            <input
              id="password_field"
              className="input_field"
              type="text"
              name="input-name"
              title="Inpit title"
              placeholder="Username"
            />
          </div>
          <div className="input_container">
            <label htmlFor="password_field" className="input_label">
              Password
            </label>
            <input
              id="password_field"
              className="input_field"
              type="password"
              name="input-name"
              title="Inpit title"
              placeholder="Password"
            />
          </div>
        </div>
        <button className="submit--btn">Login</button>
        <div className="register">
          <span>You don't have an account? </span> <span onClick={redirectToRegister} >Register</span>
        </div>
        <div className="separator">
          <hr className="line" />
          <p>or</p>
          <hr className="line" />
        </div>
      </form>
    </div>
  );
}

export default Signin;
