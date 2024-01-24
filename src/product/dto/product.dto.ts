import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import {
  IsNotEmpty,
  IsNumber,
  IsString,
  IsBoolean,
  IsDate,
  IsOptional,
} from 'class-validator';

export class ProductDto {
  @Expose()
  @ApiProperty()
  @IsNumber()
  @IsOptional()
  saasId: number;

  @Expose()
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  storeId: number;

  @Expose()
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  spuId: string;

  @Expose()
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  title: string;

  @Expose()
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  primaryImage: string;

  @Expose()
  @ApiProperty()
  @IsNotEmpty()
  @IsBoolean()
  available: boolean;

  @Expose()
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  minSalePrice: number;

  @Expose()
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  maxSalePrice: number;

  @Expose()
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  spuStockQuantity: number;

  @Expose()
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  soldNum: number;

  @Expose()
  @ApiProperty()
  @IsNotEmpty()
  @IsBoolean()
  isPutOnSale: boolean;

  @Expose()
  @ApiProperty()
  @IsNotEmpty()
  @IsDate()
  createdAt: Date;

  @Expose()
  @ApiProperty()
  @IsNotEmpty()
  @IsDate()
  updatedAt: Date;
}
