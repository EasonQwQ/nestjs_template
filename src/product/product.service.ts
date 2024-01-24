import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { plainToClass } from 'class-transformer';
// import { UserDto } from './user.dto';
import { ProductEntity } from './product.entity';
import { ProductDto } from './dto/product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
@Injectable()
export class ProductService {
  async getProductList(
    currentPage: number,
    pageSize: number,
  ): Promise<[ProductEntity[], number]> {
    // throw new Error('Method not implemented.');
    const res = await this.productRepository.findAndCount({
      take: pageSize,
      skip: (currentPage - 1) * pageSize,
    });
    return res;
  }
  constructor(
    @InjectRepository(ProductEntity)
    private readonly productRepository: Repository<ProductEntity>,
  ) {}

  async createProduct(dto: UpdateProductDto): Promise<ProductEntity> {
    const productEntity: ProductEntity = plainToClass(ProductEntity, dto);
    const saveProduct = await this.productRepository.save(productEntity);
    return saveProduct;
  }

  async createUser(dto: ProductDto): Promise<ProductEntity> {
    const productEntity: ProductEntity = plainToClass(ProductEntity, dto);
    // 保存到数据库
    const savedUser = await this.productRepository.save(productEntity);
    return savedUser;
  }

  async findAll(): Promise<ProductEntity[]> {
    const users = await this.productRepository.find();
    return users;
  }

  getProduct(id: number): ProductEntity | PromiseLike<ProductEntity> {
    return this.productRepository.findOne({
      where: {
        id,
      },
    });
  }
}
