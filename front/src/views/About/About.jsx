import React from "react";
import {
  AboutContainer,
  AboutText,
  ImageAbout,
  TextAndImage,
  TitleAbout,
} from "./AboutStyles";

const About = () => {
  return (
    <AboutContainer>
      <TitleAbout>- SOBRE NOSOTROS -</TitleAbout>
      <TextAndImage>
        <AboutText>
          En <span>La Toscana</span>, creemos que la mejor comida es la que se
          disfruta en familia.
          <br />
          Inspirados en la calidez y tradición de la cocina italiana, nuestro
          restaurante nació con el propósito de traer a tu mesa los auténticos
          sabores de la Toscana.
          <br />
          <br />
          Cada platillo es preparado con ingredientes frescos y recetas que han
          pasado de generación en generación, manteniendo la esencia de la
          comida casera. Desde nuestras pastas artesanales hasta nuestras salsas
          cuidadosamente elaboradas, queremos que cada bocado te haga sentir
          como en casa. Más que un restaurante, La Toscana es un lugar donde las
          risas, los recuerdos y el buen comer se encuentran. Te invitamos a
          compartir momentos especiales con nosotros y a disfrutar de una
          experiencia gastronómica llena de tradición y amor.
          <br />
          <br />
          <span>¡Bienvenido a nuestra familia!</span>
        </AboutText>
        <ImageAbout src="/nuestro-salon-firenze.jpg" alt="" />
      </TextAndImage>
    </AboutContainer>
  );
};

export default About;
