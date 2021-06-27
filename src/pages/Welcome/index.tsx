import React from "react";

import { Container } from "./styles";
import Logo from "../../assets/img/Logo.svg";
import { Link } from "react-router-dom";

const Welcome: React.FC = () => {
  return (
    <Container>
      <section>
        <img src={Logo} alt="" />
        <p>Organize todos os momentos</p>
      </section>
      <section>
        <Link to="/login">
          <button type="button">Começar</button>
        </Link>
      </section>
    </Container>
  );
};

export default Welcome;
