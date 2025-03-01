import { ReservationModel, UserModel } from "../config/data-source";
import ScheduleReservationDto from "../dto/ScheduleReservationDto";
import { Reservation } from "../entities/Reservation";
import { User } from "../entities/User";
import { ReservationTime } from "../interfaces/IReservation";

export const getReservationsServices = async () => {
  const reservation: Reservation[] = await ReservationModel.find({
    relations: {
      user: true,
    },
  });
  return reservation;
};

export const getReservationByIdServices = async (
  id: number
): Promise<Reservation | null> => {
  const reservation: Reservation | null = await ReservationModel.findOne({
    where: { id },
    relations: {
      user: true,
    },
  });

  if (!reservation) {
    throw new Error("La reserva no existe");
  }
  return reservation;
};

export const getByUserId = async (id: number): Promise<Reservation[]> => {
  const reservations = await ReservationModel.find({
    where: { user: { id } },
    relations: {
      user: true,
    },
  });
  if (reservations) {
    return reservations;
  } else {
    throw new Error("La reserva no existe");
  }
};

export const scheduleServices = async (
  ScheduleReservationDto: ScheduleReservationDto
) => {
  const newReservation: Reservation = await ReservationModel.create(
    ScheduleReservationDto
  );
  await ReservationModel.save(newReservation);

  const user: User | null = await UserModel.findOneBy({
    id: ScheduleReservationDto.userId,
  });

  if (!user) {
    throw new Error("User not found");
  }

  newReservation.user = user;
  ReservationModel.save(newReservation);

  return newReservation;
};

export const cancelServices = async (id: number) => {
  const reservation: Reservation | null = await ReservationModel.findOneBy({
    id,
  });
  if (!reservation) {
    throw new Error("La reserva no existe");
  }

  reservation.status = ReservationTime.CANCEL;
  await ReservationModel.save(reservation);
};
