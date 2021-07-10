import React, { useState } from "react";

import { Container } from "./styles";
import Photo from "../../assets/img/picture1.jpeg";

const Picture = () => {
  const [arrayRotateImage] = useState([-6, -5, -4, 4, 5, 6]);

  const randomNumberRotateImag = (array: number[]) => {
    return arrayRotateImage[Math.floor(Math.random() * array.length)];
  };

  return (
    <Container rotate={randomNumberRotateImag(arrayRotateImage)}>
      <div>
        <img src={Photo} alt="" />
      </div>
      <span>Titulo da Imagem</span>
      <p>08/12/2021</p>
    </Container>
  );
};

export default Picture;
