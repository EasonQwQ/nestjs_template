import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { IsNotEmpty, IsDateString } from 'class-validator';

export class CreateChatDto {
  @Expose()
  @ApiProperty()
  @IsNotEmpty()
  buyerId: number;

  @Expose()
  @ApiProperty()
  @IsNotEmpty()
  sellerId: number;

  @Expose()
  @ApiProperty()
  @IsNotEmpty()
  productId: number;

  @Expose()
  @ApiProperty()
  @IsNotEmpty()
  messageContent: string;

  @Expose()
  @ApiProperty()
  @IsNotEmpty()
  senderId: number;

  @Expose()
  @ApiProperty()
  @IsNotEmpty()
  receiverId: number;

  @Expose()
  @ApiProperty()
  @IsNotEmpty()
  @IsDateString()
  sendTime: string;
}
