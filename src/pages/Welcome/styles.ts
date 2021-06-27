import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background: linear-gradient(101.75deg, #08c869 0%, #9238d9 100%);

  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    p {
      margin-top: 10px;
      width: 260px;
      font-size: 32px;
      font-weight: bold;
      color: #fff;
    }

    button {
      height: 70px;
      width: 270px;
      font-weight: bold;
      font-size: 32px;
      text-transform: uppercase;
      border-radius: 60px;
      background: #fff;
      color: rgba(0, 0, 0, 0.8);
      transition: background 0.3s;

      :hover {
        background: #e2e2e2;
      }
    }
  }
`;
