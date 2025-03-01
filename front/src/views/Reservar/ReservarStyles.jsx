import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
   opacity: 0;
    transform: translateY(-20px);
  }
  to{
    opacity: 1;
    transform: translateY(0);
  }
`;

export const TitleReservas = styled.h1`
  text-align: center;
  font-size: 2rem;
  margin-top: 2rem;
  color: rgb(124, 25, 25);
  font-weight: 800;
  animation: ${fadeIn} 1s ease;
`;

export const InfoText = styled.p`
  text-align: center;
  color: black;
  font-weight: 500;
  animation: ${fadeIn} 1s ease;

  span {
    font-weight: 800;
  }
`;

export const ContainerButtonReservas = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ButtonReservas = styled.button`
  background-color: rgb(124, 25, 25);
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  font-weight: 500;
  margin-top: 1rem;
  cursor: pointer;
  transition: 0.3s;
  font-family: "Montserrat", sans-serif;

  &:hover {
    background-color: rgb(100, 20, 20);
  }
`;

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const InputReservas = styled.input`
  margin-bottom: 1rem;
  padding: 10px 20px;
  font-family: "Montserrat", sans-serif;
  font-size: 1rem;
  border-radius: 8px;
  border: 1px solid black;
  width: 250px;
  height: 20px;
  animation: ${fadeInUp} 1s ease;
`;

export const ReservasContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
`;
