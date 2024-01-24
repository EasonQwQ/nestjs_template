import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class FavoriteEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: number;

  @Column()
  productId: number;

  @Column({ type: 'timestamp' })
  favoriteTime: Date;
}
