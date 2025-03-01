import styled from "styled-components";

export const ContainerReserva = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border: 1px solid black;
  padding: 10px;
  margin: 10px;
  width: 300px;
  border-radius: 10px;
  color: black;
  font-weight: 700;
`;

export const DateStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
  margin-top: 15px;
`;

export const TimeStyle = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  text-align: right;
`;

export const DescriptionStyle = styled.div`
  text-align: center;
  margin-top: 10px;
`;

export const DateAndClose = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

export const ButtonClose = styled.button`
  background-color: rgb(124, 25, 25);
  font-family: "Montserrat", sans-serif;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;

  &:hover {
    background-color: rgb(255, 0, 0);
    transition: 0.5s all ease 0s;
  }
`;

export const StatusStyle = styled.h4`
color: ${(props) => (props.status === "active" ? "green" : "red")};
`;

export const ContainerStatus = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 10px;
`;