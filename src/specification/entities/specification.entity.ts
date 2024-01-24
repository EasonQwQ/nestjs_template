export class Specification {}
import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import { ProductEntity } from 'src/product/product.entity';

@Entity()
export class SpecificationEntity {
  @PrimaryColumn({ type: 'varchar', length: 255 })
  specId: string;

  @Column({ type: 'varchar', length: 255 })
  title: string;

  @ManyToOne(() => ProductEntity, (product) => product.specifications)
  @JoinColumn({ name: 'spuId' })
  product: ProductEntity;

  @Column({ type: 'varchar', nullable: false })
  spuId: string;
}
