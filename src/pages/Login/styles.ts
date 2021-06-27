import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  section {
    width: 50vw;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    :first-child {
      background: linear-gradient(101.75deg, #08c869 0%, #9238d9 100%);
    }
  }
`;

export const LoginContainer = styled.div`
  width: 415px;
  height: 375px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 10px 50px;
`;
