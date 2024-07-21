import React from "react";
import Input from "./Input";

function Login() {
  return (
    <div>
      <form className="form">
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="password" />
        <a className="button-link" href="/ManageBills">
        <button > Login </button>
      </a>
      </form>
    </div>
  );
}

export default Login;
