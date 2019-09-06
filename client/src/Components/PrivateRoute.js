import React from 'react';
import { Route, Redirect } from "react-router-dom";


const PrivateRoute = props => {
    const {component: Component, authToken, ... rest} = props;

    return (
        <Route {...rest}
                render={props => {
                    if (authToken) {
                        return <Component {...props} />;
                    }
                        return <Redirect to='/login'/>
                }} />
    )
}

export default PrivateRoute;


