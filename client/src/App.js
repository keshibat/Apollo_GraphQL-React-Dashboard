import React, { useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import PrivateRoute from './Components/PrivateRoute';

// import DashboardView from "./Pages/Dashboard/DashboardView";
import DashboardSidebar from "./Components/DashboardSidebar";
import LoginView from "./Pages/Login/LoginView";

function App() {
  const [loginDetails, setLoginDetails] = useState({});
  return (
    <>
      <BrowserRouter>
        <div>
          <PrivateRoute
            exact
            path="/"
            component={DashboardSidebar}
            userId={loginDetails.userId}
            authToken={loginDetails.authToken}
          />
          <Route
            exact
            path="/login"
            component={LoginView}
            handleLoggedIn={loginResult => {
              // TODO - you have auth token and user ID now.
              setLoginDetails(loginResult);
            }}
          />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
