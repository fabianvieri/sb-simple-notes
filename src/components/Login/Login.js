import React from "react";
import "./Login.scss";

const Login = ({ click, username, change }) => {
  return (
    <div className="Login">
      <div className="form">
        <h1>Enter Username</h1>
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={change}
          required
        />
        <button type="submit" onClick={click}>
          submit
        </button>
        <p>dont have username ? just enter one</p>
      </div>
    </div>
  );
};

export default Login;
