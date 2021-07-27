import React from "react";

import { Container, LoginContainer, CadastroContainer } from "./styles";
import Logo from "../../assets/img/Logo.svg";
import Input from "../../components/Input/index";
import Button from "../../components/Button/index";
import { FaSignInAlt } from "react-icons/fa";
import { Title, SpanLink } from "../../assets/styles/global";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import api from "../../services/api";
import { useEffect } from "react";

const Login: React.FC = () => {
  const history = useHistory();
  const [isLogin, setIsLogin] = useState(true);
  const [emailLogin, setEmailLogin] = useState("");
  const [passwordLogin, setPasswordLogin] = useState("");

  const handleRegisterOrLogin = () => {
    setIsLogin(!isLogin);
  };

  const handleLogin = async () => {
    try {
      const { data } = await api.post("auth", {
        email: emailLogin,
        password: passwordLogin,
      });

      console.log(data);

      localStorage.setItem("@App:user", JSON.stringify(data.credential.name));
      localStorage.setItem("@App:token", data.token);
    } catch (err) {
      console.log(err);
    }

    //history.push("/home");
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
              <Input
                placeholder="E-mail"
                onChange={(e) => setEmailLogin(e.target.value)}
              />
              <Input
                placeholder="Senha"
                type="password"
                onChange={(e) => setPasswordLogin(e.target.value)}
              />
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
