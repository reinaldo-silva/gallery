import styled from "styled-components";

interface ButtonProps {
  background: string;
}

export const Container = styled.button<ButtonProps>`
  width: 100%;
  height: 50px;
  border-radius: 8px;
  font-weight: bold;
  text-transform: uppercase;

  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  background: ${(props) => props.background};
  transition: 0.1s;

  :hover {
    filter: brightness(0.8);
  }

  svg {
    width: 22px;
    height: 22px;
    margin-right: 16px;
  }
`;
