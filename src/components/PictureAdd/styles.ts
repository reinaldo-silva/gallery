import styled from "styled-components";

interface ContainerProps {
  rotate: number;
}

export const Container = styled.div<ContainerProps>`
  width: 175px;
  height: 220px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 10px;
  margin: 0 25px 50px;
  transition: 0.4s;

  background: #fff;
  box-shadow: 0px 12px 17px rgba(0, 0, 0, 0.14),
    0px 5px 22px rgba(0, 0, 0, 0.12), 0px 7px 8px rgba(0, 0, 0, 0.2);
  transform: rotate(${(props) => props.rotate}deg);

  > div {
    height: 151px;
    width: 151px;
    background: #c4c4c4;
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      width: 60px;
      height: 60px;
      color: #fff;
    }
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
