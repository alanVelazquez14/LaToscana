import styled, { keyframes } from "styled-components";

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
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

export const TitleAbout = styled.h1`
  text-align: center;
  font-size: 2rem;
  margin-top: 2rem;
  color: rgb(124, 25, 25);
  font-weight: 800;
  animation: ${fadeIn} 1s ease;
`;

export const AboutText = styled.p`
  text-align: center;
  font-size: 1.4rem;
  margin-top: 2rem;
  color: black;
  font-weight: 400;
  max-width: 1000px;

  span {
    font-weight: 800;
    color: #6d98ba;
  }
`;

export const ImageAbout = styled.img`
  margin-top: 2rem;
  border-radius: 10px;
  width: 50%;
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

export const TextAndImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  gap: 50px;
  animation: ${fadeInUp} 1s ease;
`;
