import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCategoryDto {
  @Expose()
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  categoryId: string;

  @Expose()
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  spuId: string;
}
