import React from "react";
import {
  NotFoundButton,
  NotFoundContainer,
  NotFoundTitle,
} from "./NotFoundStyles";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <NotFoundContainer>
      <NotFoundTitle>Error 404 - Not Found</NotFoundTitle>
      <NotFoundButton>
        <Link to="/">Ir al Home</Link>
      </NotFoundButton>
    </NotFoundContainer>
  );
};
export default NotFound;
