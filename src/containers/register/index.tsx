import React from "react";
import { useNavigate } from "react-router-dom";
import "./style.scss";

function Register() {
  const navigate = useNavigate();

  const redirectToRegister = () => {
    navigate('/')
  }

  return (
    <div className="register-container">
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
        <button className="submit--btn">Register</button>
        <div className="register">
          <span>You have an account?</span> <span onClick={redirectToRegister} >Login</span>
        </div>
      </form>
    </div>
  );
}

export default Register;
