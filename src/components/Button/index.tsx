import React, { ButtonHTMLAttributes, ReactNode } from "react";

import { Container } from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  background: string;
}

const Button = ({ children, background, ...rest }: ButtonProps) => {
  return (
    <Container background={background} {...rest}>
      {children}
    </Container>
  );
};

export default Button;
