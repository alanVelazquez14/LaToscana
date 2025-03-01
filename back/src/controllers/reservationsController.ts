import { Request, Response } from "express";
import {
  cancelServices,
  getByUserId,
  getReservationByIdServices,
  getReservationsServices,
  scheduleServices,
} from "../services/reservationsServices";
import { Reservation } from "../entities/Reservation";

export const getReservations = async (req: Request, res: Response) => {
  try {
    const reservations: Reservation[] = await getReservationsServices();

    res.status(200).json(reservations);
  } catch (error) {
    res.status(404).json({
      message: "Ha ocurrido un error al obtener la lista de reservas",
    });
  }
};

export const getReservationsById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const reservation: Reservation | null = await getReservationByIdServices(
      Number(id)
    );

    res.status(200).json(reservation);
  } catch (error) {
    res.status(500).json({
      messagge: "Ha ocurrido un error al obtener la reserva",
      error: (error as Error)?.message,
    });
  }
};

export const schedule = async (req: Request, res: Response) => {
  try {
    await scheduleServices(req.body);

    res.status(201).json({
      status: 200,
      message: "Reserva creada con éxito",
    });
  } catch (error) {
    res.status(400).json({
      message: "Ha ocurrido un error al crear la reserva",
      error: (error as Error)?.message,
    });
  }
};

export const cancel = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const cancelReservation = await cancelServices(Number(id));

    res.status(200).json({
      status: 200,
      message: "Reserva cancelada con éxito",
    });
  } catch (error) {
    res.status(404).json({
      message: "Ha ocurrido un error al cancelar la reserva. Intente de nuevo",
    });
  }
};

export const byIdReservationsController = async (
  req: Request,
  res: Response
) => {
  try {
    await getByUserId(Number(req.params.id)).then((reservation) => {
      res.status(200).json(reservation);
    });
  } catch (error) {
    res.status(404).json({
      message: "Ha ocurrido un error al obtener la reserva",
    });
  }
};
