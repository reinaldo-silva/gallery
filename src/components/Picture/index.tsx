import React, { memo, useState } from "react";
import { useEffect } from "react";

import { Container } from "./styles";

interface PictureImage {
  title: string;
  image: string;
  date: string;
}

const Picture = ({ title, image, date }: PictureImage) => {
  const [arrayRotateImage] = useState([-6, -5, -4, 4, 5, 6]);
  const [dateFormat, setDateFormat] = useState("");

  useEffect(() => {
    let month = String(new Date(date).getMonth() + 1);
    const day = new Date(date).getDate();
    const year = new Date(date).getFullYear();
    if (parseInt(month) < 10) month = `0${month}`;
    setDateFormat(`${day}/${month}/${year}`);
  }, [date]);

  const randomNumberRotateImag = (array: number[]) => {
    return arrayRotateImage[Math.floor(Math.random() * array.length)];
  };

  return (
    <Container rotate={randomNumberRotateImag(arrayRotateImage)}>
      <div>
        <img src={image} alt="" />
      </div>
      <span>{title}</span>
      <p>{dateFormat}</p>
    </Container>
  );
};

export default memo(Picture);
