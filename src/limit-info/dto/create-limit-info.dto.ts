import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateLimitInfoDto {
  @Expose()
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  spuId: string;

  @Expose()
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  text: string;
}
