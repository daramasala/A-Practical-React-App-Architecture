import React from "react";
import MainScreen from "../main/MainScreen";
import PropTypes from "prop-types";

export default class LoggedInContainer extends React.Component {
  componentDidMount() {
    console.log("User is logged in");
  }

  componentWillUnmount() {
    console.log("User is logged out");
  }

  render() {
    return <MainScreen logout={this.props.logout} />;
  }
}

LoggedInContainer.propTypes = {
  logout: PropTypes.func
};
