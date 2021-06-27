import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  height: 50px;
  border-radius: 8px;
  font-weight: bold;
  text-transform: uppercase;

  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  background: #08c869;
  transition: 0.1s;

  :hover {
    background: #06944e;
  }

  svg {
    width: 22px;
    height: 22px;
    margin-right: 16px;
  }
`;
