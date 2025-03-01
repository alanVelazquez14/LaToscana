import styled from "styled-components";

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-top: 150px;
`;
export const NotFoundTitle = styled.h1`
  font-size: 2rem;
`;
export const NotFoundButton = styled.button`
  padding: 15px 30px;
  font-size: 1rem;
  background-color: rgb(0, 0, 0, 0.8);
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-family: "Montserrat", sans-serif;

  &:hover {
    background-color: rgb(0, 0, 0, 0.9);
  }

  a {
    text-decoration: none;
    color: #fff;
  }
`;
