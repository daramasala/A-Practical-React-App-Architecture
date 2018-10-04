import React from "react";
import LoginScreen from "../login/LoginScreen"
import { Switch } from "react-router-dom";
import LoggedInContainer from "./LoggedInContainer";
import ConditionalRoute from "../shared/ConditionalRoute";

class RootContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      session: null
    };
  }

  login = ({ userName, password }) => {

    if (userName === "" || password === "") {
      return;
    }

    this.setState({ session: { userName, token: "X" } });
  }


  logout = () => this.setState({ session: null });

  render() {
    console.log('rootcontainer, state', this.state);
    return (
      <Switch>
        <ConditionalRoute
          path="/login"
          isRouteValid={() => !this.state.session}
          redirectInstead="/"
          render={() => <LoginScreen login={this.login} />}
        />
        <ConditionalRoute
          path="/"
          isRouteValid={() => !!this.state.session}
          redirectInstead="/login"
          render={() => <LoggedInContainer logout={this.logout} />}
        />
      </Switch>
    );
  }
}

export default RootContainer;
