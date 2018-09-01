import React from "react";

const LoginScreen = ({ login }) => (
  <div className="LoginScreen-container">
    <form className="LoginScreen-form">
      <label >
        User:
        <input style={{margin:'5px'}} type="text" />
      </label>
      <label>
        Password:
        <input style={{margin:'5px'}} type="text" />
      </label>
      <button style={{margin:'5px'}} onClick={() => login({ user: "Someone", password: "X" })}>
        Login
      </button>
    </form>
  </div>
);

export default LoginScreen;
