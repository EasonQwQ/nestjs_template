import { ApiProperty } from '@nestjs/swagger';
import { CategoryEntity } from 'src/category/entities/category.entity';
import { LimitInfoEntity } from 'src/limit-info/entities/limit-info.entity';
import { ProductImageEntity } from 'src/product-images/entities/product-image.entity';
import { SkuEntity } from 'src/sku/entities/sku.entity';
import { SpecificationEntity } from 'src/specification/entities/specification.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

@Entity()
export class ProductEntity {
  constructor() {
    this.spuId = uuidv4();
  }
  @ApiProperty({ type: 'integer' })
  @PrimaryGeneratedColumn()
  id: number;

  // 默认值
  @Column({ type: 'int', nullable: true, default: 0 })
  saasId: number;

  @Column({ type: 'int', nullable: true })
  storeId: number;

  // spuId
  @Column({ type: 'varchar', length: 255 })
  spuId: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  title: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  primaryImage: string;

  @Column({ type: 'boolean', default: true })
  available: boolean;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  minSalePrice: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  maxSalePrice: number;

  @Column({ type: 'int', nullable: true })
  spuStockQuantity: number;

  @Column({ type: 'int', nullable: true })
  soldNum: number;

  @Column({ type: 'boolean', default: true })
  isPutOnSale: boolean;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date;

  @OneToMany(() => ProductImageEntity, (productImage) => productImage.product)
  productImages: ProductImageEntity[];

  @OneToMany(() => CategoryEntity, (productCategory) => productCategory.product)
  categories: CategoryEntity[];

  @OneToMany(
    () => SpecificationEntity,
    (specification) => specification.product,
  )
  specifications: SpecificationEntity[];

  @OneToMany(() => SkuEntity, (sku) => sku.product)
  skus: SkuEntity[];

  @OneToMany(() => LimitInfoEntity, (limitInfo) => limitInfo.product)
  limitInfos: LimitInfoEntity[];
}
