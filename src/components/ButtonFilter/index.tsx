import React from "react";

import { Container } from "./styles";

interface ButtonFilterProps {
  text: string;
  onClick: () => void;
  selected: boolean;
}

const ButtonFilter = ({ text, selected, onClick }: ButtonFilterProps) => {
  return (
    <Container selected={selected} onClick={onClick}>
      {text}
    </Container>
  );
};

export default ButtonFilter;
