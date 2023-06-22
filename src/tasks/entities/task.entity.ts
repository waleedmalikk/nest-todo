/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class Task {
  @PrimaryGeneratedColumn('uuid')
  uuid: string;
  @Column()
  title: string;
  @Column()
  description: string;
  @Column()
  reminder: boolean;
}
