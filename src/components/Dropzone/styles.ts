import styled from "styled-components";

export const Container = styled.div`
  height: 415px;
  width: 350px;
  background: #fff;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  outline: 0;
  padding: 24px;
  box-shadow: 0px 12px 17px rgba(0, 0, 0, 0.14),
    0px 5px 22px rgba(0, 0, 0, 0.12), 0px 7px 8px rgba(0, 0, 0, 0.2);

  div {
    width: 300px;
    height: 300px;

    p {
      width: 100%;
      height: 100%;
      background-color: #c4c4c4;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      color: #fff;
      font-weight: bold;

      svg {
        color: #fff;
        width: 32px;
        height: 32px;
        margin-bottom: 16px;
      }
    }
  }

  span {
    font-size: 20px;
    padding: 16px 0;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
