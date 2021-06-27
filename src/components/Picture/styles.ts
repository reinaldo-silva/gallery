import styled from "styled-components";

export const Container = styled.div`
  width: 175px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 10px;
  margin-bottom: 50px;
  transition: 0.4s;

  background: #fff;
  box-shadow: 0px 12px 17px rgba(0, 0, 0, 0.14),
    0px 5px 22px rgba(0, 0, 0, 0.12), 0px 7px 8px rgba(0, 0, 0, 0.2);
  transform: rotate(4.32deg);

  img {
    height: 151px;
    width: 151px;
  }

  span {
    height: 30px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  p {
    height: 20px;
    width: 100%;

    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    font-size: 10px;
  }

  :hover {
    transform: scale(1.1);
  }
`;
