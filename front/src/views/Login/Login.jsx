import React from "react";
import {
  ButtonLogin,
  ContainerButton,
  InputLogin,
  LinkRegister,
  LoginContainer,
  TitleLogin,
} from "./LoginStyled";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { loginUser } from "../../services/user";
import { useGlobalContext } from "../../context/GlobalContext";

const Login = () => {
  const Input = [
    { name: "username", type: "text", placeholder: "Nombre de usuario" },
    { name: "password", type: "password", placeholder: "Contraseña" },
  ];

  const { saveUser } = useGlobalContext();
  const validationSchema = Yup.object({
    username: Yup.string().required("Campo requerido"),
    password: Yup.string().required("Campo requerido"),
  });

  const handleSubmit = async (values) => {
    await loginUser(values, saveUser);
  };

  return (
    <LoginContainer>
      <TitleLogin>- INICIÁ SESIÓN -</TitleLogin>

      <Formik
        initialValues={{
          username: "",
          password: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ dirty, isValid }) => (
          <Form>
            {Input.map((input) => (
              <div key={input.name}>
                <Field
                  as={InputLogin}
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
              <ButtonLogin
                type="submit"
                disabled={!(dirty && isValid)}
                style={{
                  cursor: !(dirty && isValid) ? "not-allowed" : "pointer",
                  opacity: !(dirty && isValid) ? 0.6 : 1,
                }}
              >
                Iniciar sesión
              </ButtonLogin>
            </ContainerButton>
          </Form>
        )}
      </Formik>
      <LinkRegister>
        <p>¿No tenés cuenta?</p>
        <Link to="/register">¡ Registrate !</Link>
      </LinkRegister>
    </LoginContainer>
  );
};

export default Login;
