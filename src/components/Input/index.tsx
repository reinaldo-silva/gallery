import React, { InputHTMLAttributes } from "react";

import { Container } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
}

const Input = ({ placeholder, ...rest }: InputProps) => {
  return <Container placeholder={placeholder} {...rest} />;
};

export default Input;
