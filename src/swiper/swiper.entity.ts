import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class SwiperEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  imageUrl: string;
}
