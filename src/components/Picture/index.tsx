import React, { useState } from "react";

import { Container } from "./styles";

interface PictureImage {
  title: string;
  image: string;
}

const Picture = ({ title, image }: PictureImage) => {
  const [arrayRotateImage] = useState([-6, -5, -4, 4, 5, 6]);

  const randomNumberRotateImag = (array: number[]) => {
    return arrayRotateImage[Math.floor(Math.random() * array.length)];
  };

  return (
    <Container rotate={randomNumberRotateImag(arrayRotateImage)}>
      <div>
        <img src={image} alt="" />
      </div>
      <span>{title}</span>
      <p>08/12/2021</p>
    </Container>
  );
};

export default Picture;
