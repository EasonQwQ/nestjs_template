import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';

@Entity()
export class TabListEntity {
  @PrimaryGeneratedColumn()
  id: number; // Assuming a numeric identifier, adjust as needed

  // text
  @Column()
  text: string;

  // key
  @Column()
  key: number;
}
