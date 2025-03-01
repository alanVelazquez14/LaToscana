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

export const TitleReservations = styled.h1`
  text-align: center;
  font-size: 2rem;
  margin-top: 2rem;
  color: rgb(124, 25, 25);
  font-weight: 800;
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

export const CardsReservations = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;

  animation: ${fadeInUp} 1s ease;
`;

export const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 20px;
  max-width: 70%;
  margin: 0 auto;
`;

export const Paragraph = styled.p`
  text-align: center;
  color: black;
  font-weight: 500;
  animation: ${fadeIn} 1s ease;
`;