import React from "react";
import { Link } from "react-router-dom";

const MainScreen = ({ logout }) => (
  <div className="MainScreen-container">
    <h1>Main Screen</h1>
    <Link style={{margin:'5px'}} to="/settings">Navigate</Link>
    <Link style={{margin:'5px'}} to="/login">Navigate to login</Link>
    <button style={{margin:'5px'}} onClick={logout}>Logout</button>
  </div>
);

export default MainScreen;
