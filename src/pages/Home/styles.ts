import styled from "styled-components";

export const Container = styled.div`
  background: #eaeaea;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  main {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    > div {
      height: 100%;
      width: 90%;
      max-width: 1100px;
      padding: 20px 50px;

      section {
        h2 {
          height: 60px;
          display: flex;
          align-items: center;
          border-bottom: 2px solid rgba(0, 0, 0, 0.4);
        }

        :last-child {
          padding: 40px 0;
          height: auto;
          display: grid;
          grid-template-columns: auto auto auto auto;
          justify-content: space-around;
        }
      }
    }
  }

  aside {
    width: 450px;
    height: calc(100% - 100px);
    background-color: red;
    border-right: 1px solid rgba(0, 0, 0, 0.2);
  }
`;
