import React from "react";
import {
  Overlay,
  ModalContainer,
  ButtonContainer,
  Button,
} from "./ModalStyles.jsx";

const Modal = ({ mensaje, onConfirm, onCancel }) => {
  return (
    <Overlay>
      <ModalContainer>
        <p>{mensaje}</p>
        <ButtonContainer>
          <Button variant="cancel" onClick={onConfirm}>
            SI
          </Button>
          <Button onClick={onCancel}>NO</Button>
        </ButtonContainer>
      </ModalContainer>
    </Overlay>
  );
};

export default Modal;
