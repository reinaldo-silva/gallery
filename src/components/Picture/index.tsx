import React from "react";

import { Container } from "./styles";
import Photo from "../../assets/img/picture1.jpeg";

const Picture: React.FC = () => {
  return (
    <Container>
      <img src={Photo} alt="" />
      <span>Titulo da Imagem</span>
      <p>08/12/2021</p>
    </Container>
  );
};

export default Picture;
