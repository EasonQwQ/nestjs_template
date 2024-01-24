import { SkuEntity } from 'src/sku/entities/sku.entity';
import {
  Entity,
  Column,
  ManyToOne,
  JoinColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class StockInfoEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => SkuEntity, (sku) => sku.stockInfos)
  @JoinColumn({ name: 'skuId' })
  sku: SkuEntity;

  @Column({ type: 'varchar', length: 255, nullable: false })
  skuId: string;

  @Column({ type: 'int' })
  stockQuantity: number;

  @Column({ type: 'int' })
  safeStockQuantity: number;

  @Column({ type: 'int' })
  soldQuantity: number;
}
