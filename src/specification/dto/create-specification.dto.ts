import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateSpecificationDto {
  @Expose()
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  specId: string;

  @Expose()
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  title: string;

  @Expose()
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  spuId: string;
}
