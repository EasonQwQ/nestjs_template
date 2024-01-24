// address.entity.ts

import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { UserEntity } from '../../user/user.entity'; // Assuming you have a User entity

@Entity()
export class AddressEntity {
  // primary key column自增的数字id
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: string;

  @Column()
  recipientName: string;

  @Column()
  phoneNumber: string;

  @Column()
  province: string;

  @Column()
  city: string;

  @Column()
  district: string;

  @Column()
  detailAddress: string;

  @Column({ default: false }) // Default to false if not specified
  isDefault: boolean;

  @ManyToOne(() => UserEntity, (user) => user.addresses)
  @JoinColumn({ name: 'userId' })
  user: UserEntity;
}
