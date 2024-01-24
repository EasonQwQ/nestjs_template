import {
  Entity,
  Column,
  PrimaryColumn,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { ProductEntity } from 'src/product/product.entity';
import { PriceInfoEntity } from 'src/price-info/entities/price-info.entity';
import { StockInfoEntity } from 'src/stock-info/entities/stock-info.entity';

@Entity()
export class SkuEntity {
  @PrimaryColumn({ type: 'varchar', length: 255 })
  skuId: string;

  @Column({ type: 'varchar', length: 255 })
  skuImage: string;

  @ManyToOne(() => ProductEntity, (product) => product.skus)
  @JoinColumn({ name: 'spuId' })
  product: ProductEntity;

  @Column({ type: 'varchar', nullable: false })
  spuId: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  weight: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  volume: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  profitPrice: number;

  @OneToMany(() => PriceInfoEntity, (priceInfo) => priceInfo.sku)
  priceInfos: PriceInfoEntity[];

  @OneToMany(() => StockInfoEntity, (stockInfos) => stockInfos.sku)
  stockInfos: PriceInfoEntity[];
}
