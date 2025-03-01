import styled, { keyframes } from "styled-components";

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

export const TitleStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 100px;
`;

export const TitleSpanStyled = styled.h1`
  color: rgb(124, 25, 25);
  font-size: 7rem;
  margin: -15px;
  font-weight: 900;
  user-select: none;

  span {
    font-size: 2rem;
    font-weight: 700;
  }
`;

export const LineStyled1 = styled.div`
  border-bottom: 1px solid rgb(214, 47, 47);
  width: 700px;
`;

export const LineStyled2 = styled.div`
  border-bottom: 1px solid rgb(214, 47, 47);
  width: 550px;
  height: 6px;
`;

export const LineStyled3 = styled.div`
  border-bottom: 1px solid rgb(214, 47, 47);
  width: 400px;
  height: 7px;
`;

export const ContainerTextStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  gap: 170px;
  font-size: 1.5rem;
  color: rgb(124, 25, 25);
  font-weight: 500;
  animation: ${fadeInUp} 1s ease-out forwards;
`;

export const RomboStyled = styled.div`
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 10px solid #6d98ba;
`;

const moverFlecha = keyframes`
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(10px);
    }
  `;

// export const FlechaStyled = styled.div`
//   position: absolute;
//   left: 49%;
//   width: 0;
//   height: 0;
//   border-left: 20px solid transparent;
//   border-right: 20px solid transparent;
//   border-top: 30px solid rgb(124, 25, 25);
//   cursor: pointer;
//   bottom: 50px;
//   animation: ${moverFlecha} 1s ease-in-out infinite;

//   &:hover {
//     animation: none;
//   }
// `;
