import styled from "styled-components";

interface HomeProps {
  isAsideOpen: boolean;
  isOpenAddPicture: boolean;
}

export const Container = styled.div<HomeProps>`
  background: #eaeaea;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  main {
    height: auto;
    margin-top: 100px;
    width: ${(props) => (props.isAsideOpen ? "calc(100vw - 400px)" : "0100%")};

    margin-left: ${(props) => (props.isAsideOpen ? "400px" : "0")};
    display: flex;
    align-items: center;
    justify-content: center;
    transition: margin-left 0.5s;

    > div {
      height: 100%;
      width: 100%;
      //max-width: 1100px;
      padding: 20px 50px;

      section {
        h2 {
          min-height: 60px;
          display: flex;
          align-items: center;
          border-bottom: 2px solid rgba(0, 0, 0, 0.4);
        }

        :first-child {
          > ul {
            width: 100%;
            padding: 20px;
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 16px;
            overflow-x: auto;

            li {
              min-width: 150px;
              height: 50px;
              background: #aa59eb;
              border-radius: 4px;
              display: flex;
              justify-content: center;
              align-items: center;
              color: #fff;
              font-weight: bold;
            }

            div {
              height: 50px;
              min-width: 50px;
              background: #fff;
              border-radius: 50%;
              display: flex;
              justify-content: space-around;
              align-items: center;
              box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.14),
                0px 1px 18px rgba(0, 0, 0, 0.12), 0px 3px 5px rgba(0, 0, 0, 0.2);
              cursor: pointer;

              svg {
                color: rgba(0, 0, 0, 0.6);
                width: 25px;
                height: 25px;
              }
            }
          }
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
    width: 400px;
    transform: ${(props) =>
      !props.isAsideOpen ? "translateX(-400px)" : "translateX(0)"};
    transition: 0.5s;
    height: calc(100vh - 100px);
    position: fixed;
    top: 100px;
    left: 0;
    background-color: #f8f8f8;
    border-right: 1px solid rgba(0, 0, 0, 0.2);
    padding: 20px 40px;
    z-index: 10;

    button {
      width: 100%;
      height: 40px;
      margin: 20px 0 40px;
      border-radius: 4px;
      border: 2px solid #fa5a5b;
      font-weight: bold;
      color: #fa5a5b;
      background: transparent;
      transition: 0.1s;

      :hover {
        background: #fa5a5b;
        color: #fff;
      }
    }

    ul {
      width: 100%;
      display: grid;
      grid-gap: 14px;
      grid-template-columns: 1fr 1fr;
    }
  }
`;

export const AddNewImage = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.3);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  display: flex;
  justify-content: space-around;
  align-items: center;

  > p {
    position: absolute;
    top: 50px;
    right: 80px;

    height: 50px;
    min-width: 50px;
    background: #fff;
    border-radius: 50%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.14),
      0px 1px 18px rgba(0, 0, 0, 0.12), 0px 3px 5px rgba(0, 0, 0, 0.2);
    cursor: pointer;

    svg {
      color: rgba(0, 0, 0, 0.6);
      width: 25px;
      height: 25px;
    }
  }

  > form {
    width: 410px;
    height: 350px;
    background: #f8f8f8;
    border-radius: 8px;
    box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.14), 0px 3px 4px rgba(0, 0, 0, 0.12),
      0px 1px 8px rgba(0, 0, 0, 0.2);
    padding: 25px 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;
