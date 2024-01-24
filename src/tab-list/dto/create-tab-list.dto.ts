import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { IsString, IsNumber } from 'class-validator';

export class CreateTabListDto {
  @IsString()
  @Expose()
  @ApiProperty({ description: 'Text of the tab list' })
  readonly text: string;

  @IsNumber()
  @Expose()
  @ApiProperty({ description: 'Key of the tab list' })
  readonly key: number;
}
