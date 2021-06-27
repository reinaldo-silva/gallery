import React from "react";

import { Container, LoginContainer } from "./styles";
import Logo from "../../assets/img/Logo.svg";
import Input from "../../components/Input/index";
import Button from "../../components/Button/index";
import { FaSignInAlt } from "react-icons/fa";
import { Title, SpanLink } from "../../assets/styles/global";
import { Link } from "react-router-dom";
import { useState } from "react";

const Login: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleRegister = () => {
    setIsLogin(false);
  };

  return (
    <Container>
      <section>
        <img src={Logo} alt="" />
      </section>
      <section>
        {isLogin ? (
          <>
            <LoginContainer>
              <Title>Login</Title>
              <Input placeholder="E-mail" />
              <Input placeholder="Senha" />
              <Link to="/home">
                <Button>
                  <FaSignInAlt /> Entrar
                </Button>
              </Link>
              <SpanLink onClick={handleRegister}>Não tenho conta :(</SpanLink>
            </LoginContainer>
          </>
        ) : (
          <></>
        )}
      </section>
    </Container>
  );
};

export default Login;
