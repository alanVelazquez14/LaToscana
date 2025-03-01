import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarStyled = styled.div`
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  position: sticky;
  top: 0;
  left: 0;
  background-color: #faf3f3;
  border-radius: 10px 10px 0 0;
  width: 100%;
  gap: 10px;
`;

export const LinksStyled = styled.div`
  display: flex;
  align-items: center;
  font-weight: 800;
  font-size: 14px;
  
  a {
    position: relative;
    text-decoration: none;
    color: rgb(124, 25, 25);
    padding: 0 1rem;
  }

  &:not(.no-underline) a::after {
    content: "";
    position: absolute;
    left: 50%;
    bottom: -2px;
    width: 0;
    height: 2px;
    background-color: rgb(124, 25, 25);
    transition: width 0.4s ease-in-out, left 0.4s ease-in-out;
  }

  &:not(.no-underline) a:hover::after {
    width: 100%;
    left: 0;
  }

  & .active {
    font-weight: bold;
    border-bottom: 2px solid rgb(124, 25, 25);
  }
`;

export const BorderLinks = styled(Link)`
  border: 2px solid rgb(124, 25, 25);
  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
  text-decoration: none;
  color: rgb(124, 25, 25);

  &:hover {
    background-color: #6d98ba;
  }

  &.active {
    font-weight: bold;
    background-color: #6d98ba;
    border-bottom: 2px solid rgb(124, 25, 25);
  }
`;
