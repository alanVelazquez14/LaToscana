import React, { useState } from "react";
import {
  ButtonClose,
  ButtonContainer,
  ContainerReserva,
  ContainerStatus,
  DateAndClose,
  DateStyle,
  DescriptionStyle,
  StatusStyle,
  TimeStyle,
} from "./ResevaStyled";
import { CiCalendarDate } from "react-icons/ci";
import { IoTime } from "react-icons/io5";
import { CancelReservation } from "../../services/reservations";
import { toast } from "sonner";
import { useGlobalContext } from "../../context/GlobalContext.jsx";
import Modal from "../Modal/Modal.jsx";

const Reserva = ({ DatosReserva }) => {
  const { id, date, time, status, description } = DatosReserva;
  const parsedDate = new Date(date).toDateString();
  const { updateOne } = useGlobalContext();

  const [showModal, setShowModal] = useState(false);

  const handleCancel = async () => {
    try {
      await CancelReservation(id);
      updateOne(id, { status: "cancel" });
      toast.success("Reserva cancelada correctamente");
      setShowModal(false);
    } catch (error) {
      toast.error(
        error.response?.status === 404
          ? "No tienes permiso para cancelar esta reserva"
          : "Hubo un error al cancelar la reserva"
      );
    }
  };

  return (
    <ContainerReserva>
      <DateAndClose>
        <div>
          <DateStyle>
            <CiCalendarDate
              style={{ fontSize: "25px", color: "6d98ba", marginLeft: "-25px" }}
            />
            Fecha: {parsedDate}
          </DateStyle>
          <TimeStyle>
            <IoTime
              style={{ fontSize: "25px", color: "6d98ba", marginLeft: "-25px" }}
            />
            Horario: {time}
          </TimeStyle>
        </div>
      </DateAndClose>
      <DescriptionStyle>Descripción: {description}</DescriptionStyle>
      <ContainerStatus>
        <StatusStyle status={status}>
          {typeof status === "string" ? status.toUpperCase() : status}
        </StatusStyle>
        <ButtonContainer>
          {status === "active" && (
            <ButtonClose onClick={() => setShowModal(true)}>
              Cancelar
            </ButtonClose>
          )}
        </ButtonContainer>
      </ContainerStatus>

      {showModal && (
        <Modal
          mensaje="¿Estás seguro de que quieres cancelar la reserva?"
          onConfirm={handleCancel}
          onCancel={() => setShowModal(false)}
        />
      )}
    </ContainerReserva>
  );
};

export default Reserva;
