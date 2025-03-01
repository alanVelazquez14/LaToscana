import React from "react";
import {
  ButtonReservas,
  ContainerButtonReservas,
  InfoText,
  InputReservas,
  ReservasContainer,
  TitleReservas,
} from "./ReservarStyles";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { toast } from "sonner";
import { useGlobalContext } from "../../context/GlobalContext.jsx";
import { createReservation } from "../../services/reservations";

const Reservar = () => {
  const Input = [
    {
      name: "descripcion",
      type: "text",
      placeholder: "Ingrese una descripción",
    },
    { name: "fecha", type: "date", placeholder: "Seleccione una fecha" },
    { name: "horario", type: "time", placeholder: "Seleccione un horario" },
  ];

  const { user, addReservation } = useGlobalContext();

  const validationSchema = Yup.object({
    descripcion: Yup.string()
      .min(10, "La descripción debe tener al menos 10 caracteres")
      .required("Campo requerido"),
    fecha: Yup.date()
      .required("Campo requerido")
      .test(
        "fecha-futura",
        "Debe seleccionar una fecha posterior a hoy",
        (value) => {
          const hoy = new Date().setHours(0, 0, 0, 0);
          return value && new Date(value).setHours(0, 0, 0, 0) > hoy;
        }
      ),
    horario: Yup.string()
      .matches(
        /^([01]\d|2[0-1]):([0-5]\d)$/,
        "El horario debe estar entre 10:00 y 21:00"
      )
      .required("Campo requerido")
      .test(
        "rango-horario",
        "El horario debe estar entre 10:00 y 21:00",
        (value) => {
          if (!value) return false;
          const [horas] = value.split(":").map(Number);
          return horas >= 10 && horas <= 21;
        }
      ),
  });
  const handleSubmit = async (values, { resetForm }) => {
    try {
      const data = {
        description: values.descripcion,
        date: values.fecha,
        time: values.horario,
        userId: user.id,
      };
  
      const response = await createReservation(data);
  
      if (response.status === 200) {
        toast.success("Reserva realizada con éxito");
        addReservation(response);
        resetForm();
      } else {
        toast.error("Ocurrió un error al realizar la reserva");
      }
    } catch (error) {
      toast.error("Ocurrió un error al realizar la reserva");
    }
  };

  return (
    <>
      <TitleReservas>- HACÉ TU RESERVA -</TitleReservas>
      <InfoText>
        Complete el siguiente formulario para reservar su lugar en nuestro
        restaurante.
        <br />
        <span>
          Recuerde que el horario para hacer reservas es de 10:00hs a 21:00hs.
        </span>
      </InfoText>
      <ReservasContainer>
        <Formik
          initialValues={{
            descripcion: "",
            fecha: "",
            horario: "",
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            {Input.map((input) => (
              <div key={input.name}>
                <Field
                  as={InputReservas}
                  name={input.name}
                  type={input.type}
                  placeholder={input.placeholder}
                />
                <ErrorMessage
                  name={input.name}
                  component="div"
                  style={{
                    color: "red",
                    fontSize: "12px",
                    textAlign: "center",
                    marginBottom: "15px",
                  }}
                />
              </div>
            ))}
            <ContainerButtonReservas>
              <ButtonReservas type="submit">GUARDAR RESERVA</ButtonReservas>
            </ContainerButtonReservas>
          </Form>
        </Formik>
      </ReservasContainer>
    </>
  );
};

export default Reservar;
