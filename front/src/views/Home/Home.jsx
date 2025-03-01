import React from "react";
import {
  ContainerTextStyled,
  // FlechaStyled,
  LineStyled1,
  LineStyled2,
  LineStyled3,
  RomboStyled,
  TitleSpanStyled,
  TitleStyled,
} from "./HomeStyled.jsx";

export const Home = () => {
  return (
    <>
      <TitleStyled>
        <TitleSpanStyled>
          <span>LA</span>
        </TitleSpanStyled>
        <TitleSpanStyled>TOSCANA</TitleSpanStyled>
        <LineStyled1 />
        <LineStyled2 />
        <LineStyled3 />
      </TitleStyled>
      <ContainerTextStyled>
        <p>TRADICIÓN</p>
        <RomboStyled />
        <p style={{color:"black"}}>SABOR</p>
        <RomboStyled />
        <p>ELEGANCIA</p>
      </ContainerTextStyled>
      {/* <FlechaStyled /> */}
    </>
  );
};
