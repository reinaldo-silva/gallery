import React from "react";

import { Container, LoginContainer, CadastroContainer } from "./styles";
import Logo from "../../assets/img/Logo.svg";
import Input from "../../components/Input/index";
import Button from "../../components/Button/index";
import { FaSignInAlt } from "react-icons/fa";
import { Title, SpanLink } from "../../assets/styles/global";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const Login: React.FC = () => {
  const history = useHistory();
  const [isLogin, setIsLogin] = useState(true);

  const handleRegisterOrLogin = () => {
    setIsLogin(!isLogin);
  };

  const handleLogin = () => {
    history.push("/home");
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
              <Button background="#08C869" onClick={handleLogin}>
                <FaSignInAlt /> Entrar
              </Button>
              <SpanLink onClick={handleRegisterOrLogin}>
                Não tenho conta :(
              </SpanLink>
            </LoginContainer>
          </>
        ) : (
          <>
            <CadastroContainer>
              <Title>Cadastro de usuário</Title>
              <Input placeholder="Nome" />
              <Input placeholder="E-mail" />
              <Input placeholder="Senha" />
              <Input placeholder="Repita sua senha" />
              <Button background="#9238D9">Cadastrar</Button>
              <SpanLink onClick={handleRegisterOrLogin}>
                Já sou cadastrado :)
              </SpanLink>
            </CadastroContainer>
          </>
        )}
      </section>
    </Container>
  );
};

export default Login;
