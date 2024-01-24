// create-order.dto.ts

import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { IsNotEmpty, IsDateString } from 'class-validator';

export class CreateOrderDto {
  @Expose()
  @ApiProperty()
  @IsNotEmpty()
  buyerId: string;

  @Expose()
  @ApiProperty()
  @IsNotEmpty()
  sellerId: string;

  @Expose()
  @ApiProperty()
  @IsNotEmpty()
  productId: string;

  @Expose()
  @ApiProperty()
  @IsNotEmpty()
  orderStatus: string;

  @Expose()
  @ApiProperty()
  @IsNotEmpty()
  @IsDateString()
  orderTime: string;

  @Expose()
  @ApiProperty()
  @IsDateString(
    {},
    { message: 'Invalid date format. Please use the ISO 8601 format.' },
  )
  paymentTime?: string;

  @Expose()
  @ApiProperty()
  @IsDateString()
  shippingTime?: string;

  @Expose()
  @ApiProperty()
  @IsDateString()
  completionTime?: string;
}
