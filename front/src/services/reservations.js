import axios from "axios";

const URL = "http://localhost:3000";

export const getReservations = async (user) => {
  try {
    const res = await axios.get(`${URL}/reservations/user/${user.id}`);

    if (res.status !== 200) {
      console.log("Error al cargar las reservas o no hay reservas");
      return [];
    }

    return res.data;
  } catch (e) {
    console.log("Error al cargar las reservas", e.message);
    return [];
  }
};

export const CancelReservation = async (id) => {
  try {
    const res = await axios.put(`${URL}/reservations/cancel/${id}`);

    if (res.status !== 200) {
      console.log("Error al cancelar la reserva");
    }

    return res.data;
  } catch (error) {
    console.error("Error al cancelar la reserva", error.message);
  }
};

export const createReservation = async (data) => {
  try {
    const res = await axios.post(`${URL}/reservations/schedule`, data);

    if (res.status !== 201) {
      console.log("Error al crear la reserva");
    }

    return res.data;
  } catch (error) {
    console.log(error.response?.data);
    console.error("Error al crear la reserva", error.message);
  }
};
