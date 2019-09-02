import React from "react";
import { Container } from "semantic-ui-react";
import LoginForm from "../../Components/Login/LoginForm";
import Navbar from "../../Components/Navbar";
import LoginHeroImage from "../../Images/loginHeroImage.jpg";

const LoginView = () => {
  return (
    <>
      <Container
        className="bg-image"
        style={{ backgroundImage: `url(${LoginHeroImage})` }}
      >
        <Navbar />
        <LoginForm />
      </Container>
    </>
  );
};

export default LoginView;
