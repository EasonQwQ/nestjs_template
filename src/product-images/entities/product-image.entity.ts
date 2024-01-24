import { ProductEntity } from 'src/product/product.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

@Entity()
export class ProductImageEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => ProductEntity, (product) => product.productImages)
  @JoinColumn({ name: 'spuId' })
  product: ProductEntity;

  @Column({ type: 'varchar', length: 255, nullable: false })
  imageUrl: string;
}
