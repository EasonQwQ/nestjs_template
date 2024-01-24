import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class ChatEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  buyerId: number;

  @Column()
  sellerId: number;

  @Column()
  productId: number;

  @Column({ type: 'text' })
  messageContent: string;

  @Column()
  senderId: number;

  @Column()
  receiverId: number;

  @Column({ type: 'timestamp' })
  sendTime: Date;
}
