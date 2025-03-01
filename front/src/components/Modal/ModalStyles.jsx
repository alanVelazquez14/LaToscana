import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100000000000;
`;

export const ModalContainer = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;

  p {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 50px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 15px;
  font-family: "Montserrat", sans-serif;
`;

export const Button = styled.button`
  padding: 10px 18px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  font-size: 16px;
  font-weight: bold;
  ${({ variant }) =>
    variant === "cancel"
      ? "background: red; color: white;"
      : "background: gray; color: white;"}
`;
