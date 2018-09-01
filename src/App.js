import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import RootContainer from "./features/root/RootContainer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      session: { token: null, user: null },
      loginSuccess: this.loginSuccess,
      logout: this.logout
    };
  }

  logout = () => {
    this.setState({...this.state, session: {token: null, user: null}});
  }

  loginSuccess = (token, user) =>
    this.setState({ ...this.state, session: { token, user } });

  render() {
    return (
      <Router>
        <RootContainer />
      </Router>
    );
  }
}

export default App;
