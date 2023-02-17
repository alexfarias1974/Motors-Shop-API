import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { User } from "./user.entity";
import { VehicleImages } from "./vehicleImages.entity";

@Entity("vehicles")
export class Vehicle {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column("varchar", { length: 50 })
  title: string;

  @Column("decimal", { precision: 8, scale: 2 })
  price: number;

  @Column("int")
  year: number;

  @Column("int")
  mileage: number;

  @Column("varchar", { length: 50 })
  vehicleType: string;

  @Column("varchar", { length: 500 })
  description: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => User)
  owner: User;

  @OneToMany(() => VehicleImages, (VehicleImages) => VehicleImages.vehicle)
  images: VehicleImages[];
}