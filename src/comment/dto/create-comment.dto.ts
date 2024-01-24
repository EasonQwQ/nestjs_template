import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { IsNotEmpty, IsDateString } from 'class-validator';

export class CreateCommentDto {
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
  content: string;

  @Expose()
  @ApiProperty()
  @IsNotEmpty()
  @IsDateString()
  commentTime: string;
}
