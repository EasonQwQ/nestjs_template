// create-address.dto.ts

import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import {
  IsNotEmpty,
  IsPhoneNumber,
  IsBoolean,
  IsOptional,
} from 'class-validator';

export class CreateAddressDto {
  @Expose()
  @IsNotEmpty()
  // q:怎么设置swagger tyr的时候默认填充值
  @ApiProperty()
  userId: string;

  @Expose()
  @ApiProperty()
  @IsNotEmpty()
  recipientName: string;

  @Expose()
  @ApiProperty({
    default: '15367851234',
  })
  @IsNotEmpty()
  @IsPhoneNumber('CN', { message: 'Invalid phone number format.' })
  phoneNumber: string;

  @Expose()
  @ApiProperty()
  @IsNotEmpty()
  province: string;

  @Expose()
  @ApiProperty()
  @IsNotEmpty()
  city: string;

  @Expose()
  @ApiProperty()
  @IsNotEmpty()
  district: string;

  @Expose()
  @ApiProperty()
  @IsNotEmpty()
  detailAddress: string;

  @Expose()
  @ApiProperty()
  @IsOptional()
  @IsBoolean({ message: 'IsDefault must be a boolean.' })
  isDefault?: boolean;
}
