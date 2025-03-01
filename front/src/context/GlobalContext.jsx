import { createContext, useContext, useEffect, useState } from "react";
import { getReservations } from "../services/reservations";
import { toast } from "sonner";

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [userReservations, setUserReservations] = useState();


  const saveOnLocal = () => {
    return localStorage.setItem(
      "global",
      JSON.stringify({ user, userReservations })
    );
  };

  const saveUser = (data) => {
    setUser(data);
  };

  const getAndSaveUserReservations = async (user) => {
    const reservations = await getReservations(user);
    setUserReservations(reservations);
  };

  const updateOne = (id, newData) => {
    setUserReservations((reservations) => {
      if (!reservations) return [];
      return reservations.map((reserva) =>
        reserva.id === id ? { ...reserva, ...newData } : reserva
      );
    });
  };

  const addReservation = (newReservation) => {
    setUserReservations((reservations) => [
      ...(reservations || []),
      newReservation,
    ]);
  };

  const logout = () => {
    setUser(null);
    setUserReservations([]);
    localStorage.removeItem("global");
    toast.success("Sesión cerrada correctamente");
  };

  useEffect(() => {
    if (!user || !userReservations) return;
    saveOnLocal();
  }, [user, userReservations]);

  useEffect(() => {
    const local = localStorage.getItem("global");

    if (local) {
      const globalParsed = JSON.parse(local);

      setUser(globalParsed.user);
      setUserReservations(globalParsed.userReservations);
    }
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        user,
        userReservations,
        saveUser,
        getAndSaveUserReservations,
        updateOne,
        addReservation,
        logout,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("useGlobalContext debe usarse dentro de un GlobalProvider");
  }

  return context;
};
