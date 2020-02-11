import React, { useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import PrivateRoute from './Components/PrivateRoute';

import DashboardSidebar from "./Components/DashboardSidebar";
import { LoginPage } from "./Pages/Login/LoginPage";

function App() {
  const [loginDetails, setLoginDetails] = useState({});
  return (
    <>
      <BrowserRouter>
        <div>
          <PrivateRoute
            component={DashboardSidebar}
            userId={loginDetails.userId}
            authToken={loginDetails.authToken}
            exact
            path="/"
          />
          <Route
            render={(props) => <LoginPage {...props} handleLoggedIn={loginResult => {
              debugger;
              // TODO - you have auth token and user ID now.
              setLoginDetails(loginResult);
            }}
            authToken={loginDetails.authToken}/>}
            exact
            path="/login"
          />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
