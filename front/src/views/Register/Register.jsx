import React from "react";
import {
  ButtonRegister,
  ContainerButton,
  InputRegister,
  RegisterContainer,
  TitleRegister,
} from "./RegisterStyled";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { LinkRegister } from "../Login/LoginStyled";
import { registerUser } from "../../services/user";

const Register = () => {
  const Input = [
    { name: "name", type: "text", placeholder: "Ingrese su nombre" },
    { name: "email", type: "email", placeholder: "Ingrese su email" },
    { name: "birthdate", type: "date", placeholder: "Fecha de nacimiento" },
    { name: "nDni", type: "text", placeholder: "Ingrese su DNI" },
    { name: "username", type: "text", placeholder: "Nombre de usuario" },
    { name: "password", type: "password", placeholder: "Contraseña" },
    { name: "password2", type: "password", placeholder: "Repetir contraseña" },
  ];

  const validationSchema = Yup.object({
    name: Yup.string()
      .required("Campo requerido")
      .matches(/^[a-zA-Z\s]*$/, "El nombre solo debe contener letras")
      .min(3, "El nombre debe tener al menos 3 caracteres")
      .max(50, "El nombre debe tener como máximo 50 caracteres"),
    email: Yup.string().email("Email inválido").required("Campo requerido"),
    birthdate: Yup.date().required("Campo requerido"),
    nDni: Yup.string()
      .min(7, "El DNI debe tener al menos 7 caracteres")
      .max(8, "El DNI debe tener como máximo 8 caracteres")
      .matches(/^\d+$/, "El DNI solo debe contener números")
      .required("Campo requerido"),
    username: Yup.string().required("Campo requerido"),
    password: Yup.string()
      .min(6, "La contraseña debe tener al menos 6 caracteres")
      .required("Campo requerido"),
    password2: Yup.string()
      .oneOf([Yup.ref("password"), null], "Las contraseñas deben coincidir")
      .required("Campo requerido"),
  });

  const handleSubmit = async (values, { resetForm }) => {
    await registerUser(values);
    resetForm();
  };

  return (
    <RegisterContainer>
      <TitleRegister>- CREÁ TU CUENTA -</TitleRegister>
      <Formik
        initialValues={{
          name: "",
          email: "",
          birthdate: "",
          nDni: "",
          username: "",
          password: "",
          password2: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          {Input.map((input) => (
            <div key={input.name}>
              <Field
                as={InputRegister}
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
          <ContainerButton>
            <ButtonRegister type="submit">Registrarse</ButtonRegister>
          </ContainerButton>
        </Form>
      </Formik>

      <LinkRegister>
        <p>¿Ya tenes cuenta?</p>
        <Link to="/login">¡ Inicia sesión !</Link>
      </LinkRegister>
    </RegisterContainer>
  );
};

export default Register;
