import React from "react";
import { categories } from "../../data";

import { Container } from "./styles";

interface ComboBox {
  setValue: (category: string) => void;
}

const Combobox = ({ setValue }: ComboBox) => {
  return (
    <Container onChange={(e) => setValue(e.currentTarget.value)}>
      <option>Selecione uma categoria</option>
      {categories.map((category) => (
        <option value={category} key={category}>
          {category}
        </option>
      ))}
    </Container>
  );
};

export default Combobox;
