import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";

export enum ReservationTime {
  ACTIVE = "active",
  CANCEL = "cancel",
}

@Entity({ name: "reservations" })
export class Reservation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  date: Date;

  @Column()
  time: string;

  @Column()
  userId: number;

  @Column({ type: "varchar", nullable: true, default: "" })
  description: string;

  @Column({
    default: ReservationTime.ACTIVE,
  })
  status: ReservationTime;

  @ManyToOne(() => User, (user) => user.reservations)
  user: User;
}
