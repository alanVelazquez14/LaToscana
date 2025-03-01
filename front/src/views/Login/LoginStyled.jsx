import styled, {keyframes} from "styled-components";

export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

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


export const TitleLogin = styled.h1`
  text-align: center;
  font-size: 2rem;
  margin-top: 2rem;
  color: rgb(124, 25, 25);
  font-weight: 800;
  margin-bottom: 50px;
  animation: ${fadeIn} 1s ease;
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

export const InputLogin = styled.input`
  margin-bottom: 1rem;
  padding: 10px 20px;
  font-family: "Montserrat", sans-serif;
  font-size: 1rem;
  border-radius: 8px;
  border: 1px solid black;
  width: 250px;
  height: 20px;
  margin-top: 1rem;
  animation: ${fadeInUp} 1s ease;
`;

export const ContainerButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ButtonLogin = styled.button`
  padding: 10px 20px;
  border-radius: 8px;
  background-color: rgb(124, 25, 25);
  color: white;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  margin-top: 2rem;
  font-family: "Montserrat", sans-serif;
  animation: ${fadeInUp} 2s ease;

  &:hover {
    background-color: rgb(175, 27, 27);
  }
`;

export const LinkRegister = styled.div`
  margin-top: 2rem;
  font-size: 1rem;
  color: black;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 25px;
  animation: ${fadeInUp} 2s ease;

  a {
    color: rgb(124, 25, 25);
    text-decoration: none;
    font-weight: bold;

    &:hover {
      color: rgb(202, 37, 37);
    }
  }
`;
