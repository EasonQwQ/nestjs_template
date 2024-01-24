import { ProductEntity } from 'src/product/product.entity';
import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';

@Entity()
export class CategoryEntity {
  @Column({ type: 'varchar', length: 255, primary: true })
  categoryId: string;

  @ManyToOne(() => ProductEntity, (product) => product.categories)
  @JoinColumn({ name: 'spuId' })
  product: ProductEntity;

  @Column({ type: 'varchar', nullable: false })
  spuId: string;
}
