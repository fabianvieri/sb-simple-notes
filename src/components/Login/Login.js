import React from "react";
import "./Login.scss";

const Login = () => {
  return (
    <div className="Login">
      <div>
        <h1>Login</h1>
        <input type="text" placeholder="username" />
        <button>submit</button>
        <p>dont have username just create one</p>
      </div>
    </div>
  );
};

export default Login;
