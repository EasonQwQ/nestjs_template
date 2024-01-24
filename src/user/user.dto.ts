// user.dto.ts

import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import {
  IsEmail,
  IsInt,
  // IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
class Tags {
  @Expose()
  @ApiProperty()
  @IsString()
  key: string;

  @Expose()
  @ApiProperty()
  @IsString()
  label: string;
}
class Geographic {
  @Expose()
  @ApiProperty()
  @ValidateNested()
  province: Tags;

  @Expose()
  @ApiProperty()
  @ValidateNested()
  city: Tags;
}

export class UserDto {
  @Expose()
  @ApiProperty()
  @IsString()
  name: string;

  @Expose()
  @ApiProperty()
  @IsString()
  avatar: string;

  @Expose()
  @ApiProperty()
  @IsString()
  userId: string;

  @Expose()
  @ApiProperty()
  @IsEmail()
  email: string;

  @Expose()
  @ApiProperty()
  @IsString()
  signature: string;

  @Expose()
  @ApiProperty()
  @IsString()
  title: string;

  @Expose()
  @ApiProperty()
  @IsString()
  group: string;

  @Expose()
  @ApiProperty({ type: [Tags] })
  @ValidateNested()
  tags: Tags[];

  @Expose()
  @ApiProperty()
  @IsInt()
  notifyCount: number;

  @Expose()
  @ApiProperty()
  @IsInt()
  unreadCount: number;

  @Expose()
  @ApiProperty()
  @IsString()
  country: string;

  @Expose()
  @ApiProperty()
  @IsString()
  access: string;

  @Expose()
  @ApiProperty({ type: Geographic })
  @ValidateNested()
  geographic: {
    province: { label: string; key: string };
    city: { label: string; key: string };
  };

  @Expose()
  @ApiProperty()
  @IsString()
  address: string;

  @Expose()
  @ApiProperty()
  @IsString()
  phone?: string;

  @Expose()
  @ApiProperty()
  @IsString()
  openid: string;
}
