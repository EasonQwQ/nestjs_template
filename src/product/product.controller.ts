import { Controller, Post, Body, Get, Query } from '@nestjs/common';
import { ProductService } from './product.service'; // Import your ProductService
import { ApiProperty, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ProductEntity } from './product.entity';
// import { ProductDto } from './dto/product.dto';
import { Public } from 'src/decorators';
import { UpdateProductDto } from './dto/update-product.dto';
import { PageResponse } from 'src/constant/common';
import {
  Pagination,
  PaginationParams,
} from 'src/decorators/pagination.decorator';
import { ProductDto } from './dto/product.dto';
class ProductResponse {
  @ApiProperty({ type: [ProductDto] })
  data: ProductEntity[];

  @ApiProperty()
  total: number;

  @ApiProperty()
  success: boolean;
}
@ApiTags('product')
@Controller('/xwx/product')
@Public()
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post('create')
  async createProduct(
    @Body() product: UpdateProductDto,
  ): Promise<ProductEntity> {
    return this.productService.createProduct(product);
  }

  @Get('get')
  async getProduct(): Promise<ProductEntity> {
    // Assuming you have a getProduct method in your ProductService
    return this.productService.getProduct(1);
  }

  @Get('list')
  @ApiResponse({
    status: 200,
    description: 'The list of products',
    type: ProductResponse,
  })
  @ApiQuery({ name: 'current', type: Number })
  @ApiQuery({ name: 'pageSize', type: Number })
  async getProductList(
    @Pagination() pagination: PaginationParams,
  ): Promise<PageResponse<ProductEntity>> {
    // Assuming you have a getProduct method in your ProductService
    const [data, total] = await this.productService.getProductList(
      pagination.current,
      pagination.pageSize,
    );
    return {
      data: data,
      total,
      success: true,
    };
  }
}
