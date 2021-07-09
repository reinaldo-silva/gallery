import React from "react";
import { BiImageAdd } from "react-icons/bi";
import { Container } from "./styles";

interface PictureAddProps {
  click: () => void;
}

const PictureAdd = ({ click }: PictureAddProps) => {
  const arrayRotateImage = [-6, -5, -4, 4, 5, 6];

  const randomNumberRotateImag = (array: number[]) => {
    return arrayRotateImage[Math.floor(Math.random() * array.length)];
  };

  return (
    <Container
      rotate={randomNumberRotateImag(arrayRotateImage)}
      onClick={click}
    >
      <div>
        <BiImageAdd />
      </div>
      <span>Nova Imagem</span>
      <p></p>
    </Container>
  );
};

export default PictureAdd;
