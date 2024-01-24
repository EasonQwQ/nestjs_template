import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateSkuDto {
  @Expose()
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  skuId: string;

  @Expose()
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  skuImage: string;

  @Expose()
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  spuId: string;

  @Expose()
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  weight: number;

  @Expose()
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  volume: number;

  @Expose()
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  profitPrice: number;
}
