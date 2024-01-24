import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { ProductEntity } from 'src/product/product.entity';

@Entity()
export class LimitInfoEntity {
  @ManyToOne(() => ProductEntity, (product) => product.limitInfos)
  @JoinColumn({ name: 'spuId' })
  product: ProductEntity;

  @Column({ type: 'varchar', nullable: false, primary: true })
  spuId: string;

  @Column({ type: 'varchar', length: 255 })
  text: string;
}
