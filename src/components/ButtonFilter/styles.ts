import styled from "styled-components";

interface ContainerProps {
  selected: boolean;
}

export const Container = styled.li<ContainerProps>`
  list-style: none;
  width: 100%;
  color: ${(props) => (props.selected ? "#FFF" : "rgba(0, 0, 0, 0.6)")};
  font-weight: bold;
  height: 50px;
  background: ${(props) => (props.selected ? "#aa59eb" : "#fff")};
  border: 2px solid
    ${(props) => (props.selected ? "#aa59eb" : "rgba(0, 0, 0, 0.2)")};
  border-radius: 4px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  cursor: pointer;
  transition: 0.1s;

  :hover {
    border: 2px solid #aa59eb;
    color: #aa59eb;
    background: ${(props) => props.selected && "#fff"};
  }
`;
