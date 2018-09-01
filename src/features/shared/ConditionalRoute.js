import React from "react";
import { Route, Redirect } from "react-router-dom";

const ConditionalRoute = ({ isRouteValid, path, render, redirectInstead }) => (
  <Route
    path={path}
    children={({ match }) =>
      match 
        ? isRouteValid() 
          ? render()
          : <Redirect to={redirectInstead} />
        : null
    }
  />
);

export default ConditionalRoute;
