import React, { useState } from "react";
import { Container } from "semantic-ui-react";
import LoginForm from "../../Components/Login/LoginForm";
import Navbar from "../../Components/Navbar";
import LoginHeroImage from "../../Images/loginHeroImage.jpg";
import LoadingSpinner from "../../Components/LoadingSpinner";
import { loginUser } from '../../api/loginUser';

const handleLogin = async (props, email, password, setLoading, setValidPassword) => {
  setLoading(true);
  const loginResult = await loginUser(email, password);
  setLoading(false);
  if (!loginResult.id) {
    return setValidPassword(false);
  }

  setValidPassword(true);
  props.handleLoggedIn({
    authToken: loginResult.id,
    userId: loginResult.userId
  });
};

const renderBody = (props, setLoading, setValidPassword) => {
  return (
    <LoginForm
      handleLogin={(email, password) =>
        handleLogin(props, email, password, setLoading, setValidPassword)
      }
    />
  );
};

const LoginView = props => {
  const [isLoading, setLoading] = useState(false);
  const [isValidPassword, setValidPassword] = useState(true);

  return (
    <>
      <Container
        className="bg-image"
        style={{ backgroundImage: `url(${LoginHeroImage})` }}
      >
        <Navbar />
        { /* todo proper error bar  */}
        {!isValidPassword && <p>Invalid Password</p>}
        {isLoading && <LoadingSpinner />}
        {renderBody(props, setLoading, setValidPassword)}
      </Container>
    </>
  );
};

export default LoginView;
