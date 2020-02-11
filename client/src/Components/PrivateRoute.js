import React from 'react';
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = originalProps => {
  const { component: Component, authToken, ...rest } = originalProps;
  return (
    <Route
      {...rest}
      render={props => {
        if (authToken) {
          return <Component {...props} {...originalProps} />;
        }
        return <Redirect to="/login" />;
      }}
    />
  );
};

export default PrivateRoute;
