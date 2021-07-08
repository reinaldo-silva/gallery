import React from "react";
import { FaSignOutAlt } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import Logo from "../../assets/img/Logo2.svg";
import { Container } from "./styles";

const Header: React.FC = () => {
  const history = useHistory();

  const handleSignOut = () => {
    history.push("/login");
  };

  return (
    <Container>
      <header>
        <img src={Logo} alt="" />
        <button onClick={handleSignOut}>
          Sair <FaSignOutAlt />
        </button>
      </header>
    </Container>
  );
};

export default Header;
