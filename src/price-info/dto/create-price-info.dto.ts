import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreatePriceInfoDto {
  @Expose()
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  skuId: string;

  @Expose()
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  priceType: number;

  @Expose()
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  price: number;
}
