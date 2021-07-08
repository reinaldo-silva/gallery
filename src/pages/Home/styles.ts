import styled from "styled-components";

export const Container = styled.div`
  background: #eaeaea;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  main {
    margin-top: 100px;
    width: 100%;
    margin-left: 450px;
    display: flex;
    align-items: center;
    justify-content: center;

    > div {
      height: 100%;
      width: 90%;
      //max-width: 1100px;
      padding: 20px 50px;

      section {
        h2 {
          min-height: 60px;
          display: flex;
          align-items: center;
          border-bottom: 2px solid rgba(0, 0, 0, 0.4);
        }

        :last-child {
          padding: 40px 0;
          min-height: calc(100vh - 200px);
          display: flex;
          flex-wrap: wrap;
          justify-content: start;
          align-items: flex-start;
        }
      }
    }
  }

  aside {
    width: 450px;
    //transform: translateX(-450px);
    transition: 0.5s;
    height: calc(100vh - 100px);
    position: fixed;
    top: 100px;
    left: 0;
    background-color: #f8f8f8;
    border-right: 1px solid rgba(0, 0, 0, 0.2);
    padding: 20px 40px;

    button {
      width: 100%;
      height: 40px;
      margin: 20px 0 40px;
      border-radius: 4px;
      border: 2px solid rgba(255, 0, 0, 0.6);
      font-weight: bold;
      color: rgba(255, 0, 0, 0.6);
      background: transparent;
    }

    ul {
      width: 100%;
      display: grid;
      grid-gap: 14px;
      grid-template-columns: 1fr 1fr;

      li {
        list-style: none;
        width: 100%;
        height: 50px;
        background: #fff;
        border: 1px solid rgba(0, 0, 0, 0.2);
        border-radius: 4px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        cursor: pointer;
      }
    }
  }
`;
