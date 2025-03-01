export enum ReservationTime {
  ACTIVE = "active",
  CANCEL = "cancel",
}

interface IReservation {
  id: number;
  date: Date;
  time: string;
  userId: number;
  description: string;
  status: ReservationTime;
}

export default IReservation;
