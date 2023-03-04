import React from "react";
import "./style.scss";

function Signin() {
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
