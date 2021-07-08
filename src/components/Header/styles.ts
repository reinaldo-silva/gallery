import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  position: fixed;
  z-index: 10;

  background: #f8f8f8;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);

  header {
    height: 100%;
    width: 90%;
    max-width: 1100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 50px;

    button {
      width: 100px;
      height: 45px;
      background: transparent;
      border: solid 2px #aa59eb;
      border-radius: 4px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 16px;
      font-weight: bold;
      color: #aa59eb;

      svg {
        height: 20px;
        width: 20px;
      }
    }

    img {
      height: 80%;
    }
  }
`;
