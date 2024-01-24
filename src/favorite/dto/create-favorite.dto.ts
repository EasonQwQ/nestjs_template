import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { IsNotEmpty, IsDateString } from 'class-validator';

export class CreateFavoriteDto {
  @Expose()
  @ApiProperty()
  @IsNotEmpty()
  userId: number;

  @Expose()
  @ApiProperty()
  @IsNotEmpty()
  productId: number;

  @Expose()
  @ApiProperty()
  @IsNotEmpty()
  @IsDateString()
  favoriteTime: string;
}
