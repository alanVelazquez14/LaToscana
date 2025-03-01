import React, { useEffect } from "react";
import Reserva from "../../components/Reserva/Reserva";
import {
  CardsContainer,
  CardsReservations,
  Paragraph,
  TitleReservations,
} from "./ReservationsStyles";
import { useGlobalContext } from "../../context/GlobalContext.jsx";

const Reservations = () => {
  const { user, userReservations, getAndSaveUserReservations } =
    useGlobalContext();

  useEffect(() => {
    if (user) {
      getAndSaveUserReservations(user);
    }
  }, [user]);

  return (
    <>
      <TitleReservations>- MIS RESERVAS -</TitleReservations>

      <Paragraph>
        Acá encontrarás todas las reservas que has realizado:
      </Paragraph>
      <CardsContainer>
        {Array.isArray(userReservations) && userReservations.length > 0 ? (
          userReservations.map((reserva) => (
            <CardsReservations key={`${reserva.id}-${reserva.date}`}>
              <Reserva DatosReserva={reserva} />
            </CardsReservations>
          ))
        ) : (
          <Paragraph>
            No tienes reservas realizadas. ¡Reserva ya tu próximo viaje!
          </Paragraph>
        )}
      </CardsContainer>
    </>
  );
};

export default Reservations;
