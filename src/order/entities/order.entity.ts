// order.entity.ts

import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class OrderEntity {
  @PrimaryGeneratedColumn()
  id: number; // Assuming a numeric identifier, adjust as needed

  @Column()
  buyerId: string;

  @Column()
  sellerId: string;

  @Column()
  productId: string;

  @Column()
  orderStatus: string;

  @Column({ type: 'timestamp' })
  orderTime: string;

  @Column({ type: 'timestamp', nullable: true })
  paymentTime?: string;

  @Column({ type: 'timestamp', nullable: true })
  shippingTime?: string;

  @Column({ type: 'timestamp', nullable: true })
  completionTime?: string;
}
