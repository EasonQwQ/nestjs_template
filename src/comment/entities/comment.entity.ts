import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class CommentEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: number;

  @Column()
  productId: number;

  @Column({ type: 'text' })
  content: string;

  @Column({ type: 'timestamp' })
  commentTime: Date;
}
