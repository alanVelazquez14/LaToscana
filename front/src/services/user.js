import axios from "axios";
import { toast } from "sonner";

const URL = "http://localhost:3000";

export const registerUser = async (userData) => {
  try {
    const { password2, ...dataToSend } = userData;
    const response = await axios.post(`${URL}/users/register`, dataToSend);
    if (response.status === 201) {
      toast.success("Usuario registrado correctamente");
    }
  } catch (error) {
    console.error("Error al registrar usuario", error);
    toast.error("Error al registrar usuario, datos incorrectos");
  }
};

export const loginUser = async (userData, saveUser) => {
  try {
    const response = await axios.post(`${URL}/users/login`, userData, {});
    if (response?.status === 200) {
      saveUser({ ...response.data.user, login: true });
      toast.success("Inicio de sesión correcto");
      return response.data.user;
    }
  } catch (error) {
    console.error("Error al iniciar sesión", error);
    toast.error("Error al iniciar sesión, datos incorrectos");
  }
};
