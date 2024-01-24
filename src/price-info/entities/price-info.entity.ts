import { SkuEntity } from 'src/sku/entities/sku.entity';
import {
  Entity,
  Column,
  ManyToOne,
  JoinColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class PriceInfoEntity {
  // id
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => SkuEntity, (sku) => sku.priceInfos)
  @JoinColumn({ name: 'skuId' })
  sku: SkuEntity;

  @Column({ type: 'varchar', length: 255, nullable: false })
  skuId: string;

  @Column({ type: 'int' })
  priceType: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  price: number;
}
