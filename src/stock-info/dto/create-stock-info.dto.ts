import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateStockInfoDto {
  @Expose()
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  skuId: string;

  @Expose()
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  stockQuantity: number;

  @Expose()
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  safeStockQuantity: number;

  @Expose()
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  soldQuantity: number;
}
