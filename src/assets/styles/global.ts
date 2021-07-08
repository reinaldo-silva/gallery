import styled, { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }

  body {
    background: #F8F8F8;
    -webkit-font-smoothing: antialiased;
    font: 14px 'Montserrat', sans-serif;
  }

  body, input, button {
    font: 14px 'Montserrat', sans-serif;
    border: none;
  }

  a {
    text-decoration: none;
    width: 100%;
    text-align: center;
    color: #000;
  }
  button {
    cursor: pointer;
  } 
`;

export const Title = styled.h2`
  font-size: 24px;
`;

export const TitlePage = styled.h2`
  min-height: 60px;
  display: flex;
  align-items: center;
  border-bottom: 2px solid rgba(0, 0, 0, 0.4);
`;

export const SpanLink = styled.a`
  font-weight: bold;
  cursor: pointer;

  :hover {
    text-decoration: underline;
  }
`;
